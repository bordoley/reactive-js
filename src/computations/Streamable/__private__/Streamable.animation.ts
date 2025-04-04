import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  PureSynchronousObservableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../computations.js";
import { Function1, isFunction, returns } from "../../../functions.js";
import type * as Streamable from "../../Streamable.js";
import AnimationStreamMixin from "../../__mixins__/AnimationStreamMixin.js";

export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");

const Streamable_animation: Streamable.Signature["animation"] = /*@__PURE__*/ (<
  TEvent,
  T,
>() => {
  const createAnimationStream = createInstanceFactory(
    AnimationStreamMixin<TEvent, T>(),
  );

  return (
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
  ): StreamableLike<TEvent, T, Streamable.AnimationLike<TEvent, T>> => {
    const f = isFunction(animation) ? animation : returns(animation);

    return {
      [StreamableLike_stream]: (scheduler, options) =>
        createAnimationStream(f, scheduler, options),
    };
  };
})();

export default Streamable_animation;
