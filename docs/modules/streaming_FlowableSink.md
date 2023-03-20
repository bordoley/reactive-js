[Reactive-JS](../README.md) / streaming/FlowableSink

# Module: streaming/FlowableSink

## Table of contents

### Constructor Functions

- [create](streaming_FlowableSink.md#create)

## Constructor Functions

### create

▸ **create**<`T`\>(`op`): [`FlowableSinkLike`](../interfaces/streaming.FlowableSinkLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, [`FlowableState`](streaming.md#flowablestate) \| [`Updater`](functions.md#updater)<[`FlowableState`](streaming.md#flowablestate)\>\> |

#### Returns

[`FlowableSinkLike`](../interfaces/streaming.FlowableSinkLike.md)<`T`\>
