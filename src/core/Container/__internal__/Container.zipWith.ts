import { Container } from "../../../core.js";

const Container_zipWith =
  <C extends Container>(zip: Container.Zip<C>["zip"]) =>
  (
    snd: Container.Of<C, any>,
    ...tail: readonly Container.Of<C, any>[]
  ): Container.Operator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);

export default Container_zipWith;
