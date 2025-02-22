import { SinkLike, SinkLike_complete, SinkLike_isComplete, SinkLike_next } from "../../../computations.js";
export declare const AbstractSink_delegate: unique symbol;
declare abstract class AbstractSink<TA, TB = TA> implements SinkLike<TA> {
    [SinkLike_isComplete]: boolean;
    [AbstractSink_delegate]: SinkLike<TB>;
    constructor(sink: SinkLike<TB>);
    abstract [SinkLike_next](next: TA): void;
    [SinkLike_complete](): void;
}
export default AbstractSink;
