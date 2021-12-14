import { NextFunction, Request, Response, Router } from "express";
import axios from 'axios';
import { CONFIG } from "../config";

const UsersCardsController = Router();

UsersCardsController.get('/:nickname', async (req: Request, res: Response, next: NextFunction) => {
    try {

        let userCard: any;
        userCard = (await axios.get(`${CONFIG.API_URL}/users/nickname/${req.params.nickname}`)).data;


        let clientAddress = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'];
        if (!clientAddress)
        {
            clientAddress = req.connection.remoteAddress
        }

        const viewCount = await axios.patch(`${CONFIG.API_URL}/cards/registerView`, {
            cardId: userCard.card.id,
            clientAddress: clientAddress
        });

        userCard.card.viewsCount = viewCount.data;

        res.render('user-card/view-user-card', {
            userCard
        });

    } catch (error) {
        next(error);
    }
});

export { UsersCardsController };