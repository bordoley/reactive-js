import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Reducer, none, returns } from "../../functions.js";
import {
  EventListenerLike_notify,
  ObserverLike,
  SinkLike,
} from "../../utils.js";
import DisposableMixin from "./DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "./DisposeOnCompleteSinkMixin.js";

export const ReducerSinkMixin: <T, TAcc>() => Mixin2<
  SinkLike<T>,
  Reducer<T, TAcc>,
  [TAcc]
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ReducerSinkMixin_accumulatorRef = Symbol(
    "ReducerSinkMixin_accumulatorRef",
  );
  const ReducerSinkMixin_reducer = Symbol("ReducerSinkMixin_reducer");

  type TProperties = {
    [ReducerSinkMixin_accumulatorRef]: [TAcc];
    [ReducerSinkMixin_reducer]: Reducer<T, TAcc>;
  };

  type TPrototype = Pick<ObserverLike<T>, typeof EventListenerLike_notify>;

  return returns(
    mix(
      include(DisposableMixin, DisposeOnCompleteSinkMixin()),
      function ReducerSinkMixin(
        this: TProperties & TPrototype,
        reducer: Reducer<T, TAcc>,
        ref: [TAcc],
      ): SinkLike<T> {
        init(DisposableMixin, this);
        init(DisposeOnCompleteSinkMixin(), this);

        this[ReducerSinkMixin_reducer] = reducer;
        this[ReducerSinkMixin_accumulatorRef] = ref;

        return this;
      },
      props<TProperties>({
        [ReducerSinkMixin_accumulatorRef]: none,
        [ReducerSinkMixin_reducer]: none,
      }),
      proto<TPrototype>({
        [EventListenerLike_notify](this: TProperties, next: T) {
          const ref = this[ReducerSinkMixin_accumulatorRef];
          const reducer = this[ReducerSinkMixin_reducer];
          const acc = ref[0];

          ref[0] = reducer(acc, next);
        },
      }),
    ),
  );
})();
