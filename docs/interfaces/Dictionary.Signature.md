[Reactive-JS](../README.md) / [Dictionary](../modules/Dictionary.md) / Signature

# Interface: Signature

[Dictionary](../modules/Dictionary.md).Signature

## Hierarchy

- [`KeyedContainerTypeClass`](type_classes.KeyedContainerTypeClass.md)<[`Type`](Dictionary.Type.md)\>

  ↳ **`Signature`**

## Table of contents

### Constructor Methods

- [empty](Dictionary.Signature.md#empty)
- [fromEntries](Dictionary.Signature.md#fromentries)
- [fromReadonlyArray](Dictionary.Signature.md#fromreadonlyarray)

### Operator Methods

- [forEach](Dictionary.Signature.md#foreach)
- [forEachWithKey](Dictionary.Signature.md#foreachwithkey)
- [identity](Dictionary.Signature.md#identity)
- [keep](Dictionary.Signature.md#keep)
- [keepType](Dictionary.Signature.md#keeptype)
- [keepWithKey](Dictionary.Signature.md#keepwithkey)
- [map](Dictionary.Signature.md#map)
- [mapWithKey](Dictionary.Signature.md#mapwithkey)

### Transform Methods

- [entries](Dictionary.Signature.md#entries)
- [keySet](Dictionary.Signature.md#keyset)
- [keys](Dictionary.Signature.md#keys)
- [reduce](Dictionary.Signature.md#reduce)
- [reduceWithKey](Dictionary.Signature.md#reducewithkey)
- [toReadonlyArray](Dictionary.Signature.md#toreadonlyarray)
- [values](Dictionary.Signature.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[empty](type_classes.KeyedContainerTypeClass.md#empty)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[fromEntries](type_classes.KeyedContainerTypeClass.md#fromentries)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[fromReadonlyArray](type_classes.KeyedContainerTypeClass.md#fromreadonlyarray)

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEach](type_classes.KeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[forEachWithKey](type_classes.KeyedContainerTypeClass.md#foreachwithkey)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[identity](type_classes.KeyedContainerTypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keep](type_classes.KeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keepType](type_classes.KeyedContainerTypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keepWithKey](type_classes.KeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[map](type_classes.KeyedContainerTypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`KeyedContainerOperator`](../modules/types.md#keyedcontaineroperator)<[`Type`](Dictionary.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[mapWithKey](type_classes.KeyedContainerTypeClass.md#mapwithkey)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[entries](type_classes.KeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keySet](type_classes.KeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[keys](type_classes.KeyedContainerTypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[reduce](type_classes.KeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[reduceWithKey](type_classes.KeyedContainerTypeClass.md#reducewithkey)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`TKey`, `T`\>, readonly `T`[]\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[toReadonlyArray](type_classes.KeyedContainerTypeClass.md#toreadonlyarray)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DictionaryLike`](types.DictionaryLike.md)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[KeyedContainerTypeClass](type_classes.KeyedContainerTypeClass.md).[values](type_classes.KeyedContainerTypeClass.md#values)
