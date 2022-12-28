import { Lift, TReactive } from "../../../containers/__internal__/containers.internal.mjs";
import { RunnableObservableLike } from "../../../rx.mjs";
declare const lift: Lift<RunnableObservableLike, TReactive>["lift"];
export { lift as default };
