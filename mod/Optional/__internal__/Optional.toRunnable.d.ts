import { Function1, Optional } from "../../functions.js";
import { EnumerableLike, RunnableLike } from "../../types.js";
interface OptionalToRunnable {
    toRunnable<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    toRunnable<T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    toRunnable<T>(options?: {
        readonly delay?: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
}
declare const Optional_toRunnable: OptionalToRunnable["toRunnable"];
export default Optional_toRunnable;
