import { Function1 } from "../functions.mjs";
import { ObservableLike, ToObservable } from "../rx.mjs";
import { FlowableLike } from "../streaming.mjs";
declare const toObservable: <T>() => Function1<FlowableLike<T>, ObservableLike<T>>;
declare const toObservableT: ToObservable<FlowableLike>;
export { toObservable, toObservableT };
