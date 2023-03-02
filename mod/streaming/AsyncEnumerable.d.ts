import { Generate, Keep, Map, Scan, TakeWhile } from "../containers.js";
import { ObservableLike, ScanAsync, ToObservable } from "../rx.js";
import { AsyncEnumerableLike } from "../streaming.js";
export declare const generate: Generate<AsyncEnumerableLike, {
    delay: number;
}>["generate"];
export declare const keep: Keep<AsyncEnumerableLike>["keep"];
export declare const map: Map<AsyncEnumerableLike>["map"];
export declare const scan: Scan<AsyncEnumerableLike>["scan"];
export declare const scanAsync: ScanAsync<AsyncEnumerableLike, ObservableLike>["scanAsync"];
export declare const takeWhile: TakeWhile<AsyncEnumerableLike>["takeWhile"];
export declare const toObservable: ToObservable<AsyncEnumerableLike>["toObservable"];
