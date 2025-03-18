import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import KeepMixin from "../../../utils/__mixins__/EventListeners/KeepMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { SinkLike } from "../../../utils.js";

import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_keep: Runnable.Signature["keep"] = /*@__PURE__*/ (<T>() => {
  const createKeepSink = mixInstanceFactory(
    include(LiftedSinkMixin(), KeepMixin()),
    function KeepEventListener(
      this: unknown,
      delegate: SinkLike<T>,
      predicate: Predicate<T>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate, none);
      init(KeepMixin(), this, predicate);

      return this;
    },
  );

  return (predicate: Predicate<T>) =>
    pipe(createKeepSink, partial(predicate), Runnable_lift);
})() as Runnable.Signature["keep"];

export default Runnable_keep;
