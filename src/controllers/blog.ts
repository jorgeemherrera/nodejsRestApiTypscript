import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

// CONTROLLER: SOLO DEBE DE ENTERARSE DE LAS COSAS QUE VIENEN POR HTTP -> RECIBIR DATOS
const getBlog = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, 'ERROR_GET_BLOG');
    }
}

const getBlogs = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, 'ERROR_GET_BLOGS');
    }
}

const updateBlog = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, 'ERROR_UPDATE_BLOG');
    }
}

const postBlog = ({ body }: Request, response: Response) => {
    try {
        response.send(body)
    } catch (error) {
        handleHttp(response, 'ERROR_POST_BLOG');
    }
}

const deleteBlog = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, 'ERROR_DELETE_BLOG');
    }
}

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog }