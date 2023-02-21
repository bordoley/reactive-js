import Sink_notify from "./Sink/__internal__/Sink.notify.js";
import Sink_notifySink from "./Sink/__internal__/Sink.notifySink.js";
import Sink_sourceFrom from "./Sink/__internal__/Sink.sourceFrom.js";

export const notify = Sink_notify;
export const notifySink = Sink_notifySink;
export const sourceFrom = Sink_sourceFrom;

/** @ignore */
const Sink = {
  notify,
  notifySink,
  sourceFrom,
};

export default Sink;
