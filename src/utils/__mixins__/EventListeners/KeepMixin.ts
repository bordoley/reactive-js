import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { Predicate, none, returns } from "../../../functions.js";
import {
  LiftedEventListenerLike,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../LiftedEventListenerMixin.js";

const KeepMixin: <T>() => Mixin1<
  Pick<LiftedEventListenerLike<T>, typeof LiftedEventListenerLike_notify>,
  Predicate<T>
> = /*@__PURE__*/ (<T>() => {
  const KeepMixin_predicate = Symbol("KeepMixin_predicate");

  type TProperties<T> = {
    [KeepMixin_predicate]: Predicate<T>;
  };

  return returns(
    mix(
      function KeepMixin(
        this: Pick<
          LiftedEventListenerLike<T>,
          typeof LiftedEventListenerLike_notify
        > &
          TProperties<T>,
        predicate: Predicate<T>,
      ): Pick<
        LiftedEventListenerLike<T>,
        typeof LiftedEventListenerLike_notify
      > {
        this[KeepMixin_predicate] = predicate;

        return this;
      },
      props<TProperties<T>>({
        [KeepMixin_predicate]: none,
      }),
      {
        [LiftedEventListenerLike_notify](
          this: TProperties<T> & LiftedEventListenerLike<T>,
          next: T,
        ) {
          const shouldNotify = this[KeepMixin_predicate](next);

          if (shouldNotify) {
            this[LiftedEventListenerLike_notifyDelegate](next);
          }
        },
      },
    ),
  );
})();

export default KeepMixin;
