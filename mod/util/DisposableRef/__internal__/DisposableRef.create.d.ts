import { DisposableLike } from "../../../util.js";
import { DisposableRefLike } from "../../__internal__/util.internal.js";
declare const DisposableRef_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => DisposableRefLike<TDisposable>;
export default DisposableRef_create;
