[Reactive-JS](../README.md) / [asyncEnumerator](../modules/asyncEnumerator.md) / AsyncEnumeratorLike

# Interface: AsyncEnumeratorLike<T\>

[asyncEnumerator](../modules/asyncEnumerator.md).AsyncEnumeratorLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

- [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

- [`StreamLike`](stream.StreamLike.md)<`void`, `T`\>

  ↳ **`AsyncEnumeratorLike`**

## Table of contents

### Properties

- [T](asyncEnumerator.AsyncEnumeratorLike.md#t)
- [TContainerOf](asyncEnumerator.AsyncEnumeratorLike.md#tcontainerof)
- [TLiftableContainerState](asyncEnumerator.AsyncEnumeratorLike.md#tliftablecontainerstate)

### Methods

- [move](asyncEnumerator.AsyncEnumeratorLike.md#move)

## Properties

### T

• **T**: `T`

#### Overrides

StreamLike.T

___

### TContainerOf

• `Readonly` **TContainerOf**: [`AsyncEnumeratorLike`](asyncEnumerator.AsyncEnumeratorLike.md)<`T`\>

#### Overrides

StreamLike.TContainerOf

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`Observer`](../classes/observer.Observer.md)<`T`\>

#### Overrides

StreamLike.TLiftableContainerState

## Methods

### move

▸ **move**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncEnumeratorLike`](asyncEnumerator.AsyncEnumeratorLike.md)<`T`\> |

#### Returns

`void`

#### Inherited from

[InteractiveSourceLike](interactiveSource.InteractiveSourceLike.md).[move](interactiveSource.InteractiveSourceLike.md#move)
