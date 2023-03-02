import { AsyncEnumerableLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
declare const AsyncEnumerable_toStreamable: <T>() => (enumerable: AsyncEnumerableLike<ObservableLike<unknown>, T>) => import("../../../streaming.js").StreamableLike<unknown, unknown, import("../../../streaming.js").StreamLike<unknown, unknown>>;
export default AsyncEnumerable_toStreamable;
