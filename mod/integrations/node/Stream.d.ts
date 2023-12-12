/// <reference types="node" resolution-mode="require"/>
import { Readable, Writable } from "stream";
import { DeferredSideEffectsObservableLike, FlowableLike, PauseableObservableLike } from "../../concurrent.js";
import { Factory, Function1 } from "../../functions.js";
interface NodeStreamModule {
    flow(): Function1<Factory<Readable> | Readable, FlowableLike<Uint8Array>>;
    sinkInto(factory: Writable | Factory<Writable>): Function1<PauseableObservableLike<Uint8Array>, DeferredSideEffectsObservableLike<void>>;
}
type Signature = NodeStreamModule;
export declare const flow: Signature["flow"];
export declare const sinkInto: Signature["sinkInto"];
export {};
