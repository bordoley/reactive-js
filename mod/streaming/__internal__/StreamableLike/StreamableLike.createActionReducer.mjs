/// <reference types="./StreamableLike.createActionReducer.d.ts" />
import ContainerLike__concatWith from '../../../containers/__internal__/ContainerLike/ContainerLike.concatWith.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { pipe, returns } from '../../../functions.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__distinctUntilChanged from '../../../rx/__internal__/ObservableLike/ObservableLike.distinctUntilChanged.mjs';
import ObservableLike__mergeT from '../../../rx/__internal__/ObservableLike/ObservableLike.mergeT.mjs';
import ObservableLike__scan from '../../../rx/__internal__/ObservableLike/ObservableLike.scan.mjs';
import ReactiveContainerLike__sinkInto from '../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import StreamableLike__createLifted from './StreamableLike.createLifted.mjs';

const StreamableLike__createActionReducer = (reducer, initialState, options) => StreamableLike__createLifted(obs => ObservableLike__create(observer => {
    const acc = initialState();
    pipe(obs, ObservableLike__scan(reducer, returns(acc)), ContainerLike__concatWith(ObservableLike__mergeT, pipe([acc], ReadonlyArrayLike__toRunnableObservable())), ObservableLike__distinctUntilChanged(options), ReactiveContainerLike__sinkInto(observer));
}));

export { StreamableLike__createActionReducer as default };
