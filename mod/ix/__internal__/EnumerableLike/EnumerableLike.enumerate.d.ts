import { EnumerableLike, EnumeratorLike } from "../../../ix.mjs";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
export { enumerate as default };
