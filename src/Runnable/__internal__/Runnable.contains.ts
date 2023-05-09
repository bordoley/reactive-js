import Container_contains from "../../Container/__internal__/Container.contains.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains =
  /*@__PURE__*/ Container_contains<RunnableContainer>(Runnable_someSatisfy);

export default Runnable_contains;
