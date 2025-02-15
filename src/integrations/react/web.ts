import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { nullObject } from "../../__internal__/constants.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../../collections.js";
import * as Streamable from "../../concurrent/Streamable.js";
import {
  AnimationGroupStreamLike,
  AnimationStreamLike,
  PureRunnableLike,
  SchedulerLike,
} from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import { EventSourceLike, StoreLike_value } from "../../events.js";
import {
  Function1,
  Optional,
  SideEffect1,
  Updater,
  identity,
  isFunction,
  isNull,
  none,
  pipe,
  pipeSomeLazy,
} from "../../functions.js";
import { useDisposable, useListen, useObserve, useStream } from "../react.js";
import * as AnimationFrameScheduler from "../web/AnimationFrameScheduler.js";
import * as WebElement from "../web/Element.js";
import {
  CSSStyleMapLike,
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
    deps: readonly unknown[],
  ): React.Ref<TElement>;

  useAnimation<T>(
    animation: PureRunnableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler: SchedulerLike;
    },
  ): Optional<AnimationStreamLike<unknown, T>>;
  useAnimation<TEvent, T>(
    animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler: SchedulerLike;
    },
  ): Optional<AnimationStreamLike<TEvent, T>>;

  useAnimationGroup<T, TKey extends string = string>(
    animationGroup: ReadonlyObjectMapLike<TKey, PureRunnableLike<T>>,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler: SchedulerLike;
    },
  ): Optional<AnimationGroupStreamLike<unknown, TKey, T>>;
  useAnimationGroup<T, TKey extends string, TEvent>(
    animationGroup: ReadonlyObjectMapLike<
      TKey,
      Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
    >,
    options?: {
      readonly priority?: 1 | 2 | 3 | 4 | 5;
      readonly animationScheduler: SchedulerLike;
    },
  ): Optional<AnimationGroupStreamLike<TEvent, TKey, T>>;

  useEventHandler<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbortSignalEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AnimationEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbstractWorkerEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioScheduledSourceNodeEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BaseAudioContextEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioWorkletNodeEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BroadcastChannelEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<DocumentEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Element,
    K extends keyof ElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamTrackEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<EventSourceEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FileReaderEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FontFaceSetEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<GlobalEventHandlersEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBDatabaseEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLBodyElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLMediaElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLVideoElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBOpenDBRequestEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBRequestEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBTransactionEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MathMLElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaDevicesEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaKeySessionEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaQueryListEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaRecorderEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaSourceEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MessagePortEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<NotificationEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OfflineAudioContextEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OffscreenCanvasEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PaymentRequestEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PerformanceEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PermissionStatusEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PictureInPictureWindowEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDTMFSenderEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDataChannelEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDtlsTransportEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCIceTransportEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCPeerConnectionEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCSctpTransportEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RemotePlaybackEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGSVGElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ScreenOrientationEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerContainerEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerRegistrationEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ShadowRootEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferListEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisUtteranceEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGElementEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackCueEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackListEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<VisualViewportEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<WebSocketEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WindowEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WorkerEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;
  useEventHandler<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<XMLHttpRequestEventTargetEventMap[K]>,
    deps: readonly unknown[],
    options?: { passive?: boolean; capture?: boolean },
  ): React.Ref<TEventTarget>;

  /**
   */
  useScroll<TElement extends HTMLElement>(
    callback: SideEffect1<ScrollValue>,
    deps: readonly unknown[],
  ): React.Ref<TElement>;

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
  animation: Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>,
  options?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly animationScheduler: SchedulerLike;
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
    Function1<TEvent, PureRunnableLike<T>> | PureRunnableLike<T>
  >,
  options?: {
    readonly priority?: 1 | 2 | 3 | 4 | 5;
    readonly animationScheduler: SchedulerLike;
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

export const useEventHandler: Signature["useEventHandler"] = (
  eventName: string,
  callback: SideEffect1<unknown>,
  deps: readonly unknown[],
  options?: { passive?: boolean; capture?: boolean },
) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const memoizedCallback = useCallback(callback, deps);

  useDisposable(
    pipeSomeLazy(
      element ?? none,
      WebElement.addEventHandler<HTMLElement, any>(
        eventName,
        memoizedCallback,
        options,
      ),
    ),
    [element, eventName, memoizedCallback],
  );

  return setElement as React.Ref<HTMLElement>;
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
