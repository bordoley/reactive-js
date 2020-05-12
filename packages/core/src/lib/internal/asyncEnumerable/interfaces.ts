import { StreamableLike } from "../../streamable";

export interface AsyncEnumerableLike<T> extends StreamableLike<void, T> {}
