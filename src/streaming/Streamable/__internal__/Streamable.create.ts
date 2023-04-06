import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";

const Streamable_create = <TReq, T>(
  op: ContainerOperator<ObservableLike, TReq, T>,
): StreamableLike<TReq, T> =>
  Streamable_createWithConfig<TReq, T>(op, {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
  });

export default Streamable_create;
