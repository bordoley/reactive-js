[Reactive-JS](../README.md) / stream

# Module: stream

## Table of contents

### Classes

- [AbstractDelegatingStream](../classes/stream.AbstractDelegatingStream.md)

### Interfaces

- [StreamLike](../interfaces/stream.StreamLike.md)

### Functions

- [createStream](stream.md#createstream)

## Functions

### createStream

▸ **createStream**<`TReq`, `T`\>(`op`, `scheduler`, `options?`): [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ObservableOperator`](observable.md#observableoperator)<`TReq`, `T`\> |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>
