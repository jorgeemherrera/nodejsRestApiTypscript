import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage.service";
import { handleHttp } from "../utils/error.handle";

const getFile = async (request: RequestExt, response: Response) => {
  try {
    const { user, file } = request;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const responseRegister = await registerUpload(dataToRegister);
    response.send(responseRegister);
  } catch (e) {
    handleHttp(response, "ERROR_GET_FILE");
  }
};

export { getFile };