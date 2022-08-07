/// <reference types="./ContainerLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals } from '../../__internal__/testing.mjs';
import { emptyReadonlyArray } from '../../containers.mjs';
import { concatMap, concatWith, endWith, ignoreElements, mapTo, startWith, zipWith } from '../../containers/ContainerLike.mjs';
import { toEnumerable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, arrayEquality } from '../../functions.mjs';
import { concatAllT, mapT, toReadonlyArray, concatT, keepT, zipT } from '../../ix/EnumerableLike.mjs';

var ContainerLikeTests = createDescribe("ContainerLike", createDescribe("concatMap", createTest("maps each value to a container and flattens", pipeLazy([0, 1], toEnumerable(), concatMap({ ...concatAllT, ...mapT }, pipeLazy([1, 2, 3], toEnumerable())), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), createDescribe("concatWith", createTest("concats two containers together", pipeLazy([0, 1], toEnumerable(), concatWith(concatT, pipe([2, 3, 4], toEnumerable())), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), createDescribe("endWith", createTest("appends the additional values to the end of the container", pipeLazy([0, 1], toEnumerable(), endWith({ ...concatT, fromArray: toEnumerable }, 2, 3, 4), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), createDescribe("ignoreElements", createTest("ignores all elements", pipeLazy([1, 2, 3], toEnumerable(), ignoreElements(keepT), toReadonlyArray(), expectArrayEquals(emptyReadonlyArray())))), createDescribe("mapTo", createTest("maps every value in the source to v", pipeLazy([1, 2, 3], toEnumerable(), mapTo(mapT, 2), toReadonlyArray(), expectArrayEquals([2, 2, 2])))), createDescribe("startWith", createTest("appends the additional values to the start of the container", pipeLazy([0, 1], toEnumerable(), startWith({ ...concatT, fromArray: toEnumerable }, 2, 3, 4), toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), createDescribe("zipWith", createTest("when inputs are different lengths", pipeLazy([1, 2, 3], toEnumerable(), zipWith(zipT, pipe([1, 2, 3, 4], toEnumerable())), toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality())))));

export { ContainerLikeTests as default };
