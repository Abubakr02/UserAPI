const app = require('./app');
const { sequelize, User } = require('./db');

app.listen(4000, () => {
    console.log("server listening on port", 4000);
});