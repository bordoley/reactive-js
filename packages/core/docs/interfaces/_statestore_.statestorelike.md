[@reactive-js/core - v0.0.37](../README.md) › ["stateStore"](../modules/_statestore_.md) › [StateStoreLike](_statestore_.statestorelike.md)

# Interface: StateStoreLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [StreamableLike](_streamable_.streamablelike.md)‹[StateUpdater](../modules/_statestore_.md#stateupdater)‹T›, T›

  ↳ **StateStoreLike**

## Index

### Methods

* [stream](_statestore_.statestorelike.md#stream)

## Methods

###  stream

▸ **stream**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[StreamLike](_streamable_.streamlike.md)‹[StateUpdater](../modules/_statestore_.md#stateupdater)‹T›, T›*

*Inherited from [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md).[stream](_async_enumerable_.asyncenumerablelike.md#stream)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[StreamLike](_streamable_.streamlike.md)‹[StateUpdater](../modules/_statestore_.md#stateupdater)‹T›, T›*
