import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { init } from "../../__internal__/mixins.js";
import { pipe } from "../../functions.js";
import { DisposableLike, ObserverLike } from "../../types.js";
import Observer_mixin from "./Observer.mixin.js";

interface ObserverMixinInitFromDelegate {
  Observer_mixin_initFromDelegate<T>(
    instance: DisposableLike,
    delegate: ObserverLike,
  ): asserts instance is ObserverLike<T>;
}
const Observer_mixin_initFromDelegate: ObserverMixinInitFromDelegate["Observer_mixin_initFromDelegate"] =
  (instance: DisposableLike, delegate: ObserverLike) => {
    init(Observer_mixin(), instance, delegate, delegate);
    pipe(instance, Disposable_addTo(delegate));
  };

export default Observer_mixin_initFromDelegate;
