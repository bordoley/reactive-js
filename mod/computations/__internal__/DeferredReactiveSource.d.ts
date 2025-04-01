import { BroadcasterLike, ComputationLike_isPure, ComputationLike_isSynchronous, DeferredReactiveSourceLike } from "../../computations.js";
import { Factory, Function1, Function2, Optional, Predicate, SideEffect1 } from "../../functions.js";
import { ConsumerLike, DisposableLike } from "../../utils.js";
import { LatestEventListenerContextLike, LatestEventListenerLike, LatestEventListenerMode } from "../__mixins__/LatestEventListenerMixin.js";
import { LiftedSinkLike } from "./LiftedSource.js";
interface Signature {
    catchError<T, TSource extends DeferredReactiveSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>>(createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TConsumer, TConsumer>, errorHandler: SideEffect1<Error> | Function1<Error, TSource>, options?: {
        [ComputationLike_isPure]?: boolean;
    }): Function1<TSource, DeferredReactiveSourceLike<T, TConsumer>>;
    concat<TConsumer extends ConsumerLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredReactiveSourceLike<T, TConsumer>[]) => DeferredReactiveSourceLike<T, TConsumer>;
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>): DeferredReactiveSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredReactiveSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredReactiveSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredReactiveSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredReactiveSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    }): DeferredReactiveSourceLike<T, TConsumer>;
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredReactiveSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredReactiveSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredReactiveSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    }): DeferredReactiveSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredReactiveSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredReactiveSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredReactiveSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]: false;
    }): DeferredReactiveSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredReactiveSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
    }): DeferredReactiveSourceLike<TOut, TConsumerOut>;
    forkMerge<TIn, TConsumer extends ConsumerLike<TIn>, TOut, TOutConsumer extends ConsumerLike<TOut>>(toBroadcaster: (consumer: TOutConsumer) => Function1<DeferredReactiveSourceLike<TIn, TConsumer>, BroadcasterLike<TIn>>, fromBroadcaster: () => Function1<BroadcasterLike<TIn>, DeferredReactiveSourceLike<TIn, TConsumer>>, merge: (...sources: readonly DeferredReactiveSourceLike<TOut, TOutConsumer>[]) => DeferredReactiveSourceLike<TOut, TOutConsumer>, ops: readonly [
        ...Function1<DeferredReactiveSourceLike<TIn, TConsumer>, DeferredReactiveSourceLike<TOut, TOutConsumer>>[],
        {
            [ComputationLike_isPure]?: boolean;
        }
    ]): Function1<DeferredReactiveSourceLike<TIn, TConsumer>, DeferredReactiveSourceLike<TOut, TOutConsumer>>;
    latest<TConsumer extends ConsumerLike<ReadonlyArray<unknown>>, TSource extends DeferredReactiveSourceLike<unknown, TSourceConsumer>, TSourceConsumer extends ConsumerLike<unknown> & LatestEventListenerLike<unknown>>(sources: readonly TSource[], mode: LatestEventListenerMode, createLatestEventListener: Function2<TConsumer, LatestEventListenerContextLike, TSourceConsumer>): DeferredReactiveSourceLike<ReadonlyArray<unknown>, TConsumer>;
    merge<TConsumer extends ConsumerLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredReactiveSourceLike<T, TConsumer>[]) => DeferredReactiveSourceLike<T, TConsumer>;
    repeat<TConsumer extends ConsumerLike<T>, T>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>, predicate: Optional<Predicate<number> | number>): Function1<DeferredReactiveSourceLike<T, TConsumer>, DeferredReactiveSourceLike<T, TConsumer>>;
    retry<TConsumer extends ConsumerLike<T>, T>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>, shouldRetry?: (count: number, error: Error) => boolean): Function1<DeferredReactiveSourceLike<T, TConsumer>, DeferredReactiveSourceLike<T, TConsumer>>;
    takeLast<TConsumer extends ConsumerLike<T>, T>(genPure: (factory: Factory<Iterator<T>>) => DeferredReactiveSourceLike<T, TConsumer>, takeLast: (count: number, consumer: TConsumer) => TConsumer & Iterable<T>, options?: {
        readonly count?: number;
    }): Function1<DeferredReactiveSourceLike<T, TConsumer>, DeferredReactiveSourceLike<T, TConsumer>>;
    withEffect<T, TConsumer extends ConsumerLike<T>>(effect: () => void | DisposableLike | SideEffect1<Optional<Error>>): Function1<DeferredReactiveSourceLike<T, TConsumer>, DeferredReactiveSourceLike<T, TConsumer> & {
        [ComputationLike_isPure]: false;
    }>;
}
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const createLifted: Signature["createLifted"];
export declare const forkMerge: Signature["forkMerge"];
export declare const latest: Signature["latest"];
export declare const merge: Signature["merge"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const takeLast: Signature["takeLast"];
export declare const withEffect: Signature["withEffect"];
export {};
