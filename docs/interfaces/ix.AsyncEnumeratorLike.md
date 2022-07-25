[Reactive-JS](../README.md) / [ix](../modules/ix.md) / AsyncEnumeratorLike

# Interface: AsyncEnumeratorLike<T\>

[ix](../modules/ix.md).AsyncEnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

- [`InteractiveSourceLike`](ix.InteractiveSourceLike.md)

- [`StreamLike`](streaming.StreamLike.md)<`void`, `T`\>

  ↳ **`AsyncEnumeratorLike`**

## Table of contents

### Properties

- [T](ix.AsyncEnumeratorLike.md#t)
- [TStatefulContainerState](ix.AsyncEnumeratorLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveSourceLike\_move]](ix.AsyncEnumeratorLike.md#[interactivesourcelike_move])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

StreamLike.T

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](rx.ObserverLike.md)<`T`\>

#### Overrides

StreamLike.TStatefulContainerState

## Methods

### [InteractiveSourceLike\_move]

▸ **[InteractiveSourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[InteractiveSourceLike](ix.InteractiveSourceLike.md).[[InteractiveSourceLike_move]](ix.InteractiveSourceLike.md#[interactivesourcelike_move])
