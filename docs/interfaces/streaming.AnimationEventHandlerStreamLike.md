[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationEventHandlerStreamLike

# Interface: AnimationEventHandlerStreamLike<TEvent, T, TKey\>

[streaming](../modules/streaming.md).AnimationEventHandlerStreamLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | `TEvent` |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<`TEvent`, `boolean`\>

- [`AssociativeCollectionLike`](util.AssociativeCollectionLike.md)<`TKey`, [`Optional`](../modules/functions.md#optional)<[`EventSourceLike`](util.EventSourceLike.md)<{ `event`: `TEvent` ; `value`: `T`  }\>\>\>

  ↳ **`AnimationEventHandlerStreamLike`**
