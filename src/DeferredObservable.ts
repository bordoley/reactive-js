import Container_identity from "./Container/__internal__/Container.identity.js";
import DeferredObservable_concatAll from "./DeferredObservable/__internal__/DeferredObservable.concatAll.js";
import DeferredObservable_concatMap from "./DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import DeferredObservable_create from "./DeferredObservable/__internal__/DeferredObservable.create.js";
import DeferredObservable_defer from "./DeferredObservable/__internal__/DeferredObservable.defer.js";
import DeferredObservable_exhaust from "./DeferredObservable/__internal__/DeferredObservable.exhaust.js";
import DeferredObservable_exhaustMap from "./DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeAll from "./DeferredObservable/__internal__/DeferredObservable.mergeAll.js";
import DeferredObservable_mergeMap from "./DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import DeferredObservable_switchAll from "./DeferredObservable/__internal__/DeferredObservable.switchAll.js";
import DeferredObservable_switchMap from "./DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import DeferredObservable_throttle from "./DeferredObservable/__internal__/DeferredObservable.throttle.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkConcat from "./Observable/__internal__/Observable.forkConcat.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
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
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory } from "./functions.js";
import {
  DeferredObservableContainer,
  DeferredObservableLike,
} from "./types.js";

export const backpressureStrategy: DeferredObservableContainer.TypeClass["backpressureStrategy"] =
  Observable_backpressureStrategy;

export const buffer: DeferredObservableContainer.TypeClass["buffer"] =
  Observable_buffer;

/*
export const catchError: DeferredObservableContainer.TypeClass["catchError"] =
  DeferredObservable_catchError;*/

export const combineLatest: DeferredObservableContainer.TypeClass["combineLatest"] =
  Observable_combineLatest;

/**
 * @category Constructor
 */
//export const compute = DeferredObservable_compute;

export const concat: DeferredObservableContainer.TypeClass["concat"] =
  Observable_concat;

export const concatAll: DeferredObservableContainer.TypeClass["concatAll"] =
  DeferredObservable_concatAll;

export const concatMap: DeferredObservableContainer.TypeClass["concatMap"] =
  DeferredObservable_concatMap;

export const concatWith: DeferredObservableContainer.TypeClass["concatWith"] =
  Observable_concatWith as DeferredObservableContainer.TypeClass["concatWith"];

export const create = DeferredObservable_create;

export const decodeWithCharset: DeferredObservableContainer.TypeClass["decodeWithCharset"] =
  Observable_decodeWithCharset;

export const defer: DeferredObservableContainer.TypeClass["defer"] =
  DeferredObservable_defer;

export const dispatchTo: DeferredObservableContainer.TypeClass["dispatchTo"] =
  Observable_dispatchTo;

export const distinctUntilChanged: DeferredObservableContainer.TypeClass["distinctUntilChanged"] =
  Observable_distinctUntilChanged;

export const empty: DeferredObservableContainer.TypeClass["empty"] =
  Observable_empty;

/*
export const encodeUtf8: DeferredObservableContainer.TypeClass["encodeUtf8"] =
  DeferredObservable_encodeUtf8;*/

export const enqueue: DeferredObservableContainer.TypeClass["enqueue"] =
  Observable_enqueue;

export const endWith: DeferredObservableContainer.TypeClass["endWith"] =
  Observable_endWith;

export const exhaust: DeferredObservableContainer.TypeClass["exhaust"] =
  DeferredObservable_exhaust;

export const exhaustMap: DeferredObservableContainer.TypeClass["exhaustMap"] =
  DeferredObservable_exhaustMap;

export const firstAsync: DeferredObservableContainer.TypeClass["firstAsync"] =
  Observable_firstAsync;

/*
export const flatMapIterable: DeferredObservableContainer.TypeClass["flatMapIterable"] =
  DeferredObservable_flatMapIterable;*/

export const forEach: DeferredObservableContainer.TypeClass["forEach"] =
  Observable_forEach;

export const forkConcat: DeferredObservableContainer.TypeClass["forkConcat"] =
  Observable_forkConcat as DeferredObservableContainer.TypeClass["forkConcat"];

export const forkMerge: DeferredObservableContainer.TypeClass["forkMerge"] =
  Observable_forkMerge as DeferredObservableContainer.TypeClass["forkMerge"];

export const forkZip: DeferredObservableContainer.TypeClass["forkZip"] =
  Observable_forkZip as DeferredObservableContainer.TypeClass["forkZip"];

export const forkZipLatest: DeferredObservableContainer.TypeClass["forkZipLatest"] =
  Observable_forkZipLatest as DeferredObservableContainer.TypeClass["forkZipLatest"];

/*
export const fromEnumeratorFactory: DeferredObservableContainer.TypeClass["fromEnumeratorFactory"] =
  DeferredObservable_fromEnumeratorFactory;*/

export const fromFactory: DeferredObservableContainer.TypeClass["fromFactory"] =
  Observable_fromFactory;

export const fromIterable: DeferredObservableContainer.TypeClass["fromIterable"] =
  Iterable_toObservable;

export const fromOptional: DeferredObservableContainer.TypeClass["fromOptional"] =
  Optional_toObservable;

export const fromReadonlyArray: DeferredObservableContainer.TypeClass["fromReadonlyArray"] =
  ReadonlyArray_toObservable;

export const generate: DeferredObservableContainer.TypeClass["generate"] =
  Observable_generate;

export const identity: DeferredObservableContainer.TypeClass["identity"] =
  Container_identity;

export const ignoreElements: DeferredObservableContainer.TypeClass["ignoreElements"] =
  Observable_ignoreElements;

export const keep: DeferredObservableContainer.TypeClass["keep"] =
  Observable_keep;

export const keepType: DeferredObservableContainer.TypeClass["keepType"] =
  Observable_keepType as DeferredObservableContainer.TypeClass["keepType"];

export const lastAsync: DeferredObservableContainer.TypeClass["lastAsync"] =
  Observable_lastAsync;

export const map: DeferredObservableContainer.TypeClass["map"] = Observable_map;

export const mapTo: DeferredObservableContainer.TypeClass["mapTo"] =
  Observable_mapTo;

export const merge: DeferredObservableContainer.TypeClass["merge"] =
  Observable_merge;

export const mergeAll: DeferredObservableContainer.TypeClass["mergeAll"] =
  DeferredObservable_mergeAll;

export const mergeMap: DeferredObservableContainer.TypeClass["mergeMap"] =
  DeferredObservable_mergeMap;

export const mergeWith: DeferredObservableContainer.TypeClass["mergeWith"] =
  Observable_mergeWith as DeferredObservableContainer.TypeClass["mergeWith"];

export const pairwise: DeferredObservableContainer.TypeClass["pairwise"] =
  Observable_pairwise;

export const pick: DeferredObservableContainer.TypeClass["pick"] =
  Observable_pick;

export const repeat: DeferredObservableContainer.TypeClass["repeat"] =
  Observable_repeat;

export const retry: DeferredObservableContainer.TypeClass["retry"] =
  Observable_retry;

export const scan: DeferredObservableContainer.TypeClass["scan"] =
  Observable_scan;

export const share: DeferredObservableContainer.TypeClass["share"] =
  DeferredObservable_share;

/*
export const scanLast: DeferredObservableContainer.TypeClass["scanLast"] =
  DeferredObservable_scanLast;*/

/*
export const scanMany: DeferredObservableContainer.TypeClass["scanMany"] =
  DeferredObservable_scanMany;*/

export const skipFirst: DeferredObservableContainer.TypeClass["skipFirst"] =
  Observable_skipFirst;

export const startWith: DeferredObservableContainer.TypeClass["startWith"] =
  Observable_startWith;

export const switchAll: DeferredObservableContainer.TypeClass["switchAll"] =
  DeferredObservable_switchAll;

export const switchMap: DeferredObservableContainer.TypeClass["switchMap"] =
  DeferredObservable_switchMap;

export const takeFirst: DeferredObservableContainer.TypeClass["takeFirst"] =
  Observable_takeFirst;

export const takeLast: DeferredObservableContainer.TypeClass["takeLast"] =
  Observable_takeLast;

/*
export const takeUntil: DeferredObservableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;*/

export const takeWhile: DeferredObservableContainer.TypeClass["takeWhile"] =
  Observable_takeWhile;

export const throttle: DeferredObservableContainer.TypeClass["throttle"] =
  DeferredObservable_throttle;

export const throwIfEmpty: DeferredObservableContainer.TypeClass["throwIfEmpty"] =
  Observable_throwIfEmpty;

interface Throws extends DeferredObservableContainer.TypeClass {
  /**
   * @category Constructor
   */
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): DeferredObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;

/*
export const timeout: DeferredObservableContainer.TypeClass["timeout"] =
  Observable_timeout;*/

/*
export const toReadonlyArray: DeferredObservableContainer.TypeClass["toReadonlyArray"] =
  DeferredObservable_toReadonlyArray;*/

export const withCurrentTime: DeferredObservableContainer.TypeClass["withCurrentTime"] =
  Observable_withCurrentTime;

export const withLatestFrom: DeferredObservableContainer.TypeClass["withLatestFrom"] =
  Observable_withLatestFrom as DeferredObservableContainer.TypeClass["withLatestFrom"];

export const zip: DeferredObservableContainer.TypeClass["zip"] =
  Observable_zip as DeferredObservableContainer.TypeClass["zip"];

export const zipLatest: DeferredObservableContainer.TypeClass["zipLatest"] =
  Observable_zipLatest as DeferredObservableContainer.TypeClass["zipLatest"];

export const zipWith: DeferredObservableContainer.TypeClass["zipWith"] =
  Observable_zipWith as DeferredObservableContainer.TypeClass["zipWith"];

export const zipWithLatestFrom: DeferredObservableContainer.TypeClass["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom as DeferredObservableContainer.TypeClass["zipWithLatestFrom"];
