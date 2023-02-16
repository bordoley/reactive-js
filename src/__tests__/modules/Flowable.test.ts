import { FlowableLike } from "../../streaming";
import Flowable from "../../streaming/Flowable";
import { toObservableTests } from "../operators";
import { testModule } from "../testing";

testModule("Flowable", toObservableTests<FlowableLike>(Flowable));
