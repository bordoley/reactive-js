import Iterable_empty from "./Iterable/__internal__/Iterable.empty.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_fromEnumeratorFactory from "./Iterable/__internal__/Iterable.fromEnumeratorFactory.js";
import Iterable_fromFactory from "./Iterable/__internal__/Iterable.fromFactory.js";
import Iterable_fromIterable from "./Iterable/__internal__/Iterable.fromIterable.js";
import Iterable_fromOptional from "./Iterable/__internal__/Iterable.fromOptional.js";
import Iterable_fromReadonlyArray from "./Iterable/__internal__/Iterable.fromReadonlyArray.js";
import Iterable_fromValue from "./Iterable/__internal__/Iterable.fromValue.js";
import Iterable_toIterable from "./Iterable/__internal__/Iterable.toIterable.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import { Function1 } from "./functions.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  EnumerableContainerBaseTypeClass,
} from "./type-classes.js";
import { EnumerableLike, IterableContainer, RunnableLike } from "./types.js";

export type Type = IterableContainer;

export interface IterableModule
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    EnumerableContainerBaseTypeClass<Type> {
  toObservable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;
}

export type Signature = IterableModule;

export const empty: Signature["empty"] = Iterable_empty;
export const enumerate: Signature["enumerate"] = Iterable_enumerate;
export const fromFactory: Signature["fromFactory"] = Iterable_fromFactory;
export const fromIterable: Signature["fromIterable"] = Iterable_fromIterable;
export const fromOptional: Signature["fromOptional"] = Iterable_fromOptional;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Iterable_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Iterable_fromValue;
export const fromEnumeratorFactory: Signature["fromEnumeratorFactory"] =
  Iterable_fromEnumeratorFactory;
export const toIterable: Signature["toIterable"] = Iterable_toIterable;
export const toObservable: Signature["toObservable"] = Iterable_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Iterable_toReadonlyArray;
