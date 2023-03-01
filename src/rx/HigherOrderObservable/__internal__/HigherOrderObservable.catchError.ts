import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { CatchError, ContainerOperator } from "../../../containers.js";
import { Function1, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observer_decorateNotifyForDev from "../../Observer/__internal__/Observer.decorateNotifyForDev.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";

const HigherOrderObservable_catchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = Sink_catchErrorMixin<C, T>();

    return createInstanceFactory(
      mix(
        include(typedCatchErrorSink),
        function CatchErrorObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ObservableLike<T> | void>,
        ): ObserverLike<T> {
          init(typedCatchErrorSink, instance, delegate, errorHandler);

          return instance;
        },
        props<unknown>({}),
        Observer_decorateNotifyForDev(typedCatchErrorSink),
      ),
    );
  })();

  return (<T>(errorHandler: Function1<unknown, ObservableLike<T> | void>) =>
    pipe(
      createCatchErrorObserver,
      partial(errorHandler),
      lift,
    )) as CatchError<C>["catchError"];
};

export default HigherOrderObservable_catchError;
