import { PromiseableLike } from "../containers.mjs";
import { ToObservable } from "../rx.mjs";
declare const toObservable: ToObservable<PromiseableLike>["toObservable"];
declare const toObservableT: ToObservable<PromiseableLike>;
export { toObservable, toObservableT };
