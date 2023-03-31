import { identity } from "../../../functions.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_createLifted from "./Streamable.createLifted.js";

const instance = /*@__PURE__*/ (<T>() =>
  Streamable_createLifted<T, T>(identity, true, true, true))();

const Streamable_identity = <T>(): StreamableLike<T, T> =>
  instance as StreamableLike<T, T>;

export default Streamable_identity;
