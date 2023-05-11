import type * as Observable from "../../Observable.js";
import { RunnableLike } from "../../types.js";
declare const Observable_animate: <T = number>(configs: Observable.Animation<T> | readonly Observable.Animation<T>[]) => RunnableLike<T>;
export default Observable_animate;
