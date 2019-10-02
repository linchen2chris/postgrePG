// import "reflect-metadata";
import Koa from "koa";
import { createConnection } from "typeorm";
import { ormconfig } from "../ormconfig";

createConnection(ormconfig);

const app = new Koa();

const port = Number(process.env.PORT) || 4005;
app.listen({ port }, () => {
	console.log(`🏆 Server ready at http://localhost:${port}`);
});
