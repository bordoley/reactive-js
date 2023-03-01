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
import { Predicate, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notify from "../../Observer/__internal__/Observer.notify.js";

const Observer_satisfyMixin: <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <C extends ObservableLike, T>(
  fromReadonlyArray: (v: readonly boolean[]) => C,
  defaultResult: boolean,
) => {
  const SatisfySinkMixin_predicate = Symbol("SatisfySinkMixin_predicate");

  type TProperties = {
    readonly [SatisfySinkMixin_predicate]: Predicate<T>;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin(), Observer_mixin<T>()),
    function SatisfySinkMixin(
      instance: Mutable<TProperties> &
        Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);
      init(Observer_mixin<T>(), instance, delegate[ObserverLike_scheduler]);

      instance[SatisfySinkMixin_predicate] = predicate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          if (!Disposable_isDisposed(delegate)) {
            pipe(
              [defaultResult],
              fromReadonlyArray,
              Observable_observeWith(delegate),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [SatisfySinkMixin_predicate]: none,
    }),
    {
      [ObserverLike_notify](
        this: TProperties & DelegatingLike<ObserverLike<boolean>>,
        next: T,
      ) {
        if (this[SatisfySinkMixin_predicate](next)) {
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
