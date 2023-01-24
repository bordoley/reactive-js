import { ToObservable } from "../rx.js";
import { FlowableLike } from "../streaming.js";
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
export { toObservable };
