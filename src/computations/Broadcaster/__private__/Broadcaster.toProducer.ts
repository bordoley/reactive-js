import { unsafeCast } from "../../../__internal__/mixins.js";
import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, isNone, pipe, returns } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import {
  ConsumerLike,
  ListenerLike_notify,
  PauseableLike,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SinkLike_complete,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Source from "../../__internal__/Source.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";

const Broadcaster_toProducer: Broadcaster.Signature["toProducer"] =
  /*@__PURE__*/ returns((src: BroadcasterLike) =>
    Source.create((consumer: ConsumerLike) => {
      if (isNone((src as any)[PauseableLike_pause])) {
        src[SourceLike_subscribe](consumer);
        return;
      }

      unsafeCast<PauseableLike>(src);

      src[PauseableLike_pause]();

      consumer[QueueableLike_addOnReadyListener](
        bindMethod(src, PauseableLike_resume),
      );

      pipe(
        src,
        Broadcaster_addEventHandler(v => {
          consumer[ListenerLike_notify](v);

          if (!consumer[QueueableLike_isReady]) {
            src[PauseableLike_pause]();
          }
        }),
        DisposableContainer.onComplete(bindMethod(consumer, SinkLike_complete)),
        Disposable.addTo(consumer),
      );

      if (consumer[QueueableLike_isReady]) {
        src[PauseableLike_resume]();
      }
    }),
  ) as Broadcaster.Signature["toProducer"];

export default Broadcaster_toProducer;
