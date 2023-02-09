/// <reference types="./Sink.d.ts" />
import Sink_notify from './__internal__/Sink/Sink.notify.mjs';
import Sink_notifySink from './__internal__/Sink/Sink.notifySink.mjs';
import Sink_sourceFrom from './__internal__/Sink/Sink.sourceFrom.mjs';

const notify = Sink_notify;
const notifySink = Sink_notifySink;
const sourceFrom = Sink_sourceFrom;
/** @ignore */
const Sink = {
    notify,
    notifySink,
    sourceFrom,
};

export { Sink as default, notify, notifySink, sourceFrom };
