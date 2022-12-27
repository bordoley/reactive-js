import { ToObservable } from "../../../rx.mjs";
import { FlowableLike } from "../../../streaming.mjs";
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
export { toObservable as default };
