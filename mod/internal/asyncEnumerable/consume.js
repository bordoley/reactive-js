import { compose, pipe, flip, } from "../../functions.js";
import { createSubject, map, onNotify, onSubscribe, switchAll, using, zipWithLatestFrom, takeFirst, dispatch, } from "../../observable.js";
import { none } from "../../option.js";
import { stream } from "../../streamable.js";
export const notify = (acc) => ({
    type: 1,
    acc,
});
export const done = (acc) => ({
    type: 2,
    acc,
});
const consumeImpl = (consumer, initial) => enumerable => using(scheduler => {
    const enumerator = pipe(enumerable, stream(scheduler));
    const accFeedback = createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => pipe(enumerator, consumer(accFeedback), onNotify(ev => {
    switch (ev.type) {
        case 1:
            dispatch(accFeedback, ev.acc);
            dispatch(enumerator, none);
            break;
    }
}), map(ev => ev.acc), onSubscribe(() => {
    dispatch(accFeedback, initial());
    dispatch(enumerator, none);
})));
export const consume = (consumer, initial) => consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);
export const consumeAsync = (consumer, initial) => consumeImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(consumer(acc, next), takeFirst())), switchAll()), initial);
