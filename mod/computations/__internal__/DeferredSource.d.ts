import { ComputationLike_isPure, ComputationLike_isSynchronous, ComputationModule, DeferredSourceLike, HigherOrderInnerComputationLike, IterableLike, PickComputationModule } from "../../computations.js";
import { Function1, SideEffect1 } from "../../functions.js";
import { ConsumerLike } from "../../utils.js";
import { LiftedSinkLike } from "./LiftedSource.js";
interface Signature {
    catchError<T, TSource extends DeferredSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>>(createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TConsumer, TConsumer>, errorHandler: SideEffect1<Error> | Function1<Error, TSource>, options?: {
        readonly innerType?: HigherOrderInnerComputationLike;
    }): Function1<TSource, DeferredSourceLike<T, TConsumer>>;
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
    merge<TConsumer extends ConsumerLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TConsumer, TConsumer>): <T>(...sources: readonly DeferredSourceLike<T, TConsumer>[]) => DeferredSourceLike<T, TConsumer>;
    takeLast<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <TConsumer extends ConsumerLike<T>, T>(takeLast: (consumer: TConsumer, count: number) => TConsumer & IterableLike<T>, options?: {
        readonly count?: number;
    }) => Function1<DeferredSourceLike<T, TConsumer>, DeferredSourceLike<T, TConsumer>>;
}
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const createLifted: Signature["createLifted"];
export declare const merge: Signature["merge"];
export declare const takeLast: Signature["takeLast"];
export {};
