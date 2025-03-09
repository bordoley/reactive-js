import { ReadonlyObjectMapLike } from "../collections.js";
import { AnimationGroupStreamLike, AnimationStreamLike, SpringStreamLike } from "../computations/Streamable.js";
import { EventSourceLike, PureSynchronousObservableLike } from "../computations.js";
import { Function1, Optional, SideEffect1, Tuple2, Updater } from "../functions.js";
import { SchedulerLike } from "../utils.js";
import { CSSStyleMapLike, Rect, ScrollValue, WindowLocationLike, WindowLocationURI } from "../web.js";
interface ReactWebModule {
    WindowLocationProvider(props: {
        windowLocation: WindowLocationLike;
        children: React.ReactNode;
    }): React.ReactNode;
    /**
     */
    useAnimate<TElement extends HTMLElement>(animation: Optional<EventSourceLike<CSSStyleMapLike>>): React.Ref<TElement>;
    useAnimate<TElement extends HTMLElement, T>(animation: Optional<EventSourceLike<T>>, selector: Function1<T, CSSStyleMapLike>, deps?: readonly unknown[]): React.Ref<TElement>;
    useAnimation<T>(animation: PureSynchronousObservableLike<T>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly animationScheduler?: SchedulerLike;
    }): Optional<AnimationStreamLike<unknown, T>>;
    useAnimation<TEvent, T>(animation: Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly animationScheduler?: SchedulerLike;
    }): Optional<AnimationStreamLike<TEvent, T>>;
    useAnimationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureSynchronousObservableLike<T>>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly animationScheduler?: SchedulerLike;
    }): Optional<AnimationGroupStreamLike<unknown, TKey, T>>;
    useAnimationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>>, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly animationScheduler?: SchedulerLike;
    }): Optional<AnimationGroupStreamLike<TEvent, TKey, T>>;
    /**
     */
    useScroll<TElement extends HTMLElement>(callback: SideEffect1<ScrollValue>, deps: readonly unknown[]): React.Ref<TElement>;
    useSpring(initialValue: number, options?: {
        readonly priority?: 1 | 2 | 3 | 4 | 5;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): Optional<SpringStreamLike>;
    /**
     */
    useWindowLocation(): {
        uri: Optional<WindowLocationURI>;
        push: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
        replace: SideEffect1<Updater<WindowLocationURI> | WindowLocationURI>;
        canGoBack: boolean;
        goBack: () => void;
    };
}
type Signature = ReactWebModule;
export declare const useAnimate: Signature["useAnimate"];
export declare const useAnimation: Signature["useAnimation"];
export declare const useAnimationGroup: Signature["useAnimationGroup"];
export declare const useMeasure: () => Tuple2<React.Ref<HTMLDivElement>, Optional<Rect>>;
export declare const useScroll: Signature["useScroll"];
export declare const useSpring: Signature["useSpring"];
export declare const useWindowLocation: Signature["useWindowLocation"];
export declare const WindowLocationProvider: Signature["WindowLocationProvider"];
export {};
