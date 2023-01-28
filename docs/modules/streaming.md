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
- [FromFlowable](streaming.md#fromflowable)
- [ToFlowable](streaming.md#toflowable)

### Variables

- [FlowMode\_pause](streaming.md#flowmode_pause)
- [FlowMode\_resume](streaming.md#flowmode_resume)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: typeof [`FlowMode_resume`](streaming.md#flowmode_resume) \| typeof [`FlowMode_pause`](streaming.md#flowmode_pause)

___

### FromFlowable

Ƭ **FromFlowable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromFlowable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToFlowable

Ƭ **ToFlowable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toFlowable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

## Variables

### FlowMode\_pause

• `Const` **FlowMode\_pause**: unique `symbol`

___

### FlowMode\_resume

• `Const` **FlowMode\_resume**: unique `symbol`
