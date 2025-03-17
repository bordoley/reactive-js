import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  Factory,
  Optional,
  error,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { DisposableLike_dispose, ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const createThrowIfEmptyObserver: <T>(
  delegate: ObserverLike<T>,
  factory: Factory<unknown>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const ThrowIfEmptyObserver_isEmpty = Symbol("ThrowIfEmptyObserver_isEmpty");
  const ThrowIfEmptyObserver_factory = Symbol("ThrowIfEmptyObserver_factory");

  type TProperties = {
    [ThrowIfEmptyObserver_isEmpty]: boolean;
    [ThrowIfEmptyObserver_factory]: Factory<unknown>;
  };

  return mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin<T>()),
    function ThrowIfEmptyObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      factory: Factory<unknown>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[ThrowIfEmptyObserver_factory] = factory;

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptyObserver_isEmpty]: true,
      [ThrowIfEmptyObserver_factory]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[ThrowIfEmptyObserver_isEmpty] = false;
        this[LiftedEventListenerLike_notifyDelegate](next);
      },
      [LiftedSinkLike_complete](this: TProperties & LiftedObserverLike<T>) {
        const factory = this[ThrowIfEmptyObserver_factory];

        let err: Optional<Error> = none;
        if (this[ThrowIfEmptyObserver_isEmpty]) {
          try {
            err = error(factory());
          } catch (e) {
            err = error(e);
          }
          this[DisposableLike_dispose](err);
        } else {
          this[LiftedSinkLike_completeDelegate]();
        }
      },
    }),
  );
})();

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (<T>(
  factory: Factory<unknown>,
) =>
  pipe(
    createThrowIfEmptyObserver<T>,
    partial(factory),
    Observable_liftPureDeferred,
  )) as Observable.Signature["throwIfEmpty"];

export default Observable_throwIfEmpty;
