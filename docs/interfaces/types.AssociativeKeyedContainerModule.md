[Reactive-JS](../README.md) / [types](../modules/types.md) / AssociativeKeyedContainerModule

# Interface: AssociativeKeyedContainerModule<C, TKeyBase\>

[types](../modules/types.md).AssociativeKeyedContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](types.KeyedContainer.md) |
| `TKeyBase` | extends [`KeyOf`](../modules/types.md#keyof)<`C`\> = [`KeyOf`](../modules/types.md#keyof)<`C`\> |

## Hierarchy

- [`KeyedContainerModule`](types.KeyedContainerModule.md)<`C`, `TKeyBase`\>

  ↳ **`AssociativeKeyedContainerModule`**

  ↳↳ [`DictionaryModule`](Dictionary.DictionaryModule.md)

  ↳↳ [`ReadonlyMapModule`](ReadonlyMap.ReadonlyMapModule.md)

  ↳↳ [`ReadonlyObjectMapModule`](ReadonlyObjectMap.ReadonlyObjectMapModule.md)

## Table of contents

### Constructor Methods

- [fromEntries](types.AssociativeKeyedContainerModule.md#fromentries)
- [fromReadonlyMap](types.AssociativeKeyedContainerModule.md#fromreadonlymap)
- [fromReadonlyObjectMap](types.AssociativeKeyedContainerModule.md#fromreadonlyobjectmap)

### Other Methods

- [fromDictionary](types.AssociativeKeyedContainerModule.md#fromdictionary)

### Transform Methods

- [keySet](types.AssociativeKeyedContainerModule.md#keyset)
- [keys](types.AssociativeKeyedContainerModule.md#keys)
- [toDictionary](types.AssociativeKeyedContainerModule.md#todictionary)
- [toReadonlyMap](types.AssociativeKeyedContainerModule.md#toreadonlymap)
- [toReadonlyObjectMap](types.AssociativeKeyedContainerModule.md#toreadonlyobjectmap)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`TKey`, `T`]\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

___

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\> : `never`

___

## Other Methods

### fromDictionary

▸ **fromDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>\>

___

## Transform Methods

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `unknown`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TKey`\>\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`C`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`
