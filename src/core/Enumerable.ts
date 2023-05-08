import {
  Container,
  Container_T,
  Container_type,
  Containers,
  DeferredContainers,
  DisposableLike,
  EnumerableContainer,
  EnumerableContainers,
  EnumeratorLike,
  ReactiveContainers,
  RunnableContainers,
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

export const backpressureStrategy: ReactiveContainers.TypeClass<EnumerableContainer>["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: Containers.TypeClass<EnumerableContainer>["buffer"] =
  Observable_buffer;

export const catchError: ReactiveContainers.TypeClass<EnumerableContainer>["catchError"] =
  Enumerable_catchError;

/**
 * @category Constructor
 */
export const compute = Enumerable_compute;

export const concat: DeferredContainers.TypeClass<EnumerableContainer>["concat"] =
  Observable_concat;

export const concatAll: DeferredContainers.TypeClass<EnumerableContainer>["concatAll"] =
  Enumerable_concatAll;

export const concatMap: DeferredContainers.TypeClass<EnumerableContainer>["concatMap"] =
  Enumerable_concatMap;

export const concatWith: DeferredContainers.TypeClass<EnumerableContainer>["concatWith"] =
  Observable_concatWith as DeferredContainers.TypeClass<EnumerableContainer>["concatWith"];

export const contains: RunnableContainers.TypeClass<EnumerableContainer>["contains"] =
  Runnable_contains;

export const decodeWithCharset: ReactiveContainers.TypeClass<EnumerableContainer>["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: ReactiveContainers.TypeClass<EnumerableContainer>["defer"] =
  Enumerable_defer;

export const dispatchTo: ReactiveContainers.TypeClass<EnumerableContainer>["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: Containers.TypeClass<EnumerableContainer>["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: Containers.TypeClass<EnumerableContainer>["empty"] =
  Observable_empty;

export const encodeUtf8: ReactiveContainers.TypeClass<EnumerableContainer>["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const enqueue: ReactiveContainers.TypeClass<EnumerableContainer>["enqueue"] =
  Observable_enqueue;

export const endWith: DeferredContainers.TypeClass<EnumerableContainer>["endWith"] =
  Observable_endWith;

interface EnumerableEnumeratorContainer extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
    DisposableLike;
}
export const enumerate: EnumerableContainers.TypeClass<
  EnumerableContainer,
  EnumerableEnumeratorContainer
>["enumerate"] = Enumerable_enumerate;

export const everySatisfy: RunnableContainers.TypeClass<EnumerableContainer>["everySatisfy"] =
  Runnable_everySatisfy;

export const first: RunnableContainers.TypeClass<EnumerableContainer>["first"] =
  Runnable_first;

export const firstAsync: ReactiveContainers.TypeClass<EnumerableContainer>["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: Containers.TypeClass<EnumerableContainer>["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const flow: DeferredContainers.TypeClass<EnumerableContainer>["flow"] =
  Runnable_flow;

export const forEach: Containers.TypeClass<EnumerableContainer>["forEach"] =
  Observable_forEach;

export const forkConcat: DeferredContainers.TypeClass<EnumerableContainer>["forkConcat"] =
  Observable_forkConcat as DeferredContainers.TypeClass<EnumerableContainer>["forkConcat"];

export const forkZip: Containers.TypeClass<EnumerableContainer>["forkZip"] =
  Observable_forkZip as Containers.TypeClass<EnumerableContainer>["forkZip"];

export const fromEnumeratorFactory: Containers.TypeClass<EnumerableContainer>["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: Containers.TypeClass<EnumerableContainer>["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: Containers.TypeClass<EnumerableContainer>["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: Containers.TypeClass<EnumerableContainer>["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: Containers.TypeClass<EnumerableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: Containers.TypeClass<EnumerableContainer>["generate"] =
  Observable_generate;

export const identity: Containers.TypeClass<EnumerableContainer>["identity"] =
  Container_identity;

export const ignoreElements: Containers.TypeClass<EnumerableContainer>["ignoreElements"] =
  Observable_ignoreElements;

export const keep: Containers.TypeClass<EnumerableContainer>["keep"] =
  Observable_keep;

export const keepType: Containers.TypeClass<EnumerableContainer>["keepType"] =
  Observable_keepType as Containers.TypeClass<EnumerableContainer>["keepType"];

export const last: RunnableContainers.TypeClass<EnumerableContainer>["last"] =
  Runnable_last;

export const lastAsync: ReactiveContainers.TypeClass<EnumerableContainer>["lastAsync"] =
  Observable_lastAsync;

export const map: Containers.TypeClass<EnumerableContainer>["map"] =
  Observable_map;

export const mapTo: Containers.TypeClass<EnumerableContainer>["mapTo"] =
  Observable_mapTo;

export const noneSatisfy: RunnableContainers.TypeClass<EnumerableContainer>["noneSatisfy"] =
  Runnable_noneSatisfy;

export const pairwise: Containers.TypeClass<EnumerableContainer>["pairwise"] =
  Observable_pairwise;

export const pick: Containers.TypeClass<EnumerableContainer>["pick"] =
  Observable_pick;

export const reduce: RunnableContainers.TypeClass<EnumerableContainer>["reduce"] =
  Runnable_reduce;

export const repeat: DeferredContainers.TypeClass<EnumerableContainer>["repeat"] =
  Observable_repeat;

export const retry: ReactiveContainers.TypeClass<EnumerableContainer>["retry"] =
  Observable_retry;

export const scan: Containers.TypeClass<EnumerableContainer>["scan"] =
  Observable_scan;

export const scanLast: ReactiveContainers.TypeClass<EnumerableContainer>["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: Containers.TypeClass<EnumerableContainer>["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: RunnableContainers.TypeClass<EnumerableContainer>["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: DeferredContainers.TypeClass<EnumerableContainer>["startWith"] =
  Observable_startWith;

export const takeFirst: Containers.TypeClass<EnumerableContainer>["takeFirst"] =
  Observable_takeFirst;

export const takeLast: Containers.TypeClass<EnumerableContainer>["takeLast"] =
  Observable_takeLast;

export const takeWhile: Containers.TypeClass<EnumerableContainer>["takeWhile"] =
  Observable_takeWhile;

export const throws: ReactiveContainers.TypeClass<EnumerableContainer>["throws"] =
  Observable_throws;

export const throwIfEmpty: ReactiveContainers.TypeClass<EnumerableContainer>["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toReadonlyArray: RunnableContainers.TypeClass<EnumerableContainer>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const zip: Containers.TypeClass<EnumerableContainer>["zip"] =
  Observable_zip as Containers.TypeClass<EnumerableContainer>["zip"];

export const zipWith: Containers.TypeClass<EnumerableContainer>["zipWith"] =
  Observable_zipWith as Containers.TypeClass<EnumerableContainer>["zipWith"];
