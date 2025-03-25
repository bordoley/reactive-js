import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike } from "../../computations.js";
import { SideEffect1 } from "../../functions.js";
import { EventListenerLike } from "../../utils.js";
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
export {};
