import { SinkLike, SinkLike_complete, SinkLike_isComplete, SinkLike_next } from "../../../computations.js";
export declare const AbstractSink_delegate: unique symbol;
declare abstract class AbstractSink<TA, TB = TA, TDelegate extends SinkLike<TB> = SinkLike<TB>> implements SinkLike<TA> {
    [SinkLike_isComplete]: boolean;
    [AbstractSink_delegate]: TDelegate;
    constructor(sink: TDelegate);
    abstract [SinkLike_next](next: TA): void;
    [SinkLike_complete](): void;
}
export default AbstractSink;
