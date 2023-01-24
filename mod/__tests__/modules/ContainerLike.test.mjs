/// <reference types="./ContainerLike.test.d.ts" />
import { concatMap, concatWith, endWith, genMap, ignoreElements, mapTo, startWith, zipWith } from '../../containers/ContainerLike.mjs';
import { empty } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, pipe, none, arrayEquality } from '../../functions.mjs';
import { fromArray, concatAll, map, toReadonlyArray, concat, fromIterable, keep, zip } from '../../ix/EnumerableLike.mjs';
import { testModule, describe as createDescribe, test as createTest, expectArrayEquals } from '../testing.mjs';

testModule("ContainerLike", createDescribe("concatMap", createTest("maps each value to a container and flattens", pipeLazy([0, 1], fromArray(), concatMap({ concatAll, map }, pipeLazy([1, 2, 3], fromArray())), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), createDescribe("concatWith", createTest("concats two containers together", pipeLazy([0, 1], fromArray(), concatWith({ concat }, pipe([2, 3, 4], fromArray())), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), createDescribe("endWith", createTest("appends the additional values to the end of the container", pipeLazy([0, 1], fromArray(), endWith({ concat, fromArray }, 2, 3, 4), toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), createDescribe("genMap", createTest("maps the incoming value with the inline generator function", pipeLazy([none, none], fromArray(), genMap({ fromIterable, concatAll, map }, function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), createDescribe("ignoreElements", createTest("ignores all elements", pipeLazy([1, 2, 3], fromArray(), ignoreElements({ keep }), toReadonlyArray(), expectArrayEquals(empty())))), createDescribe("mapTo", createTest("maps every value in the source to v", pipeLazy([1, 2, 3], fromArray(), mapTo({ map }, 2), toReadonlyArray(), expectArrayEquals([2, 2, 2])))), createDescribe("startWith", createTest("appends the additional values to the start of the container", pipeLazy([0, 1], fromArray(), startWith({ concat, fromArray }, 2, 3, 4), toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))), createDescribe("zipWith", createTest("when inputs are different lengths", pipeLazy([1, 2, 3], fromArray(), zipWith({ zip }, pipe([1, 2, 3, 4], fromArray())), toReadonlyArray(), expectArrayEquals([
    [1, 1],
    [2, 2],
    [3, 3],
], arrayEquality())))));
