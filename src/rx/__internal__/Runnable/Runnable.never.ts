import { Never } from "../../../containers";
import { ignore } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Runnable$create from "./Runnable.create";

const Runnable$never: Never<RunnableLike>["never"] = () =>
  Runnable$create(ignore);

export default Runnable$never;
