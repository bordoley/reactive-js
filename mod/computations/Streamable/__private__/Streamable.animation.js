/// <reference types="./Streamable.animation.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { StreamableLike_stream, } from "../../../computations.js";
import { isFunction, returns } from "../../../functions.js";
import AnimationStreamMixin from "../../__mixins__/AnimationStreamMixin.js";
export const AnimationLike_isRunning = Symbol("AnimationLike_isRunning");
const Streamable_animation = /*@__PURE__*/ (() => {
    const createAnimationStream = createInstanceFactory(AnimationStreamMixin());
    return (animation) => {
        const f = isFunction(animation) ? animation : returns(animation);
        return {
            [StreamableLike_stream]: (scheduler, options) => createAnimationStream(f, scheduler, options),
        };
    };
})();
export default Streamable_animation;
