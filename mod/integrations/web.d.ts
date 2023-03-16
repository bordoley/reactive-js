import { WindowLocationStreamLike_canGoBack, WindowLocationStreamLike_goBack } from "../__internal__/symbols.js";
import { Function1, Updater } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { StreamLike, StreamableLike, StreamableLike_stream } from "../streaming.js";
import { QueueableLike_push } from "../util.js";
export { WindowLocationStreamLike_goBack, WindowLocationStreamLike_canGoBack };
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
    [QueueableLike_push](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): boolean;
    readonly [WindowLocationStreamLike_canGoBack]: boolean;
    [WindowLocationStreamLike_goBack](): boolean;
}
/**
 * @noInheritDoc
 */
export interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
/**
 * @noInheritDoc
 */
export interface FetchRequest extends RequestInit {
    readonly uri: string;
}
export declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
export declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<FetchRequest | string, ObservableLike<T>>;
export declare const addEventListener: <T>(eventName: string, selector: Function1<Event, T>) => Function1<EventTarget, ObservableLike<T>>;
export declare const windowLocation: WindowLocationStreamableLike;
