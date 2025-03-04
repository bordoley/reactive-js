import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import {
  Factory,
  Optional,
  SideEffect1,
  identity,
  isFunction,
  isSome,
  none,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";

const Observable_onSubscribe: Observable.Signature["onSubscribe"] = (<T>(
    f: Factory<DisposableLike | SideEffect1<Optional<Error>> | void>,
  ) =>
  (obs: ObservableLike<T>) =>
    Observable_createWithConfig(
      (observer: ObserverLike<T>) => {
        obs[ObservableLike_observe](observer);

        const disposable = f() || none;
        pipe(
          observer,
          isFunction(disposable)
            ? DisposableContainer.onDisposed(disposable)
            : isSome(disposable)
              ? Disposable.add(disposable)
              : identity,
        );
      },
      {
        [ComputationLike_isSynchronous]: obs[ComputationLike_isSynchronous],
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isPure]: false,
      },
    )) as Observable.Signature["onSubscribe"];

export default Observable_onSubscribe;
