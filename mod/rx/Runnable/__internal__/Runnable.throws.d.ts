import { Throws } from "../../../containers.js";
import { RunnableLike } from "../../../rx.js";
declare const Runnable_throws: Throws<RunnableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export default Runnable_throws;
