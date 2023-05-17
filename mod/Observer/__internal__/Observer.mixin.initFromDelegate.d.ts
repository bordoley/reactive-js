import { DisposableLike, ObserverLike } from "../../types.js";
interface ObserverMixinInitFromDelegate {
    Observer_mixin_initFromDelegate<T>(instance: DisposableLike, delegate: ObserverLike): asserts instance is ObserverLike<T>;
}
declare const Observer_mixin_initFromDelegate: ObserverMixinInitFromDelegate["Observer_mixin_initFromDelegate"];
export default Observer_mixin_initFromDelegate;
