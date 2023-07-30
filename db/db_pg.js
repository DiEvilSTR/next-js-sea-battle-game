import { Client } from "pg";

const client = new Client({
    connectionString: process.env.POSTGRES_URI, // The connection string for your PostgreSQL database
});

export const connectToDB = async () => {
    if (client._connected) {
        console.log("PostgreSQL is already connected");
    return;
    }

    try {
        await client.connect();
        console.log("PostgreSQL is connected");
    } catch (error) {
        console.error("PostgreSQL connection failed:", error);
    }
};

export default client;