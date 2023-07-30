import redis from "redis";

let redisClient;

export const connectToRedis = () => {
    if (redisClient) {
        console.log("Redis is already connected");
    return;
    }

    try {
        redisClient = redis.createClient(process.env.REDIS_URL);
        console.log("Redis is connected");
    } catch (error) {
        console.error("Redis connection failed:", error);
    }
};

export const getRedisClient = () => {
    if (!redisClient) {
        throw new Error("Redis is not connected");
    }

    return redisClient;
};

// Optional: If you want to handle disconnection gracefully
export const closeRedisConnection = () => {
    if (redisClient) {
        redisClient.quit();
        redisClient = null;
        console.log("Redis connection closed");
    }
};