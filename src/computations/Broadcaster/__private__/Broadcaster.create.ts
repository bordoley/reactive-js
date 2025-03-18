import { SideEffect1, error } from "../../../functions.js";
import { DisposableLike_dispose, SinkLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Subject from "../../Subject.js";

const Broadcaster_create: Broadcaster.Signature["create"] = <T>(
  setup: SideEffect1<SinkLike<T>>,
  options?: {
    readonly autoDispose?: boolean;
    readonly replay?: number;
  },
) => {
  const delegate = Subject.create<T>(options);

  try {
    setup(delegate);
  } catch (e) {
    delegate[DisposableLike_dispose](error(e));
  }

  return delegate;
};

export default Broadcaster_create;
