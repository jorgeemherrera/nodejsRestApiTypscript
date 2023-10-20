import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

/* Es el manejador de las rutas
Intepretar, poder crear los GET, POST, DELETE, PUT */
const router = Router();

/* 
    * http://localhost:3002 [GET]
    * argumento: Ruta
    * argumento: funcion (request: <T>, response<T>)
    * req es la peticion y respuesta son del tipo response
*/
router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

export { router };
