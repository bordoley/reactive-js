import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable$create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
export { RunnableObservable$create as default };
