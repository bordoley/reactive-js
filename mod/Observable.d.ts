import type * as MulticastObservable from "./MulticastObservable.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect, SideEffect1, TypePredicate, Updater } from "./functions.js";
import { Container, ContainerOf, ContainerOperator, ContainerTypeClass, Container_T, Container_type, DeferredObservableLike, DispatcherLike, DisposableLike, EnumerableLike, EnumeratorLike, EventSourceLike, MulticastObservableLike, ObservableLike, ObserverLike, PublisherLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike } from "./types.js";
export type ObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type RunnableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
export type DeferredObservableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends MulticastObservableLike<TIn> ? MulticastObservableLike<TOut> : ObservableLike<TOut>;
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
export type MaybeMulticastObservableLike<T> = MulticastObservableLike<T> | ObservableLike<T>;
export type AnyObservableLike<T> = EnumerableLike<T> | RunnableLike<T> | DeferredObservableLike<T> | MulticastObservableLike<T> | ObservableLike<T>;
/**
 * @noInheritDoc
 */
export interface ObservableModule extends ContainerTypeClass<Type> {
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): RunnableLike<T>;
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): ObservableOperator<T, T>;
    buffer<T>(options?: {
        count?: number;
    }): ObservableOperator<T, readonly T[]>;
    catchError<T>(onError: SideEffect1<Error>): ObservableOperator<T, T>;
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
    combineLatest<TA, TB>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    combineLatest<TA, TB, TC>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: DeferredObservableLike<TC>): MulticastObservableLike<readonly [TA, TB, TC]>;
    combineLatest<TA, TB, TC, TD>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
    combineLatest<TA, TB, TC, TD, TE>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
    combineLatest<TA, TB, TC, TD, TE, TF>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>, i: MaybeMulticastObservableLike<TI>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    concat<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    concat<T>(fst: MulticastObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): MulticastObservableLike<T>;
    concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    concatMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        MulticastObservableLike<T>,
        ...DeferredObservableLike<T>[]
    ]): MulticastObservableLike<T>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): ObservableOperator<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableUpperBoundObservableOperator<T, T>;
    concatWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableUpperBoundObservableOperator<T, T>;
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
    defer<T>(f: Factory<MulticastObservableLike<T>>): DeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperator<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ObservableOperator<T, T>;
    empty<T>(): EnumerableLike<T>;
    empty<T>(options: {
        readonly delay: number;
    }): RunnableLike<T>;
    encodeUtf8(): ObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperator<T, T>;
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): DeferredObservableUpperBoundObservableOperator<TA, TB>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): ObservableOperator<TA, TB>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperator<T, T>;
    forkCombineLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
    forkCombineLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
    forkCombineLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>, d: Function1<TObservableIn, EnumerableLike<TD>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;
    forkCombineLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
    forkCombineLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
    forkCombineLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>, d: Function1<TObservableIn, RunnableLike<TD>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>, d: Function1<TObservableIn, DeferredObservableLike<TD>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;
    forkCombineLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkCombineLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkCombineLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>, d: Function1<TObservableIn, MulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkCombineLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>, d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    forkConcat<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, EnumerableLike<TOut>>, snd: Function1<TObservableIn, EnumerableLike<TOut>>, ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]): Function1<TObservableIn, EnumerableLike<TOut>>;
    forkConcat<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, RunnableLike<TOut>>, snd: Function1<TObservableIn, RunnableLike<TOut>>, ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]): Function1<TObservableIn, RunnableLike<TOut>>;
    forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, DeferredObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, DeferredObservableLike<TOut>>;
    forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, MulticastObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, MulticastObservableLike<TOut>>;
    forkMerge<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, EnumerableLike<TOut>>, snd: Function1<TObservableIn, EnumerableLike<TOut>>, ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]): Function1<TObservableIn, EnumerableLike<TOut>>;
    forkMerge<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, RunnableLike<TOut>>, snd: Function1<TObservableIn, RunnableLike<TOut>>, ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]): Function1<TObservableIn, RunnableLike<TOut>>;
    forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, DeferredObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, DeferredObservableLike<TOut>>;
    forkMerge<TObservableIn extends MulticastObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, MulticastObservableLike<TOut>>, snd: Function1<TObservableIn, MulticastObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, MulticastObservableLike<TOut>>[]): Function1<TObservableIn, MulticastObservableLike<TOut>>;
    forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, MaybeMulticastObservableLike<TOut>>, snd: Function1<TObservableIn, MaybeMulticastObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, MaybeMulticastObservableLike<TOut>>[]): Function1<TObservableIn, MulticastObservableLike<TOut>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>, d: Function1<TObservableIn, EnumerableLike<TD>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>, d: Function1<TObservableIn, RunnableLike<TD>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>, d: Function1<TObservableIn, DeferredObservableLike<TD>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>, d: Function1<TObservableIn, MulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>, d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
    forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
    forkZipLatest<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>, d: Function1<TObservableIn, EnumerableLike<TD>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;
    forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
    forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
    forkZipLatest<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>, d: Function1<TObservableIn, RunnableLike<TD>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>, d: Function1<TObservableIn, DeferredObservableLike<TD>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;
    forkZipLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkZipLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkZipLatest<TObservableIn extends MulticastObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MulticastObservableLike<TA>>, b: Function1<TObservableIn, MulticastObservableLike<TB>>, c: Function1<TObservableIn, MulticastObservableLike<TC>>, d: Function1<TObservableIn, MulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC]>>;
    forkZipLatest<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MaybeMulticastObservableLike<TA>>, b: Function1<TObservableIn, MaybeMulticastObservableLike<TB>>, c: Function1<TObservableIn, MaybeMulticastObservableLike<TC>>, d: Function1<TObservableIn, MaybeMulticastObservableLike<TD>>): Function1<TObservableIn, MulticastObservableLike<[TA, TB, TC, TD]>>;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableLike<T>>;
    fromEnumeratorFactory<T>(): Function1<Factory<EnumeratorLike<T>>, EnumerableLike<T>>;
    fromEnumeratorFactory<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): Function1<Factory<EnumeratorLike<T>>, RunnableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromFactory<T>(options: {
        readonly delay: number;
    }): Function1<Factory<T>, RunnableLike<T>>;
    fromIterable<T>(): Function1<Iterable<T>, EnumerableLike<T>>;
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
    ignoreElements<T>(): ObservableOperator<unknown, T>;
    isDeferredObservable<T>(obs: ObservableLike<T>): obs is DeferredObservableLike<T>;
    isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;
    isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;
    isMulticastObservable<T>(obs: ObservableLike<T>): obs is MulticastObservableLike<T>;
    keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ContainerOperator<Type, TA, TB>;
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ObservableOperator<TA, TB>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;
    merge<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    merge<T>(fst: MaybeMulticastObservableLike<T>, snd: MaybeMulticastObservableLike<T>, ...tail: readonly MaybeMulticastObservableLike<T>[]): MulticastObservableLike<T>;
    mergeWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): ObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: MaybeMulticastObservableLike<T>, ...tail: readonly MaybeMulticastObservableLike<T>[]): Function1<ObservableLike<T>, MulticastObservableLike<T>>;
    mergeMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly MaybeMulticastObservableLike<T>[]): MulticastObservableLike<T>;
    mapTo<TA, TB>(value: TB): ObservableOperator<TA, TB>;
    never<T>(): MulticastObservableLike<T>;
    onSubscribe<T>(f: Factory<DisposableLike>): ObservableOperator<T, T>;
    onSubscribe<T>(f: Factory<SideEffect1<Optional<Error>>>): ObservableOperator<T, T>;
    onSubscribe<T>(f: SideEffect): ObservableOperator<T, T>;
    pairwise<T>(): ObservableOperator<T, readonly [T, T]>;
    pick<T, TKey extends keyof T>(key: TKey): ObservableOperator<T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ObservableOperator<T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ObservableOperator<T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    startWith<T>(value: T, ...values: readonly T[]): ObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): DeferredObservableUpperBoundObservableOperator<T, T>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeUntil<T>(notifier: EnumerableLike): ObservableOperator<T, T>;
    takeUntil<T>(notifier: RunnableLike): RunnableUpperBoundObservableOperator<T, T>;
    takeUntil<T>(notifier: DeferredObservableLike): DeferredObservableUpperBoundObservableOperator<T, T>;
    takeUntil<T>(notifier: MulticastObservableLike): Function1<ObservableLike<T>, MulticastObservableLike<T>>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ObservableOperator<T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): RunnableUpperBoundObservableOperator<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ObservableOperator<T, T>;
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
    toReadonlyArrayAsync<T>(): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): ObservableOperator<TA, TB>;
    withLatestFrom<TA, TB, T>(other: EnumerableLike<TB>, selector: Function2<TA, TB, T>): ObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): RunnableUpperBoundObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableUpperBoundObservableOperator<TA, T>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<AnyObservableLike<TA>, MulticastObservableLike<T>>;
    zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>): DeferredObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>, i: MaybeMulticastObservableLike<TI>): ContainerOf<MulticastObservable.Type, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
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
    zipLatest<TA, TB>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>): MulticastObservableLike<readonly [TA, TB]>;
    zipLatest<TA, TB, TC>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: DeferredObservableLike<TC>): MulticastObservableLike<readonly [TA, TB, TC]>;
    zipLatest<TA, TB, TC, TD>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>): MulticastObservableLike<readonly [TA, TB, TC, TD]>;
    zipLatest<TA, TB, TC, TD, TE>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zipLatest<TA, TB, TC, TD, TE, TF>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: MaybeMulticastObservableLike<TA>, b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>, i: MaybeMulticastObservableLike<TI>): MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: EnumerableLike<TB>): ObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: EnumerableLike<TB>, c: EnumerableLike<TC>): ObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): ObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): ObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: RunnableLike<TB>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: DeferredObservableLike<TB>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: MulticastObservableLike<TB>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB]>>;
    zipWith<TA, TB, TC>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC]>>;
    zipWith<TA, TB, TC, TD>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD]>>;
    zipWith<TA, TB, TC, TD, TE>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE]>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: MaybeMulticastObservableLike<TB>, c: MaybeMulticastObservableLike<TC>, d: MaybeMulticastObservableLike<TD>, e: MaybeMulticastObservableLike<TE>, f: MaybeMulticastObservableLike<TF>, g: MaybeMulticastObservableLike<TG>, h: MaybeMulticastObservableLike<TH>, i: MaybeMulticastObservableLike<TI>): Function1<AnyObservableLike<TA>, MulticastObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>>;
    zipWithLatestFrom<TA, TB, T>(other: EnumerableLike<TB>, selector: Function2<TA, TB, T>): ObservableOperator<TA, T>;
    zipWithLatestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): RunnableUpperBoundObservableOperator<TA, T>;
    zipWithLatestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableUpperBoundObservableOperator<TA, T>;
    zipWithLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<AnyObservableLike<TA>, MulticastObservableLike<T>>;
}
export type Signature = ObservableModule;
export declare const animate: Signature["animate"];
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const concat: Signature["concat"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
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
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const forEach: Signature["forEach"];
export declare const forkCombineLatest: Signature["forkCombineLatest"];
export declare const forkConcat: Signature["forkConcat"];
export declare const forkMerge: Signature["forkMerge"];
export declare const forkZip: Signature["forkZip"];
export declare const forkZipLatest: Signature["forkZipLatest"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferredObservable: Signature["isDeferredObservable"];
export declare const isEnumerable: Signature["isEnumerable"];
export declare const isRunnable: Signature["isRunnable"];
export declare const isMulticastObservable: Signature["isMulticastObservable"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const never: Signature["never"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const startWith: Signature["startWith"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zip: Signature["zip"];
export declare const zipLatest: Signature["zipLatest"];
export declare const zipWith: Signature["zipWith"];
export declare const zipWithLatestFrom: Signature["zipWithLatestFrom"];
