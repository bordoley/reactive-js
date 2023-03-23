import { Factory, Function2, Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_generate: <T>(generator: Updater<T> | Function2<T, number, T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => ObservableLike<T>;
export default Observable_generate;
