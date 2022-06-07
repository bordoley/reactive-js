import { Updater } from "./functions";
import { StreamLike } from "./observable";
import { SchedulerLike } from "./scheduler";
import { StreamableLike } from "./streamable";

export type WindowLocationURI = {
  title: string;
  path: string;
  query: string;
  fragment: string;
};

export interface WindowLocationStreamLike
  extends StreamLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  dispatch(
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  goBack(): boolean;
}

export interface WindowLocationStreamableLike
  extends StreamableLike<
    Updater<WindowLocationURI> | WindowLocationURI,
    WindowLocationURI
  > {
  stream(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): WindowLocationStreamLike;
}

export { fromEvent } from "./web/event";
export { createEventSource } from "./web/eventSource";
export { windowLocation } from "./web/windowLocation";
export type { FetchRequest } from "./web/fetch";
export { fetch } from "./web/fetch";
