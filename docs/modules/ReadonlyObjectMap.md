[Reactive-JS](../README.md) / ReadonlyObjectMap

# Module: ReadonlyObjectMap

## Table of contents

### Container Interfaces

- [ReadonlyObjectMapContainer](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapContainer.md)

### Module Interfaces

- [ReadonlyObjectMapModule](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)

### Type Aliases

- [Signature](ReadonlyObjectMap.md#signature)
- [TKeyBase](ReadonlyObjectMap.md#tkeybase)
- [Type](ReadonlyObjectMap.md#type)

### Constructor Functions

- [empty](ReadonlyObjectMap.md#empty)
- [fromDictionary](ReadonlyObjectMap.md#fromdictionary)
- [fromEntries](ReadonlyObjectMap.md#fromentries)
- [fromReadonlyMap](ReadonlyObjectMap.md#fromreadonlymap)
- [fromReadonlyObjectMap](ReadonlyObjectMap.md#fromreadonlyobjectmap)

### Functor Functions

- [CreateModule](ReadonlyObjectMap.md#createmodule)

### Operator Functions

- [forEach](ReadonlyObjectMap.md#foreach)
- [forEachWithKey](ReadonlyObjectMap.md#foreachwithkey)
- [keep](ReadonlyObjectMap.md#keep)
- [keepType](ReadonlyObjectMap.md#keeptype)
- [keepWithKey](ReadonlyObjectMap.md#keepwithkey)
- [map](ReadonlyObjectMap.md#map)
- [mapTo](ReadonlyObjectMap.md#mapto)
- [mapWithKey](ReadonlyObjectMap.md#mapwithkey)

### Transform Functions

- [entries](ReadonlyObjectMap.md#entries)
- [keySet](ReadonlyObjectMap.md#keyset)
- [keys](ReadonlyObjectMap.md#keys)
- [reduce](ReadonlyObjectMap.md#reduce)
- [reduceWithKey](ReadonlyObjectMap.md#reducewithkey)
- [toDictionary](ReadonlyObjectMap.md#todictionary)
- [toReadonlyMap](ReadonlyObjectMap.md#toreadonlymap)
- [toReadonlyObjectMap](ReadonlyObjectMap.md#toreadonlyobjectmap)
- [values](ReadonlyObjectMap.md#values)

## Type Aliases

### Signature

Ƭ **Signature**: [`ReadonlyObjectMapModule`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)

___

### TKeyBase

Ƭ **TKeyBase**: [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)\>

___

### Type

Ƭ **Type**<`TKey`\>: [`ReadonlyObjectMapContainer`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapContainer.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `symbol` \| `number` \| `string` |

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

___

### fromDictionary

▸ **fromDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

`TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\> : `never`

___

## Functor Functions

### CreateModule

▸ **CreateModule**<`TKey`\>(): [`ReadonlyObjectMapModule`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)<`TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`ReadonlyObjectMapModule`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)<`TKey`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `T`, `T`, `TKey`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

___

### mapTo

▸ **mapTo**<`TA`, `TB`\>(`value`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TB` |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\>\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

Returns a ContainerOperator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`ContainerOperator`](types.md#containeroperator)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>, `TA`, `TB`, `TKey`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

___

### toDictionary

▸ **toDictionary**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

`TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

___

### values

▸ **values**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> = [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<[`TKeyBase`](ReadonlyObjectMap.md#tkeybase)\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>
