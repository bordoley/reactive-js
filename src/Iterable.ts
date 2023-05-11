import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_fromReadonlyArray from "./Iterable/__internal__/Iterable.fromReadonlyArray.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  EnumerableContainerBaseTypeClass,
} from "./type-classes.js";
import { IterableContainer } from "./types.js";

export type Type = IterableContainer;

export interface Signature
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    EnumerableContainerBaseTypeClass<Type> {}

export const enumerate: Signature["enumerate"] = Iterable_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Iterable_fromReadonlyArray;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Iterable_toReadonlyArray;
