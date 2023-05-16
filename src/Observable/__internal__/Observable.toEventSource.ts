import Disposable_bindTo from "../../Disposable/__internal__/Disposable.bindTo.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import type * as Observable from "../../Observable.js";
import { bindMethod, pipe } from "../../functions.js";
import { SinkLike_notify } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_toEventSource: Observable.Signature["toEventSource"] =
  (scheduler, options = {}) =>
  obs =>
    EventSource_create(listener =>
      pipe(
        obs,
        Observable_forEach(bindMethod(listener, SinkLike_notify)),
        Observable_subscribe(scheduler, options),
        Disposable_bindTo(listener),
      ),
    );

export default Observable_toEventSource;
