import type { AnimationConfig } from "../../Runnable.js";
import { RunnableLike } from "../../types.js";
declare const Runnable_animate: <T = number>(configs: AnimationConfig.Description<T> | readonly AnimationConfig.Description<T>[]) => RunnableLike<T>;
export default Runnable_animate;
