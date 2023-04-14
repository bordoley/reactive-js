import * as Object from "../__internal__/Object.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../__internal__/mixins.js";
import {
  __WindowLocationStreamLike_canGoBack as WindowLocationStreamLike_canGoBack,
  __WindowLocationStreamLike_goBack as WindowLocationStreamLike_goBack,
  __WindowLocationStreamLike_replace as WindowLocationStreamLike_replace,
} from "../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../__internal__/util.js";
import {
  Function1,
  Optional,
  Updater,
  bindMethod,
  compose,
  error,
  invoke,
  isFunction,
  isSome,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../functions.js";
import * as ReadonlyArray from "../keyed-containers/ReadonlyArray.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  ReplayableLike_buffer,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import { SchedulerLike } from "../scheduling.js";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
  StreamableLike_stream,
} from "../streaming.js";
import * as Stream from "../streaming/Stream.js";
import Stream_delegatingMixin from "../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import Delegating_mixin from "../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../util/Disposable.js";
import * as EventListener from "../util/EventListener.js";

export {
  WindowLocationStreamLike_goBack,
  WindowLocationStreamLike_canGoBack,
  WindowLocationStreamLike_replace,
};

/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
  readonly title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  readonly path: string;
  readonly query: string;
  readonly fragment: string;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  readonly [WindowLocationStreamLike_canGoBack]: ObservableLike<boolean>;

  [WindowLocationStreamLike_goBack](): void;

  [WindowLocationStreamLike_replace](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): boolean;
}
const errorEvent = "error";

const reservedEvents = [errorEvent, "open"];

export const createEventSource = (
  url: string | URL,
  options: EventSourceInit & {
    readonly events?: readonly string[];
  } = {},
): ObservableLike<{
  readonly id: string;
  readonly type: string;
  readonly data: string;
}> => {
  const events = pipe(
    options.events ?? ["message"],
    ReadonlyArray.keep(x => !reservedEvents.includes(x)),
  );
  const requestURL = url instanceof URL ? url.toString() : url;

  return Observable.create(observer => {
    pipe(
      observer,
      Disposable.onDisposed(_ => {
        eventSource.removeEventListener(errorEvent, onError);

        for (const ev of events) {
          eventSource.removeEventListener(ev, listener);
        }
        eventSource.close();
      }),
    );

    const eventSource = newInstance(EventSource, requestURL, options);
    const listener = (ev: MessageEvent) => {
      observer[QueueableLike_enqueue]({
        id: ev.lastEventId ?? "",
        type: ev.type ?? "",
        data: ev.data ?? "",
      });
    };

    const onError = (e: unknown) => {
      observer[DisposableLike_dispose](error(e));
    };

    eventSource.addEventListener(errorEvent, onError);

    for (const ev of events) {
      eventSource.addEventListener(ev, listener);
    }
  });
};

interface AddEventListener {
  addEventListener<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<AbortSignalEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<AnimationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<AbstractWorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<AudioScheduledSourceNodeEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<BaseAudioContextEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<AudioWorkletNodeEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<BroadcastChannelEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<DocumentEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaStreamTrackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<EventSourceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<FileReaderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<FontFaceSetEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<GlobalEventHandlersEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<IDBDatabaseEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<HTMLBodyElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<HTMLElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<HTMLMediaElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<HTMLVideoElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;

  addEventListener<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<IDBOpenDBRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    eventListener: EventListenerLike<IDBRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<IDBTransactionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MathMLElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaDevicesEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaKeySessionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaQueryListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaRecorderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaSourceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MediaStreamEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<MessagePortEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<NotificationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<OfflineAudioContextEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<OffscreenCanvasEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<PaymentRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<PerformanceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<PermissionStatusEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<PictureInPictureWindowEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCDTMFSenderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCDataChannelEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCDtlsTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCIceTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCPeerConnectionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RTCSctpTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<RemotePlaybackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SVGSVGElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<ScreenOrientationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<ServiceWorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<ServiceWorkerContainerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<ServiceWorkerRegistrationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<ShadowRootEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SourceBufferEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SourceBufferListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SpeechSynthesisEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SpeechSynthesisUtteranceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<SVGElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<TextTrackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<TextTrackCueEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<TextTrackListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<VisualViewportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<WebSocketEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    eventListener: EventListenerLike<WindowEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    eventListener: EventListenerLike<WorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    eventListener: EventListenerLike<XMLHttpRequestEventTargetEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
}

export const addEventListener: AddEventListener["addEventListener"] = ((
    eventName: string,
    eventListener: EventListenerLike<unknown>,
  ): Function1<
    {
      addEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
        options: unknown,
      ): void;
      removeEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
      ): void;
    },
    {
      addEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
        options: unknown,
      ): void;
      removeEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
      ): void;
    }
  > =>
  target => {
    pipe(
      eventListener,
      Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
      }),
    );
    const listener = (event: unknown) => {
      eventListener[EventListenerLike_notify](event);
    };

    target.addEventListener(eventName, listener, {
      passive: true,
    } as any);

    return target;
  }) as AddEventListener["addEventListener"];

interface ObserveEvent {
  observeEvent<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AbortSignalEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AnimationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AbstractWorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AudioScheduledSourceNodeEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<BaseAudioContextEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AudioWorkletNodeEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<BroadcastChannelEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<DocumentEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaStreamTrackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<EventSourceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<FileReaderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<FontFaceSetEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<GlobalEventHandlersEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBDatabaseEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLBodyElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLMediaElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLVideoElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  observeEvent<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBOpenDBRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    T,
    TDBObject = any,
  >(
    eventName: K,
    selector: Function1<IDBRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBTransactionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MathMLElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaDevicesEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaKeySessionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaQueryListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaRecorderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaSourceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaStreamEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MessagePortEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<NotificationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<OfflineAudioContextEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<OffscreenCanvasEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PaymentRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PerformanceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PermissionStatusEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PictureInPictureWindowEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDTMFSenderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDataChannelEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDtlsTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCIceTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCPeerConnectionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCSctpTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RemotePlaybackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SVGSVGElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ScreenOrientationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerContainerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerRegistrationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ShadowRootEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SourceBufferEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SourceBufferListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SpeechSynthesisEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SpeechSynthesisUtteranceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SVGElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackCueEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<VisualViewportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<WebSocketEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<TEventTarget extends Window, K extends keyof WindowEventMap, T>(
    eventName: K,
    selector: Function1<WindowEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<TEventTarget extends Worker, K extends keyof WorkerEventMap, T>(
    eventName: K,
    selector: Function1<WorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  observeEvent<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<XMLHttpRequestEventTargetEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
}

export const observeEvent: ObserveEvent["observeEvent"] = (<T>(
    eventName: string,
    selector: Function1<unknown, T>,
  ): Function1<
    {
      addEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
        options: unknown,
      ): void;
      removeEventListener(
        eventName: string,
        listener: (ev: unknown) => void,
      ): void;
    },
    ObservableLike<T>
  > =>
  target =>
    Observable.create(observer => {
      pipe(
        observer,
        Disposable.onDisposed(_ => {
          target.removeEventListener(eventName, listener);
        }),
      );

      const listener = (event: unknown) => {
        const result = selector(event);
        observer[QueueableLike_enqueue](result);
      };

      target.addEventListener(eventName, listener, {
        passive: true,
      } as any);
    })) as ObserveEvent["observeEvent"];

export const windowLocation: StreamableLike<
  Updater<WindowLocationURI> | WindowLocationURI,
  WindowLocationURI,
  WindowLocationStreamLike
> = /*@__PURE__*/ (() => {
  const { history, location } = window;

  const windowLocationPrototype = {
    toString(this: WindowLocationURI) {
      const { path, query, fragment } = this;
      let uri =
        path.length === 0 ? "" : !path.startsWith("/") ? `/${path}` : path;
      uri = query.length > 0 ? `${uri}?${query}` : uri;
      uri = fragment.length > 0 ? `${uri}#${fragment}` : uri;

      const base = newInstance(URL, location.href);
      return String(newInstance(URL, base.origin + uri));
    },
  };

  const createWindowLocationURIWithPrototype = (
    uri: WindowLocationURI,
  ): WindowLocationURI =>
    uri.toString === windowLocationPrototype.toString
      ? uri
      : Object.create(
          windowLocationPrototype,
          Object.getOwnPropertyDescriptors(uri),
        );

  const getCurrentWindowLocationURI = (): WindowLocationURI => {
    const {
      pathname: path,
      search: query,
      hash: fragment,
    } = newInstance(URL, location.href);

    return createWindowLocationURIWithPrototype({
      path,
      query: query.slice(1),
      fragment: fragment.slice(1),
      title: document.title,
    });
  };

  type TState = {
    replace: boolean;
    uri: WindowLocationURI;
    counter: number;
  };

  const areURIsEqual = (a: WindowLocationURI, b: WindowLocationURI) =>
    a.path === b.path && a.query === b.query && a.fragment === b.fragment;

  const areWindowLocationStatesEqual = (
    { uri: a, counter: counterA }: TState,
    { uri: b, counter: counterB }: TState,
  ) =>
    // Intentionally ignore the replace flag.
    (a === b || (a.title === b.title && areURIsEqual(a, b))) &&
    counterA === counterB;

  class WindowLocationReplayBuffer
    implements IndexedBufferCollectionLike<WindowLocationURI>
  {
    constructor(readonly d: IndexedBufferCollectionLike<TState>) {}

    get [BufferLike_capacity](): number {
      return this.d[BufferLike_capacity];
    }

    get [CollectionLike_count](): number {
      return this.d[CollectionLike_count];
    }

    [KeyedCollectionLike_get](index: number): WindowLocationURI {
      return this.d[KeyedCollectionLike_get](index).uri;
    }
  }

  const createWindowLocationStream = createInstanceFactory(
    mix(
      include(Stream_delegatingMixin(), Delegating_mixin()),
      function WindowLocationStream(
        instance: Pick<
          WindowLocationStreamLike,
          | typeof ReplayableLike_buffer
          | typeof QueueableLike_enqueue
          | typeof WindowLocationStreamLike_canGoBack
          | typeof WindowLocationStreamLike_goBack
          | typeof WindowLocationStreamLike_replace
          | typeof ObservableLike_observe
        >,
        delegate: StreamLike<Updater<TState>, TState>,
      ): WindowLocationStreamLike {
        init(Stream_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);

        return instance;
      },
      props<unknown>({}),
      {
        get [ReplayableLike_buffer](): IndexedBufferCollectionLike<WindowLocationURI> {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return newInstance(
            WindowLocationReplayBuffer,
            this[DelegatingLike_delegate][ReplayableLike_buffer],
          );
        },

        get [WindowLocationStreamLike_canGoBack](): ObservableLike<boolean> {
          unsafeCast<DelegatingLike<StreamLike<Updater<TState>, TState>>>(this);
          return pipe(
            this[DelegatingLike_delegate],
            Observable.map<TState, boolean>(({ counter }) => counter > 0),
          );
        },

        [QueueableLike_enqueue](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_enqueue](
            (prevState: TState) => {
              const uri = createWindowLocationURIWithPrototype(
                isFunction(stateOrUpdater)
                  ? stateOrUpdater(prevState.uri)
                  : stateOrUpdater,
              );

              return { uri, replace: false, counter: prevState.counter + 1 };
            },
          );
        },

        [WindowLocationStreamLike_replace](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          stateOrUpdater: WindowLocationURI | Updater<WindowLocationURI>,
        ): boolean {
          return this[DelegatingLike_delegate][QueueableLike_enqueue](
            (prevState: TState) => {
              const uri = createWindowLocationURIWithPrototype(
                isFunction(stateOrUpdater)
                  ? stateOrUpdater(prevState.uri)
                  : stateOrUpdater,
              );

              return { uri, replace: true, counter: prevState.counter };
            },
          );
        },

        [WindowLocationStreamLike_goBack](
          this: WindowLocationStreamLike,
        ): void {
          history.back();
        },

        [ObservableLike_observe](
          this: DelegatingLike<StreamLike<Updater<TState>, TState>>,
          observer: ObserverLike<WindowLocationURI>,
        ): void {
          pipe(
            this[DelegatingLike_delegate],
            Observable.pick("uri"),
            invoke(ObservableLike_observe, observer),
          );
        },
      },
    ),
  );

  let currentWindowLocationStream: Optional<WindowLocationStreamLike> = none;

  const createSyncToHistoryStream = (
    f: typeof history.pushState,
    scheduler: SchedulerLike,
    options: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
    Streamable.create<TState, TState>(
      compose(
        Observable.throttle(100),
        Observable.forEach(({ counter, uri }) => {
          const { title } = uri;
          document.title = title;
          f({ title, counter }, "", String(uri));
        }),
      ),
    )[StreamableLike_stream](scheduler, options);

  const stream = (
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly replay?: number;
      readonly capacity?: number;
    },
  ): WindowLocationStreamLike => {
    if (isSome(currentWindowLocationStream)) {
      raiseWithDebugMessage("Cannot stream more than once");
    }

    const replaceState = createSyncToHistoryStream(
      bindMethod(history, "replaceState"),
      scheduler,
      { backpressureStrategy: "drop-oldest", capacity: 1 },
    );

    const pushState = createSyncToHistoryStream(
      bindMethod(history, "pushState"),
      scheduler,
      { backpressureStrategy: "drop-oldest", capacity: 1 },
    );

    currentWindowLocationStream = pipe(
      Streamable.createStateStore(
        () => ({
          replace: true,
          uri: getCurrentWindowLocationURI(),
          // Initialize the counter to -1 so that the initized start value
          // get pushed through the updater.
          counter: -1,
        }),
        { equality: areWindowLocationStatesEqual },
      ),
      invoke(StreamableLike_stream, scheduler, {
        replay: options?.replay ?? 1,
        capacity: options?.capacity ?? 1,
        backpressureStrategy: options?.backpressureStrategy ?? "drop-oldest",
      }),
      Stream.syncState(
        state =>
          // Initialize the history state on page load
          pipe(
            window,
            observeEvent<Window, "popstate", unknown>(
              "popstate",
              (e: PopStateEvent) => {
                const { counter, title } = e.state as {
                  counter: number;
                  title: string;
                };

                const uri = createWindowLocationURIWithPrototype({
                  ...getCurrentWindowLocationURI(),
                  title,
                });

                return { counter, replace: true, uri };
              },
            ),
            Observable.startWith({
              counter: 0,
              replace: true,
              uri: state.uri,
            }),
            Observable.map(returns),
          ),
        (oldState, state) => {
          const locationChanged = !areURIsEqual(state.uri, oldState.uri);
          const titleChanged = oldState.uri.title !== state.uri.title;

          let { replace } = state;
          const push = !replace && locationChanged;
          replace = replace || (titleChanged && !locationChanged);

          return pipe(
            state,
            Observable.fromOptional(),
            Observable.enqueue(state =>
              replace
                ? replaceState[QueueableLike_enqueue](state)
                : push
                ? pushState[QueueableLike_enqueue](state)
                : false,
            ),
            Observable.ignoreElements(),
          );
        },
      ),
      createWindowLocationStream,
      Disposable.add(pushState),
      Disposable.add(replaceState),
    );

    return currentWindowLocationStream;
  };

  return {
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
    [StreamableLike_stream]: stream,
  };
})();

export type CSSStyleKey = keyof Omit<
  CSSStyleDeclaration,
  | "item"
  | "length"
  | "parentRule"
  | "getPropertyPriority"
  | "getPropertyValue"
  | "removeProperty"
  | "setProperty"
  | number
  | typeof Symbol.iterator
>;

const calcProgress = (min: number, max: number, value: number) =>
  max - min === 0 ? 1 : (value - min) / (max - min);

export interface ScrollState {
  current: number;
  progress: number;
  scrollLength: number;
}

export interface ScrollValue {
  x: ScrollState;
  y: ScrollState;
}

export const addScrollListener =
  (
    listener: EventListenerLike<{
      event: "scroll";
      value: ScrollValue;
    }>,
  ) =>
  <TElement extends HTMLElement>(element: TElement): TElement => {
    const eventListener = pipe(
      (_: Event) => {
        // FIXME: Nearly every production implementation seems to reuse an
        // event object to avoid memory allocations.

        const xCurrent = element[`scrollLeft`];
        const xScrollLength = element["scrollWidth"] - element["clientWidth"];
        const x = {
          current: xCurrent,
          scrollLength: xScrollLength,
          progress: calcProgress(0, xScrollLength, xCurrent),
        };

        const yCurrent = element[`scrollTop`];
        const yScrollLength = element["scrollHeight"] - element["clientHeight"];
        const y = {
          current: yCurrent,
          scrollLength: yScrollLength,
          progress: calcProgress(0, yScrollLength, yCurrent),
        };

        listener[EventListenerLike_notify]({
          event: "scroll",
          value: { x, y },
        });
      },
      EventListener.create,
      Disposable.bindTo(listener),
    );

    pipe(
      element,
      addEventListener<HTMLElement, "scroll">("scroll", eventListener),
      addEventListener<HTMLElement, "resize">("resize", eventListener),
    );

    return element;
  };
