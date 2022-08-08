/// <reference types="./isomorphic.tests.d.ts" />
import { runTests } from '../__internal__/__internal__testing.mjs';
import ContainerLikeTests from './modules/ContainerLike.test.mjs';
import DisposableLikeTests from './modules/DisposableLike.test.mjs';
import EnumerableLikeTests from './modules/EnumerableLike.test.mjs';
import FlowableLikeTests from './modules/FlowableLike.test.mjs';
import IterableLikeTests from './modules/IterableLike.test.mjs';
import ObservableLikeTests from './modules/ObservableLike.test.mjs';
import PromiseableLikeTests from './modules/PromiseableLike.test.mjs';
import RunnableLikeTests from './modules/RunnableLike.test.mjs';
import SequenceLikeTests from './modules/SequenceLike.test.mjs';
import SubjectLikeTests from './modules/SubjectLike.test.mjs';
import effectsTests from './modules/effects.test.mjs';
import queueTests from './modules/queues.test.mjs';
import streamingTests from './modules/streaming.test.mjs';

/**
 * @jest-environment node
 */
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
