import { IterableLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface IterableToObservable {
    toObservable<T>(): Function1<IterableLike<T>, EnumerableLike<T>>;
    toObservable<T>(options: unknown): Function1<IterableLike<T>, RunnableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<IterableLike<T>, RunnableLike<T>>;
}
declare const Iterable_toObservable: IterableToObservable["toObservable"];
export default Iterable_toObservable;
