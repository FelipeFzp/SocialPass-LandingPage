import { Request, Response, Router } from "express";

const HomeController = Router();

HomeController.get('/', async (req: Request, res: Response) => {
    res.render('home/view-home', {
        name: 'X-Pass'
    });
});

export { HomeController };