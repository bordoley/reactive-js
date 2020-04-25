import {
  FlowableLike,
  FlowableSinkLike,
} from "@reactive-js/core/dist/js/flowable";

export interface BufferFlowableLike extends FlowableLike<Buffer> {}

export interface BufferFlowableSinkLike extends FlowableSinkLike<Buffer> {}
