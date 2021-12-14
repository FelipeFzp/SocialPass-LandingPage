import { Request, Response, Router } from "express";

const SupportController = Router();

SupportController.get('/', async (req: Request, res: Response) => {
    res.render('support/view-support', {
        name: 'Suporte XPass'
    });
});

export { SupportController };