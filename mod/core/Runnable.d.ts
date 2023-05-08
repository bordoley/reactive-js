import { Container, ReactiveContainer, RunnableContainer, RunnableLike } from "../core.js";
import { Factory } from "../functions.js";
export declare const animate: ReactiveContainer.TypeClass<RunnableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainer.TypeClass<RunnableContainer>["backpressureStrategy"];
export declare const buffer: Container.TypeClass<RunnableContainer>["buffer"];
export declare const catchError: ReactiveContainer.TypeClass<RunnableContainer>["catchError"];
export declare const combineLatest: ReactiveContainer.TypeClass<RunnableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => RunnableLike<T>;
export declare const concat: Container.TypeClass<RunnableContainer>["concat"];
export declare const concatAll: Container.TypeClass<RunnableContainer>["concatAll"];
export declare const concatMap: Container.TypeClass<RunnableContainer>["concatMap"];
export declare const concatWith: Container.TypeClass<RunnableContainer>["concatWith"];
export declare const contains: Container.TypeClass<RunnableContainer>["contains"];
export declare const currentTime: ReactiveContainer.TypeClass<RunnableContainer>["currentTime"];
export declare const decodeWithCharset: ReactiveContainer.TypeClass<RunnableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainer.TypeClass<RunnableContainer>["defer"];
export declare const dispatchTo: ReactiveContainer.TypeClass<RunnableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.TypeClass<RunnableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainer.TypeClass<RunnableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainer.TypeClass<RunnableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainer.TypeClass<RunnableContainer>["enqueue"];
export declare const endWith: Container.TypeClass<RunnableContainer>["endWith"];
export declare const everySatisfy: Container.TypeClass<RunnableContainer>["everySatisfy"];
export declare const exhaust: ReactiveContainer.TypeClass<RunnableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainer.TypeClass<RunnableContainer>["exhaustMap"];
export declare const first: Container.TypeClass<RunnableContainer>["first"];
export declare const firstAsync: ReactiveContainer.TypeClass<RunnableContainer>["firstAsync"];
export declare const flatMapIterable: Container.TypeClass<RunnableContainer>["flatMapIterable"];
export declare const flow: Container.TypeClass<RunnableContainer>["flow"];
export declare const forEach: Container.TypeClass<RunnableContainer>["forEach"];
export declare const forkConcat: Container.TypeClass<RunnableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainer.TypeClass<RunnableContainer>["forkMerge"];
export declare const forkZip: Container.TypeClass<RunnableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainer.TypeClass<RunnableContainer>["forkZipLatest"];
export declare const fromEnumeratorFactory: ReactiveContainer.TypeClass<RunnableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainer.TypeClass<RunnableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainer.TypeClass<RunnableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainer.TypeClass<RunnableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainer.TypeClass<RunnableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainer.TypeClass<RunnableContainer>["generate"];
export declare const identity: Container.TypeClass<RunnableContainer>["identity"];
export declare const ignoreElements: Container.TypeClass<RunnableContainer>["ignoreElements"];
export declare const keep: Container.TypeClass<RunnableContainer>["keep"];
export declare const keepType: Container.TypeClass<RunnableContainer>["keepType"];
export declare const last: Container.TypeClass<RunnableContainer>["last"];
export declare const lastAsync: ReactiveContainer.TypeClass<RunnableContainer>["lastAsync"];
export declare const noneSatisfy: Container.TypeClass<RunnableContainer>["noneSatisfy"];
export declare const map: Container.TypeClass<RunnableContainer>["map"];
export declare const mapTo: Container.TypeClass<RunnableContainer>["mapTo"];
export declare const merge: ReactiveContainer.TypeClass<RunnableContainer>["merge"];
export declare const mergeAll: ReactiveContainer.TypeClass<RunnableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainer.TypeClass<RunnableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainer.TypeClass<RunnableContainer>["mergeWith"];
export declare const pairwise: Container.TypeClass<RunnableContainer>["pairwise"];
export declare const pick: Container.TypeClass<RunnableContainer>["pick"];
export declare const reduce: Container.TypeClass<RunnableContainer>["reduce"];
export declare const repeat: Container.TypeClass<RunnableContainer>["repeat"];
export declare const retry: ReactiveContainer.TypeClass<RunnableContainer>["retry"];
export declare const run: <T>(options?: {
    readonly backpressureStrategy: "overflow" | "drop-latest" | "drop-oldest" | "throw";
    readonly capacity?: number | undefined;
} | undefined) => (observable: RunnableLike<T>) => void;
export declare const scan: Container.TypeClass<RunnableContainer>["scan"];
export declare const scanLast: ReactiveContainer.TypeClass<RunnableContainer>["scanLast"];
export declare const scanMany: ReactiveContainer.TypeClass<RunnableContainer>["scanMany"];
export declare const skipFirst: Container.TypeClass<RunnableContainer>["skipFirst"];
export declare const someSatisfy: Container.TypeClass<RunnableContainer>["someSatisfy"];
export declare const startWith: Container.TypeClass<RunnableContainer>["startWith"];
export declare const switchAll: ReactiveContainer.TypeClass<RunnableContainer>["switchAll"];
export declare const switchMap: ReactiveContainer.TypeClass<RunnableContainer>["switchMap"];
export declare const takeFirst: Container.TypeClass<RunnableContainer>["takeFirst"];
export declare const takeLast: Container.TypeClass<RunnableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainer.TypeClass<RunnableContainer>["takeUntil"];
export declare const takeWhile: Container.TypeClass<RunnableContainer>["takeWhile"];
export declare const throttle: ReactiveContainer.TypeClass<RunnableContainer>["throttle"];
export declare const throwIfEmpty: ReactiveContainer.TypeClass<RunnableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainer.TypeClass<RunnableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): RunnableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainer.TypeClass<RunnableContainer>["timeout"];
export declare const toEnumerable: Container.TypeClass<RunnableContainer>["toEnumerable"];
export declare const toReadonlyArray: Container.TypeClass<RunnableContainer>["toReadonlyArray"];
export declare const withCurrentTime: ReactiveContainer.TypeClass<RunnableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainer.TypeClass<RunnableContainer>["withLatestFrom"];
export declare const zip: Container.TypeClass<RunnableContainer>["zip"];
export declare const zipLatest: ReactiveContainer.TypeClass<RunnableContainer>["zipLatest"];
export declare const zipWith: Container.TypeClass<RunnableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainer.TypeClass<RunnableContainer>["zipWithLatestFrom"];
export {};
