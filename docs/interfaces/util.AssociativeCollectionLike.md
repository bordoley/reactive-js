[Reactive-JS](../README.md) / [util](../modules/util.md) / AssociativeCollectionLike

# Interface: AssociativeCollectionLike<TKey, T\>

[util](../modules/util.md).AssociativeCollectionLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |
| `T` | `unknown` |

## Hierarchy

- [`KeyedCollectionLike`](util.KeyedCollectionLike.md)<`TKey`, `T`\>

  ↳ **`AssociativeCollectionLike`**

  ↳↳ [`CacheStreamLike`](streaming.CacheStreamLike.md)

  ↳↳ [`AnimationGroupEventHandlerStreamLike`](streaming.AnimationGroupEventHandlerStreamLike.md)

  ↳↳ [`DictionaryLike`](util.DictionaryLike.md)

## Table of contents

### Properties

- [[\_\_\_AssociativeCollectionLike\_keys]](util.AssociativeCollectionLike.md#[___associativecollectionlike_keys])

### Methods

- [[\_\_\_KeyedCollectionLike\_get]](util.AssociativeCollectionLike.md#[___keyedcollectionlike_get])

## Properties

### [\_\_\_AssociativeCollectionLike\_keys]

• `Readonly` **[\_\_\_AssociativeCollectionLike\_keys]**: [`EnumeratorLike`](containers.EnumeratorLike.md)<`TKey`\>

## Methods

### [\_\_\_KeyedCollectionLike\_get]

▸ **[___KeyedCollectionLike_get]**(`index`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `TKey` |

#### Returns

`T`

#### Inherited from

[KeyedCollectionLike](util.KeyedCollectionLike.md).[[___KeyedCollectionLike_get]](util.KeyedCollectionLike.md#[___keyedcollectionlike_get])
