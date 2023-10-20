import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";
const registerController = async ({ body }: Request, response: Response) => {
    const responseUser = await registerNewUser(body);
    response.send(responseUser);
}

const LoginController = async ({ body }: Request, response: Response) => {
    const { email, password } = body;
    const responseLoginUser = await loginUser({ email, password });
    if (responseLoginUser === 'INCORRECT_PASSWORD') {
        response.status(403);
        response.send(responseLoginUser);
    } else {
        response.send(responseLoginUser);
    }
}

export { LoginController, registerController };