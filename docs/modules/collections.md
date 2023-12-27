[Reactive-JS](../README.md) / collections

# Module: collections

## Table of contents

### Interfaces

- [AssociativeLike](../interfaces/collections.AssociativeLike.md)
- [CollectionLike](../interfaces/collections.CollectionLike.md)
- [DictionaryCollectionModule](../interfaces/collections.DictionaryCollectionModule.md)
- [DictionaryLike](../interfaces/collections.DictionaryLike.md)
- [EnumerableLike](../interfaces/collections.EnumerableLike.md)
- [EnumeratorLike](../interfaces/collections.EnumeratorLike.md)
- [KeyedCollection](../interfaces/collections.KeyedCollection.md)
- [KeyedCollectionModule](../interfaces/collections.KeyedCollectionModule.md)
- [KeyedLike](../interfaces/collections.KeyedLike.md)

### Type Aliases

- [KeyOf](collections.md#keyof)
- [KeyedCollectionOf](collections.md#keyedcollectionof)
- [KeyedCollectionOperator](collections.md#keyedcollectionoperator)
- [ReadonlyObjectMapLike](collections.md#readonlyobjectmaplike)

### Variables

- [AssociativeLike\_keys](collections.md#associativelike_keys)
- [CollectionLike\_count](collections.md#collectionlike_count)
- [EnumerableLike\_enumerate](collections.md#enumerablelike_enumerate)
- [EnumeratorLike\_current](collections.md#enumeratorlike_current)
- [EnumeratorLike\_hasCurrent](collections.md#enumeratorlike_hascurrent)
- [EnumeratorLike\_isCompleted](collections.md#enumeratorlike_iscompleted)
- [EnumeratorLike\_move](collections.md#enumeratorlike_move)
- [KeyedCollection\_T](collections.md#keyedcollection_t)
- [KeyedCollection\_TKey](collections.md#keyedcollection_tkey)
- [KeyedCollection\_type](collections.md#keyedcollection_type)
- [KeyedLike\_get](collections.md#keyedlike_get)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `NonNullable`<`C`[typeof [`KeyedCollection_TKey`](collections.md#keyedcollection_tkey)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedCollection`](../interfaces/collections.KeyedCollection.md) |

___

### KeyedCollectionOf

Ƭ **KeyedCollectionOf**<`C`, `T`, `TKey`\>: `C` extends { `[KeyedCollection_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[KeyedCollection_TKey]`: `TKey` ; `[KeyedCollection_T]`: `T`  }[typeof [`KeyedCollection_type`](collections.md#keyedcollection_type)]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedCollection`](../interfaces/collections.KeyedCollection.md) |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### KeyedCollectionOperator

Ƭ **KeyedCollectionOperator**<`C`, `TA`, `TB`, `TKey`\>: [`Function1`](functions.md#function1)<[`KeyedCollectionOf`](collections.md#keyedcollectionof)<`C`, `TA`, `TKey`\>, [`KeyedCollectionOf`](collections.md#keyedcollectionof)<`C`, `TB`, `TKey`\>\>

Utility type for a generic operator function that transforms a Collection's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedCollection`](../interfaces/collections.KeyedCollection.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### ReadonlyObjectMapLike

Ƭ **ReadonlyObjectMapLike**<`TKey`, `T`\>: { readonly [P in TKey]?: T }

**`No Inherit Doc`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `string` = `string` |
| `T` | `unknown` |

## Variables

### AssociativeLike\_keys

• `Const` **AssociativeLike\_keys**: unique `symbol`

___

### CollectionLike\_count

• `Const` **CollectionLike\_count**: unique `symbol`

___

### EnumerableLike\_enumerate

• `Const` **EnumerableLike\_enumerate**: unique `symbol`

___

### EnumeratorLike\_current

• `Const` **EnumeratorLike\_current**: unique `symbol`

___

### EnumeratorLike\_hasCurrent

• `Const` **EnumeratorLike\_hasCurrent**: unique `symbol`

___

### EnumeratorLike\_isCompleted

• `Const` **EnumeratorLike\_isCompleted**: unique `symbol`

___

### EnumeratorLike\_move

• `Const` **EnumeratorLike\_move**: unique `symbol`

___

### KeyedCollection\_T

• `Const` **KeyedCollection\_T**: unique `symbol`

___

### KeyedCollection\_TKey

• `Const` **KeyedCollection\_TKey**: unique `symbol`

___

### KeyedCollection\_type

• `Const` **KeyedCollection\_type**: unique `symbol`

___

### KeyedLike\_get

• `Const` **KeyedLike\_get**: unique `symbol`
