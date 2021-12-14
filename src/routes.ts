import { Router } from "express";
import { HomeController } from "./controllers/home.controller";
import { PrivacyController } from "./controllers/privacy.controller";
import { SupportController } from "./controllers/support.controller";
import { UsersCardsController } from "./controllers/user-card.controller";

const routes = Router();

routes.use('/', HomeController);
routes.use('/privacy', PrivacyController);
routes.use('/support', SupportController);
routes.use('/', UsersCardsController);

export { routes };