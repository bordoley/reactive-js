import { BroadcasterLike } from "../../../computations.js";
import { bindMethod, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  ConsumerLike,
  EventListenerLike_notify,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";

const Broadcaster_toProducer: Broadcaster.Signature["toProducer"] =
  /*@__PURE__*/ returns((src: BroadcasterLike) =>
    DeferredEventSource.create((consumer: ConsumerLike) => {
      pipe(
        src,
        Broadcaster_addEventHandler(
          bindMethod(consumer, EventListenerLike_notify),
        ),
        DisposableContainer.onComplete(bindMethod(consumer, SinkLike_complete)),
        Disposable.addTo(consumer),
      );
    }),
  ) as Broadcaster.Signature["toProducer"];

export default Broadcaster_toProducer;
