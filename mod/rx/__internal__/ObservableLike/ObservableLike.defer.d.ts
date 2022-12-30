import { Factory } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const defer: <T>(factory: Factory<ObservableLike<T>>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { defer as default };
