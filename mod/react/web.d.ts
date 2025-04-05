import { DOMAttributes, SyntheticEvent } from "react";
import { ReadonlyObjectMapLike } from "../collections.js";
import { AnimationGroupLike, AnimationLike, SpringLike } from "../computations/Streamable.js";
import { BroadcasterLike, PureSynchronousObservableLike } from "../computations.js";
import { Function1, Optional, SideEffect1, Tuple2, Updater } from "../functions.js";
import { CSSStyleMapLike, Rect, ScrollValue, WindowLocationLike, WindowLocationURI } from "../web.js";
type DOMEvents<TElement extends Element> = keyof Omit<DOMAttributes<TElement>, "children" | "dangerouslySetInnerHTML">;
type DOMEventTypeMap<TElement extends Element> = {
    [EventName in DOMEvents<TElement>]: NonNullable<DOMAttributes<TElement>[EventName]> extends React.EventHandler<infer TEvent> ? TEvent : never;
};
export type DOMEventTypeOf<TEventName extends DOMEvents<TElement>, TElement extends Element = any> = NonNullable<DOMEventTypeMap<TElement>[TEventName]>;
export interface ReactWebModule {
    WindowLocationProvider(props: {
        windowLocation: WindowLocationLike;
        children: React.ReactNode;
    }): React.ReactNode;
    /**
     */
    useAnimate<TElement extends HTMLElement>(animation: Optional<BroadcasterLike<CSSStyleMapLike>>): React.Ref<TElement>;
    useAnimate<TElement extends HTMLElement, T>(animation: Optional<BroadcasterLike<T>>, selector: Function1<T, CSSStyleMapLike>, deps?: readonly unknown[]): React.Ref<TElement>;
    useAnimation<T>(animation: PureSynchronousObservableLike<T>): Optional<AnimationLike<unknown, T>>;
    useAnimation<TEvent, T>(animation: Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>): Optional<AnimationLike<TEvent, T>>;
    useAnimationGroup<T, TKey extends string = string>(animationGroup: ReadonlyObjectMapLike<TKey, PureSynchronousObservableLike<T>>): Optional<AnimationGroupLike<unknown, TKey, T>>;
    useAnimationGroup<T, TKey extends string, TEvent>(animationGroup: ReadonlyObjectMapLike<TKey, Function1<TEvent, PureSynchronousObservableLike<T>> | PureSynchronousObservableLike<T>>): Optional<AnimationGroupLike<TEvent, TKey, T>>;
    useEvents<TEvent extends DOMEvents<any>>(event: TEvent): Tuple2<{
        [event in TEvent]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2): Tuple2<{
        [event in TEvent1 | TEvent2]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>, TEvent3 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2, event3: TEvent3): Tuple2<{
        [event in TEvent1 | TEvent2 | TEvent3]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2> | DOMEventTypeOf<TEvent3>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>, TEvent3 extends DOMEvents<any>, TEvent4 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2, event3: TEvent3, event4: TEvent4): Tuple2<{
        [event in TEvent1 | TEvent2 | TEvent3 | TEvent4]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2> | DOMEventTypeOf<TEvent3> | DOMEventTypeOf<TEvent4>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>, TEvent3 extends DOMEvents<any>, TEvent4 extends DOMEvents<any>, TEvent5 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2, event3: TEvent3, event4: TEvent4, event5: TEvent5): Tuple2<{
        [event in TEvent1 | TEvent2 | TEvent3 | TEvent4 | TEvent5]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2> | DOMEventTypeOf<TEvent3> | DOMEventTypeOf<TEvent4> | DOMEventTypeOf<TEvent5>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>, TEvent3 extends DOMEvents<any>, TEvent4 extends DOMEvents<any>, TEvent5 extends DOMEvents<any>, TEvent6 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2, event3: TEvent3, event4: TEvent4, event5: TEvent5, event6: TEvent6): Tuple2<{
        [event in TEvent1 | TEvent2 | TEvent3 | TEvent4 | TEvent5 | TEvent6]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2> | DOMEventTypeOf<TEvent3> | DOMEventTypeOf<TEvent4> | DOMEventTypeOf<TEvent5> | DOMEventTypeOf<TEvent6>>>>;
    useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>, TEvent3 extends DOMEvents<any>, TEvent4 extends DOMEvents<any>, TEvent5 extends DOMEvents<any>, TEvent6 extends DOMEvents<any>, TEvent7 extends DOMEvents<any>>(event1: TEvent1, event2: TEvent2, event3: TEvent3, event4: TEvent4, event5: TEvent5, event6: TEvent6, event7: TEvent7): Tuple2<{
        [event in TEvent1 | TEvent2 | TEvent3 | TEvent4 | TEvent5 | TEvent6 | TEvent7]: (ev: SyntheticEvent) => void;
    }, Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2> | DOMEventTypeOf<TEvent3> | DOMEventTypeOf<TEvent4> | DOMEventTypeOf<TEvent5> | DOMEventTypeOf<TEvent6> | DOMEventTypeOf<TEvent7>>>>;
    /**
     */
    useScroll<TElement extends HTMLElement>(): Tuple2<React.Ref<TElement>, Optional<BroadcasterLike<ScrollValue>>>;
    useSpring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): Optional<SpringLike>;
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
export type Signature = ReactWebModule;
export declare const WindowLocationProvider: Signature["WindowLocationProvider"];
export declare const useAnimate: Signature["useAnimate"];
export declare const useAnimation: Signature["useAnimation"];
export declare const useAnimationGroup: Signature["useAnimationGroup"];
export declare const useEvents: Signature["useEvents"];
export declare const useMeasure: () => Tuple2<React.Ref<HTMLDivElement>, Optional<Rect>>;
export declare const useScroll: Signature["useScroll"];
export declare const useSpring: Signature["useSpring"];
export declare const useWindowLocation: Signature["useWindowLocation"];
export {};
