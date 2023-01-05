/// <reference types="./EnumerableLike.toAsyncEnumerable.d.ts" />
import { returns, pipe } from '../../../functions.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__map from '../../../rx/__internal__/ObservableLike/ObservableLike.map.mjs';
import ObservableLike__takeWhile from '../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import { move } from '../../SourceLike.mjs';
import AsyncEnumerableLike__create from '../AsyncEnumerableLike/AsyncEnumerableLike.create.mjs';
import EnumeratorLike__getCurrent from '../EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__hasCurrent from '../EnumeratorLike/EnumeratorLike.hasCurrent.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toAsyncEnumerable = 
/*@__PURE__*/ (() => returns((enumerable) => AsyncEnumerableLike__create(observable => ObservableLike__create(observer => {
    const enumerator = pipe(enumerable, EnumerableLike__enumerate(), DisposableLike__addTo(observer));
    pipe(observable, ObservableLike__map(_ => move(enumerator)), ObservableLike__takeWhile(EnumeratorLike__hasCurrent), ObservableLike__map(EnumeratorLike__getCurrent), sinkInto(observer));
}))))();

export { EnumerableLike__toAsyncEnumerable as default };
