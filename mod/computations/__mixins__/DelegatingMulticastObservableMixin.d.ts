import { Mixin1 } from "../../__internal__/mixins.js";
import { MulticastObservableLike } from "../../computations.js";
import { DisposableContainerLike } from "../../utils.js";
declare const DelegatingMulticastObservableMixin: <T>() => Mixin1<Omit<MulticastObservableLike<T>, keyof DisposableContainerLike>, MulticastObservableLike<T>>;
export default DelegatingMulticastObservableMixin;
