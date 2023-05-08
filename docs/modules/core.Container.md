[Reactive-JS](../README.md) / [core](core.md) / Container

# Namespace: Container

[core](core.md).Container

## Table of contents

### Interfaces

- [TypeClass](../interfaces/core.Container.TypeClass.md)

### Type Aliases

- [Of](core.Container.md#of)
- [Operator](core.Container.md#operator)

## Type Aliases

### Of

Ƭ **Of**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof [`Container_type`](core.md#container_type)]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `T` | `T` |

___

### Operator

Ƭ **Operator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`Of`](core.Container.md#of)<`C`, `TA`\>, [`Of`](core.Container.md#of)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/core.Container-1.md) |
| `TA` | `TA` |
| `TB` | `TB` |
