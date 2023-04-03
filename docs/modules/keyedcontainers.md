[Reactive-JS](../README.md) / keyedcontainers

# Module: keyedcontainers

## Table of contents

### Container Interfaces

- [KeyedContainerLike](../interfaces/keyedcontainers.KeyedContainerLike.md)
- [ReadonlyArrayLike](../interfaces/keyedcontainers.ReadonlyArrayLike.md)

### Other Interfaces

- [ReadonlyMapLike](../interfaces/keyedcontainers.ReadonlyMapLike.md)

### TypeClass Interfaces

- [Empty](../interfaces/keyedcontainers.Empty.md)
- [Entries](../interfaces/keyedcontainers.Entries.md)
- [ForEach](../interfaces/keyedcontainers.ForEach.md)
- [ForEachWithKey](../interfaces/keyedcontainers.ForEachWithKey.md)
- [FromEntries](../interfaces/keyedcontainers.FromEntries.md)
- [FromReadonlyArray](../interfaces/keyedcontainers.FromReadonlyArray.md)
- [Identity](../interfaces/keyedcontainers.Identity.md)
- [Keep](../interfaces/keyedcontainers.Keep.md)
- [KeepType](../interfaces/keyedcontainers.KeepType.md)
- [KeepWithKey](../interfaces/keyedcontainers.KeepWithKey.md)
- [KeySet](../interfaces/keyedcontainers.KeySet.md)
- [Keys](../interfaces/keyedcontainers.Keys.md)
- [Map](../interfaces/keyedcontainers.Map.md)
- [MapWithKey](../interfaces/keyedcontainers.MapWithKey.md)
- [ToReadonlyArray](../interfaces/keyedcontainers.ToReadonlyArray.md)
- [Values](../interfaces/keyedcontainers.Values.md)

### Type Aliases

- [KeyOf](keyedcontainers.md#keyof)
- [KeyedContainerOf](keyedcontainers.md#keyedcontainerof)
- [KeyedContainerOperator](keyedcontainers.md#keyedcontaineroperator)
- [ReadonlyRecordLike](keyedcontainers.md#readonlyrecordlike)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainerLike_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](../interfaces/keyedcontainers.KeyedContainerLike.md) |

___

### KeyedContainerOf

Ƭ **KeyedContainerOf**<`C`, `TKey`, `T`\>: `C` extends { `[ContainerLike_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[ContainerLike_T]`: `T` ; `[KeyedContainerLike_TKey]`: `TKey`  }[typeof `ContainerLike_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

Utility type for higher order programming with keyedContainers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### KeyedContainerOperator

Ƭ **KeyedContainerOperator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`KeyedContainerOf`](keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `TA`\>, [`KeyedContainerOf`](keyedcontainers.md#keyedcontainerof)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainerLike`](../interfaces/keyedcontainers.KeyedContainerLike.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |

___

### ReadonlyRecordLike

Ƭ **ReadonlyRecordLike**<`TKey`, `T`\>: `Readonly`<`Record`<`TKey`, `T`\>\> & `ReadonlyRecord`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `symbol` \| `number` \| `string` |
| `T` | `unknown` |
