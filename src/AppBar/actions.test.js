import {generateChatId} from "./actions";

describe('Tests', () => {

    it ('test reducer', () => {

        expect(generateChatId('heY2nmnCCxgkZRUhPkpCdssbOSt2','DU70o9nFEqTb9cVKc1FBRzn0Tde2')).toEqual('heY2nmnCCxgkZRUhPkpCdssbOSt2-DU70o9nFEqTb9cVKc1FBRzn0Tde2');

    })

});