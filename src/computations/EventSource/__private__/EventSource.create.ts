import { SideEffect1, error } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import * as Publisher from "../../Publisher.js";

const EventSource_create: EventSource.Signature["create"] = <T>(
  setup: SideEffect1<EventListenerLike<T>>,
  options?: {
    readonly autoDispose?: boolean;
  },
) => {
  const delegate = Publisher.create<T>(options);

  try {
    setup(delegate);
  } catch (e) {
    delegate[DisposableLike_dispose](error(e));
  }

  return delegate;
};

export default EventSource_create;
