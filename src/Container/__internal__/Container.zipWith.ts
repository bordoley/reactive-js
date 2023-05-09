import { Container, ContainerTypeClass } from "../../containers.js";

const Container_zipWith =
  <C extends Container.Type>(zip: ContainerTypeClass<C>["zip"]) =>
  (
    snd: Container.Of<C, any>,
    ...tail: readonly Container.Of<C, any>[]
  ): Container.Operator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);

export default Container_zipWith;
