import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, ComputationModule, HigherOrderInnerComputationLike, SourceLike } from "../../computations.js";
import { Function1, SideEffect1 } from "../../functions.js";
import { EventListenerLike, SinkLike } from "../../utils.js";
interface Signature {
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    }): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    }): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]?: true;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    }): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
        readonly [ComputationLike_isPure]?: true;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    }): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
        readonly [ComputationLike_isPure]: false;
        readonly [ComputationLike_isSynchronous]: false;
    };
    create<T, TListener extends EventListenerLike<T>>(effect: SideEffect1<TListener>, config: {
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
    }): SourceLike<T, TListener> & {
        readonly [ComputationLike_isDeferred]?: true;
    };
}
export declare const create: Signature["create"];
export declare const catchError: <T, TContinueSource extends SourceLike<T, TSink>, TSink extends SinkLike<T>>(createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TSink, TSink>, errorHandler: SideEffect1<Error> | Function1<Error, TContinueSource>, options?: {
    readonly innerType?: HigherOrderInnerComputationLike;
}) => (source: TContinueSource) => SourceLike<T, TSink> & {
    readonly [ComputationLike_isDeferred]?: true;
};
export declare const creatConcat: <TSink extends SinkLike, TComputationModule extends Pick<ComputationModule, "genPure"> & {
    createDelegatingNotifyOnlyNonCompletingNonDisposing: Function1<TSink, TSink>;
}>(m: TComputationModule) => <T>(...sources: readonly SourceLike<T, TSink>[]) => SourceLike<T, TSink> | import("../../computations.js").NewPureInstanceOf<import("../../computations.js").ComputationTypeOfModule<TComputationModule>, unknown>;
export {};
