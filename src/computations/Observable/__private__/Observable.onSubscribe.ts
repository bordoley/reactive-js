import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
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
import { DisposableLike, ObserverLike } from "../../../utils.js";
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
        [ComputationLike_isPure]: false,
      },
    )) as Observable.Signature["onSubscribe"];

export default Observable_onSubscribe;
