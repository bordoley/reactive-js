import Container_identity from "./Container/__internal__/Container.identity.js";
import Enumerable_catchError from "./Enumerable/__internal__/Enumerable.catchError.js";
import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_defer from "./Enumerable/__internal__/Enumerable.defer.js";
import Enumerable_encodeUtf8 from "./Enumerable/__internal__/Enumerable.encodeUtf8.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_flatMapIterable from "./Enumerable/__internal__/Enumerable.flatMapIterable.js";
import Enumerable_scanLast from "./Enumerable/__internal__/Enumerable.scanLast.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import { Enumerable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_flow from "./Runnable/__internal__/Runnable.flow.js";
import Runnable_fromEnumeratorFactory from "./Runnable/__internal__/Runnable.fromEnumeratorFactory.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_noneSatisfy from "./Runnable/__internal__/Runnable.noneSatisfy.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import { EnumerableContainer } from "./containers.js";

export const buffer: EnumerableContainer.TypeClass["buffer"] =
  Observable_buffer;

export const catchError: EnumerableContainer.TypeClass["catchError"] =
  Enumerable_catchError;

/**
 * @category Constructor
 */
export const compute = Enumerable_compute;

export const concat: EnumerableContainer.TypeClass["concat"] =
  Observable_concat;

export const concatAll: EnumerableContainer.TypeClass["concatAll"] =
  Enumerable_concatAll;

export const concatMap: EnumerableContainer.TypeClass["concatMap"] =
  Enumerable_concatMap;

export const concatWith: EnumerableContainer.TypeClass["concatWith"] =
  Observable_concatWith as EnumerableContainer.TypeClass["concatWith"];

export const contains: EnumerableContainer.TypeClass["contains"] =
  Runnable_contains;

export const decodeWithCharset: EnumerableContainer.TypeClass["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: EnumerableContainer.TypeClass["defer"] = Enumerable_defer;

export const distinctUntilChanged: EnumerableContainer.TypeClass["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: EnumerableContainer.TypeClass["empty"] = Observable_empty;

export const encodeUtf8: EnumerableContainer.TypeClass["encodeUtf8"] =
  Enumerable_encodeUtf8;

export const endWith: EnumerableContainer.TypeClass["endWith"] =
  Observable_endWith;

export const enumerate: EnumerableContainer.TypeClass["enumerate"] =
  Enumerable_enumerate;

export const everySatisfy: EnumerableContainer.TypeClass["everySatisfy"] =
  Runnable_everySatisfy;

export const first: EnumerableContainer.TypeClass["first"] = Runnable_first;

// FIXME: use a custom implementation that doesn't schedule
export const firstAsync: EnumerableContainer.TypeClass["firstAsync"] =
  Observable_firstAsync;

export const flatMapIterable: EnumerableContainer.TypeClass["flatMapIterable"] =
  Enumerable_flatMapIterable;

export const flow: EnumerableContainer.TypeClass["flow"] = Runnable_flow;

export const forEach: EnumerableContainer.TypeClass["forEach"] =
  Observable_forEach;

export const forkConcat: EnumerableContainer.TypeClass["forkConcat"] =
  Observable_forkConcat as EnumerableContainer.TypeClass["forkConcat"];

export const forkZip: EnumerableContainer.TypeClass["forkZip"] =
  Observable_forkZip as EnumerableContainer.TypeClass["forkZip"];

export const fromEnumeratorFactory: EnumerableContainer.TypeClass["fromEnumeratorFactory"] =
  Runnable_fromEnumeratorFactory;

export const fromFactory: EnumerableContainer.TypeClass["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: EnumerableContainer.TypeClass["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: EnumerableContainer.TypeClass["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: EnumerableContainer.TypeClass["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: EnumerableContainer.TypeClass["generate"] =
  Observable_generate;

export const identity: EnumerableContainer.TypeClass["identity"] =
  Container_identity;

export const ignoreElements: EnumerableContainer.TypeClass["ignoreElements"] =
  Observable_ignoreElements;

export const keep: EnumerableContainer.TypeClass["keep"] = Observable_keep;

export const keepType: EnumerableContainer.TypeClass["keepType"] =
  Observable_keepType as EnumerableContainer.TypeClass["keepType"];

export const last: EnumerableContainer.TypeClass["last"] = Runnable_last;

// FIXME: use a custom implementation that doesn't use a vts
export const lastAsync: EnumerableContainer.TypeClass["lastAsync"] =
  Observable_lastAsync;

export const map: EnumerableContainer.TypeClass["map"] = Observable_map;

export const mapTo: EnumerableContainer.TypeClass["mapTo"] = Observable_mapTo;

export const noneSatisfy: EnumerableContainer.TypeClass["noneSatisfy"] =
  Runnable_noneSatisfy;

export const pairwise: EnumerableContainer.TypeClass["pairwise"] =
  Observable_pairwise;

export const pick: EnumerableContainer.TypeClass["pick"] = Observable_pick;

export const reduce: EnumerableContainer.TypeClass["reduce"] = Runnable_reduce;

export const repeat: EnumerableContainer.TypeClass["repeat"] =
  Observable_repeat;

export const retry: EnumerableContainer.TypeClass["retry"] = Observable_retry;

export const scan: EnumerableContainer.TypeClass["scan"] = Observable_scan;

export const scanLast: EnumerableContainer.TypeClass["scanLast"] =
  Enumerable_scanLast;

export const skipFirst: EnumerableContainer.TypeClass["skipFirst"] =
  Observable_skipFirst;

export const someSatisfy: EnumerableContainer.TypeClass["someSatisfy"] =
  Runnable_someSatisfy;

export const startWith: EnumerableContainer.TypeClass["startWith"] =
  Observable_startWith;

export const takeFirst: EnumerableContainer.TypeClass["takeFirst"] =
  Observable_takeFirst;

export const takeLast: EnumerableContainer.TypeClass["takeLast"] =
  Observable_takeLast;

export const takeWhile: EnumerableContainer.TypeClass["takeWhile"] =
  Observable_takeWhile;

export const throws: EnumerableContainer.TypeClass["throws"] =
  Observable_throws;

export const throwIfEmpty: EnumerableContainer.TypeClass["throwIfEmpty"] =
  Observable_throwIfEmpty;

export const toReadonlyArray: EnumerableContainer.TypeClass["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const zip: EnumerableContainer.TypeClass["zip"] =
  Observable_zip as EnumerableContainer.TypeClass["zip"];

export const zipWith: EnumerableContainer.TypeClass["zipWith"] =
  Observable_zipWith as EnumerableContainer.TypeClass["zipWith"];
