import { Container } from "../../../core.js";
import { alwaysFalse } from "../../../functions.js";

const Container_ignoreElements =
  <C extends Container>(keep: Container.Keep<C>["keep"]) =>
  <T>(): Container.Operator<C, unknown, T> =>
    keep(alwaysFalse) as Container.Operator<C, unknown, T>;

export default Container_ignoreElements;
