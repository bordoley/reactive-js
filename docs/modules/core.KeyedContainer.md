[Reactive-JS](../README.md) / [core](core.md) / KeyedContainer

# Namespace: KeyedContainer

[core](core.md).KeyedContainer

## Table of contents

### TypeClass Interfaces

- [Empty](../interfaces/core.KeyedContainer.Empty.md)
- [Entries](../interfaces/core.KeyedContainer.Entries.md)
- [ForEach](../interfaces/core.KeyedContainer.ForEach.md)
- [ForEachWithKey](../interfaces/core.KeyedContainer.ForEachWithKey.md)
- [FromEntries](../interfaces/core.KeyedContainer.FromEntries.md)
- [FromReadonlyArray](../interfaces/core.KeyedContainer.FromReadonlyArray.md)
- [Identity](../interfaces/core.KeyedContainer.Identity.md)
- [Keep](../interfaces/core.KeyedContainer.Keep.md)
- [KeepType](../interfaces/core.KeyedContainer.KeepType.md)
- [KeepWithKey](../interfaces/core.KeyedContainer.KeepWithKey.md)
- [KeySet](../interfaces/core.KeyedContainer.KeySet.md)
- [Keys](../interfaces/core.KeyedContainer.Keys.md)
- [Map](../interfaces/core.KeyedContainer.Map.md)
- [MapWithKey](../interfaces/core.KeyedContainer.MapWithKey.md)
- [Reduce](../interfaces/core.KeyedContainer.Reduce.md)
- [ReduceWithKey](../interfaces/core.KeyedContainer.ReduceWithKey.md)
- [ToReadonlyArray](../interfaces/core.KeyedContainer.ToReadonlyArray.md)
- [Values](../interfaces/core.KeyedContainer.Values.md)

### Type Aliases

- [KeyOf](core.KeyedContainer.md#keyof)
- [Of](core.KeyedContainer.md#of)
- [Operator](core.KeyedContainer.md#operator)

## Type Aliases

### KeyOf

Ƭ **KeyOf**<`C`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C`[typeof `KeyedContainer_TKey`]\> : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/core.KeyedContainer-1.md) |

___

### Of

Ƭ **Of**<`C`, `TKey`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T` ; `[___KeyedContainer_TKey]`: `TKey`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T` ; `_TKey`: () => `TKey`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `TKey` | `TKey` |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TKey`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.KeyedContainer.md#of)<`C`, `TKey`, `TA`\>, [`Of`](core.KeyedContainer.md#of)<`C`, `TKey`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](../interfaces/core.KeyedContainer-1.md) |
| `TKey` | `TKey` |
| `TA` | `TA` |
| `TB` | `TB` |
