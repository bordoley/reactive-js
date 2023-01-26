/// <reference types="./Streamable.createActionReducer.d.ts" />
import Container$concatWith from '../../../containers/__internal__/Container/Container.concatWith.mjs';
import ReadonlyArray$toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, returns } from '../../../functions.mjs';
import Observable$create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable$distinctUntilChanged from '../../../rx/__internal__/Observable/Observable.distinctUntilChanged.mjs';
import Observable$merge from '../../../rx/__internal__/Observable/Observable.merge.mjs';
import Observable$scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Streamable$createLifted from './Streamable.createLifted.mjs';

const Streamable$createActionReducer = (reducer, initialState, options) => Streamable$createLifted(obs => Observable$create(observer => {
    const acc = initialState();
    pipe(obs, Observable$scan(reducer, returns(acc)), Container$concatWith({ concat: Observable$merge }, pipe([acc], ReadonlyArray$toRunnableObservable())), Observable$distinctUntilChanged(options), ReactiveContainer$sinkInto(observer));
}));

export { Streamable$createActionReducer as default };
