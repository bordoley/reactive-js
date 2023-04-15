import { EventPublisherLike } from "../../../util.js";
declare const EventPublisher_createRefCounted: <T>(options?: {
    readonly replay?: number;
}) => EventPublisherLike<T>;
export default EventPublisher_createRefCounted;
