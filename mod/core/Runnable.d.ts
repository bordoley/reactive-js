import { Containers, DeferredContainers, EnumerableContainers, ReactiveContainers, RunnableContainer, RunnableContainers, RunnableLike, StatefulContainers } from "../core.js";
import { Factory } from "../functions.js";
export declare const animate: ReactiveContainers.TypeClass<RunnableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainers.TypeClass<RunnableContainer>["backpressureStrategy"];
export declare const buffer: Containers.TypeClass<RunnableContainer>["buffer"];
export declare const catchError: StatefulContainers.TypeClass<RunnableContainer>["catchError"];
export declare const combineLatest: ReactiveContainers.TypeClass<RunnableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: DeferredContainers.TypeClass<RunnableContainer>["concat"];
export declare const concatAll: DeferredContainers.TypeClass<RunnableContainer>["concatAll"];
export declare const concatMap: DeferredContainers.TypeClass<RunnableContainer>["concatMap"];
export declare const concatWith: DeferredContainers.TypeClass<RunnableContainer>["concatWith"];
export declare const contains: RunnableContainers.TypeClass<RunnableContainer>["contains"];
export declare const currentTime: ReactiveContainers.TypeClass<RunnableContainer>["currentTime"];
export declare const decodeWithCharset: StatefulContainers.TypeClass<RunnableContainer>["decodeWithCharset"];
export declare const defer: StatefulContainers.TypeClass<RunnableContainer>["defer"];
export declare const dispatchTo: ReactiveContainers.TypeClass<RunnableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Containers.TypeClass<RunnableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainers.TypeClass<RunnableContainer>["empty"];
export declare const encodeUtf8: StatefulContainers.TypeClass<RunnableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainers.TypeClass<RunnableContainer>["enqueue"];
export declare const endWith: DeferredContainers.TypeClass<RunnableContainer>["endWith"];
export declare const everySatisfy: RunnableContainers.TypeClass<RunnableContainer>["everySatisfy"];
export declare const exhaust: ReactiveContainers.TypeClass<RunnableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainers.TypeClass<RunnableContainer>["exhaustMap"];
export declare const first: RunnableContainers.TypeClass<RunnableContainer>["first"];
export declare const firstAsync: ReactiveContainers.TypeClass<RunnableContainer>["firstAsync"];
export declare const flatMapIterable: Containers.TypeClass<RunnableContainer>["flatMapIterable"];
export declare const flow: DeferredContainers.TypeClass<RunnableContainer>["flow"];
export declare const forEach: Containers.TypeClass<RunnableContainer>["forEach"];
export declare const forkConcat: DeferredContainers.TypeClass<RunnableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainers.TypeClass<RunnableContainer>["forkMerge"];
export declare const forkZip: Containers.TypeClass<RunnableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainers.TypeClass<RunnableContainer>["forkZipLatest"];
export declare const fromEnumeratorFactory: ReactiveContainers.TypeClass<RunnableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainers.TypeClass<RunnableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainers.TypeClass<RunnableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainers.TypeClass<RunnableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainers.TypeClass<RunnableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainers.TypeClass<RunnableContainer>["generate"];
export declare const identity: Containers.TypeClass<RunnableContainer>["identity"];
export declare const ignoreElements: Containers.TypeClass<RunnableContainer>["ignoreElements"];
export declare const keep: Containers.TypeClass<RunnableContainer>["keep"];
export declare const keepType: Containers.TypeClass<RunnableContainer>["keepType"];
export declare const last: RunnableContainers.TypeClass<RunnableContainer>["last"];
export declare const lastAsync: ReactiveContainers.TypeClass<RunnableContainer>["lastAsync"];
export declare const noneSatisfy: RunnableContainers.TypeClass<RunnableContainer>["noneSatisfy"];
export declare const map: Containers.TypeClass<RunnableContainer>["map"];
export declare const mapTo: Containers.TypeClass<RunnableContainer>["mapTo"];
export declare const merge: ReactiveContainers.TypeClass<RunnableContainer>["merge"];
export declare const mergeAll: ReactiveContainers.TypeClass<RunnableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainers.TypeClass<RunnableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainers.TypeClass<RunnableContainer>["mergeWith"];
export declare const pairwise: Containers.TypeClass<RunnableContainer>["pairwise"];
export declare const pick: Containers.TypeClass<RunnableContainer>["pick"];
export declare const reduce: RunnableContainers.TypeClass<RunnableContainer>["reduce"];
export declare const repeat: DeferredContainers.TypeClass<RunnableContainer>["repeat"];
export declare const retry: StatefulContainers.TypeClass<RunnableContainer>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Containers.TypeClass<RunnableContainer>["scan"];
export declare const scanLast: Containers.TypeClass<RunnableContainer>["scanLast"];
export declare const scanMany: ReactiveContainers.TypeClass<RunnableContainer>["scanMany"];
export declare const skipFirst: Containers.TypeClass<RunnableContainer>["skipFirst"];
export declare const someSatisfy: RunnableContainers.TypeClass<RunnableContainer>["someSatisfy"];
export declare const startWith: DeferredContainers.TypeClass<RunnableContainer>["startWith"];
export declare const switchAll: ReactiveContainers.TypeClass<RunnableContainer>["switchAll"];
export declare const switchMap: ReactiveContainers.TypeClass<RunnableContainer>["switchMap"];
export declare const takeFirst: Containers.TypeClass<RunnableContainer>["takeFirst"];
export declare const takeLast: Containers.TypeClass<RunnableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainers.TypeClass<RunnableContainer>["takeUntil"];
export declare const takeWhile: Containers.TypeClass<RunnableContainer>["takeWhile"];
export declare const throttle: ReactiveContainers.TypeClass<RunnableContainer>["throttle"];
export declare const throwIfEmpty: StatefulContainers.TypeClass<RunnableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainers.TypeClass<RunnableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainers.TypeClass<RunnableContainer>["timeout"];
export declare const toEnumerable: EnumerableContainers.TypeClass<RunnableContainer>["toEnumerable"];
export declare const toReadonlyArray: RunnableContainers.TypeClass<RunnableContainer>["toReadonlyArray"];
export declare const withCurrentTime: ReactiveContainers.TypeClass<RunnableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainers.TypeClass<RunnableContainer>["withLatestFrom"];
export declare const zip: Containers.TypeClass<RunnableContainer>["zip"];
export declare const zipLatest: ReactiveContainers.TypeClass<RunnableContainer>["zipLatest"];
export declare const zipWith: Containers.TypeClass<RunnableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainers.TypeClass<RunnableContainer>["zipWithLatestFrom"];
export {};
