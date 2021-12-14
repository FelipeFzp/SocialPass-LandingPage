require('dotenv').config();

import "reflect-metadata";
import * as express from 'express';
import * as cors from 'cors';
import { routes } from './src/routes';
import { CONFIG } from './src/config';
import { onError } from "./src/common/functions/on-error";
import { DateTime } from 'luxon';

console.log('Initializing...');

const app = express();

app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', `${process.cwd()}/src/views`);

app.use(express.static(`${process.cwd()}/src/public`, {
    lastModified: true,
    etag: false
}));

DateTime.local().setZone('America/Sao_Paulo');

app.use(routes);

app.use(onError);

app.listen(CONFIG.PORT, CONFIG.HOST, () => {
    console.log(`Running on http://${CONFIG.HOST}:${CONFIG.PORT}`);
});