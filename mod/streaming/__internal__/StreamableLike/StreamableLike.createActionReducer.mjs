/// <reference types="./StreamableLike.createActionReducer.d.ts" />
import { concatWith } from '../../../containers/ContainerLike.mjs';
import { toObservable } from '../../../containers/ReadonlyArrayLike.mjs';
import { pipe, returns } from '../../../functions.mjs';
import { create, scan, mergeT, distinctUntilChanged } from '../../../rx/ObservableLike.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import createLifted from './StreamableLike.createLifted.mjs';

const createActionReducer = (reducer, initialState, options) => createLifted(obs => create(observer => {
    const acc = initialState();
    pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, pipe([acc], toObservable())), distinctUntilChanged(options), sinkInto(observer));
}));

export { createActionReducer as default };
