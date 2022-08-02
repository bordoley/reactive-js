/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { ContainerLikeTests } from "./ContainerLike.test";
import { DisposableLikeTests } from "./DisposableLike.test";
import { EnumerableLikeTests } from "./EnumerableLike.test";
import { FlowableLikeTests } from "./FlowableLike.test";
import { IterableLikeTests } from "./IterableLike.test";
import { RunnableLikeTests } from "./RunnableLike.test";
import { RunnableObservableLikeTests } from "./RunnableObservableLike.test";
import { SequenceLikeTests } from "./SequenceLike.test";
import { StreamableLikeTests } from "./StreamableLike.test";
import { SubjectLikeTests } from "./SubjectLike.test";
import { effectsTests } from "./effects.test";
import { queueTests } from "./queues.test";

runTests([
  ContainerLikeTests,
  DisposableLikeTests,
  effectsTests,
  EnumerableLikeTests,
  IterableLikeTests,
  FlowableLikeTests,
  RunnableLikeTests,
  RunnableObservableLikeTests,
  SequenceLikeTests,
  StreamableLikeTests,
  SubjectLikeTests,
  queueTests,
]);
