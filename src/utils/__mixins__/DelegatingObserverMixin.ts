import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  ObserverLike,
  QueueableLike_isReady,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_notify,
} from "./LiftedObserverMixin.js";

const DelegatingObserverMixin: <
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => Mixin1<
  LiftedObserverLike<TA, TB, TDelegateObserver>,
  ObserverLike<TB>,
  Pick<
    LiftedObserverLike<TA, TB, TDelegateObserver>,
    keyof DisposableLike | typeof LiftedObserverLike_notify
  >
> = /*@__PURE__*/ (<
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() =>
  returns(
    mix<
      LiftedObserverLike<TA, TB, TDelegateObserver>,
      object,
      Pick<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
        typeof LiftedObserverLike_notify
      >,
      Pick<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
        keyof DisposableLike | typeof LiftedObserverLike_notify
      >,
      TDelegateObserver
    >(
      include(LiftedObserverMixin<TA, TB, TDelegateObserver>()),
      function DelegatingObserverMixin(
        this: Pick<
          LiftedObserverLike<TA, TB, TDelegateObserver>,
          keyof DisposableLike | typeof LiftedObserverLike_notify
        >,
        delegate: TDelegateObserver,
      ): LiftedObserverLike<TA, TB, TDelegateObserver> {
        init(
          LiftedObserverMixin<TA, TB, TDelegateObserver>(),
          this,
          delegate,
          delegate,
        );
        pipe(this, Disposable.addTo(delegate));

        return this;
      },
      props(),
      {
        [LiftedObserverLike_notify](this: ObserverLike, _: TA) {
          return this[QueueableLike_isReady];
        },
      },
    ),
  ))();

export default DelegatingObserverMixin;
