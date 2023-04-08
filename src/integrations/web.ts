import * as Object from "../__internal__/Object.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
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
  IndexedBufferCollectionLike,
  KeyedCollectionLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";

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
    T,
  >(
    eventName: K,
    selector: Function1<AbortSignalEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends Animation,
    K extends keyof AnimationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AnimationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends AbstractWorker,
    K extends keyof AbstractWorkerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AbstractWorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends AudioScheduledSourceNode,
    K extends keyof AudioScheduledSourceNodeEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AudioScheduledSourceNodeEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends BaseAudioContext,
    K extends keyof BaseAudioContextEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<BaseAudioContextEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends AudioWorkletNode,
    K extends keyof AudioWorkletNodeEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<AudioWorkletNodeEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends BroadcastChannel,
    K extends keyof BroadcastChannelEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<BroadcastChannelEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends Document,
    K extends keyof DocumentEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<DocumentEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends MediaStreamTrack,
    K extends keyof MediaStreamTrackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaStreamTrackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends EventSource,
    K extends keyof EventSourceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<EventSourceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends FileReader,
    K extends keyof FileReaderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<FileReaderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends FontFaceSet,
    K extends keyof FontFaceSetEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<FontFaceSetEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends GlobalEventHandlers,
    K extends keyof GlobalEventHandlersEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<GlobalEventHandlersEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends IDBDatabase,
    K extends keyof IDBDatabaseEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBDatabaseEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends HTMLBodyElement,
    K extends keyof HTMLBodyElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLBodyElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends HTMLElement,
    K extends keyof HTMLElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends HTMLMediaElement,
    K extends keyof HTMLMediaElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLMediaElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends HTMLVideoElement,
    K extends keyof HTMLVideoElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<HTMLVideoElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;

  addEventListener<
    TEventTarget extends IDBOpenDBRequest,
    K extends keyof IDBOpenDBRequestEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBOpenDBRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends IDBRequest<T>,
    K extends keyof IDBRequestEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends IDBTransaction,
    K extends keyof IDBTransactionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<IDBTransactionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MathMLElement,
    K extends keyof MathMLElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MathMLElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaDevices,
    K extends keyof MediaDevicesEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaDevicesEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaKeySession,
    K extends keyof MediaKeySessionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaKeySessionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaQueryList,
    K extends keyof MediaQueryListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaQueryListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaRecorder,
    K extends keyof MediaRecorderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaRecorderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaSource | MediaStream,
    K extends keyof MediaSourceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaSourceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MediaStream,
    K extends keyof MediaStreamEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MediaStreamEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends MessagePort,
    K extends keyof MessagePortEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<MessagePortEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends Notification,
    K extends keyof NotificationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<NotificationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends OfflineAudioContext,
    K extends keyof OfflineAudioContextEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<OfflineAudioContextEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends OffscreenCanvas,
    K extends keyof OffscreenCanvasEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<OffscreenCanvasEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends PaymentRequest,
    K extends keyof PaymentRequestEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PaymentRequestEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends Performance,
    K extends keyof PerformanceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PerformanceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends PermissionStatus,
    K extends keyof PermissionStatusEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PermissionStatusEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends PictureInPictureWindow,
    K extends keyof PictureInPictureWindowEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<PictureInPictureWindowEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCDTMFSender,
    K extends keyof RTCDTMFSenderEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDTMFSenderEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCDataChannel,
    K extends keyof RTCDataChannelEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDataChannelEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCDtlsTransport,
    K extends keyof RTCDtlsTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCDtlsTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCIceTransport,
    K extends keyof RTCIceTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCIceTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCPeerConnection,
    K extends keyof RTCPeerConnectionEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCPeerConnectionEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RTCSctpTransport,
    K extends keyof RTCSctpTransportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RTCSctpTransportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends RemotePlayback,
    K extends keyof RemotePlaybackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<RemotePlaybackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SVGSVGElement,
    K extends keyof SVGSVGElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SVGSVGElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends ScreenOrientation,
    K extends keyof ScreenOrientationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ScreenOrientationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends ServiceWorker,
    K extends keyof ServiceWorkerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends ServiceWorkerContainer,
    K extends keyof ServiceWorkerContainerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerContainerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends ServiceWorkerRegistration,
    K extends keyof ServiceWorkerRegistrationEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ServiceWorkerRegistrationEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends ShadowRoot,
    K extends keyof ShadowRootEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<ShadowRootEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SourceBuffer,
    K extends keyof SourceBufferEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SourceBufferEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SourceBufferList,
    K extends keyof SourceBufferListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SourceBufferListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SpeechSynthesis,
    K extends keyof SpeechSynthesisEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SpeechSynthesisEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SpeechSynthesisUtterance,
    K extends keyof SpeechSynthesisUtteranceEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SpeechSynthesisUtteranceEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends SVGElement,
    K extends keyof SVGElementEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<SVGElementEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends TextTrack,
    K extends keyof TextTrackEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends TextTrackCue,
    K extends keyof TextTrackCueEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackCueEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends TextTrackList,
    K extends keyof TextTrackListEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<TextTrackListEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends VisualViewport,
    K extends keyof VisualViewportEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<VisualViewportEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends WebSocket,
    K extends keyof WebSocketEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<WebSocketEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends Window,
    K extends keyof WindowEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<WindowEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends Worker,
    K extends keyof WorkerEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<WorkerEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
  addEventListener<
    TEventTarget extends XMLHttpRequestEventTarget,
    K extends keyof XMLHttpRequestEventTargetEventMap,
    T,
  >(
    eventName: K,
    selector: Function1<XMLHttpRequestEventTargetEventMap[K], T>,
  ): Function1<TEventTarget, ObservableLike<T>>;
}

export const addEventListener: AddEventListener["addEventListener"] = (<T>(
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
    })) as AddEventListener["addEventListener"];

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
      include(Stream_delegatingMixin(), delegatingMixin()),
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
        init(delegatingMixin(), instance, delegate);

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
            prevState => {
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
            prevState => {
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
            addEventListener<Window, "popstate", unknown>(
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
