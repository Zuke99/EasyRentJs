export default ({ mongoose, config }) => {
    console.log('/db/connection');
    return () => {
        return new Promise((resolve, reject) => {
            mongoose.set('strictQuery', false);
            mongoose
                .connect(
                    process.env.MONGODB_URI
                )
                .then(_res => resolve())
                .catch(_err => {
                    console.log(_err);
                    reject(_err);
                });

            mongoose.connection.on('connected', () => {
                console.log('Database connection established.');
                resolve();
            })

            mongoose.connection.on('disconnected', () => {
                console.info('Database connection closed.');
                reject();
            });

            mongoose.connection.on('error', () => {
                console.log('Database connection error.');
                reject();
            });
        });
    };
};