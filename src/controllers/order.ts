import { Request, Response, request } from "express"
import { handleHttp } from "../utils/error.handle"
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

// CONTROLLER: SOLO DEBE DE ENTERARSE DE LAS COSAS QUE VIENEN POR HTTP -> RECIBIR DATOS

const getOrders = (request: RequestExt, response: Response) => {
    try {
        response.send({
            data: "ESTO LO VEN SOLO LAS PERSONAS CON SESSION DE JWT",
            user: request.user
        })
    } catch (error) {
        handleHttp(response, 'ERROR_GET_ORDERS');
    }
}


export { getOrders }