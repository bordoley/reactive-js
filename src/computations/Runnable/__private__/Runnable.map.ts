import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { Function1, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import MapMixin from "../../../utils/__mixins__/EventListeners/MapMixin.js";
import LiftedSinkMixin from "../../../utils/__mixins__/LiftedSinkMixin.js";
import { SinkLike } from "../../../utils.js";

import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_map: Runnable.Signature["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const createMapEventListener = mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedSinkMixin(), MapMixin()),
    function MapEventListener(
      this: unknown,
      delegate: SinkLike<TB>,
      selector: Function1<TA, TB>,
    ): SinkLike<TA> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedSinkMixin<TA, TB>(), this, delegate, none);
      init(MapMixin<TA, TB>(), this, selector);

      return this;
    },
  );

  return (selector: Function1<TA, TB>) =>
    pipe(createMapEventListener, partial(selector), Runnable_lift);
})() as Runnable.Signature["map"];

export default Runnable_map;
