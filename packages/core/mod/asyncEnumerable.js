import { fromIterable as fromIterableEnumerable, } from "./enumerable.js";
import { compose, pipe, returns } from "./functions.js";
import { compute, map, merge, onNotify, switchAll, takeLast, using, onSubscribe, empty, withLatestFrom, takeFirst, scan, takeWhile, } from "./observable.js";
import { onNotify as onNotifyStream, identity, createStreamable, } from "./streamable.js";
const createAcc = (enumerator) => {
    const onNotifyDispatch = (_) => {
        enumerator.dispatch();
    };
    return pipe(identity(), onNotifyStream(onNotifyDispatch));
};
const createResources = (enumerator) => (scheduler) => [
    createAcc(enumerator).stream(scheduler),
    identity().stream(scheduler),
];
const createFactory = (withLatestFrom, initial, enumerator) => (request, src) => {
    const mapReducerRequestToAcc = map(({ acc }) => acc);
    enumerator.add(_ => {
        src.dispose();
    });
    const notifySrc = (next) => {
        if (next.type === 1) {
            request.dispatch(next);
        }
        else {
            src.dispatch(empty());
        }
    };
    return pipe(merge(compute()(() => ({
        type: 1,
        acc: initial(),
    })), pipe(src, switchAll(), withLatestFrom(mapReducerRequestToAcc(request)))), onNotify(notifySrc), mapReducerRequestToAcc, takeLast(), onSubscribe(() => {
        src.dispatch(enumerator);
    }));
};
const consumeImpl = (withLatestFrom, initial) => enumerator => using(createResources(enumerator), createFactory(withLatestFrom, initial, enumerator));
const consume = (reducer, initial) => {
    const withLatestSelector = (next, acc) => reducer(acc, next);
    return consumeImpl(acc => withLatestFrom(acc, withLatestSelector), initial);
};
const consumeAsync = (reducer, initial) => {
    const withLatestSelector = (next, acc) => pipe(reducer(acc, next), takeFirst());
    return consumeImpl(acc => compose(withLatestFrom(acc, withLatestSelector), switchAll()), initial);
};
export const reduce = (reducer, initial) => enumerable => using(scheduler => enumerable.stream(scheduler), consume(reducer, initial));
export const reduceAsync = (reducer, initial) => enumerable => using(scheduler => enumerable.stream(scheduler), consumeAsync(reducer, initial));
const fromArrayScanner = (acc, _) => acc + 1;
export const fromArray = (values) => {
    const operator = compose(scan(fromArrayScanner, returns(-1)), map((i) => values[i]), takeFirst(values.length));
    return createStreamable(operator);
};
export const fromIterable = (iterable) => {
    const enumerable = fromIterableEnumerable(iterable);
    const operator = (obs) => {
        return pipe(obs, withLatestFrom(compute()(() => enumerable.enumerate()), (_, enumerator) => enumerator), onNotify(enumerator => enumerator.move()), takeWhile(enumerator => enumerator.hasCurrent), map(enumerator => enumerator.current));
    };
    return createStreamable(operator);
};
const generateScanner = (generator) => (acc, _) => generator(acc);
export const generate = (generator, initialValue) => createStreamable(scan(generateScanner(generator), initialValue));
