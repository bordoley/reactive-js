/// <reference types="./Streamable.createActionReducer.d.ts" />
import Container_concatWith from '../../../containers/__internal__/Container/Container.concatWith.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import { pipe, returns } from '../../../functions.mjs';
import Observable_create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable_distinctUntilChanged from '../../../rx/__internal__/Observable/Observable.distinctUntilChanged.mjs';
import Observable_merge from '../../../rx/__internal__/Observable/Observable.merge.mjs';
import Observable_scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Streamable_createLifted from './Streamable.createLifted.mjs';

const Streamable_createActionReducer = (reducer, initialState, options) => Streamable_createLifted(obs => Observable_create(observer => {
    const acc = initialState();
    pipe(obs, Observable_scan(reducer, returns(acc)), Container_concatWith({ concat: Observable_merge }, pipe([acc], ReadonlyArray_toRunnableObservable())), Observable_distinctUntilChanged(options), ReactiveContainer_sinkInto(observer));
}));

export { Streamable_createActionReducer as default };
