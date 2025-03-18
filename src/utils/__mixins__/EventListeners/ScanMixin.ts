import { Mixin2, mix, props } from "../../../__internal__/mixins.js";
import { Factory, Reducer, error, none, returns } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import {
  LiftedEventListenerLike,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../LiftedEventListenerMixin.js";

const ScanMixin: <T, TAcc>() => Mixin2<
  Pick<LiftedEventListenerLike<T, TAcc>, typeof LiftedEventListenerLike_notify>,
  Reducer<T, TAcc>,
  Factory<TAcc>,
  DisposableLike
> = /*@__PURE__*/ (<T, TAcc>() => {
  const ScanMixin_acc = Symbol("ScanMixin_acc");
  const ScanMixin_reducer = Symbol("ScanMixin_reducer");

  type TProperties = {
    [ScanMixin_acc]: TAcc;
    [ScanMixin_reducer]: Reducer<T, TAcc>;
  };

  return returns(
    mix<
      Pick<
        LiftedEventListenerLike<T, TAcc>,
        typeof LiftedEventListenerLike_notify
      >,
      TProperties,
      Pick<
        LiftedEventListenerLike<T, TAcc>,
        typeof LiftedEventListenerLike_notify
      >,
      DisposableLike,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(
      function ScanMixin(
        this: Pick<
          LiftedEventListenerLike<T, TAcc>,
          typeof LiftedEventListenerLike_notify
        > &
          TProperties &
          DisposableLike,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): Pick<
        LiftedEventListenerLike<T, TAcc>,
        typeof LiftedEventListenerLike_notify
      > {
        this[ScanMixin_reducer] = reducer;

        try {
          this[ScanMixin_acc] = initialValue();
        } catch (e) {
          this[DisposableLike_dispose](error(e));
        }

        return this;
      },
      props<TProperties>({
        [ScanMixin_acc]: none,
        [ScanMixin_reducer]: none,
      }),
      {
        [LiftedEventListenerLike_notify](
          this: TProperties & LiftedEventListenerLike<T, TAcc>,
          next: T,
        ) {
          const oldAcc = this[ScanMixin_acc];
          const nextAcc = this[ScanMixin_reducer](oldAcc, next);
          this[ScanMixin_acc] = nextAcc;

          this[LiftedEventListenerLike_notifyDelegate](nextAcc);
        },
      },
    ),
  );
})();

export default ScanMixin;
