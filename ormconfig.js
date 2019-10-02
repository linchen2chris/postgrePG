module.exports = {
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "postgres",
	synchronize: true,
	logging: false,
	entities: ["src/entity/**/*.js"],
	factories: ["src/factory/**/*.js"],
	migrations: ["src/migration/**/*.js"],
	cli: {
		migrationsDir: "src/migration",
	},
};
