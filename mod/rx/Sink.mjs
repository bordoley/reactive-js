/// <reference types="./Sink.d.ts" />
import Sink$notify from './__internal__/Sink/Sink.notify.mjs';
import Sink$notifySink from './__internal__/Sink/Sink.notifySink.mjs';
import Sink$sourceFrom from './__internal__/Sink/Sink.sourceFrom.mjs';

const notify = Sink$notify;
const notifySink = Sink$notifySink;
const sourceFrom = Sink$sourceFrom;

export { notify, notifySink, sourceFrom };
