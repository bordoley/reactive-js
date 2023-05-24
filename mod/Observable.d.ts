import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, TypePredicate, Updater } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableBaseLike, DeferredObservableLike, DispatcherLike, DisposableLike, EnumerableBaseLike, EnumerableLike, EnumerableWithSideEffectsLike, EventSourceLike, MulticastObservableLike, ObservableLike, ObservableWithSideEffectsLike, ObserverLike, PauseableObservableLike, PublisherLike, PureObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReplayObservableLike, RunnableBaseLike, RunnableLike, SchedulerLike } from "./types.js";
export type ObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends EnumerableWithSideEffectsLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends EnumerableBaseLike<TIn> ? EnumerableBaseLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableBaseLike<TIn> ? RunnableBaseLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableBaseLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : TObservableIn extends PureObservableLike<TIn> ? PureObservableLike<TOut> : TObservableIn extends ObservableWithSideEffectsLike<TIn> ? ObservableWithSideEffectsLike<TOut> : ObservableLike<TOut>;
export type ObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableBaseLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends RunnableBaseLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableLike<TOut> : ObservableWithSideEffectsLike<TOut>;
export type RunnableBoundedObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableBaseLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableLike<TOut> : ObservableWithSideEffectsLike<TOut>;
export type DeferredObservableBoundedObservableOperatorWithSideEffects<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableLike<TOut> : ObservableLike<TOut>;
export type MulticastObservableBoundedPureObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type DeferredObservableOperator<TIn, TOut> = <TObservableIn extends DeferredObservableBaseLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends EnumerableWithSideEffectsLike<TIn> ? EnumerableWithSideEffectsLike<TOut> : TObservableIn extends EnumerableBaseLike<TIn> ? EnumerableBaseLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends RunnableBaseLike<TIn> ? RunnableBaseLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends DeferredObservableBaseLike<TIn> ? DeferredObservableBaseLike<TOut> : never;
/**
 * @noInheritDoc
 * @category Container
 */
export interface ObservableContainer extends Container {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
export type Type = ObservableContainer;
export declare namespace Animation {
    /**
     * @noInheritDoc
     */
    interface Delay {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     */
    interface KeyFrame {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     */
    interface Frame {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     */
    interface Loop<T> {
        readonly type: "loop";
        readonly animation: Animation<T> | readonly Animation<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     */
    interface Spring {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
}
export type Animation<T = number> = Animation.Delay | Animation.Loop<T> | (T extends number ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector?: never;
} : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector: Function1<number, T>;
});
/**
 * @noInheritDoc
 * @category Module
 */
export interface ObservableModule {
    /**
     * @category Constructor
     */
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): RunnableLike<T>;
    /**
     * @category Operator
     */
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    /**
     * @category Operator
     */
    buffer<T>(options?: {
        count?: number;
    }): ObservableOperator<T, readonly T[]>;
    /**
     * @category Operator
     */
    catchError<T>(onError: SideEffect1<Error>): ObservableOperatorWithSideEffects<T, T>;
    /**
     * @category Constructor
     */
    combineLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    combineLatest<TA, TB>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>): DeferredObservableLike<readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableLike<readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    combineLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    combineLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    /**
     * @category Constructor
     */
    compute<T>(computation: Factory<T>, options?: {
        mode?: "batched" | "combine-latest";
    }): DeferredObservableLike<T>;
    /**
     * @category Constructor
     */
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concat<T>(fst: EnumerableBaseLike<T>, snd: EnumerableBaseLike<T>, ...tail: readonly EnumerableBaseLike<T>[]): EnumerableWithSideEffectsLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    concat<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): ObservableLike<T>;
    concatAll<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableLike<T>, T>;
    concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(observables: readonly EnumerableBaseLike<T>[]): EnumerableWithSideEffectsLike<T>;
    concatMany<T>(observables: readonly RunnableBaseLike<T>[]): RunnableLike<T>;
    concatMany<T>(observables: readonly DeferredObservableBaseLike<T>[]): DeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...DeferredObservableLike<T>[]
    ]): MulticastObservableLike<T>;
    concatMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): ObservableOperator<T, T>;
    concatWith<T>(snd: EnumerableBaseLike<T>, ...tail: readonly EnumerableBaseLike<T>[]): ObservableOperatorWithSideEffects<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    concatWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    contains<T>(value: T, options?: {
        readonly equality?: Equality<T>;
    }): Function1<RunnableBaseLike<T>, boolean>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
    createPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    createRefCountedPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    currentTime(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): ObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<ObservableLike<T>>): DeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperatorWithSideEffects<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ObservableOperator<T, T>;
    empty<T>(): EnumerableLike<T>;
    empty<T>(options: {
        readonly delay: number;
    }): RunnableLike<T>;
    encodeUtf8(): ObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperatorWithSideEffects<T, T>;
    everySatisfy<T>(predicate: Predicate<T>): Function1<RunnableBaseLike<T>, boolean>;
    exhaust<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableLike<T>, T>;
    exhaustMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    first<T>(): Function1<RunnableBaseLike<T>, Optional<T>>;
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperatorWithSideEffects<TA, TB>;
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<RunnableBaseLike<T>, PauseableObservableLike<T> & DisposableLike>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperatorWithSideEffects<T, T>;
    forkMerge<TOut, TObservableIn extends ObservableLike, TObservableOut extends ObservableLike<TOut>>(fst: Function1<TObservableIn, TObservableOut>, snd: Function1<TObservableIn, TObservableOut>, ...tail: readonly Function1<TObservableIn, TObservableOut>[]): TObservableIn extends PureObservableLike ? TObservableOut extends PureObservableLike<TOut> ? Function1<TObservableIn, MulticastObservableLike<TOut>> : Function1<TObservableIn, DeferredObservableLike<TOut>> : Function1<TObservableIn, DeferredObservableLike<TOut>>;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromFactory<T>(options: {
        readonly delay: number;
    }): Function1<Factory<T>, RunnableLike<T>>;
    fromIterable<T>(): Function1<Iterable<T>, EnumerableWithSideEffectsLike<T>>;
    fromIterable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Iterable<T>, RunnableLike<T>>;
    fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    fromOptional<T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
    fromValue<T>(): Function1<T, EnumerableLike<T>>;
    fromValue<T>(options: {
        readonly delay: number;
    }): Function1<T, RunnableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    ignoreElements<T>(): ObservableOperatorWithSideEffects<unknown, T>;
    isDeferredObservable<T>(obs: ObservableLike<T>): obs is DeferredObservableBaseLike<T>;
    isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableBaseLike<T>;
    isMulticastObservable<T>(obs: ObservableLike<T>): obs is MulticastObservableLike<T>;
    isPure<T>(obs: ObservableLike<T>): obs is PureObservableLike<T>;
    isRunnable<T>(obs: ObservableLike<T>): obs is RunnableBaseLike<T>;
    keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ObservableOperator<TA, TB>;
    last<T>(): Function1<RunnableBaseLike<T>, Optional<T>>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;
    mapTo<TA, TB>(value: TB): ObservableOperator<TA, TB>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    merge<T>(fst: PureObservableLike<T>, snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableLike<T>, T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly PureObservableLike<T>[]): MulticastObservableLike<T>;
    mergeMany<T>(observables: readonly ObservableLike<T>[]): ObservableLike<T>;
    mergeWith<T>(snd: RunnableBaseLike<T>, ...tail: readonly RunnableBaseLike<T>[]): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: DeferredObservableBaseLike<T>, ...tail: readonly DeferredObservableBaseLike<T>[]): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    mergeWith<T>(snd: PureObservableLike<T>, ...tail: readonly PureObservableLike<T>[]): Function1<PureObservableLike<T>, MulticastObservableLike<T>>;
    mergeWith<T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): Function1<ObservableLike<T>, ObservableLike<T>>;
    mergeMap<TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
        readonly concurrency?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    /**
     * @category Transform
     */
    multicast<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableWithSideEffectsLike<T>, ReplayObservableLike<T> & DisposableLike>;
    never<T>(): MulticastObservableLike<T>;
    noneSatisfy<T>(predicate: Predicate<T>): Function1<RunnableBaseLike<T>, boolean>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperatorWithSideEffects<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperatorWithSideEffects<T, T>;
    pairwise<T>(): ObservableOperator<T, readonly [T, T]>;
    pick<T, TKey extends keyof T>(key: TKey): ObservableOperator<T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ObservableOperator<T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<RunnableBaseLike<T>, TAcc>;
    /**
     * @category Operator
     */
    repeat<T>(predicate: Predicate<number>): DeferredObservableOperator<T, T>;
    repeat<T>(count: number): DeferredObservableOperator<T, T>;
    repeat<T>(): DeferredObservableOperator<T, T>;
    /**
     * @category Operator
     */
    retry<T>(shouldRetry: (count: number, error: Error) => boolean): DeferredObservableOperator<T, T>;
    run<T>(options?: {
        readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): SideEffect1<RunnableBaseLike<T>>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ObservableOperator<T, TAcc>;
    /**
     * @category Transform
     */
    share<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly replay?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableWithSideEffectsLike<T>, MulticastObservableLike<T>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    someSatisfy<T>(predicate: Predicate<T>): Function1<RunnableBaseLike<T>, boolean>;
    startWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    switchAll<T>(): DeferredObservableBoundedObservableOperatorWithSideEffects<DeferredObservableLike<T>, T>;
    switchMap<TA, TB>(selector: Function1<TA, DeferredObservableBaseLike<TB>>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, TB>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableLike): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: DeferredObservableLike): DeferredObservableBoundedObservableOperatorWithSideEffects<T, T>;
    takeUntil<T>(notifier: MulticastObservableLike): MulticastObservableBoundedPureObservableOperator<T, T>;
    takeUntil<T>(notifier: ObservableLike): Function1<ObservableLike<T>, ObservableLike<T>>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): RunnableBoundedObservableOperatorWithSideEffects<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ObservableOperatorWithSideEffects<T, T>;
    throws<T>(): EnumerableLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableLike<T>;
    throws<T>(options: {
        readonly delay: number;
        readonly raise?: Factory<unknown>;
    }): RunnableLike<T>;
    toEventSource<T>(): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toReadonlyArray<T>(): Function1<RunnableBaseLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): RunnableBoundedObservableOperatorWithSideEffects<TA, TB>;
    withLatestFrom<TA, TB, T, TOther extends ObservableLike<TB>>(other: RunnableBaseLike<TB>, selector: Function2<TA, TB, T>): RunnableBoundedObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableBaseLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, MulticastObservableLike<T>>;
    withLatestFrom<TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, ObservableLike<T>>;
    zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>): EnumerableWithSideEffectsLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>, h: EnumerableBaseLike<TH>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableBaseLike<TA>, b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>, h: EnumerableBaseLike<TH>, i: EnumerableBaseLike<TI>): EnumerableWithSideEffectsLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>): RunnableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>): RunnableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>): RunnableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableBaseLike<TA>, b: RunnableBaseLike<TB>, c: RunnableBaseLike<TC>, d: RunnableBaseLike<TD>, e: RunnableBaseLike<TE>, f: RunnableBaseLike<TF>, g: RunnableBaseLike<TG>, h: RunnableBaseLike<TH>, i: RunnableBaseLike<TI>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>): DeferredObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>): DeferredObservableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableBaseLike<TA>, b: DeferredObservableBaseLike<TB>, c: DeferredObservableBaseLike<TC>, d: DeferredObservableBaseLike<TD>, e: DeferredObservableBaseLike<TE>, f: DeferredObservableBaseLike<TF>, g: DeferredObservableBaseLike<TG>, h: DeferredObservableBaseLike<TH>, i: DeferredObservableBaseLike<TI>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipLatest<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipLatest<TA, TB>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>): DeferredObservableLike<readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableLike<readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipLatest<TA, TB>(a: PureObservableLike<TA>, b: PureObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>): MulticastObservableLike<readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: PureObservableLike<TA>, b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: EnumerableLike<TB>): ObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: EnumerableLike<TB>, c: EnumerableLike<TC>): ObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): ObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: EnumerableBaseLike<TB>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableBaseLike<TB>, c: EnumerableBaseLike<TC>, d: EnumerableBaseLike<TD>, e: EnumerableBaseLike<TE>, f: EnumerableBaseLike<TF>, g: EnumerableBaseLike<TG>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): ObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: RunnableLike<TB>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: DeferredObservableLike<TB>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableBoundedObservableOperatorWithSideEffects<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: PureObservableLike<TB>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB]>>;
    zipWith<TA, TB, TC>(b: PureObservableLike<TB>, c: PureObservableLike<TC>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC]>>;
    zipWith<TA, TB, TC, TD>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD]>>;
    zipWith<TA, TB, TC, TD, TE>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: PureObservableLike<TB>, c: PureObservableLike<TC>, d: PureObservableLike<TD>, e: PureObservableLike<TE>, f: PureObservableLike<TF>, g: PureObservableLike<TG>, h: PureObservableLike<TH>, i: PureObservableLike<TI>): Function1<PureObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>>;
    zipWith<TA, TB>(b: ObservableLike<TB>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB]>>;
    zipWith<TA, TB, TC>(b: ObservableLike<TB>, c: ObservableLike<TC>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC]>>;
    zipWith<TA, TB, TC, TD>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD]>>;
    zipWith<TA, TB, TC, TD, TE>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD, TE]>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD, TE, TF]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): Function1<ObservableLike<TA>, ObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>>;
}
export type Signature = ObservableModule;
export declare const animate: Signature["animate"];
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const endWith: Signature["endWith"];
export declare const enqueue: Signature["enqueue"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferredObservable: Signature["isDeferredObservable"];
export declare const isEnumerable: Signature["isEnumerable"];
export declare const isPure: Signature["isPure"];
export declare const isRunnable: Signature["isRunnable"];
export declare const isMulticastObservable: Signature["isMulticastObservable"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeMap: Signature["mergeMap"];
export declare const mergeWith: Signature["mergeWith"];
export declare const multicast: Signature["multicast"];
export declare const never: Signature["never"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const reduce: Signature["reduce"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const share: Signature["share"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zip: Signature["zip"];
export declare const zipLatest: Signature["zipLatest"];
export declare const zipWith: Signature["zipWith"];
