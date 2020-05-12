import { compose, pipe } from "../../functions.js";
import { createSubject, map, onNotify, onSubscribe, switchAll, using, zipWithLatestFrom, takeFirst, dispatch, } from "../../observable.js";
import { none } from "../../option.js";
import { stream } from "../../streamable.js";
export const continue_ = (acc) => ({
    type: 1,
    acc,
});
export const done = (acc) => ({
    type: 2,
    acc,
});
const reduceImpl = (reducer, initial) => enumerable => using(scheduler => {
    const enumerator = stream(enumerable, scheduler);
    const accFeedback = createSubject();
    return [accFeedback, enumerator];
}, (accFeedback, enumerator) => pipe(enumerator, reducer(accFeedback), onNotify(ev => {
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
export const reduce = (reducer, initial) => reduceImpl(accObs => zipWithLatestFrom(accObs, (next, acc) => reducer(acc, next)), initial);
export const reduceAsync = (reducer, initial) => reduceImpl(accObs => compose(zipWithLatestFrom(accObs, (next, acc) => pipe(reducer(acc, next), takeFirst())), switchAll()), initial);
