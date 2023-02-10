import Sink_notify from "./Sink/__internal__/Sink.notify";
import Sink_notifySink from "./Sink/__internal__/Sink.notifySink";
import Sink_sourceFrom from "./Sink/__internal__/Sink.sourceFrom";

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
