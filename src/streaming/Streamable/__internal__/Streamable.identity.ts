import { identity } from "../../../functions.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";

const instance = /*@__PURE__*/ (<T>() =>
  Streamable_createWithConfig<T, T>(identity, {
    [StreamableLike_isEnumerable]: true,
    [StreamableLike_isInteractive]: true,
    [StreamableLike_isRunnable]: true,
  }))();

const Streamable_identity = <T>(): StreamableLike<T, T> =>
  instance as StreamableLike<T, T>;

export default Streamable_identity;
