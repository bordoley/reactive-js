import { Function1 } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Observable_tween: (start: number, finish: number, options?: {
    duration?: number;
    easing?: Function1<number, number>;
}) => RunnableLike<number>;
export default Observable_tween;
