import { Schema as MongoSchema } from 'mongoose';

export class Schema extends MongoSchema {
    constructor(definition, options) {
        super(definition, {
            ...options,
            timestamps: options.timestamps !== false,
        });
    }
}
