import { Mixin1 } from "../../__internal__/mixins.js";
import { MulticastObservableLike } from "../../computations.js";
declare const DelegatingMulticastObservableMixin: <T>() => Mixin1<MulticastObservableLike<T>, MulticastObservableLike<T>>;
export default DelegatingMulticastObservableMixin;
