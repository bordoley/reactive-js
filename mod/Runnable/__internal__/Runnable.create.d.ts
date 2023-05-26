import { SideEffect1 } from "../../functions.js";
import { ObservableLike_isPure, ObserverLike, RunnableBaseLike, RunnableLike, RunnableWithSideEffectsLike } from "../../types.js";
interface RunnableCreate {
    create<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<RunnableLike, typeof ObservableLike_isPure>): RunnableLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isPure>): RunnableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>, config: Pick<RunnableBaseLike, typeof ObservableLike_isPure>): RunnableBaseLike<T>;
}
declare const Runnable_create: RunnableCreate["create"];
export default Runnable_create;
