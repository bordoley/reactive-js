/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />
import { returns, pipe } from '../../../functions.mjs';
import Observable$create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable$map from '../../../rx/__internal__/Observable/Observable.map.mjs';
import Observable$takeWhile from '../../../rx/__internal__/Observable/Observable.takeWhile.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import AsyncEnumerable$create from '../AsyncEnumerable/AsyncEnumerable.create.mjs';
import Enumerator$getCurrent from '../Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$hasCurrent from '../Enumerator/Enumerator.hasCurrent.mjs';
import Source$move from '../Source/Source.move.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$toAsyncEnumerable = 
/*@__PURE__*/ (() => returns((enumerable) => AsyncEnumerable$create(observable => Observable$create(observer => {
    const enumerator = pipe(enumerable, Enumerable$enumerate(), Disposable$addTo(observer));
    pipe(observable, Observable$map(_ => Source$move(enumerator)), Observable$takeWhile(Enumerator$hasCurrent), Observable$map(Enumerator$getCurrent), ReactiveContainer$sinkInto(observer));
}))))();

export { Enumerable$toAsyncEnumerable as default };
