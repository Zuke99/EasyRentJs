import services from '../services';

const defaultArgs = { services };

const userController = registerUser({ ...defaultArgs });

export default Object.freeze({
    userController
});