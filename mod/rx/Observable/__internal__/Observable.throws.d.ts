import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ObservableThrows {
    <T>(): EnumerableLike<T>;
    <T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableLike<T>;
    <T>(options: {
        readonly delay: number;
        readonly raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
declare const Observable_throws: ObservableThrows;
export default Observable_throws;
