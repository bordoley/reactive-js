import { ProducerLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import Producer_lastAsync from "./Producer.lastAsync.js";
import Producer_takeFirst from "./Producer.takeFirst.js";

const Producer_firstAsync: Producer.Signature["firstAsync"] = (<T>() =>
  (producer: ProducerLike<T>) =>
    pipe(
      producer,
      Producer_takeFirst<T>(),
      Producer_lastAsync(),
    )) as Producer.Signature["firstAsync"];
export default Producer_firstAsync;
