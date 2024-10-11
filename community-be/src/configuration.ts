export default () => ({
  app: {
    name: process.env.APPNAME,
    version: process.env.APPVERSION,
  },
  mysql: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});
