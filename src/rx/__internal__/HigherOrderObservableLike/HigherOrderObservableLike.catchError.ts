import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { CatchError, ContainerOperator } from "../../../containers";
import { Function1, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__catchErrorMixin from "../SinkLike/SinkLike.catchErrorMixin";

const HigherOrderObservableLike__catchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = SinkLike__catchErrorMixin<
      C,
      ObserverLike<T>,
      T
    >();
    const typedObserverMixin = ObserverLike__mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedCatchErrorSink, typedObserverMixin),
        function CatchErrorObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ObservableLike<T> | void>,
        ): ObserverLike<T> {
          init(typedCatchErrorSink, instance, delegate, errorHandler);
          init(
            typedObserverMixin,
            instance,
            ObserverLike__getScheduler(delegate),
          );

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

export default HigherOrderObservableLike__catchError;
