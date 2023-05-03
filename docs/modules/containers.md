[Reactive-JS](../README.md) / containers

# Module: containers

## Table of contents

### Namespaces

- [Container](containers.Container.md)

### Container Interfaces

- [AsyncIterableContainer](../interfaces/containers.AsyncIterableContainer.md)
- [Container](../interfaces/containers.Container-1.md)
- [EnumeratorContainer](../interfaces/containers.EnumeratorContainer.md)
- [IterableContainer](../interfaces/containers.IterableContainer.md)
- [PromiseContainer](../interfaces/containers.PromiseContainer.md)
- [ReadonlyArrayContainer](../interfaces/containers.ReadonlyArrayContainer.md)

### Other Interfaces

- [EnumeratorLike](../interfaces/containers.EnumeratorLike.md)

### Type Aliases

- [ContainerOf](containers.md#containerof)
- [ContainerOperator](containers.md#containeroperator)

## Type Aliases

### ContainerOf

Ƭ **ContainerOf**<`C`, `T`\>: `C` extends { `[___Container_type]?`: `unknown`  } ? `NonNullable`<`C` & { `[___Container_T]`: `T`  }[typeof `Container_type`]\> : { `_C`: `C` ; `_T`: () => `T`  }

Utility type for higher order programming with Containers.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `T` | `T` |

___

### ContainerOperator

Ƭ **ContainerOperator**<`C`, `TA`, `TB`\>: [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `TA`\>, [`ContainerOf`](containers.md#containerof)<`C`, `TB`\>\>

Utility type for a generic operator function that transforms a Container's inner value type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](../interfaces/containers.Container-1.md) |
| `TA` | `TA` |
| `TB` | `TB` |
