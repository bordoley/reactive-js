import { EventPublisherLike } from "../../../util.js";
declare const EventPublisher_create: <T>(options?: {
    readonly replay?: number;
}) => EventPublisherLike<T>;
export default EventPublisher_create;
