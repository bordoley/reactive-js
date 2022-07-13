/// <reference types="./ReactiveSinkLike.d.ts" />
const ReactiveSinkLike_notify = Symbol("ReactiveSinkLike_notify");
const notify = (v) => (sink) => {
    sink[ReactiveSinkLike_notify](v);
    return sink;
};
const notifySink = (sink) => (next) => sink[ReactiveSinkLike_notify](next);

export { ReactiveSinkLike_notify, notify, notifySink };
