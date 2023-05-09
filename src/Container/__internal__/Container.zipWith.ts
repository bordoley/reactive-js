import { Container, ContainerTypeClass, Containers } from "../../containers.js";

const Container_zipWith =
  <C extends Container>(zip: ContainerTypeClass<C>["zip"]) =>
  (
    snd: Containers.Of<C, any>,
    ...tail: readonly Containers.Of<C, any>[]
  ): Containers.Operator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);

export default Container_zipWith;
