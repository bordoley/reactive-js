/// <reference types="./StreamableLike.createActionReducer.d.ts" />
import { concatWith } from '../../../containers/ContainerLike.mjs';
import { toObservable } from '../../../containers/ReadonlyArrayLike.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { create, scan, mergeT, distinctUntilChanged } from '../../../rx/ObservableLike.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import StreamableLike__createLifted from './StreamableLike.createLifted.mjs';

const StreamableLike__createActionReducer = (reducer, initialState, options) => StreamableLike__createLifted(obs => create(observer => {
    const acc = initialState();
    pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, pipe([acc], toObservable())), distinctUntilChanged(options), sinkInto(observer));
}));

export { StreamableLike__createActionReducer as default };
