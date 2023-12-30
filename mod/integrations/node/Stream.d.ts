/// <reference types="node" resolution-mode="require"/>
import { Readable, Writable } from "stream";
import { DeferredObservableWithSideEffectsLike, FlowableLike } from "../../concurrent.js";
import { Factory, Function1 } from "../../functions.js";
interface NodeStreamModule {
    toFlowable(): Function1<Factory<Readable>, FlowableLike<Uint8Array>>;
    writeTo(factory: Writable): Function1<FlowableLike<Uint8Array>, DeferredObservableWithSideEffectsLike<Uint8Array>>;
}
type Signature = NodeStreamModule;
export declare const toFlowable: Signature["toFlowable"];
export declare const writeTo: Signature["writeTo"];
export {};
