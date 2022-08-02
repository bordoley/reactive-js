/// <reference types="./isomorphic.tests.d.ts" />
import { runTests } from '../__internal__/testing.mjs';
import { ContainerLikeTests } from './modules/ContainerLike.test.mjs';
import { DisposableLikeTests } from './modules/DisposableLike.test.mjs';
import { EnumerableLikeTests } from './modules/EnumerableLike.test.mjs';
import { FlowableLikeTests } from './modules/FlowableLike.test.mjs';
import { IterableLikeTests } from './modules/IterableLike.test.mjs';
import { RunnableLikeTests } from './modules/RunnableLike.test.mjs';
import { RunnableObservableLikeTests } from './modules/RunnableObservableLike.test.mjs';
import { SequenceLikeTests } from './modules/SequenceLike.test.mjs';
import { StreamableLikeTests } from './modules/StreamableLike.test.mjs';
import { SubjectLikeTests } from './modules/SubjectLike.test.mjs';
import { effectsTests } from './modules/effects.test.mjs';
import { queueTests } from './modules/queues.test.mjs';

/**
 * @jest-environment node
 */
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
