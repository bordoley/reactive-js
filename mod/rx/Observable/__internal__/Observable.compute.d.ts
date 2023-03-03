import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ObservableCompute {
    <T>(factory: Factory<T>): EnumerableLike<T>;
    <T>(factory: Factory<T>, options: {
        delay: number;
    }): RunnableLike<T>;
}
declare const Observable_compute: ObservableCompute;
export default Observable_compute;
