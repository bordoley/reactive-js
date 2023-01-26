import { Defer } from "../../../containers";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../../../rx";
import Runnable$create from "./Runnable.create";

const Runnable$defer: Defer<RunnableLike>["defer"] = f =>
  Runnable$create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
  });

export default Runnable$defer;
