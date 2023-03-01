import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  Function1,
  error,
  isSome,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_scheduler,
  SinkLike,
  SinkLike_notify,
} from "../../../rx.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const Sink_catchErrorMixin: <C extends ObservableLike, T>() => Mixin2<
  ObserverLike<T>,
  ObserverLike<T>,
  Function1<unknown, C | void>,
  Pick<ObserverLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<C extends ObservableLike, T>() => {
  return returns(
    mix(
      include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
      function CatchErrorSinkMixin(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
        delegate: ObserverLike<T>,
        errorHandler: Function1<unknown, C | void>,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

        pipe(
          instance,
          Disposable_addToIgnoringChildErrors(delegate),
          Disposable_onComplete(() => {
            pipe(delegate, Disposable_dispose());
          }),
          Disposable_onError((err: Error) => {
            try {
              const result = errorHandler(err) || none;
              if (isSome(result)) {
                pipe(result, Observable_observeWith(delegate));
              } else {
                pipe(delegate, Disposable_dispose());
              }
            } catch (e) {
              pipe(delegate, Disposable_dispose(error([e, err])));
            }
          }),
        );

        return instance;
      },
      props({}),
      {
        [SinkLike_notify](this: DelegatingLike<SinkLike<T>>, next: T) {
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Sink_catchErrorMixin;
