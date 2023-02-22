import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { FlowableLike } from "../../streaming.js";
import * as Flowable from "../Flowable.js";

testModule("Flowable", toObservableTests<FlowableLike>(Flowable));
