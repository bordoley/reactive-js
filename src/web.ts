import { Updater } from "./functions";
import { StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";
import { StreamableLike } from "./streamable";

export interface WindowLocationURI {
  title: string;
  path: string;
  query: string;
  fragment: string;
}

export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  dispatch(
    this: WindowLocationStreamLike,
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  goBack(this: WindowLocationStreamLike): boolean;
}

export interface WindowLocationStreamableLike
  extends StreamableLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI,
    WindowLocationStreamLike
  > {
  stream(
    this: WindowLocationStreamableLike,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike;
}

export type FetchRequest = RequestInit & {
  uri: string;
};

export { fromEvent } from "./web/event";
export { createEventSource } from "./web/eventSource";
export { windowLocation } from "./web/windowLocation";
export { fetch } from "./web/fetch";
