[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [KeyedContainers](../modules/containers.KeyedContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[KeyedContainers](../modules/containers.KeyedContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainers`](containers.KeyedContainers-1.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](containers.ReadonlyArrayContainer.TypeClass.md)

## Table of contents

### Constructor Methods

- [empty](containers.KeyedContainers.TypeClass.md#empty)
- [fromEntries](containers.KeyedContainers.TypeClass.md#fromentries)
- [fromReadonlyArray](containers.KeyedContainers.TypeClass.md#fromreadonlyarray)

### Operator Methods

- [forEach](containers.KeyedContainers.TypeClass.md#foreach)
- [forEachWithKey](containers.KeyedContainers.TypeClass.md#foreachwithkey)
- [identity](containers.KeyedContainers.TypeClass.md#identity)
- [keep](containers.KeyedContainers.TypeClass.md#keep)
- [keepType](containers.KeyedContainers.TypeClass.md#keeptype)
- [keepWithKey](containers.KeyedContainers.TypeClass.md#keepwithkey)
- [map](containers.KeyedContainers.TypeClass.md#map)
- [mapWithKey](containers.KeyedContainers.TypeClass.md#mapwithkey)

### Transform Methods

- [entries](containers.KeyedContainers.TypeClass.md#entries)
- [keySet](containers.KeyedContainers.TypeClass.md#keyset)
- [keys](containers.KeyedContainers.TypeClass.md#keys)
- [reduce](containers.KeyedContainers.TypeClass.md#reduce)
- [reduceWithKey](containers.KeyedContainers.TypeClass.md#reducewithkey)
- [toReadonlyArray](containers.KeyedContainers.TypeClass.md#toreadonlyarray)
- [values](containers.KeyedContainers.TypeClass.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>\>

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainers.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
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
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<`C`, `TKey`, `TA`, `TB`\>

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, `TAcc`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/containers.KeyedContainers.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `TKey`, `T`\>, readonly `T`[]\>

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.KeyedContainers.md#of)<`C`, `any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>
