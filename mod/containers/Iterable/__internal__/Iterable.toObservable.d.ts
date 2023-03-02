import { IterableLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface IterableToObservable {
    <T>(): Function1<IterableLike<T>, EnumerableLike<T>>;
    <T>(options: unknown): Function1<IterableLike<T>, RunnableLike<T>>;
    <T>(options: {
        delay: number;
        delayStart?: boolean;
    }): Function1<IterableLike<T>, RunnableLike<T>>;
}
declare const Iterable_toObservable: IterableToObservable;
export default Iterable_toObservable;
