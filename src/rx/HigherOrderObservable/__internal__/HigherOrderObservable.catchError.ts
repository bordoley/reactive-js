import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  CatchError,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, error, isSome, partial, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  QueueableLike_maxBufferSize,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_catchError = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<T>>,
  ) => ContainerOperator<C, T, T>,
): CatchError<C>["catchError"] => {
  const createCatchErrorObserver = (<T>() => {
    return createInstanceFactory(
      mix(
        include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
        function CatchErrorObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify>,
          delegate: ObserverLike<T>,
          errorHandler: Function1<unknown, ContainerOf<C, T> | void>,
        ): ObserverLike<T> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);
          init(
            Observer_mixin<T>(),
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
          );

          pipe(
            instance,
            Disposable_addToIgnoringChildErrors(delegate),
            Disposable_onComplete(delegate[DisposableLike_dispose], delegate),
            Disposable_onError((err: Error) => {
              try {
                const result = errorHandler(err) as ContainerOf<C, T>;
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

  return (<T>(errorHandler: Function1<unknown, ContainerOf<C, T> | void>) =>
    pipe(
      createCatchErrorObserver,
      partial(errorHandler),
      lift,
    )) as CatchError<C>["catchError"];
};

export default HigherOrderObservable_catchError;
