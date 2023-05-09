import { Function1 } from "../../functions.js";
import { RunnableLike } from "../../types.js";
declare const Runnable_keyFrame: (duration: number, options?: {
    readonly easing?: Function1<number, number>;
}) => RunnableLike<number>;
export default Runnable_keyFrame;
