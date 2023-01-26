import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$defer: <T>(factory: Factory<ObservableLike<T>>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { Observable$defer as default };
