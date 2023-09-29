import * as Disposable from "../../../utils/Disposable.js";
import { init } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { ObserverLike } from "../../../concurrent.js";
import { DisposableLike } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

interface ObserverMixinInitFromDelegate {
  Observer_mixin_initFromDelegate<T>(
    instance: DisposableLike,
    delegate: ObserverLike,
  ): asserts instance is ObserverLike<T>;
}
const Observer_mixin_initFromDelegate: ObserverMixinInitFromDelegate["Observer_mixin_initFromDelegate"] =
  (instance: DisposableLike, delegate: ObserverLike) => {
    init(ObserverMixin(), instance, delegate, delegate);
    pipe(instance, Disposable.addTo(delegate));
  };

export default Observer_mixin_initFromDelegate;
