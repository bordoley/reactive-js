import {
  ContainerLike,
  ContainerOperator,
  Defer,
  Map,
} from "../../../containers.js";
import { newInstance, pipe } from "../../../functions.js";

const Container_encodeUtf8 =
  <C extends ContainerLike>(
    m: Defer<C> & Map<C>,
  ): ContainerOperator<C, string, Uint8Array> =>
  obs =>
    m.defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(
        obs,
        m.map(s => textEncoder.encode(s)),
      );
    });

export default Container_encodeUtf8;
