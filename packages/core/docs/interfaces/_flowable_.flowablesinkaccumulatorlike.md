[@reactive-js/core - v0.0.37](../README.md) › ["flowable"](../modules/_flowable_.md) › [FlowableSinkAccumulatorLike](_flowable_.flowablesinkaccumulatorlike.md)

# Interface: FlowableSinkAccumulatorLike <**T, TAcc**>

**`experimental`** 

## Type parameters

▪ **T**

▪ **TAcc**

## Hierarchy

  ↳ [FlowableSinkLike](_flowable_.flowablesinklike.md)‹T›

  ↳ **FlowableSinkAccumulatorLike**

## Index

### Properties

* [acc](_flowable_.flowablesinkaccumulatorlike.md#acc)

### Methods

* [stream](_flowable_.flowablesinkaccumulatorlike.md#stream)

## Properties

###  acc

• **acc**: *TAcc*

## Methods

###  stream

▸ **stream**(`scheduler`: [SchedulerLike](_scheduler_.schedulerlike.md), `replayCount?`: number): *[StreamLike](_observable_.streamlike.md)‹[FlowEvent](../modules/_flowable_.md#flowevent)‹T›, [FlowMode](../enums/_flowable_.flowmode.md)›*

*Inherited from [AsyncEnumerableLike](_asyncenumerable_.asyncenumerablelike.md).[stream](_asyncenumerable_.asyncenumerablelike.md#stream)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | [SchedulerLike](_scheduler_.schedulerlike.md) |
`replayCount?` | number |

**Returns:** *[StreamLike](_observable_.streamlike.md)‹[FlowEvent](../modules/_flowable_.md#flowevent)‹T›, [FlowMode](../enums/_flowable_.flowmode.md)›*
