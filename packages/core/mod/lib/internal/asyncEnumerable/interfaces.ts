import { StreamableLike } from "../../streamable.ts";

export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}
