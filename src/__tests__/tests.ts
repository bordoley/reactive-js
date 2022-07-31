/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { ContainerLikeTests } from "./ContainerLike.test";
import { DisposableLikeTests } from "./DisposableLike.test";
import { EnumerableLikeTests } from "./EnumerableLike.test";
import { ObservableLikeTests } from "./ObservableLike.test";
import { RunnableLikeTests } from "./RunnableLike.test";
import { SequenceLikeTests } from "./SequenceLike.test";
import { SubjectLikeTests } from "./SubjectLike.test";
import { queueTests } from "./queues.test";

runTests([
  ContainerLikeTests,
  DisposableLikeTests,
  EnumerableLikeTests,
  ObservableLikeTests,
  RunnableLikeTests,
  SequenceLikeTests,
  SubjectLikeTests,
  queueTests,
]);
