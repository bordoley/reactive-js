import { BroadcasterLike } from "../computations.js";
import { DisposableLike, SinkLike } from "../utils.js";

export interface BroadcasterModule {
  create<T>(
    f: (sink: SinkLike<T>) => void,
  ): BroadcasterLike<T> & DisposableLike;
}

export type Signature = BroadcasterModule;

export const create: Signature["create"] = null as any;
