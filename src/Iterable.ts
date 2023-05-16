import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_fromReadonlyArray from "./Iterable/__internal__/Iterable.fromReadonlyArray.js";
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

export const enumerate: Signature["enumerate"] = Iterable_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Iterable_fromReadonlyArray;
export const toObservable: Signature["toObservable"] = Iterable_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Iterable_toReadonlyArray;
