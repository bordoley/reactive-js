import { ToObservable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
declare const toObservableT: ToObservable<FlowableLike>;
export { toObservable, toObservableT };
