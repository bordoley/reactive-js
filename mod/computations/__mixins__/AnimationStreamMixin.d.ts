import { Mixin3 } from "../../__internal__/mixins.js";
import { ObservableLike } from "../../computations.js";
import { Function1, Optional } from "../../functions.js";
import { BackpressureStrategy, SchedulerLike } from "../../utils.js";
import { type AnimationLike } from "../Streamable.js";
export declare const AnimationLike_isRunning: unique symbol;
declare const AnimationStreamMixin: <TEvent, T>() => Mixin3<AnimationLike<TEvent, T>, Function1<TEvent, ObservableLike<T>>, SchedulerLike, Optional<{
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>>;
export default AnimationStreamMixin;
