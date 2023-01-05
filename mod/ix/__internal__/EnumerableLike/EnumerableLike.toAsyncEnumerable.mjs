/// <reference types="./EnumerableLike.toAsyncEnumerable.d.ts" />
import { returns, pipe } from '../../../functions.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__map from '../../../rx/__internal__/ObservableLike/ObservableLike.map.mjs';
import ObservableLike__takeWhile from '../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';
import { hasCurrent, getCurrent } from '../../EnumeratorLike.mjs';
import { move } from '../../SourceLike.mjs';
import AsyncEnumerableLike__create from '../AsyncEnumerableLike/AsyncEnumerableLike.create.mjs';
import EnumerableLike__enumerate from './EnumerableLike.enumerate.mjs';

const EnumerableLike__toAsyncEnumerable = 
/*@__PURE__*/ (() => returns((enumerable) => AsyncEnumerableLike__create(observable => ObservableLike__create(observer => {
    const enumerator = pipe(enumerable, EnumerableLike__enumerate(), addTo(observer));
    pipe(observable, ObservableLike__map(_ => move(enumerator)), ObservableLike__takeWhile(hasCurrent), ObservableLike__map(getCurrent), sinkInto(observer));
}))))();

export { EnumerableLike__toAsyncEnumerable as default };
