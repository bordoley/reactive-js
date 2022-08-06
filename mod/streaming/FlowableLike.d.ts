import { ToObservable } from "../rx.mjs";
import { FlowableLike } from "../streaming.mjs";
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
declare const toObservableT: ToObservable<FlowableLike>;
export { toObservable, toObservableT };
