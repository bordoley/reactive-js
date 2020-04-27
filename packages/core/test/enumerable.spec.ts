import {
  test as t,
  describe as d,
  expectEqual,
  expectNone,
  TestGroup,
  TestGroupType,
  expectArraysEqual,
} from "../src/testing";
import { fromArray, first, empty, keep, toArray } from "../src/enumerable";
import { pipe } from "../src/pipe";

const tests = d("enumerable",
  d("first",
    t("when enumerable is not empty", () => {
      const v = pipe(fromArray([1,2,3]), first);
      expectEqual(v, 1);
    }),
    t("when enumerable is empty", () => {
      const v = pipe(empty(), first);
      expectNone(v);
    }),
  ),
  t("keep", () => {
    const result = pipe(fromArray([4,8,10,7]), keep(x => x > 5), toArray) as number[];
    expectArraysEqual(result, [8, 10, 7]);
  }),
);


const toJestTest = (testGroup: TestGroup) => {
  if (testGroup.type === TestGroupType.Describe) {
    describe(testGroup.name, () => {
      const tests = testGroup.tests
      for(const testGroup of tests) {
        toJestTest(testGroup);
      }
    })
  } else {
    test(testGroup.name, testGroup.f);
  }
}

toJestTest(tests);