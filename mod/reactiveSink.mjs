/// <reference types="./reactiveSink.d.ts" />
const notify = (v) => (sink) => {
    sink.notify(v);
    return sink;
};
const notifySink = (sink) => (next) => sink.notify(next);

export { notify, notifySink };
