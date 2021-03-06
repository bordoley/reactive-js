import { Function1 } from "./functions.mjs";
import { ObservableLike } from "./observable.mjs";
import { RelativeURI } from "./relativeURI.mjs";
import { StateStoreLike } from "./stateStore.mjs";
declare const fromEvent: <T>(target: EventTarget, eventName: string, selector: Function1<Event, T>) => ObservableLike<T>;
declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
declare const historyStateStore: StateStoreLike<RelativeURI>;
declare type FetchRequest = RequestInit & {
    uri: string;
};
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<string | FetchRequest, ObservableLike<T>>;
export { FetchRequest, createEventSource, fetch, fromEvent, historyStateStore };
