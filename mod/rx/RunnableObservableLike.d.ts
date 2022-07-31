import { ForEach, Map, ToReadonlyArray } from "../containers.mjs";
import { Factory } from "../functions.mjs";
import { RunnableObservableLike } from "../rx.mjs";
import { VirtualTimeSchedulerLike } from "../scheduling.mjs";
declare const forEach: ForEach<RunnableObservableLike>["forEach"];
declare const forEachT: ForEach<RunnableObservableLike>;
declare const map: Map<RunnableObservableLike>["map"];
declare const mapT: Map<RunnableObservableLike>;
declare const toReadonlyArray: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableObservableLike, {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
}>;
export { forEach, forEachT, map, mapT, toReadonlyArray, toReadonlyArrayT };
