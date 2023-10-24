[Reactive-JS](../README.md) / collections

# Module: collections

## Table of contents

### Collection Interfaces

- [Collection](../interfaces/collections.Collection.md)

### Module Interfaces

- [CollectionModule](../interfaces/collections.CollectionModule.md)
- [IndexedCollectionModule](../interfaces/collections.IndexedCollectionModule.md)

### Other Interfaces

- [AssociativeLike](../interfaces/collections.AssociativeLike.md)
- [CollectionLike](../interfaces/collections.CollectionLike.md)
- [DictionaryCollectionModule](../interfaces/collections.DictionaryCollectionModule.md)
- [DictionaryLike](../interfaces/collections.DictionaryLike.md)
- [EnumerableLike](../interfaces/collections.EnumerableLike.md)
- [EnumeratorLike](../interfaces/collections.EnumeratorLike.md)
- [IndexedLike](../interfaces/collections.IndexedLike.md)
- [KeyedLike](../interfaces/collections.KeyedLike.md)
- [MutableIndexedLike](../interfaces/collections.MutableIndexedLike.md)
- [MutableKeyedLike](../interfaces/collections.MutableKeyedLike.md)

### Collection Type Aliases

- [CollectionOf](collections.md#collectionof)
- [CollectionOperator](collections.md#collectionoperator)
- [KeyOf](collections.md#keyof)

### Other Type Aliases

- [ReadonlyObjectMapLike](collections.md#readonlyobjectmaplike)

### Variables

- [AssociativeLike\_keys](collections.md#associativelike_keys)
- [CollectionLike\_count](collections.md#collectionlike_count)
- [Collection\_T](collections.md#collection_t)
- [Collection\_TKey](collections.md#collection_tkey)
- [Collection\_type](collections.md#collection_type)
- [EnumerableLike\_enumerate](collections.md#enumerablelike_enumerate)
- [EnumeratorLike\_current](collections.md#enumeratorlike_current)
- [EnumeratorLike\_hasCurrent](collections.md#enumeratorlike_hascurrent)
- [EnumeratorLike\_isCompleted](collections.md#enumeratorlike_iscompleted)
- [EnumeratorLike\_move](collections.md#enumeratorlike_move)
- [KeyedLike\_get](collections.md#keyedlike_get)
- [MutableKeyedLike\_set](collections.md#mutablekeyedlike_set)

## Collection Type Aliases

### CollectionOf

Ƭ **CollectionOf**<`C`, `T`, `TKey`\>: `C` extends { `[Collection_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[Collection_TKey]`: `TKey` ; `[Collection_T]`: `T`  }[typeof [`Collection_type`](collections.md#collection_type)]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](../interfaces/collections.Collection.md) |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### CollectionOperator

Ƭ **CollectionOperator**<`C`, `TA`, `TB`, `TKey`\>: [`Function1`](functions.md#function1)<[`CollectionOf`](collections.md#collectionof)<`C`, `TA`, `TKey`\>, [`CollectionOf`](collections.md#collectionof)<`C`, `TB`, `TKey`\>\>

Utility type for a generic operator function that transforms a Collection's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](../interfaces/collections.Collection.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### KeyOf

Ƭ **KeyOf**<`C`\>: `NonNullable`<`C`[typeof [`Collection_TKey`](collections.md#collection_tkey)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Collection`](../interfaces/collections.Collection.md) |

___

## Other Type Aliases

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

### Collection\_T

• `Const` **Collection\_T**: unique `symbol`

___

### Collection\_TKey

• `Const` **Collection\_TKey**: unique `symbol`

___

### Collection\_type

• `Const` **Collection\_type**: unique `symbol`

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

### KeyedLike\_get

• `Const` **KeyedLike\_get**: unique `symbol`

___

### MutableKeyedLike\_set

• `Const` **MutableKeyedLike\_set**: unique `symbol`
