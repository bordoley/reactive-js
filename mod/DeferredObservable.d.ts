import { Factory } from "./functions.js";
import { DeferredObservableContainer, DeferredObservableLike } from "./types.js";
export declare const backpressureStrategy: DeferredObservableContainer.TypeClass["backpressureStrategy"];
export declare const buffer: DeferredObservableContainer.TypeClass["buffer"];
export declare const combineLatest: DeferredObservableContainer.TypeClass["combineLatest"];
/**
 * @category Constructor
 */
export declare const concat: DeferredObservableContainer.TypeClass["concat"];
export declare const concatAll: DeferredObservableContainer.TypeClass["concatAll"];
export declare const concatMap: DeferredObservableContainer.TypeClass["concatMap"];
export declare const concatWith: DeferredObservableContainer.TypeClass["concatWith"];
export declare const create: <T>(f: import("./functions.js").SideEffect1<import("./types.js").ObserverLike<T>>) => DeferredObservableLike<T>;
export declare const decodeWithCharset: DeferredObservableContainer.TypeClass["decodeWithCharset"];
export declare const defer: DeferredObservableContainer.TypeClass["defer"];
export declare const dispatchTo: DeferredObservableContainer.TypeClass["dispatchTo"];
export declare const distinctUntilChanged: DeferredObservableContainer.TypeClass["distinctUntilChanged"];
export declare const empty: DeferredObservableContainer.TypeClass["empty"];
export declare const enqueue: DeferredObservableContainer.TypeClass["enqueue"];
export declare const endWith: DeferredObservableContainer.TypeClass["endWith"];
export declare const exhaust: DeferredObservableContainer.TypeClass["exhaust"];
export declare const exhaustMap: DeferredObservableContainer.TypeClass["exhaustMap"];
export declare const firstAsync: DeferredObservableContainer.TypeClass["firstAsync"];
export declare const forEach: DeferredObservableContainer.TypeClass["forEach"];
export declare const forkConcat: DeferredObservableContainer.TypeClass["forkConcat"];
export declare const forkMerge: DeferredObservableContainer.TypeClass["forkMerge"];
export declare const forkZip: DeferredObservableContainer.TypeClass["forkZip"];
export declare const forkZipLatest: DeferredObservableContainer.TypeClass["forkZipLatest"];
export declare const fromFactory: DeferredObservableContainer.TypeClass["fromFactory"];
export declare const fromIterable: DeferredObservableContainer.TypeClass["fromIterable"];
export declare const fromOptional: DeferredObservableContainer.TypeClass["fromOptional"];
export declare const fromReadonlyArray: DeferredObservableContainer.TypeClass["fromReadonlyArray"];
export declare const generate: DeferredObservableContainer.TypeClass["generate"];
export declare const identity: DeferredObservableContainer.TypeClass["identity"];
export declare const ignoreElements: DeferredObservableContainer.TypeClass["ignoreElements"];
export declare const keep: DeferredObservableContainer.TypeClass["keep"];
export declare const keepType: DeferredObservableContainer.TypeClass["keepType"];
export declare const lastAsync: DeferredObservableContainer.TypeClass["lastAsync"];
export declare const map: DeferredObservableContainer.TypeClass["map"];
export declare const mapTo: DeferredObservableContainer.TypeClass["mapTo"];
export declare const merge: DeferredObservableContainer.TypeClass["merge"];
export declare const mergeAll: DeferredObservableContainer.TypeClass["mergeAll"];
export declare const mergeMap: DeferredObservableContainer.TypeClass["mergeMap"];
export declare const mergeWith: DeferredObservableContainer.TypeClass["mergeWith"];
export declare const pairwise: DeferredObservableContainer.TypeClass["pairwise"];
export declare const pick: DeferredObservableContainer.TypeClass["pick"];
export declare const repeat: DeferredObservableContainer.TypeClass["repeat"];
export declare const retry: DeferredObservableContainer.TypeClass["retry"];
export declare const scan: DeferredObservableContainer.TypeClass["scan"];
export declare const share: DeferredObservableContainer.TypeClass["share"];
export declare const skipFirst: DeferredObservableContainer.TypeClass["skipFirst"];
export declare const startWith: DeferredObservableContainer.TypeClass["startWith"];
export declare const switchAll: DeferredObservableContainer.TypeClass["switchAll"];
export declare const switchMap: DeferredObservableContainer.TypeClass["switchMap"];
export declare const takeFirst: DeferredObservableContainer.TypeClass["takeFirst"];
export declare const takeLast: DeferredObservableContainer.TypeClass["takeLast"];
export declare const takeWhile: DeferredObservableContainer.TypeClass["takeWhile"];
export declare const throttle: DeferredObservableContainer.TypeClass["throttle"];
export declare const throwIfEmpty: DeferredObservableContainer.TypeClass["throwIfEmpty"];
interface Throws extends DeferredObservableContainer.TypeClass {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): DeferredObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const withCurrentTime: DeferredObservableContainer.TypeClass["withCurrentTime"];
export declare const withLatestFrom: DeferredObservableContainer.TypeClass["withLatestFrom"];
export declare const zip: DeferredObservableContainer.TypeClass["zip"];
export declare const zipLatest: DeferredObservableContainer.TypeClass["zipLatest"];
export declare const zipWith: DeferredObservableContainer.TypeClass["zipWith"];
export declare const zipWithLatestFrom: DeferredObservableContainer.TypeClass["zipWithLatestFrom"];
export {};
