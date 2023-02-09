import Sink_notify from "./__internal__/Sink/Sink.notify";
import Sink_notifySink from "./__internal__/Sink/Sink.notifySink";
import Sink_sourceFrom from "./__internal__/Sink/Sink.sourceFrom";

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
