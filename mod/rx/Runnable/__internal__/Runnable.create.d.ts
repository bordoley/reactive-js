import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, RunnableLike } from "../../../rx.js";
declare const Runnable_create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableLike<T>;
export default Runnable_create;
