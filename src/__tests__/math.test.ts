import {
  describe,
  expectEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { pipeLazy } from "../functions.js";
import { decrement, decrementBy, increment, incrementBy } from "../math.js";

testModule(
  "math",
  describe(
    "decrement",
    test(
      "decrements an integer by 1",
      pipeLazy(decrement(100), expectEquals(99)),
    ),
  ),
  describe(
    "decrementBy",
    test(
      "decrements an integer by the specified value",
      pipeLazy(100, decrementBy(10), expectEquals(90)),
    ),
  ),
  describe(
    "increment",
    test(
      "increments an integer by 1",
      pipeLazy(increment(100), expectEquals(101)),
    ),
  ),
  describe(
    "incrementBy",
    test(
      "increments an integer by the specified value",
      pipeLazy(100, incrementBy(10), expectEquals(110)),
    ),
  ),
);
