import { Container, Containers } from "../../../core.js";
import { pipe, returns } from "../../../functions.js";

const Container_mapTo =
  <C extends Container>(map: Containers.TypeClass<C>["map"]) =>
  <TA, TB>(value: TB): Containers.Operator<C, TA, TB> =>
    pipe(value, returns, map);

export default Container_mapTo;
