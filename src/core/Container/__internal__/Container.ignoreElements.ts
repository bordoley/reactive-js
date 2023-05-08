import { Container, Containers } from "../../../core.js";
import { alwaysFalse } from "../../../functions.js";

const Container_ignoreElements =
  <C extends Container>(keep: Containers.TypeClass<C>["keep"]) =>
  <T>(): Containers.Operator<C, unknown, T> =>
    keep(alwaysFalse) as Containers.Operator<C, unknown, T>;

export default Container_ignoreElements;
