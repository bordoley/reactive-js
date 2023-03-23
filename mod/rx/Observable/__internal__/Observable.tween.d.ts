import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_tween: (start: number, finish: number, options?: {
    duration?: number;
    easing?: Function1<number, number>;
}) => ObservableLike<number>;
export default Observable_tween;
