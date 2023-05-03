import { identity } from "../../../functions.js";
import { StreamableLike } from "../../../rx.js";
import Streamable_create from "./Streamable.create.js";

const instance = /*@__PURE__*/ (<T>() => Streamable_create<T, T>(identity))();

const Streamable_identity = <T>(): StreamableLike<T, T> =>
  instance as StreamableLike<T, T>;

export default Streamable_identity;
