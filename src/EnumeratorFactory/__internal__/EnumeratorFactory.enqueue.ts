import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { bindMethod } from "../../functions.js";
import { QueueableLike, QueueableLike_enqueue } from "../../types.js";
import EnumeratorFactory_forEach from "./EnumeratorFactory.forEach.js";

const EnumeratorFactory_enqueue: EnumeratorFactory.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) => EnumeratorFactory_forEach(bindMethod(queue, QueueableLike_enqueue));

export default EnumeratorFactory_enqueue;
