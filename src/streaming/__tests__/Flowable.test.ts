import { testModule } from "../../__internal__/testing.js";
import {
  toObservableTests,
  toRunnableTests,
} from "../../__tests__/operators.js";
import { FlowableLike } from "../../streaming.js";
import * as Flowable from "../Flowable.js";

testModule(
  "Flowable",
  toObservableTests<FlowableLike>(Flowable),
  toRunnableTests<FlowableLike>(Flowable),
);
