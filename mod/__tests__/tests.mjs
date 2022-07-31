/// <reference types="./tests.d.ts" />
import { runTests } from '../__internal__/testing.mjs';
import { ContainerLikeTests } from './ContainerLike.test.mjs';
import { DisposableLikeTests } from './DisposableLike.test.mjs';
import { EnumerableLikeTests } from './EnumerableLike.test.mjs';
import { RunnableLikeTests } from './RunnableLike.test.mjs';
import { RunnableObservableLikeTests } from './RunnableObservableLike.test.mjs';
import { SequenceLikeTests } from './SequenceLike.test.mjs';
import { SubjectLikeTests } from './SubjectLike.test.mjs';
import { queueTests } from './queues.test.mjs';

/**
 * @jest-environment node
 */
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
