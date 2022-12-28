import { Lift, TReactive } from "../../../containers/__internal__/containers.internal.mjs";
import { EnumerableObservableLike } from "../../../rx.mjs";
declare const lift: Lift<EnumerableObservableLike, TReactive>["lift"];
export { lift as default };
