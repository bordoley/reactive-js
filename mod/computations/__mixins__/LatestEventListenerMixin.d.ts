import { Mixin2 } from "../../__internal__/mixins.js";
import { DisposableLike_isDisposed, EventListenerLike } from "../../utils.js";
export type LatestEventListenerMode = "combine-latest" | "zip-latest";
export declare const LatestEventListenerValue_value: unique symbol;
export declare const LatestEventListenerValue_hasValue: unique symbol;
export interface LatestEventListenerValue {
    [LatestEventListenerValue_hasValue]: boolean;
    [LatestEventListenerValue_value]: unknown;
    readonly [DisposableLike_isDisposed]: boolean;
}
export declare const LatestEventListenerContextLike_completedCount: unique symbol;
export declare const LatestEventListenerContextLike_mode: unique symbol;
export declare const LatestEventListenerContextLike_values: unique symbol;
export interface LatestEventListenerContextLike {
    readonly [LatestEventListenerContextLike_mode]: LatestEventListenerMode;
    readonly [LatestEventListenerContextLike_completedCount]: number;
    readonly [LatestEventListenerContextLike_values]: LatestEventListenerValue[];
}
export interface LatestEventListenerLike<T = unknown> extends EventListenerLike<T>, LatestEventListenerValue {
}
declare const LatestEventListenerMixin: () => Mixin2<LatestEventListenerLike, EventListenerLike<ReadonlyArray<unknown>>, LatestEventListenerContextLike>;
export default LatestEventListenerMixin;
