[Reactive-JS](../README.md) / [Dictionary](../modules/Dictionary.md) / DictionaryModule

# Interface: DictionaryModule<TType, TKey\>

[Dictionary](../modules/Dictionary.md).DictionaryModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `TType` | extends [`Type`](../modules/Dictionary.md#type) = [`Type`](../modules/Dictionary.md#type) |
| `TKey` | extends [`TKeyBase`](../modules/Dictionary.md#tkeybase) = [`TKeyBase`](../modules/Dictionary.md#tkeybase) |

## Hierarchy

- [`AssociativeKeyedContainerTypeClass`](type_classes.AssociativeKeyedContainerTypeClass.md)<`TType`, `TKey`\>

  ↳ **`DictionaryModule`**

## Table of contents

### Operator Methods

- [forEach](Dictionary.DictionaryModule.md#foreach)
- [forEachWithKey](Dictionary.DictionaryModule.md#foreachwithkey)

### Other Methods

- [fromReadonlyMap](Dictionary.DictionaryModule.md#fromreadonlymap)
- [fromReadonlyObjectMap](Dictionary.DictionaryModule.md#fromreadonlyobjectmap)
- [toDictionary](Dictionary.DictionaryModule.md#todictionary)
- [toReadonlyMap](Dictionary.DictionaryModule.md#toreadonlymap)
- [toReadonlyObjectMap](Dictionary.DictionaryModule.md#toreadonlyobjectmap)

### Transform Methods

- [entries](Dictionary.DictionaryModule.md#entries)
- [keySet](Dictionary.DictionaryModule.md#keyset)
- [keys](Dictionary.DictionaryModule.md#keys)
- [reduce](Dictionary.DictionaryModule.md#reduce)
- [reduceWithKey](Dictionary.DictionaryModule.md#reducewithkey)
- [values](Dictionary.DictionaryModule.md#values)

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEach](type_classes.AssociativeKeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

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

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<`TType`, `TKey`, `T`, `T`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[forEachWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#foreachwithkey)

___

## Other Methods

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[fromReadonlyMap](type_classes.AssociativeKeyedContainerTypeClass.md#fromreadonlymap)

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>\> : `never`

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[fromReadonlyObjectMap](type_classes.AssociativeKeyedContainerTypeClass.md#fromreadonlyobjectmap)

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[toDictionary](type_classes.AssociativeKeyedContainerTypeClass.md#todictionary)

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[toReadonlyMap](type_classes.AssociativeKeyedContainerTypeClass.md#toreadonlymap)

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

`TKey` extends [`KeyOf`](../modules/types.md#keyof)<[`Type`](../modules/ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[toReadonlyObjectMap](type_classes.AssociativeKeyedContainerTypeClass.md#toreadonlyobjectmap)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[entries](type_classes.AssociativeKeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keySet](type_classes.AssociativeKeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[keys](type_classes.AssociativeKeyedContainerTypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduce](type_classes.AssociativeKeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `TKey`, `T`\>, `TAcc`\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[reduceWithKey](type_classes.AssociativeKeyedContainerTypeClass.md#reducewithkey)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`KeyedContainerOf`](../modules/types.md#keyedcontainerof)<`TType`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[AssociativeKeyedContainerTypeClass](type_classes.AssociativeKeyedContainerTypeClass.md).[values](type_classes.AssociativeKeyedContainerTypeClass.md#values)
