import { Updater, Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => ObservableLike<T>;
export { Observable_generate as default };
