/// <reference types="./asyncEnumerable.d.ts" />
import { pipe, flip, compose } from './functions.mjs';
import { using, createSubject, onNotify, map, onSubscribe, zipWithLatestFrom, takeFirst, switchAll } from './observable.mjs';
import { none } from './option.mjs';
import { stream } from './streamable.mjs';

const notify = (acc) => ({
    type: "notify",
    acc,
});
const done = (acc) => ({
    type: "done",
    acc,
});
const consumeImpl = (consumer, initial) => enumerable => using(scheduler => {
    const enumerator = pipe(enumerable, stream(scheduler));
    const accFeedback = createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => pipe(enumerator, consumer(accFeedback), onNotify(ev => {
    switch (ev.type) {
        case "notify":
            accFeedback.dispatch(ev.acc);
            enumerator.dispatch(none);
            break;
    }
}), map(ev => ev.acc), onSubscribe(() => {
    accFeedback.dispatch(initial());
    enumerator.dispatch(none);
})));
const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);

export { consume, consumeAsync, done, notify };
