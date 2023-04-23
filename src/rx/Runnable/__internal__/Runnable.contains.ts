import Container_contains from "../../../containers/Container/__internal__/Container.contains.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_someSatisfy from "./Runnable.someSatisfy.js";

const Runnable_contains =
  /*@__PURE__*/ Container_contains<RunnableLike>(Runnable_someSatisfy);

export default Runnable_contains;
