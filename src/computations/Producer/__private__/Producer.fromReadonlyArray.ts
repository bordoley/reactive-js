import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import { error } from "../../../functions.js";
import {
  DisposableLike_dispose,
  ConsumerLike,
  EventListenerLike_notify,
  ConsumerLike_isReady,
  SinkLike_complete,
  ConsumerLike_addOnReadyListener,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import Producer_create from "./Producer.create.js";

const Producer_fromReadonlyArray: Producer.Signature["fromReadonlyArray"] = (<
    T,
  >(options?: {
    count?: number;
    start?: number;
  }) =>
  (arr: readonly T[]) => {
    return Producer_create(async (consumer: ConsumerLike<T>) => {
      let [start, count] = parseArrayBounds(arr, options);

      let isConsuming = false;

      const consume = () => {
        if(isConsuming) {
          return;
        }

        isConsuming = true;

        while (count !== 0) {
          try {
            consumer[EventListenerLike_notify](arr[start]);
          } catch (e) {
            consumer[DisposableLike_dispose](error(e));
            isConsuming = false;
            return;
          }

          count > 0 ? (start++, count--) : (start--, count++);

          if (!consumer[ConsumerLike_isReady]) {
            isConsuming = false;
            return;
          }
        }

        consumer[SinkLike_complete]();
      };

      consumer[ConsumerLike_addOnReadyListener](
        consume
      );

      await Promise.resolve();
      consume();
    });
  }) as Producer.Signature["fromReadonlyArray"];

export default Producer_fromReadonlyArray;
