import type { Animation } from "../../Runnable.js";
import { RunnableLike } from "../../types.js";
declare const Runnable_animate: <T = number>(configs: Animation<T> | readonly Animation<T>[]) => RunnableLike<T>;
export default Runnable_animate;
