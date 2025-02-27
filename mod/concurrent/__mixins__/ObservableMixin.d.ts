import { Mixin1 } from "../../__internal__/mixins.js";
import { ComputationLike_isPure } from "../../computations.js";
import { ObservableLike, ObservableLike_isDeferred, ObservableLike_isRunnable } from "../../concurrent.js";
declare const ObservableMixin: Mixin1<Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ObservableLike_isRunnable>, Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ObservableLike_isRunnable>>;
export default ObservableMixin;
