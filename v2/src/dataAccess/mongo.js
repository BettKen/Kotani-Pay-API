import * as mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = process.env.KOTANI_DB_URL
const dbName = process.env.KOTANI_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true })


export async function makeDb () {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}

