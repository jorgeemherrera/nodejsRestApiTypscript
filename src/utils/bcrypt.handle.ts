import { hash, compare } from 'bcryptjs'

const encryptPassword = async (passwordPlane: string) => {
    const passwordHash = await hash(passwordPlane, 8);
    return passwordHash;
}

const verifyPassword = async (passwordPlane: string, passwordHash: string) => {
    const isCorrect = await compare(passwordPlane, passwordHash);
    return isCorrect;
}

export { encryptPassword, verifyPassword }