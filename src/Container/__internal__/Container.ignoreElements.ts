import { alwaysFalse } from "../../functions.js";
import { Container, Containers } from "../../types.js";

const Container_ignoreElements =
  <C extends Container>(keep: Containers.TypeClass<C>["keep"]) =>
  <T>(): Containers.Operator<C, unknown, T> =>
    keep(alwaysFalse) as Containers.Operator<C, unknown, T>;

export default Container_ignoreElements;
