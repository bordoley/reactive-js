import { RunnableLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
declare const Observable_keyFrame: (duration: number, options?: {
    readonly easing?: Function1<number, number>;
}) => RunnableLike<number>;
export default Observable_keyFrame;
