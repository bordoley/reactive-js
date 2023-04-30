import Container_contains from "../../../containers/Container/__internal__/Container.contains.js";
import { RunnableContainerLike } from "../../../rx.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains =
  /*@__PURE__*/ Container_contains<RunnableContainerLike>(Runnable_someSatisfy);

export default Runnable_contains;
