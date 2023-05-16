import Enumerator_distinctUntilChanged from "./Enumerator/__internal__/Enumerator.distinctUntilChanged.js";
import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_forEach from "./Enumerator/__internal__/Enumerator.forEach.js";
import Enumerator_fromEnumeratorFactory from "./Enumerator/__internal__/Enumerator.fromEnumeratorFactory.js";
import Enumerator_fromFactory from "./Enumerator/__internal__/Enumerator.fromFactory.js";
import Enumerator_fromValue from "./Enumerator/__internal__/Enumerator.fromValue.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_keepType from "./Enumerator/__internal__/Enumerator.keepType.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_mapTo from "./Enumerator/__internal__/Enumerator.mapTo.js";
import Enumerator_pairwise from "./Enumerator/__internal__/Enumerator.pairwise.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_scan from "./Enumerator/__internal__/Enumerator.scan.js";
import Enumerator_skipFirst from "./Enumerator/__internal__/Enumerator.skipFirst.js";
import Enumerator_takeFirst from "./Enumerator/__internal__/Enumerator.takeFirst.js";
import Enumerator_takeWhile from "./Enumerator/__internal__/Enumerator.takeWhile.js";
import Enumerator_toObservable from "./Enumerator/__internal__/Enumerator.toObservable.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Optional_enumerate from "./Optional/__internal__/Optional.enumerator.js";
import ReadonlyArray_enumerate from "./ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { Function1 } from "./functions.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  ContainerTypeClass,
} from "./type-classes.js";
import {
  EnumerableLike,
  EnumeratorContainer,
  EnumeratorLike,
  RunnableLike,
} from "./types.js";

export type Type = EnumeratorContainer;

export interface EnumeratorModule
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    ContainerTypeClass<Type> {
  toObservable<T>(): Function1<EnumeratorLike<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<EnumeratorLike<T>, RunnableLike<T>>;
}

export type Signature = EnumeratorModule;

export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Enumerator_distinctUntilChanged;
export const empty: Signature["empty"] = Enumerator_empty;
export const forEach: Signature["forEach"] = Enumerator_forEach;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Enumerator_fromEnumeratorFactory;
export const fromFactory: Signature["fromFactory"] = Enumerator_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_enumerate;
export const fromOptional: Signature["fromOptional"] = Optional_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_enumerate;
export const fromValue: Signature["fromValue"] = Enumerator_fromValue;
export const keep: Signature["keep"] = Enumerator_keep;
export const keepType: Signature["keepType"] = Enumerator_keepType;
export const map: Signature["map"] = Enumerator_map;
export const mapTo: Signature["mapTo"] = Enumerator_mapTo;
export const pairwise: Signature["pairwise"] = Enumerator_pairwise;
export const pick: Signature["pick"] = Enumerator_pick;
export const scan: Signature["scan"] = Enumerator_scan;
export const skipFirst: Signature["skipFirst"] = Enumerator_skipFirst;
export const takeFirst: Signature["takeFirst"] = Enumerator_takeFirst;
export const takeWhile: Signature["takeWhile"] = Enumerator_takeWhile;
export const toObservable: Signature["toObservable"] = Enumerator_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
