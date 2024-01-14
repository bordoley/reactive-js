import { DisposableLike } from "../../utils.js";
export declare const ContinuationLike_run: unique symbol;
export declare const ContinuationLike_dueTime: unique symbol;
export declare const ContinuationLike_id: unique symbol;
export interface ContinuationLike extends DisposableLike {
    readonly [ContinuationLike_dueTime]: number;
    readonly [ContinuationLike_id]: number;
    [ContinuationLike_run](): void;
}
export declare const compare: (a: ContinuationLike, b: ContinuationLike) => number;
