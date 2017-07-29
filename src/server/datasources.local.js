module.exports = {
  LocalPostgreSQL: {
    host: (process.env.DB_SERVER || 'localhost:').split(':')[0],
    port: parseInt((process.env.DB_SERVER || ':5432').split(':')[1], 10),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
};
