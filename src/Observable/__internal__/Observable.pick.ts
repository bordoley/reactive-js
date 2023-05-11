import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as Observable from "../../Observable.js";
import type * as Runnable from "../../Runnable.js";
import Observable_map from "./Observable.map.js";

const Observable_pick: Observable.Signature["pick"] =
  /*@__PURE__*/ Container_pick(
    // Using a type cast to work around the fact that ObservableLike isn't a Container
    Observable_map as Runnable.Signature["map"],
  ) as unknown as Observable.Signature["pick"];

export default Observable_pick;
