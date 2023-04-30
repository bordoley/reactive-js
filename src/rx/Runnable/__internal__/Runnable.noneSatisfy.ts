import Container_noneSatisfy from "../../../containers/Container/__internal__/Container.noneSatisfy.js";
import { RunnableContainerLike } from "../../../rx.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";

const Runnable_noneSatisfy =
  /*@__PURE__*/ Container_noneSatisfy<RunnableContainerLike>(
    Runnable_everySatisfy,
  );

export default Runnable_noneSatisfy;
