import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as Observable from "../../Observable.js";
import Observable_map from "./Observable.map.js";

const Observable_pick: Observable.Signature["pick"] =
  /*@__PURE__*/ Container_pick<Observable.Type>(
    Observable_map,
  ) as Observable.Signature["pick"];

export default Observable_pick;
