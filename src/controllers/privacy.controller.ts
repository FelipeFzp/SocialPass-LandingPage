import { Request, Response, Router } from "express";

const PrivacyController = Router();

PrivacyController.get('/', async (req: Request, res: Response) => {
    res.render('privacy/view-privacy');
});

export { PrivacyController };