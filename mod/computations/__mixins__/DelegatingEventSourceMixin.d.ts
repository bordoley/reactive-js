import { Mixin1 } from "../../__internal__/mixins.js";
import { EventSourceLike } from "../../computations.js";
import { DisposableContainerLike } from "../../utils.js";
declare const DelegatingEventSourceMixin: <T>() => Mixin1<Omit<EventSourceLike<T>, keyof DisposableContainerLike>, EventSourceLike<T>>;
export default DelegatingEventSourceMixin;
