import { ComputationLike_isPure, ComputationLike_isSynchronous, ComputationModule, DeferredSourceLike, HigherOrderInnerComputationLike, IterableLike, PickComputationModule } from "../../computations.js";
import { Function1, SideEffect1 } from "../../functions.js";
import { EventListenerLike, SinkLike } from "../../utils.js";
interface Signature {
    catchError<T, TSource extends DeferredSourceLike<T, TSink>, TSink extends SinkLike<T>>(createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TSink, TSink>, errorHandler: SideEffect1<Error> | Function1<Error, TSource>, options?: {
        readonly innerType?: HigherOrderInnerComputationLike;
    }): Function1<TSource, DeferredSourceLike<T, TSink>>;
    concat<TSink extends SinkLike>(createDelegatingNotifyOnlyNonCompletingNonDisposingSink: Function1<TSink, TSink>): <T>(...sources: readonly DeferredSourceLike<T, TSink>[]) => DeferredSourceLike<T, TSink>;
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>): DeferredSourceLike<T, TListener> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<T, TListener> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    }): DeferredSourceLike<T, TListener> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<T, TListener> & {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    }): DeferredSourceLike<T, TListener> & {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    }): DeferredSourceLike<T, TListener>;
    takeLast<TComputationModule extends PickComputationModule<ComputationModule, "genPure">>(m: TComputationModule): <TSink extends SinkLike<T>, T>(takeLast: (sink: TSink, count: number) => TSink & IterableLike<T>, options?: {
        readonly count?: number;
    }) => Function1<DeferredSourceLike<T, TSink>, DeferredSourceLike<T, TSink>>;
}
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const takeLast: Signature["takeLast"];
export {};
