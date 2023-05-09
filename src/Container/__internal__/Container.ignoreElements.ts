import { Container, ContainerTypeClass } from "../../containers.js";
import { alwaysFalse } from "../../functions.js";

const Container_ignoreElements =
  <C extends Container.Type>(keep: ContainerTypeClass<C>["keep"]) =>
  <T>(): Container.Operator<C, unknown, T> =>
    keep(alwaysFalse) as Container.Operator<C, unknown, T>;

export default Container_ignoreElements;
