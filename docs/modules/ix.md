[Reactive-JS](../README.md) / ix

# Module: ix

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/ix.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/ix.AsyncEnumeratorLike.md)
- [EnumerableAsyncEnumerableLike](../interfaces/ix.EnumerableAsyncEnumerableLike.md)
- [EnumerableLike](../interfaces/ix.EnumerableLike.md)
- [EnumeratorLike](../interfaces/ix.EnumeratorLike.md)
- [InteractiveContainerLike](../interfaces/ix.InteractiveContainerLike.md)
- [RunnableAsyncEnumerableLike](../interfaces/ix.RunnableAsyncEnumerableLike.md)
- [SourceLike](../interfaces/ix.SourceLike.md)

### Type Aliases

- [FromAsyncEnumerable](ix.md#fromasyncenumerable)
- [FromEnumerable](ix.md#fromenumerable)
- [ToAsyncEnumerable](ix.md#toasyncenumerable)
- [ToEnumerable](ix.md#toenumerable)

## Type Aliases

### FromAsyncEnumerable

Ƭ **FromAsyncEnumerable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromAsyncEnumerable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### FromEnumerable

Ƭ **FromEnumerable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `fromEnumerable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>, [`ContainerOf`](containers.md#containerof)<`C`, `T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToAsyncEnumerable

Ƭ **ToAsyncEnumerable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toAsyncEnumerable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`AsyncEnumerableLike`](../interfaces/ix.AsyncEnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |

___

### ToEnumerable

Ƭ **ToEnumerable**<`C`, `O`\>: [`Container`](containers.md#container)<`C`\> & { `toEnumerable`: <T\>(`options?`: `O`) => [`Function1`](functions.md#function1)<[`ContainerOf`](containers.md#containerof)<`C`, `T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ContainerLike`](../interfaces/containers.ContainerLike.md) |
| `O` | `never` |
