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
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "./ObserverMixin.js";

const DelegatingObserverMixin: <T>() => Mixin1<
  ObserverLike<T>,
  ObserverLike,
  ObserverMixinBaseLike<T> & DisposableLike
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix<
      ObserverLike<T>,
      object,
      ObserverMixinBaseLike<T>,
      ObserverMixinBaseLike<T> & DisposableLike,
      ObserverLike<T>
    >(
      include(ObserverMixin<T>()),
      function DelegatingObserverMixin(
        this: DisposableLike & ObserverMixinBaseLike<T>,
        delegate: ObserverLike,
      ): ObserverLike<T> {
        init(ObserverMixin<T>(), this, delegate, delegate);
        pipe(this, Disposable.addTo(delegate));

        return this;
      },
      props(),
      {
        [ObserverMixinBaseLike_notify](this: ObserverLike, _: T) {
          return this[QueueableLike_isReady];
        },
      },
    ),
  ))();

export default DelegatingObserverMixin;
