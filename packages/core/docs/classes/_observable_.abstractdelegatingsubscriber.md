[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [AbstractDelegatingSubscriber](_observable_.abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing instances of the `SubscriberLike` interface
which delegate notifications to a parent `SubscriberLike` instance

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriber‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [DisposableLike](../interfaces/_disposable_.disposablelike.md)
* [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](_observable_.abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](_observable_.abstractdelegatingsubscriber.md#delegate)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](_observable_.abstractdelegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](_observable_.abstractdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/_observable_.subscriberlike.md)‹TB›*
