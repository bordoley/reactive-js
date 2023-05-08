import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  EnumerableContainer,
  EnumeratorLike,
  ReactiveContainer,
} from "../core.js";
import Container_identity from "../core/Container/__internal__/Container.identity.js";
import Enumerable_catchError from "../core/Enumerable/__internal__/Enumerable.catchError.js";
import Enumerable_concatAll from "../core/Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "../core/Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_defer from "../core/Enumerable/__internal__/Enumerable.defer.js";
import Enumerable_encodeUtf8 from "../core/Enumerable/__internal__/Enumerable.encodeUtf8.js";
import Enumerable_flatMapIterable from "../core/Enumerable/__internal__/Enumerable.flatMapIterable.js";
import Enumerable_scanLast from "../core/Enumerable/__internal__/Enumerable.scanLast.js";
import Iterable_toObservable from "../core/Iterable/__internal__/Iterable.toObservable.js";
import Observable_buffer from "../core/Observable/__internal__/Observable.buffer.js";
import Observable_concat from "../core/Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "../core/Observable/__internal__/Observable.concatWith.js";
import Observable_decodeWithCharset from "../core/Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "../core/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "../core/Observable/__internal__/Observable.empty.js";
import Observable_endWith from "../core/Observable/__internal__/Observable.endWith.js";
import Observable_forEach from "../core/Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "../core/Observable/__internal__/Observable.forkConcat.js";
import Observable_forkZip from "../core/Observable/__internal__/Observable.forkZip.js";
import Observable_fromFactory from "../core/Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "../core/Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "../core/Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "../core/Observable/__internal__/Observable.keep.js";
import Observable_keepType from "../core/Observable/__internal__/Observable.keepType.js";
import Observable_map from "../core/Observable/__internal__/Observable.map.js";
import Observable_mapTo from "../core/Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "../core/Observable/__internal__/Observable.pairwise.js";
import Observable_retry from "../core/Observable/__internal__/Observable.retry.js";
import Observable_scan from "../core/Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "../core/Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "../core/Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "../core/Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "../core/Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "../core/Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "../core/Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "../core/Observable/__internal__/Observable.throws.js";
import Observable_zip from "../core/Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "../core/Observable/__internal__/Observable.zipWith.js";
import Optional_toObservable from "../core/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Runnable_flow from "../core/Runnable/__internal__/Runnable.flow.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import { Enumerable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";

export const backpressureStrategy: ReactiveContainer.TypeClass<EnumerableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Container.TypeClass<EnumerableContainer>["buffer"] =
  Observable_buffer;

export const catchError: ReactiveContainer.TypeClass<EnumerableContainer>["catchError"] =
  Enumerable_catchError;

/**
 * @category Constructor
 */
export const compute = Enumerable_compute;

export const concat: Container.TypeClass<EnumerableContainer>["concat"] =
  Observable_concat;

export const concatAll: Container.TypeClass<EnumerableContainer>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: Container.TypeClass<EnumerableContainer>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: Container.TypeClass<EnumerableContainer>["concatWith"] =
  Observable_concatWith as Container.TypeClass<EnumerableContainer>["concatWith"];

export const contains: Container.TypeClass<EnumerableContainer>["contains"] =
  Runnable_contains;

export const decodeWithCharset: ReactiveContainer.TypeClass<EnumerableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: ReactiveContainer.TypeClass<EnumerableContainer>["defer"] =
  Enumerable_defer;

export const dispatchTo: ReactiveContainer.TypeClass<EnumerableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Container.TypeClass<EnumerableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Container.TypeClass<EnumerableContainer>["empty"] =
  Observable_empty;

export const encodeUtf8: ReactiveContainer.TypeClass<EnumerableContainer>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const enqueue: ReactiveContainer.TypeClass<EnumerableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: Container.TypeClass<EnumerableContainer>["endWith"] =
  Observable_endWith;

interface EnumerableEnumeratorContainer extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
    DisposableLike;
}
export const enumerate: EnumerableContainer.TypeClass<
  EnumerableContainer,
  EnumerableEnumeratorContainer
>["enumerate"] = Enumerable_enumerate;

export const everySatisfy: Container.TypeClass<EnumerableContainer>["everySatisfy"] =
  Runnable_everySatisfy;

export const first: Container.TypeClass<EnumerableContainer>["first"] =
  Runnable_first;

export const firstAsync: ReactiveContainer.TypeClass<EnumerableContainer>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: Container.TypeClass<EnumerableContainer>["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const flow: Container.TypeClass<EnumerableContainer>["flow"] =
  Runnable_flow;

export const forEach: Container.TypeClass<EnumerableContainer>["forEach"] =
  Observable_forEach;

export const forkConcat: Container.TypeClass<EnumerableContainer>["forkConcat"] =
  Observable_forkConcat as Container.TypeClass<EnumerableContainer>["forkConcat"];

export const forkZip: Container.TypeClass<EnumerableContainer>["forkZip"] =
  Observable_forkZip as Container.TypeClass<EnumerableContainer>["forkZip"];

export const fromEnumeratorFactory: Container.TypeClass<EnumerableContainer>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: Container.TypeClass<EnumerableContainer>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: Container.TypeClass<EnumerableContainer>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: Container.TypeClass<EnumerableContainer>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: Container.TypeClass<EnumerableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: Container.TypeClass<EnumerableContainer>["generate"] =
  Observable_generate;

export const identity: Container.TypeClass<EnumerableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Container.TypeClass<EnumerableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Container.TypeClass<EnumerableContainer>["keep"] =
  Observable_keep;

export const keepType: Container.TypeClass<EnumerableContainer>["keepType"] =
  Observable_keepType as Container.TypeClass<EnumerableContainer>["keepType"];

export const last: Container.TypeClass<EnumerableContainer>["last"] =
  Runnable_last;

export const lastAsync: ReactiveContainer.TypeClass<EnumerableContainer>["lastAsync"] =
  Observable_lastAsync;

export const map: Container.TypeClass<EnumerableContainer>["map"] =
  Observable_map;

export const mapTo: Container.TypeClass<EnumerableContainer>["mapTo"] =
  Observable_mapTo;

export const noneSatisfy: Container.TypeClass<EnumerableContainer>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const pairwise: Container.TypeClass<EnumerableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Container.TypeClass<EnumerableContainer>["pick"] =
  Observable_pick;

export const reduce: Container.TypeClass<EnumerableContainer>["reduce"] =
  Runnable_reduce;

export const repeat: Container.TypeClass<EnumerableContainer>["repeat"] =
  Observable_repeat;

export const retry: ReactiveContainer.TypeClass<EnumerableContainer>["retry"] =
  Observable_retry;

export const scan: Container.TypeClass<EnumerableContainer>["scan"] =
  Observable_scan;

export const scanLast: ReactiveContainer.TypeClass<EnumerableContainer>["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: Container.TypeClass<EnumerableContainer>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: Container.TypeClass<EnumerableContainer>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: Container.TypeClass<EnumerableContainer>["startWith"] =
  Observable_startWith;

export const takeFirst: Container.TypeClass<EnumerableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Container.TypeClass<EnumerableContainer>["takeLast"] =
  Observable_takeLast;

export const takeWhile: Container.TypeClass<EnumerableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throws: ReactiveContainer.TypeClass<EnumerableContainer>["throws"] =
  Observable_throws;

export const throwIfEmpty: ReactiveContainer.TypeClass<EnumerableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toReadonlyArray: Container.TypeClass<EnumerableContainer>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const zip: Container.TypeClass<EnumerableContainer>["zip"] =
  Observable_zip as Container.TypeClass<EnumerableContainer>["zip"];

export const zipWith: Container.TypeClass<EnumerableContainer>["zipWith"] =
  Observable_zipWith as Container.TypeClass<EnumerableContainer>["zipWith"];
