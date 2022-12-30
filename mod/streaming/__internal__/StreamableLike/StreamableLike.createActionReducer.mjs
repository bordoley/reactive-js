/// <reference types="./StreamableLike.createActionReducer.d.ts" />
import { concatWith } from '../../../containers/ContainerLike.mjs';
import { toObservable } from '../../../containers/ReadonlyArrayLike.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { E as create, B as scan, U as mergeT, K as distinctUntilChanged } from '../../../ObservableLike-ca8b1474.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import createLifted from './StreamableLike.createLifted.mjs';

const createActionReducer = (reducer, initialState, options) => createLifted(obs => create(observer => {
    const acc = initialState();
    pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, pipe([acc], toObservable())), distinctUntilChanged(options), sinkInto(observer));
}));

export { createActionReducer as default };
