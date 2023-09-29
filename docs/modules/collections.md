[Reactive-JS](../README.md) / collections

# Module: collections

## Table of contents

### Container Interfaces

- [Container](../interfaces/collections.Container.md)

### Module Interfaces

- [CollectionModule](../interfaces/collections.CollectionModule.md)
- [IndexedCollectionModule](../interfaces/collections.IndexedCollectionModule.md)

### Other Interfaces

- [AssociativeCollectionLike](../interfaces/collections.AssociativeCollectionLike.md)
- [CollectionLike](../interfaces/collections.CollectionLike.md)
- [DictionaryLike](../interfaces/collections.DictionaryLike.md)
- [IndexedCollectionLike](../interfaces/collections.IndexedCollectionLike.md)
- [KeyedCollectionLike](../interfaces/collections.KeyedCollectionLike.md)
- [MutableIndexedCollectionLike](../interfaces/collections.MutableIndexedCollectionLike.md)
- [MutableKeyedCollectionLike](../interfaces/collections.MutableKeyedCollectionLike.md)

### Container Type Aliases

- [ContainerOf](collections.md#containerof)
- [ContainerOperator](collections.md#containeroperator)
- [KeyOf](collections.md#keyof)

### Other Type Aliases

- [ReadonlyObjectMapLike](collections.md#readonlyobjectmaplike)

### Variables

- [AssociativeCollectionLike\_keys](collections.md#associativecollectionlike_keys)
- [CollectionLike\_count](collections.md#collectionlike_count)
- [Container\_T](collections.md#container_t)
- [Container\_TKey](collections.md#container_tkey)
- [Container\_type](collections.md#container_type)
- [KeyedCollectionLike\_get](collections.md#keyedcollectionlike_get)
- [MutableKeyedCollectionLike\_set](collections.md#mutablekeyedcollectionlike_set)

## Container Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`, `TKey`\>: `C` extends { `[Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[Container_TKey]`: `TKey` ; `[Container_T]`: `T`  }[typeof [`Container_type`](collections.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/collections.Container.md) |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`, `TKey`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](collections.md#containerof)<`C`, `TA`, `TKey`\>, [`ContainerOf`](collections.md#containerof)<`C`, `TB`, `TKey`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/collections.Container.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](collections.md#keyof)<`C`\> = [`KeyOf`](collections.md#keyof)<`C`\> |

___

### KeyOf

Ƭ **KeyOf**<`C`\>: `NonNullable`<`C`[typeof [`Container_TKey`](collections.md#container_tkey)]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/collections.Container.md) |

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

### AssociativeCollectionLike\_keys

• `Const` **AssociativeCollectionLike\_keys**: unique `symbol`

___

### CollectionLike\_count

• `Const` **CollectionLike\_count**: unique `symbol`

___

### Container\_T

• `Const` **Container\_T**: unique `symbol`

___

### Container\_TKey

• `Const` **Container\_TKey**: unique `symbol`

___

### Container\_type

• `Const` **Container\_type**: unique `symbol`

___

### KeyedCollectionLike\_get

• `Const` **KeyedCollectionLike\_get**: unique `symbol`

___

### MutableKeyedCollectionLike\_set

• `Const` **MutableKeyedCollectionLike\_set**: unique `symbol`
