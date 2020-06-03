import { done, notify, consume, consumeAsync, fromArray, fromIterable, generate, } from "./asyncEnumerable.js";
import { addTeardown } from "./disposable.js";
import { test, describe, expectEquals, expectNone, expectArrayEquals, } from "./experimental/testing.js";
import { pipe, increment, returns, defer } from "./functions.js";
import { fromValue, subscribe, onNotify, toRunnable, dispatch, } from "./observable.js";
import { none } from "./option.js";
import { last } from "./runnable.js";
import { createVirtualTimeScheduler } from "./scheduler.js";
import { stream } from "./streamable.js";
export const tests = describe("async-enumerable", test("consume", () => {
    const enumerable = fromIterable()([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => notify(acc + next), returns(0)), toRunnable(), last, expectEquals(21));
    pipe(enumerable, consume((acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => fromValue()(acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3))), test("when the consumer never terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => pipe(acc + next, notify, fromValue()), returns(0)), toRunnable(), last, expectEquals(21)))), test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray());
    const enumerator = pipe(enumerable, stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}), test("fromIterable", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(fromIterable()([1, 2, 3, 4, 5, 6]), stream(scheduler));
    const result = [];
    let error = none;
    const subscription = pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    addTeardown(subscription, e => {
        error = e;
    });
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
    const enumerator = pipe(generate(increment, returns(0)), stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    dispatch(enumerator, none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}));
