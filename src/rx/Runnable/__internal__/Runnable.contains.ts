import Container_contains from "../../../containers/Container/__internal__/Container.contains.js";
import { RunnableContainer } from "../../../rx.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains =
  /*@__PURE__*/ Container_contains<RunnableContainer>(Runnable_someSatisfy);

export default Runnable_contains;
