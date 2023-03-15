import { Mixin2 } from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import { StreamLike } from "../../../streaming.js";
declare const AsyncEnumerator_delegatingMixin: <TA, TB>() => Mixin2<StreamLike<void, TB>, StreamLike<void, TA>, ContainerOperator<ObservableLike, TA, TB>>;
export default AsyncEnumerator_delegatingMixin;
