/// <reference types="./ContainerLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals } from '../__internal__/testing.mjs';
import { emptyReadonlyArray } from '../containers.mjs';
import { ignoreElements } from '../containers/ContainerLike.mjs';
import { toEnumerable } from '../containers/ReadonlyArrayLike.mjs';
import { pipeLazy } from '../functions.mjs';
import { keepT, toReadonlyArray } from '../ix/EnumerableLike.mjs';

const ContainerLikeTests = createDescribe("ContainerLike", createDescribe("ignoreElements", createTest("ignoreElements", pipeLazy([1, 2, 3], toEnumerable(), ignoreElements(keepT), toReadonlyArray(), expectArrayEquals(emptyReadonlyArray())))));

export { ContainerLikeTests };
