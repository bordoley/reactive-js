import { __WindowLocationStreamLike_canGoBack as WindowLocationStreamLike_canGoBack, __WindowLocationStreamLike_goBack as WindowLocationStreamLike_goBack, __WindowLocationStreamLike_replace as WindowLocationStreamLike_replace } from "../__internal__/symbols.js";
import { Function1, SideEffect1, Updater } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { StreamLike, StreamableLike } from "../streaming.js";
import { EventListenerLike } from "../util.js";
export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_replace, };
/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
    readonly title: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    readonly [WindowLocationStreamLike_canGoBack]: ObservableLike<boolean>;
    [WindowLocationStreamLike_goBack](): void;
    [WindowLocationStreamLike_replace](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): boolean;
}
export declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
interface AddEventListener {
    addEventListener<TEventTarget extends AbortSignal, K extends keyof AbortSignalEventMap>(eventName: K, eventListener: EventListenerLike<AbortSignalEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Animation, K extends keyof AnimationEventMap>(eventName: K, eventListener: EventListenerLike<AnimationEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends AbstractWorker, K extends keyof AbstractWorkerEventMap>(eventName: K, eventListener: EventListenerLike<AbstractWorkerEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends AudioScheduledSourceNode, K extends keyof AudioScheduledSourceNodeEventMap>(eventName: K, eventListener: EventListenerLike<AudioScheduledSourceNodeEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends BaseAudioContext, K extends keyof BaseAudioContextEventMap>(eventName: K, eventListener: EventListenerLike<BaseAudioContextEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends AudioWorkletNode, K extends keyof AudioWorkletNodeEventMap>(eventName: K, eventListener: EventListenerLike<AudioWorkletNodeEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends BroadcastChannel, K extends keyof BroadcastChannelEventMap>(eventName: K, eventListener: EventListenerLike<BroadcastChannelEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Document, K extends keyof DocumentEventMap>(eventName: K, eventListener: EventListenerLike<DocumentEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaStreamTrack, K extends keyof MediaStreamTrackEventMap>(eventName: K, eventListener: EventListenerLike<MediaStreamTrackEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends EventSource, K extends keyof EventSourceEventMap>(eventName: K, eventListener: EventListenerLike<EventSourceEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends FileReader, K extends keyof FileReaderEventMap>(eventName: K, eventListener: EventListenerLike<FileReaderEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends FontFaceSet, K extends keyof FontFaceSetEventMap>(eventName: K, eventListener: EventListenerLike<FontFaceSetEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends GlobalEventHandlers, K extends keyof GlobalEventHandlersEventMap>(eventName: K, eventListener: EventListenerLike<GlobalEventHandlersEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends IDBDatabase, K extends keyof IDBDatabaseEventMap>(eventName: K, eventListener: EventListenerLike<IDBDatabaseEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends HTMLBodyElement, K extends keyof HTMLBodyElementEventMap>(eventName: K, eventListener: EventListenerLike<HTMLBodyElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends HTMLElement, K extends keyof HTMLElementEventMap>(eventName: K, eventListener: EventListenerLike<HTMLElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends HTMLMediaElement, K extends keyof HTMLMediaElementEventMap>(eventName: K, eventListener: EventListenerLike<HTMLMediaElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends HTMLVideoElement, K extends keyof HTMLVideoElementEventMap>(eventName: K, eventListener: EventListenerLike<HTMLVideoElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends IDBOpenDBRequest, K extends keyof IDBOpenDBRequestEventMap>(eventName: K, eventListener: EventListenerLike<IDBOpenDBRequestEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends IDBRequest<TDBObject>, K extends keyof IDBRequestEventMap, TDBObject = any>(eventName: K, eventListener: EventListenerLike<IDBRequestEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends IDBTransaction, K extends keyof IDBTransactionEventMap>(eventName: K, eventListener: EventListenerLike<IDBTransactionEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MathMLElement, K extends keyof MathMLElementEventMap>(eventName: K, eventListener: EventListenerLike<MathMLElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaDevices, K extends keyof MediaDevicesEventMap>(eventName: K, eventListener: EventListenerLike<MediaDevicesEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaKeySession, K extends keyof MediaKeySessionEventMap>(eventName: K, eventListener: EventListenerLike<MediaKeySessionEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaQueryList, K extends keyof MediaQueryListEventMap>(eventName: K, eventListener: EventListenerLike<MediaQueryListEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaRecorder, K extends keyof MediaRecorderEventMap>(eventName: K, eventListener: EventListenerLike<MediaRecorderEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaSource | MediaStream, K extends keyof MediaSourceEventMap>(eventName: K, eventListener: EventListenerLike<MediaSourceEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MediaStream, K extends keyof MediaStreamEventMap>(eventName: K, eventListener: EventListenerLike<MediaStreamEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends MessagePort, K extends keyof MessagePortEventMap>(eventName: K, eventListener: EventListenerLike<MessagePortEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Notification, K extends keyof NotificationEventMap>(eventName: K, eventListener: EventListenerLike<NotificationEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends OfflineAudioContext, K extends keyof OfflineAudioContextEventMap>(eventName: K, eventListener: EventListenerLike<OfflineAudioContextEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends OffscreenCanvas, K extends keyof OffscreenCanvasEventMap>(eventName: K, eventListener: EventListenerLike<OffscreenCanvasEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends PaymentRequest, K extends keyof PaymentRequestEventMap>(eventName: K, eventListener: EventListenerLike<PaymentRequestEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Performance, K extends keyof PerformanceEventMap>(eventName: K, eventListener: EventListenerLike<PerformanceEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends PermissionStatus, K extends keyof PermissionStatusEventMap>(eventName: K, eventListener: EventListenerLike<PermissionStatusEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends PictureInPictureWindow, K extends keyof PictureInPictureWindowEventMap>(eventName: K, eventListener: EventListenerLike<PictureInPictureWindowEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCDTMFSender, K extends keyof RTCDTMFSenderEventMap>(eventName: K, eventListener: EventListenerLike<RTCDTMFSenderEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCDataChannel, K extends keyof RTCDataChannelEventMap>(eventName: K, eventListener: EventListenerLike<RTCDataChannelEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCDtlsTransport, K extends keyof RTCDtlsTransportEventMap>(eventName: K, eventListener: EventListenerLike<RTCDtlsTransportEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCIceTransport, K extends keyof RTCIceTransportEventMap>(eventName: K, eventListener: EventListenerLike<RTCIceTransportEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCPeerConnection, K extends keyof RTCPeerConnectionEventMap>(eventName: K, eventListener: EventListenerLike<RTCPeerConnectionEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RTCSctpTransport, K extends keyof RTCSctpTransportEventMap>(eventName: K, eventListener: EventListenerLike<RTCSctpTransportEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends RemotePlayback, K extends keyof RemotePlaybackEventMap>(eventName: K, eventListener: EventListenerLike<RemotePlaybackEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SVGSVGElement, K extends keyof SVGSVGElementEventMap>(eventName: K, eventListener: EventListenerLike<SVGSVGElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends ScreenOrientation, K extends keyof ScreenOrientationEventMap>(eventName: K, eventListener: EventListenerLike<ScreenOrientationEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends ServiceWorker, K extends keyof ServiceWorkerEventMap>(eventName: K, eventListener: EventListenerLike<ServiceWorkerEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends ServiceWorkerContainer, K extends keyof ServiceWorkerContainerEventMap>(eventName: K, eventListener: EventListenerLike<ServiceWorkerContainerEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends ServiceWorkerRegistration, K extends keyof ServiceWorkerRegistrationEventMap>(eventName: K, eventListener: EventListenerLike<ServiceWorkerRegistrationEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends ShadowRoot, K extends keyof ShadowRootEventMap>(eventName: K, eventListener: EventListenerLike<ShadowRootEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SourceBuffer, K extends keyof SourceBufferEventMap>(eventName: K, eventListener: EventListenerLike<SourceBufferEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SourceBufferList, K extends keyof SourceBufferListEventMap>(eventName: K, eventListener: EventListenerLike<SourceBufferListEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SpeechSynthesis, K extends keyof SpeechSynthesisEventMap>(eventName: K, eventListener: EventListenerLike<SpeechSynthesisEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SpeechSynthesisUtterance, K extends keyof SpeechSynthesisUtteranceEventMap>(eventName: K, eventListener: EventListenerLike<SpeechSynthesisUtteranceEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends SVGElement, K extends keyof SVGElementEventMap>(eventName: K, eventListener: EventListenerLike<SVGElementEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends TextTrack, K extends keyof TextTrackEventMap>(eventName: K, eventListener: EventListenerLike<TextTrackEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends TextTrackCue, K extends keyof TextTrackCueEventMap>(eventName: K, eventListener: EventListenerLike<TextTrackCueEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends TextTrackList, K extends keyof TextTrackListEventMap>(eventName: K, eventListener: EventListenerLike<TextTrackListEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends VisualViewport, K extends keyof VisualViewportEventMap>(eventName: K, eventListener: EventListenerLike<VisualViewportEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends WebSocket, K extends keyof WebSocketEventMap>(eventName: K, eventListener: EventListenerLike<WebSocketEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Window, K extends keyof WindowEventMap, T>(eventName: K, eventListener: EventListenerLike<WindowEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends Worker, K extends keyof WorkerEventMap, T>(eventName: K, eventListener: EventListenerLike<WorkerEventMap[K]>): SideEffect1<TEventTarget>;
    addEventListener<TEventTarget extends XMLHttpRequestEventTarget, K extends keyof XMLHttpRequestEventTargetEventMap>(eventName: K, eventListener: EventListenerLike<XMLHttpRequestEventTargetEventMap[K]>): SideEffect1<TEventTarget>;
}
export declare const addEventListener: AddEventListener["addEventListener"];
interface ObserveEvent {
    observeEvent<TEventTarget extends AbortSignal, K extends keyof AbortSignalEventMap, T>(eventName: K, selector: Function1<AbortSignalEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Animation, K extends keyof AnimationEventMap, T>(eventName: K, selector: Function1<AnimationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends AbstractWorker, K extends keyof AbstractWorkerEventMap, T>(eventName: K, selector: Function1<AbstractWorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends AudioScheduledSourceNode, K extends keyof AudioScheduledSourceNodeEventMap, T>(eventName: K, selector: Function1<AudioScheduledSourceNodeEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends BaseAudioContext, K extends keyof BaseAudioContextEventMap, T>(eventName: K, selector: Function1<BaseAudioContextEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends AudioWorkletNode, K extends keyof AudioWorkletNodeEventMap, T>(eventName: K, selector: Function1<AudioWorkletNodeEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends BroadcastChannel, K extends keyof BroadcastChannelEventMap, T>(eventName: K, selector: Function1<BroadcastChannelEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Document, K extends keyof DocumentEventMap, T>(eventName: K, selector: Function1<DocumentEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaStreamTrack, K extends keyof MediaStreamTrackEventMap, T>(eventName: K, selector: Function1<MediaStreamTrackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends EventSource, K extends keyof EventSourceEventMap, T>(eventName: K, selector: Function1<EventSourceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends FileReader, K extends keyof FileReaderEventMap, T>(eventName: K, selector: Function1<FileReaderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends FontFaceSet, K extends keyof FontFaceSetEventMap, T>(eventName: K, selector: Function1<FontFaceSetEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends GlobalEventHandlers, K extends keyof GlobalEventHandlersEventMap, T>(eventName: K, selector: Function1<GlobalEventHandlersEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends IDBDatabase, K extends keyof IDBDatabaseEventMap, T>(eventName: K, selector: Function1<IDBDatabaseEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends HTMLBodyElement, K extends keyof HTMLBodyElementEventMap, T>(eventName: K, selector: Function1<HTMLBodyElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends HTMLElement, K extends keyof HTMLElementEventMap, T>(eventName: K, selector: Function1<HTMLElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends HTMLMediaElement, K extends keyof HTMLMediaElementEventMap, T>(eventName: K, selector: Function1<HTMLMediaElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends HTMLVideoElement, K extends keyof HTMLVideoElementEventMap, T>(eventName: K, selector: Function1<HTMLVideoElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends IDBOpenDBRequest, K extends keyof IDBOpenDBRequestEventMap, T>(eventName: K, selector: Function1<IDBOpenDBRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends IDBRequest<TDBObject>, K extends keyof IDBRequestEventMap, T, TDBObject = any>(eventName: K, selector: Function1<IDBRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends IDBTransaction, K extends keyof IDBTransactionEventMap, T>(eventName: K, selector: Function1<IDBTransactionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MathMLElement, K extends keyof MathMLElementEventMap, T>(eventName: K, selector: Function1<MathMLElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaDevices, K extends keyof MediaDevicesEventMap, T>(eventName: K, selector: Function1<MediaDevicesEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaKeySession, K extends keyof MediaKeySessionEventMap, T>(eventName: K, selector: Function1<MediaKeySessionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaQueryList, K extends keyof MediaQueryListEventMap, T>(eventName: K, selector: Function1<MediaQueryListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaRecorder, K extends keyof MediaRecorderEventMap, T>(eventName: K, selector: Function1<MediaRecorderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaSource | MediaStream, K extends keyof MediaSourceEventMap, T>(eventName: K, selector: Function1<MediaSourceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MediaStream, K extends keyof MediaStreamEventMap, T>(eventName: K, selector: Function1<MediaStreamEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends MessagePort, K extends keyof MessagePortEventMap, T>(eventName: K, selector: Function1<MessagePortEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Notification, K extends keyof NotificationEventMap, T>(eventName: K, selector: Function1<NotificationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends OfflineAudioContext, K extends keyof OfflineAudioContextEventMap, T>(eventName: K, selector: Function1<OfflineAudioContextEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends OffscreenCanvas, K extends keyof OffscreenCanvasEventMap, T>(eventName: K, selector: Function1<OffscreenCanvasEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends PaymentRequest, K extends keyof PaymentRequestEventMap, T>(eventName: K, selector: Function1<PaymentRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Performance, K extends keyof PerformanceEventMap, T>(eventName: K, selector: Function1<PerformanceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends PermissionStatus, K extends keyof PermissionStatusEventMap, T>(eventName: K, selector: Function1<PermissionStatusEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends PictureInPictureWindow, K extends keyof PictureInPictureWindowEventMap, T>(eventName: K, selector: Function1<PictureInPictureWindowEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCDTMFSender, K extends keyof RTCDTMFSenderEventMap, T>(eventName: K, selector: Function1<RTCDTMFSenderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCDataChannel, K extends keyof RTCDataChannelEventMap, T>(eventName: K, selector: Function1<RTCDataChannelEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCDtlsTransport, K extends keyof RTCDtlsTransportEventMap, T>(eventName: K, selector: Function1<RTCDtlsTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCIceTransport, K extends keyof RTCIceTransportEventMap, T>(eventName: K, selector: Function1<RTCIceTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCPeerConnection, K extends keyof RTCPeerConnectionEventMap, T>(eventName: K, selector: Function1<RTCPeerConnectionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RTCSctpTransport, K extends keyof RTCSctpTransportEventMap, T>(eventName: K, selector: Function1<RTCSctpTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends RemotePlayback, K extends keyof RemotePlaybackEventMap, T>(eventName: K, selector: Function1<RemotePlaybackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SVGSVGElement, K extends keyof SVGSVGElementEventMap, T>(eventName: K, selector: Function1<SVGSVGElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends ScreenOrientation, K extends keyof ScreenOrientationEventMap, T>(eventName: K, selector: Function1<ScreenOrientationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends ServiceWorker, K extends keyof ServiceWorkerEventMap, T>(eventName: K, selector: Function1<ServiceWorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends ServiceWorkerContainer, K extends keyof ServiceWorkerContainerEventMap, T>(eventName: K, selector: Function1<ServiceWorkerContainerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends ServiceWorkerRegistration, K extends keyof ServiceWorkerRegistrationEventMap, T>(eventName: K, selector: Function1<ServiceWorkerRegistrationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends ShadowRoot, K extends keyof ShadowRootEventMap, T>(eventName: K, selector: Function1<ShadowRootEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SourceBuffer, K extends keyof SourceBufferEventMap, T>(eventName: K, selector: Function1<SourceBufferEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SourceBufferList, K extends keyof SourceBufferListEventMap, T>(eventName: K, selector: Function1<SourceBufferListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SpeechSynthesis, K extends keyof SpeechSynthesisEventMap, T>(eventName: K, selector: Function1<SpeechSynthesisEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SpeechSynthesisUtterance, K extends keyof SpeechSynthesisUtteranceEventMap, T>(eventName: K, selector: Function1<SpeechSynthesisUtteranceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends SVGElement, K extends keyof SVGElementEventMap, T>(eventName: K, selector: Function1<SVGElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends TextTrack, K extends keyof TextTrackEventMap, T>(eventName: K, selector: Function1<TextTrackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends TextTrackCue, K extends keyof TextTrackCueEventMap, T>(eventName: K, selector: Function1<TextTrackCueEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends TextTrackList, K extends keyof TextTrackListEventMap, T>(eventName: K, selector: Function1<TextTrackListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends VisualViewport, K extends keyof VisualViewportEventMap, T>(eventName: K, selector: Function1<VisualViewportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends WebSocket, K extends keyof WebSocketEventMap, T>(eventName: K, selector: Function1<WebSocketEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Window, K extends keyof WindowEventMap, T>(eventName: K, selector: Function1<WindowEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends Worker, K extends keyof WorkerEventMap, T>(eventName: K, selector: Function1<WorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    observeEvent<TEventTarget extends XMLHttpRequestEventTarget, K extends keyof XMLHttpRequestEventTargetEventMap, T>(eventName: K, selector: Function1<XMLHttpRequestEventTargetEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
}
export declare const observeEvent: ObserveEvent["observeEvent"];
export declare const windowLocation: StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike>;
export type CSSStyleKey = keyof Omit<CSSStyleDeclaration, "item" | "length" | "parentRule" | "getPropertyPriority" | "getPropertyValue" | "removeProperty" | "setProperty" | number | typeof Symbol.iterator>;
