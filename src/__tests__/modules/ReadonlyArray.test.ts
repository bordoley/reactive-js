import { ReadonlyArrayLike } from "../../containers";
import ReadonlyArray from "../../containers/ReadonlyArray";
import {
  forEachTests,
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "ReadonlyArray",
  forEachTests(ReadonlyArray),
  fromReadonlyArrayTests<ReadonlyArrayLike>(ReadonlyArray),
  keepTests(ReadonlyArray),
  mapTests(ReadonlyArray),
);
