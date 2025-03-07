[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [utils](../README.md) / DisposableContainerLike

# Interface: DisposableContainerLike

## Extended by

- [`DisposableLike`](DisposableLike.md)
- [`SchedulerLike`](SchedulerLike.md)

## Methods

### \[DisposableContainerLike\_add\]()

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### disposable

`Disposable`

The disposable to add.

##### Returns

`void`

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### teardown

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`

#### Call Signature

> **\[DisposableContainerLike\_add\]**(`teardown`): `void`

Adds the given teardown function to this container or disposes it if the container has been disposed.

##### Parameters

###### teardown

[`Method1`](../../functions/type-aliases/Method1.md)\<[`DisposableContainerLike`](DisposableContainerLike.md), [`Optional`](../../functions/type-aliases/Optional.md)\<`Error`\>\>

The teardown function to add.

##### Returns

`void`
