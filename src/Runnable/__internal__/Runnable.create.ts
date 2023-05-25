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
    config: {
      readonly [ObservableLike_isPure]: true;
    },
  ): RunnableLike<T>;
  create<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isPure]: false;
    },
  ): RunnableWithSideEffectsLike<T>;
  create<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isPure]: boolean;
    },
  ): RunnableBaseLike<T>;
}
const Runnable_create: RunnableCreate["create"] = (<T>(
  f: SideEffect1<ObserverLike<T>>,
  config: {
    readonly [ObservableLike_isPure]: boolean;
  },
) =>
  Observable_createWithConfig(f, {
    ...config,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: true,
  })) as RunnableCreate["create"];

export default Runnable_create;
