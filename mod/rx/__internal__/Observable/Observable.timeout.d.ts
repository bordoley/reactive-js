import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$timeout: (duration: number | ObservableLike<unknown>) => Function1<ObservableLike<unknown>, ObservableLike<unknown>>;
export { Observable$timeout as default };
