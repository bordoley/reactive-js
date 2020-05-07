import { pipe } from "../../functions.js";
import { zip } from "./zip.js";
import { createSubject } from "./createSubject.js";
import { concatAll, concatMap } from "./mergeAll.js";
import { compute } from "./compute.js";
import { skipFirst } from "./skipFirst.js";
import { switchAll } from "./switchAll.js";
import { withLatestFrom } from "./withLatestFrom.js";
import { map } from "./map.js";
import { publish } from "./publish.js";
import { takeLast } from "./takeLast.js";
import { share } from "./share.js";
import { concat } from "./concat.js";
import { onNotify } from "./onNotify.js";
import { subscribe } from "./subscribe.js";
const subscribeSwitchingMode = (subscriber, src, scanner, initialValue) => {
    const accFeedbackStream = createSubject(1);
    subscriber.add(accFeedbackStream);
    subscriber.add(pipe(concat(compute(initialValue), pipe(src, withLatestFrom(accFeedbackStream, (next, acc) => scanner(acc, next)), switchAll())), onNotify(next => accFeedbackStream.dispatch(next)), subscribe(subscriber)));
    pipe(accFeedbackStream, skipFirst()).subscribe(subscriber);
};
const subscribeQueingMode = (subscriber, src, scanner, initialValue) => {
    const createGenerator = (next) => (acc) => scanner(acc, next);
    const accFeedbackStream = createSubject();
    const generatorStream = pipe(src, map(createGenerator));
    const acc = pipe(zip([generatorStream, accFeedbackStream], (generateNext, acc) => pipe(generateNext(acc), share(subscriber))), publish(subscriber));
    subscriber.add(pipe(concat(compute(initialValue), pipe(acc, concatMap(takeLast()))), onNotify(next => accFeedbackStream.dispatch(next)), subscribe(subscriber)));
    pipe(acc, concatAll()).subscribe(subscriber);
    subscriber.add(acc).add(accFeedbackStream);
};
class ScanAsyncObservable {
    constructor(src, scanner, initialValue, mode) {
        this.src = src;
        this.scanner = scanner;
        this.initialValue = initialValue;
        this.mode = mode;
        this.isSynchronous = false;
    }
    subscribe(subscriber) {
        const src = this.src;
        const scanner = this.scanner;
        const initialValue = this.initialValue;
        switch (this.mode) {
            case 1:
                return subscribeSwitchingMode(subscriber, src, scanner, initialValue);
            case 2:
                return subscribeQueingMode(subscriber, src, scanner, initialValue);
        }
    }
}
export const scanAsync = (scanner, initialValue, mode = 2) => observable => new ScanAsyncObservable(observable, scanner, initialValue, mode);
