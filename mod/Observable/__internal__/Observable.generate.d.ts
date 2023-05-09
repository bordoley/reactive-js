import { Factory, Updater } from "../../functions.js";
import { EnumerableLike, RunnableLike } from "../../types.js";
interface ObservableGenerate {
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
}
declare const Observable_generate: ObservableGenerate["generate"];
export default Observable_generate;
