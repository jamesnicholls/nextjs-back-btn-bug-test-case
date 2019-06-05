const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const expressApp = express();

        expressApp.get('/', (req, res) => {
            console.log('custom server');

            app.render(req, res, '/a', {
                testObject: {
                    type: 'info',
                    message: 'hello world',
                },
                testString: 'hello world',
            });
        });

        expressApp.get('/b', (req, res) => {
            app.render(req, res, 'b');
        });

        expressApp.get('*', (req, res) => {
            handle(req, res);
        });

        expressApp.listen(3000, () => console.log('> Ready on http://localhost:3000'));
    });