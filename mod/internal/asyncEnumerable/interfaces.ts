import { StreamableLike } from "../../streamable.ts";

/** @noInheritDoc */
export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}
