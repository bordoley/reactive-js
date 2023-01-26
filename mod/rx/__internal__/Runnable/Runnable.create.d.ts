import { SideEffect1 } from "../../../functions.js";
import { SinkLike, RunnableLike } from "../../../rx.js";
declare const Runnable$create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
export { Runnable$create as default };
