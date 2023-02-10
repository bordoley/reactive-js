/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />
import { increment, returns, decrement, pipe, abs } from '../../../functions.mjs';
import AsyncEnumerable_create from '../../../ix/AsyncEnumerable/__internal__/AsyncEnumerable.create.mjs';
import Observable_concatAll from '../../../rx/Observable/__internal__/Observable.concatAll.mjs';
import Observable_map from '../../../rx/Observable/__internal__/Observable.map.mjs';
import Observable_scan from '../../../rx/Observable/__internal__/Observable.scan.mjs';
import Observable_takeFirst from '../../../rx/Observable/__internal__/Observable.takeFirst.mjs';
import Container_concatMap from '../../Container/__internal__/Container.concatMap.mjs';
import ReadonlyArray_toContainer from './ReadonlyArray.toContainer.mjs';
import ReadonlyArray_toRunnableObservable from './ReadonlyArray.toRunnableObservable.mjs';

const ReadonlyArray_toAsyncEnumerable = /*@__PURE__*/ (() => ReadonlyArray_toContainer((array, start, count, options) => AsyncEnumerable_create(count >= 0
    ? Observable_scan(increment, returns(start - 1))
    : Observable_scan(decrement, returns(start + 1)), Container_concatMap({ map: Observable_map, concatAll: Observable_concatAll }, (i) => pipe([array[i]], ReadonlyArray_toRunnableObservable(options))), Observable_takeFirst({ count: abs(count) }))))();

export { ReadonlyArray_toAsyncEnumerable as default };
