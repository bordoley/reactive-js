import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_observe,
} from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Factory,
  Function2,
  Tuple2,
  bindMethod,
  invoke,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import Observable_create from "./Observable.create.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_switchMap from "./Observable.switchMap.js";
import Observable_zipLatest from "./Observable.zipLatest.js";

const Observable_scanMany: Observable.Signature["scanMany"] =
  <T, TAcc>(
    scanner: Function2<TAcc, T, DeferredObservableLike<TAcc>>,
    initialValue: Factory<TAcc>,
  ) =>
  (observable: ObservableLike<T>) =>
    Observable_create(observer => {
      const accFeedbackStream = pipe(
        Subject.create(),
        Disposable.addTo(observer),
      );

      pipe(
        Observable_zipLatest<TAcc, T>(accFeedbackStream, observable),
        Observable_switchMap(([acc, next]: Tuple2<TAcc, T>) =>
          scanner(acc, next),
        ),
        Observable_forEach(bindMethod(accFeedbackStream, SinkLike_notify)),
        invoke(ObservableLike_observe, observer),
      );

      accFeedbackStream[SinkLike_notify](initialValue());
    });

export default Observable_scanMany;
