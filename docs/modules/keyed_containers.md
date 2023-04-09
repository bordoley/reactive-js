[Reactive-JS](../README.md) / keyed-containers

# Module: keyed-containers

## Table of contents

### Container Interfaces

- [KeyedContainerLike](../interfaces/keyed_containers.KeyedContainerLike.md)
- [ReadonlyArrayLike](../interfaces/keyed_containers.ReadonlyArrayLike.md)
- [ReadonlyMapLike](../interfaces/keyed_containers.ReadonlyMapLike.md)

### Other Interfaces

- [ReadonlyRecordContainerLike](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md)

### TypeClass Interfaces

- [Empty](../interfaces/keyed_containers.Empty.md)
- [Entries](../interfaces/keyed_containers.Entries.md)
- [ForEach](../interfaces/keyed_containers.ForEach.md)
- [ForEachWithKey](../interfaces/keyed_containers.ForEachWithKey.md)
- [FromEntries](../interfaces/keyed_containers.FromEntries.md)
- [FromReadonlyArray](../interfaces/keyed_containers.FromReadonlyArray.md)
- [Identity](../interfaces/keyed_containers.Identity.md)
- [Keep](../interfaces/keyed_containers.Keep.md)
- [KeepType](../interfaces/keyed_containers.KeepType.md)
- [KeepWithKey](../interfaces/keyed_containers.KeepWithKey.md)
- [KeySet](../interfaces/keyed_containers.KeySet.md)
- [Keys](../interfaces/keyed_containers.Keys.md)
- [Map](../interfaces/keyed_containers.Map.md)
- [MapWithKey](../interfaces/keyed_containers.MapWithKey.md)
- [ToReadonlyArray](../interfaces/keyed_containers.ToReadonlyArray.md)
- [Values](../interfaces/keyed_containers.Values.md)

### Container Type Aliases

- [ReadonlyRecordLike](keyed_containers.md#readonlyrecordlike)

### Other Type Aliases

- [KeyOf](keyed_containers.md#keyof)
- [KeyedContainerOf](keyed_containers.md#keyedcontainerof)
- [KeyedContainerOperator](keyed_containers.md#keyedcontaineroperator)

## Container Type Aliases

### ReadonlyRecordLike

Ƭ **ReadonlyRecordLike**<`T`, `TKey`\>: `Readonly`<`Record`<`TKey`, `T`\>\> & [`ReadonlyRecordContainerLike`](../interfaces/keyed_containers.ReadonlyRecordContainerLike.md)

A compile time only type for using a Javascript `ReadonlyArray` as a `ContainerLike`.

**`No Inherit Doc`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `TKey` | extends `symbol` \| `number` \| `string` = `string` |

___

## Other Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainerLike_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](../interfaces/keyed_containers.KeyedContainerLike.md) |

___

### KeyedContainerOf

Ƭ **KeyedContainerOf**<`C`, `TKey`, `T`\>: `C` extends { `[___ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___ContainerLike_T]`: `T` ; `[___KeyedContainerLike_TKey]`: `TKey`  }[typeof `ContainerLike_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

Utility type for higher order programming with keyed-containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### KeyedContainerOperator

Ƭ **KeyedContainerOperator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`KeyedContainerOf`](keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `TA`\>, [`KeyedContainerOf`](keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](../interfaces/keyed_containers.KeyedContainerLike.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |
