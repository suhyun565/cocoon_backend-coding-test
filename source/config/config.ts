import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'suhyeon556';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'test1234';
const MONGO_HOST = process.env.MONGO_URL || 'cluster0.dicgw.mongodb.net';

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    option: MONGO_OPTIONS,
    url: 'mongodb+srv://suhyeon556:<password>@cluster0.dicgw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
};
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1339;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER
};

export default config;
