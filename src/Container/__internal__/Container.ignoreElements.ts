import { Container, ContainerTypeClass, Containers } from "../../containers.js";
import { alwaysFalse } from "../../functions.js";

const Container_ignoreElements =
  <C extends Container>(keep: ContainerTypeClass<C>["keep"]) =>
  <T>(): Containers.Operator<C, unknown, T> =>
    keep(alwaysFalse) as Containers.Operator<C, unknown, T>;

export default Container_ignoreElements;
