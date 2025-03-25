import { Readable, Transform, Writable } from "stream";
import { Function1 } from "../functions.js";
import { DisposableLike } from "../utils.js";
interface NodeStreamModule {
    add<TNodeStream extends NodeStream>(disposable: DisposableLike): Function1<TNodeStream, TNodeStream>;
    addTo<TNodeStream extends NodeStream>(disposable: DisposableLike): Function1<TNodeStream, TNodeStream>;
    addToNodeStream<TDisposable extends DisposableLike>(stream: NodeStream): Function1<TDisposable, TDisposable>;
}
export type Signature = NodeStreamModule;
export type NodeStream = Readable | Writable | Transform;
export declare const add: Signature["add"];
export declare const addTo: Signature["addTo"];
export declare const addToNodeStream: Signature["addToNodeStream"];
export {};
