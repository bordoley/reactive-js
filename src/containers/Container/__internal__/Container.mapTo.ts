import { Container, ContainerOperator } from "../../../containers.js";
import { pipe, returns } from "../../../functions.js";

const Container_mapTo =
  <C extends Container>(map: Container.Map<C>["map"]) =>
  <TA, TB>(value: TB): ContainerOperator<C, TA, TB> =>
    pipe(value, returns, map);

export default Container_mapTo;
