/// <reference types="./ReadonlyArray.toAsyncEnumerable.d.ts" />
import { increment, returns, pipe } from '../../../functions.mjs';
import AsyncEnumerable$create from '../../../ix/__internal__/AsyncEnumerable/AsyncEnumerable.create.mjs';
import Observable$concatAll from '../../../rx/__internal__/Observable/Observable.concatAll.mjs';
import Observable$map from '../../../rx/__internal__/Observable/Observable.map.mjs';
import Observable$scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import Observable$takeFirst from '../../../rx/__internal__/Observable/Observable.takeFirst.mjs';
import Container$concatMap from '../Container/ContainerLIke.concatMap.mjs';
import ReadonlyArray$toContainer from './ReadonlyArray.toContainer.mjs';
import ReadonlyArray$toRunnableObservable from './ReadonlyArray.toRunnableObservable.mjs';

const ReadonlyArray$toAsyncEnumerable = /*@__PURE__*/ (() => ReadonlyArray$toContainer((array, start, count, options) => AsyncEnumerable$create(Observable$scan(increment, returns(start - 1)), Container$concatMap({ map: Observable$map, concatAll: Observable$concatAll }, (i) => pipe([array[i]], ReadonlyArray$toRunnableObservable(options))), Observable$takeFirst({ count }))))();

export { ReadonlyArray$toAsyncEnumerable as default };
