import { Function1, Optional } from "../../../functions.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
interface OptionalToObservable {
    <T>(): Function1<Optional<T>, EnumerableLike<T>>;
    <T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    <T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, ObservableLike<T>>;
}
declare const Optional_toObservable: OptionalToObservable;
export default Optional_toObservable;
