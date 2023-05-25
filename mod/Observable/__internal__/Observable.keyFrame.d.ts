import { Function1 } from "../../functions.js";
import { RunnableWithSideEffectsLike } from "../../types.js";
declare const Observable_keyFrame: (duration: number, options?: {
    readonly easing?: Function1<number, number>;
}) => RunnableWithSideEffectsLike<number>;
export default Observable_keyFrame;
