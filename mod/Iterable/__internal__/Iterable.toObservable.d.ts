import { Function1 } from "../../functions.js";
import { EnumerableLike, RunnableLike } from "../../types.js";
interface IterableToObservable {
    toObservable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
    toObservable<T>(options: unknown): Function1<Iterable<T>, RunnableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
}
declare const Iterable_toObservable: IterableToObservable["toObservable"];
export default Iterable_toObservable;
