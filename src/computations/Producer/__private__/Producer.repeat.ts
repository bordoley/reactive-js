import { Optional, Predicate } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_repeat: Producer.Signature["repeat"] = ((
  shouldRepeat?: Optional<Predicate<number> | number>,
) =>
  DeferredEventSource.repeat(
    Consumer.createDelegatingNonCompleting,
    shouldRepeat,
  )) as Producer.Signature["repeat"];

export default Producer_repeat;
