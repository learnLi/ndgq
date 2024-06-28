import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import testRoutes from './router/testRouters';

const app = express();
let port = process.env.PORT || 3000;
if (typeof port !== 'number') {
    port = parseInt(port);
}
const host = process.env.HOST || '0.0.0.0';

// 使用 cors 中间件处理跨域请求
app.use(cors());

app.use('/test', testRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});