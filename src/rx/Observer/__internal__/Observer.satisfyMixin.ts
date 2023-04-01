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
import { SatisfyObserver_predicate } from "../../../__internal__/symbols.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Predicate, invoke, none, pipe } from "../../../functions.js";
import {
  ObservableLike_observe,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "./Observer.mixin.js";

const Observer_satisfyMixin: <T>(
  defaultResult: boolean,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <T>(defaultResult: boolean) => {
  type TProperties = {
    readonly [SatisfyObserver_predicate]: Predicate<T>;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
    function SatisfyObserver(
      instance: Mutable<TProperties> &
        Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);
      initObserverMixinFromDelegate(instance, delegate);

      instance[SatisfyObserver_predicate] = predicate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (!delegate[DisposableLike_isDisposed]) {
            pipe(
              defaultResult,
              Optional_toObservable(),
              invoke(ObservableLike_observe, delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [SatisfyObserver_predicate]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties &
          DelegatingLike<ObserverLike<boolean>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertState(this);

        if (this[SatisfyObserver_predicate](next)) {
          this[DelegatingLike_delegate][ObserverLike_notify](!defaultResult);
          this[DelegatingLike_delegate][DisposableLike_dispose]();
        }
      },
    },
  );
};

export default Observer_satisfyMixin;
