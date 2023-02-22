import { Contains } from "../../../containers.js";
import Container_contains from "../../../containers/Container/__internal__/Container.contains.js";
import { ObservableLike } from "../../../rx.js";
import Observable_someSatisfy from "./Observable.someSatisfy.js";

const Observable_contains: Contains<ObservableLike>["contains"] =
  /*@__PURE__*/ Container_contains(Observable_someSatisfy);

export default Observable_contains;
