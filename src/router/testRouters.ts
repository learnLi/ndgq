// router/testRoutes.ts

import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Test route is working!');
});

router.get('/info', (req: Request, res: Response) => {
    res.json({ message: 'Test route information' });
});

export default router;