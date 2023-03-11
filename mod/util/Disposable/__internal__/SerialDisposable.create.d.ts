import { SerialDisposableLike } from "../../../__internal__/util.internal.js";
import { DisposableLike } from "../../../util.js";
declare const SerialDisposable_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
export default SerialDisposable_create;
