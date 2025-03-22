import { Factory, pipe } from "../../../functions.js";

import type * as Broadcaster from "../../Broadcaster.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import { Producer_genPure } from "../../Producer/__private__/Producer.gen.js";

const Broadcaster_gen: Broadcaster.Signature["gen"] = (<T>(
  factory: Factory<Generator<T>>,
  options?: {
    readonly autoDispose?: boolean;
  },
) =>
  pipe(
    Producer_genPure(factory),
    Producer_broadcast(options),
  )) as Broadcaster.Signature["gen"];

export default Broadcaster_gen;
