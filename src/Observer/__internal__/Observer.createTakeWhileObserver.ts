import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __TakeWhileObserver_inclusive } from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Predicate, none } from "../../functions.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = PredicatedLike<T> & {
    readonly [__TakeWhileObserver_inclusive]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function TakeWhileObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[PredicatedLike_predicate] = predicate;
        instance[__TakeWhileObserver_inclusive] = inclusive;

        return instance;
      },
      props<TProperties>({
        [PredicatedLike_predicate]: none,
        [__TakeWhileObserver_inclusive]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<ObserverLike<T>> & ObserverLike<T>,
          next: T,
        ) {
          Observer_assertState(this);

          const satisfiesPredicate = this[PredicatedLike_predicate](next);

          if (satisfiesPredicate || this[__TakeWhileObserver_inclusive]) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }

          if (!satisfiesPredicate) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );
})();

export default Observer_createTakeWhileObserver;
