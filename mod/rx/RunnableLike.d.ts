import { Lift, TReactive } from "../__internal__/containers/StatefulContainerLikeInternal.mjs";
import { RunnableLike } from "../rx.mjs";
declare const liftT: Lift<RunnableLike<unknown>, TReactive>;
export { liftT };
