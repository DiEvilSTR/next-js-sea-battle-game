import { model, models } from 'mongoose';

import { Schema } from './Schema';

const GameSessionRecordSchema = new Schema({
    sessionId: {
        type: Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    playerTwoId: {
        type: Schema.Types.ObjectId,
        ref: 'UserProfile'
    },
    matchResult: {
        /* Specify the result of the match
        1: playerOne wins
        2: playerTwo wins
        3: draw
        */
        type: Number,
        enum: [1, 2, 3]
    }
});

const MatchRecord = models.MatchRecord || model('MatchRecord', MatchRecordSchema);

export default MatchRecord;