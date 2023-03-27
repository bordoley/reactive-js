import { ContainerLike, Defer, EncodeUtf8, Map } from "../../../containers.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";

const Container_encodeUtf8 =
  <C extends ContainerLike>(
    defer: Defer<C>["defer"],
    map: Map<C>["map"],
  ): EncodeUtf8<C>["encodeUtf8"] =>
  _ =>
  container =>
    defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(container, map(bindMethod(textEncoder, "encode")));
    });

export default Container_encodeUtf8;
