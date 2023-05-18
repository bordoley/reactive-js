[Reactive-JS](../README.md) / ReadonlyObjectMap

# Module: ReadonlyObjectMap

## Table of contents

### Container Interfaces

- [ReadonlyObjectMapContainer](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapContainer.md)

### Other Interfaces

- [ReadonlyObjectMapModule](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)

### Type Aliases

- [Signature](ReadonlyObjectMap.md#signature)
- [TKeyBase](ReadonlyObjectMap.md#tkeybase)
- [Type](ReadonlyObjectMap.md#type)

### Constructor Functions

- [empty](ReadonlyObjectMap.md#empty)
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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromReadonlyMap

▸ **fromReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

___

### fromReadonlyObjectMap

▸ **fromReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

`TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\> : `never`

___

## Functor Functions

### CreateModule

▸ **CreateModule**<`TKey`\>(): [`ReadonlyObjectMapModule`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)<[`Type`](ReadonlyObjectMap.md#type)<`TKey`\>, `TKey`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`ReadonlyObjectMapModule`](../interfaces/ReadonlyObjectMap.ReadonlyObjectMapModule.md)<[`Type`](ReadonlyObjectMap.md#type)<`TKey`\>, `TKey`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](types.md#keyedcontaineroperator)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>, `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

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
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

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
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`DictionaryLike`](../interfaces/types.DictionaryLike.md)<`TKey`, `T`\>\>

___

### toReadonlyMap

▸ **toReadonlyMap**<`T`, `TKey`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `ReadonlyMap`<`TKey`, `T`\>\>

___

### toReadonlyObjectMap

▸ **toReadonlyObjectMap**<`T`, `TKey`\>(): `TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends [`TKeyBase`](ReadonlyObjectMap.md#tkeybase) |

#### Returns

`TKey` extends [`KeyOf`](types.md#keyof)<[`Type`](ReadonlyObjectMap.md#type)<`string` \| `number` \| `symbol`\>\> ? [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`TKey`, `T`\>\> : `never`

___

### values

▸ **values**<`T`\>(): [`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ReadonlyObjectMapLike`](types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorFactoryLike`](types.md#enumeratorfactorylike)<`T`\>\>
