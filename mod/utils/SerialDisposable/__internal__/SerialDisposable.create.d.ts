import { DisposableLike, SerialDisposableLike } from "../../../utils.js";
declare const SerialDisposable_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
export default SerialDisposable_create;
