import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { CatchError, ContainerOperator } from "../../../containers";
import { Function1, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike } from "../../../rx";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$catchErrorMixin from "../Sink/Sink.catchErrorMixin";

const HigherOrderObservable$catchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    const typedCatchErrorSink = Sink$catchErrorMixin<C, ObserverLike<T>, T>();
    const typedObserverMixin = Observer$mixin<T>();

    return createInstanceFactory(
      mix(
        include(typedCatchErrorSink, typedObserverMixin),
        function CatchErrorObserver(
          instance: unknown,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ObservableLike<T> | void>,
        ): ObserverLike<T> {
          init(typedCatchErrorSink, instance, delegate, errorHandler);
          init(typedObserverMixin, instance, Observer$getScheduler(delegate));

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

export default HigherOrderObservable$catchError;
