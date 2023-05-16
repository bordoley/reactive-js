[Reactive-JS](../README.md) / [Dictionary](../modules/Dictionary.md) / DictionaryModule

# Interface: DictionaryModule<TKey\>

[Dictionary](../modules/Dictionary.md).DictionaryModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](../modules/Dictionary.md#tkeybase) = [`TKeyBase`](../modules/Dictionary.md#tkeybase) |

## Table of contents

### Operator Methods

- [forEach](Dictionary.DictionaryModule.md#foreach)
- [forEachWithKey](Dictionary.DictionaryModule.md#foreachwithkey)

### Transform Methods

- [entries](Dictionary.DictionaryModule.md#entries)
- [keySet](Dictionary.DictionaryModule.md#keyset)
- [keys](Dictionary.DictionaryModule.md#keys)
- [values](Dictionary.DictionaryModule.md#values)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](../modules/Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](../modules/Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](../modules/Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](../modules/Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>
