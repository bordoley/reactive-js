import { FlowableLike } from "../../streaming.js";
import Flowable from "../../streaming/Flowable.js";
import { toObservableTests } from "../operators.js";
import { testModule } from "../testing.js";

testModule("Flowable", toObservableTests<FlowableLike>(Flowable));
