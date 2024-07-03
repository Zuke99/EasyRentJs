import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { openConnection } from './db';
import routes from './routes';

const createApp = () => {
    let app = express(), create, start;

    create = config => {
        app.use(cors());
        app.set('port', config.port);
        app.set('hostname', config.hostname);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        app.get('/', function (_req, _res) {
            _res.sendStatus(200);
        });
        
        routes.init(app);
    }

    start = () => {
        const hostname = app.get('hostname');
        const port = app.get('port');

        openConnection()
            .then(() => {
                app.listen(port, () => {
                    console.log(`Server is up and running on port number ${port}, hostname ${hostname}`);
                });
            })
            .catch(err => {
                console.log(`Error establishing database connectivity: ${err}`);
            });
    };

    return {
        create: create,
        start: start
    };
};

export default createApp;