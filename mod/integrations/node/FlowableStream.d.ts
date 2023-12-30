/// <reference types="node" resolution-mode="require"/>
import { Readable, Writable } from "stream";
import { DeferredObservableWithSideEffectsLike, FlowableLike } from "../../concurrent.js";
import { Factory, Function1 } from "../../functions.js";
interface FlowableStreamModule {
    create(factory: Factory<Readable>): FlowableLike<Uint8Array>;
    writeTo(writable: Writable): Function1<FlowableLike<Uint8Array>, DeferredObservableWithSideEffectsLike<Uint8Array>>;
}
type Signature = FlowableStreamModule;
export declare const create: Signature["create"];
export declare const writeTo: Signature["writeTo"];
export {};
