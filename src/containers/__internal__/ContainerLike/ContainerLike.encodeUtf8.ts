import {
  ContainerLike,
  ContainerOperator,
  Defer,
  Map,
} from "../../../containers";
import { newInstance, pipe } from "../../../functions";

const ContainerLike__encodeUtf8 =
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

export default ContainerLike__encodeUtf8;
