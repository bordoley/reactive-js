import { Mixin1 } from "../../__internal__/mixins.js";
import { EventSourceLike_addEventListener, PublisherLike } from "../../computations.js";
import { Optional } from "../../functions.js";
import { EventListenerLike_notify } from "../../utils.js";
declare const PublisherMixin: <T>() => Mixin1<PublisherLike<T>, Optional<{
    readonly autoDispose?: boolean;
}>, unknown, Pick<PublisherLike<T>, typeof EventSourceLike_addEventListener | typeof EventListenerLike_notify>>;
export default PublisherMixin;
