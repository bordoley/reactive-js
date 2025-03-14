import { EventListenerLike_notify, SinkLike, SinkLike_complete, SinkLike_isCompleted } from "../../../utils.js";
import AbstractDelegatingDisposableSink from "./AbstractDelegatingDisposableSink.js";
export declare const AbstractSink_delegate: unique symbol;
declare abstract class AbstractSink<TA, TB = TA, TDelegate extends SinkLike<TB> = SinkLike<TB>> extends AbstractDelegatingDisposableSink<TA> implements SinkLike<TA> {
    [SinkLike_isCompleted]: boolean;
    [AbstractSink_delegate]: TDelegate;
    constructor(sink: TDelegate);
    abstract [EventListenerLike_notify](next: TA): void;
    [SinkLike_complete](): void;
}
export default AbstractSink;
