import { SideEffect1, error } from "../../../functions.js";
import { DisposableLike_dispose, ListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Publisher from "../../Publisher.js";

const Broadcaster_create: Broadcaster.Signature["create"] = <T>(
  setup: SideEffect1<ListenerLike<T>>,
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

export default Broadcaster_create;
