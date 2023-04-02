import { Function1 } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
declare const Observable_tween: (duration: number, options?: {
    readonly easing?: Function1<number, number>;
}) => RunnableLike<number>;
export default Observable_tween;
