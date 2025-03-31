import { Mixin1 } from "../../__internal__/mixins.js";
import { PublisherLike } from "../../computations.js";
import { Optional } from "../../functions.js";
import { DisposableLike } from "../../utils.js";
type TPrototype<T> = Omit<PublisherLike<T>, keyof DisposableLike>;
type TOptions = Optional<{
    readonly autoDispose?: boolean;
}>;
declare const PublisherMixin: <T>() => Mixin1<PublisherLike<T>, TOptions, TPrototype<T>>;
export default PublisherMixin;
