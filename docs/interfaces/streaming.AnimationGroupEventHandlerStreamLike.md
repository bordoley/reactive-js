[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationGroupEventHandlerStreamLike

# Interface: AnimationGroupEventHandlerStreamLike<TEventType, T, TKey\>

[streaming](../modules/streaming.md).AnimationGroupEventHandlerStreamLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | `TEventType` |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`StreamLike`](streaming.StreamLike.md)<`TEventType`, `boolean`\>

- [`DictionaryLike`](util.DictionaryLike.md)<`TKey`, [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: `TEventType` ; `value`: `T`  }\>\>

  ↳ **`AnimationGroupEventHandlerStreamLike`**
