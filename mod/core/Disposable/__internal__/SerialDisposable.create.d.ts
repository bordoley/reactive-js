import { SerialDisposableLike } from "../../../__internal__/core.js";
import { DisposableLike } from "../../../core.js";
declare const SerialDisposable_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
export default SerialDisposable_create;
