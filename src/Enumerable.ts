import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
import type { EnumerableContainer } from "./Observable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_contains from "./Observable/__internal__/Observable.contains.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enumerate from "./Observable/__internal__/Observable.enumerate.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_first from "./Observable/__internal__/Observable.first.js";
import Observable_flow from "./Observable/__internal__/Observable.flow.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromOptional from "./Observable/__internal__/Observable.fromOptional.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_keepWithKey from "./Observable/__internal__/Observable.keepWithKey.js";
import Observable_last from "./Observable/__internal__/Observable.last.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_mapWithKey from "./Observable/__internal__/Observable.mapWithKey.js";
import Observable_noneSatisfy from "./Observable/__internal__/Observable.noneSatisfy.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_reduceWithKey from "./Observable/__internal__/Observable.reduceWithKey.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_toIterable from "./Observable/__internal__/Observable.toIterable.js";
import Observable_toReadonlyArray from "./Observable/__internal__/Observable.toReadonlyArray.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { identityLazy } from "./functions.js";
import { EnumerableContainerModule } from "./types.js";

export type Type = EnumerableContainer;

/**
 * @noInheritDoc
 * @category Module
 */
export interface EnumerableModule extends EnumerableContainerModule<Type> {}

export type Signature = EnumerableModule;

export const buffer: Signature["buffer"] = Observable_buffer;
export const concat: Signature["concat"] = Observable_concat;
export const concatAll: Signature["concatAll"] = Enumerable_concatAll;
export const concatMap: Signature["concatMap"] = Enumerable_concatMap;
export const concatWith: Signature["concatWith"] = Observable_concatWith;
export const contains: Signature["contains"] = Observable_contains;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Observable_distinctUntilChanged;
export const empty: Signature["empty"] = Observable_empty;
export const endWith: Signature["endWith"] = Observable_endWith;
export const enumerate: Signature["enumerate"] = Observable_enumerate;
export const everySatisfy: Signature["everySatisfy"] = Observable_everySatisfy;
export const first: Signature["first"] = Observable_first;
export const flow: Signature["flow"] = Observable_flow;
export const fromEnumerable: Signature["fromEnumerable"] = identityLazy;
export const fromFactory: Signature["fromFactory"] = Observable_fromFactory;
export const fromOptional: Signature["fromOptional"] = Observable_fromOptional;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toObservable;
export const fromValue: Signature["fromValue"] = Observable_fromValue;
export const keep: Signature["keep"] = Observable_keep;
export const keepType: Signature["keepType"] =
  Observable_keepType as Signature["keepType"];
export const keepWithKey: Signature["keepWithKey"] = Observable_keepWithKey;
export const last: Signature["last"] = Observable_last;
export const map: Signature["map"] = Observable_map;
export const mapTo: Signature["mapTo"] = Observable_mapTo;
export const mapWithKey: Signature["mapWithKey"] = Observable_mapWithKey;
export const noneSatisfy: Signature["noneSatisfy"] = Observable_noneSatisfy;
export const pairwise: Signature["pairwise"] = Observable_pairwise;
export const pick: Signature["pick"] = Observable_pick;
export const reduce: Signature["reduce"] = Observable_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  Observable_reduceWithKey;
export const repeat: Signature["repeat"] = Observable_repeat;
export const scan: Signature["scan"] = Observable_scan;
export const skipFirst: Signature["skipFirst"] = Observable_skipFirst;
export const someSatisfy: Signature["someSatisfy"] = Observable_someSatisfy;
export const startWith: Signature["startWith"] = Observable_startWith;
export const takeFirst: Signature["takeFirst"] = Observable_takeFirst;
export const takeLast: Signature["takeLast"] = Observable_takeLast;
export const takeWhile: Signature["takeWhile"] = Observable_takeWhile;
export const toIterable: Signature["toIterable"] = Observable_toIterable;
export const toObservable: Signature["toObservable"] = identityLazy;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Observable_toReadonlyArray;
export const zip: Signature["zip"] = Observable_zip;
export const zipWith: Signature["zipWith"] = Observable_zipWith;
