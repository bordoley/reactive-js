import { SideEffect1 } from "../../../functions.js";
import { SinkLike, RunnableLike } from "../../../rx.js";
declare const Runnable_create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
export { Runnable_create as default };
