import { EventListenerLike_notify, SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";
export declare const DelegatingNonCompletingSink_inner: unique symbol;
declare class DelegatingNonCompletingSink<T> extends AbstractDelegatingDisposableSink<T> implements SinkLike<T> {
    readonly [DelegatingNonCompletingSink_inner]: SinkLike<T>;
    constructor(inner: SinkLike<T>);
    get [SinkLike_isCompleted](): boolean;
    [EventListenerLike_notify](next: T): void;
    [SinkLike_complete](): void;
}
export default DelegatingNonCompletingSink;
