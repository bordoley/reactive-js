/// <reference types="node" resolution-mode="require"/>
import { Readable, Writable } from "stream";
import { DeferredObservableWithSideEffectsLike, FlowableLike } from "../../concurrent.js";
import { Factory, Function1 } from "../../functions.js";
interface NodeStreamModule {
    sinkInto(factory: Writable): Function1<FlowableLike<Uint8Array>, DeferredObservableWithSideEffectsLike<Uint8Array>>;
    toFlowable(): Function1<Factory<Readable>, FlowableLike<Uint8Array>>;
}
type Signature = NodeStreamModule;
export declare const toFlowable: Signature["toFlowable"];
export declare const sinkInto: Signature["sinkInto"];
export {};
