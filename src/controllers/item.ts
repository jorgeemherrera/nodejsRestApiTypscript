import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCarById, updateCar, deleteCar } from "../services/item.service";

// CONTROLLER: SOLO DEBE DE ENTERARSE DE LAS COSAS QUE VIENEN POR HTTP -> RECIBIR DATOS
const getItem = async ({ params }: Request, response: Response) => {
    try {
        const { id } = params;
        const responseItemById = await getCarById(id)
        const data = responseItemById ? responseItemById : 'ITEM_NOT_FOUND';
        response.send(data);
    } catch (error) {
        handleHttp(response, 'ERROR_GET_ITEM');
    }
}

const getItems = async (request: Request, response: Response) => {
    try {
        const responseItems = await getCars();
        response.send(responseItems)
    } catch (error) {
        handleHttp(response, 'ERROR_GET_ITEMS');
    }
}

const updateItem = async ({ params, body }: Request, response: Response) => {
    try {
        const { id } = params;
        const responseUpdateItemById = await updateCar(id, body)
        response.send(responseUpdateItemById);
    } catch (error) {
        handleHttp(response, 'ERROR_UPDATE_ITEM');
    }
}

const postItem = async ({ body }: Request, response: Response) => {
    try {
        const responseItem = await insertCar(body)
        response.send(responseItem)
    } catch (error) {
        handleHttp(response, 'ERROR_POST_ITEM', error);
    }
}

const deleteItem = async ({ params }: Request, response: Response) => {
    try {
        const { id } = params;
        const responseDeleteItemById = await deleteCar(id)
        response.send(responseDeleteItemById);
    } catch (error) {
        handleHttp(response, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }