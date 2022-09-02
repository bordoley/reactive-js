import { EnumerableObservableLike } from "../../rx.mjs";
import { Lift, TReactive } from "../containers/StatefulContainerLike.internal.mjs";
declare const lift: Lift<EnumerableObservableLike, TReactive>["lift"];
export { lift };
