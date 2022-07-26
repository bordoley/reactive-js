import { PromiseLike } from "../containers.mjs";
import { ToObservable } from "../rx.mjs";
declare const toObservable: ToObservable<PromiseLike>["toObservable"];
declare const toObservableT: ToObservable<PromiseLike>;
export { toObservable, toObservableT };
