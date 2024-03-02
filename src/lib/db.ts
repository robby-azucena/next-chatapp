import {Redis, RedisConfigNodejs} from '@upstash/redis'


const requester:RedisConfigNodejs = {
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTAH_REDIS_REST_TOKEN!
};

export const db = new Redis(requester)