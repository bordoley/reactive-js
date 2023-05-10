import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import {
  ConcreteContainerTypeClass,
  EnumerableContainerTypeClass,
} from "./type-classes.js";
import { Container, Container_T, Container_type } from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}

export interface Signature
  extends ConcreteContainerTypeClass<Type>,
    EnumerableContainerTypeClass<Type> {}

export const enumerate: Signature["enumerate"] = Iterable_enumerate;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
