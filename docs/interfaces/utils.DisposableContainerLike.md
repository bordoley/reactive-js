[Reactive-JS](../README.md) / [utils](../modules/utils.md) / DisposableContainerLike

# Interface: DisposableContainerLike

[utils](../modules/utils.md).DisposableContainerLike

## Hierarchy

- **`DisposableContainerLike`**

  ↳ [`SchedulerLike`](concurrent.SchedulerLike.md)

  ↳ [`DisposableLike`](utils.DisposableLike.md)

## Table of contents

### Methods

- [[DisposableContainerLike\_add]](utils.DisposableContainerLike.md#[disposablecontainerlike_add])

## Methods

### [DisposableContainerLike\_add]

▸ **[DisposableContainerLike_add]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) | The disposable to add. |

#### Returns

`void`

▸ **[DisposableContainerLike_add]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)\<[`Optional`](../modules/functions.md#optional)\<`Error`\>\> | The teardown function to add. |

#### Returns

`void`
