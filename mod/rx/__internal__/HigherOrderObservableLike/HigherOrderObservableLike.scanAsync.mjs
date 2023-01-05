/// <reference types="./HigherOrderObservableLike.scanAsync.d.ts" />
import { pipe } from '../../../functions.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import ObservableLike__forEach from '../ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__onSubscribe from '../ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__switchAll from '../ObservableLike/ObservableLike.switchAll.mjs';
import ObservableLike__takeFirst from '../ObservableLike/ObservableLike.takeFirst.mjs';
import ObservableLike__zipWithLatestFrom from '../ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import ReactiveContainerLike__sinkInto from '../ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import SubjectLike__create from '../SubjectLike/SubjectLike.create.mjs';
import SubjectLike__publish from '../SubjectLike/SubjectLike.publish.mjs';
import SubjectLike__publishTo from '../SubjectLike/SubjectLike.publishTo.mjs';

const HigherOrderObservableLike__scanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(SubjectLike__create(), DisposableLike__addTo(observer));
            pipe(observable, ObservableLike__zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), ObservableLike__takeFirst())), ObservableLike__switchAll(), ObservableLike__forEach(SubjectLike__publishTo(accFeedbackStream)), ObservableLike__onSubscribe(() => pipe(accFeedbackStream, SubjectLike__publish(initialValue()))), ReactiveContainerLike__sinkInto(observer));
        };
        return createObservable(onSink);
    };
};

export { HigherOrderObservableLike__scanAsync as default };
