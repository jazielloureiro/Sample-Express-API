import { Request, Response } from 'express';
import User from '../entities/user';
import userService from '../services/userService';
import userRepository from '../repositories/userRepository';

const userController = {
    addUser(req: Request, res: Response) {
        const user = userRepository.create(req.body as User);

        userService.addUser(user).then(() => res.status(201).send());
    },

    login(req: Request, res: Response) {
        const user = userRepository.create(req.body as User);

        userService
            .login(user)
            .then((token) => res.status(200).send({ token }))
            .catch((error) => res.status(400).send({ error }));
    }
};

export default userController;
