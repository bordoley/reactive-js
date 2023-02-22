import {
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  Zip,
} from "../../../containers.js";

const Container_zipWith =
  <C extends ContainerLike>(zip: Zip<C>["zip"]) =>
  (
    snd: ContainerOf<C, any>,
    ...tail: readonly ContainerOf<C, any>[]
  ): ContainerOperator<C, any, any> =>
  fst =>
    (zip as any)(fst, snd, ...tail);

export default Container_zipWith;
