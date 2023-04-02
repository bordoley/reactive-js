import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ObservableFromFactory {
    <T>(factory: Factory<T>): EnumerableLike<T>;
    <T>(factory: Factory<T>, options: {
        readonly delay: number;
    }): RunnableLike<T>;
}
declare const Observable_fromFactory: ObservableFromFactory;
export default Observable_fromFactory;
