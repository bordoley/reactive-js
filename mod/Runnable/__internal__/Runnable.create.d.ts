import { SideEffect1 } from "../../functions.js";
import { ObservableLike_isPure, ObserverLike, RunnableBaseLike, RunnableLike, RunnableWithSideEffectsLike } from "../../types.js";
interface RunnableCreate {
    create<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isPure]: true;
    }): RunnableLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isPure]: false;
    }): RunnableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>, config: {
        readonly [ObservableLike_isPure]: boolean;
    }): RunnableBaseLike<T>;
}
declare const Runnable_create: RunnableCreate["create"];
export default Runnable_create;
