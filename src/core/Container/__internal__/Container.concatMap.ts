import { Container } from "../../../core.js";
import { Function1, compose } from "../../../functions.js";

const Container_concatMap =
  <C extends Container, O = never>(
    map: Container.Map<C>["map"],
    concatAll: <T>(options?: O) => Container.Operator<C, Container.Of<C, T>, T>,
  ) =>
  <TA, TB>(
    selector: Function1<TA, Container.Of<C, TB>>,
    options?: O,
  ): Container.Operator<C, TA, TB> =>
    compose(map(selector), concatAll(options));

export default Container_concatMap;
