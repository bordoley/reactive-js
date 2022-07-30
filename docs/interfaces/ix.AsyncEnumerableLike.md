[Reactive-JS](../README.md) / [ix](../modules/ix.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[ix](../modules/ix.md).AsyncEnumerableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StreamableLike`](streaming.StreamableLike.md)<`void`, `T`, [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>\>

- [`InteractiveContainerLike`](ix.InteractiveContainerLike.md)<[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>, [`SchedulerLike`](scheduling.SchedulerLike.md)\>

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](ix.AsyncEnumerableLike.md#t)
- [TContainerOf](ix.AsyncEnumerableLike.md#tcontainerof)
- [TStatefulContainerState](ix.AsyncEnumerableLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveContainerLike\_interact]](ix.AsyncEnumerableLike.md#[interactivecontainerlike_interact])
- [[StreamableLike\_stream]](ix.AsyncEnumerableLike.md#[streamablelike_stream])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[T](ix.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[TContainerOf](ix.InteractiveContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[TStatefulContainerState](ix.InteractiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [InteractiveContainerLike\_interact]

▸ **[InteractiveContainerLike_interact]**(`_`): [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`SchedulerLike`](scheduling.SchedulerLike.md) |

#### Returns

[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[InteractiveContainerLike](ix.InteractiveContainerLike.md).[[InteractiveContainerLike_interact]](ix.InteractiveContainerLike.md#[interactivecontainerlike_interact])

___

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): [`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumeratorLike`](streaming.AsyncEnumeratorLike.md)<`T`\>

#### Inherited from

[StreamableLike](streaming.StreamableLike.md).[[StreamableLike_stream]](streaming.StreamableLike.md#[streamablelike_stream])
