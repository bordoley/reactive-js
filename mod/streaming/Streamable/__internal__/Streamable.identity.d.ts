import { StreamableLike } from "../../../streaming.js";
declare const Streamable_identity: <T>() => StreamableLike<T, T, import("../../../streaming.js").StreamLike<T, T, {
    type: "complete" | "wait" | "drain";
}>>;
export default Streamable_identity;
