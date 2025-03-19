import { Equality, partial, pipe } from "../../../functions.js";

import type * as Broadcaster from "../../Broadcaster.js";
import * as DistinctUntilChanged from "../../__internal__/operators/DistinctUntilChanged.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_distinctUntilChanged: Broadcaster.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChanged.createListener,
      partial(options),
      Broadcaster_lift<T, T>,
    );

export default Broadcaster_distinctUntilChanged;
