import { DisposableLike } from "../../../util.js";
import { DisposableRefLike } from "../util.internal.js";
declare const DisposableRef$create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export { DisposableRef$create as default };
