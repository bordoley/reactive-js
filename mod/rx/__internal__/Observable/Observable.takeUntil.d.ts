import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$takeUntil: <T>(notifier: ObservableLike) => Function1<ObservableLike<T>, ObservableLike<T>>;
export { Observable$takeUntil as default };
