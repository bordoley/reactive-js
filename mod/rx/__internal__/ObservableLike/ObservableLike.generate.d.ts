import { Updater, Factory } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => ObservableLike<T>;
export { ObservableLike__generate as default };
