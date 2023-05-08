import { init } from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../core.js";
import Disposable_addTo from "../../../core/Disposable/__internal__/Disposable.addTo.js";
import { pipe } from "../../../functions.js";
import Observer_mixin from "./Observer.mixin.js";

interface ObserverMixinInitFromDelegate {
  Observer_mixin_initFromDelegate<T>(
    instance: unknown,
    delegate: ObserverLike,
  ): asserts instance is ObserverLike<T>;
}
const Observer_mixin_initFromDelegate: ObserverMixinInitFromDelegate["Observer_mixin_initFromDelegate"] =
  (instance: unknown, delegate: ObserverLike) => {
    init(Observer_mixin(), instance, delegate, delegate);
    pipe(instance, Disposable_addTo(delegate));
  };

export default Observer_mixin_initFromDelegate;
