import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __WithLatestLike_hasLatest,
  __WithLatestLike_otherLatest,
  __WithLatestLike_selector,
} from "../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  WithLatestLike,
} from "../../__internal__/types.js";
import { Function2, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObservableLike,
  ObserverLike,
  SinkLike_notify,
} from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_delegatingMixin from "./Observer.delegatingMixin.js";

const Observer_createWithLatestObserver: <TA, TB, T>(
  delegate: ObserverLike<T>,
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB, T>() =>
  createInstanceFactory(
    mix(
      include(Observer_delegatingMixin(), Delegating_mixin()),
      function WithLatestLike(
        instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
          WithLatestLike<TA, TB, T>,
        delegate: ObserverLike<T>,
        other: ObservableLike<TB>,
        selector: Function2<TA, TB, T>,
      ): ObserverLike<TA> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(Delegating_mixin(), instance, delegate);
        instance[__WithLatestLike_selector] = selector;

        pipe(
          other,
          Observable_forEach((next: TB) => {
            instance[__WithLatestLike_hasLatest] = true;
            instance[__WithLatestLike_otherLatest] = next;
          }),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable_addTo(instance),
          Disposable_onComplete(() => {
            if (!instance[__WithLatestLike_hasLatest]) {
              instance[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<WithLatestLike<TA, TB, T>>({
        [__WithLatestLike_hasLatest]: false,
        [__WithLatestLike_otherLatest]: none,
        [__WithLatestLike_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: WithLatestLike<TA, TB, T> &
            ObserverLike<TA> &
            DelegatingLike<ObserverLike<T>>,
          next: TA,
        ) {
          Observer_assertState(this);

          if (
            !this[DisposableLike_isDisposed] &&
            this[__WithLatestLike_hasLatest]
          ) {
            const result = this[__WithLatestLike_selector](
              next,
              this[__WithLatestLike_otherLatest] as TB,
            );
            this[DelegatingLike_delegate][SinkLike_notify](result);
          }
        },
      },
    ),
  ))();

export default Observer_createWithLatestObserver;
