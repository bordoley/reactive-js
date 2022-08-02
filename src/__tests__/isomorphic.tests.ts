/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import { ContainerLikeTests } from "./modules/ContainerLike.test";
import { DisposableLikeTests } from "./modules/DisposableLike.test";
import { EnumerableLikeTests } from "./modules/EnumerableLike.test";
import { FlowableLikeTests } from "./modules/FlowableLike.test";
import { IterableLikeTests } from "./modules/IterableLike.test";
import { RunnableLikeTests } from "./modules/RunnableLike.test";
import { RunnableObservableLikeTests } from "./modules/RunnableObservableLike.test";
import { SequenceLikeTests } from "./modules/SequenceLike.test";
import { StreamableLikeTests } from "./modules/StreamableLike.test";
import { SubjectLikeTests } from "./modules/SubjectLike.test";
import { effectsTests } from "./modules/effects.test";
import { queueTests } from "./modules/queues.test";

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
