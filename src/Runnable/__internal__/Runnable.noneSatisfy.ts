import Container_noneSatisfy from "../../Container/__internal__/Container.noneSatisfy.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";

const Runnable_noneSatisfy =
  /*@__PURE__*/ Container_noneSatisfy<RunnableContainer.Type>(
    Runnable_everySatisfy,
  );

export default Runnable_noneSatisfy;
