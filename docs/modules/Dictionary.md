[Reactive-JS](../README.md) / Dictionary

# Module: Dictionary

## Table of contents

### Interfaces

- [DictionaryModule](../interfaces/Dictionary.DictionaryModule.md)

### Type Aliases

- [Signature](Dictionary.md#signature)
- [TKeyBase](Dictionary.md#tkeybase)
- [Type](Dictionary.md#type)

### Functor Functions

- [CreateModule](Dictionary.md#createmodule)

### Operator Functions

- [forEach](Dictionary.md#foreach)
- [forEachWithKey](Dictionary.md#foreachwithkey)

### Other Functions

- [fromReadonlyMap](Dictionary.md#fromreadonlymap)
- [fromReadonlyObjectMap](Dictionary.md#fromreadonlyobjectmap)
- [toDictionary](Dictionary.md#todictionary)

### Transform Functions

- [entries](Dictionary.md#entries)
- [keySet](Dictionary.md#keyset)
- [keys](Dictionary.md#keys)
- [reduce](Dictionary.md#reduce)
- [reduceWithKey](Dictionary.md#reducewithkey)
- [values](Dictionary.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`DictionaryModule`](../interfaces/Dictionary.DictionaryModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: `NonNullable`<[`Type`](Dictionary.md#type)[typeof [`KeyedContainer_TKey`](types.md#keyedcontainer_tkey)]\>

___

### Type

Ƭ **Type**<`TKey`\>: [`DictionaryContainer`](../interfaces/types.DictionaryContainer.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | `unknown` |

## Functor Functions

### CreateModule

▸ **CreateModule**<`TKey`\>(): [`DictionaryModule`](../interfaces/Dictionary.DictionaryModule.md)<[`Type`](Dictionary.md#type)<`TKey`\>, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`DictionaryModule`](../interfaces/Dictionary.DictionaryModule.md)<[`Type`](Dictionary.md#type)<`TKey`\>, `TKey`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

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
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

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
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](Dictionary.md#type)<`unknown`\>, `TKey`, `T`, `T`\>

___

## Other Functions

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](types.md#keyof)<[`ReadonlyObjectMapContainer`](../interfaces/types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](types.md#keyof)<[`ReadonlyObjectMapContainer`](../interfaces/types.ReadonlyObjectMapContainer.md)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\> : `never`

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](../interfaces/types.EnumeratorLike.md)<`T`\>\>
