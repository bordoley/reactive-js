/// <reference types="./AsyncIterable.repeatOrRetry.d.ts" />

import { error, newInstance, none, } from "../../functions.js";
class RepeatOrRetryAsyncIterable {
    iterable;
    shouldRepeat;
    constructor(iterable, shouldRepeat) {
        this.iterable = iterable;
        this.shouldRepeat = shouldRepeat;
    }
    [Symbol.asyncIterator]() {
        const iter = this.iterable;
        const shouldRepeat = this.shouldRepeat;
        async function* foo() {
            let cnt = 0;
            let err = none;
            do {
                err = none;
                try {
                    for await (const next of iter) {
                        yield next;
                    }
                }
                catch (e) {
                    err = error(e);
                }
                cnt++;
            } while (shouldRepeat(cnt, err));
        }
        return foo();
    }
}
const AsyncIterable_repeatOrRetry = shouldRepeat => iterable => newInstance(RepeatOrRetryAsyncIterable, iterable, shouldRepeat);
export default AsyncIterable_repeatOrRetry;
