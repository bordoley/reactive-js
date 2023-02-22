import { Compute, ContainerLike, ContainerOf } from "../../../containers.js";
import { Factory, error, raise } from "../../../functions.js";

const Container_throws =
  <C extends ContainerLike, O = unknown>(compute: Compute<C, O>["compute"]) =>
  <T>(
    options?: O & {
      raise?: Factory<unknown>;
    },
  ): ContainerOf<C, T> => {
    const { raise: factory = raise } = options ?? {};
    return compute(() => raise<T>(error(factory())), options);
  };

export default Container_throws;
