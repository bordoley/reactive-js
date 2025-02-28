import { Mixin1 } from "../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous } from "../../computations.js";
import { ObservableLike, ObservableLike_isDeferred } from "../../concurrent.js";
declare const ObservableMixin: Mixin1<Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>, Pick<ObservableLike, typeof ObservableLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>>;
export default ObservableMixin;
