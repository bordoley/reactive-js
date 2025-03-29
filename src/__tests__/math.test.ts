import {
  describe,
  expectEquals,
  test,
  testModule,
} from "../__internal__/testing.js";
import { pipeLazy } from "../functions.js";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  scale,
} from "../math.js";

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
  describe(
    "scale",
    test(
      "with a positive range",
      pipeLazy(0.5, scale(0, 100), expectEquals(50)),
    ),
    test(
      "with a negative range",
      pipeLazy(0.5, scale(-100, 0), expectEquals(-50)),
    ),
    test(
      "when source bounces past 1",
      pipeLazy(1.1, scale(0, 10), expectEquals(11)),
    ),
  ),
)();
