import { Factory } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
declare const Observable_onSink: <C extends ObservableLike<unknown>>(createObservable: (f: (onSink: ObserverLike) => void) => C, src: C, f: Factory<DisposableOrTeardown | void>) => C;
export default Observable_onSink;
