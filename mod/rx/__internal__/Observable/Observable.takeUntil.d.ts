import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_takeUntil: <T>(notifier: ObservableLike) => Function1<ObservableLike<T>, ObservableLike<T>>;
export { Observable_takeUntil as default };
