import { Optional, Predicate } from "../../../functions.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Observable_repeat: Observable.Signature["repeat"] = (<T>(
  shouldRepeat?: Optional<Predicate<number> | number>,
) =>
  DeferredSource.repeat<ObserverLike<T>, T>(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    shouldRepeat,
  )) as Observable.Signature["repeat"];

export default Observable_repeat;
