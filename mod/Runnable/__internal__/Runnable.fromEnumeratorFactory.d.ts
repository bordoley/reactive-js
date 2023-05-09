import { Factory } from "../../functions.js";
import { EnumerableLike, EnumeratorLike, RunnableLike } from "../../types.js";
interface RunnableFromEnumeratorFactory {
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>): EnumerableLike<T>;
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>, options: unknown): RunnableLike<T>;
}
declare const Runnable_fromEnumeratorFactory: RunnableFromEnumeratorFactory["fromEnumeratorFactory"];
export default Runnable_fromEnumeratorFactory;
