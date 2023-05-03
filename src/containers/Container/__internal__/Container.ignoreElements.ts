import { Container, ContainerOperator } from "../../../containers.js";
import { alwaysFalse } from "../../../functions.js";

const Container_ignoreElements =
  <C extends Container>(keep: Container.Keep<C>["keep"]) =>
  <T>(): ContainerOperator<C, unknown, T> =>
    keep(alwaysFalse) as ContainerOperator<C, unknown, T>;

export default Container_ignoreElements;
