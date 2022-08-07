/**
 * @jest-environment node
 */

import { runTests } from "../__internal__/testing";
import ContainerLikeTests from "./modules/ContainerLike.test";
import DisposableLikeTests from "./modules/DisposableLike.test";
import EnumerableLikeTests from "./modules/EnumerableLike.test";
import FlowableLikeTests from "./modules/FlowableLike.test";
import IterableLikeTests from "./modules/IterableLike.test";
import ObservableLikeTests from "./modules/ObservableLike.test";
import PromiseableLikeTests from "./modules/PromiseableLike.test";
import RunnableLikeTests from "./modules/RunnableLike.test";
import SequenceLikeTests from "./modules/SequenceLike.test";
import SubjectLikeTests from "./modules/SubjectLike.test";
import effectsTests from "./modules/effects.test";
import queueTests from "./modules/queues.test";
import streamingTests from "./modules/streaming.test";

runTests([
  ContainerLikeTests,
  DisposableLikeTests,
  effectsTests,
  EnumerableLikeTests,
  FlowableLikeTests,
  IterableLikeTests,
  ObservableLikeTests,
  PromiseableLikeTests,
  queueTests,
  RunnableLikeTests,
  SequenceLikeTests,
  streamingTests,
  SubjectLikeTests,
]);
