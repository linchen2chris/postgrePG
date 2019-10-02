// import "reflect-metadata";
import Koa from "koa";
import { createConnection } from "typeorm";
import { ormconfig } from "../ormconfig";
import Router from "koa-router";

createConnection(ormconfig);

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
	// ctx.router available
	ctx.body = "Hello World!";
});
const port = Number(process.env.PORT) || 4005;
app.use(router.routes()).listen({ port }, () => {
	console.log(`🏆 Server ready at http://localhost:${port}`);
});
