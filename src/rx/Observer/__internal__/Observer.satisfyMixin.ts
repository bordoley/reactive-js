import { PredicatedLike } from "../../../__internal__/containers.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __PredicatedLike_predicate } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
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
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";

const Observer_satisfyMixin: <T>(
  defaultResult: boolean,
) => Mixin2<
  ObserverLike<T>,
  ObserverLike<boolean>,
  Predicate<T>,
  Pick<ObserverLike<T>, typeof ObserverLike_notify>
> = <T>(defaultResult: boolean) =>
  mix(
    include(Delegating_mixin(), Observer_mixin<T>()),
    function SatisfyObserver(
      instance: PredicatedLike<T> &
        Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      delegate: ObserverLike<boolean>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(Observer_mixin(), instance, delegate, delegate);
      init(Delegating_mixin(), instance, delegate);
      instance[__PredicatedLike_predicate] = predicate;

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
    props<PredicatedLike<T>>({
      [__PredicatedLike_predicate]: none,
    }),
    {
      [ObserverLike_notify](
        this: PredicatedLike<T> &
          DelegatingLike<ObserverLike<boolean>> &
          ObserverLike<T>,
        next: T,
      ) {
        Observer_assertState(this);

        if (this[__PredicatedLike_predicate](next)) {
          this[DelegatingLike_delegate][ObserverLike_notify](!defaultResult);
          this[DelegatingLike_delegate][DisposableLike_dispose]();
        }
      },
    },
  );

export default Observer_satisfyMixin;
