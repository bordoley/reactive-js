import { SourceLike } from "../../../computations.js";
import { Optional } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
export declare const createMergeAllConsumer: <TInnerSource extends SourceLike<T, ConsumerLike<T>>, T>(delegate: ConsumerLike<T>, options: Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
}>) => ConsumerLike<TInnerSource>;
export declare const Producer_mergeAll: Producer.Signature["mergeAll"];
export declare const Producer_concatAll: Producer.Signature["concatAll"];
