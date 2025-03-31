import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Factory, Optional, error, none, raise } from "../../../functions.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  factory: Factory<unknown>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const ThrowIfEmptySink_isEmpty = Symbol("ThrowIfEmptySink_isEmpty");
  const ThrowIfEmptySink_factory = Symbol("ThrowIfEmptySink_factory");

  type TProperties = {
    [ThrowIfEmptySink_isEmpty]: boolean;
    [ThrowIfEmptySink_factory]: Factory<unknown>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function ThrowIfEmptySink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      factory: Factory<unknown>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
      this[ThrowIfEmptySink_factory] = factory;

      return this;
    },
    props<TProperties>({
      [ThrowIfEmptySink_factory]: none,
      [ThrowIfEmptySink_isEmpty]: true,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[ThrowIfEmptySink_isEmpty] = false;

        this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties &
          DelegatingLiftedSinkLike<TSubscription, ArrayBuffer, string>,
      ) {
        const factory = this[ThrowIfEmptySink_factory];

        let err: Optional<Error> = none;
        if (this[ThrowIfEmptySink_isEmpty]) {
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
