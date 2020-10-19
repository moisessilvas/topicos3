import mongoose from "mongoose";

import conn from "../config/dbConnection";

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {
        this.mongoConnection = mongoose.connect(conn.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        });
    }
}

export default new Database();
