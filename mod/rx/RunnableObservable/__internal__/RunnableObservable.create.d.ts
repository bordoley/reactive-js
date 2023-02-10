import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, RunnableObservableLike } from "../../../rx.js";
declare const RunnableObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
export { RunnableObservable_create as default };
