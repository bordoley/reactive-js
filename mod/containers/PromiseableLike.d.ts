import { PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
declare const toObservable: ToObservable<PromiseableLike>["toObservable"];
declare const toObservableT: ToObservable<PromiseableLike>;
export { toObservable, toObservableT };
