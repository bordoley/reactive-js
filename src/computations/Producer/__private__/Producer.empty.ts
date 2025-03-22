import type * as Producer from "../../Producer.js";
import { Producer_genPure } from "./Producer.gen.js";
const Producer_empty: Producer.Signature["empty"] = ((options?: {
  readonly autoDispose?: boolean;
}) =>
  Producer_genPure(function* ProducerEmpty() {
    return;
  }, options)) as Producer.Signature["empty"];

export default Producer_empty;
