import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { SideEffect1 } from "../../functions.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  RunnableBaseLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../types.js";

interface RunnableCreate {
  create<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<RunnableLike, typeof ObservableLike_isPure>,
  ): RunnableLike<T>;
  create<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<RunnableWithSideEffectsLike, typeof ObservableLike_isPure>,
  ): RunnableWithSideEffectsLike<T>;
  create<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<RunnableBaseLike, typeof ObservableLike_isPure>,
  ): RunnableBaseLike<T>;
}
const Runnable_create: RunnableCreate["create"] = (<T>(
  f: SideEffect1<ObserverLike<T>>,
  config: Pick<RunnableBaseLike, typeof ObservableLike_isPure>,
) =>
  Observable_createWithConfig(f, {
    ...config,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: true,
  })) as RunnableCreate["create"];

export default Runnable_create;
