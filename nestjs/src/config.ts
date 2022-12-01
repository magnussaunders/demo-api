export default {
    mongo_connection_string: `mongodb://${process.env.mongo_db_username}:${process.env.mongo_db_password}@${process.env.mongo_db_host}:${process.env.mongo_db_port}/${process.env.mongo_db_db}?authMechanism=DEFAULT`
}