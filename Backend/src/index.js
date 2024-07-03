import createApp from "./app";
import { appConfig } from './configs'
import 'dotenv/config'

const app = createApp();
app.create(appConfig);
app.start();