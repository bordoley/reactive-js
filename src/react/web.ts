import {
  DOMAttributes,
  SyntheticEvent,
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { nullObject } from "../__internal__/constants.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../collections.js";
import * as Broadcaster from "../computations/Broadcaster.js";
import * as Publisher from "../computations/Publisher.js";
import {
  AnimationGroupLike,
  AnimationLike,
  SpringLike,
} from "../computations/Streamable.js";
import * as Streamable from "../computations/Streamable.js";
import {
  BroadcasterLike,
  PublisherLike,
  PureSynchronousObservableLike,
  StoreLike_value,
} from "../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Tuple2,
  Updater,
  isFunction,
  isNull,
  none,
  pipe,
  pipeLazy,
  pipeSome,
  pipeSomeLazy,
  tuple,
} from "../functions.js";
import { useDisposable, useEventSource, useStreamable } from "../react.js";
import { EventListenerLike_notify } from "../utils.js";
import * as AnimationFrameScheduler from "../web/AnimationFrameScheduler.js";
import * as WebElement from "../web/Element.js";
import {
  CSSStyleMapLike,
  Rect,
  ScrollValue,
  WindowLocationLike,
  WindowLocationLike_canGoBack,
  WindowLocationLike_goBack,
  WindowLocationLike_push,
  WindowLocationLike_replace,
  WindowLocationURI,
} from "../web.js";
import * as WindowLocation from "../web/WindowLocation.js";

type DOMEvents<TElement extends Element> = keyof Omit<
  DOMAttributes<TElement>,
  "children" | "dangerouslySetInnerHTML"
>;

type DOMEventTypeMap<TElement extends Element> = {
  [EventName in DOMEvents<TElement>]: NonNullable<
    DOMAttributes<TElement>[EventName]
  > extends React.EventHandler<infer TEvent>
    ? TEvent
    : never;
};

export type DOMEventTypeOf<
  TEventName extends DOMEvents<TElement>,
  TElement extends Element = any,
> = NonNullable<DOMEventTypeMap<TElement>[TEventName]>;

export interface ReactWebModule {
  WindowLocationProvider(props: {
    children: React.ReactNode;
  }): React.ReactNode;

  /**
   */
  useAnimate<TElement extends HTMLElement>(
    animation: Optional<BroadcasterLike<CSSStyleMapLike>>,
  ): React.Ref<TElement>;
  useAnimate<TElement extends HTMLElement, T>(
    animation: Optional<BroadcasterLike<T>>,
    selector: Function1<T, CSSStyleMapLike>,
    deps?: readonly unknown[],
  ): React.Ref<TElement>;

  useAnimation<T>(
    animation: PureSynchronousObservableLike<T>,
  ): Optional<AnimationLike<unknown, T>>;
  useAnimation<TEvent, T>(
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
  ): Optional<AnimationLike<TEvent, T>>;

  useAnimationGroup<T, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      PureSynchronousObservableLike<T>
    >,
  ): Optional<AnimationGroupLike<unknown, TKey, T>>;
  useAnimationGroup<T, TKey extends string, TEvent>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>
    >,
  ): Optional<AnimationGroupLike<TEvent, TKey, T>>;

  useEvents<TEvent extends DOMEvents<any>>(
    event: TEvent,
  ): Tuple2<
    {
      [event in TEvent]: (ev: SyntheticEvent) => void;
    },
    Optional<BroadcasterLike<DOMEventTypeOf<TEvent>>>
  >;

  useEvents<TEvent1 extends DOMEvents<any>, TEvent2 extends DOMEvents<any>>(
    event1: TEvent1,
    event2: TEvent2,
  ): Tuple2<
    {
      [event in TEvent1 | TEvent2]: (ev: SyntheticEvent) => void;
    },
    Optional<BroadcasterLike<DOMEventTypeOf<TEvent1> | DOMEventTypeOf<TEvent2>>>
  >;
  useEvents<
    TEvent1 extends DOMEvents<any>,
    TEvent2 extends DOMEvents<any>,
    TEvent3 extends DOMEvents<any>,
  >(
    event1: TEvent1,
    event2: TEvent2,
    event3: TEvent3,
  ): Tuple2<
    {
      [event in TEvent1 | TEvent2 | TEvent3]: (ev: SyntheticEvent) => void;
    },
    Optional<
      BroadcasterLike<
        | DOMEventTypeOf<TEvent1>
        | DOMEventTypeOf<TEvent2>
        | DOMEventTypeOf<TEvent3>
      >
    >
  >;
  useEvents<
    TEvent1 extends DOMEvents<any>,
    TEvent2 extends DOMEvents<any>,
    TEvent3 extends DOMEvents<any>,
    TEvent4 extends DOMEvents<any>,
  >(
    event1: TEvent1,
    event2: TEvent2,
    event3: TEvent3,
    event4: TEvent4,
  ): Tuple2<
    {
      [event in TEvent1 | TEvent2 | TEvent3 | TEvent4]: (
        ev: SyntheticEvent,
      ) => void;
    },
    Optional<
      BroadcasterLike<
        | DOMEventTypeOf<TEvent1>
        | DOMEventTypeOf<TEvent2>
        | DOMEventTypeOf<TEvent3>
        | DOMEventTypeOf<TEvent4>
      >
    >
  >;
  useEvents<
    TEvent1 extends DOMEvents<any>,
    TEvent2 extends DOMEvents<any>,
    TEvent3 extends DOMEvents<any>,
    TEvent4 extends DOMEvents<any>,
    TEvent5 extends DOMEvents<any>,
  >(
    event1: TEvent1,
    event2: TEvent2,
    event3: TEvent3,
    event4: TEvent4,
    event5: TEvent5,
  ): Tuple2<
    {
      [event in TEvent1 | TEvent2 | TEvent3 | TEvent4 | TEvent5]: (
        ev: SyntheticEvent,
      ) => void;
    },
    Optional<
      BroadcasterLike<
        | DOMEventTypeOf<TEvent1>
        | DOMEventTypeOf<TEvent2>
        | DOMEventTypeOf<TEvent3>
        | DOMEventTypeOf<TEvent4>
        | DOMEventTypeOf<TEvent5>
      >
    >
  >;
  useEvents<
    TEvent1 extends DOMEvents<any>,
    TEvent2 extends DOMEvents<any>,
    TEvent3 extends DOMEvents<any>,
    TEvent4 extends DOMEvents<any>,
    TEvent5 extends DOMEvents<any>,
    TEvent6 extends DOMEvents<any>,
  >(
    event1: TEvent1,
    event2: TEvent2,
    event3: TEvent3,
    event4: TEvent4,
    event5: TEvent5,
    event6: TEvent6,
  ): Tuple2<
    {
      [event in TEvent1 | TEvent2 | TEvent3 | TEvent4 | TEvent5 | TEvent6]: (
        ev: SyntheticEvent,
      ) => void;
    },
    Optional<
      BroadcasterLike<
        | DOMEventTypeOf<TEvent1>
        | DOMEventTypeOf<TEvent2>
        | DOMEventTypeOf<TEvent3>
        | DOMEventTypeOf<TEvent4>
        | DOMEventTypeOf<TEvent5>
        | DOMEventTypeOf<TEvent6>
      >
    >
  >;
  useEvents<
    TEvent1 extends DOMEvents<any>,
    TEvent2 extends DOMEvents<any>,
    TEvent3 extends DOMEvents<any>,
    TEvent4 extends DOMEvents<any>,
    TEvent5 extends DOMEvents<any>,
    TEvent6 extends DOMEvents<any>,
    TEvent7 extends DOMEvents<any>,
  >(
    event1: TEvent1,
    event2: TEvent2,
    event3: TEvent3,
    event4: TEvent4,
    event5: TEvent5,
    event6: TEvent6,
    event7: TEvent7,
  ): Tuple2<
    {
      [event in
        | TEvent1
        | TEvent2
        | TEvent3
        | TEvent4
        | TEvent5
        | TEvent6
        | TEvent7]: (ev: SyntheticEvent) => void;
    },
    Optional<
      BroadcasterLike<
        | DOMEventTypeOf<TEvent1>
        | DOMEventTypeOf<TEvent2>
        | DOMEventTypeOf<TEvent3>
        | DOMEventTypeOf<TEvent4>
        | DOMEventTypeOf<TEvent5>
        | DOMEventTypeOf<TEvent6>
        | DOMEventTypeOf<TEvent7>
      >
    >
  >;

  /**
   */
  useScroll<TElement extends HTMLElement>(): Tuple2<
    React.Ref<TElement>,
    Optional<BroadcasterLike<ScrollValue>>
  >;

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

const WindowLocationContext = /*@__PURE__*/ createContext<WindowLocationLike>(
  none as unknown as WindowLocationLike,
);

export const WindowLocationProvider: Signature["WindowLocationProvider"] = ({
  children,
}: {
  children: React.ReactNode;
}) =>
  createElement(
    WindowLocationContext.Provider,
    {
      value: WindowLocation.get(),
    },
    children,
  );

export const useAnimate: Signature["useAnimate"] = <
  TElement extends HTMLElement,
  T,
>(
  animation: Optional<BroadcasterLike<T>>,
  selector?: Function1<T, CSSStyleMapLike>,
  deps?: readonly unknown[],
) => {
  const ref = useRef<TElement>(nullObject);

  const memoizedSelector = isFunction(selector)
    ? useCallback(selector, deps ?? [])
    : (Streamable.identity as Function1<T, CSSStyleMapLike>);

  useDisposable(
    pipeSomeLazy(
      animation,
      Broadcaster.addEventHandler(v => {
        const element = ref.current;
        if (!isNull(element)) {
          pipe(
            memoizedSelector(v),
            ReadonlyObjectMap.forEach<string, keyof CSSStyleMapLike>(
              (v, key) => {
                element.style[key] = v ?? "";
              },
            ),
          );
        }
      }),
    ),
    [animation, memoizedSelector],
  );

  return ref;
};

export const useAnimation: Signature["useAnimation"] = <T, TEvent = unknown>(
  animation:
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>,
) => {
  const scheduler = AnimationFrameScheduler.get();

  return useStreamable(() => Streamable.animation(animation), [], {
    scheduler,
  });
};

export const useAnimationGroup: Signature["useAnimationGroup"] = <
  T,
  TKey extends string = string,
  TEvent = unknown,
>(
  animationGroup: ReadonlyObjectMapLike<
    TKey,
    | Function1<TEvent, PureSynchronousObservableLike<T>>
    | PureSynchronousObservableLike<T>
  >,
) => {
  const scheduler = AnimationFrameScheduler.get();

  return useStreamable(() => Streamable.animationGroup(animationGroup), [], {
    scheduler,
  });
};

export const useEvents: Signature["useEvents"] = ((
  ...events: DOMEvents<any>[]
) => {
  const publisher = useDisposable(Publisher.create<SyntheticEvent>, []);

  const stablePublisherRef =
    useRef<Optional<PublisherLike<SyntheticEvent<Element, Event>>>>(none);
  useEffect(() => {
    stablePublisherRef.current = publisher;
  }, [publisher]);

  const eventHandler = useCallback(
    (ev: SyntheticEvent) =>
      stablePublisherRef.current?.[EventListenerLike_notify](ev),
    [],
  );

  const props = useMemo(
    pipeLazy(
      events,
      ReadonlyArray.map(name => tuple(name, eventHandler)),
      ReadonlyObjectMap.fromEntries(),
    ),
    [events, eventHandler],
  );

  return [props, publisher];
}) as unknown as Signature["useEvents"];

export const useMeasure = (): Tuple2<
  React.Ref<HTMLDivElement>,
  Optional<Rect>
> => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const rect = useEventSource(
    pipeSome(container ?? none, WebElement.measure()),
  );

  return [setContainer, rect];
};

export const useScroll: Signature["useScroll"] = <
  TElement extends HTMLElement,
>() => {
  const [element, setElement] = useState<TElement | null>(null);

  const publisher = useDisposable(Publisher.create<ScrollValue>, []);

  useDisposable(
    pipeSomeLazy(
      element ?? none,
      WebElement.addScrollHandler(ev => {
        publisher?.[EventListenerLike_notify](ev);
      }),
    ),
    [element, publisher],
  );

  return tuple(setElement as React.Ref<TElement>, publisher);
};

export const useSpring: Signature["useSpring"] = (options?: {
  readonly stiffness?: number;
  readonly damping?: number;
  readonly precision?: number;
}) => {
  const scheduler = AnimationFrameScheduler.get();
  const { stiffness, damping, precision } = options ?? {};

  return useStreamable(
    () =>
      Streamable.spring({
        stiffness,
        damping,
        precision,
      }),
    [stiffness, damping, precision],
    {
      scheduler,
    },
  );
};

export const useWindowLocation: Signature["useWindowLocation"] = () => {
  const windowLocation = useContext(WindowLocationContext);

  const uri = useEventSource(windowLocation);

  const stableWindowLocationRef = useRef<Optional<WindowLocationLike>>(none);
  useEffect(() => {
    stableWindowLocationRef.current = windowLocation;
  }, [windowLocation, stableWindowLocationRef]);

  const push = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return windowLocationStream?.[WindowLocationLike_push](action) ?? false;
    },
    [stableWindowLocationRef],
  );

  const replace = useCallback(
    (action: Updater<WindowLocationURI> | WindowLocationURI) => {
      const windowLocationStream = stableWindowLocationRef.current;
      return (
        windowLocationStream?.[WindowLocationLike_replace](action) ?? false
      );
    },
    [stableWindowLocationRef],
  );

  const goBack = useCallback(() => {
    const windowLocationStream = stableWindowLocationRef.current;
    return windowLocationStream?.[WindowLocationLike_goBack]() ?? false;
  }, [stableWindowLocationRef]);

  const canGoBack =
    useEventSource(windowLocation[WindowLocationLike_canGoBack]) ??
    windowLocation[WindowLocationLike_canGoBack][StoreLike_value];

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};
