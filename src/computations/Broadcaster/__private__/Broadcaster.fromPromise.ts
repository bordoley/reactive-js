import { error } from "../../../functions.js";
import {
  DisposableLike_dispose,
  ListenerLike,
  ListenerLike_notify,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_create from "./Broadcaster.create.js";

const Broadcaster_fromPromise: Broadcaster.Signature["fromPromise"] =
  <T>(options?: { readonly autoDispose?: boolean }) =>
  (promise: Promise<T>) =>
    Broadcaster_create<T>(async (listener: ListenerLike<T>) => {
      try {
        const result = await promise;
        listener[ListenerLike_notify](result);
        listener[DisposableLike_dispose]();
      } catch (e) {
        listener[DisposableLike_dispose](error(e));
      }
    }, options);

export default Broadcaster_fromPromise;
