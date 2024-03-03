import randomstring from 'randomstring';
import insertUserModel from '../../models/users/insertUserModel.js';

// Función controladora final que crea un nuevo usuario.
const newUserController = async (req,res,next) => {
    try {

        const { username, email, password } = req.body;
        
        const registrationCode = randomstring.generate(30);

        await insertUserModel(username, email, password, registrationCode);

        res.send({
            status: 'ok',
            message: 'Usuario registrado. Verifique su cuenta mediante el email recibido'
        });
        
    } catch (error) {
        next(error);
    }
}

export default newUserController;