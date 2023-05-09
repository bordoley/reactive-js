import { SerialDisposableLike } from "../../__internal__/types.js";
import { DisposableLike } from "../../types.js";
declare const SerialDisposable_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
export default SerialDisposable_create;
