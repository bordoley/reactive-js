import { createOnSink } from "../source";
import { createT } from "./createObservable";

export const onSubscribe = createOnSink(createT);
