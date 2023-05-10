import { alwaysFalse } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_ignoreElements =
  <C extends Container>(keep: ContainerTypeClass<C>["keep"]) =>
  <T>(): ContainerOperator<C, unknown, T> =>
    keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export default Container_ignoreElements;
