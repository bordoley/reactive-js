import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../Disposable/__internal__/Disposable.onError.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import {
  Containers,
  ObservableContainer,
  StatefulContainers,
} from "../../containers.js";
import {
  Function1,
  bindMethod,
  error,
  isSome,
  partial,
  pipe,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../types.js";

const HigherOrderObservable_catchError = <C extends ObservableContainer.Type>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => Containers.Operator<C, T, T>,
): StatefulContainers.TypeClass<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    return createInstanceFactory(
      mix(
        include(Observer_mixin<T>(), Delegating_mixin()),
        function CatchErrorObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, Containers.Of<C, T> | void>,
        ): ObserverLike<T> {
          init(Observer_mixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);

          pipe(
            instance,
            Disposable_onComplete(bindMethod(delegate, DisposableLike_dispose)),
            Disposable_onError((err: Error) => {
              try {
                const result = errorHandler(err) as Containers.Of<C, T>;
                if (isSome(result)) {
                  result[ObservableLike_observe](delegate);
                } else {
                  delegate[DisposableLike_dispose]();
                }
              } catch (e) {
                delegate[DisposableLike_dispose](error([e, err]));
              }
            }),
          );

          return instance;
        },
        props({}),
        {
          [ObserverLike_notify](
            this: DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
            next: T,
          ) {
            Observer_assertState(this);
            this[DelegatingLike_delegate][ObserverLike_notify](next);
          },
        },
      ),
    );
  })();

  return (<T>(errorHandler: Function1<unknown, Containers.Of<C, T> | void>) =>
    pipe(
      createCatchErrorObserver,
      partial(errorHandler),
      lift,
    )) as StatefulContainers.TypeClass<C>["catchError"];
};

export default HigherOrderObservable_catchError;
