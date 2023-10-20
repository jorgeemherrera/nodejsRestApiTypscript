import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIfExist = await UserModel.findOne({ email });
    if (checkIfExist) return 'USER_ALREADY_EXIST';
    const passwordHash = await encryptPassword(password);
    const registerNewUser = await UserModel.create({ email, password: passwordHash, name });
    return registerNewUser;
}

const loginUser = async ({ email, password }: Auth) => {
    const checkIfUserExist = await UserModel.findOne({ email });
    if (!checkIfUserExist) return 'USER_NOT_EXIST';

    const passwordHash = checkIfUserExist.password; // encriptado de DB
    const passwordIsCorrect = await verifyPassword(password, passwordHash);

    if (!passwordIsCorrect) return 'INCORRECT_PASSWORD';
    console.log('checkIfExist', checkIfUserExist.email)
    const token = generateToken(checkIfUserExist.email);
    const dataUser = await {
        token,
        user: checkIfUserExist
    }
    return dataUser;
}

export { registerNewUser, loginUser }; 