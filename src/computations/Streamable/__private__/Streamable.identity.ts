import { StreamableLike } from "../../../computations.js";
import { identity } from "../../../functions.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const instance = /*@__PURE__*/ (<T>() => Streamable_create<T, T>(identity))();

const Streamable_identity: Streamable.Signature["identity"] = <T>() =>
  instance as StreamableLike<T, T>;

export default Streamable_identity;
