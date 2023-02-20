import { Updater, Function1 } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { DispatcherLike_dispatch, SchedulerLike } from "../scheduling.js";
import { StreamLike, StreamableLike, StreamableLike_stream } from "../streaming.js";
/**
 * @noInheritDoc
 */
interface WindowLocationURI {
    readonly title: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
}
/** @ignore */
declare const WindowLocationStreamLike_goBack: unique symbol;
/** @ignore */
declare const WindowLocationStreamLike_canGoBack: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    [DispatcherLike_dispatch](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    readonly [WindowLocationStreamLike_canGoBack]: boolean;
    [WindowLocationStreamLike_goBack](): boolean;
}
/**
 * @noInheritDoc
 */
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
/**
 * @noInheritDoc
 */
interface FetchRequest extends RequestInit {
    readonly uri: string;
}
declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<FetchRequest | string, ObservableLike<T>>;
declare const addEventListener: <T>(eventName: string, selector: Function1<Event, T>) => Function1<EventTarget, ObservableLike<T>>;
declare const windowLocation: WindowLocationStreamableLike;
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack, WindowLocationStreamableLike, WindowLocationURI, addEventListener, createEventSource, fetch, windowLocation };
