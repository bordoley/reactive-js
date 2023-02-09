/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />
import { increment, returns, decrement, pipe, abs } from '../../../functions.mjs';
import AsyncEnumerable_create from '../../../ix/__internal__/AsyncEnumerable/AsyncEnumerable.create.mjs';
import Observable_concatAll from '../../../rx/__internal__/Observable/Observable.concatAll.mjs';
import Observable_map from '../../../rx/__internal__/Observable/Observable.map.mjs';
import Observable_scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import Observable_takeFirst from '../../../rx/__internal__/Observable/Observable.takeFirst.mjs';
import Container_concatMap from '../Container/Container.concatMap.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';
import ReadonlyArray_toRunnableObservable from './ReadonlyArray.toRunnableObservable.mjs';

const ReadonlyArray_toAsyncEnumerable = /*@__PURE__*/ (() => ReadonlyArray_toContainer((array, start, count, options) => AsyncEnumerable_create(count >= 0
    ? Observable_scan(increment, returns(start - 1))
    : Observable_scan(decrement, returns(start + 1)), Container_concatMap({ map: Observable_map, concatAll: Observable_concatAll }, (i) => pipe([array[i]], ReadonlyArray_toRunnableObservable(options))), Observable_takeFirst({ count: abs(count) }))))();

export { ReadonlyArray_toAsyncEnumerable as default };
