import { Function1, compose } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOf, ContainerOperator } from "../../types.js";

const Container_concatMap =
  <C extends Container, O = never>(
    map: ContainerTypeClass<C>["map"],
    concatAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>,
  ) =>
  <TA, TB>(
    selector: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ): ContainerOperator<C, TA, TB> =>
    compose(map(selector), concatAll(options));

export default Container_concatMap;
