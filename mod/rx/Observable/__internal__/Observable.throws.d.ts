import { Throws } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_throws: Throws<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export default Observable_throws;
