import { FromArray } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_fromArray: FromArray<ObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}>["fromArray"];
export { Observable_fromArray as default };
