[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [ReadonlyMapContainer](../modules/containers.ReadonlyMapContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[ReadonlyMapContainer](../modules/containers.ReadonlyMapContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.KeyedContainers.TypeClass.md)<[`Type`](containers.ReadonlyMapContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Methods

- [empty](containers.ReadonlyMapContainer.TypeClass.md#empty)
- [fromEntries](containers.ReadonlyMapContainer.TypeClass.md#fromentries)
- [fromReadonlyArray](containers.ReadonlyMapContainer.TypeClass.md#fromreadonlyarray)

### Operator Methods

- [forEach](containers.ReadonlyMapContainer.TypeClass.md#foreach)
- [forEachWithKey](containers.ReadonlyMapContainer.TypeClass.md#foreachwithkey)
- [identity](containers.ReadonlyMapContainer.TypeClass.md#identity)
- [keep](containers.ReadonlyMapContainer.TypeClass.md#keep)
- [keepType](containers.ReadonlyMapContainer.TypeClass.md#keeptype)
- [keepWithKey](containers.ReadonlyMapContainer.TypeClass.md#keepwithkey)
- [map](containers.ReadonlyMapContainer.TypeClass.md#map)
- [mapWithKey](containers.ReadonlyMapContainer.TypeClass.md#mapwithkey)

### Transform Methods

- [entries](containers.ReadonlyMapContainer.TypeClass.md#entries)
- [keySet](containers.ReadonlyMapContainer.TypeClass.md#keyset)
- [keys](containers.ReadonlyMapContainer.TypeClass.md#keys)
- [reduce](containers.ReadonlyMapContainer.TypeClass.md#reduce)
- [reduceWithKey](containers.ReadonlyMapContainer.TypeClass.md#reducewithkey)
- [toReadonlyArray](containers.ReadonlyMapContainer.TypeClass.md#toreadonlyarray)
- [values](containers.ReadonlyMapContainer.TypeClass.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): `ReadonlyMap`<`TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

`ReadonlyMap`<`TKey`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[empty](containers.KeyedContainers.TypeClass.md#empty)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[fromEntries](containers.KeyedContainers.TypeClass.md#fromentries)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], `ReadonlyMap`<`TKey`, `T`\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[fromReadonlyArray](containers.KeyedContainers.TypeClass.md#fromreadonlyarray)

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[forEach](containers.KeyedContainers.TypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainers.Operator that applies the side effect function to each
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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[forEachWithKey](containers.KeyedContainers.TypeClass.md#foreachwithkey)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[identity](containers.KeyedContainers.TypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keep](containers.KeyedContainers.TypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keepType](containers.KeyedContainers.TypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
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

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keepWithKey](containers.KeyedContainers.TypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[map](containers.KeyedContainers.TypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `Object` = {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainers.md#operator)<[`Type`](containers.ReadonlyMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[mapWithKey](containers.KeyedContainers.TypeClass.md#mapwithkey)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[entries](containers.KeyedContainers.TypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keySet](containers.KeyedContainers.TypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[keys](containers.KeyedContainers.TypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, `TAcc`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[reduce](containers.KeyedContainers.TypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, `TAcc`\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[reduceWithKey](containers.KeyedContainers.TypeClass.md#reducewithkey)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = {} |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`TKey`, `T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[toReadonlyArray](containers.KeyedContainers.TypeClass.md#toreadonlyarray)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`ReadonlyMap`<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.KeyedContainers.TypeClass.md).[values](containers.KeyedContainers.TypeClass.md#values)
