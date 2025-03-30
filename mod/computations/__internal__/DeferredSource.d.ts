import { BroadcasterLike, ComputationLike_isPure, ComputationLike_isSynchronous, ComputationModule, ComputationOfModule, ConcurrentReactiveComputationModule, DeferredAsynchronousReactiveComputationModule, DeferredSourceLike, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, IterableLike, PickComputationModule, SequentialComputationModule } from "../../computations.js";
import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1 } from "../../functions.js";
import { ConsumerLike, DisposableLike } from "../../utils.js";
import { LatestEventListenerContextLike, LatestEventListenerLike, LatestEventListenerMode } from "../__mixins__/LatestEventListenerMixin.js";
import { LiftedSinkLike } from "./LiftedSource.js";
interface Signature {
    catchError<T, TSource extends DeferredSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>>(createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TConsumer, TConsumer>, errorHandler: SideEffect1<Error> | Function1<Error, TSource>, options?: HigherOrderInnerComputationLike): Function1<TSource, DeferredSourceLike<T, TConsumer>>;
    concat<TConsumer extends ConsumerLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredSourceLike<T, TConsumer>[]) => DeferredSourceLike<T, TConsumer>;
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>): DeferredSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    }): DeferredSourceLike<T, TConsumer>;
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
    }): DeferredSourceLike<TOut, TConsumerOut>;
    forkMerge<TIn, TConsumer extends ConsumerLike<TIn>, TOut, TOutConsumer extends ConsumerLike<TOut>>(toBroadcaster: (consumer: TOutConsumer) => Function1<DeferredSourceLike<TIn, TConsumer>, BroadcasterLike<TIn>>, fromBroadcaster: () => Function1<BroadcasterLike<TIn>, DeferredSourceLike<TIn, TConsumer>>, merge: (...sources: readonly DeferredSourceLike<TOut, TOutConsumer>[]) => DeferredSourceLike<TOut, TOutConsumer>, ops: readonly [
        ...Function1<DeferredSourceLike<TIn, TConsumer>, DeferredSourceLike<TOut, TOutConsumer>>[],
        {
            [ComputationLike_isPure]?: boolean;
        }
    ]): Function1<DeferredSourceLike<TIn, TConsumer>, DeferredSourceLike<TOut, TOutConsumer>>;
    latest<TConsumer extends ConsumerLike<ReadonlyArray<unknown>>, TSource extends DeferredSourceLike<unknown, TSourceConsumer>, TSourceConsumer extends ConsumerLike<unknown> & LatestEventListenerLike<unknown>>(sources: readonly TSource[], mode: LatestEventListenerMode, createLatestEventListener: Function2<TConsumer, LatestEventListenerContextLike, TSourceConsumer>): DeferredSourceLike<ReadonlyArray<unknown>, TConsumer>;
    merge<TConsumer extends ConsumerLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredSourceLike<T, TConsumer>[]) => DeferredSourceLike<T, TConsumer>;
    repeat<TConsumer extends ConsumerLike<T>, T>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>, predicate: Optional<Predicate<number> | number>): Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<T, TConsumer>>;
    retry<TConsumer extends ConsumerLike<T>, T>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>, shouldRetry?: (count: number, error: Error) => boolean): Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<T, TConsumer>>;
    scanDistinct<TModule extends PickComputationModule<ComputationModule & SequentialComputationModule, "genPure" | "concat" | "distinctUntilChanged" | "scan">>(m: TModule): <T, TAcc, TConsumer extends ConsumerLike<T>, TAccConsumer extends ConsumerLike<TAcc>>(reducer: Reducer<T, TAcc>, initialState: Factory<TAcc>, options?: {
        readonly equality?: Equality<TAcc>;
    }) => Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<TAcc, TAccConsumer>>;
    scanMany<TModule extends PickComputationModule<ComputationModule & ConcurrentReactiveComputationModule & DeferredAsynchronousReactiveComputationModule & SequentialComputationModule, "forEach" | "fromBroadcaster" | "map" | "switchAll" | "withLatestFrom">>(m: TModule): <T, TAcc, TInnerLike extends HigherOrderInnerComputationLike, TConsumer extends ConsumerLike<T>, TAccConsumer extends ConsumerLike<TAcc>>(scanner: Function2<TAcc, T, HigherOrderInnerComputationOf<ComputationOfModule<TModule, T>, TInnerLike, TAcc>>, initialValue: Factory<TAcc>, options: TInnerLike) => Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<TAcc, TAccConsumer>>;
    takeLast<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <TConsumer extends ConsumerLike<T>, T>(takeLast: (consumer: TConsumer, count: number) => TConsumer & IterableLike<T>, options?: {
        readonly count?: number;
    }) => Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<T, TConsumer>>;
    withEffect<T, TConsumer extends ConsumerLike<T>>(effect: () => void | DisposableLike | SideEffect1<Optional<Error>>): Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<T, TConsumer> & {
        [ComputationLike_isPure]: false;
    }>;
}
export declare const scanDistinct: Signature["scanDistinct"];
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const createLifted: Signature["createLifted"];
export declare const forkMerge: Signature["forkMerge"];
export declare const latest: Signature["latest"];
export declare const merge: Signature["merge"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scanMany: Signature["scanMany"];
export declare const takeLast: Signature["takeLast"];
export declare const withEffect: Signature["withEffect"];
export {};
