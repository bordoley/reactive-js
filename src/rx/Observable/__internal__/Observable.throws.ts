import { Throws } from "../../../containers.js";
import Container_throws from "../../../containers/Container/__internal__/Container.throws.js";
import { ObservableLike } from "../../../rx.js";
import Observable_compute from "./Observable.compute.js";

const Observable_throws: Throws<
  ObservableLike,
  { delay?: number; delayStart?: boolean }
>["throws"] =
  /*@__PURE__*/ Container_throws<ObservableLike>(Observable_compute);

export default Observable_throws;
