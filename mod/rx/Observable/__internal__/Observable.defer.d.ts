import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_defer: <T>(factory: Factory<ObservableLike<T>>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { Observable_defer as default };
