/// <reference types="./EventSource.keep.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import KeepMixin from "../../../utils/__mixins__/EventListeners/KeepMixin.js";
import LiftedEventListenerMixin from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_keep = /*@__PURE__*/ (() => {
    const createKeepEventListener = mixInstanceFactory(include(DelegatingDisposableMixin, LiftedEventListenerMixin(), KeepMixin()), function KeepEventListener(delegate, predicate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedEventListenerMixin(), this, delegate, none);
        init(KeepMixin(), this, predicate);
        return this;
    });
    return (predicate) => pipe(createKeepEventListener, partial(predicate), EventSource_lift);
})();
export default EventSource_keep;
