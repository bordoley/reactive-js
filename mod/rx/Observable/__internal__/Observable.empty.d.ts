import { EnumerableLike, RunnableLike } from "../../../rx.js";
interface ObservableEmpty {
    <T>(): EnumerableLike<T>;
    <T>(options: {
        readonly delay: number;
    }): RunnableLike<T>;
}
declare const Observable_empty: ObservableEmpty;
export default Observable_empty;
