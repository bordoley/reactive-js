import { Never } from "../../../containers.js";
import { ignore } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_create from "./Runnable.create.js";

const Runnable_never: Never<RunnableLike>["never"] = () =>
  Runnable_create(ignore);

export default Runnable_never;
