/// <reference types="./ReadonlyArrayLike.toAsyncEnumerable.d.ts" />
import { increment, returns, pipe } from '../../../functions.mjs';
import AsyncEnumerableLike__create from '../../../ix/__internal__/AsyncEnumerableLike/AsyncEnumerableLike.create.mjs';
import ObservableLike__concatAll from '../../../rx/__internal__/ObservableLike/ObservableLike.concatAll.mjs';
import ObservableLike__map from '../../../rx/__internal__/ObservableLike/ObservableLike.map.mjs';
import ObservableLike__scan from '../../../rx/__internal__/ObservableLike/ObservableLike.scan.mjs';
import ObservableLike__takeFirst from '../../../rx/__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import ContainerLike__concatMap from '../ContainerLike/ContainerLIke.concatMap.mjs';
import ReadonlyArrayLike__toContainer from './ReadonlyArrayLike.toContainer.mjs';
import ReadonlyArrayLike__toRunnableObservable from './ReadonlyArrayLike.toRunnableObservable.mjs';

const ReadonlyArrayLike__toAsyncEnumerable = /*@__PURE__*/ (() => ReadonlyArrayLike__toContainer((array, start, count, options) => AsyncEnumerableLike__create(ObservableLike__scan(increment, returns(start - 1)), ContainerLike__concatMap({ map: ObservableLike__map, concatAll: ObservableLike__concatAll }, (i) => pipe([array[i]], ReadonlyArrayLike__toRunnableObservable(options))), ObservableLike__takeFirst({ count }))))();

export { ReadonlyArrayLike__toAsyncEnumerable as default };
