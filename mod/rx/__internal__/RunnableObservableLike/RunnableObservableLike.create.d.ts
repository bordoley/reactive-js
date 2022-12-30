import { SideEffect1 } from "../../../functions.mjs";
import { ObserverLike, RunnableObservableLike } from "../../../rx.mjs";
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
export { create as default };
