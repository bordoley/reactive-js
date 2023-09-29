import * as Disposable from "../../../utils/Disposable.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, pipe } from "../../../functions.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";

const Observer_createThrowIfEmptyObserver = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
  const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");

  type TProperties = {
    [ThrowIfEmptyObserver_delegate]: ObserverLike<T>;
    [ThrowIfEmptyObserver_isEmpty]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin, ObserverMixin<T>()),
      function ThrowIfEmptyObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        factory: Factory<unknown>,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        Observer_mixin_initFromDelegate(instance, delegate);

        instance[ThrowIfEmptyObserver_delegate] = delegate;

        pipe(
          instance,
          Disposable.onComplete(() => {
            let err: Optional<Error> = none;

            if (instance[ThrowIfEmptyObserver_isEmpty]) {
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
        [ThrowIfEmptyObserver_delegate]: none,
        [ThrowIfEmptyObserver_isEmpty]: true,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DisposableLike & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          this[ThrowIfEmptyObserver_isEmpty] = false;
          this[ThrowIfEmptyObserver_delegate][SinkLike_notify](next);
        },
      },
    ),
  );
})();

export default Observer_createThrowIfEmptyObserver;
