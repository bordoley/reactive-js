import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, WindowLocationStreamLike_replace } from "../__internal__/symbols.js";
import { Function1, Updater } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { StreamLike, StreamableLike } from "../streaming.js";
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
    addEventListener<TEventTarget extends AbortSignal, K extends keyof AbortSignalEventMap, T>(eventName: K, selector: Function1<AbortSignalEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Animation, K extends keyof AnimationEventMap, T>(eventName: K, selector: Function1<AnimationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends AbstractWorker, K extends keyof AbstractWorkerEventMap, T>(eventName: K, selector: Function1<AbstractWorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends AudioScheduledSourceNode, K extends keyof AudioScheduledSourceNodeEventMap, T>(eventName: K, selector: Function1<AudioScheduledSourceNodeEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends BaseAudioContext, K extends keyof BaseAudioContextEventMap, T>(eventName: K, selector: Function1<BaseAudioContextEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends AudioWorkletNode, K extends keyof AudioWorkletNodeEventMap, T>(eventName: K, selector: Function1<AudioWorkletNodeEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends BroadcastChannel, K extends keyof BroadcastChannelEventMap, T>(eventName: K, selector: Function1<BroadcastChannelEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Document, K extends keyof DocumentEventMap, T>(eventName: K, selector: Function1<DocumentEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaStreamTrack, K extends keyof MediaStreamTrackEventMap, T>(eventName: K, selector: Function1<MediaStreamTrackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends EventSource, K extends keyof EventSourceEventMap, T>(eventName: K, selector: Function1<EventSourceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends FileReader, K extends keyof FileReaderEventMap, T>(eventName: K, selector: Function1<FileReaderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends FontFaceSet, K extends keyof FontFaceSetEventMap, T>(eventName: K, selector: Function1<FontFaceSetEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends GlobalEventHandlers, K extends keyof GlobalEventHandlersEventMap, T>(eventName: K, selector: Function1<GlobalEventHandlersEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends IDBDatabase, K extends keyof IDBDatabaseEventMap, T>(eventName: K, selector: Function1<IDBDatabaseEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends HTMLBodyElement, K extends keyof HTMLBodyElementEventMap, T>(eventName: K, selector: Function1<HTMLBodyElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends HTMLElement, K extends keyof HTMLElementEventMap, T>(eventName: K, selector: Function1<HTMLElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends HTMLMediaElement, K extends keyof HTMLMediaElementEventMap, T>(eventName: K, selector: Function1<HTMLMediaElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends HTMLVideoElement, K extends keyof HTMLVideoElementEventMap, T>(eventName: K, selector: Function1<HTMLVideoElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends IDBOpenDBRequest, K extends keyof IDBOpenDBRequestEventMap, T>(eventName: K, selector: Function1<IDBOpenDBRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends IDBRequest<T>, K extends keyof IDBRequestEventMap, T>(eventName: K, selector: Function1<IDBRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends IDBTransaction, K extends keyof IDBTransactionEventMap, T>(eventName: K, selector: Function1<IDBTransactionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MathMLElement, K extends keyof MathMLElementEventMap, T>(eventName: K, selector: Function1<MathMLElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaDevices, K extends keyof MediaDevicesEventMap, T>(eventName: K, selector: Function1<MediaDevicesEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaKeySession, K extends keyof MediaKeySessionEventMap, T>(eventName: K, selector: Function1<MediaKeySessionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaQueryList, K extends keyof MediaQueryListEventMap, T>(eventName: K, selector: Function1<MediaQueryListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaRecorder, K extends keyof MediaRecorderEventMap, T>(eventName: K, selector: Function1<MediaRecorderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaSource | MediaStream, K extends keyof MediaSourceEventMap, T>(eventName: K, selector: Function1<MediaSourceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MediaStream, K extends keyof MediaStreamEventMap, T>(eventName: K, selector: Function1<MediaStreamEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends MessagePort, K extends keyof MessagePortEventMap, T>(eventName: K, selector: Function1<MessagePortEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Notification, K extends keyof NotificationEventMap, T>(eventName: K, selector: Function1<NotificationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends OfflineAudioContext, K extends keyof OfflineAudioContextEventMap, T>(eventName: K, selector: Function1<OfflineAudioContextEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends OffscreenCanvas, K extends keyof OffscreenCanvasEventMap, T>(eventName: K, selector: Function1<OffscreenCanvasEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends PaymentRequest, K extends keyof PaymentRequestEventMap, T>(eventName: K, selector: Function1<PaymentRequestEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Performance, K extends keyof PerformanceEventMap, T>(eventName: K, selector: Function1<PerformanceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends PermissionStatus, K extends keyof PermissionStatusEventMap, T>(eventName: K, selector: Function1<PermissionStatusEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends PictureInPictureWindow, K extends keyof PictureInPictureWindowEventMap, T>(eventName: K, selector: Function1<PictureInPictureWindowEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCDTMFSender, K extends keyof RTCDTMFSenderEventMap, T>(eventName: K, selector: Function1<RTCDTMFSenderEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCDataChannel, K extends keyof RTCDataChannelEventMap, T>(eventName: K, selector: Function1<RTCDataChannelEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCDtlsTransport, K extends keyof RTCDtlsTransportEventMap, T>(eventName: K, selector: Function1<RTCDtlsTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCIceTransport, K extends keyof RTCIceTransportEventMap, T>(eventName: K, selector: Function1<RTCIceTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCPeerConnection, K extends keyof RTCPeerConnectionEventMap, T>(eventName: K, selector: Function1<RTCPeerConnectionEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RTCSctpTransport, K extends keyof RTCSctpTransportEventMap, T>(eventName: K, selector: Function1<RTCSctpTransportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends RemotePlayback, K extends keyof RemotePlaybackEventMap, T>(eventName: K, selector: Function1<RemotePlaybackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SVGSVGElement, K extends keyof SVGSVGElementEventMap, T>(eventName: K, selector: Function1<SVGSVGElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends ScreenOrientation, K extends keyof ScreenOrientationEventMap, T>(eventName: K, selector: Function1<ScreenOrientationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends ServiceWorker, K extends keyof ServiceWorkerEventMap, T>(eventName: K, selector: Function1<ServiceWorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends ServiceWorkerContainer, K extends keyof ServiceWorkerContainerEventMap, T>(eventName: K, selector: Function1<ServiceWorkerContainerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends ServiceWorkerRegistration, K extends keyof ServiceWorkerRegistrationEventMap, T>(eventName: K, selector: Function1<ServiceWorkerRegistrationEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends ShadowRoot, K extends keyof ShadowRootEventMap, T>(eventName: K, selector: Function1<ShadowRootEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SourceBuffer, K extends keyof SourceBufferEventMap, T>(eventName: K, selector: Function1<SourceBufferEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SourceBufferList, K extends keyof SourceBufferListEventMap, T>(eventName: K, selector: Function1<SourceBufferListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SpeechSynthesis, K extends keyof SpeechSynthesisEventMap, T>(eventName: K, selector: Function1<SpeechSynthesisEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SpeechSynthesisUtterance, K extends keyof SpeechSynthesisUtteranceEventMap, T>(eventName: K, selector: Function1<SpeechSynthesisUtteranceEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends SVGElement, K extends keyof SVGElementEventMap, T>(eventName: K, selector: Function1<SVGElementEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends TextTrack, K extends keyof TextTrackEventMap, T>(eventName: K, selector: Function1<TextTrackEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends TextTrackCue, K extends keyof TextTrackCueEventMap, T>(eventName: K, selector: Function1<TextTrackCueEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends TextTrackList, K extends keyof TextTrackListEventMap, T>(eventName: K, selector: Function1<TextTrackListEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends VisualViewport, K extends keyof VisualViewportEventMap, T>(eventName: K, selector: Function1<VisualViewportEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends WebSocket, K extends keyof WebSocketEventMap, T>(eventName: K, selector: Function1<WebSocketEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Window, K extends keyof WindowEventMap, T>(eventName: K, selector: Function1<WindowEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends Worker, K extends keyof WorkerEventMap, T>(eventName: K, selector: Function1<WorkerEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
    addEventListener<TEventTarget extends XMLHttpRequestEventTarget, K extends keyof XMLHttpRequestEventTargetEventMap, T>(eventName: K, selector: Function1<XMLHttpRequestEventTargetEventMap[K], T>): Function1<TEventTarget, ObservableLike<T>>;
}
export declare const addEventListener: AddEventListener["addEventListener"];
export declare const windowLocation: StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike>;
export type CSSStyleKey = keyof Omit<CSSStyleDeclaration, "item" | "length" | "parentRule" | "getPropertyPriority" | "getPropertyValue" | "removeProperty" | "setProperty" | number | typeof Symbol.iterator>;
