import Container_noneSatisfy from "../../../containers/Container/__internal__/Container.noneSatisfy.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";

const Runnable_noneSatisfy = /*@__PURE__*/ Container_noneSatisfy<RunnableLike>(
  Runnable_everySatisfy,
);

export default Runnable_noneSatisfy;
