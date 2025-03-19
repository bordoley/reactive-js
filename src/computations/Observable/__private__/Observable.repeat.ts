import { ObservableLike } from "../../../computations.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Repeat from "../../__internal__/operators/Repeat.js";
import Observable_lift from "./Observable.lift.js";

const Observable_repeat: Observable.Signature["repeat"] =
  <T>(shouldRepeat?: Predicate<number> | number) =>
  (observable: ObservableLike<T>) =>
    pipe(
      Repeat.createObserver,
      partial(observable, shouldRepeat, 0),
      Observable_lift(),
    )(observable);

export default Observable_repeat;
