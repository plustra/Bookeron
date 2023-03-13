import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    res.status(501).json({ message: 'Not Implemented' });
});

userRouter.get('/:guid', (req, res) => {
    res.status(501).json({ message: 'Not Implemented' });
});

userRouter.post('/', (req, res) => {
    res.status(501).json({ message: 'Not Implemented' });
});

userRouter.put('/:guid', (req, res) => {
    res.status(501).json({ message: 'Not Implemented' });
});

userRouter.delete('/:guid', (req, res) => {
    res.status(501).json({ message: 'Not Implemented' });
});

export const path = '/users';
export default userRouter;
