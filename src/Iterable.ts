import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_fromReadonlyArray from "./Iterable/__internal__/Iterable.fromReadonlyArray.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import Iterable_toRunnable from "./Iterable/__internal__/Iterable.toRunnable.js";
import { Function1 } from "./functions.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  EnumerableContainerBaseTypeClass,
} from "./type-classes.js";
import { EnumerableLike, IterableContainer, RunnableLike } from "./types.js";

export type Type = IterableContainer;

export interface Signature
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    EnumerableContainerBaseTypeClass<Type> {
  toEnumerable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;

  toRunnable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
  toRunnable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, RunnableLike<T>>;
}

export const enumerate: Signature["enumerate"] = Iterable_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Iterable_fromReadonlyArray;
export const toEnumerable: Signature["toEnumerable"] = Iterable_toRunnable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Iterable_toReadonlyArray;
export const toRunnable: Signature["toRunnable"] = Iterable_toRunnable;
