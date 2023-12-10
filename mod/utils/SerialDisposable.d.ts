import { DisposableLike, SerialDisposableLike } from "../utils.js";
export declare const create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
