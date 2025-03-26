import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, raise } from "../../../functions.js";
import {
  DisposableLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends DisposableLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  factory: Factory<unknown>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends DisposableLike,
  T,
>() => {
  const ThrowIfEmptyMixin_isEmpty = Symbol("ThrowIfEmptyMixin_isEmpty");
  const ThrowIfEmptyMixin_factory = Symbol("ThrowIfEmptyMixin_factory");

  type TProperties = {
    [ThrowIfEmptyMixin_isEmpty]: boolean;
    [ThrowIfEmptyMixin_factory]: Factory<unknown>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function ThrowIfEmptyOperator(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      factory: Factory<unknown>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
      this[ThrowIfEmptyMixin_factory] = factory;

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptyMixin_factory]: none,
      [ThrowIfEmptyMixin_isEmpty]: true,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[ThrowIfEmptyMixin_isEmpty] = false;

        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
      ) {
        const factory = this[ThrowIfEmptyMixin_factory];

        let err: Optional<Error> = none;
        if (this[ThrowIfEmptyMixin_isEmpty]) {
          try {
            err = error(factory());
          } catch (e) {
            err = error(e);
          }

          raise(err);
        }
        this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
      },
    }),
  );
})();
