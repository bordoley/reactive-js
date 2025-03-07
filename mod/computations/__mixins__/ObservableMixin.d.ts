import { Mixin1 } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ObservableLike } from "../../computations.js";
declare const ObservableMixin: Mixin1<Pick<ObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>, Pick<ObservableLike, typeof ComputationLike_isDeferred | typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous>>;
export default ObservableMixin;
