require('dotenv').config()
import * as express from 'express';
import * as http from 'http';
class Server {
    private app: express.Express;
    private server: http.Server;
    protected appPort = parseInt(process.env.PORT) || 3000;
    up = async(): Promise<any> => {
        this.app = express();
        // Application Routes
        const route = require('./route');
        this.app.use("/", route.default(this.app, express))
        this.app.use(express.json({}))
        this.app.use(express.urlencoded({ extended: true }))

        console.log("Starting Server...");
        this.server = this.app.listen(this.appPort, () => {
            console.log(`Server Started @ ${this.appPort}`);
        });
        this.handleException();
        return this.server;
    }

    shutdown = async() =>{
        console.log("Closing Server...");
        if(this.server){
            this.server.close()
        }
        return true;
    }

    protected readonly handleException = ()=>{
        process.on("SIGINT", this.shutdown);
        process.on("SIGTERM", this.shutdown);
    }
}
export {Server}