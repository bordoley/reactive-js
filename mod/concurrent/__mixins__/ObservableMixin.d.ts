import { Mixin1 } from "../../__internal__/mixins.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable } from "../../concurrent.js";
declare const ObservableMixin: Mixin1<Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>, Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ObservableLike_isMulticasted | typeof ObservableLike_isPure | typeof ObservableLike_isRunnable>>;
export default ObservableMixin;
