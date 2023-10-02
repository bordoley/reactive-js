import { ObserverLike } from "../../../concurrent.js";
import { DisposableLike } from "../../../utils.js";
declare const Observer_mixin_initFromDelegate: <T>(instance: DisposableLike, delegate: ObserverLike) => asserts instance is ObserverLike<T>;
export default Observer_mixin_initFromDelegate;
