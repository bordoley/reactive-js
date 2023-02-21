import { Defer } from "../../../containers.js";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../../../rx.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_defer: Defer<RunnableLike>["defer"] = f =>
  Runnable_create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });

export default Runnable_defer;
