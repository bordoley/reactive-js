import { Container } from "../../../core.js";
import { pipe, returns } from "../../../functions.js";

const Container_mapTo =
  <C extends Container>(map: Container.TypeClass<C>["map"]) =>
  <TA, TB>(value: TB): Container.Operator<C, TA, TB> =>
    pipe(value, returns, map);

export default Container_mapTo;
