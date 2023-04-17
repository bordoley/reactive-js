import { ContainerOperator, Pick } from "../../../containers.js";
import { EventSourceLike } from "../../../util.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: Pick<EventSourceLike>["pick"] = (
  ...keys: any[]
): ContainerOperator<EventSourceLike, any, unknown> =>
  EventSource_map<any, unknown>((value: any) => {
    let result: any = value;
    for (const key of keys) {
      result = result[key];
    }
    return result;
  });

export default EventSource_pick;
