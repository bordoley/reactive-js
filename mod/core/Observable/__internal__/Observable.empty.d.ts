import { EnumerableLike, RunnableLike } from "../../../core.js";
interface ObservableEmpty {
    empty<T>(): EnumerableLike<T>;
    empty<T>(options: {
        readonly delay: number;
    }): RunnableLike<T>;
}
declare const Observable_empty: ObservableEmpty["empty"];
export default Observable_empty;
