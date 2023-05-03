import {
  Container,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap =
  <C extends Container, O = never>(
    map: Container.Map<C>["map"],
    concatAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>,
  ) =>
  <TA, TB>(
    selector: Function1<TA, ContainerOf<C, TB>>,
    options?: O,
  ): ContainerOperator<C, TA, TB> =>
    compose(map(selector), concatAll(options));

export default Container_concatMap;
