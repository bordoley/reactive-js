import { EnumerableLike, ObservableLike, RunnableLike } from "../../../core.js";
import { Function1, Optional } from "../../../functions.js";
interface OptionalToObservable {
    toObservable<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    toObservable<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
declare const Optional_toObservable: OptionalToObservable["toObservable"];
export default Optional_toObservable;
