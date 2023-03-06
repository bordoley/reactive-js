import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Predicate, none, pipe } from "../../../functions.js";
import {
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
import Observer_notify from "./Observer.notify.js";

const Observer_satisfyMixin: <T>(
  defaultResult: boolean,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <T>(defaultResult: boolean) => {
  const SatisfyObserverMixin_predicate = Symbol(
    "SatisfyObserverMixin_predicate",
  );

  type TProperties = {
    readonly [SatisfyObserverMixin_predicate]: Predicate<T>;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
    function SatisfyObserverMixin(
      instance: Mutable<TProperties> &
        Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);
      init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

      instance[SatisfyObserverMixin_predicate] = predicate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (!delegate[DisposableLike_isDisposed]) {
            pipe(
              [defaultResult],
              ReadonlyArray_toObservable(),
              Observable_observeWith(delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [SatisfyObserverMixin_predicate]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties &
          DelegatingLike<ObserverLike<boolean>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertState(this);

        if (this[SatisfyObserverMixin_predicate](next)) {
          pipe(
            this[DelegatingLike_delegate],
            Observer_notify(!defaultResult),
            Disposable_dispose(),
          );
        }
      },
    },
  );
};

export default Observer_satisfyMixin;
