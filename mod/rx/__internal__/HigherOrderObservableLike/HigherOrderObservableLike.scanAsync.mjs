/// <reference types="./HigherOrderObservableLike.scanAsync.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import { sinkInto } from '../../ReactiveContainerLike.mjs';
import { publishTo, publish } from '../../SubjectLike.mjs';
import ObservableLike__forEach from '../ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__onSubscribe from '../ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__switchAll from '../ObservableLike/ObservableLike.switchAll.mjs';
import ObservableLike__takeFirst from '../ObservableLike/ObservableLike.takeFirst.mjs';
import ObservableLike__zipWithLatestFrom from '../ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import SubjectLike__create from '../SubjectLike/SubjectLike.create.mjs';

const HigherOrderObservableLike__scanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(SubjectLike__create(), DisposableLike__addTo(observer));
            pipe(observable, ObservableLike__zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), ObservableLike__takeFirst())), ObservableLike__switchAll(), ObservableLike__forEach(publishTo(accFeedbackStream)), ObservableLike__onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))), sinkInto(observer));
        };
        return createObservable(onSink);
    };
};

export { HigherOrderObservableLike__scanAsync as default };
