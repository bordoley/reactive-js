import { ReadonlyObjectMapLike } from "./collections.js";
import { MulticastObservableLike, StoreLike } from "./computations.js";
import { SideEffect1, Updater } from "./functions.js";
/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
    readonly title: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
}
export declare const WindowLocationLike_push: unique symbol;
export declare const WindowLocationLike_goBack: unique symbol;
export declare const WindowLocationLike_canGoBack: unique symbol;
export declare const WindowLocationLike_replace: unique symbol;
/**
 * @noInheritDoc
 */
export interface WindowLocationLike extends MulticastObservableLike<WindowLocationURI> {
    readonly [WindowLocationLike_canGoBack]: StoreLike<boolean>;
    [WindowLocationLike_goBack](): void;
    [WindowLocationLike_push](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
    [WindowLocationLike_replace](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
}
/**
 * @noInheritDoc
 */
export interface CSSStyleMapLike extends ReadonlyObjectMapLike<keyof Omit<CSSStyleDeclaration, "item" | "length" | "parentRule" | "getPropertyPriority" | "getPropertyValue" | "removeProperty" | "setProperty" | number | typeof Symbol.iterator>, string> {
}
/**
 * @noInheritDoc
 */
export interface ScrollState {
    readonly current: number;
    readonly progress: number;
    readonly scrollLength: number;
    readonly velocity: number;
    readonly acceleration: number;
}
/**
 * @noInheritDoc
 */
export interface ScrollValue {
    readonly time: number;
    readonly x: ScrollState;
    readonly y: ScrollState;
    readonly done: boolean;
}
/**
 * @noInheritDoc
 */
export interface Rect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}
export type DOMEventTarget = {
    addEventListener<This, TEventName extends EventKeysOf<This>>(this: This, eventName: TEventName, listener: SideEffect1<EventMapOf<This>[TEventName]>, options?: unknown): void;
    removeEventListener<This, TEventName extends EventKeysOf<This>>(this: This, eventName: TEventName, listener: SideEffect1<EventMapOf<This>[TEventName]>): void;
};
export type EventKeysOf<TEventTarget> = string & keyof EventMapOf<TEventTarget>;
export type EventMapOf<TEventTarget> = TEventTarget extends Animation ? AnimationEventMap : TEventTarget extends AudioScheduledSourceNode ? AudioScheduledSourceNodeEventMap : TEventTarget extends AudioWorkletNode ? AudioWorkletNodeEventMap : TEventTarget extends BaseAudioContext ? BaseAudioContextEventMap : TEventTarget extends BroadcastChannel ? BroadcastChannelEventMap : TEventTarget extends Document ? DocumentEventMap : TEventTarget extends EventSource ? EventSourceEventMap : TEventTarget extends FileReader ? FileReaderEventMap : TEventTarget extends Window ? WindowEventMap : TEventTarget extends FontFaceSet ? FontFaceSetEventMap : TEventTarget extends HTMLMediaElement ? HTMLMediaElementEventMap : TEventTarget extends HTMLVideoElement ? HTMLVideoElementEventMap : TEventTarget extends HTMLBodyElement ? HTMLBodyElementEventMap : TEventTarget extends HTMLElement ? HTMLElementEventMap : TEventTarget extends GlobalEventHandlers ? GlobalEventHandlersEventMap : TEventTarget extends IDBDatabase ? IDBDatabaseEventMap : TEventTarget extends IDBOpenDBRequest ? IDBOpenDBRequestEventMap : TEventTarget extends IDBRequest ? IDBRequestEventMap : TEventTarget extends IDBTransaction ? IDBTransactionEventMap : TEventTarget extends MathMLElement ? MathMLElementEventMap : TEventTarget extends MediaDevices ? MediaDevicesEventMap : TEventTarget extends MediaKeySession ? MediaKeySessionEventMap : TEventTarget extends MediaQueryList ? MediaQueryListEventMap : TEventTarget extends MediaRecorder ? MediaRecorderEventMap : TEventTarget extends MediaSource ? MediaSourceEventMap : TEventTarget extends MediaStream ? MediaStreamEventMap : TEventTarget extends MediaStreamTrack ? MediaStreamTrackEventMap : TEventTarget extends MessagePort ? MessagePortEventMap : TEventTarget extends Notification ? NotificationEventMap : TEventTarget extends OfflineAudioContext ? OfflineAudioContextEventMap : TEventTarget extends OffscreenCanvas ? OffscreenCanvasEventMap : TEventTarget extends PaymentRequest ? PaymentRequestEventMap : TEventTarget extends Performance ? PerformanceEventMap : TEventTarget extends PermissionStatus ? PermissionStatusEventMap : TEventTarget extends PictureInPictureWindow ? PictureInPictureWindowEventMap : TEventTarget extends RTCDTMFSender ? RTCDTMFSenderEventMap : TEventTarget extends RTCDataChannel ? RTCDataChannelEventMap : TEventTarget extends RTCDtlsTransport ? RTCDtlsTransportEventMap : TEventTarget extends RTCIceTransport ? RTCIceTransportEventMap : TEventTarget extends RTCPeerConnection ? RTCPeerConnectionEventMap : TEventTarget extends RTCSctpTransport ? RTCSctpTransportEventMap : TEventTarget extends RemotePlayback ? RemotePlaybackEventMap : TEventTarget extends SVGElement ? SVGElementEventMap : TEventTarget extends SVGSVGElement ? SVGSVGElementEventMap : TEventTarget extends ScreenOrientation ? ScreenOrientationEventMap : TEventTarget extends ServiceWorker ? ServiceWorkerEventMap : TEventTarget extends ServiceWorkerContainer ? ServiceWorkerContainerEventMap : TEventTarget extends ServiceWorkerRegistration ? ServiceWorkerRegistrationEventMap : TEventTarget extends ShadowRoot ? ShadowRootEventMap : TEventTarget extends SourceBuffer ? SourceBufferEventMap : TEventTarget extends SourceBufferList ? SourceBufferListEventMap : TEventTarget extends SpeechSynthesis ? SpeechSynthesisEventMap : TEventTarget extends SpeechSynthesisUtterance ? SpeechSynthesisUtteranceEventMap : TEventTarget extends TextTrack ? TextTrackEventMap : TEventTarget extends TextTrackCue ? TextTrackCueEventMap : TEventTarget extends TextTrackList ? TextTrackListEventMap : TEventTarget extends VisualViewport ? VisualViewportEventMap : TEventTarget extends WebSocket ? WebSocketEventMap : TEventTarget extends Worker ? WorkerEventMap : TEventTarget extends XMLHttpRequestEventTarget ? XMLHttpRequestEventTargetEventMap : TEventTarget extends AbstractWorker ? AbstractWorkerEventMap : TEventTarget extends Element ? ElementEventMap : never;
