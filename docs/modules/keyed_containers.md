[Reactive-JS](../README.md) / keyed-containers

# Module: keyed-containers

## Table of contents

### Container Interfaces

- [KeyedContainer](../interfaces/keyed_containers.KeyedContainer.md)
- [ReadonlyArrayContainer](../interfaces/keyed_containers.ReadonlyArrayContainer.md)
- [ReadonlyMapContainer](../interfaces/keyed_containers.ReadonlyMapContainer.md)
- [ReadonlyObjectMapContainer](../interfaces/keyed_containers.ReadonlyObjectMapContainer.md)

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
- [Reduce](../interfaces/keyed_containers.Reduce.md)
- [ReduceWithKey](../interfaces/keyed_containers.ReduceWithKey.md)
- [ToReadonlyArray](../interfaces/keyed_containers.ToReadonlyArray.md)
- [Values](../interfaces/keyed_containers.Values.md)

### Type Aliases

- [KeyOf](keyed_containers.md#keyof)
- [KeyedContainerOf](keyed_containers.md#keyedcontainerof)
- [KeyedContainerOperator](keyed_containers.md#keyedcontaineroperator)
- [ReadonlyObjectMapLike](keyed_containers.md#readonlyobjectmaplike)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainer_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/keyed_containers.KeyedContainer.md) |

___

### KeyedContainerOf

Ƭ **KeyedContainerOf**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

Utility type for higher order programming with keyed-containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### KeyedContainerOperator

Ƭ **KeyedContainerOperator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`KeyedContainerOf`](keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `TA`\>, [`KeyedContainerOf`](keyed_containers.md#keyedcontainerof)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/keyed_containers.KeyedContainer.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |

___

### ReadonlyObjectMapLike

Ƭ **ReadonlyObjectMapLike**<`TKey`, `T`\>: { readonly [P in TKey]?: T }

**`No Inherit Doc`**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TKey` | extends `symbol` \| `number` \| `string` = `string` |
| `T` | `unknown` |
