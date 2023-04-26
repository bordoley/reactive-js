var ExampleSvelte = (function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function subscribe$2(store, ...callbacks) {
        if (store == null) {
            return noop;
        }
        const unsub = store.subscribe(...callbacks);
        return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
    }
    function component_subscribe(component, store, callback) {
        component.$$.on_destroy.push(subscribe$2(store, callback));
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.wholeText !== data)
            text.data = data;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    let render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = /* @__PURE__ */ Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        // Do not reenter flush while dirty components are updated, as this can
        // result in an infinite loop. Instead, let the inner flush handle it.
        // Reentrancy is ok afterwards for bindings etc.
        if (flushidx !== 0) {
            return;
        }
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            try {
                while (flushidx < dirty_components.length) {
                    const component = dirty_components[flushidx];
                    flushidx++;
                    set_current_component(component);
                    update(component.$$);
                }
            }
            catch (e) {
                // reset dirty state to not end up in a deadlocked state and then rethrow
                dirty_components.length = 0;
                flushidx = 0;
                throw e;
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    /**
     * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
     */
    function flush_render_callbacks(fns) {
        const filtered = [];
        const targets = [];
        render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
        targets.forEach((c) => c());
        render_callbacks = filtered;
    }
    const outroing = new Set();
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
                // if the component was destroyed immediately
                // it will update the `$$.on_destroy` reference to `null`.
                // the destructured on_destroy may still reference to the old array
                if (component.$$.on_destroy) {
                    component.$$.on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            flush_render_callbacks($$.after_update);
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init$1(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: [],
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            if (!is_function(callback)) {
                return noop;
            }
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } = Number;
    const process$1 = typeof global === "object"
        ? global.process
        : {
            env: {
                NODE_ENV: "development",
            },
        };
    const __DEV__ = process$1.env.NODE_ENV !== "production";

    const ReadonlyArray_getLength = (arr) => arr.length;

    /**
     * A function that always returns `true`.
     */
    const alwaysTrue = (..._args) => true;
    // eslint-disable-next-line @typescript-eslint/ban-types
    const bind = (f, thiz) => f.bind(thiz);
    const bindMethod = (thiz, key) => bind(thiz[key], thiz);
    const call = (f, self, ...args) => f.call(self, ...args);
    const composeUnsafe = (...operators) => source => pipeUnsafe(source, ...operators);
    /**
     * Composes a series of unary functions.
     */
    const compose = composeUnsafe;
    /**
     * An updater function that returns the result of incrementing `x`.
     */
    const increment = (x) => x + 1;
    // eslint-disable-next-line @typescript-eslint/ban-types
    const isFunction = (f) => typeof f === "function" || f instanceof Function;
    const isString = (s) => typeof s === "string" || s instanceof String;
    /**
     * Returns true if `option` is `none`.
     */
    const isNone = (option) => option === none;
    /**
     * Returns true if `option` is not `none`.
     */
    const isSome = (option) => option !== none;
    const isTrue = (v) => v;
    const newInstance = (Constructor, ...args) => new Constructor(...args);
    /**
     * An alias for undefined.
     */
    const none = undefined;
    const partial = (...args) => (f) => (arg0) => f(arg0, ...args);
    /**
     * Pipes `source` through a series of unary functions.
     */
    const pipeUnsafe = (source, ...operators) => {
        let acc = source;
        const length = ReadonlyArray_getLength(operators);
        for (let i = 0; i < length; i++) {
            acc = operators[i](acc);
        }
        return acc;
    };
    /**
     * Pipes `source` through a series of unary functions.
     */
    const pipe = pipeUnsafe;
    /**
     * Returns a `Factory` function that pipes the `source` through the provided operators.
     */
    const pipeLazy = (source, ...operators) => () => pipeUnsafe(source, ...operators);
    const error = (message) => {
        const messageIsString = isString(message);
        const messageIsError = message instanceof Error;
        const errorMessage = messageIsString ? message : "";
        const errorCause = !messageIsString && !messageIsError && isSome(message)
            ? {
                cause: message,
            }
            : none;
        return messageIsError
            ? message
            : newInstance(Error, errorMessage, errorCause);
    };
    const raiseError = (e) => {
        throw e;
    };
    /**
     * Throws a javascript error using the provided message.
     */
    const raiseWithDebugMessage = (message) => raiseError(error(__DEV__ ? message : none));
    /**
     * Returns a function that takes an arbitrary number of arguments and always returns `v`.
     */
    const returns = (v) => (..._args) => v;
    /**
     * The javascript strict equality function.
     */
    const strictEquality = (a, b) => a === b;

    const now = /*@__PURE__*/ (() => {
        const supportsPerformanceNow = typeof performance === "object" && isFunction(performance.now);
        const supportsProcessHRTime = typeof process === "object" && isFunction(process.hrtime);
        if (supportsPerformanceNow) {
            return bindMethod(performance, "now");
        }
        else if (supportsProcessHRTime) {
            return () => {
                const hr = process.hrtime();
                return hr[0] * 1000 + hr[1] / 1e6;
            };
        }
        else {
            return bindMethod(Date, "now");
        }
    })();

    const { create, getOwnPropertyDescriptors, prototype } = Object;

    const symbol = label => Symbol(__DEV__ ? label : none);

    /** @type {unique symbol} */
    const __BufferLike_capacity = /*@__PURE__*/ symbol("BufferLike_capacity");
    /** @type {unique symbol} */
    const __CollectionLike_count = /*@__PURE__*/ symbol("CollectionLike_count");
    /** @type {unique symbol} */
    const __DispatcherLike_complete = /*@__PURE__*/ symbol("DispatcherLike_complete");
    /** @type {unique symbol} */
    const __DisposableLike_add = /*@__PURE__*/ symbol("DisposableLike_add");
    /** @type {unique symbol} */
    const __DisposableLike_dispose = /*@__PURE__*/ symbol("DisposableLike_dispose");
    /** @type {unique symbol} */
    const __DisposableLike_error = /*@__PURE__*/ symbol("DisposableLike_error");
    /** @type {unique symbol} */
    const __DisposableLike_isDisposed = /*@__PURE__*/ symbol("DisposableLike_isDisposed");
    /** @type {unique symbol} */
    const __EnumeratorLike_move = /*@__PURE__*/ symbol("EnumeratorLike_move");
    /** @type {unique symbol} */
    const __EnumeratorLike_current = /*@__PURE__*/ symbol("EnumeratorLike_current");
    /** @type {unique symbol} */
    const __EnumeratorLike_hasCurrent = /*@__PURE__*/ symbol("EnumeratorLike_hasCurrent");
    /** @type {unique symbol} */
    const __EventListenerLike_isErrorSafe = /*@__PURE__*/ symbol("EventListenerLike_isErrorSafe");
    /** @type {unique symbol} */
    const __EventListenerLike_notify = /*@__PURE__*/ symbol("EventListenerLike_notify");
    /** @type {unique symbol} */
    const __KeyedCollectionLike_get = /*@__PURE__*/ symbol("KeyedCollectionLike_get");
    /** @type {unique symbol} */
    const __ObserverLike_notify = /*@__PURE__*/ symbol("ObserverLike_notify");
    /** @type {unique symbol} */
    const __ObservableLike_observe = /*@__PURE__*/ symbol("ObservableLike_observe");
    /** @type {unique symbol} */
    const __ObservableLike_isEnumerable = /*@__PURE__*/ symbol("ObservableLike_isEnumerable");
    /** @type {unique symbol} */
    const __ObservableLike_isRunnable = /*@__PURE__*/ symbol("ObservableLike_isRunnable");
    /** @type {unique symbol} */
    const __PauseableLike_isPaused = /*@__PURE__*/ symbol("PauseableLike_isPaused");
    /** @type {unique symbol} */
    const __PauseableLike_pause = /*@__PURE__*/ symbol("PauseableLike_pause");
    /** @type {unique symbol} */
    const __PauseableLike_resume = /*@__PURE__*/ symbol("PauseableLike_resume");
    /** @type {unique symbol} */
    const __PauseableObservableLike_isPaused = /*@__PURE__*/ symbol("PauseableObservableLike_isPaused");
    /** @type {unique symbol} */
    const __PublisherLike_observerCount = /*@__PURE__*/ symbol("PublisherLike_observerCount");
    /** @type {unique symbol} */
    const __QueueableLike_enqueue = /*@__PURE__*/ symbol("QueueableLike_enqueue");
    /** @type {unique symbol} */
    const __QueueableLike_backpressureStrategy = /*@__PURE__*/ symbol("QueueableLike_backpressureStrategy");
    /** @type {unique symbol} */
    const __ReplayableLike_buffer = /*@__PURE__*/ symbol("ReplayableLike_buffer");
    /** @type {unique symbol} */
    const __SchedulerLike_inContinuation = /*@__PURE__*/ symbol("SchedulerLike_inContinuation");
    /** @type {unique symbol} */
    const __SchedulerLike_maxYieldInterval = /*@__PURE__*/ symbol("SchedulerLike_maxYieldInterval");
    /** @type {unique symbol} */
    const __SchedulerLike_now = /*@__PURE__*/ symbol("SchedulerLike_now");
    /** @type {unique symbol} */
    const __SchedulerLike_requestYield = /*@__PURE__*/ symbol("SchedulerLike_requestYield");
    /** @type {unique symbol} */
    const __SchedulerLike_schedule = /*@__PURE__*/ symbol("SchedulerLike_schedule");
    /** @type {unique symbol} */
    const __SchedulerLike_shouldYield = /*@__PURE__*/ symbol("SchedulerLike_shouldYield");
    /** @type {unique symbol} */
    const __SchedulerLike_yield = /*@__PURE__*/ symbol("SchedulerLike_yield");
    /** @type {unique symbol} */
    const __StreamLike_scheduler = /*@__PURE__*/ symbol("StreamLike_scheduler");
    /** @type {unique symbol} */
    const __ContinuationLike_activeChild = /*@__PURE__*/ symbol("ContinuationLike_activeChild");
    /** @type {unique symbol} */
    const __ContinuationLike_run = /*@__PURE__*/ symbol("ContinuationLike_run");
    /** @type {unique symbol} */
    const __ContinuationLike_parent = /*@__PURE__*/ symbol("ContinuationLike_parent");
    /** @type {unique symbol} */
    const __ContinuationLike_priority = /*@__PURE__*/ symbol("ContinuationLike_priority");
    /** @type {unique symbol} */
    const __ContinuationLike_scheduler = /*@__PURE__*/ symbol("ContinuationLike_scheduler");
    /** @type {unique symbol} */
    const __ContinuationSchedulerLike_schedule = /*@__PURE__*/ symbol("ContinuationSchedulerLike_schedule");
    /** @type {unique symbol} */
    const __DelegatingLike_delegate = /*@__PURE__*/ symbol("DelegatingLike_delegate");
    /** @type {unique symbol} */
    const __MutableEnumeratorLike_reset = /*@__PURE__*/ symbol("MutableEnumeratorLike_reset");
    /** @type {unique symbol} */
    const __MutableKeyedCollectionLike_set = /*@__PURE__*/ symbol("MutableKeyedCollectionLike_set");
    /** @type {unique symbol} */
    const __PrioritySchedulerImplementationLike_runContinuation = 
    /*@__PURE__*/ symbol("PrioritySchedulerImplementationLike_runContinuation");
    /** @type {unique symbol} */
    const __PrioritySchedulerImplementationLike_scheduleContinuation = 
    /*@__PURE__*/ symbol("PrioritySchedulerImplementationLike_scheduleContinuation");
    /** @type {unique symbol} */
    const __PrioritySchedulerImplementationLike_shouldYield = 
    /*@__PURE__*/ symbol("PrioritySchedulerImplementationLike_shouldYield");
    /** @type {unique symbol} */
    const __QueueLike_head = /*@__PURE__*/ symbol("QueueLike_head");
    /** @type {unique symbol} */
    const __QueueLike_dequeue = /*@__PURE__*/ symbol("QueueLike_dequeue");
    /** @type {unique symbol} */
    const __SerialDisposableLike_current = /*@__PURE__*/ symbol("SerialDisposableLike_current");
    /** @type {unique symbol} */
    const __StackLike_pop = /*@__PURE__*/ symbol("StackLike_pop");
    /** @type {unique symbol} */
    const __StackLike_head = /*@__PURE__*/ symbol("StackLike_head");
    /** @type {unique symbol} */
    const __DelegatingDispatcherMixin_delegate = /*@__PURE__*/ symbol("DelegatingDispatcherMixin_delegate");
    /** @type {unique symbol} */
    const __DelegatingDisposableMixin_delegate = /*@__PURE__*/ symbol("DelegatingDisposableMixin_delegate");
    /** @type {unique symbol} */
    const __DelegatingMulticastObservableMixin_delegate = 
    /*@__PURE__*/ symbol("DelegatingMulticastObservableMixin_delegate");
    /** @type {unique symbol} */
    const __DelegatingQueueableMixin_delegate = /*@__PURE__*/ symbol("DelegatingQueueableMixin_delegate");
    /** @type {unique symbol} */
    const __DelegatingSchedulerMixin_delegate = /*@__PURE__*/ symbol("DelegatingSchedulerMixin_delegate");
    /** @type {unique symbol} */
    const __DisposableMixin_disposables = /*@__PURE__*/ symbol("DisposableMixin_disposables");
    /** @type {unique symbol} */
    const __IndexedQueueMixin_head = /*@__PURE__*/ symbol("IndexedQueueMixin_head");
    /** @type {unique symbol} */
    const __IndexedQueueMixin_tail = /*@__PURE__*/ symbol("IndexedQueueMixin_tail");
    /** @type {unique symbol} */
    const __IndexedQueueMixin_capacityMask = /*@__PURE__*/ symbol("IndexedQueueMixin_capacityMask");
    /** @type {unique symbol} */
    const __IndexedQueueMixin_values = /*@__PURE__*/ symbol("IndexedQueueMixin_values");
    /** @type {unique symbol} */
    const __ObserverMixin_dispatchSubscription = /*@__PURE__*/ symbol("ObserverMixin_dispatchSubscription");
    /** @type {unique symbol} */
    const __ObserverMixin_isCompleted = /*@__PURE__*/ symbol("ObserverMixin_isCompleted");
    /** @type {unique symbol} */
    const __SchedulerMixin_currentContinuation = /*@__PURE__*/ symbol("SchedulerMixin_currentContinuation");
    /** @type {unique symbol} */
    const __SchedulerMixin_startTime = /*@__PURE__*/ symbol("SchedulerMixin_startTime");
    /** @type {unique symbol} */
    const __SchedulerMixin_yieldRequested = /*@__PURE__*/ symbol("SchedulerMixin_yieldRequested");
    /** @type {unique symbol} */
    const __SerialDisposableMixin_current = /*@__PURE__*/ symbol("SerialDisposableMixin_current");
    /** @type {unique symbol} */
    const __LiftedLike_source = /*@__PURE__*/ symbol("LiftedLike_source");
    /** @type {unique symbol} */
    const __LiftedLike_operators = /*@__PURE__*/ symbol("LiftedLike_operators");
    /** @type {unique symbol} */
    const __PrioritySchedulerTaskLike_priority = /*@__PURE__*/ symbol("PrioritySchedulerTaskLike_priority");
    /** @type {unique symbol} */
    const __SchedulerTaskLike_continuation = /*@__PURE__*/ symbol("SchedulerTaskLike_continuation");
    /** @type {unique symbol} */
    const __SchedulerTaskLike_dueTime = /*@__PURE__*/ symbol("SchedulerTaskLike_dueTime");
    /** @type {unique symbol} */
    const __SchedulerTaskLike_id = /*@__PURE__*/ symbol("SchedulerTaskLike_id");
    /** @type {unique symbol} */
    const __Continuation_effect = /*@__PURE__*/ symbol("Continuation_effect");
    /** @type {unique symbol} */
    const __CreateObservable_effect = /*@__PURE__*/ symbol("CreateObservable_effect");
    /** @type {unique symbol} */
    const __DispatchedObservable_observer = /*@__PURE__*/ symbol("DispatchedObservable_observer");
    /** @type {unique symbol} */
    const __DistinctUntilChangedObserver_equality = /*@__PURE__*/ symbol("DistinctUntilChangedObserver_equality");
    /** @type {unique symbol} */
    const __DistinctUntilChangedObserver_prev = /*@__PURE__*/ symbol("DistinctUntilChangedObserver_prev");
    /** @type {unique symbol} */
    const __DistinctUntilChangedObserver_hasValue = /*@__PURE__*/ symbol("DistinctUntilChangedObserver_hasValue");
    /** @type {unique symbol} */
    const __EnqueueObserver_effect = /*@__PURE__*/ symbol("EnqueueObserver_effect");
    /** @type {unique symbol} */
    const __Enumerator_private_current = /*@__PURE__*/ symbol("Enumerator_private_current");
    /** @type {unique symbol} */
    const __IteratorEnumerator_iterator = /*@__PURE__*/ symbol("IteratorEnumerator_iterator");
    /** @type {unique symbol} */
    const __MergeObserverCtx_completedCount = /*@__PURE__*/ symbol("MergeObserverCtx_completedCount");
    /** @type {unique symbol} */
    const __Object_init = /*@__PURE__*/ symbol("Object_init");
    /** @type {unique symbol} */
    const __Object_properties = /*@__PURE__*/ symbol("Object_properties");
    /** @type {unique symbol} */
    const __Object_prototype = /*@__PURE__*/ symbol("Object_prototype");
    /** @type {unique symbol} */
    const __PriorityQueueImpl_comparator = /*@__PURE__*/ symbol("PriorityQueueImpl_comparator ");
    /** @type {unique symbol} */
    const __Publisher_observers = /*@__PURE__*/ symbol("Publisher_observers");
    /** @type {unique symbol} */
    const __QueueScheduler_delayed = /*@__PURE__*/ symbol("QueueScheduler_delayed ");
    /** @type {unique symbol} */
    const __QueueScheduler_dueTime = /*@__PURE__*/ symbol("QueueScheduler_dueTime ");
    /** @type {unique symbol} */
    const __QueueScheduler_hostContinuation = /*@__PURE__*/ symbol("QueueScheduler_hostContinuation ");
    /** @type {unique symbol} */
    const __QueueScheduler_hostScheduler = /*@__PURE__*/ symbol("QueueScheduler_hostScheduler");
    /** @type {unique symbol} */
    const __QueueScheduler_queue = /*@__PURE__*/ symbol("QueueScheduler_queue ");
    /** @type {unique symbol} */
    const __QueueScheduler_taskIDCounter = /*@__PURE__*/ symbol("QueueScheduler_taskIDCounter ");

    function initUnsafe(mixin, instance, ...args) {
        const f = mixin[__Object_init];
        f(instance, ...args);
    }
    const init = initUnsafe;
    const include = (...mixins) => {
        const length = ReadonlyArray_getLength(mixins);
        if (length == 1) {
            return mixins[0];
        }
        else {
            let propertyDescriptions = {};
            let prototypeDescriptions = {};
            for (let i = 0; i < length; i++) {
                const mixin = mixins[i];
                propertyDescriptions = {
                    ...propertyDescriptions,
                    ...getOwnPropertyDescriptors(mixin[__Object_properties]),
                };
                prototypeDescriptions = {
                    ...prototypeDescriptions,
                    ...getOwnPropertyDescriptors(mixin[__Object_prototype]),
                };
            }
            return {
                [__Object_properties]: create(prototype, propertyDescriptions),
                [__Object_prototype]: create(prototype, prototypeDescriptions),
            };
        }
    };
    const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
        if (isFunction(initOrParent)) {
            return {
                [__Object_init]: initOrParent,
                [__Object_properties]: propertiesOrInit ?? {},
                [__Object_prototype]: prototypeOrParent ?? {},
            };
        }
        else {
            const base = include(initOrParent, {
                [__Object_properties]: prototypeOrParent ?? {},
                [__Object_prototype]: nothingOrPrototype ?? {},
            });
            return {
                ...base,
                [__Object_init]: propertiesOrInit,
            };
        }
    });
    const createInstanceFactory = (mixin) => {
        const propertyDescription = getOwnPropertyDescriptors(mixin[__Object_properties]);
        const prototypeDescription = __DEV__
            ? {
                ...getOwnPropertyDescriptors(mixin[__Object_prototype]),
                constructor: {
                    configurable: true,
                    enumerable: false,
                    value: mixin[__Object_init],
                    writable: true,
                },
            }
            : getOwnPropertyDescriptors(mixin[__Object_prototype]);
        const prototype$1 = create(prototype, prototypeDescription);
        return (...args) => {
            const instance = create(prototype$1, propertyDescription);
            initUnsafe(mixin, instance, ...args);
            return instance;
        };
    };
    const props = (o) => {
        return o;
    };
    const getPrototype = (mixin) => mixin[__Object_prototype];

    const Disposable_onError = (teardown) => disposable => {
        disposable[__DisposableLike_add](e => {
            if (isSome(e)) {
                teardown(e);
            }
        });
        return disposable;
    };

    const Disposable_addTo = (parent) => (child) => {
        parent[__DisposableLike_add](child);
        pipe(child, Disposable_onError(bindMethod(parent, __DisposableLike_dispose)));
        return child;
    };

    const doDispose = (instance, disposable) => {
        const error = instance[__DisposableLike_error];
        if (isFunction(disposable)) {
            try {
                disposable(error);
            }
            catch (_) {
                /* Proactively catch Errors thrown in teardown logic. Teardown functions
                 * shouldn't throw, so this is to prevent unexpected Errors.
                 */
            }
        }
        else {
            disposable[__DisposableLike_dispose](error);
        }
    };
    const Disposable_mixin = /*@__PURE__*/ mix(function DisposableMixin(instance) {
        instance[__DisposableMixin_disposables] =
            newInstance(Set);
        return instance;
    }, props({
        [__DisposableLike_error]: none,
        [__DisposableLike_isDisposed]: false,
        [__DisposableMixin_disposables]: none,
    }), {
        [__DisposableLike_dispose](error) {
            if (!this[__DisposableLike_isDisposed]) {
                this[__DisposableLike_error] = error;
                this[__DisposableLike_isDisposed] = true;
                const disposables = this[__DisposableMixin_disposables];
                for (const disposable of disposables) {
                    disposables.delete(disposable);
                    doDispose(this, disposable);
                }
            }
        },
        [__DisposableLike_add](disposable) {
            const disposables = this[__DisposableMixin_disposables];
            if (this === disposable) {
                return;
            }
            else if (this[__DisposableLike_isDisposed]) {
                doDispose(this, disposable);
            }
            else if (!disposables.has(disposable)) {
                disposables.add(disposable);
                if (!isFunction(disposable)) {
                    disposable[__DisposableLike_add](_ => {
                        disposables.delete(disposable);
                    });
                }
            }
        },
    });

    const Disposable_create = 
    /*@__PURE__*/ createInstanceFactory(Disposable_mixin);

    const Disposable_disposed = /*@__PURE__*/ (() => {
        const instance = Disposable_create();
        instance[__DisposableLike_dispose]();
        return instance;
    })();

    const { abs, floor, max, min, random } = Math;
    const clamp = (min, v, max) => v > max ? max : v < min ? min : v;
    const clampPositiveInteger = (v) => floor(clamp(0, v, MAX_SAFE_INTEGER));

    const Queue_indexedQueueMixin = /*@__PURE__*/ (() => {
        const copyArray = (src, head, tail, size) => {
            const capacity = src.length;
            const dest = newInstance(Array, size);
            let k = 0;
            let bound = head >= tail ? capacity : tail;
            for (let i = head; i < bound; i++) {
                dest[k++] = src[i];
            }
            bound = head >= tail ? tail : 0;
            for (let i = 0; i < bound; i++) {
                dest[k++] = src[i];
            }
            return dest;
        };
        const grow = (instance) => {
            const head = instance[__IndexedQueueMixin_head];
            const tail = instance[__IndexedQueueMixin_tail];
            if (tail !== head && tail !== 0) {
                return;
            }
            const values = instance[__IndexedQueueMixin_values] ?? [];
            const capacity = values.length;
            const capacityMask = instance[__IndexedQueueMixin_capacityMask];
            const count = instance[__CollectionLike_count];
            if (head === 0 || (tail === 0 && head < capacity >> 2)) {
                values.length <<= 1;
                instance[__IndexedQueueMixin_tail] = count + head;
            }
            else {
                const newCapacity = capacity << 1;
                const newList = copyArray(values, head, tail, newCapacity);
                instance[__IndexedQueueMixin_values] = newList;
                instance[__IndexedQueueMixin_head] = 0;
                instance[__IndexedQueueMixin_tail] = count;
            }
            instance[__IndexedQueueMixin_capacityMask] = (capacityMask << 1) | 1;
        };
        const shrink = (instance) => {
            const values = instance[__IndexedQueueMixin_values] ?? [];
            const capacity = values.length;
            const count = instance[__CollectionLike_count];
            if (count >= capacity >> 2 || capacity <= 32) {
                return;
            }
            const head = instance[__IndexedQueueMixin_head];
            const tail = instance[__IndexedQueueMixin_tail];
            const newCapacity = capacity >> 1;
            if (tail >= head && tail < newCapacity) {
                values.length >>= 1;
            }
            else {
                const newList = copyArray(values, head, tail, newCapacity);
                instance[__IndexedQueueMixin_values] = newList;
                instance[__IndexedQueueMixin_head] = 0;
                instance[__IndexedQueueMixin_tail] = count;
            }
            instance[__IndexedQueueMixin_capacityMask] = newCapacity - 1;
        };
        return pipe(mix(function IndexedQueueMixin(instance, capacity, backpressureStrategy) {
            instance[__QueueableLike_backpressureStrategy] = backpressureStrategy;
            instance[__BufferLike_capacity] = clampPositiveInteger(capacity);
            return instance;
        }, props({
            [__CollectionLike_count]: 0,
            [__QueueableLike_backpressureStrategy]: "overflow",
            [__BufferLike_capacity]: MAX_SAFE_INTEGER,
            [__IndexedQueueMixin_head]: 0,
            [__IndexedQueueMixin_tail]: 0,
            [__IndexedQueueMixin_capacityMask]: 0,
            [__IndexedQueueMixin_values]: none,
        }), {
            get [__QueueLike_head]() {
                const head = this[__IndexedQueueMixin_head];
                const values = this[__IndexedQueueMixin_values] ?? [];
                return head === this[__IndexedQueueMixin_tail] ? none : values[head];
            },
            get [__StackLike_head]() {
                const head = this[__IndexedQueueMixin_head];
                const tail = this[__IndexedQueueMixin_tail];
                const values = this[__IndexedQueueMixin_values] ?? [];
                const index = tail > 0 ? tail - 1 : values.length - 1;
                return head === tail ? none : values[index];
            },
            [__QueueLike_dequeue]() {
                const tail = this[__IndexedQueueMixin_tail];
                const values = this[__IndexedQueueMixin_values] ?? [];
                let head = this[__IndexedQueueMixin_head];
                const item = head === tail ? none : values[head];
                if (head !== tail) {
                    values[head] = none;
                    head = (head + 1) & this[__IndexedQueueMixin_capacityMask];
                    this[__IndexedQueueMixin_head] = head;
                    this[__CollectionLike_count]--;
                }
                shrink(this);
                return item;
            },
            [__StackLike_pop]() {
                const head = this[__IndexedQueueMixin_head];
                const values = this[__IndexedQueueMixin_values] ?? [];
                const capacity = values.length;
                let tail = this[__IndexedQueueMixin_tail];
                const item = head === tail
                    ? none
                    : ((tail =
                        (tail - 1 + capacity) &
                            this[__IndexedQueueMixin_capacityMask]),
                        (this[__IndexedQueueMixin_tail] = tail),
                        this[__CollectionLike_count]--,
                        values[tail]);
                values[tail] = none;
                shrink(this);
                return item;
            },
            [__KeyedCollectionLike_get](index) {
                const count = this[__CollectionLike_count];
                const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
                const head = this[__IndexedQueueMixin_head];
                const values = this[__IndexedQueueMixin_values] ?? [];
                const headOffsetIndex = index + head;
                const tailOffsetIndex = headOffsetIndex - capacity;
                const computedIndex = index < 0 || index >= count
                    ? raiseWithDebugMessage("index out of range")
                    : headOffsetIndex < capacity
                        ? headOffsetIndex
                        : tailOffsetIndex;
                return values[computedIndex];
            },
            [__MutableKeyedCollectionLike_set](index, value) {
                const count = this[__CollectionLike_count];
                const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
                const head = this[__IndexedQueueMixin_head];
                const values = this[__IndexedQueueMixin_values] ?? [];
                const headOffsetIndex = index + head;
                const tailOffsetIndex = headOffsetIndex - capacity;
                const computedIndex = index < 0 || index >= count
                    ? raiseWithDebugMessage("index out of range")
                    : headOffsetIndex < capacity
                        ? headOffsetIndex
                        : tailOffsetIndex;
                const oldValue = values[computedIndex];
                values[computedIndex] = value;
                return oldValue;
            },
            [__QueueableLike_enqueue](item) {
                const backpressureStrategy = this[__QueueableLike_backpressureStrategy];
                let count = this[__CollectionLike_count];
                const capacity = this[__BufferLike_capacity];
                if (backpressureStrategy === "drop-latest" && count >= capacity) {
                    return false;
                }
                else if (backpressureStrategy === "drop-oldest" &&
                    count >= capacity) {
                    // We want to pop off the oldest value first, before enqueueing
                    // to avoid unintentionally growing the queue.
                    this[__QueueLike_dequeue]();
                }
                else if (backpressureStrategy === "throw" && count >= capacity) {
                    // FIXME: Seems like we should have a known exception (symbol), that
                    // a caller could safely catch in this case and then make its own decisions.
                    // For instance using drop-latest is going to break priority queue,
                    // so it would expect a known exception if it was configured for drop-latest
                    // and handle it accordingly.
                    raiseWithDebugMessage("attempting to enque a value to a queue that is full");
                }
                const values = this[__IndexedQueueMixin_values] ??
                    ((this[__IndexedQueueMixin_capacityMask] = 31),
                        (this[__IndexedQueueMixin_values] = newInstance(Array, 32)),
                        this[__IndexedQueueMixin_values]);
                const capacityMask = this[__IndexedQueueMixin_capacityMask];
                let tail = this[__IndexedQueueMixin_tail];
                values[tail] = item;
                this[__CollectionLike_count]++;
                tail = (tail + 1) & capacityMask;
                this[__IndexedQueueMixin_tail] = tail;
                grow(this);
                return this[__CollectionLike_count] < this[__BufferLike_capacity];
            },
        }), returns);
    })();

    const Queue_createIndexedQueue = /*@__PURE__*/ (() => createInstanceFactory(Queue_indexedQueueMixin()))();

    const Disposable_addToIgnoringChildErrors = (parent) => (child) => {
        parent[__DisposableLike_add](child);
        return child;
    };

    const Disposable_onDisposed = (teardown) => disposable => {
        disposable[__DisposableLike_add](teardown);
        return disposable;
    };

    class YieldError {
        delay;
        constructor(delay) {
            this.delay = delay;
        }
    }

    const Continuation_create = /*@__PURE__*/ (() => {
        const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
        const findNearestNonDisposedParent = (continuation) => {
            let parent = continuation[__ContinuationLike_parent];
            while (isSome(parent) && parent[__DisposableLike_isDisposed]) {
                parent = parent[__ContinuationLike_parent];
            }
            return parent;
        };
        const rescheduleContinuation = (continuation) => {
            const scheduler = continuation[__ContinuationLike_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                parent[__QueueableLike_enqueue](continuation);
            }
            else {
                scheduler[__ContinuationSchedulerLike_schedule](continuation);
            }
        };
        const rescheduleChildrenOnParentOrScheduler = (continuation) => {
            const scheduler = continuation[__ContinuationLike_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                let head = none;
                while (((head = continuation[__QueueLike_dequeue]()), isSome(head))) {
                    if (!head[__DisposableLike_isDisposed]) {
                        parent[__QueueableLike_enqueue](head);
                    }
                }
            }
            else {
                let head = none;
                while (((head = continuation[__QueueLike_dequeue]()), isSome(head))) {
                    if (!head[__DisposableLike_isDisposed]) {
                        scheduler[__ContinuationSchedulerLike_schedule](head);
                    }
                }
            }
        };
        return createInstanceFactory(mix(include(Disposable_mixin, Queue_indexedQueueMixin()), function Continuation(instance, scheduler, effect, priority) {
            init(Disposable_mixin, instance);
            init(Queue_indexedQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
            instance[__ContinuationLike_scheduler] = scheduler;
            instance[__Continuation_effect] = effect;
            instance[__ContinuationLike_priority] = priority;
            pipe(instance, Disposable_onDisposed(pipeLazy(instance, rescheduleChildrenOnParentOrScheduler)));
            return instance;
        }, props({
            [__ContinuationLike_activeChild]: none,
            [__ContinuationLike_parent]: none,
            [__ContinuationLike_priority]: 0,
            [__ContinuationLike_scheduler]: none,
            [__Continuation_effect]: none,
        }), {
            [__ContinuationLike_run]() {
                const scheduler = this[__ContinuationLike_scheduler];
                if (this[__DisposableLike_isDisposed]) {
                    rescheduleChildrenOnParentOrScheduler(this);
                    return;
                }
                // Run any inner continuations first.
                let head = none;
                while (((head = this[__QueueLike_dequeue]()), isSome(head))) {
                    this[__ContinuationLike_activeChild] = head;
                    head[__ContinuationLike_run]();
                    this[__ContinuationLike_activeChild] = none;
                    if (this[__DisposableLike_isDisposed]) {
                        rescheduleChildrenOnParentOrScheduler(this);
                        return;
                    }
                    else if (scheduler[__SchedulerLike_shouldYield]) {
                        rescheduleContinuation(this);
                        return;
                    }
                }
                let err = none;
                let yieldError = none;
                this[__ContinuationLike_activeChild] = this;
                try {
                    this[__Continuation_effect](scheduler);
                }
                catch (e) {
                    if (e instanceof YieldError) {
                        yieldError = e;
                    }
                    else {
                        err = error(e);
                    }
                }
                this[__ContinuationLike_activeChild] = none;
                if (isSome(yieldError) && !this[__DisposableLike_isDisposed]) {
                    if (yieldError.delay > 0) {
                        rescheduleChildrenOnParentOrScheduler(this);
                        scheduler[__ContinuationSchedulerLike_schedule](this, yieldError);
                    }
                    else {
                        rescheduleContinuation(this);
                    }
                }
                else {
                    this[__DisposableLike_dispose](err);
                    rescheduleChildrenOnParentOrScheduler(this);
                }
            },
            [__QueueableLike_enqueue](continuation) {
                continuation[__ContinuationLike_parent] = this;
                return call(indexedQueueProtoype[__QueueableLike_enqueue], this, continuation);
            },
        }));
    })();

    const PriorityScheduler_mixin = 
    /*@__PURE__*/ (() => {
        const getActiveContinuation = (instance) => {
            let parent = instance[__SchedulerMixin_currentContinuation];
            let activeChild = parent?.[__ContinuationLike_activeChild];
            while (isSome(activeChild) && activeChild !== parent) {
                parent = activeChild;
                activeChild = parent[__ContinuationLike_activeChild];
            }
            return parent;
        };
        return mix(include(Disposable_mixin), function SchedulerMixin(instance, maxYieldInterval) {
            init(Disposable_mixin, instance);
            instance[__SchedulerLike_maxYieldInterval] =
                clampPositiveInteger(maxYieldInterval);
            return instance;
        }, props({
            [__SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
            [__SchedulerMixin_currentContinuation]: none,
            [__SchedulerMixin_yieldRequested]: false,
            [__SchedulerMixin_startTime]: 0,
        }), {
            get [__SchedulerLike_inContinuation]() {
                const currentContinuation = this[__SchedulerMixin_currentContinuation];
                return isSome(currentContinuation);
            },
            get [__SchedulerLike_shouldYield]() {
                const inContinuation = this[__SchedulerLike_inContinuation];
                const isDisposed = this[__DisposableLike_isDisposed];
                const yieldRequested = this[__SchedulerMixin_yieldRequested];
                return (inContinuation &&
                    (isDisposed ||
                        yieldRequested ||
                        //exceededMaxYieldInterval
                        this[__SchedulerLike_now] >
                            this[__SchedulerMixin_startTime] +
                                this[__SchedulerLike_maxYieldInterval] ||
                        (getActiveContinuation(this)?.[__CollectionLike_count] ?? 0) > 0 ||
                        this[__PrioritySchedulerImplementationLike_shouldYield]));
            },
            [__SchedulerLike_requestYield]() {
                this[__SchedulerMixin_yieldRequested] = true;
            },
            [__ContinuationSchedulerLike_schedule](continuation, options) {
                if (__DEV__ && continuation[__ContinuationLike_scheduler] !== this) {
                    raiseWithDebugMessage("Attempted to schedule a continuation created on a different scheduler");
                }
                const delay = clampPositiveInteger(options?.delay ?? 0);
                if (continuation[__DisposableLike_isDisposed]) {
                    return;
                }
                const activeContinuation = getActiveContinuation(this);
                if (delay > 0 ||
                    isNone(activeContinuation) ||
                    activeContinuation[__DisposableLike_isDisposed] ||
                    activeContinuation[__ContinuationLike_priority] !==
                        continuation[__ContinuationLike_priority] ||
                    // Occurs when the continuation is rescheduling itself
                    // and there is no non-disposed parent to enqueue itself onto.
                    activeContinuation === continuation ||
                    // Occurs when an active continuation is rescheduling its
                    // children because it will be disposed.
                    continuation[__ContinuationLike_parent] === activeContinuation) {
                    continuation[__ContinuationLike_parent] = none;
                    this[__PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay);
                }
                else {
                    activeContinuation[__QueueableLike_enqueue](continuation);
                }
            },
            [__SchedulerLike_schedule](effect, options) {
                const { priority = 0 } = options ?? {};
                const continuation = pipe(Continuation_create(this, effect, priority), Disposable_addToIgnoringChildErrors(this));
                this[__ContinuationSchedulerLike_schedule](continuation, options);
                return continuation;
            },
            [__SchedulerLike_yield](delay = 0) {
                const shouldYield = delay > 0 || this[__SchedulerLike_shouldYield];
                if (shouldYield) {
                    throw newInstance(YieldError, delay);
                }
            },
            [__PrioritySchedulerImplementationLike_runContinuation](continuation) {
                this[__SchedulerMixin_startTime] = this[__SchedulerLike_now];
                this[__SchedulerMixin_currentContinuation] = continuation;
                this[__SchedulerMixin_yieldRequested] = false;
                continuation[__ContinuationLike_run]();
                this[__SchedulerMixin_yieldRequested] = false;
                this[__SchedulerMixin_currentContinuation] = none;
            },
        });
    })();

    const supportsSetImmediate = typeof setImmediate === "function";
    const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
        navigator.scheduling !== none &&
        navigator.scheduling.isInputPending !== none)();
    const isInputPending = () => supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(_ => clearTimeout(timeout)));
        const timeout = setTimeout(runContinuation, delay, scheduler, continuation, disposable);
    };
    const scheduleImmediate = (scheduler, continuation) => {
        if (supportsSetImmediate) {
            scheduleImmediateWithSetImmediate(scheduler, continuation);
        }
        else {
            scheduleDelayed(scheduler, continuation, 0);
        }
    };
    const runContinuation = (scheduler, continuation, immmediateOrTimerDisposable) => {
        // clear the immediateOrTimer disposable
        immmediateOrTimerDisposable[__DisposableLike_dispose]();
        scheduler[__PrioritySchedulerImplementationLike_runContinuation](continuation);
    };
    const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin), function HostScheduler(instance, maxYieldInterval) {
        init(PriorityScheduler_mixin, instance, maxYieldInterval);
        return instance;
    }, props({}), {
        get [__SchedulerLike_now]() {
            return now();
        },
        get [__PrioritySchedulerImplementationLike_shouldYield]() {
            return isInputPending();
        },
        [__PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            if (delay > 0) {
                scheduleDelayed(this, continuation, delay);
            }
            else {
                scheduleImmediate(this, continuation);
            }
        },
    })))();
    const Scheduler_createHostScheduler = (options = {}) => {
        const { maxYieldInterval = 300 } = options;
        return createHostSchedulerInstance(maxYieldInterval);
    };

    const MutableEnumerator_mixin = 
    /*@__PURE__*/ (() => {
        return pipe(mix(function EnumeratorMixin(instance) {
            return instance;
        }, props({
            [__Enumerator_private_current]: none,
            [__EnumeratorLike_hasCurrent]: false,
        }), {
            get [__EnumeratorLike_current]() {
                return this[__EnumeratorLike_hasCurrent]
                    ? this[__Enumerator_private_current]
                    : raiseWithDebugMessage("Enumerator does not have current value");
            },
            set [__EnumeratorLike_current](v) {
                this[__Enumerator_private_current] = v;
                this[__EnumeratorLike_hasCurrent] = true;
            },
            [__MutableEnumeratorLike_reset]() {
                this[__Enumerator_private_current] = none;
                this[__EnumeratorLike_hasCurrent] = false;
            },
        }), returns);
    })();

    const Queue_priorityQueueMixin = /*@__PURE__*/ (() => {
        const IndexedQueuePrototype = getPrototype(Queue_indexedQueueMixin());
        const siftDown = (queue, item) => {
            const compare = queue[__PriorityQueueImpl_comparator];
            const count = queue[__CollectionLike_count];
            for (let index = 0; index < count;) {
                const leftIndex = (index + 1) * 2 - 1;
                const rightIndex = leftIndex + 1;
                const hasLeft = leftIndex >= 0 && leftIndex < count;
                const hasRight = rightIndex >= 0 && rightIndex < count;
                const left = hasLeft ? queue[__KeyedCollectionLike_get](leftIndex) : none;
                const right = hasRight
                    ? queue[__KeyedCollectionLike_get](rightIndex)
                    : none;
                if (hasLeft && compare(left, item) < 0) {
                    if (hasRight && compare(right, left) < 0) {
                        queue[__MutableKeyedCollectionLike_set](index, right);
                        queue[__MutableKeyedCollectionLike_set](rightIndex, item);
                        index = rightIndex;
                    }
                    else {
                        queue[__MutableKeyedCollectionLike_set](index, left);
                        queue[__MutableKeyedCollectionLike_set](leftIndex, item);
                        index = leftIndex;
                    }
                }
                else if (hasRight && compare(right, item) < 0) {
                    queue[__MutableKeyedCollectionLike_set](index, right);
                    queue[__MutableKeyedCollectionLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    break;
                }
            }
        };
        const siftUp = (queue, item) => {
            const compare = queue[__PriorityQueueImpl_comparator];
            const count = queue[__CollectionLike_count];
            for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
                parentIndex <= count &&
                compare(queue[__KeyedCollectionLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
                const parent = queue[__KeyedCollectionLike_get](parentIndex);
                queue[__MutableKeyedCollectionLike_set](parentIndex, item);
                queue[__MutableKeyedCollectionLike_set](index, parent);
            }
        };
        return pipe(mix(include(Queue_indexedQueueMixin()), function PriorityQueue(instance, comparator, capacity, backpressureStrategy) {
            init(Queue_indexedQueueMixin(), instance, capacity, backpressureStrategy);
            instance[__PriorityQueueImpl_comparator] = comparator;
            return instance;
        }, props({
            [__PriorityQueueImpl_comparator]: none,
        }), {
            [__QueueLike_dequeue]() {
                const count = this[__CollectionLike_count];
                if (count === 0) {
                    return none;
                }
                else if (count === 1) {
                    return call(IndexedQueuePrototype[__QueueLike_dequeue], this);
                }
                else {
                    const first = this[__KeyedCollectionLike_get](0);
                    const last = this[__StackLike_pop]();
                    this[__MutableKeyedCollectionLike_set](0, last);
                    siftDown(this, last);
                    return first;
                }
            },
            [__QueueableLike_enqueue](item) {
                const backpressureStrategy = this[__QueueableLike_backpressureStrategy];
                const count = this[__CollectionLike_count];
                const capacity = this[__BufferLike_capacity];
                if (backpressureStrategy === "drop-latest" && count >= capacity) {
                    return false;
                }
                else if (backpressureStrategy === "drop-oldest" &&
                    count >= capacity) {
                    this[__QueueLike_dequeue]();
                }
                else if (backpressureStrategy === "throw" && count >= capacity) {
                    raiseWithDebugMessage("attempting to enqueue a value to a queue that is full");
                }
                const result = call(IndexedQueuePrototype[__QueueableLike_enqueue], this, item);
                siftUp(this, item);
                return result;
            },
        }), returns);
    })();

    const Disposable_add = (child) => (parent) => {
        parent[__DisposableLike_add](child);
        pipe(child, Disposable_onError(bindMethod(parent, __DisposableLike_dispose)));
        return parent;
    };

    const SerialDisposable_mixin = /*@__PURE__*/ (() => {
        return pipe(mix(function SerialDisposable(instance, defaultValue) {
            instance[__SerialDisposableMixin_current] = defaultValue;
            pipe(instance, Disposable_add(defaultValue));
            return instance;
        }, props({
            [__SerialDisposableMixin_current]: none,
        }), {
            get [__SerialDisposableLike_current]() {
                return this[__SerialDisposableMixin_current];
            },
            set [__SerialDisposableLike_current](v) {
                const oldValue = this[__SerialDisposableMixin_current];
                oldValue[__DisposableLike_dispose]();
                this[__SerialDisposableMixin_current] = v;
                pipe(this, Disposable_add(v));
            },
        }), returns);
    })();

    const Queue_createPriorityQueue = /*@__PURE__*/ (() => createInstanceFactory(Queue_priorityQueueMixin()))();

    const Scheduler_createQueueScheduler = /*@__PURE__*/ (() => {
        const delayedComparator = (a, b) => {
            let diff = 0;
            diff =
                diff !== 0
                    ? diff
                    : a[__SchedulerTaskLike_dueTime] - b[__SchedulerTaskLike_dueTime];
            diff =
                diff !== 0 ? diff : b[__SchedulerTaskLike_id] - a[__SchedulerTaskLike_id];
            return diff;
        };
        const peek = (instance) => {
            const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = instance;
            const now = instance[__QueueScheduler_hostScheduler][__SchedulerLike_now];
            while (true) {
                const task = delayed[__QueueLike_head];
                if (isNone(task)) {
                    break;
                }
                const taskIsDispose = task[__SchedulerTaskLike_continuation][__DisposableLike_isDisposed];
                if (task[__SchedulerTaskLike_dueTime] > now && !taskIsDispose) {
                    break;
                }
                delayed[__QueueLike_dequeue]();
                if (!taskIsDispose) {
                    queue[__QueueableLike_enqueue](task);
                }
            }
            let task = none;
            while (true) {
                task = queue[__QueueLike_head];
                if (isNone(task)) {
                    break;
                }
                if (!task[__SchedulerTaskLike_continuation][__DisposableLike_isDisposed]) {
                    break;
                }
                queue[__QueueLike_dequeue]();
            }
            return task ?? delayed[__QueueLike_head];
        };
        const priorityShouldYield = (instance, next) => {
            const { [__EnumeratorLike_current]: current } = instance;
            return (current !== next &&
                next[__SchedulerTaskLike_dueTime] <=
                    instance[__QueueScheduler_hostScheduler][__SchedulerLike_now] &&
                next[__PrioritySchedulerTaskLike_priority] >
                    current[__PrioritySchedulerTaskLike_priority]);
        };
        const scheduleOnHost = (instance) => {
            const task = peek(instance);
            const continuationActive = !instance[__SerialDisposableLike_current][__DisposableLike_isDisposed] &&
                isSome(task) &&
                instance[__QueueScheduler_dueTime] <= task[__SchedulerTaskLike_dueTime];
            if (isNone(task) ||
                continuationActive ||
                instance[__PauseableLike_isPaused]) {
                return;
            }
            const dueTime = task[__SchedulerTaskLike_dueTime];
            const delay = clampPositiveInteger(dueTime - instance[__QueueScheduler_hostScheduler][__SchedulerLike_now]);
            instance[__QueueScheduler_dueTime] = dueTime;
            const continuation = instance[__QueueScheduler_hostContinuation] ??
                ((scheduler) => {
                    for (let task = peek(instance); isSome(task) && !instance[__DisposableLike_isDisposed]; task = peek(instance)) {
                        const { [__SchedulerTaskLike_continuation]: continuation, [__SchedulerTaskLike_dueTime]: dueTime, } = task;
                        const delay = clampPositiveInteger(dueTime -
                            instance[__QueueScheduler_hostScheduler][__SchedulerLike_now]);
                        if (delay > 0) {
                            instance[__QueueScheduler_dueTime] =
                                instance[__QueueScheduler_hostScheduler][__SchedulerLike_now] +
                                    delay;
                        }
                        else {
                            instance[__EnumeratorLike_move]();
                            instance[__PrioritySchedulerImplementationLike_runContinuation](continuation);
                        }
                        scheduler[__SchedulerLike_yield](delay);
                    }
                });
            instance[__QueueScheduler_hostContinuation] = continuation;
            instance[__SerialDisposableLike_current] = instance[__QueueScheduler_hostScheduler][__SchedulerLike_schedule](continuation, { delay });
        };
        return createInstanceFactory(mix(include(PriorityScheduler_mixin, MutableEnumerator_mixin(), SerialDisposable_mixin()), function QueueScheduler(instance, host, createImmediateQueue) {
            init(PriorityScheduler_mixin, instance, host[__SchedulerLike_maxYieldInterval]);
            init(MutableEnumerator_mixin(), instance);
            init(SerialDisposable_mixin(), instance, Disposable_disposed);
            instance[__QueueScheduler_delayed] = Queue_createPriorityQueue(delayedComparator, MAX_SAFE_INTEGER, "overflow");
            (instance[__QueueScheduler_queue] = createImmediateQueue()),
                (instance[__QueueScheduler_hostScheduler] = host);
            return instance;
        }, props({
            [__QueueScheduler_delayed]: none,
            [__QueueScheduler_dueTime]: 0,
            [__QueueScheduler_hostScheduler]: none,
            [__QueueScheduler_hostContinuation]: none,
            [__PauseableLike_isPaused]: false,
            [__QueueScheduler_queue]: none,
            [__QueueScheduler_taskIDCounter]: 0,
        }), {
            get [__SchedulerLike_now]() {
                return this[__QueueScheduler_hostScheduler][__SchedulerLike_now];
            },
            get [__PrioritySchedulerImplementationLike_shouldYield]() {
                const next = peek(this);
                return (!this[__EnumeratorLike_hasCurrent] ||
                    this[__PauseableLike_isPaused] ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    this[__QueueScheduler_hostScheduler][__SchedulerLike_shouldYield]);
            },
            [__PauseableLike_pause]() {
                this[__PauseableLike_isPaused] = true;
                this[__SerialDisposableLike_current] = Disposable_disposed;
            },
            [__PauseableLike_resume]() {
                this[__PauseableLike_isPaused] = false;
                scheduleOnHost(this);
            },
            [__EnumeratorLike_move]() {
                // First fast forward through disposed tasks.
                peek(this);
                const task = this[__QueueScheduler_queue][__QueueLike_dequeue]();
                if (isSome(task)) {
                    this[__EnumeratorLike_current] = task;
                }
                return this[__EnumeratorLike_hasCurrent];
            },
            [__PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
                const priority = continuation[__ContinuationLike_priority];
                const now = this[__SchedulerLike_now];
                const dueTime = max(now + delay, now);
                const task = this[__SchedulerLike_inContinuation] &&
                    this[__EnumeratorLike_hasCurrent] &&
                    this[__EnumeratorLike_current][__SchedulerTaskLike_continuation] ===
                        continuation &&
                    delay <= 0
                    ? this[__EnumeratorLike_current]
                    : {
                        [__SchedulerTaskLike_id]: this[__QueueScheduler_taskIDCounter]++,
                        [__SchedulerTaskLike_continuation]: continuation,
                        [__SchedulerTaskLike_dueTime]: dueTime,
                        [__PrioritySchedulerTaskLike_priority]: clampPositiveInteger(priority ?? MAX_SAFE_INTEGER),
                    };
                const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = this;
                const targetQueue = dueTime > now ? delayed : queue;
                targetQueue[__QueueableLike_enqueue](task);
                scheduleOnHost(this);
            },
        }));
    })();

    const Scheduler_toPauseableScheduler = (hostScheduler) => {
        const scheduler = Scheduler_createQueueScheduler(hostScheduler, () => Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow"));
        scheduler[__PauseableLike_pause]();
        return scheduler;
    };

    const createHostScheduler = Scheduler_createHostScheduler;

    const Observable_createWithConfig = 
    /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(function CreateObservable(instance, effect, config) {
            instance[__CreateObservable_effect] = effect;
            instance[__ObservableLike_isEnumerable] =
                config[__ObservableLike_isEnumerable];
            instance[__ObservableLike_isRunnable] =
                config[__ObservableLike_isEnumerable] ||
                    config[__ObservableLike_isRunnable];
            return instance;
        }, props({
            [__CreateObservable_effect]: none,
            [__ObservableLike_isRunnable]: false,
            [__ObservableLike_isEnumerable]: false,
        }), {
            [__ObservableLike_observe](observer) {
                try {
                    this[__CreateObservable_effect](observer);
                }
                catch (e) {
                    observer[__DisposableLike_dispose](error(e));
                }
            },
        }));
    })();

    const Enumerable_create = (f) => Observable_createWithConfig(f, {
        [__ObservableLike_isEnumerable]: true,
        [__ObservableLike_isRunnable]: true,
    });

    const Runnable_create = (f) => Observable_createWithConfig(f, {
        [__ObservableLike_isEnumerable]: false,
        [__ObservableLike_isRunnable]: true,
    });

    const ReadonlyArray_toContainer = (factory) => (options) => values => {
        const valuesLength = ReadonlyArray_getLength(values);
        const { start: startOption, count: countOption = MAX_SAFE_INTEGER, ...tail } = options ?? {};
        const start = countOption >= 0
            ? clamp(0, startOption ?? 0, valuesLength)
            : clamp(-1, startOption ?? valuesLength - 1, valuesLength - 1);
        const count = countOption >= 0
            ? clamp(0, countOption, valuesLength - start)
            : -min(abs(countOption), start + 1);
        return factory(values, start, count, tail);
    };

    const ReadonlyArray_toObservable = 
    /*@__PURE__*/
    ReadonlyArray_toContainer((values, startIndex, count, options) => {
        const { delay = 0, delayStart = false } = options ?? {};
        const onSubscribe = (observer) => {
            let index = startIndex, cnt = count;
            const continuation = (scheduler) => {
                while (!observer[__DisposableLike_isDisposed] && cnt !== 0) {
                    const value = values[index];
                    if (cnt > 0) {
                        index++;
                        cnt--;
                    }
                    else {
                        index--;
                        cnt++;
                    }
                    observer[__ObserverLike_notify](value);
                    scheduler[__SchedulerLike_yield](delay);
                }
                observer[__DisposableLike_dispose]();
            };
            pipe(observer[__SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
        };
        return delay > 0
            ? Runnable_create(onSubscribe)
            : Enumerable_create(onSubscribe);
    });

    const Optional_toReadonlyArray = () => (optional) => isSome(optional) ? [optional] : [];

    const Optional_toObservable = ((options) => {
        const { delay = 0 } = options ?? {};
        const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;
        return compose(Optional_toReadonlyArray(), ReadonlyArray_toObservable(toObservableOptions));
    });

    const ReadonlyArray_mapWithKey = (selector) => (arr) => arr.map(selector);

    const ReadonlyArray_map = ReadonlyArray_mapWithKey;

    const Disposable_onComplete = (teardown) => disposable => {
        disposable[__DisposableLike_add](e => {
            if (isNone(e)) {
                teardown();
            }
        });
        return disposable;
    };

    const Scheduler_delegatingMixin = /*@__PURE__*/ (() => {
        return mix(function DelegatingSchedulerMixin(instance, delegate) {
            instance[__DelegatingSchedulerMixin_delegate] = delegate;
            return instance;
        }, props({
            [__DelegatingSchedulerMixin_delegate]: none,
        }), {
            get [__SchedulerLike_inContinuation]() {
                return this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_inContinuation];
            },
            get [__SchedulerLike_maxYieldInterval]() {
                return this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_maxYieldInterval];
            },
            get [__SchedulerLike_now]() {
                return this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_now];
            },
            get [__SchedulerLike_shouldYield]() {
                return this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_shouldYield];
            },
            [__SchedulerLike_requestYield]() {
                this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_requestYield]();
            },
            [__SchedulerLike_schedule](continuation, options) {
                return pipe(this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_schedule](continuation, options), Disposable_addToIgnoringChildErrors(this));
            },
            [__SchedulerLike_yield](delay) {
                this[__DelegatingSchedulerMixin_delegate][__SchedulerLike_yield](delay);
            },
        });
    })();

    const Observer_assertState = (observer) => {
        if (__DEV__ &&
            (!observer[__SchedulerLike_inContinuation] ||
                observer[__DisposableLike_isDisposed])) {
            raiseWithDebugMessage("Notifying an observer in an invalid state");
        }
    };

    const Observer_baseMixin = /*@__PURE__*/ (() => {
        const scheduleDrainQueue = (observer) => {
            if (observer[__ObserverMixin_dispatchSubscription][__DisposableLike_isDisposed]) {
                const continuation = (scheduler) => {
                    while (observer[__CollectionLike_count] > 0) {
                        const next = observer[__QueueLike_dequeue]();
                        observer[__ObserverLike_notify](next);
                        if (observer[__CollectionLike_count] > 0) {
                            scheduler[__SchedulerLike_yield]();
                        }
                    }
                    if (observer[__ObserverMixin_isCompleted]) {
                        observer[__DisposableLike_dispose]();
                    }
                };
                observer[__ObserverMixin_dispatchSubscription] = pipe(observer[__SchedulerLike_schedule](continuation), Disposable_addTo(observer));
            }
        };
        const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
        return returns(mix(include(Queue_indexedQueueMixin()), function ObserverMixin(instance, config) {
            init(
            // FIXME: Change this to take a config
            Queue_indexedQueueMixin(), instance, config[__BufferLike_capacity], config[__QueueableLike_backpressureStrategy]);
            return instance;
        }, props({
            [__ObserverMixin_isCompleted]: false,
            [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
        }), {
            [__QueueableLike_enqueue](next) {
                if (!this[__ObserverMixin_isCompleted] &&
                    !this[__DisposableLike_isDisposed]) {
                    const result = call(indexedQueueProtoype[__QueueableLike_enqueue], this, next);
                    scheduleDrainQueue(this);
                    return result;
                }
                return true;
            },
            [__DispatcherLike_complete]() {
                const isCompleted = this[__ObserverMixin_isCompleted];
                this[__ObserverMixin_isCompleted] = true;
                if (this[__ObserverMixin_dispatchSubscription][__DisposableLike_isDisposed] &&
                    !isCompleted) {
                    this[__DisposableLike_dispose]();
                }
            },
        }));
    })();

    const Observer_mixin = /*@__PURE__*/ (() => returns(mix(include(Observer_baseMixin(), Scheduler_delegatingMixin, Disposable_mixin), function ObserverMixin(instance, scheduler, config) {
        init(Disposable_mixin, instance);
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin(), instance, config);
        return instance;
    }, props({}), {
        [__ObserverLike_notify](_) {
            Observer_assertState(this);
        },
    })))();

    const Observer_createWithDelegate = 
    /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(include(Observer_mixin()), function DelegatingObserver(instance, delegate) {
            init(Observer_mixin(), instance, delegate, delegate);
            instance[__ObserverLike_notify] = bindMethod(delegate, __ObserverLike_notify);
            return instance;
        }, props({
            [__ObserverLike_notify]: none,
        }), {}));
    })();

    const Observer_sourceFrom = (source) => observer => {
        source[__ObservableLike_observe](observer);
        return observer;
    };

    const ReadonlyArray_everySatisfy = (predicate) => arr => arr.every(predicate);

    const Observable_isEnumerable = (obs) => obs[__ObservableLike_isEnumerable];

    const Observable_allAreEnumerable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isEnumerable), ReadonlyArray_everySatisfy(isTrue)))();

    const Observable_isRunnable = (obs) => obs[__ObservableLike_isRunnable];

    const Observable_allAreRunnable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_everySatisfy(isTrue)))();

    const Delegating_mixin = /*@__PURE__*/ (() => {
        return pipe(mix(function DelegatingDisposableMixin(instance, delegate) {
            instance[__DelegatingLike_delegate] = delegate;
            return instance;
        }, props({
            [__DelegatingLike_delegate]: none,
        }), {}), returns);
    })();

    class LiftedObservable {
        [__LiftedLike_source];
        [__LiftedLike_operators];
        [__ObservableLike_isEnumerable];
        [__ObservableLike_isRunnable];
        constructor(source, operators, isEnumerable, isRunnable) {
            this[__LiftedLike_source] = source;
            this[__LiftedLike_operators] = operators;
            this[__ObservableLike_isEnumerable] = isEnumerable;
            this[__ObservableLike_isRunnable] = isRunnable;
        }
        [__ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[__LiftedLike_operators], Observer_sourceFrom(this[__LiftedLike_source]));
        }
    }
    const Observable_lift = ((config) => (operator) => source => {
        const sourceSource = source[__LiftedLike_source] ?? source;
        const allFunctions = [
            operator,
            ...(source[__LiftedLike_operators] ?? []),
        ];
        const isLiftedEnumerable = config[__ObservableLike_isEnumerable] &&
            sourceSource[__ObservableLike_isEnumerable];
        const isLiftedRunnable = (config[__ObservableLike_isEnumerable] ||
            config[__ObservableLike_isRunnable]) &&
            sourceSource[__ObservableLike_isRunnable];
        return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
    });

    const Enumerable_lift = Observable_lift({
        [__ObservableLike_isEnumerable]: true,
        [__ObservableLike_isRunnable]: true,
    });

    const Disposable_delegatingMixin = 
    /*@__PURE__*/ (() => {
        return mix(function DelegatingDisposableMixin(instance, delegate) {
            instance[__DelegatingDisposableMixin_delegate] = delegate;
            pipe(delegate, Disposable_onDisposed(_ => {
                instance[__DisposableLike_isDisposed] = true;
            }));
            return instance;
        }, props({
            [__DelegatingDisposableMixin_delegate]: none,
            [__DisposableLike_isDisposed]: false,
        }), {
            get [__DisposableLike_error]() {
                return this[__DelegatingDisposableMixin_delegate][__DisposableLike_error];
            },
            [__DisposableLike_add](disposable) {
                this[__DelegatingDisposableMixin_delegate][__DisposableLike_add](disposable);
            },
            [__DisposableLike_dispose](error) {
                this[__DelegatingDisposableMixin_delegate][__DisposableLike_dispose](error);
            },
        });
    })();

    const Observer_delegatingMixin = /*@__PURE__*/ (() => returns(mix(include(Observer_baseMixin(), Scheduler_delegatingMixin, Disposable_delegatingMixin), function ObserverMixin(instance, delegate, config) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(Scheduler_delegatingMixin, instance, delegate);
        init(Observer_baseMixin(), instance, config);
        return instance;
    }, props({}), {})))();

    const Observable_enqueue = /*@__PURE__*/ (() => {
        const createEnqueueObserver = (() => {
            return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function EnqueueObserver(instance, delegate, effect) {
                init(Observer_delegatingMixin(), instance, delegate, delegate);
                init(Delegating_mixin(), instance, delegate);
                instance[__EnqueueObserver_effect] = effect;
                return instance;
            }, props({
                [__EnqueueObserver_effect]: none,
            }), {
                [__ObserverLike_notify](next) {
                    Observer_assertState(this);
                    if (!this[__EnqueueObserver_effect](next)) {
                        this[__SchedulerLike_requestYield]();
                    }
                    this[__DelegatingLike_delegate][__ObserverLike_notify](next);
                },
            }));
        })();
        return ((queue) => {
            const effect = isFunction(queue)
                ? queue
                : bindMethod(queue, __QueueableLike_enqueue);
            return pipe(createEnqueueObserver, partial(effect), Enumerable_lift);
        });
    })();

    const Observable_forEach = (effect) => Observable_enqueue(compose(effect, alwaysTrue));

    const Observer_create = /*@__PURE__*/ (() => createInstanceFactory(Observer_mixin()))();

    const Observable_subscribeWithConfig = (scheduler, config) => observable => pipe(Observer_create(scheduler, config), Observer_sourceFrom(observable));

    const Observable_generate = ((generator, initialValue, options) => {
        const { delay = 0, delayStart = false } = options ?? {};
        const onSubscribe = (observer) => {
            let acc = initialValue();
            const continuation = (scheduler) => {
                while (!observer[__DisposableLike_isDisposed]) {
                    acc = generator(acc);
                    observer[__ObserverLike_notify](acc);
                    scheduler[__SchedulerLike_yield](delay);
                }
            };
            pipe(observer[__SchedulerLike_schedule](continuation, delayStart ? options : none), Disposable_addTo(observer));
        };
        return delay > 0
            ? Runnable_create(onSubscribe)
            : Enumerable_create(onSubscribe);
    });

    const Observable_backpressureStrategy = 
    /*@__PURE__*/ (() => {
        const createBackpressureObserver = (() => createInstanceFactory(mix(include(Observer_delegatingMixin(), Disposable_delegatingMixin, Delegating_mixin()), function EnqueueObserver(instance, delegate, config) {
            init(Disposable_delegatingMixin, instance, delegate);
            init(Observer_delegatingMixin(), instance, delegate, config);
            init(Delegating_mixin(), instance, delegate);
            return instance;
        }, props({}), {
            [__ObserverLike_notify](next) {
                this[__DelegatingLike_delegate][__ObserverLike_notify](next);
            },
        })))();
        return ((capacity, backpressureStrategy) => pipe(createBackpressureObserver, partial({
            [__QueueableLike_backpressureStrategy]: backpressureStrategy,
            [__BufferLike_capacity]: capacity,
        }), Enumerable_lift));
    })();

    const Observable_create = (f) => Observable_createWithConfig(f, {
        [__ObservableLike_isEnumerable]: false,
        [__ObservableLike_isRunnable]: false,
    });

    const Container_concatWith = (concat) => (snd, ...tail) => first => concat(first, snd, ...tail);

    const Observable_distinctUntilChanged = 
    /*@__PURE__*/ (() => {
        const createDistinctUntilChangedObserver = (() => {
            return createInstanceFactory(mix(include(Observer_delegatingMixin(), Delegating_mixin()), function DistinctUntilChangedObserver(instance, delegate, equality) {
                init(Observer_delegatingMixin(), instance, delegate, delegate);
                init(Delegating_mixin(), instance, delegate);
                instance[__DistinctUntilChangedObserver_equality] = equality;
                return instance;
            }, props({
                [__DistinctUntilChangedObserver_equality]: none,
                [__DistinctUntilChangedObserver_prev]: none,
                [__DistinctUntilChangedObserver_hasValue]: false,
            }), {
                [__ObserverLike_notify](next) {
                    Observer_assertState(this);
                    const shouldEmit = !this[__DistinctUntilChangedObserver_hasValue] ||
                        !this[__DistinctUntilChangedObserver_equality](this[__DistinctUntilChangedObserver_prev], next);
                    if (shouldEmit) {
                        this[__DistinctUntilChangedObserver_prev] = next;
                        this[__DistinctUntilChangedObserver_hasValue] = true;
                        this[__DelegatingLike_delegate][__ObserverLike_notify](next);
                    }
                },
            }));
        })();
        return ((options) => {
            const { equality = strictEquality } = options ?? {};
            return pipe(createDistinctUntilChangedObserver, partial(equality), Enumerable_lift);
        });
    })();

    const Observable_subscribe = (scheduler, options) => Observable_subscribeWithConfig(scheduler, {
        [__BufferLike_capacity]: options?.capacity ?? MAX_SAFE_INTEGER,
        [__QueueableLike_backpressureStrategy]: options?.backpressureStrategy ?? "overflow",
    });

    const Observable_mergeObservables = /*@__PURE__*/ (() => {
        const createMergeObserver = (delegate, count, ctx) => pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate), Disposable_onComplete(() => {
            ctx[__MergeObserverCtx_completedCount]++;
            if (ctx[__MergeObserverCtx_completedCount] >= count) {
                delegate[__DisposableLike_dispose]();
            }
        }));
        return (observables) => {
            const onSubscribe = (observer) => {
                const count = ReadonlyArray_getLength(observables);
                const ctx = { [__MergeObserverCtx_completedCount]: 0 };
                for (const observable of observables) {
                    pipe(createMergeObserver(observer, count, ctx), Observer_sourceFrom(observable));
                }
            };
            const isEnumerable = Observable_allAreEnumerable(observables);
            const isRunnable = Observable_allAreRunnable(observables);
            return isEnumerable
                ? Enumerable_create(onSubscribe)
                : isRunnable
                    ? Runnable_create(onSubscribe)
                    : Observable_create(onSubscribe);
        };
    })();

    const Observable_merge = ((...observables) => Observable_mergeObservables(observables));

    const Observable_mergeWith = 
    /*@__PURE__*/ Container_concatWith(Observable_merge);

    const Disposable_bindTo = (child) => (parent) => {
        parent[__DisposableLike_add](child);
        child[__DisposableLike_add](parent);
        return parent;
    };

    const MulticastObservable_delegatingMixin = /*@__PURE__*/ (() => {
        return returns(mix(function DelegatingMulticastObservableMixin(instance, delegate) {
            instance[__DelegatingMulticastObservableMixin_delegate] = delegate;
            return instance;
        }, props({
            [__DelegatingMulticastObservableMixin_delegate]: none,
        }), {
            get [__ReplayableLike_buffer]() {
                return this[__DelegatingMulticastObservableMixin_delegate][__ReplayableLike_buffer];
            },
            get [__ObservableLike_isEnumerable]() {
                return this[__DelegatingMulticastObservableMixin_delegate][__ObservableLike_isEnumerable];
            },
            get [__ObservableLike_isRunnable]() {
                return this[__DelegatingMulticastObservableMixin_delegate][__ObservableLike_isRunnable];
            },
            [__ObservableLike_observe](observer) {
                this[__DelegatingMulticastObservableMixin_delegate][__ObservableLike_observe](observer);
            },
        }));
    })();

    const Iterator_enumerate = 
    /*@__PURE__*/ (() => {
        const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function IteratorEnumerator(instance, iterator) {
            init(MutableEnumerator_mixin(), instance);
            instance[__IteratorEnumerator_iterator] = iterator;
            return instance;
        }, props({
            [__IteratorEnumerator_iterator]: none,
        }), {
            [__EnumeratorLike_move]() {
                this[__MutableEnumeratorLike_reset]();
                const next = this[__IteratorEnumerator_iterator].next();
                if (!next.done) {
                    this[__EnumeratorLike_current] = next.value;
                }
                return this[__EnumeratorLike_hasCurrent];
            },
        }));
        return returns(createEnumerator);
    })();

    const Iterable_enumerate = /*@__PURE__*/ (() => returns((iterable) => pipe(iterable[Symbol.iterator](), Iterator_enumerate())))();

    const Publisher_create = /*@__PURE__*/ (() => {
        const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function Publisher(instance, replay) {
            init(Disposable_mixin, instance);
            instance[__Publisher_observers] = newInstance(Set);
            instance[__ReplayableLike_buffer] = Queue_createIndexedQueue(replay, "drop-oldest");
            pipe(instance, Disposable_onDisposed(e => {
                const enumerator = pipe(instance[__Publisher_observers], Iterable_enumerate());
                while (enumerator[__EnumeratorLike_move]()) {
                    const observer = enumerator[__EnumeratorLike_current];
                    if (isSome(e)) {
                        observer[__DisposableLike_dispose](e);
                    }
                    else {
                        observer[__DispatcherLike_complete]();
                    }
                }
            }));
            return instance;
        }, props({
            [__Publisher_observers]: none,
            [__ReplayableLike_buffer]: none,
        }), {
            [__EventListenerLike_isErrorSafe]: true,
            [__ObservableLike_isEnumerable]: false,
            [__ObservableLike_isRunnable]: false,
            get [__PublisherLike_observerCount]() {
                return this[__Publisher_observers].size;
            },
            [__EventListenerLike_notify](next) {
                if (this[__DisposableLike_isDisposed]) {
                    return;
                }
                this[__ReplayableLike_buffer][__QueueableLike_enqueue](next);
                for (const observer of this[__Publisher_observers]) {
                    try {
                        observer[__QueueableLike_enqueue](next);
                    }
                    catch (e) {
                        observer[__DisposableLike_dispose](error(e));
                    }
                }
            },
            [__ObservableLike_observe](observer) {
                if (!this[__DisposableLike_isDisposed]) {
                    const { [__Publisher_observers]: observers } = this;
                    observers.add(observer);
                    pipe(observer, Disposable_onDisposed(_ => {
                        observers.delete(observer);
                    }));
                }
                // The idea here is that an onSubscribe function may
                // call next from unscheduled sources such as event handlers.
                // So we marshall those events back to the scheduler.
                const buffer = this[__ReplayableLike_buffer];
                const count = buffer[__CollectionLike_count];
                try {
                    for (let i = 0; i < count; i++) {
                        const next = buffer[__KeyedCollectionLike_get](i);
                        observer[__QueueableLike_enqueue](next);
                    }
                }
                catch (e) {
                    observer[__DisposableLike_dispose](error(e));
                }
            },
        }));
        return (options) => {
            const replay = clampPositiveInteger(options?.replay ?? 0);
            return createPublisherInstance(replay);
        };
    })();

    const Observable_multicastImpl = (publisherFactory, schedulerOrFactory, options = {}) => observable => {
        const { backpressureStrategy = "overflow", capacity = MAX_SAFE_INTEGER, replay = 0, } = options;
        const publisher = publisherFactory({ replay });
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable_addTo(publisher))
            : schedulerOrFactory;
        pipe(observable, Observable_forEach(bindMethod(publisher, __EventListenerLike_notify)), Observable_subscribeWithConfig(scheduler, {
            [__BufferLike_capacity]: capacity,
            [__QueueableLike_backpressureStrategy]: backpressureStrategy,
        }), Disposable_bindTo(publisher));
        return publisher;
    };

    const Observable_multicast = (schedulerOrFactory, options = {}) => Observable_multicastImpl(Publisher_create, schedulerOrFactory, options);

    const Queueable_delegatingMixin = /*@__PURE__*/ (() => {
        return returns(mix(function DelegatingQueueableMixin(instance, delegate) {
            instance[__DelegatingQueueableMixin_delegate] = delegate;
            return instance;
        }, props({
            [__DelegatingQueueableMixin_delegate]: none,
        }), {
            get [__QueueableLike_backpressureStrategy]() {
                return this[__DelegatingQueueableMixin_delegate][__QueueableLike_backpressureStrategy];
            },
            get [__BufferLike_capacity]() {
                return this[__DelegatingQueueableMixin_delegate][__BufferLike_capacity];
            },
            [__QueueableLike_enqueue](v) {
                return this[__DelegatingQueueableMixin_delegate][__QueueableLike_enqueue](v);
            },
        }));
    })();

    const Dispatcher_delegatingMixin = /*@__PURE__*/ (() => {
        return returns(mix(include(Queueable_delegatingMixin()), function DelegatingDispatcherMixin(instance, delegate) {
            init(Queueable_delegatingMixin(), instance, delegate);
            instance[__DelegatingDispatcherMixin_delegate] = delegate;
            return instance;
        }, props({
            [__DelegatingDispatcherMixin_delegate]: none,
        }), {
            [__DispatcherLike_complete]() {
                this[__DelegatingDispatcherMixin_delegate][__DispatcherLike_complete]();
            },
        }));
    })();

    const DispatchedObservable_create = 
    /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(function DispatchedObservable(instance) {
            return instance;
        }, props({
            [__DispatchedObservable_observer]: none,
        }), {
            [__ObservableLike_isEnumerable]: false,
            [__ObservableLike_isRunnable]: false,
            get [__QueueableLike_backpressureStrategy]() {
                const observer = this[__DispatchedObservable_observer];
                return observer[__QueueableLike_backpressureStrategy];
            },
            get [__BufferLike_capacity]() {
                // Practically the observer can never be none.
                const observer = this[__DispatchedObservable_observer];
                return observer[__BufferLike_capacity];
            },
            [__QueueableLike_enqueue](next) {
                const observer = this[__DispatchedObservable_observer];
                // Practically the observer can never be none,
                // unless the stream operator uses fromFactory subscriptions
                // eg. concat.
                if (__DEV__ && isNone(observer)) {
                    raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
                }
                const inContinuation = observer[__SchedulerLike_inContinuation];
                // Observer only implement Queueable publicly so cast to the implementation interface
                // to enable bypassing the queue
                const observerQueueIsEmpty = observer[__CollectionLike_count] === 0;
                const isDisposed = observer[__DisposableLike_isDisposed];
                if (inContinuation && observerQueueIsEmpty && !isDisposed) {
                    observer[__ObserverLike_notify](next);
                    return true;
                }
                else if (!isDisposed) {
                    return observer[__QueueableLike_enqueue](next);
                }
                else {
                    return true;
                }
            },
            [__DispatcherLike_complete]() {
                const observer = this[__DispatchedObservable_observer];
                // Practically the observer can never be none,
                // unless the stream operator uses fromFactory subscriptions
                // eg. concat.
                if (__DEV__ && isNone(observer)) {
                    raiseWithDebugMessage("DispatchedObservable has not been subscribed to yet");
                }
                observer[__DispatcherLike_complete]();
            },
            [__ObservableLike_observe](observer) {
                if (isSome(this[__DispatchedObservable_observer])) {
                    raiseWithDebugMessage("DispatchedObservable already subscribed to");
                }
                this[__DispatchedObservable_observer] = observer;
            },
        }));
    })();
    const Stream_mixin = /*@__PURE__*/ (() => returns(mix(include(Dispatcher_delegatingMixin(), MulticastObservable_delegatingMixin(), Disposable_delegatingMixin), function StreamMixin(instance, op, scheduler, multicastOptions) {
        instance[__StreamLike_scheduler] = scheduler;
        const dispatchedObservable = DispatchedObservable_create();
        const delegate = pipe(dispatchedObservable, op, Observable_multicast(scheduler, multicastOptions));
        init(Disposable_delegatingMixin, instance, delegate);
        init(Dispatcher_delegatingMixin(), instance, dispatchedObservable);
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({
        [__StreamLike_scheduler]: none,
    }), {})))();

    const PauseableObservable_create = /*@__PURE__*/ (() => {
        return createInstanceFactory(mix(include(Stream_mixin()), function PauseableObservable(instance, op, scheduler, multicastOptions) {
            const publisher = Publisher_create({ replay: 1 });
            const liftedOp = compose(Observable_backpressureStrategy(1, "drop-oldest"), Observable_mergeWith(
            // Initialize to paused state
            pipe(true, Optional_toObservable())), Observable_distinctUntilChanged(), Observable_forEach(bindMethod(publisher, __EventListenerLike_notify)), op);
            init(Stream_mixin(), instance, liftedOp, scheduler, multicastOptions);
            pipe(instance, Disposable_add(publisher));
            instance[__PauseableObservableLike_isPaused] = publisher;
            return instance;
        }, props({
            [__PauseableObservableLike_isPaused]: none,
        }), {
            get [__PauseableLike_isPaused]() {
                return (this[__PauseableObservableLike_isPaused][__ReplayableLike_buffer][__KeyedCollectionLike_get](0) ?? true);
            },
            [__PauseableLike_pause]() {
                this[__QueueableLike_enqueue](true);
            },
            [__PauseableLike_resume]() {
                this[__QueueableLike_enqueue](false);
            },
        }));
    })();

    const Observable_subscribeOn = (schedulerOrFactory, options) => (observable) => 
    // FIXME: type test for VTS
    Observable_create(observer => {
        const scheduler = isFunction(schedulerOrFactory)
            ? pipe(schedulerOrFactory(), Disposable_addTo(observer))
            : schedulerOrFactory;
        pipe(observable, Observable_enqueue(observer), Observable_subscribeWithConfig(scheduler, {
            [__BufferLike_capacity]: options?.capacity ?? observer[__BufferLike_capacity],
            [__QueueableLike_backpressureStrategy]: options?.backpressureStrategy ??
                observer[__QueueableLike_backpressureStrategy],
        }), Disposable_onComplete(bindMethod(observer, __DispatcherLike_complete)), Disposable_addTo(observer));
    });

    const Runnable_flow = (scheduler, options) => (runnable) => {
        const op = (modeObs) => Observable_create(observer => {
            const pauseableScheduler = pipe(observer, Scheduler_toPauseableScheduler, Disposable_addTo(observer));
            pipe(observer, Observer_sourceFrom(pipe(runnable, Observable_subscribeOn(pauseableScheduler))), Disposable_add(pipe(modeObs, Observable_forEach(isPaused => {
                if (isPaused) {
                    pauseableScheduler[__PauseableLike_pause]();
                }
                else {
                    pauseableScheduler[__PauseableLike_resume]();
                }
            }), Observable_subscribeWithConfig(observer, observer), Disposable_bindTo(pauseableScheduler))), Disposable_add(pauseableScheduler));
        });
        return PauseableObservable_create(op, scheduler, options);
    };

    const flow = Runnable_flow;
    const generate = Observable_generate;

    const forEach = Observable_forEach;
    const subscribe$1 = Observable_subscribe;

    class ObservableSvelteStore {
        observable;
        scheduler;
        options;
        constructor(observable, scheduler, options) {
            this.observable = observable;
            this.scheduler = scheduler;
            this.options = options;
        }
        subscribe(callback) {
            const { observable, scheduler, options } = this;
            const subscription = pipe(observable, forEach(callback), subscribe$1(scheduler, options));
            callback(none);
            return bindMethod(subscription, __DisposableLike_dispose);
        }
    }
    const subscribe = (scheduler, options = {}) => obs => newInstance(ObservableSvelteStore, obs, scheduler, options);

    /* src/svelte-example.svelte generated by Svelte v3.57.0 */

    function create_fragment(ctx) {
    	let main;
    	let h1;
    	let t0_value = (/*$counterValue*/ ctx[0] ?? 0) + "";
    	let t0;
    	let t1;
    	let button;
    	let t2_value = (/*$isPaused*/ ctx[1] ? "Resume" : "Pause") + "";
    	let t2;
    	let mounted;
    	let dispose;

    	return {
    		c() {
    			main = element("main");
    			h1 = element("h1");
    			t0 = text(t0_value);
    			t1 = space();
    			button = element("button");
    			t2 = text(t2_value);
    		},
    		m(target, anchor) {
    			insert(target, main, anchor);
    			append(main, h1);
    			append(h1, t0);
    			append(main, t1);
    			append(main, button);
    			append(button, t2);

    			if (!mounted) {
    				dispose = listen(button, "click", function () {
    					if (is_function(/*$isPaused*/ ctx[1]
    					? /*resume*/ ctx[3]
    					: /*pause*/ ctx[2])) (/*$isPaused*/ ctx[1]
    					? /*resume*/ ctx[3]
    					: /*pause*/ ctx[2]).apply(this, arguments);
    				});

    				mounted = true;
    			}
    		},
    		p(new_ctx, [dirty]) {
    			ctx = new_ctx;
    			if (dirty & /*$counterValue*/ 1 && t0_value !== (t0_value = (/*$counterValue*/ ctx[0] ?? 0) + "")) set_data(t0, t0_value);
    			if (dirty & /*$isPaused*/ 2 && t2_value !== (t2_value = (/*$isPaused*/ ctx[1] ? "Resume" : "Pause") + "")) set_data(t2, t2_value);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(main);
    			mounted = false;
    			dispose();
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let $counterValue;
    	let $isPaused;
    	const scheduler = createHostScheduler();
    	const counter = pipe(generate(increment, returns(-1), { delay: 500 }), flow(scheduler));
    	const pause = bindMethod(counter, __PauseableLike_pause);
    	const resume = bindMethod(counter, __PauseableLike_resume);
    	const isPaused = pipe(counter[__PauseableObservableLike_isPaused], subscribe(scheduler));
    	component_subscribe($$self, isPaused, value => $$invalidate(1, $isPaused = value));
    	const counterValue = pipe(counter, subscribe(scheduler));
    	component_subscribe($$self, counterValue, value => $$invalidate(0, $counterValue = value));
    	return [$counterValue, $isPaused, pause, resume, isPaused, counterValue];
    }

    class Svelte_example extends SvelteComponent {
    	constructor(options) {
    		super();
    		init$1(this, options, instance, create_fragment, safe_not_equal, {});
    	}
    }

    const app = new Svelte_example({
      target: document.body,
      props: {},
    });

    return app;

})();
