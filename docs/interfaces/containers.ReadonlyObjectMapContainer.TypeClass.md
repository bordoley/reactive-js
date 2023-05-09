[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [ReadonlyObjectMapContainer](../modules/containers.ReadonlyObjectMapContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[ReadonlyObjectMapContainer](../modules/containers.ReadonlyObjectMapContainer.md).TypeClass

## Hierarchy

- [`KeyedContainerTypeClass`](containers.KeyedContainerTypeClass.md)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Constructor Methods

- [empty](containers.ReadonlyObjectMapContainer.TypeClass.md#empty)
- [fromEntries](containers.ReadonlyObjectMapContainer.TypeClass.md#fromentries)
- [fromReadonlyArray](containers.ReadonlyObjectMapContainer.TypeClass.md#fromreadonlyarray)

### Operator Methods

- [forEach](containers.ReadonlyObjectMapContainer.TypeClass.md#foreach)
- [forEachWithKey](containers.ReadonlyObjectMapContainer.TypeClass.md#foreachwithkey)
- [identity](containers.ReadonlyObjectMapContainer.TypeClass.md#identity)
- [keep](containers.ReadonlyObjectMapContainer.TypeClass.md#keep)
- [keepType](containers.ReadonlyObjectMapContainer.TypeClass.md#keeptype)
- [keepWithKey](containers.ReadonlyObjectMapContainer.TypeClass.md#keepwithkey)
- [map](containers.ReadonlyObjectMapContainer.TypeClass.md#map)
- [mapWithKey](containers.ReadonlyObjectMapContainer.TypeClass.md#mapwithkey)

### Transform Methods

- [entries](containers.ReadonlyObjectMapContainer.TypeClass.md#entries)
- [keySet](containers.ReadonlyObjectMapContainer.TypeClass.md#keyset)
- [keys](containers.ReadonlyObjectMapContainer.TypeClass.md#keys)
- [reduce](containers.ReadonlyObjectMapContainer.TypeClass.md#reduce)
- [reduceWithKey](containers.ReadonlyObjectMapContainer.TypeClass.md#reducewithkey)
- [toReadonlyArray](containers.ReadonlyObjectMapContainer.TypeClass.md#toreadonlyarray)
- [values](containers.ReadonlyObjectMapContainer.TypeClass.md#values)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[empty](containers.KeyedContainerTypeClass.md#empty)

___

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>, [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[fromEntries](containers.KeyedContainerTypeClass.md#fromentries)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[fromReadonlyArray](containers.KeyedContainerTypeClass.md#fromreadonlyarray)

___

## Operator Methods

### forEach

▸ **forEach**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[forEach](containers.KeyedContainerTypeClass.md#foreach)

___

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a KeyedContainer.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[forEachWithKey](containers.KeyedContainerTypeClass.md#foreachwithkey)

___

### identity

▸ **identity**<`T`, `TKey`\>(): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[identity](containers.KeyedContainerTypeClass.md#identity)

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[keep](containers.KeyedContainerTypeClass.md#keep)

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](../modules/functions.md#typepredicate)<`TA`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[keepType](containers.KeyedContainerTypeClass.md#keeptype)

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](../modules/functions.md#function2)<`T`, `TKey`, `boolean`\> |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `T`, `T`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[keepWithKey](containers.KeyedContainerTypeClass.md#keepwithkey)

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[map](containers.KeyedContainerTypeClass.md#map)

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`): [`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](../modules/containers.KeyedContainer.md#operator)<[`Type`](containers.ReadonlyObjectMapContainer.Type.md), `TKey`, `TA`, `TB`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[mapWithKey](containers.KeyedContainerTypeClass.md#mapwithkey)

___

## Transform Methods

### entries

▸ **entries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[entries](containers.KeyedContainerTypeClass.md#entries)

___

### keySet

▸ **keySet**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, `ReadonlySet`<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[keySet](containers.KeyedContainerTypeClass.md#keyset)

___

### keys

▸ **keys**<`TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `unknown`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`TKey`\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[keys](containers.KeyedContainerTypeClass.md#keys)

___

### reduce

▸ **reduce**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[reduce](containers.KeyedContainerTypeClass.md#reduce)

___

### reduceWithKey

▸ **reduceWithKey**<`T`, `TAcc`, `TKey`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TAcc` | `TAcc` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Function3`](../modules/functions.md#function3)<`TAcc`, `T`, `TKey`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, `TAcc`\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[reduceWithKey](containers.KeyedContainerTypeClass.md#reducewithkey)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`NonNullable`<`Object`\>, `T`\>, readonly `T`[]\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[toReadonlyArray](containers.KeyedContainerTypeClass.md#toreadonlyarray)

___

### values

▸ **values**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyObjectMapLike`](../modules/types.md#readonlyobjectmaplike)<`any`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Inherited from

[KeyedContainerTypeClass](containers.KeyedContainerTypeClass.md).[values](containers.KeyedContainerTypeClass.md#values)
