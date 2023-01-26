import { FromArray } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$fromArray: FromArray<ObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}>["fromArray"];
export { Observable$fromArray as default };
