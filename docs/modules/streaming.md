[Reactive-JS](../README.md) / streaming

# Module: streaming

## Table of contents

### Interfaces

- [FlowableLike](../interfaces/streaming.FlowableLike.md)
- [FlowableStreamLike](../interfaces/streaming.FlowableStreamLike.md)
- [StreamLike](../interfaces/streaming.StreamLike.md)
- [StreamableLike](../interfaces/streaming.StreamableLike.md)

### Type Aliases

- [FlowMode](streaming.md#flowmode)
- [ToFlowable](streaming.md#toflowable)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### ToFlowable

Ƭ **ToFlowable**<`C`, `TOptions`\>: [`Container`](containers.md#container)<`C`\> & { `toFlowable`: <T\>(`options?`: `TOptions`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TOptions` | `never` |
