import { Mixin1 } from "../../__internal__/mixins.js";
import { EventSourceLike } from "../../computations.js";
declare const DelegatingEventSourceMixin: <T>() => Mixin1<EventSourceLike<T>, EventSourceLike<T>>;
export default DelegatingEventSourceMixin;
