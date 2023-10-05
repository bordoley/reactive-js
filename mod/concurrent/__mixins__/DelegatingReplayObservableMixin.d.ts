import { Mixin1 } from "../../__internal__/mixins.js";
import { ReplayObservableLike } from "../../concurrent.js";
declare const DelegatingReplayObservableMixin: <T>() => Mixin1<ReplayObservableLike<T>, ReplayObservableLike<T>>;
export default DelegatingReplayObservableMixin;
