import userRouter from './userRoute';
import postRouter from './postRoute';

const init = app => {
    app.all('*', function (req, res, next) {
        console.log(`Request was made to: ${req.method} ${req.originalUrl}`);
        return next();
    });

    app.use('/er/user', userRouter);
    app.use('/er/post', postRouter);
};

export default {
    init: init
};