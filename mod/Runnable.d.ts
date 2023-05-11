import { SideEffect1 } from "./functions.js";
import { RunnableContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
export interface Signature extends RunnableContainerTypeClass<Type> {
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableLike<T>>;
}
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const first: Signature["first"];
export declare const forEach: Signature["forEach"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
