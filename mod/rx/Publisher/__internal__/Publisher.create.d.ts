import { PublisherLike } from "../../../rx.js";
declare const Publisher_create: <T>(options?: {
    readonly replay?: number;
}) => PublisherLike<T>;
export default Publisher_create;
