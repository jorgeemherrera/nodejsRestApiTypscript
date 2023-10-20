import { NextFunction, Request, Response } from "express";

/**
 * 
 * @param request objeto que nos va a ayudar a entender por qué navegador se esta ultiizando, que viene en el encabezado 
 * @param response nos ayuda a responder a una data o una redireccion [200, 500, 400]
 * @param next argumento para continuar o no continuar
 */
const logMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const header = request.headers;  
    const userAgent = header["user-agent"];
    console.log("user-agent", userAgent);
    next();
}

export { logMiddleware };