import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { CatchError, ContainerOperator } from "../../../containers.js";
import { Function1, partial, pipe } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";

const HigherOrderObservable_catchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = Sink_catchErrorMixin<C, ObserverLike<T>, T>();
    const typedObserverMixin = Observer_mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedCatchErrorSink, typedObserverMixin),
        function CatchErrorObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ObservableLike<T> | void>,
        ): ObserverLike<T> {
          init(typedCatchErrorSink, instance, delegate, errorHandler);
          init(typedObserverMixin, instance, Observer_getScheduler(delegate));

          return instance;
        },
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
