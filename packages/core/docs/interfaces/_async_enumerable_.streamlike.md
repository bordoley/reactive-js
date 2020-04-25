[@reactive-js/core - v0.0.37](../README.md) › ["async-enumerable"](../modules/_async_enumerable_.md) › [StreamLike](_async_enumerable_.streamlike.md)

# Interface: StreamLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md)‹[StreamMode](../enums/_async_enumerable_.streammode.md), [StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T››

  ↳ **StreamLike**

## Index

### Methods

* [enumerateAsync](_async_enumerable_.streamlike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹[StreamMode](../enums/_async_enumerable_.streammode.md), [StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T››*

*Inherited from [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md).[enumerateAsync](_async_enumerable_.asyncenumerablelike.md#enumerateasync)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹[StreamMode](../enums/_async_enumerable_.streammode.md), [StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T››*
