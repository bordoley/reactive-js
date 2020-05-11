import { createSubject, map, onNotify, onSubscribe, switchAll, using, zipWithLatestFrom, takeFirst, } from "../../observable.js";
import { compose, pipe } from "../../functions.js";
export const continue_ = (acc) => ({
    type: 1,
    acc,
});
export const done = (acc) => ({
    type: 2,
    acc,
});
const reduceImpl = (reducer, initial) => enumerable => using(scheduler => {
    const enumerator = enumerable.stream(scheduler);
    const accFeedback = createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => pipe(enumerator, reducer(accFeedback), onNotify(ev => {
    switch (ev.type) {
        case 1:
            accFeedback.dispatch(ev.acc);
            enumerator.dispatch();
            break;
    }
}), map(ev => ev.acc), onSubscribe(() => {
    accFeedback.dispatch(initial());
    enumerator.dispatch();
})));
export const reduce = (reducer, initial) => reduceImpl(accObs => zipWithLatestFrom(accObs, (next, acc) => reducer(acc, next)), initial);
export const reduceAsync = (reducer, initial) => reduceImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(reducer(acc, next), takeFirst())), switchAll()), initial);
