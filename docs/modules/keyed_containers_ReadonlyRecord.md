[Reactive-JS](../README.md) / keyed-containers/ReadonlyRecord

# Module: keyed-containers/ReadonlyRecord

## Table of contents

### Constructor Functions

- [empty](keyed_containers_ReadonlyRecord.md#empty)

### Operator Functions

- [forEachWithKey](keyed_containers_ReadonlyRecord.md#foreachwithkey)
- [keep](keyed_containers_ReadonlyRecord.md#keep)
- [keepType](keyed_containers_ReadonlyRecord.md#keeptype)
- [keepWithKey](keyed_containers_ReadonlyRecord.md#keepwithkey)
- [map](keyed_containers_ReadonlyRecord.md#map)
- [mapWithKey](keyed_containers_ReadonlyRecord.md#mapwithkey)

### Transform Functions

- [entries](keyed_containers_ReadonlyRecord.md#entries)
- [keySet](keyed_containers_ReadonlyRecord.md#keyset)
- [values](keyed_containers_ReadonlyRecord.md#values)

## Constructor Functions

### empty

▸ **empty**<`T`, `TKey`\>(`options?`): `Readonly`<`Record`<`NonNullable`<`Object`\>, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md)

Return an ContainerLike that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

`Readonly`<`Record`<`NonNullable`<`Object`\>, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md)

___

## Operator Functions

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

Returns a KeyedContainerOperator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](functions.md#sideeffect2)<`T`, `TKey`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

___

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

___

### keepType

▸ **keepType**<`TA`, `TB`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`TypePredicate`](functions.md#typepredicate)<`TA`, `TB`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

___

### keepWithKey

▸ **keepWithKey**<`T`, `TKey`\>(`predicate`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Function2`](functions.md#function2)<`T`, `TKey`, `boolean`\> |
| `options?` | `undefined` |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`, `TKey`\>(`selector`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

___

### mapWithKey

▸ **mapWithKey**<`TA`, `TB`, `TKey`\>(`selector`, `options?`): [`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

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
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function2`](functions.md#function2)<`TA`, `TKey`, `TB`\> | A pure map function that is applied each value emitted by the source |
| `options?` | `undefined` | - |

#### Returns

[`KeyedContainerOperator`](keyed_containers.md#keyedcontaineroperator)<[`ReadonlyRecordLike`](keyed_containers.md#readonlyrecordlike)<`unknown`, `string`\>, `TKey`, `TA`, `TB`\>

___

## Transform Functions

### entries

▸ **entries**<`T`, `TKey`\>(`options?`): [`Function1`](functions.md#function1)<`Readonly`<`Record`<`NonNullable`<`Object`\>, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Readonly`<`Record`<`NonNullable`<`Object`\>, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<[`TKey`, `T`]\>\>

___

### keySet

▸ **keySet**<`TKey`\>(`options?`): [`Function1`](functions.md#function1)<`Readonly`<`Record`<`NonNullable`<`Object`\>, `unknown`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`ReadonlySetLike`](../interfaces/containers.ReadonlySetLike.md)<`TKey`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> = `NonNullable`<`undefined` \| `string` \| `number` \| `symbol`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Readonly`<`Record`<`NonNullable`<`Object`\>, `unknown`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`ReadonlySetLike`](../interfaces/containers.ReadonlySetLike.md)<`TKey`\>\>

___

### values

▸ **values**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`Readonly`<`Record`<`any`, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<`Readonly`<`Record`<`any`, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md), [`EnumeratorLike`](../interfaces/containers.EnumeratorLike.md)<`T`\>\>
