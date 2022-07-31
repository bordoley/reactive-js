/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { ContainerLikeTests } from "./ContainerLike.test";
import { DisposableLikeTests } from "./DisposableLike.test";
import { EnumerableLikeTests } from "./EnumerableLike.test";
import { RunnableLikeTests } from "./RunnableLike.test";
import { RunnableObservableLikeTests } from "./RunnableObservableLike.test";
import { SequenceLikeTests } from "./SequenceLike.test";
import { SubjectLikeTests } from "./SubjectLike.test";
import { queueTests } from "./queues.test";

runTests([
  ContainerLikeTests,
  DisposableLikeTests,
  EnumerableLikeTests,
  RunnableObservableLikeTests,
  RunnableLikeTests,
  SequenceLikeTests,
  SubjectLikeTests,
  queueTests,
]);
