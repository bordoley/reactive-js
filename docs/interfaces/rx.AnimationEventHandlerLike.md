[Reactive-JS](../README.md) / [rx](../modules/rx.md) / AnimationEventHandlerLike

# Interface: AnimationEventHandlerLike<TEventType, T\>

[rx](../modules/rx.md).AnimationEventHandlerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | extends `Exclude`<`string` \| `symbol`, keyof [`DispatcherEventMap`](util.DispatcherEventMap.md)\> |
| `T` | `T` |

## Hierarchy

- [`StreamableLike`](rx.StreamableLike.md)<`TEventType`, `boolean`\>

  ↳ **`AnimationEventHandlerLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](rx.AnimationEventHandlerLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](rx.StreamLike.md)<`TEventType`, `boolean`\> & [`PauseableLike`](util.PauseableLike.md) & [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: ``"wait"``  } \| { `type`: ``"drain"``  } \| { `type`: ``"complete"``  } \| { `type`: ``"paused"``  } \| { `type`: ``"resumed"``  } \| { `type`: `TEventType` ; `value`: `T`  }\>

#### Overrides

[StreamableLike](rx.StreamableLike.md).[[___StreamableLike_TStream]](rx.StreamableLike.md#[___streamablelike_tstream])
