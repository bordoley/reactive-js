[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationGroupEventHandlerLike

# Interface: AnimationGroupEventHandlerLike<TEventType, T, TKey\>

[streaming](../modules/streaming.md).AnimationGroupEventHandlerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | `TEventType` |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`TEventType`, `boolean`\>

  ↳ **`AnimationGroupEventHandlerLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](streaming.AnimationGroupEventHandlerLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](streaming.StreamLike.md)<`TEventType`, `boolean`\> & [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`boolean`\> & [`DictionaryLike`](util.DictionaryLike.md)<`TKey`, [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: `TEventType` ; `value`: `T`  }\>\> & [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: ``"wait"``  } \| { `type`: ``"drain"``  } \| { `type`: ``"complete"``  } \| { `type`: ``"paused"``  } \| { `type`: ``"resumed"``  }\>

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_TStream]](streaming.StreamableLike.md#[___streamablelike_tstream])
