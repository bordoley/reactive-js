import { RunnableContainer } from "../../../core.js";
import Container_contains from "../../../core/Container/__internal__/Container.contains.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains =
  /*@__PURE__*/ Container_contains<RunnableContainer>(Runnable_someSatisfy);

export default Runnable_contains;
