import { Container, DeferredTypeClass } from "../../containers.js";

const Container_concatWith =
  <C extends Container.Type>(concat: DeferredTypeClass<C>["concat"]) =>
  <T>(
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ): Container.Operator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
