import { Router } from "express";
import { readdirSync } from 'fs';

/* 
    __dirname: nos va a devolver la ruta del directorio
*/
const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    return fileName.replace('.ts', ''); // .ts es el extension que tiene los archivos typescript, asi que lo quitamos para poder usar
}

/*
    Se va a encargar de leer cuantas archivos en x directorios va a leer 
    Cargador de rutas dinamicas
*/
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log('se esta cargando esta ruta:', cleanName)
            router.use(`/${cleanName}`, moduleRouter.router)
        });
    }
})

export { router };