import { sign, verify } from 'jsonwebtoken';
const JWT_SECRET =  process.env.JWT_SECRET || 'token.0101010101';
const generateToken = (id: string) => {
    const jwtSign = sign({id}, JWT_SECRET, { expiresIn: "2h"});
    return jwtSign;
};

const verifyToken = (jwt: string) => {
   const isOk = verify(jwt, JWT_SECRET);
   return isOk;
}

export { generateToken, verifyToken }; 