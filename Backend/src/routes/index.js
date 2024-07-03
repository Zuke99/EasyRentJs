import userRouter from './userRoute';

const init = app => {
    app.all('*', function (req, res, next) {
        console.log(`Request was made to: ${req.method} ${req.originalUrl}`);
        return next();
    });

    app.use('/er', userRouter);
};

export default {
    init: init
};