import { Function1, SideEffect1 } from "../../functions.js";
import {
  DisposableLike,
  ErrorSafeEventListenerLike,
  EventSourceLike,
  StoreLike,
} from "../../types.js";
import { Rect, ScrollValue } from "../web.js";
import Element_addEventHandler from "./Element/__internal__/Element.addEventHandler.js";
import Element_addResizeHandler from "./Element/__internal__/Element.addResizeHandler.js";
import Element_addScrollHandler from "./Element/__internal__/Element.addScrollHandler.js";
import Element_eventSource from "./Element/__internal__/Element.eventSource.js";
import Element_intersectionEventSource from "./Element/__internal__/Element.intersectionEventSource.js";
import Element_measure from "./Element/__internal__/Element.measure.js";
import Element_resizeEventSource from "./Element/__internal__/Element.resizeEventSource.js";
import Element_scrollEventSource from "./Element/__internal__/Element.scrollEventSource.js";

/**
 * @noInheritDoc
 */
export interface ElementModule {
  addEventHandler<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbortSignalEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AnimationEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AbstractWorkerEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioScheduledSourceNodeEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BaseAudioContextEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<AudioWorkletNodeEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<BroadcastChannelEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<DocumentEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Element,
    K extends keyof ElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamTrackEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<EventSourceEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FileReaderEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<FontFaceSetEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<GlobalEventHandlersEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBDatabaseEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLBodyElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLMediaElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<HTMLVideoElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBOpenDBRequestEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBRequestEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<IDBTransactionEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MathMLElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaDevicesEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaKeySessionEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaQueryListEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaRecorderEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaSourceEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MediaStreamEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<MessagePortEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<NotificationEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OfflineAudioContextEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<OffscreenCanvasEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PaymentRequestEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PerformanceEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PermissionStatusEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<PictureInPictureWindowEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDTMFSenderEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDataChannelEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCDtlsTransportEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCIceTransportEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCPeerConnectionEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RTCSctpTransportEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<RemotePlaybackEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGSVGElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ScreenOrientationEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerContainerEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ServiceWorkerRegistrationEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<ShadowRootEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SourceBufferListEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SpeechSynthesisUtteranceEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<SVGElementEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackCueEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<TextTrackListEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<VisualViewportEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<WebSocketEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WindowEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    eventHandler: SideEffect1<WorkerEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;
  addEventHandler<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    eventHandler: SideEffect1<XMLHttpRequestEventTargetEventMap[K]>,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, DisposableLike>;

  addResizeHandler<TElement extends Element>(
    handler: SideEffect1<ResizeObserverEntry>,
    options?: ResizeObserverOptions,
  ): Function1<TElement, DisposableLike>;

  addScrollHandler<TElement extends HTMLElement>(
    handler: SideEffect1<ScrollValue>,
  ): Function1<TElement, DisposableLike>;

  eventSource<
    TEventTarget extends AbortSignal,
    K extends keyof AbortSignalEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<AbortSignalEventMap[K]>>;
  eventSource<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<AnimationEventMap[K]>>;
  eventSource<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<AbstractWorkerEventMap[K]>>;
  eventSource<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<AudioScheduledSourceNodeEventMap[K]>
  >;
  eventSource<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<BaseAudioContextEventMap[K]>>;
  eventSource<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<AudioWorkletNodeEventMap[K]>>;
  eventSource<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<BroadcastChannelEventMap[K]>>;
  eventSource<TEventTarget extends Document, K extends keyof DocumentEventMap>(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<DocumentEventMap[K]>>;
  eventSource<TEventTarget extends Element, K extends keyof ElementEventMap>(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<ElementEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaStreamTrackEventMap[K]>>;
  eventSource<
    TEventTarget extends EventSourceLike,
    K extends keyof EventSourceEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<EventSourceEventMap[K]>>;
  eventSource<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<FileReaderEventMap[K]>>;
  eventSource<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<FontFaceSetEventMap[K]>>;
  eventSource<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<GlobalEventHandlersEventMap[K]>>;
  eventSource<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<IDBDatabaseEventMap[K]>>;
  eventSource<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<HTMLBodyElementEventMap[K]>>;
  eventSource<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<HTMLElementEventMap[K]>>;
  eventSource<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<HTMLMediaElementEventMap[K]>>;
  eventSource<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<HTMLVideoElementEventMap[K]>>;
  eventSource<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<IDBOpenDBRequestEventMap[K]>>;
  eventSource<
    TEventTarget extends IDBRequest<TDBObject>,
    K extends keyof IDBRequestEventMap,
    TDBObject = any,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<IDBRequestEventMap[K]>>;
  eventSource<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<IDBTransactionEventMap[K]>>;
  eventSource<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MathMLElementEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaDevicesEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaKeySessionEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaQueryListEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaRecorderEventMap[K]>>;
  eventSource<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaSourceEventMap>>;
  eventSource<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MediaStreamEventMap[K]>>;
  eventSource<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<MessagePortEventMap[K]>>;
  eventSource<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<NotificationEventMap[K]>>;
  eventSource<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<OfflineAudioContextEventMap[K]>>;
  eventSource<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<OffscreenCanvasEventMap[K]>>;
  eventSource<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<PaymentRequestEventMap[K]>>;
  eventSource<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<PerformanceEventMap[K]>>;
  eventSource<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<PermissionStatusEventMap[K]>>;
  eventSource<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      PictureInPictureWindowEventMap[K]
    >,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<PictureInPictureWindowEventMap[K]>
  >;
  eventSource<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCDTMFSenderEventMap[K]>>;
  eventSource<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCDataChannelEventMap[K]>>;
  eventSource<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCDtlsTransportEventMap[K]>>;
  eventSource<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCIceTransportEventMap[K]>>;
  eventSource<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCPeerConnectionEventMap[K]>>;
  eventSource<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RTCSctpTransportEventMap[K]>>;
  eventSource<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<RemotePlaybackEventMap[K]>>;
  eventSource<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<SVGSVGElementEventMap[K]>>;
  eventSource<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<ScreenOrientationEventMap[K]>>;
  eventSource<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<ServiceWorkerEventMap[K]>>;
  eventSource<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      ServiceWorkerContainerEventMap[K]
    >,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<ServiceWorkerContainerEventMap[K]>
  >;
  eventSource<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      ServiceWorkerRegistrationEventMap[K]
    >,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<ServiceWorkerRegistrationEventMap[K]>
  >;
  eventSource<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<ShadowRootEventMap[K]>>;
  eventSource<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<SourceBufferEventMap[K]>>;
  eventSource<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<SourceBufferListEventMap[K]>>;
  eventSource<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<SpeechSynthesisEventMap[K]>>;
  eventSource<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
  >(
    eventName: K,
    eventListener: ErrorSafeEventListenerLike<
      SpeechSynthesisUtteranceEventMap[K]
    >,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<SpeechSynthesisUtteranceEventMap[K]>
  >;
  eventSource<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<SVGElementEventMap[K]>>;
  eventSource<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<TextTrackEventMap[K]>>;
  eventSource<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<TextTrackCueEventMap[K]>>;
  eventSource<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<TextTrackListEventMap[K]>>;
  eventSource<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<VisualViewportEventMap[K]>>;
  eventSource<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<WebSocketEventMap[K]>>;
  eventSource<TEventTarget extends Window, K extends keyof WindowEventMap>(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<WindowEventMap[K]>>;
  eventSource<TEventTarget extends Worker, K extends keyof WorkerEventMap>(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<TEventTarget, EventSourceLike<WorkerEventMap[K]>>;
  eventSource<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
  >(
    eventName: K,
    options?: { passive?: boolean; capture?: boolean },
  ): Function1<
    TEventTarget,
    EventSourceLike<XMLHttpRequestEventTargetEventMap[K]>
  >;

  intersectionEventSource(
    parent?: Document | Element,
  ): Function1<Element, EventSourceLike<IntersectionObserverEntry>>;

  measure<TElement extends HTMLElement | SVGElement>(): Function1<
    TElement,
    StoreLike<Rect> & DisposableLike
  >;

  resizeEventSource<TElement extends Element>(
    options?: ResizeObserverOptions,
  ): Function1<TElement, EventSourceLike<ResizeObserverEntry>>;

  scrollEventSource<TElement extends HTMLElement>(): Function1<
    TElement,
    EventSourceLike<ScrollValue>
  >;
}

export type Signature = ElementModule;

export const addEventHandler: Signature["addEventHandler"] =
  Element_addEventHandler;
export const addResizeHandler: Signature["addResizeHandler"] =
  Element_addResizeHandler;
export const addScrollHandler: Signature["addScrollHandler"] =
  Element_addScrollHandler;
export const eventSource: Signature["eventSource"] =
  Element_eventSource as Signature["eventSource"];
export const intersectionEventSource: Signature["intersectionEventSource"] =
  Element_intersectionEventSource;
export const measure: Signature["measure"] = Element_measure;
export const resizeEventSource: Signature["resizeEventSource"] =
  Element_resizeEventSource;
export const scrollEventSource: Signature["scrollEventSource"] =
  Element_scrollEventSource;
