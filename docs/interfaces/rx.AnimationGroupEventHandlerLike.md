[Reactive-JS](../README.md) / [rx](../modules/rx.md) / AnimationGroupEventHandlerLike

# Interface: AnimationGroupEventHandlerLike<TEventType, T, TKey\>

[rx](../modules/rx.md).AnimationGroupEventHandlerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | `TEventType` |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

## Hierarchy

- [`StreamableLike`](rx.StreamableLike.md)<`TEventType`, `boolean`\>

  ↳ **`AnimationGroupEventHandlerLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](rx.AnimationGroupEventHandlerLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](rx.StreamLike.md)<`TEventType`, `boolean`\> & [`PauseableLike`](util.PauseableLike.md) & [`DictionaryLike`](containers.DictionaryLike.md)<`TKey`, [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: `TEventType` ; `value`: `T`  }\>\>

#### Overrides

[StreamableLike](rx.StreamableLike.md).[[___StreamableLike_TStream]](rx.StreamableLike.md#[___streamablelike_tstream])
