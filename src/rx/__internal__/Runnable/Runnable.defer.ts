import { Defer } from "../../../containers";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../../../rx";
import Runnable_create from "./Runnable.create";

const Runnable_defer: Defer<RunnableLike>["defer"] = f =>
  Runnable_create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });

export default Runnable_defer;
