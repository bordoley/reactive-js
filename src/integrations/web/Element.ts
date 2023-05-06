import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { MAX_VALUE, MIN_VALUE } from "../../__internal__/constants.js";
import { clamp } from "../../__internal__/math.js";
import {
  Function1,
  Optional,
  SideEffect1,
  bindMethod,
  isNone,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions.js";
import { ObservableLike } from "../../rx.js";
import * as Observable from "../../rx/Observable.js";
import {
  DisposableLike,
  ErrorSafeEventListenerLike,
  EventListenerLike,
  EventListenerLike_notify,
  EventPublisherLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
  QueueableLike_enqueue,
} from "../../util.js";
import * as Disposable from "../../util/Disposable.js";
import * as EventListener from "../../util/EventListener.js";
import * as EventPublisher from "../../util/EventPublisher.js";
import * as EventSource from "../../util/EventSource.js";
import type { Rect, ScrollValue } from "../web.js";

interface AddEventHandler {
  addEventHandler<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbortSignalEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AnimationEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbstractWorkerEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioScheduledSourceNodeEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BaseAudioContextEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioWorkletNodeEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BroadcastChannelEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<DocumentEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Element,
    K extends keyof ElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamTrackEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<EventSourceEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FileReaderEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FontFaceSetEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<GlobalEventHandlersEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBDatabaseEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLBodyElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLMediaElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLVideoElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBOpenDBRequestEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBRequestEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBTransactionEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MathMLElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaDevicesEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaKeySessionEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaQueryListEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaRecorderEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaSourceEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MessagePortEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<NotificationEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OfflineAudioContextEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OffscreenCanvasEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PaymentRequestEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PerformanceEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PermissionStatusEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PictureInPictureWindowEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDTMFSenderEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDataChannelEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDtlsTransportEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCIceTransportEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCPeerConnectionEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCSctpTransportEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RemotePlaybackEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGSVGElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ScreenOrientationEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerContainerEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerRegistrationEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ShadowRootEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferListEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisUtteranceEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGElementEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackCueEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackListEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<VisualViewportEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<WebSocketEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WindowEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WorkerEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<XMLHttpRequestEventTargetEventMap[K]>,
  ): Function1<TEventTarget, DisposableLike>;
}

export const addEventHandler: AddEventHandler["addEventHandler"] =
  (
    eventName: string,
    eventHandler: SideEffect1<unknown>,
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
    DisposableLike
  > =>
  source => {
    const listener = EventListener.create(eventHandler, { errorSafe: true });
    pipe(source, (addEventListener as any)(eventName, listener));

    return listener;
  };

interface AddEventListener {
  addEventListener<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<AbortSignalEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<AnimationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<AbstractWorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      AudioScheduledSourceNodeEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<BaseAudioContextEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<AudioWorkletNodeEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<BroadcastChannelEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<DocumentEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Element,
    K extends keyof ElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<ElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaStreamTrackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<EventSourceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<FileReaderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<FontFaceSetEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<GlobalEventHandlersEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<IDBDatabaseEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<HTMLBodyElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<HTMLElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<HTMLMediaElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<HTMLVideoElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<IDBOpenDBRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<IDBRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<IDBTransactionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MathMLElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaDevicesEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaKeySessionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaQueryListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaRecorderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaSourceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MediaStreamEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<MessagePortEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<NotificationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<OfflineAudioContextEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<OffscreenCanvasEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<PaymentRequestEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<PerformanceEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<PermissionStatusEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      PictureInPictureWindowEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCDTMFSenderEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCDataChannelEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCDtlsTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCIceTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCPeerConnectionEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RTCSctpTransportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<RemotePlaybackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<SVGSVGElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<ScreenOrientationEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<ServiceWorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      ServiceWorkerContainerEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      ServiceWorkerRegistrationEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<ShadowRootEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<SourceBufferEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<SourceBufferListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<SpeechSynthesisEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      SpeechSynthesisUtteranceEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<SVGElementEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<TextTrackEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<TextTrackCueEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<TextTrackListEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<VisualViewportEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<WebSocketEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<WindowEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<WorkerEventMap[K]>,
  ): Function1<TEventTarget, TEventTarget>;
  addEventListener<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      XMLHttpRequestEventTargetEventMap[K]
    >,
  ): Function1<TEventTarget, TEventTarget>;
}

export const addEventListener: AddEventListener["addEventListener"] = ((
    eventName: string,
    eventListener: ErrorSafeEventListenerLike<unknown>,
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
    const errorSafeEventListener = pipe(
      eventListener,
      Disposable.onDisposed(_ => {
        target.removeEventListener(eventName, listener);
      }),
    );

    const listener = bindMethod(
      errorSafeEventListener,
      EventListenerLike_notify,
    );

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
    TEventTarget extends Element,
    K extends keyof ElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ElementEventMap[K], T>,
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

export const addScrollHandler =
  <TElement extends HTMLElement>(
    handler: SideEffect1<{
      type: "scroll";
      value: ScrollValue;
    }>,
  ): Function1<TElement, DisposableLike> =>
  element => {
    const listener = EventListener.create(handler);
    pipe(element, addScrollListener(listener));
    return listener;
  };

export const addScrollListener: <TElement extends HTMLElement>(
  listener: EventListenerLike<{
    type: "scroll";
    value: ScrollValue;
  }>,
) => Function1<TElement, TElement> = /*@__PURE__*/ (() => {
  const calcProgress = (min: number, max: number, value: number) =>
    max - min === 0 ? 1 : (value - min) / (max - min);

  return <TElement extends HTMLElement>(
      listener: EventListenerLike<{
        type: "scroll";
        value: ScrollValue;
      }>,
    ) =>
    (element: TElement): TElement => {
      let prevTime = MIN_VALUE;
      let xPrev = 0;
      let yPrev = 0;
      let xVelocityPrev = 0;
      let yVelocityPrev = 0;

      const eventListener = pipe(
        EventListener.create(
          (ev: Event) => {
            if (ev.type === "resize") {
              prevTime = MIN_VALUE;
              xPrev = 0;
              yPrev = 0;
              xVelocityPrev = 0;
              yVelocityPrev = 0;
            }

            const now = CurrentTime.now();
            const dt = clamp(0, now - prevTime, MAX_VALUE);

            // FIXME: Nearly every production implementation seems to reuse an
            // event object to avoid memory allocations.

            const xCurrent = element.scrollLeft;
            const xScrollLength = element.scrollWidth - element.clientWidth;
            const xVelocity = (xCurrent - xPrev) / dt;
            const xAcceleration = dt > 0 ? (xVelocity - xVelocityPrev) / dt : 0;

            const yCurrent = element.scrollTop;
            const yScrollLength = element.scrollHeight - element.clientHeight;
            const yVelocity = (yCurrent - yPrev) / dt;
            const yAcceleration = dt > 0 ? (yVelocity - yVelocityPrev) / dt : 0;

            const x = {
              current: xCurrent,
              scrollLength: xScrollLength,
              progress: calcProgress(0, xScrollLength, xCurrent),
              velocity: xVelocity,
              acceleration: xAcceleration,
            };
            const y = {
              current: yCurrent,
              scrollLength: yScrollLength,
              progress: calcProgress(0, yScrollLength, yCurrent),
              velocity: yVelocity,
              acceleration: yAcceleration,
            };

            prevTime = now;
            xPrev = xCurrent;
            xVelocityPrev = xVelocity;
            yPrev = yCurrent;
            yVelocityPrev = yVelocity;

            listener[EventListenerLike_notify]({
              type: "scroll",
              value: { x, y },
            });
          },
          { errorSafe: true },
        ),
        Disposable.bindTo(listener),
      );

      pipe(
        element,
        addEventListener<HTMLElement, "scroll">("scroll", eventListener),
      );

      pipe(window, addEventListener<Window, "resize">("resize", eventListener));

      return element;
    };
})();

export const addResizeHandler =
  <TElement extends Element>(
    handler: SideEffect1<ResizeObserverEntry>,
  ): Function1<TElement, DisposableLike> =>
  element => {
    const listener = EventListener.create(handler);
    pipe(element, addResizeListener(listener));
    return listener;
  };

export const addResizeListener: <TElement extends Element>(
  listener: EventListenerLike<ResizeObserverEntry>,
  options?: ResizeObserverOptions,
) => Function1<TElement, TElement> = /*@__PURE__*/ (() => {
  const publishers =
    newInstance<Map<Element, EventPublisherLike<ResizeObserverEntry>>>(Map);
  let resizeObserver: Optional<ResizeObserver> = none;

  const resizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      const publisher = publishers.get(entry.target);

      if (isNone(publisher)) {
        continue;
      }

      publisher[EventListenerLike_notify](entry);
    }
  };

  return (listener, options) => element => {
    resizeObserver =
      resizeObserver ??
      (() => newInstance(ResizeObserver, resizeObserverCallback))();

    const publisher =
      publishers.get(element) ??
      (() => {
        const publisher = pipe(
          EventPublisher.createRefCounted<ResizeObserverEntry>(),
          Disposable.onDisposed(() => {
            resizeObserver?.unobserve(element);
            publishers.delete(element);

            if (publishers.size > 0) {
              return;
            }

            resizeObserver?.disconnect();
            resizeObserver = none;
          }),
        );

        publishers.set(element, publisher);
        resizeObserver.observe(element, options);

        return publisher;
      })();

    publisher[EventSourceLike_addEventListener](listener);

    return element;
  };
})();

export const addMeasureHandler =
  <TElement extends HTMLElement>(
    handler: SideEffect1<Rect>,
  ): Function1<TElement, DisposableLike> =>
  element => {
    const listener = EventListener.create(handler);
    pipe(element, addMeasureListener(listener));
    return listener;
  };

export const addMeasureListener: <TElement extends HTMLElement | SVGElement>(
  listener: EventListenerLike<Rect>,
) => Function1<TElement, TElement> = /*@__PURE__*/ (() => {
  const findScrollContainers = (
    element: HTMLElement | SVGElement,
  ): (HTMLElement | SVGElement)[] => {
    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);

    const result =
      element !== document.body &&
      [overflow, overflowX, overflowY].some(
        prop => prop === "auto" || prop === "scroll",
      )
        ? [element]
        : [];

    return element !== document.body && element.parentElement != null
      ? [...result, ...findScrollContainers(element.parentElement)]
      : result;
  };

  return listener => element => {
    const eventListener = pipe(
      EventListener.create(
        () => {
          const { left, top, width, height, bottom, right, x, y }: DOMRect =
            element.getBoundingClientRect();

          const rect: Rect = {
            left,
            top,
            width,
            height,
            bottom,
            right,
            x,
            y,
          };

          /*
            if (state.current.element instanceof HTMLElement && offsetSize) {
              size.height = state.current.element.offsetHeight
              size.width = state.current.element.offsetWidth
            }
            */

          listener[EventListenerLike_notify](rect);
        },
        { errorSafe: true },
      ),
      Disposable.bindTo(listener),
    );

    pipe(element, addResizeListener(eventListener));

    for (const scrollContainer of findScrollContainers(element)) {
      pipe(
        scrollContainer,
        addEventListener<GlobalEventHandlers, "scroll">(
          "scroll",
          eventListener,
        ),
      );
    }

    pipe(
      window,
      addEventListener<Window, "resize">("resize", eventListener),
      // { capture: true, passive: true }
      addEventListener<Window, "scroll">("scroll", eventListener),
    );

    return element;
  };
})();

export const observeMeasure: <
  TElement extends HTMLElement | SVGElement,
>() => Function1<TElement, ObservableLike<Rect>> = /*@__PURE__*/ (() => {
  const keys: (keyof Rect)[] = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height",
  ];
  const areBoundsEqual = (a: Rect, b: Rect) =>
    keys.every(key => a[key] === b[key]);

  return returns(element =>
    pipe(
      Observable.create(observer => {
        const listener = pipe(
          EventListener.create<Rect>(
            bindMethod(observer, QueueableLike_enqueue),
          ),
          Disposable.bindTo(observer),
        );
        pipe(element, addMeasureListener(listener));

        const { left, top, width, height, bottom, right, x, y }: DOMRect =
          element.getBoundingClientRect();

        const rect: Rect = {
          left,
          top,
          width,
          height,
          bottom,
          right,
          x,
          y,
        };
        observer[QueueableLike_enqueue](rect);
      }),
      Observable.distinctUntilChanged({ equality: areBoundsEqual }),
    ),
  );
})();

export const intersectionWith: (
  parent?: Document | Element,
) => Function1<Element, EventSourceLike<IntersectionObserverEntry>> =
  /*@__PURE__*/ (() => {
    const intersectionObservers =
      newInstance<Map<Document | Element, IntersectionObserver>>(Map);

    const eventPublishers =
      newInstance<
        Map<
          Document | Element,
          Map<Element, EventPublisherLike<IntersectionObserverEntry>>
        >
      >(Map);

    return (root = document) =>
      child =>
        EventSource.create(listener => {
          const publisher =
            eventPublishers.get(root)?.get(child) ??
            (() => {
              const publisher =
                EventPublisher.createRefCounted<IntersectionObserverEntry>();

              const parentMap =
                eventPublishers.get(root) ??
                (() => {
                  const parentMap =
                    newInstance<
                      Map<
                        Element,
                        EventPublisherLike<IntersectionObserverEntry>
                      >
                    >(Map);
                  eventPublishers.set(root, parentMap);
                  return parentMap;
                })();
              parentMap.set(child, publisher);

              const intersectionObserver =
                intersectionObservers.get(root) ??
                (() => {
                  const cb = (entries: IntersectionObserverEntry[]) => {
                    for (const entry of entries) {
                      const { target } = entry;
                      const listener = eventPublishers.get(root)?.get(target);

                      if (isNone(listener)) {
                        continue;
                      }

                      listener[EventListenerLike_notify](entry);
                    }
                  };

                  const intersectionObserver = newInstance(
                    IntersectionObserver,
                    cb,
                    { root },
                  );
                  intersectionObservers.set(root, intersectionObserver);
                  return intersectionObserver;
                })();
              intersectionObserver.observe(child);

              return pipe(
                publisher,
                Disposable.onDisposed(() => {
                  const intersectionObserver = intersectionObservers.get(root);
                  intersectionObserver?.unobserve(child);

                  const childToPublisherMap = eventPublishers.get(root);
                  childToPublisherMap?.delete(child);

                  if ((childToPublisherMap?.size ?? 0) > 0) {
                    return;
                  }

                  eventPublishers.delete(root);
                  intersectionObserver?.disconnect();
                  intersectionObservers.delete(root);
                }),
              );
            })();

          publisher[EventSourceLike_addEventListener](listener);
        });
  })();
