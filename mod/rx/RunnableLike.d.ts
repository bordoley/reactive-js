import { Map, ContainerOperator, ToReadonlyArray } from "../containers.mjs";
import { SideEffect1 } from "../functions.mjs";
import { RunnableLike } from "../rx.mjs";
declare const map: Map<RunnableLike>["map"];
declare const mapT: Map<RunnableLike>;
declare const onNotify: <T>(onNotify: SideEffect1<T>) => ContainerOperator<RunnableLike, T, T>;
declare const run: <T>() => (runnable: RunnableLike<T>) => void;
declare const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<RunnableLike>;
export { map, mapT, onNotify, run, toReadonlyArray, toReadonlyArrayT };
