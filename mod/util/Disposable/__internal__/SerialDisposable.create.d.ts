import { DisposableLike } from "../../../util.js";
import { SerialDisposableLike } from "../../__internal__/util.internal.js";
declare const SerialDisposable_create: <TDisposable extends DisposableLike>(initialValue: TDisposable) => SerialDisposableLike<TDisposable>;
export default SerialDisposable_create;
