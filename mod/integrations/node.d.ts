import fs from 'fs';
import { Readable, Writable, Transform } from 'stream';
import { BrotliOptions, ZlibOptions } from 'zlib';
import { ContainerOperator } from "../containers.mjs";
import { SideEffect1, SideEffect2, Factory, Function1, SideEffect3, Function2, SideEffect4, Function3, SideEffect5, Function4, SideEffect6, Function5 } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { FlowableLike, StreamableLike, FlowMode } from "../streaming.mjs";
interface bindNodeCallback {
    <T>(callbackFunc: SideEffect1<SideEffect2<unknown, T>>): Factory<ObservableLike<T>>;
    (callbackFunc: SideEffect1<SideEffect1<unknown>>): Factory<ObservableLike<void>>;
    <A1, T>(callbackFunc: SideEffect2<A1, SideEffect2<unknown, T>>): Function1<A1, ObservableLike<T>>;
    <A1>(callbackFunc: SideEffect2<A1, SideEffect1<unknown>>): Function1<A1, ObservableLike<void>>;
    <A1, A2, T>(callbackFunc: SideEffect3<A1, A2, SideEffect2<unknown, T>>): Function2<A1, A2, ObservableLike<T>>;
    <A1, A2>(callbackFunc: SideEffect3<A1, A2, SideEffect1<unknown>>): Function2<A1, A2, ObservableLike<void>>;
    <A1, A2, A3, T>(callbackFunc: SideEffect4<A1, A2, A3, SideEffect2<unknown, T>>): Function3<A1, A2, A3, ObservableLike<T>>;
    <A1, A2, A3>(callbackFunc: SideEffect4<A1, A2, A3, SideEffect1<unknown>>): Function3<A1, A2, A3, ObservableLike<void>>;
    <A1, A2, A3, A4, T>(callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect2<unknown, T>>): Function4<A1, A2, A3, A4, ObservableLike<T>>;
    <A1, A2, A3, A4>(callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect1<unknown>>): Function4<A1, A2, A3, A4, ObservableLike<void>>;
    <A1, A2, A3, A4, A5, T>(callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect2<unknown, T>>): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
    <A1, A2, A3, A4, A5>(callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect1<unknown>>): Function5<A1, A2, A3, A4, A5, ObservableLike<void>>;
}
declare const bindNodeCallback: bindNodeCallback;
declare const createReadableSource: (factory: Factory<Readable> | Readable) => FlowableLike<Uint8Array>;
declare const readFile: (path: fs.PathLike, options?: {
    readonly flags?: string;
    readonly mode?: number;
    readonly start?: number;
    readonly end?: number;
    readonly highWaterMark?: number;
}) => FlowableLike<Uint8Array>;
declare const createWritableSink: (factory: Factory<Writable> | Writable) => StreamableLike<Uint8Array, FlowMode>;
declare const transform: (factory: Factory<Transform>) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const brotliDecompress: (options?: BrotliOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const gunzip: (options?: ZlibOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const inflate: (options?: ZlibOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const brotliCompress: (options?: BrotliOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const gzip: (options?: ZlibOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
declare const deflate: (options?: ZlibOptions) => ContainerOperator<FlowableLike, Uint8Array, Uint8Array>;
export { bindNodeCallback, brotliCompress, brotliDecompress, createReadableSource, createWritableSink, deflate, gunzip, gzip, inflate, readFile, transform };
