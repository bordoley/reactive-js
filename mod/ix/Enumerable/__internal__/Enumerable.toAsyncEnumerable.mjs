/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />
import { returns, pipe } from '../../../functions.mjs';
import Observable_create from '../../../rx/Observable/__internal__/Observable.create.mjs';
import Observable_map from '../../../rx/Observable/__internal__/Observable.map.mjs';
import Observable_takeWhile from '../../../rx/Observable/__internal__/Observable.takeWhile.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import AsyncEnumerable_create from '../../AsyncEnumerable/__internal__/AsyncEnumerable.create.mjs';
import Enumerator_getCurrent from '../../Enumerator/__internal__/Enumerator.getCurrent.mjs';
import Enumerator_hasCurrent from '../../Enumerator/__internal__/Enumerator.hasCurrent.mjs';
import Source_move from '../../Source/__internal__/Source.move.mjs';
import Enumerable_enumerate from './Enumerable.enumerate.mjs';

const Enumerable_toAsyncEnumerable = 
/*@__PURE__*/ returns((enumerable) => AsyncEnumerable_create(observable => Observable_create(observer => {
    const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_addTo(observer));
    pipe(observable, Observable_map(_ => Source_move(enumerator)), Observable_takeWhile(Enumerator_hasCurrent), Observable_map(Enumerator_getCurrent), ReactiveContainer_sinkInto(observer));
})));

export { Enumerable_toAsyncEnumerable as default };
