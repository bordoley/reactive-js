import { Optional, Predicate } from "../../../functions.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_repeat: Producer.Signature["repeat"] = ((
  shouldRepeat?: Optional<Predicate<number> | number>,
) =>
  DeferredSource.repeat(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    shouldRepeat,
  )) as Producer.Signature["repeat"];

export default Producer_repeat;
