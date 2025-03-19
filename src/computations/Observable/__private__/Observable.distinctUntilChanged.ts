import { Equality, partial, pipe } from "../../../functions.js";

import type * as Observable from "../../Observable.js";
import * as DistinctUntilChanged from "../../__internal__/operators/DistinctUntilChanged.js";
import Observable_lift from "./Observable.lift.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChanged.createObserver,
      partial(options),
      Observable_lift<T, T>(),
    );

export default Observable_distinctUntilChanged;
