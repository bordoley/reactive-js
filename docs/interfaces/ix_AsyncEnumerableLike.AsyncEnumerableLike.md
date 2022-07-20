[Reactive-JS](../README.md) / [ix/AsyncEnumerableLike](../modules/ix_AsyncEnumerableLike.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[ix/AsyncEnumerableLike](../modules/ix_AsyncEnumerableLike.md).AsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming_StreamableLike.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)<`T`\>\>

- [`InteractiveContainerLike`](ix_InteractiveContainerLike.InteractiveContainerLike.md)<`T`\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#t)
- [TContainerOf](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#tcontainerof)
- [TCtx](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#tctx)
- [TStatefulContainerState](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix_AsyncEnumerableLike.AsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[T](ix_InteractiveContainerLike.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`AsyncEnumerableLike`](ix_AsyncEnumerableLike.AsyncEnumerableLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TContainerOf](ix_InteractiveContainerLike.InteractiveContainerLike.md#tcontainerof)

___

### TCtx

• `Optional` `Readonly` **TCtx**: [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TCtx](ix_InteractiveContainerLike.InteractiveContainerLike.md#tctx)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)<`T`\>

#### Overrides

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[TStatefulContainerState](ix_InteractiveContainerLike.InteractiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`_`): [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `undefined` \| [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md) |

#### Returns

[`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

#### Inherited from

[InteractiveContainerLike](ix_InteractiveContainerLike.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix_InteractiveContainerLike.InteractiveContainerLike.md#[interactivecontainerlike_interact])

___

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[StreamableLike](streaming_StreamableLike.StreamableLike.md).[[StreamableLike_stream]](streaming_StreamableLike.StreamableLike.md#[streamablelike_stream])
