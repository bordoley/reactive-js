import { EventSourceLike } from "../../../computations.js";
type LatestMode = 1 | 2;
declare const EventSource_latest: (eventSources: readonly EventSourceLike<any>[], mode: LatestMode) => EventSourceLike<readonly unknown[]>;
export default EventSource_latest;
