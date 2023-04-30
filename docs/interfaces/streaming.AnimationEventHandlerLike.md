[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AnimationEventHandlerLike

# Interface: AnimationEventHandlerLike<TEventType, T\>

[streaming](../modules/streaming.md).AnimationEventHandlerLike

## Type parameters

| Name |
| :------ |
| `TEventType` |
| `T` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`TEventType`, `boolean`\>

  ↳ **`AnimationEventHandlerLike`**

## Table of contents

### Properties

- [[\_\_\_StreamableLike\_TStream]](streaming.AnimationEventHandlerLike.md#[___streamablelike_tstream])

## Properties

### [\_\_\_StreamableLike\_TStream]

• `Optional` `Readonly` **[\_\_\_StreamableLike\_TStream]**: [`StreamLike`](streaming.StreamLike.md)<`TEventType`, `boolean`, { `type`: `TEventType` ; `value`: `T`  } & { `type`: ``"complete"`` \| ``"wait"`` \| ``"drain"``  }\> & [`PauseableObservableLike`](rx.PauseableObservableLike.md)<`boolean`\>

#### Overrides

[StreamableLike](streaming.StreamableLike.md).[[___StreamableLike_TStream]](streaming.StreamableLike.md#[___streamablelike_tstream])
