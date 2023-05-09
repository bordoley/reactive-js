import Container_noneSatisfy from "../../Container/__internal__/Container.noneSatisfy.js";
import { RunnableContainer } from "../../types.js";
import Runnable_everySatisfy from "./Runnable.everySatisfy.js";

const Runnable_noneSatisfy =
  /*@__PURE__*/ Container_noneSatisfy<RunnableContainer>(Runnable_everySatisfy);

export default Runnable_noneSatisfy;
