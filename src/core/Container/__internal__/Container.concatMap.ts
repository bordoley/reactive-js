import { Container, Containers } from "../../../core.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap =
  <C extends Container, O = never>(
    map: Containers.TypeClass<C>["map"],
    concatAll: <T>(
      options?: O,
    ) => Containers.Operator<C, Containers.Of<C, T>, T>,
  ) =>
  <TA, TB>(
    selector: Function1<TA, Containers.Of<C, TB>>,
    options?: O,
  ): Containers.Operator<C, TA, TB> =>
    compose(map(selector), concatAll(options));

export default Container_concatMap;
