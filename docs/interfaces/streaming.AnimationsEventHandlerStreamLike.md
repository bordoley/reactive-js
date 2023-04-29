[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationsEventHandlerStreamLike

# Interface: AnimationsEventHandlerStreamLike<TEventType, T, TKey\>

[streaming](../modules/streaming.md).AnimationsEventHandlerStreamLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | `TEventType` |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<`TEventType`, `boolean`\>

- [`AssociativeCollectionLike`](util.AssociativeCollectionLike.md)<`TKey`, [`Optional`](../modules/functions.md#optional)<[`EventSourceLike`](util.EventSourceLike.md)<{ `type`: `TEventType` ; `value`: `T`  }\>\>\>

  ↳ **`AnimationsEventHandlerStreamLike`**
