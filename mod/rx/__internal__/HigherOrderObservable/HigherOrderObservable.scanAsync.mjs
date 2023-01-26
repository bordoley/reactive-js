/// <reference types="./HigherOrderObservable.scanAsync.d.ts" />
import { pipe } from '../../../functions.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Observable$forEach from '../Observable/Observable.forEach.mjs';
import Observable$onSubscribe from '../Observable/Observable.onSubscribe.mjs';
import Observable$switchAll from '../Observable/Observable.switchAll.mjs';
import Observable$takeFirst from '../Observable/Observable.takeFirst.mjs';
import Observable$zipWithLatestFrom from '../Observable/Observable.zipWithLatestFrom.mjs';
import ReactiveContainer$sinkInto from '../ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Subject$create from '../Subject/Subject.create.mjs';
import Subject$publish from '../Subject/Subject.publish.mjs';
import Subject$publishTo from '../Subject/Subject.publishTo.mjs';

const HigherOrderObservable$scanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(Subject$create(), Disposable$addTo(observer));
            pipe(observable, Observable$zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), Observable$takeFirst())), Observable$switchAll(), Observable$forEach(Subject$publishTo(accFeedbackStream)), Observable$onSubscribe(() => pipe(accFeedbackStream, Subject$publish(initialValue()))), ReactiveContainer$sinkInto(observer));
        };
        return createObservable(onSink);
    };
};

export { HigherOrderObservable$scanAsync as default };
