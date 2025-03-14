import { SinkLike, SinkLike_complete, SinkLike_isCompleted, SinkLike_push } from "../../../utils.js";
export declare const DelegatingNonCompletingSink_inner: unique symbol;
declare class DelegatingNonCompletingSink<T> implements SinkLike<T> {
    readonly [DelegatingNonCompletingSink_inner]: SinkLike<T>;
    constructor(inner: SinkLike<T>);
    get [SinkLike_isCompleted](): boolean;
    [SinkLike_push](next: T): void;
    [SinkLike_complete](): void;
}
export default DelegatingNonCompletingSink;
