import {generateChatId} from "./actions";

describe('Tests', () => {

    it ('test reducer', () => {
        const uidA = 'heY2nmnCCxgkZRUhPkpCdssbOSt2';
        const uidB = 'DU70o9nFEqTb9cVKc1FBRzn0Tde2';

        expect(generateChatId(uidA,uidB)).toEqual('heY2nmnCCxgkZRUhPkpCdssbOSt2-DU70o9nFEqTb9cVKc1FBRzn0Tde2');

    })

});