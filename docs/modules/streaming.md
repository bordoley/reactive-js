[Reactive-JS](../README.md) / streaming

# Module: streaming

## Table of contents

### Other Interfaces

- [StreamLike](../interfaces/streaming.StreamLike.md)

### Streamable Interfaces

- [AnimationEventHandlerLike](../interfaces/streaming.AnimationEventHandlerLike.md)
- [AnimationGroupEventHandlerLike](../interfaces/streaming.AnimationGroupEventHandlerLike.md)
- [CacheLike](../interfaces/streaming.CacheLike.md)
- [StreamableLike](../interfaces/streaming.StreamableLike.md)

### Type Aliases

- [DisposableStreamOf](streaming.md#disposablestreamof)
- [StreamOf](streaming.md#streamof)

## Type Aliases

### DisposableStreamOf

Ƭ **DisposableStreamOf**<`TStreamable`\>: [`StreamOf`](streaming.md#streamof)<`TStreamable`\> & [`DisposableLike`](../interfaces/util.DisposableLike.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/streaming.StreamableLike.md) |

___

### StreamOf

Ƭ **StreamOf**<`TStreamable`\>: `NonNullable`<`TStreamable`[typeof `StreamableLike_TStream`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TStreamable` | extends [`StreamableLike`](../interfaces/streaming.StreamableLike.md) |
