import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __ThrowIfEmptyObserver_isEmpty } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { Factory, Optional, error, none, pipe } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_createThrowIfEmptyObserver = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__ThrowIfEmptyObserver_isEmpty]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, Delegating_mixin(), Observer_mixin<T>()),
      function ThrowIfEmptyObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        factory: Factory<unknown>,
      ): ObserverLike<T> {
        init(Disposable_mixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        pipe(
          instance,
          Disposable_onComplete(() => {
            let err: Optional<Error> = none;

            if (instance[__ThrowIfEmptyObserver_isEmpty]) {
              try {
                err = error(factory());
              } catch (e) {
                err = error(e);
              }
            }
            delegate[DisposableLike_dispose](err);
          }),
        );

        return instance;
      },
      props<TProperties>({
        [__ThrowIfEmptyObserver_isEmpty]: true,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            DisposableLike &
            DelegatingLike<ObserverLike<T>> &
            ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          this[__ThrowIfEmptyObserver_isEmpty] = false;
          this[DelegatingLike_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Observer_createThrowIfEmptyObserver;
