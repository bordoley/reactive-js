import { DispatcherLike_complete } from "../../../concurrent.js";
import * as EventSource from "../../../events/EventSource.js";
import { StoreLike, StoreLike_value } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const Observable_fromStore: Observable.Signature["fromStore"] =
  <T>() =>
  (store: StoreLike<T>) =>
    Observable_createMulticast<T>(observer => {
      observer[QueueableLike_enqueue](store[StoreLike_value]);

      pipe(
        store,
        EventSource.addEventHandler(
          bindMethod(observer, QueueableLike_enqueue),
        ),
        DisposableContainer.onComplete(
          bindMethod(observer, DispatcherLike_complete),
        ),
        Disposable.addTo(observer),
      );
    });

export default Observable_fromStore;
