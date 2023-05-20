import PauseableObservable_buffer from "./PauseableObservable/__internal__/PauseableObservable.buffer.js";
import PauseableObservable_dispatchTo from "./PauseableObservable/__internal__/PauseableObservable.dispatchTo.js";
import PauseableObservable_distinctUntilChanged from "./PauseableObservable/__internal__/PauseableObservable.distinctUntilChanged.js";
import PauseableObservable_enqueue from "./PauseableObservable/__internal__/PauseableObservable.enqueue.js";
import PauseableObservable_flatMapIterable from "./PauseableObservable/__internal__/PauseableObservable.flatMapIterable.js";
import PauseableObservable_forEach from "./PauseableObservable/__internal__/PauseableObservable.forEach.js";
import PauseableObservable_ignoreElements from "./PauseableObservable/__internal__/PauseableObservable.ignoreElements.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_keepType from "./PauseableObservable/__internal__/PauseableObservable.keepType.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_mapTo from "./PauseableObservable/__internal__/PauseableObservable.mapTo.js";
import PauseableObservable_pairwise from "./PauseableObservable/__internal__/PauseableObservable.pairwise.js";
import PauseableObservable_pick from "./PauseableObservable/__internal__/PauseableObservable.pick.js";
import PauseableObservable_scan from "./PauseableObservable/__internal__/PauseableObservable.scan.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";
import PauseableObservable_skipFirst from "./PauseableObservable/__internal__/PauseableObservable.skipFirst.js";
import PauseableObservable_takeFirst from "./PauseableObservable/__internal__/PauseableObservable.takeFirst.js";
import PauseableObservable_takeLast from "./PauseableObservable/__internal__/PauseableObservable.takeLast.js";
import PauseableObservable_takeWhile from "./PauseableObservable/__internal__/PauseableObservable.takeWhile.js";
import { Function1 } from "./functions.js";
import {
  Container,
  ContainerModule,
  Container_T,
  Container_type,
  DeferredObservableLike,
  DispatcherLike,
  PauseableObservableLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface PauseableObservableContainer extends Container {
  readonly [Container_type]?: PauseableObservableLike<this[typeof Container_T]>;
}

export type Type = PauseableObservableContainer;

/**
 * @noInheritDoc
 */
export interface PauseableObservableModule extends ContainerModule<Type> {
  sinkInto<T>(
    sink: DispatcherLike<T>,
  ): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}

export type Signature = PauseableObservableModule;

export const buffer: Signature["buffer"] = PauseableObservable_buffer;
export const dispatchTo: Signature["dispatchTo"] =
  PauseableObservable_dispatchTo;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  PauseableObservable_distinctUntilChanged;
export const enqueue: Signature["enqueue"] = PauseableObservable_enqueue;
export const forEach: Signature["forEach"] = PauseableObservable_forEach;
export const flatMapIterable: Signature["flatMapIterable"] =
  PauseableObservable_flatMapIterable;
export const ignoreElements: Signature["ignoreElements"] =
  PauseableObservable_ignoreElements;
export const keep: Signature["keep"] = PauseableObservable_keep;
export const keepType: Signature["keepType"] = PauseableObservable_keepType;
export const map: Signature["map"] = PauseableObservable_map;
export const mapTo: Signature["mapTo"] = PauseableObservable_mapTo;
export const pairwise: Signature["pairwise"] = PauseableObservable_pairwise;
export const pick: Signature["pick"] = PauseableObservable_pick;
export const scan: Signature["scan"] = PauseableObservable_scan;
export const sinkInto: Signature["sinkInto"] = PauseableObservable_sinkInto;
export const skipFirst: Signature["skipFirst"] = PauseableObservable_skipFirst;
export const takeFirst: Signature["takeFirst"] = PauseableObservable_takeFirst;
export const takeLast: Signature["takeLast"] = PauseableObservable_takeLast;
export const takeWhile: Signature["takeWhile"] = PauseableObservable_takeWhile;
