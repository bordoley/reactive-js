import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOf, ContainerOperator } from "../../types.js";

const Container_zipWith =
  <C extends Container>(zip: ContainerTypeClass<C>["zip"]) =>
  (
    snd: ContainerOf<C, any>,
    ...tail: readonly ContainerOf<C, any>[]
  ): ContainerOperator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);

export default Container_zipWith;
