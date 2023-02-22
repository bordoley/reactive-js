import { SideEffect1 } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
declare const Runnable_create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T>;
export default Runnable_create;
