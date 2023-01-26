/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />
import { returns, pipe } from '../../../functions.mjs';
import Observable_create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable_map from '../../../rx/__internal__/Observable/Observable.map.mjs';
import Observable_takeWhile from '../../../rx/__internal__/Observable/Observable.takeWhile.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import AsyncEnumerable_create from '../AsyncEnumerable/AsyncEnumerable.create.mjs';
import Enumerator_getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Source_move from '../Source/Source.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_toAsyncEnumerable = 
/*@__PURE__*/ (() => returns((enumerable) => AsyncEnumerable_create(observable => Observable_create(observer => {
    const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_addTo(observer));
    pipe(observable, Observable_map(_ => Source_move(enumerator)), Observable_takeWhile(Enumerator_hasCurrent), Observable_map(Enumerator_getCurrent), ReactiveContainer_sinkInto(observer));
}))))();

export { Enumerable_toAsyncEnumerable as default };
