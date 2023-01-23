import { Updater, Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const ObservableLike__generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => ObservableLike<T>;
export { ObservableLike__generate as default };
