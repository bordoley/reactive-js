import { ReactiveSourceLike, StreamOf, StreamableLike } from "./computations.js";
import { Factory, Optional } from "./functions.js";
import { BackpressureStrategy, DisposableLike } from "./utils.js";
interface ReactModule {
    /**
     */
    useDisposable<TDisposable extends DisposableLike>(factory: () => Optional<TDisposable>, deps: readonly unknown[]): Optional<TDisposable>;
    /**
     */
    useReactiveSource<T>(observable: Optional<ReactiveSourceLike<T>>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
    }): Optional<T>;
    useReactiveSource<T>(factory: Factory<Optional<ReactiveSourceLike<T>>>, deps: readonly unknown[], options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
    }): Optional<T>;
    /**
     */
    useStreamable<TStreamable extends StreamableLike>(streamable: TStreamable, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Optional<StreamOf<TStreamable>>;
    useStreamable<TStreamable extends StreamableLike>(factory: Factory<TStreamable>, dep: readonly unknown[], options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Optional<StreamOf<TStreamable>>;
}
type Signature = ReactModule;
export declare const useDisposable: Signature["useDisposable"];
export declare const useReactiveSource: Signature["useReactiveSource"];
export declare const useStreamable: Signature["useStreamable"];
export {};
