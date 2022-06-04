import { DisposableLike } from "./disposable";
import { Updater } from "./functions";
import { ObservableLike } from "./observable";
import { SchedulerLike } from "./scheduler";

export type WindowLocationURI = {
  title: string;
  path: string;
  query: string;
  fragment: string;
};

export interface WindowLocationStreamLike extends ObservableLike<WindowLocationURI> {
  dispatch(
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
    options?: { readonly replace?: boolean },
  ): void;

  goBack(): boolean;

  init(scheduler: SchedulerLike): DisposableLike;
}

export { fromEvent } from "./web/event";
export { createEventSource } from "./web/eventSource";
export { windowLocationStream } from "./web/windowLocation";
export type { FetchRequest } from "./web/fetch";
export { fetch } from "./web/fetch";
