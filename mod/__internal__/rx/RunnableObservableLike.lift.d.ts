import { RunnableObservableLike } from "../../rx.mjs";
import { Lift, TReactive } from "../containers/StatefulContainerLike.internal.mjs";
declare const lift: Lift<RunnableObservableLike, TReactive>["lift"];
export { lift };
