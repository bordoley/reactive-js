import { Array_length } from "../../../__internal__/constants.js";
import { error, returns } from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromReadonlyArray: EventSource.Signature["fromReadonlyArray"] =
  /*@__PURE__*/ returns((arr: readonly unknown[]) =>
    EventSource_create(async (listener: EventListenerLike) => {
      for (let i = 0; i < arr[Array_length]; i++) {
        await Promise.resolve();
        try {
          listener[EventListenerLike_notify](arr[i]);
        } catch (e) {
          listener[DisposableLike_dispose](error(e));
          break;
        }
      }
      listener[DisposableLike_dispose]();
    }),
  ) as EventSource.Signature["fromReadonlyArray"];

export default EventSource_fromReadonlyArray;
