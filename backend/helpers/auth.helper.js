import byscrypt  from 'bcryptjs';

export function verifyPassword(password, hashedPassword) {
    return byscrypt.compareSync(password, hashedPassword);
}