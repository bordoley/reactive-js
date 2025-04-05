import { BroadcasterLike, ComputationLike_isPure, ComputationLike_isSynchronous, DeferredEventSourceLike } from "../../computations.js";
import { Factory, Function1, Function2, Optional, Predicate, SideEffect1 } from "../../functions.js";
import { ConsumerLike, DisposableLike } from "../../utils.js";
import { LatestEventListenerContextLike, LatestEventListenerLike, LatestEventListenerMode } from "../__mixins__/LatestEventListenerMixin.js";
import { LiftedSinkLike } from "./LiftedSource.js";
interface Signature {
    catchError<T, TSource extends DeferredEventSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>>(createDelegatingCatchErrorConsumer: Function1<TConsumer, TConsumer>, errorHandler: SideEffect1<Error> | Function1<Error, TSource>, options?: {
        [ComputationLike_isPure]?: boolean;
    }): Function1<TSource, DeferredEventSourceLike<T, TConsumer>>;
    concat<TConsumer extends ConsumerLike>(createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredEventSourceLike<T, TConsumer>[]) => DeferredEventSourceLike<T, TConsumer>;
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>): DeferredEventSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredEventSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredEventSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredEventSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredEventSourceLike<T, TConsumer> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TConsumer extends ConsumerLike<T>>(effect: SideEffect1<TConsumer>, config: {
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    }): DeferredEventSourceLike<T, TConsumer>;
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredEventSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredEventSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredEventSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    }): DeferredEventSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]?: true;
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredEventSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    }): DeferredEventSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isPure]: false;
        [ComputationLike_isSynchronous]?: true;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredEventSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]: false;
    }): DeferredEventSourceLike<TOut, TConsumerOut> & {
        [ComputationLike_isSynchronous]: false;
    };
    createLifted<TIn, TOut, TConsumerIn extends ConsumerLike<TIn>, TConsumerOut extends ConsumerLike<TOut>>(src: DeferredEventSourceLike<TIn, TConsumerIn>, op: Function1<LiftedSinkLike<TConsumerOut, TOut>, LiftedSinkLike<TConsumerOut, TIn>>, liftedSinkToConsumer: Function1<LiftedSinkLike<TConsumerOut, unknown>, TConsumerIn>, config?: {
        [ComputationLike_isPure]?: boolean;
        [ComputationLike_isSynchronous]?: boolean;
    }): DeferredEventSourceLike<TOut, TConsumerOut>;
    forkMerge<TIn, TConsumer extends ConsumerLike<TIn>, TOut, TOutConsumer extends ConsumerLike<TOut>>(toBroadcaster: (options?: {
        scheduler?: TOutConsumer;
        autoDispose?: boolean;
    }) => Function1<DeferredEventSourceLike<TIn, TConsumer>, BroadcasterLike<TIn>>, fromBroadcaster: () => Function1<BroadcasterLike<TIn>, DeferredEventSourceLike<TIn, TConsumer>>, merge: (...sources: readonly DeferredEventSourceLike<TOut, TOutConsumer>[]) => DeferredEventSourceLike<TOut, TOutConsumer>, ops: readonly [
        ...Function1<DeferredEventSourceLike<TIn, TConsumer>, DeferredEventSourceLike<TOut, TOutConsumer>>[],
        {
            [ComputationLike_isPure]?: boolean;
        }
    ]): Function1<DeferredEventSourceLike<TIn, TConsumer>, DeferredEventSourceLike<TOut, TOutConsumer>>;
    latest<TConsumer extends ConsumerLike<ReadonlyArray<unknown>>, TSource extends DeferredEventSourceLike<unknown, TSourceConsumer>, TSourceConsumer extends ConsumerLike<unknown> & LatestEventListenerLike<unknown>>(sources: readonly TSource[], mode: LatestEventListenerMode, createLatestEventListener: Function2<TConsumer, LatestEventListenerContextLike, TSourceConsumer>): DeferredEventSourceLike<ReadonlyArray<unknown>, TConsumer>;
    merge<TConsumer extends ConsumerLike>(createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredEventSourceLike<T, TConsumer>[]) => DeferredEventSourceLike<T, TConsumer>;
    repeat<TConsumer extends ConsumerLike<T>, T>(createDelegatingNonCompletingConsumer: Function1<TConsumer, TConsumer>, predicate: Optional<Predicate<number> | number>): Function1<DeferredEventSourceLike<T, TConsumer>, DeferredEventSourceLike<T, TConsumer>>;
    takeLast<TConsumer extends ConsumerLike<T>, T>(genPure: (factory: Factory<Iterator<T>>) => DeferredEventSourceLike<T, TConsumer>, takeLast: (count: number, consumer: TConsumer) => TConsumer & Iterable<T>, options?: {
        readonly count?: number;
    }): Function1<DeferredEventSourceLike<T, TConsumer>, DeferredEventSourceLike<T, TConsumer>>;
    withEffect<T, TConsumer extends ConsumerLike<T>>(effect: () => void | DisposableLike | SideEffect1<Optional<Error>>): Function1<DeferredEventSourceLike<T, TConsumer>, DeferredEventSourceLike<T, TConsumer> & {
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
export declare const takeLast: Signature["takeLast"];
export declare const withEffect: Signature["withEffect"];
export {};
