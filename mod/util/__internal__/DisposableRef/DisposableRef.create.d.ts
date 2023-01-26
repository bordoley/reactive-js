import { DisposableLike } from "../../../util.js";
import { DisposableRefLike } from "../util.internal.js";
declare const DisposableRef_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRef_create as default };
