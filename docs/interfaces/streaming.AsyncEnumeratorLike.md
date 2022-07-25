[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / AsyncEnumeratorLike

# Interface: AsyncEnumeratorLike<T\>

[streaming](../modules/streaming.md).AsyncEnumeratorLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SourceLike`](util.SourceLike.md)

- [`StreamLike`](streaming.StreamLike.md)<`void`, `T`\>

  ↳ **`AsyncEnumeratorLike`**

## Table of contents

### Properties

- [T](streaming.AsyncEnumeratorLike.md#t)
- [TStatefulContainerState](streaming.AsyncEnumeratorLike.md#tstatefulcontainerstate)

### Methods

- [[SourceLike\_move]](streaming.AsyncEnumeratorLike.md#[sourcelike_move])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

StreamLike.T

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`T`\>

#### Overrides

StreamLike.TStatefulContainerState

## Methods

### [SourceLike\_move]

▸ **[SourceLike_move]**(): `void`

#### Returns

`void`

#### Inherited from

[SourceLike](util.SourceLike.md).[[SourceLike_move]](util.SourceLike.md#[sourcelike_move])
