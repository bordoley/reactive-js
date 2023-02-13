import { FromReadonlyArray } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_fromReadonlyArray: FromReadonlyArray<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export { Observable_fromReadonlyArray as default };
