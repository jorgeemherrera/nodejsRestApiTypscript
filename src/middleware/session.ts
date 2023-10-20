import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

/**
 * 
 * @param request 
 * @param response 
 * @param next 
 */
const checkJwt = (request: RequestExt, response: Response, next: NextFunction) => {
    try {
        const jwtByUser = request.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop() // ['Bearer', '11111']
        const isUser = verifyToken(`${jwt}`) as { id: string };
        console.log('isUser', isUser)
        if (!isUser) {
            response.status(401);
            response.send('JWT_INVALID')
        } else {
            request.user = isUser
            console.log({ jwtByUser })
            next();
        }
    } catch (error) {
        response.status(400);
        response.send('SESSION_NOT_VALID');
    }
}

export { checkJwt }