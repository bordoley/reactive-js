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
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_enqueue,
} from "../../../utils.js";
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

  function onThrowIfEmptyObserverComplete(
    this: TProperties & LiftedObserverLike<T>,
  ) {
    const factory = this[ThrowIfEmptyObserver_factory];
    const delegate = this[LiftedObserverLike_delegate];

    let err: Optional<Error> = none;
    if (this[ThrowIfEmptyObserver_isEmpty]) {
      try {
        err = error(factory());
      } catch (e) {
        err = error(e);
      }
    }
    delegate[DisposableLike_dispose](err);
  }

  return mixInstanceFactory(
    include(DisposableMixin, LiftedObserverMixin<T>()),
    function ThrowIfEmptyObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        Mutable<TProperties>,
      delegate: ObserverLike<T>,
      factory: Factory<unknown>,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      pipe(this, Disposable.addTo(delegate));

      this[ThrowIfEmptyObserver_factory] = factory;

      pipe(
        this,
        DisposableContainer.onComplete(onThrowIfEmptyObserverComplete),
      );

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptyObserver_isEmpty]: true,
      [ThrowIfEmptyObserver_factory]: none,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        this[ThrowIfEmptyObserver_isEmpty] = false;
        return (
          delegate?.[LiftedObserverLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next)
        );
      },
    }),
  );
})();

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = <T>(
  factory: Factory<unknown>,
) =>
  pipe(
    createThrowIfEmptyObserver<T>,
    partial(factory),
    Observable_liftPureDeferred,
  );

export default Observable_throwIfEmpty;
