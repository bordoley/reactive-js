[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationEventHandlerLike

# Interface: AnimationEventHandlerLike<TEventType, T\>

[streaming](../modules/streaming.md).AnimationEventHandlerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEventType` | extends `Exclude`<`string` \| `symbol`, keyof [`DispatcherEventMap`](util.DispatcherEventMap.md)\> |
| `T` | `T` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`TEventType`, `boolean`\>

  ↳ **`AnimationEventHandlerLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](streaming.AnimationEventHandlerLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](streaming.StreamLike.md)<`TEventType`, `boolean`\> & [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`boolean`\> & [`EventSourceLike`](util.EventSourceLike.md)<{ `type`: ``"wait"``  } \| { `type`: ``"drain"``  } \| { `type`: ``"complete"``  } \| { `type`: `TEventType` ; `value`: `T`  }\>

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_TStream]](streaming.StreamableLike.md#[___streamablelike_tstream])
