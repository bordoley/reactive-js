import { Function1 } from "../../../functions.js";
import { DispatcherLike, ObservableLike } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
declare const Observable_subscribeWithDispatcherConfig: <T>(dispatcher: DispatcherLike) => Function1<ObservableLike<T>, DisposableLike>;
export default Observable_subscribeWithDispatcherConfig;
