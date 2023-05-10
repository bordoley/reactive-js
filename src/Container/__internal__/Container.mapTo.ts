import { pipe, returns } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_mapTo =
  <C extends Container>(map: ContainerTypeClass<C>["map"]) =>
  <TA, TB>(value: TB): ContainerOperator<C, TA, TB> =>
    pipe(value, returns, map);

export default Container_mapTo;
