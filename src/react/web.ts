import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { nullObject } from "../__internal__/constants.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../collections.js";
import * as EventSource from "../computations/EventSource.js";
import * as Streamable from "../computations/Streamable.js";
import {
  AnimationGroupStreamLike,
  AnimationStreamLike,
  SpringStreamLike,
} from "../computations/Streamable.js";
import {
  EventSourceLike,
  PureSynchronousObservableLike,
  StoreLike_value,
} from "../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Tuple2,
  Updater,
  identity,
  isFunction,
  isNull,
  none,
  pipe,
  pipeSome,
  pipeSomeLazy,
} from "../functions.js";
import {
  useDisposable,
  useListen,
  useObserve,
  useStore,
  useStream,
} from "../react.js";
import { SchedulerLike } from "../utils.js";
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

interface ReactWebModule {
  WindowLocationProvider(props: {
    windowLocation: WindowLocationLike;
    children: React.ReactNode;
  }): React.ReactNode;

  /**
   */
  useAnimate<TElement extends HTMLElement>(
    animation: Optional<EventSourceLike<CSSStyleMapLike>>,
  ): React.Ref<TElement>;
  useAnimate<TElement extends HTMLElement, T>(
    animation: Optional<EventSourceLike<T>>,
    selector: Function1<T, CSSStyleMapLike>,
    deps?: readonly unknown[],
  ): React.Ref<TElement>;

  useAnimation<T>(
    animation: PureSynchronousObservableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler?: SchedulerLike;
    },
  ): Optional<AnimationStreamLike<unknown, T>>;
  useAnimation<TEvent, T>(
    animation:
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler?: SchedulerLike;
    },
  ): Optional<AnimationStreamLike<TEvent, T>>;

  useAnimationGroup<T, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      PureSynchronousObservableLike<T>
    >,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler?: SchedulerLike;
    },
  ): Optional<AnimationGroupStreamLike<unknown, TKey, T>>;
  useAnimationGroup<T, TKey extends string, TEvent>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      | Function1<TEvent, PureSynchronousObservableLike<T>>
      | PureSynchronousObservableLike<T>
    >,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler?: SchedulerLike;
    },
  ): Optional<AnimationGroupStreamLike<TEvent, TKey, T>>;

  /**
   */
  useScroll<TElement extends HTMLElement>(
    callback: SideEffect1<ScrollValue>,
    deps: readonly unknown[],
  ): React.Ref<TElement>;

  useSpring(options?: {
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

const WindowLocationContext = /*@__PURE__*/ createContext<WindowLocationLike>(
  none as unknown as WindowLocationLike,
);

export const useAnimate: Signature["useAnimate"] = <
  TElement extends HTMLElement,
  T,
>(
  animation: Optional<EventSourceLike<T>>,
  selector?: Function1<T, CSSStyleMapLike>,
  deps?: readonly unknown[],
) => {
  const ref = useRef<TElement>(nullObject);

  const memoizedSelector = isFunction(selector)
    ? useCallback(selector, deps ?? [])
    : (identity as Function1<T, CSSStyleMapLike>);

  useDisposable(
    pipeSomeLazy(
      animation,
      EventSource.addEventHandler(v => {
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
  options?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly animationScheduler?: SchedulerLike;
  },
) => {
  const animationScheduler =
    options?.animationScheduler ?? AnimationFrameScheduler.get();

  return useStream(
    () =>
      Streamable.animation(animation, {
        animationScheduler,
      }),
    [animationScheduler],
    options,
  );
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
  options?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly animationScheduler?: SchedulerLike;
  },
) => {
  const animationScheduler =
    options?.animationScheduler ?? AnimationFrameScheduler.get();

  return useStream(
    () =>
      Streamable.animationGroup(animationGroup, {
        animationScheduler,
      }),
    [animationScheduler],
    options,
  );
};

export const useMeasure = (): Tuple2<
  React.Ref<HTMLDivElement>,
  Optional<Rect>
> => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const rect = useStore(pipeSome(container ?? none, WebElement.measure()));

  return [setContainer, rect];
};

export const useScroll: Signature["useScroll"] = <TElement extends HTMLElement>(
  callback: SideEffect1<ScrollValue>,
  deps: readonly unknown[],
) => {
  const [element, setElement] = useState<TElement | null>(null);

  const memoizedCallback = useCallback(callback, deps);

  useDisposable(
    pipeSomeLazy(
      element ?? none,
      WebElement.addScrollHandler(memoizedCallback),
    ),
    [element, memoizedCallback],
  );

  return setElement as React.Ref<TElement>;
};

export const useSpring: Signature["useSpring"] = (options?: {
  readonly priority?: 1 | 2 | 3 | 4 | 5;
  readonly stiffness?: number;
  readonly damping?: number;
  readonly precision?: number;
}) => {
  const animationScheduler = AnimationFrameScheduler.get();

  return useStream(
    () =>
      Streamable.spring({
        ...options,
        animationScheduler,
      }),
    [animationScheduler],
    options,
  );
};

export const useWindowLocation: Signature["useWindowLocation"] = () => {
  const windowLocation = useContext(WindowLocationContext);

  const uri = useObserve(windowLocation);

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
    useListen(windowLocation[WindowLocationLike_canGoBack]) ??
    windowLocation[WindowLocationLike_canGoBack][StoreLike_value];

  return {
    uri,
    push,
    replace,
    goBack,
    canGoBack,
  };
};

export const WindowLocationProvider: Signature["WindowLocationProvider"] = ({
  windowLocation,
  children,
}: {
  windowLocation: WindowLocationLike;
  children: React.ReactNode;
}) =>
  createElement(
    WindowLocationContext.Provider,
    {
      value: windowLocation,
    },
    children,
  );
