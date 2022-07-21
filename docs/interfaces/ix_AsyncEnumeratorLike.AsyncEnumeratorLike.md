[Reactive-JS](../README.md) / [ix/AsyncEnumeratorLike](../modules/ix_AsyncEnumeratorLike.md) / AsyncEnumeratorLike

# Interface: AsyncEnumeratorLike<T\>

[ix/AsyncEnumeratorLike](../modules/ix_AsyncEnumeratorLike.md).AsyncEnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util_DisposableLike.DisposableLike.md)

- [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

- [`StreamLike`](streaming_StreamLike.StreamLike.md)<`void`, `T`\>

  ↳ **`AsyncEnumeratorLike`**

## Table of contents

### Properties

- [T](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md#t)
- [TStatefulContainerState](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md#tstatefulcontainerstate)

### Methods

- [[InteractiveSourceLike\_move]](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md#[interactivesourcelike_move])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

StreamLike.T

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](rx_ObserverLike.ObserverLike.md)<`T`\>

#### Overrides

StreamLike.TStatefulContainerState

## Methods

### [InteractiveSourceLike\_move]

▸ **[InteractiveSourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[InteractiveSourceLike](ix_InteractiveSourceLike.InteractiveSourceLike.md).[[InteractiveSourceLike_move]](ix_InteractiveSourceLike.InteractiveSourceLike.md#[interactivesourcelike_move])
