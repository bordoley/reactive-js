import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observer_createThrowIfEmptyObserver = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
  const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");

  type TProperties = {
    [ThrowIfEmptyObserver_delegate]: ObserverLike<T>;
    [ThrowIfEmptyObserver_isEmpty]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(DisposableMixin, DelegatingObserverMixin<T>()),
      function ThrowIfEmptyObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        factory: Factory<unknown>,
      ): ObserverLike<T> {
        init(DisposableMixin, instance);
        init(DelegatingObserverMixin(), instance, delegate);

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

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (
  factory: Factory<unknown>,
) =>
  pipe(
    Observer_createThrowIfEmptyObserver,
    partial(factory),
    Observable_liftPure,
  );

export default Observable_throwIfEmpty;
