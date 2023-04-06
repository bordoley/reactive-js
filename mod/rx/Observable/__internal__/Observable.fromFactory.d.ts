import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ObservableFromFactory {
    fromFactory<T>(factory: Factory<T>): EnumerableLike<T>;
    fromFactory<T>(factory: Factory<T>, options: {
        readonly delay: number;
    }): RunnableLike<T>;
}
declare const Observable_fromFactory: ObservableFromFactory["fromFactory"];
export default Observable_fromFactory;
