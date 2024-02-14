import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../concurrent.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createThrowIfEmptyObserver = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptyObserver_delegate = Symbol("ThrowIfEmptyObserver_delegate");
  const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");

  type TProperties = {
    [ThrowIfEmptyObserver_delegate]: ObserverLike<T>;
    [ThrowIfEmptyObserver_isEmpty]: boolean;
  };

  return createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DisposableMixin, DelegatingObserverMixin<T>()),
        function ThrowIfEmptyObserver(
          instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          factory: Factory<unknown>,
        ): ObserverLike<T> {
          init(DisposableMixin, instance);
          init(DelegatingObserverMixin(), instance, delegate);

          instance[ThrowIfEmptyObserver_delegate] = delegate;

          pipe(
            instance,
            DisposableContainer.onComplete(() => {
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
          [ObserverLike_notify](
            this: TProperties & DisposableLike & ObserverLike<T>,
            next: T,
          ) {
            this[ThrowIfEmptyObserver_isEmpty] = false;
            this[ThrowIfEmptyObserver_delegate][ObserverLike_notify](next);
          },
        },
      ),
    ),
  );
})();

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (
  factory: Factory<unknown>,
) =>
  pipe(
    createThrowIfEmptyObserver,
    partial(factory),
    Observable_liftPureDeferred,
  );

export default Observable_throwIfEmpty;
