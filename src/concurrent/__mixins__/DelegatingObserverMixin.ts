import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../concurrent.js";
import { Function2, pipe, returns } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import ObserverMixin from "./ObserverMixin.js";

const DelegatingObserverMixin: <T>() => Mixin1<
  ObserverLike<T>,
  ObserverLike,
  DisposableLike
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      Function2<
        DisposableLike & Pick<ObserverLike<T>, typeof ObserverLike_notify>,
        ObserverLike,
        ObserverLike<T>
      >,
      object,
      Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      DisposableLike
    >(
      include(ObserverMixin<T>()),
      function DelegatingObserverMixin(
        instance: DisposableLike &
          Pick<ObserverLike<T>, typeof ObserverLike_notify>,
        delegate: ObserverLike,
      ): ObserverLike<T> {
        init(ObserverMixin<T>(), instance, delegate, delegate);
        pipe(instance, Disposable.addTo(delegate));

        return instance;
      },
      props(),
      {
        [ObserverLike_notify](this: ObserverLike, _: T) {},
      },
    ),
  ))();

export default DelegatingObserverMixin;
