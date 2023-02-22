import { Throws } from "../../../containers.js";
import Container_throws from "../../../containers/Container/__internal__/Container.throws.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_compute from "./Runnable.compute.js";

const Runnable_throws: Throws<
  RunnableLike,
  { delay?: number; delayStart?: boolean }
>["throws"] = /*@__PURE__*/ Container_throws<RunnableLike>(Runnable_compute);

export default Runnable_throws;
