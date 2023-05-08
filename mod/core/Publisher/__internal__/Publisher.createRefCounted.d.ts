import { PublisherLike } from "../../../core.js";
declare const Publisher_createRefCounted: <T>(options?: {
    readonly replay?: number;
}) => PublisherLike<T>;
export default Publisher_createRefCounted;
