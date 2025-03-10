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
  ObserverLike_notify,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import ObserverMixin from "./ObserverMixin.js";

const DelegatingObserverMixin: <T>() => Mixin1<
  ObserverLike<T>,
  ObserverLike,
  DisposableLike
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      ObserverLike<T>,
      object,
      Pick<ObserverLike<T>, typeof ObserverLike_notify>,
      DisposableLike,
      ObserverLike<T>
    >(
      include(ObserverMixin<T>()),
      function DelegatingObserverMixin(
        this: DisposableLike &
          Pick<ObserverLike<T>, typeof ObserverLike_notify>,
        delegate: ObserverLike,
      ): ObserverLike<T> {
        init(ObserverMixin<T>(), this, delegate, delegate);
        pipe(this, Disposable.addTo(delegate));

        return this;
      },
      props(),
      {
        [ObserverLike_notify](this: ObserverLike, _: T) {},
      },
    ),
  ))();

export default DelegatingObserverMixin;
