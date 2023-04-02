import {
  ContainerLike,
  ContainerOf,
  FromFactory,
} from "../../../containers.js";
import { Factory, error, raise } from "../../../functions.js";

const Container_throws =
  <C extends ContainerLike, O = unknown>(
    fromFactory: FromFactory<C, O>["fromFactory"],
  ) =>
  <T>(
    options?: O & {
      readonly raise?: Factory<unknown>;
    },
  ): ContainerOf<C, T> => {
    const { raise: factory = raise } = options ?? {};
    return fromFactory(() => raise<T>(error(factory())), options);
  };

export default Container_throws;
