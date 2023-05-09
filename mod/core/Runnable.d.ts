import { RunnableContainer, RunnableLike } from "../core.js";
import { Factory } from "../functions.js";
export declare const animate: RunnableContainer.TypeClass["animate"];
export declare const backpressureStrategy: RunnableContainer.TypeClass["backpressureStrategy"];
export declare const buffer: RunnableContainer.TypeClass["buffer"];
export declare const catchError: RunnableContainer.TypeClass["catchError"];
export declare const combineLatest: RunnableContainer.TypeClass["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: RunnableContainer.TypeClass["concat"];
export declare const concatAll: RunnableContainer.TypeClass["concatAll"];
export declare const concatMap: RunnableContainer.TypeClass["concatMap"];
export declare const concatWith: RunnableContainer.TypeClass["concatWith"];
export declare const contains: RunnableContainer.TypeClass["contains"];
export declare const currentTime: RunnableContainer.TypeClass["currentTime"];
export declare const decodeWithCharset: RunnableContainer.TypeClass["decodeWithCharset"];
export declare const defer: RunnableContainer.TypeClass["defer"];
export declare const dispatchTo: RunnableContainer.TypeClass["dispatchTo"];
export declare const distinctUntilChanged: RunnableContainer.TypeClass["distinctUntilChanged"];
export declare const empty: RunnableContainer.TypeClass["empty"];
export declare const encodeUtf8: RunnableContainer.TypeClass["encodeUtf8"];
export declare const enqueue: RunnableContainer.TypeClass["enqueue"];
export declare const endWith: RunnableContainer.TypeClass["endWith"];
export declare const everySatisfy: RunnableContainer.TypeClass["everySatisfy"];
export declare const exhaust: RunnableContainer.TypeClass["exhaust"];
export declare const exhaustMap: RunnableContainer.TypeClass["exhaustMap"];
export declare const first: RunnableContainer.TypeClass["first"];
export declare const firstAsync: RunnableContainer.TypeClass["firstAsync"];
export declare const flatMapIterable: RunnableContainer.TypeClass["flatMapIterable"];
export declare const flow: RunnableContainer.TypeClass["flow"];
export declare const forEach: RunnableContainer.TypeClass["forEach"];
export declare const forkConcat: RunnableContainer.TypeClass["forkConcat"];
export declare const forkMerge: RunnableContainer.TypeClass["forkMerge"];
export declare const forkZip: RunnableContainer.TypeClass["forkZip"];
export declare const forkZipLatest: RunnableContainer.TypeClass["forkZipLatest"];
export declare const fromEnumeratorFactory: RunnableContainer.TypeClass["fromEnumeratorFactory"];
export declare const fromFactory: RunnableContainer.TypeClass["fromFactory"];
export declare const fromIterable: RunnableContainer.TypeClass["fromIterable"];
export declare const fromOptional: RunnableContainer.TypeClass["fromOptional"];
export declare const fromReadonlyArray: RunnableContainer.TypeClass["fromReadonlyArray"];
export declare const generate: RunnableContainer.TypeClass["generate"];
export declare const identity: RunnableContainer.TypeClass["identity"];
export declare const ignoreElements: RunnableContainer.TypeClass["ignoreElements"];
export declare const keep: RunnableContainer.TypeClass["keep"];
export declare const keepType: RunnableContainer.TypeClass["keepType"];
export declare const last: RunnableContainer.TypeClass["last"];
export declare const lastAsync: RunnableContainer.TypeClass["lastAsync"];
export declare const noneSatisfy: RunnableContainer.TypeClass["noneSatisfy"];
export declare const map: RunnableContainer.TypeClass["map"];
export declare const mapTo: RunnableContainer.TypeClass["mapTo"];
export declare const merge: RunnableContainer.TypeClass["merge"];
export declare const mergeAll: RunnableContainer.TypeClass["mergeAll"];
export declare const mergeMap: RunnableContainer.TypeClass["mergeMap"];
export declare const mergeWith: RunnableContainer.TypeClass["mergeWith"];
export declare const pairwise: RunnableContainer.TypeClass["pairwise"];
export declare const pick: RunnableContainer.TypeClass["pick"];
export declare const reduce: RunnableContainer.TypeClass["reduce"];
export declare const repeat: RunnableContainer.TypeClass["repeat"];
export declare const retry: RunnableContainer.TypeClass["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: RunnableContainer.TypeClass["scan"];
export declare const scanLast: RunnableContainer.TypeClass["scanLast"];
export declare const scanMany: RunnableContainer.TypeClass["scanMany"];
export declare const skipFirst: RunnableContainer.TypeClass["skipFirst"];
export declare const someSatisfy: RunnableContainer.TypeClass["someSatisfy"];
export declare const startWith: RunnableContainer.TypeClass["startWith"];
export declare const switchAll: RunnableContainer.TypeClass["switchAll"];
export declare const switchMap: RunnableContainer.TypeClass["switchMap"];
export declare const takeFirst: RunnableContainer.TypeClass["takeFirst"];
export declare const takeLast: RunnableContainer.TypeClass["takeLast"];
export declare const takeUntil: RunnableContainer.TypeClass["takeUntil"];
export declare const takeWhile: RunnableContainer.TypeClass["takeWhile"];
export declare const throttle: RunnableContainer.TypeClass["throttle"];
export declare const throwIfEmpty: RunnableContainer.TypeClass["throwIfEmpty"];
interface Throws extends RunnableContainer.TypeClass {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: RunnableContainer.TypeClass["timeout"];
export declare const toReadonlyArray: RunnableContainer.TypeClass["toReadonlyArray"];
export declare const withCurrentTime: RunnableContainer.TypeClass["withCurrentTime"];
export declare const withLatestFrom: RunnableContainer.TypeClass["withLatestFrom"];
export declare const zip: RunnableContainer.TypeClass["zip"];
export declare const zipLatest: RunnableContainer.TypeClass["zipLatest"];
export declare const zipWith: RunnableContainer.TypeClass["zipWith"];
export declare const zipWithLatestFrom: RunnableContainer.TypeClass["zipWithLatestFrom"];
export {};
