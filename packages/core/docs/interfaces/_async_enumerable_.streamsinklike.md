[@reactive-js/core - v0.0.37](../README.md) › ["async-enumerable"](../modules/_async_enumerable_.md) › [StreamSinkLike](_async_enumerable_.streamsinklike.md)

# Interface: StreamSinkLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md)‹[StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T›, [StreamMode](../enums/_async_enumerable_.streammode.md)›

  ↳ **StreamSinkLike**

## Index

### Methods

* [enumerateAsync](_async_enumerable_.streamsinklike.md#enumerateasync)

## Methods

###  enumerateAsync

▸ **enumerateAsync**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹[StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T›, [StreamMode](../enums/_async_enumerable_.streammode.md)›*

*Inherited from [AsyncEnumerableLike](_async_enumerable_.asyncenumerablelike.md).[enumerateAsync](_async_enumerable_.asyncenumerablelike.md#enumerateasync)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)‹[StreamEvent](../modules/_async_enumerable_.md#streamevent)‹T›, [StreamMode](../enums/_async_enumerable_.streammode.md)›*
