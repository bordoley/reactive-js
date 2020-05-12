import { done, continue_, consume, consumeAsync, fromArray, fromIterable, generate, } from "../lib/asyncEnumerable.js";
import { addDisposableOrTeardown } from "../lib/disposable.js";
import { pipe, increment, returns, defer } from "../lib/functions.js";
import { fromValue, subscribe, onNotify, toValue, dispatch, } from "../lib/observable.js";
import { none } from "../lib/option.js";
import { createVirtualTimeScheduler } from "../lib/scheduler.js";
import { test, describe, expectEquals, expectNone, expectArrayEquals, } from "../lib/internal/testing.js";
import { stream } from "../lib/streamable.js";
export const tests = describe("async-enumerable", test("consume", () => {
    const enumerable = fromIterable([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => continue_(acc + next), returns(0)), toValue(), expectEquals(21));
    pipe(enumerable, consume((acc, next) => (acc > 0 ? done(acc + next) : continue_(acc + next)), returns(0)), toValue(), expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", defer([1, 2, 3, 4, 5, 6], fromIterable, consumeAsync((acc, next) => fromValue()(acc > 0 ? done(acc + next) : continue_(acc + next)), returns(0)), toValue(), expectEquals(3))), test("when the consumer never terminates", defer([1, 2, 3, 4, 5, 6], fromIterable, consumeAsync((acc, next) => pipe(acc + next, continue_, fromValue()), returns(0)), toValue(), expectEquals(21)))), test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = stream(fromArray([1, 2, 3, 4, 5, 6]), scheduler);
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = stream(fromIterable([1, 2, 3, 4, 5, 6]), scheduler);
    const result = [];
    let error = none;
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler), addDisposableOrTeardown(e => {
        error = e;
    }));
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
}), test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = stream(generate(increment, returns(0)), scheduler);
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}));
