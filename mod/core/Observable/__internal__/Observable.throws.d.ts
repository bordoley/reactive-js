import { EnumerableLike, RunnableLike } from "../../../core.js";
import { Factory } from "../../../functions.js";
interface ObservableThrows {
    throws<T>(): EnumerableLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableLike<T>;
    throws<T>(options: {
        readonly delay: number;
        readonly raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
declare const Observable_throws: ObservableThrows["throws"];
export default Observable_throws;
