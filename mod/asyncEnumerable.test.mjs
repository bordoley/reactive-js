import { pipe, returns, defer, increment } from './functions.mjs';
import { none } from './option.mjs';
import { addTeardown } from './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import { last } from './runnable.mjs';
import './queues.mjs';
import { createVirtualTimeScheduler } from './scheduler.mjs';
import { toRunnable, fromValue, onNotify, subscribe } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { stream } from './streamable.mjs';
import { fromIterable, consume, notify, done, consumeAsync, fromArray, generate } from './asyncEnumerable.mjs';
import { describe, test, expectEquals, expectArrayEquals, expectNone } from './testing.mjs';

const tests = describe("async-enumerable", test("consume", () => {
    const enumerable = fromIterable()([1, 2, 3, 4, 5, 6]);
    pipe(enumerable, consume((acc, next) => notify(acc + next), returns(0)), toRunnable(), last, expectEquals(21));
    pipe(enumerable, consume((acc, next) => (acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3));
}), describe("consumeAsync", test("when the consumer early terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => fromValue()(acc > 0 ? done(acc + next) : notify(acc + next)), returns(0)), toRunnable(), last, expectEquals(3))), test("when the consumer never terminates", defer([1, 2, 3, 4, 5, 6], fromIterable(), consumeAsync((acc, next) => pipe(acc + next, notify, fromValue()), returns(0)), toRunnable(), last, expectEquals(21)))), test("fromArray", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerable = pipe([1, 2, 3, 4, 5, 6], fromArray());
    const enumerator = pipe(enumerable, stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
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
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3, 4, 5, 6]));
    pipe(error, expectNone);
}), test("generate", () => {
    const scheduler = createVirtualTimeScheduler();
    const enumerator = pipe(generate(increment, returns(0)), stream(scheduler));
    const result = [];
    pipe(enumerator, onNotify(x => result.push(x)), subscribe(scheduler));
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    enumerator.dispatch(none);
    scheduler.run();
    pipe(result, expectArrayEquals([1, 2, 3]));
}));

export { tests };
