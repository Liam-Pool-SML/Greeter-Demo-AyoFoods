(function(It) {
	typeof define == "function" && define.amd ? define(It) : It()
})(function() {
	"use strict";
	var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

	function rm(e) {
		return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
	}

	function im(e) {
		var t = e.default;
		if (typeof t == "function") {
			var n = function() {
				return t.apply(this, arguments)
			};
			n.prototype = t.prototype
		} else n = {};
		return Object.defineProperty(n, "__esModule", {
			value: !0
		}), Object.keys(e).forEach(function(r) {
			var i = Object.getOwnPropertyDescriptor(e, r);
			Object.defineProperty(n, r, i.get ? i : {
				enumerable: !0,
				get: function() {
					return e[r]
				}
			})
		}), n
	}
	var Io = {
			exports: {}
		},
		Kn, B, Rl, kl, Xn, Il, Pl, Wr = {},
		Nl = [],
		om = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function Tt(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function Ml(e) {
		var t = e.parentNode;
		t && t.removeChild(e)
	}

	function Ce(e, t, n) {
		var r, i, o, a = {};
		for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
		if (arguments.length > 2 && (a.children = arguments.length > 3 ? Kn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
			for (o in e.defaultProps) a[o] === void 0 && (a[o] = e.defaultProps[o]);
		return Yn(e, a, r, i, null)
	}

	function Yn(e, t, n, r, i) {
		var o = {
			type: e,
			props: t,
			key: n,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: i == null ? ++Rl : i
		};
		return i == null && B.vnode != null && B.vnode(o), o
	}

	function Po() {
		return {
			current: null
		}
	}

	function pe(e) {
		return e.children
	}

	function tt(e, t) {
		this.props = e, this.context = t
	}

	function hn(e, t) {
		if (t == null) return e.__ ? hn(e.__, e.__.__k.indexOf(e) + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? hn(e) : null
	}

	function Ll(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break
				} return Ll(e)
		}
	}

	function No(e) {
		(!e.__d && (e.__d = !0) && Xn.push(e) && !qr.__r++ || Il !== B.debounceRendering) && ((Il = B.debounceRendering) || setTimeout)(qr)
	}

	function qr() {
		for (var e; qr.__r = Xn.length;) e = Xn.sort(function(t, n) {
			return t.__v.__b - n.__v.__b
		}), Xn = [], e.some(function(t) {
			var n, r, i, o, a, l;
			t.__d && (a = (o = (n = t).__v).__e, (l = n.__P) && (r = [], (i = Tt({}, o)).__v = o.__v + 1, Mo(l, o, i, n.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, r, a == null ? hn(o) : a, o.__h), $l(r, o), o.__e != a && Ll(o)))
		})
	}

	function Dl(e, t, n, r, i, o, a, l, u, s) {
		var c, f, p, h, d, m, _, g = r && r.__k || Nl,
			S = g.length;
		for (n.__k = [], c = 0; c < t.length; c++)
			if ((h = n.__k[c] = (h = t[c]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? Yn(null, h, null, null, h) : Array.isArray(h) ? Yn(pe, {
					children: h
				}, null, null, null) : h.__b > 0 ? Yn(h.type, h.props, h.key, null, h.__v) : h) != null) {
				if (h.__ = n, h.__b = n.__b + 1, (p = g[c]) === null || p && h.key == p.key && h.type === p.type) g[c] = void 0;
				else
					for (f = 0; f < S; f++) {
						if ((p = g[f]) && h.key == p.key && h.type === p.type) {
							g[f] = void 0;
							break
						}
						p = null
					}
				Mo(e, h, p = p || Wr, i, o, a, l, u, s), d = h.__e, (f = h.ref) && p.ref != f && (_ || (_ = []), p.ref && _.push(p.ref, null, h), _.push(f, h.__c || d, h)), d != null ? (m == null && (m = d), typeof h.type == "function" && h.__k === p.__k ? h.__d = u = Ul(h, u, e) : u = Fl(e, h, p, g, d, u), typeof n.type == "function" && (n.__d = u)) : u && p.__e == u && u.parentNode != e && (u = hn(p))
			} for (n.__e = m, c = S; c--;) g[c] != null && (typeof n.type == "function" && g[c].__e != null && g[c].__e == n.__d && (n.__d = hn(r, c + 1)), Hl(g[c], g[c]));
		if (_)
			for (c = 0; c < _.length; c++) zl(_[c], _[++c], _[++c])
	}

	function Ul(e, t, n) {
		for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? Ul(r, t, n) : Fl(n, r, r, i, r.__e, t));
		return t
	}

	function at(e, t) {
		return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
			at(n, t)
		}) : t.push(e)), t
	}

	function Fl(e, t, n, r, i, o) {
		var a, l, u;
		if (t.__d !== void 0) a = t.__d, t.__d = void 0;
		else if (n == null || i != o || i.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(i), a = null;
			else {
				for (l = o, u = 0;
					(l = l.nextSibling) && u < r.length; u += 2)
					if (l == i) break e;
				e.insertBefore(i, o), a = o
			} return a !== void 0 ? a : i.nextSibling
	}

	function am(e, t, n, r, i) {
		var o;
		for (o in n) o === "children" || o === "key" || o in t || Kr(e, o, null, n[o], r);
		for (o in t) i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Kr(e, o, t[o], n[o], r)
	}

	function Bl(e, t, n) {
		t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || om.test(t) ? n : n + "px"
	}

	function Kr(e, t, n, r, i) {
		var o;
		e: if (t === "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if (typeof r == "string" && (e.style.cssText = r = ""), r)
					for (t in r) n && t in n || Bl(e.style, t, "");
				if (n)
					for (t in n) r && n[t] === r[t] || Bl(e.style, t, n[t])
			}
		else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Vl : jl, o) : e.removeEventListener(t, o ? Vl : jl, o);
		else if (t !== "dangerouslySetInnerHTML") {
			if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
				e[t] = n == null ? "" : n;
				break e
			} catch {}
			typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t))
		}
	}

	function jl(e) {
		this.l[e.type + !1](B.event ? B.event(e) : e)
	}

	function Vl(e) {
		this.l[e.type + !0](B.event ? B.event(e) : e)
	}

	function Mo(e, t, n, r, i, o, a, l, u) {
		var s, c, f, p, h, d, m, _, g, S, E, w, O, v = t.type;
		if (t.constructor !== void 0) return null;
		n.__h != null && (u = n.__h, l = t.__e = n.__e, t.__h = null, o = [l]), (s = B.__b) && s(t);
		try {
			e: if (typeof v == "function") {
				if (_ = t.props, g = (s = v.contextType) && r[s.__c], S = s ? g ? g.props.value : s.__ : r, n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype" in v && v.prototype.render ? t.__c = c = new v(_, S) : (t.__c = c = new tt(_, S), c.constructor = v, c.render = lm), g && g.sub(c), c.props = _, c.state || (c.state = {}), c.context = S, c.__n = r, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), v.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Tt({}, c.__s)), Tt(c.__s, v.getDerivedStateFromProps(_, c.__s))), p = c.props, h = c.state, f) v.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
				else {
					if (v.getDerivedStateFromProps == null && _ !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, S), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, S) === !1 || t.__v === n.__v) {
						c.props = _, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
							A && (A.__ = t)
						}), c.__h.length && a.push(c);
						break e
					}
					c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, S), c.componentDidUpdate != null && c.__h.push(function() {
						c.componentDidUpdate(p, h, d)
					})
				}
				if (c.context = S, c.props = _, c.__v = t, c.__P = e, E = B.__r, w = 0, "prototype" in v && v.prototype.render) c.state = c.__s, c.__d = !1, E && E(t), s = c.render(c.props, c.state, c.context);
				else
					do c.__d = !1, E && E(t), s = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++w < 25);
				c.state = c.__s, c.getChildContext != null && (r = Tt(Tt({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (d = c.getSnapshotBeforeUpdate(p, h)), O = s != null && s.type === pe && s.key == null ? s.props.children : s, Dl(e, Array.isArray(O) ? O : [O], t, n, r, i, o, a, l, u), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), m && (c.__E = c.__ = null), c.__e = !1
			} else o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = sm(n.__e, t, n, r, i, o, a, u);
			(s = B.diffed) && s(t)
		}
		catch (A) {
			t.__v = null, (u || o != null) && (t.__e = l, t.__h = !!u, o[o.indexOf(l)] = null), B.__e(A, t, n)
		}
	}

	function $l(e, t) {
		B.__c && B.__c(t, e), e.some(function(n) {
			try {
				e = n.__h, n.__h = [], e.some(function(r) {
					r.call(n)
				})
			} catch (r) {
				B.__e(r, n.__v)
			}
		})
	}

	function sm(e, t, n, r, i, o, a, l) {
		var u, s, c, f = n.props,
			p = t.props,
			h = t.type,
			d = 0;
		if (h === "svg" && (i = !0), o != null) {
			for (; d < o.length; d++)
				if ((u = o[d]) && "setAttribute" in u == !!h && (h ? u.localName === h : u.nodeType === 3)) {
					e = u, o[d] = null;
					break
				}
		}
		if (e == null) {
			if (h === null) return document.createTextNode(p);
			e = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, p.is && p), o = null, l = !1
		}
		if (h === null) f === p || l && e.data === p || (e.data = p);
		else {
			if (o = o && Kn.call(e.childNodes), s = (f = n.props || Wr).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !l) {
				if (o != null)
					for (f = {}, d = 0; d < e.attributes.length; d++) f[e.attributes[d].name] = e.attributes[d].value;
				(c || s) && (c && (s && c.__html == s.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
			}
			if (am(e, p, f, i, l), c) t.__k = [];
			else if (d = t.props.children, Dl(e, Array.isArray(d) ? d : [d], t, n, r, i && h !== "foreignObject", o, a, o ? o[0] : n.__k && hn(n, 0), l), o != null)
				for (d = o.length; d--;) o[d] != null && Ml(o[d]);
			l || ("value" in p && (d = p.value) !== void 0 && (d !== e.value || h === "progress" && !d || h === "option" && d !== f.value) && Kr(e, "value", d, f.value, !1), "checked" in p && (d = p.checked) !== void 0 && d !== e.checked && Kr(e, "checked", d, f.checked, !1))
		}
		return e
	}

	function zl(e, t, n) {
		try {
			typeof e == "function" ? e(t) : e.current = t
		} catch (r) {
			B.__e(r, n)
		}
	}

	function Hl(e, t, n) {
		var r, i;
		if (B.unmount && B.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || zl(r, null, t)), (r = e.__c) != null) {
			if (r.componentWillUnmount) try {
				r.componentWillUnmount()
			} catch (o) {
				B.__e(o, t)
			}
			r.base = r.__P = null
		}
		if (r = e.__k)
			for (i = 0; i < r.length; i++) r[i] && Hl(r[i], t, typeof e.type != "function");
		n || e.__e == null || Ml(e.__e), e.__e = e.__d = void 0
	}

	function lm(e, t, n) {
		return this.constructor(e, n)
	}

	function pn(e, t, n) {
		var r, i, o;
		B.__ && B.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], Mo(t, e = (!r && n || t).__k = Ce(pe, null, [e]), i || Wr, Wr, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Kn.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), $l(o, e)
	}

	function Lo(e, t) {
		pn(e, t, Lo)
	}

	function Gl(e, t, n) {
		var r, i, o, a = Tt({}, e.props);
		for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : a[o] = t[o];
		return arguments.length > 2 && (a.children = arguments.length > 3 ? Kn.call(arguments, 2) : n), Yn(e.type, a, r || e.key, i || e.ref, null)
	}

	function st(e, t) {
		var n = {
			__c: t = "__cC" + Pl++,
			__: e,
			Consumer: function(r, i) {
				return r.children(i)
			},
			Provider: function(r) {
				var i, o;
				return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
					return o
				}, this.shouldComponentUpdate = function(a) {
					this.props.value !== a.value && i.some(No)
				}, this.sub = function(a) {
					i.push(a);
					var l = a.componentWillUnmount;
					a.componentWillUnmount = function() {
						i.splice(i.indexOf(a), 1), l && l.call(a)
					}
				}), r.children
			}
		};
		return n.Provider.__ = n.Consumer.contextType = n
	}
	Kn = Nl.slice, B = {
		__e: function(e, t, n, r) {
			for (var i, o, a; t = t.__;)
				if ((i = t.__c) && !i.__) try {
					if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), a = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), a = i.__d), a) return i.__E = i
				} catch (l) {
					e = l
				}
			throw e
		}
	}, Rl = 0, kl = function(e) {
		return e != null && e.constructor === void 0
	}, tt.prototype.setState = function(e, t) {
		var n;
		n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Tt({}, this.state), typeof e == "function" && (e = e(Tt({}, n), this.props)), e && Tt(n, e), e != null && this.__v && (t && this.__h.push(t), No(this))
	}, tt.prototype.forceUpdate = function(e) {
		this.__v && (this.__e = !0, e && this.__h.push(e), No(this))
	}, tt.prototype.render = pe, Xn = [], qr.__r = 0, Pl = 0;
	const um = im(Object.freeze(Object.defineProperty({
		__proto__: null,
		render: pn,
		hydrate: Lo,
		createElement: Ce,
		h: Ce,
		Fragment: pe,
		createRef: Po,
		get isValidElement() {
			return kl
		},
		Component: tt,
		cloneElement: Gl,
		createContext: st,
		toChildArray: at,
		get options() {
			return B
		}
	}, Symbol.toStringTag, {
		value: "Module"
	})));
	(function(e, t) {
		(function(n, r) {
			e.exports = r()
		})(It, function() {
			return (() => {
				var n = {
						470: (a, l, u) => {
							var s;
							u.r(l), u.d(l, {
									ErrorTypes: () => s,
									getAsyncComponent: () => g,
									getAttributeObject: () => d,
									getAttributeProps: () => m,
									getDocument: () => h,
									getElementAttributes: () => E,
									getElementTag: () => S,
									getPropKey: () => _,
									isPromise: () => c,
									parseJson: () => p,
									selfClosingTags: () => f
								}),
								function(w) {
									w.Promise = "Error: Promises cannot be used for SSR", w.Missing = "Error: Cannot find component in provided function", w.Json = "Error: Invalid JSON string passed to component"
								}(s || (s = {}));
							const c = w => w && typeof w.then == "function",
								f = ["area", "base", "br", "col", "hr", "img", "input", "link", "meta", "source", "embed", "param", "track", "wbr"];

							function p(w) {
								const {
									tagName: O
								} = this, {
									formatProps: v
								} = this.__options;
								let A = {};
								try {
									A = JSON.parse(w)
								} catch {
									console.error(s.Json, `: <${O.toLowerCase()}>`)
								}
								return v && (A = v(A)), A
							}

							function h(w) {
								const O = `<!DOCTYPE html>
<html><body>${w}</body></html>`;
								let v;
								try {
									v = new DOMParser().parseFromString(O, "text/html")
								} catch {}
								if (v) return v.body
							}

							function d(w) {
								const O = {};
								if (!(w != null && w.length)) return O;
								for (let v = w.length - 1; v >= 0; v--) {
									const A = w[v];
									O[A.name] = A.value
								}
								return O
							}

							function m(w, O) {
								const v = d(w);
								let A = {};
								for (const P of Object.keys(v))(O == null ? void 0 : O.indexOf(P)) !== -1 && (A[_(P)] = v[P]);
								return A
							}

							function _(w) {
								const O = w.trim().replace(/[\s_]/g, "-");
								return O.charAt(0).toLowerCase() + O.slice(1).replace(/-([a-z])/g, ({
									1: v
								}) => v.toUpperCase())
							}

							function g(w, O) {
								return w.then(v => function(A, P) {
									let D;
									return typeof A == "function" ? A : (typeof A == "object" && (D = A[U = P, (U = U.toLowerCase()).replace(/(^\w|-\w)/g, R => R.replace(/-/, "").toUpperCase())] || void 0), D);
									var U
								}(v, O))
							}

							function S(w) {
								let O = w.toLowerCase();
								return O.indexOf("-") < 0 && (O = "component-" + O), O
							}

							function E() {
								const {
									attributes: w = []
								} = this.__options;
								return this.hasAttributes() ? m(this.attributes, w) : {}
							}
						},
						710: function(a, l, u) {
							var s = this && this.__rest || function(h, d) {
								var m = {};
								for (var _ in h) Object.prototype.hasOwnProperty.call(h, _) && d.indexOf(_) < 0 && (m[_] = h[_]);
								if (h != null && typeof Object.getOwnPropertySymbols == "function") {
									var g = 0;
									for (_ = Object.getOwnPropertySymbols(h); g < _.length; g++) d.indexOf(_[g]) < 0 && Object.prototype.propertyIsEnumerable.call(h, _[g]) && (m[_[g]] = h[_[g]])
								}
								return m
							};
							Object.defineProperty(l, "__esModule", {
								value: !0
							}), l.parseHtml = void 0;
							const c = u(108),
								f = u(470);

							function p(h) {
								var d;
								if (h.nodeType === 3) return ((d = h.textContent) === null || d === void 0 ? void 0 : d.trim()) || "";
								if (h.nodeType !== 1) return null;
								const m = String(h.nodeName).toLowerCase(),
									_ = Array.from(h.childNodes),
									g = () => _.map(O => p.call(this, O)),
									S = (0, f.getAttributeObject)(h.attributes),
									{
										slot: E
									} = S,
									w = s(S, ["slot"]);
								return m === "script" ? null : m === "body" ? (0, c.h)(c.Fragment, {}, g()) : f.selfClosingTags.includes(m) ? (0, c.h)(m, w) : E ? (this.__slots[(0, f.getPropKey)(E)] = function(O) {
									return O.every(v => typeof v == "string") ? O.join(" ") : (0, c.h)(c.Fragment, {}, O)
								}(g()), null) : (0, c.h)(m, w, g())
							}
							l.parseHtml = function() {
								const h = (0, f.getDocument)(this.innerHTML);
								if (!h) return;
								const d = p.call(this, h);
								return () => d
							}
						},
						108: a => {
							a.exports = um
						}
					},
					r = {};

				function i(a) {
					var l = r[a];
					if (l !== void 0) return l.exports;
					var u = r[a] = {
						exports: {}
					};
					return n[a].call(u.exports, u, u.exports, i), u.exports
				}
				i.d = (a, l) => {
					for (var u in l) i.o(l, u) && !i.o(a, u) && Object.defineProperty(a, u, {
						enumerable: !0,
						get: l[u]
					})
				}, i.o = (a, l) => Object.prototype.hasOwnProperty.call(a, l), i.r = a => {
					typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(a, "__esModule", {
						value: !0
					})
				};
				var o = {};
				return (() => {
					var a = o;
					Object.defineProperty(a, "__esModule", {
						value: !0
					}), a.define = void 0;
					const l = i(108),
						u = i(470),
						s = i(710);

					function c() {
						const d = u.getElementAttributes.call(this),
							m = this.getAttribute("props"),
							_ = this.querySelector('[type="application/json"]'),
							g = u.parseJson.call(this, m || (_ == null ? void 0 : _.innerHTML) || "{}");
						_ == null || _.remove();
						let S = this.__children;
						this.__mounted || this.hasAttribute("server") || (S = (0, l.h)(s.parseHtml.call(this), {})), this.__properties = Object.assign(Object.assign(Object.assign({}, this.__slots), g), d), this.__children = S || [], this.removeAttribute("server"), this.innerHTML = "";
						const E = this.__component(),
							w = O => h.call(this, O);
						(0, u.isPromise)(E) ? (0, u.getAsyncComponent)(E, this.tagName).then(w): w(E)
					}

					function f(d, m, _) {
						if (!this.__mounted) return;
						_ = _ == null ? void 0 : _;
						let g = this.__properties;
						d === "props" ? g = Object.assign(Object.assign({}, g), u.parseJson.call(this, _)) : g[(0, u.getPropKey)(d)] = _, this.__properties = g, (0, l.render)((0, l.h)(this.__instance, Object.assign(Object.assign({}, g), {
							parent: this,
							children: this.__children
						})), this)
					}

					function p() {
						(0, l.render)(null, this)
					}

					function h(d) {
						const {
							tagName: m
						} = this, {
							wrapComponent: _
						} = this.__options;
						if (!d) return void console.error(u.ErrorTypes.Missing, `: <${m.toLowerCase()}>`);
						_ && (d = _(d)), this.__instance = d, this.__mounted = !0;
						const g = Object.assign(Object.assign({}, this.__properties), {
							parent: this,
							children: this.__children
						});
						(0, l.render)((0, l.h)(d, g), this)
					}
					a.define = function(d, m, _ = {}) {
						const {
							wrapComponent: g
						} = _, S = typeof window > "u", E = (0, u.getElementTag)(d);
						if (!S) return void customElements.define(E, function(v, A = {}) {
							var P;
							const {
								attributes: D = []
							} = A;
							if (typeof Reflect < "u" && Reflect.construct) {
								const U = function() {
									const R = Reflect.construct(HTMLElement, [], U);
									return R.__mounted = !1, R.__component = v, R.__properties = {}, R.__slots = {}, R.__children = void 0, R.__options = A, R
								};
								return U.observedAttributes = ["props", ...D], U.prototype = Object.create(HTMLElement.prototype), U.prototype.constructor = U, U.prototype.connectedCallback = c, U.prototype.attributeChangedCallback = f, U.prototype.disconnectedCallback = p, U
							}
							return P = class extends HTMLElement {
								constructor() {
									super(...arguments), this.__mounted = !1, this.__component = v, this.__properties = {}, this.__slots = {}, this.__children = void 0, this.__options = A
								}
								connectedCallback() {
									c.call(this)
								}
								attributeChangedCallback(...U) {
									f.call(this, ...U)
								}
								disconnectedCallback() {
									p.call(this)
								}
							}, P.observedAttributes = ["props", ...D], P
						}(m, _));
						const w = m();
						if ((0, u.isPromise)(w)) throw new Error(`${u.ErrorTypes.Promise} : <${d}>`);
						let O = w;
						return g && (O = g(w)), v => (0, l.h)(E, {
							server: !0
						}, [(0, l.h)("script", {
							type: "application/json",
							dangerouslySetInnerHTML: {
								__html: JSON.stringify(v)
							}
						}), (0, l.h)(O, v)])
					}
				})(), o
			})()
		})
	})(Io);
	var He = function() {
			function e() {
				this._callbacks = []
			}
			return e.prototype.addListener = function(t) {
				this._callbacks.push(t)
			}, e.prototype.removeListener = function(t) {
				var n = this._callbacks.indexOf(t);
				n > -1 && this._callbacks.splice(n, 1)
			}, e.prototype.call = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				this._callbacks.forEach(function(r) {
					r.apply(r, t)
				}, this)
			}, e
		}(),
		Xr = function() {
			function e(t, n) {
				this._scene = t, this._personaId = n, this._scene.onConversationResultEvents[n] || (this._scene.onConversationResultEvents[n] = new He), this._onConversationResultEvent = this._scene.onConversationResultEvents[n], this._scene.onSpeechMarkerEvents[n] || (this._scene.onSpeechMarkerEvents[n] = new He), this._onSpeechMarkerEvent = this._scene.onSpeechMarkerEvents[n]
			}
			return e.prototype.startSpeaking = function(t, n, r) {
				n === void 0 && (n = null), r === void 0 && (r = null);
				var i = {
					personaId: this._personaId,
					text: t
				};
				return n && (i.context = n), r && (i.optionalArgs = r), this._scene.sendRequest("startSpeaking", i)
			}, e.prototype.stopSpeaking = function() {
				var t = {
					personaId: this._personaId
				};
				return this._scene.sendRequest("stopSpeaking", t)
			}, e.prototype.conversationSend = function(t, n, r) {
				var i = {
					personaId: this._personaId,
					text: t,
					variables: n,
					optionalArgs: r
				};
				return this._scene.sendRequest("conversationSend", i)
			}, e.prototype.conversationSetVariables = function(t) {
				var n = {
					personaId: this._personaId,
					variables: t
				};
				return this._scene.sendRequest("conversationSetVariables", n)
			}, e.prototype.conversationGetVariables = function() {
				var t = {
					personaId: this._personaId
				};
				return this._scene.sendRequest("conversationGetVariables", t)
			}, e.prototype.animateToNamedCameraWithOrbitPan = function(t, n, r, i, o, a) {
				var l = {
					personaId: this._personaId,
					cameraName: t,
					time: n,
					orbitDegX: r,
					orbitDegY: i,
					panDeg: o,
					tiltDeg: a
				};
				return this._scene.sendRequest("animateToNamedCamera", l)
			}, e.prototype.playAnimation = function(t) {
				var n = {
					personaId: this._personaId,
					animation: t
				};
				return this._scene.sendRequest("playAnimation", n)
			}, e.prototype.getVariables = function(t, n, r) {
				n === void 0 && (n = !1), r === void 0 && (r = "");
				var i = {
					personaId: this._personaId,
					names: t,
					errorTolerant: n,
					format: r
				};
				return this._scene.sendRequest("getVariables", i)
			}, e.prototype.setVariables = function(t) {
				var n = {
					personaId: this._personaId,
					Variables: t
				};
				return this._scene.sendRequest("setVariables", n)
			}, e.prototype.setVariablesOneway = function(t) {
				var n = {
					personaId: this._personaId,
					Variables: t
				};
				this._scene.sendOnewaySceneRequest("setVariables", n)
			}, e.prototype.getVariablesList = function() {
				var t = {
					personaId: this._personaId
				};
				return this._scene.sendRequest("getVariablesList", t)
			}, e.prototype.getModelVariablesList = function(t) {
				var n = {
					personaId: this._personaId,
					Models: t
				};
				return this._scene.sendRequest("getModelVariablesList", n)
			}, e.prototype.getModelChildren = function(t) {
				var n = {
					personaId: this._personaId,
					Models: t
				};
				return this._scene.sendRequest("getModelChildren", n)
			}, e.prototype.getModelFilterSearchResult = function(t) {
				var n = {
					personaId: this._personaId,
					Models: t
				};
				return this._scene.sendRequest("getModelFilterSearchResult", n)
			}, e.prototype.getModelVariableFilterSearchResult = function(t) {
				var n = {
					personaId: this._personaId,
					Models: t
				};
				return this._scene.sendRequest("getModelVariableFilterSearchResult", n)
			}, e.prototype.getConnectorEntries = function(t) {
				var n = {
					personaId: this._personaId,
					model: t
				};
				return this._scene.sendRequest("getConnectorEntries", n)
			}, e.prototype.startBlProfiling = function() {
				var t = {
					personaId: this._personaId
				};
				return this._scene.sendRequest("startBlProfiling", t)
			}, e.prototype.stopBlProfiling = function(t) {
				var n = {
					personaId: this._personaId,
					reverse: t
				};
				return this._scene.sendRequest("stopBlProfiling", n)
			}, e.prototype.getModelHierarchy = function(t) {
				var n = {
					personaId: this._personaId,
					model: t
				};
				return this._scene.sendRequest("getModelHierarchy", n)
			}, e.prototype.createMonitorSet = function(t, n) {
				var r = {
					personaId: this._personaId,
					setName: [{
						SetName: t
					}],
					variables: n
				};
				return this._scene.sendRequest("createMonitorSet", r)
			}, e.prototype.removeMonitorSet = function(t) {
				var n = {
					personaId: this._personaId,
					setName: [{
						SetName: t
					}]
				};
				return this._scene.sendRequest("removeMonitorSet", n)
			}, e.prototype.addVariableToMonitorSet = function(t, n) {
				var r = {
					personaId: this._personaId,
					setName: [{
						SetName: t
					}],
					variables: n
				};
				return this._scene.sendRequest("addVariableToMonitorSet", r)
			}, e.prototype.removeVariableFromMonitorSet = function(t, n) {
				var r = {
					personaId: this._personaId,
					setName: [{
						SetName: t
					}],
					variables: n
				};
				return this._scene.sendRequest("removeVariableFromMonitorSet", r)
			}, e.prototype.renderModel = function(t) {
				var n = {
					personaId: this._personaId,
					modelName: t
				};
				return this._scene.sendRequest("renderModel", n)
			}, Object.defineProperty(e.prototype, "onConversationResultEvent", {
				get: function() {
					return this._onConversationResultEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onSpeechMarkerEvent", {
				get: function() {
					return this._onSpeechMarkerEvent
				},
				enumerable: !1,
				configurable: !0
			}), e
		}(),
		Do = function(e, t) {
			return Do = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(n, r) {
				n.__proto__ = r
			} || function(n, r) {
				for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
			}, Do(e, t)
		};

	function cm(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
		Do(e, t);

		function n() {
			this.constructor = e
		}
		e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
	}
	var lt = function() {
		return lt = Object.assign || function(t) {
			for (var n, r = 1, i = arguments.length; r < i; r++) {
				n = arguments[r];
				for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
			}
			return t
		}, lt.apply(this, arguments)
	};

	function fm(e, t) {
		var n = {};
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == "function")
			for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
		return n
	}

	function me(e, t, n, r) {
		function i(o) {
			return o instanceof n ? o : new n(function(a) {
				a(o)
			})
		}
		return new(n || (n = Promise))(function(o, a) {
			function l(c) {
				try {
					s(r.next(c))
				} catch (f) {
					a(f)
				}
			}

			function u(c) {
				try {
					s(r.throw(c))
				} catch (f) {
					a(f)
				}
			}

			function s(c) {
				c.done ? o(c.value) : i(c.value).then(l, u)
			}
			s((r = r.apply(e, t || [])).next())
		})
	}

	function ge(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (o[0] & 1) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			},
			r, i, o, a;
		return a = {
			next: l(0),
			throw: l(1),
			return: l(2)
		}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
			return this
		}), a;

		function l(s) {
			return function(c) {
				return u([s, c])
			}
		}

		function u(s) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; n;) try {
				if (r = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
				switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
					case 0:
					case 1:
						o = s;
						break;
					case 4:
						return n.label++, {
							value: s[1],
							done: !1
						};
					case 5:
						n.label++, i = s[1], s = [0];
						continue;
					case 7:
						s = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
							n = 0;
							continue
						}
						if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
							n.label = s[1];
							break
						}
						if (s[0] === 6 && n.label < o[1]) {
							n.label = o[1], o = s;
							break
						}
						if (o && n.label < o[2]) {
							n.label = o[2], n.ops.push(s);
							break
						}
						o[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				s = t.call(e, n)
			} catch (c) {
				s = [6, c], i = 0
			} finally {
				r = o = 0
			}
			if (s[0] & 5) throw s[1];
			return {
				value: s[0] ? s[1] : void 0,
				done: !0
			}
		}
	}

	function Gt(e) {
		var t = typeof Symbol == "function" && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number") return {
			next: function() {
				return e && r >= e.length && (e = void 0), {
					value: e && e[r++],
					done: !e
				}
			}
		};
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}

	function Uo(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i, o = [],
			a;
		try {
			for (;
				(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
		} catch (l) {
			a = {
				error: l
			}
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r)
			} finally {
				if (a) throw a.error
			}
		}
		return o
	}

	function Fo(e, t, n) {
		if (n || arguments.length === 2)
			for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
		return e.concat(o || Array.prototype.slice.call(t))
	}
	var Qn = function() {
			function e() {
				var t = this;
				this.state = "pending", this.fate = "unresolved", this.promise = new Promise(function(n, r) {
					t._resolve = n, t._reject = r
				}), this.promise.then(function() {
					return t.state = "fulfilled"
				}, function() {
					return t.state = "rejected"
				})
			}
			return e.prototype.resolve = function(t) {
				if (this.fate === "resolved") {
					console.error("Deferred cannot be resolved twice");
					return
				}
				this.fate = "resolved", this._resolve(t)
			}, e.prototype.reject = function(t) {
				if (this.fate === "resolved") {
					console.error("Deferred cannot be resolved twice");
					return
				}
				this.fate = "resolved", this._reject(t)
			}, e.prototype.isResolved = function() {
				return this.fate === "resolved"
			}, e.prototype.isPending = function() {
				return this.state === "pending"
			}, e.prototype.isFulfilled = function() {
				return this.state === "fulfilled"
			}, e.prototype.isRejected = function() {
				return this.state === "rejected"
			}, e
		}(),
		Yr = function() {
			function e() {
				this._hasMicrophone = !1, this._hasCamera = !1, this._isAndroid = !1, this._isBrowserSupported = !1, this._isEdge = !1, this._isIos = !1, this._isAndroid = this.detectAndroid(), this._isEdge = this.detectEdge(), this._isIos = this.detectIos()
			}
			return e.prototype.detectEdge = function() {
				return this.userAgentMatches("Edge")
			}, e.prototype.detectAndroid = function() {
				return this.userAgentMatches("Android")
			}, e.prototype.detectIos = function() {
				var t = (/iPad|iPhone|iPod/i.test(navigator.platform) || navigator && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
				return t
			}, e.prototype.userAgentMatches = function(t) {
				var n = window.navigator.userAgent,
					r = n.match(t);
				return r ? r.length > 0 : !1
			}, e.prototype.detectWebRTCFeatures = function() {
				var t = this;
				return new Promise(function(n, r) {
					window.SmIsUnderRuntimeHost && (t._isBrowserSupported = !0, t._hasMicrophone = !0, t._hasCamera = !0, n(t));
					var i = !1;
					["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function(s) {
						i || s in window && (i = !0)
					});
					var o = navigator.userAgent.match(/iPhone|iPad|iPod/i) && !window.MSStream,
						a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
					i && o && !a && (i = !1), t._isBrowserSupported = i, t._isBrowserSupported || n(t);
					var l = null;
					navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (l = function(s) {
						Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function(c) {
							c === void 0 && (c = []), s(c)
						}).catch(function() {
							s([])
						})
					});
					var u = window.MediaStreamTrack;
					!l && u && u.getSources && (l = u.getSources.bind(u)), !l && navigator.enumerateDevices && (l = navigator.enumerateDevices.bind(navigator)), l ? l(function(s) {
						s.forEach(function(c) {
							c.kind === "audioinput" && (t._hasMicrophone = !0), c.kind === "videoinput" && (t._hasCamera = !0)
						}), n(t)
					}) : n(t)
				})
			}, Object.defineProperty(e.prototype, "hasMicrophone", {
				get: function() {
					return this._hasMicrophone
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "hasCamera", {
				get: function() {
					return this._hasCamera
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isAndroid", {
				get: function() {
					return this._isAndroid
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isBrowserSupported", {
				get: function() {
					return this._isBrowserSupported
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isEdge", {
				get: function() {
					return this._isEdge
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isIos", {
				get: function() {
					return this._isIos
				},
				enumerable: !1,
				configurable: !0
			}), e
		}(),
		Wl = ["debug", "log", "warn", "error"],
		Pt = function() {
			function e(t, n) {
				t === void 0 && (t = "log"), n === void 0 && (n = !0), this.isEnabled = n, this.availableLogLevels = [], this._minLogLevel = "log", this.setMinLogLevel(t)
			}
			return e.prototype.log = function(t) {
				for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				this.isEnabled && this.availableLogLevels.includes(t) && console[t].apply(console, Fo([], Uo(n), !1))
			}, e.prototype.enableLogging = function(t) {
				this.isEnabled = t
			}, e.prototype.getMinLogLevel = function() {
				return this._minLogLevel
			}, e.prototype.setMinLogLevel = function(t) {
				var n = Wl.indexOf(t);
				this._minLogLevel = t, this.availableLogLevels = Wl.slice(n)
			}, e
		}();

	function ce(e, t) {
		var n = new Error(e);
		return n.name = t, n
	}
	var dm = function() {
			function e(t, n) {
				n === void 0 && (n = new Pt);
				var r = this;
				this.logger = n, this._isMicrophoneConnected = !1, this._isCameraConnected = !1, this._onConnectedStorage = function(i, o, a, l) {}, this._closed = !1, this._outgoingQueue = [], this._microphoneMuteDelay = -1, this._offsetX = 0, this._offsetY = 0, t && (this._viewport_element = t), window.SmRuntimeHostReceiveMessage = this.receiveMessage.bind(this), typeof window.SmRuntimeHostStyleViewportElement == "function" && window.SmRuntimeHostStyleViewportElement(this._viewport_element), this._onClose = function(i) {}, this._onMessage = function(i) {}, this._onUserText = function(i) {}, this.sendVideoBounds(0, 0), setTimeout(function() {
					r.sendVideoBounds(0, 0)
				}, 3e3), this._features = new Yr, this.log("Local session created!")
			}
			return e.prototype.receiveMessage = function(t) {
				var n, r, i = JSON.parse(t);
				this.log("message received: ".concat(t)), this._onMessage(i), i.name === "state" && i.category === "scene" && ((r = (n = i.body) === null || n === void 0 ? void 0 : n.session) === null || r === void 0 ? void 0 : r.state) === "idle" && (this.log("Local session ending - conversationEnded"), this.close(!0, "conversationEnded"))
			}, Object.defineProperty(e.prototype, "onConnected", {
				set: function(t) {
					this._onConnectedStorage = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onClose", {
				set: function(t) {
					this._onClose = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onMessage", {
				set: function(t) {
					this._onMessage = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUserText", {
				set: function(t) {
					this._onUserText = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "loggingEnabled", {
				get: function() {
					return this.logger.isEnabled
				},
				set: function(t) {
					this.logger.log("warn", "loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)"), this.logger.enableLogging(t)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.setMinLogLevel = function(t) {
				this.logger.setMinLogLevel(t)
			}, e.prototype.setLogging = function(t) {
				this.logger.enableLogging(t)
			}, e.prototype.log = function(t) {
				this.logger.log("log", t)
			}, e.prototype.sendVideoBounds = function(t, n) {
				var r = this;
				setTimeout(function() {
					var i = r._viewport_element;
					if (i) {
						var o = document.defaultView || window,
							a = parseInt(o.getComputedStyle(i).width, 10),
							l = parseInt(o.getComputedStyle(i).height, 10);
						for (r._offsetX = 0, r._offsetY = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);) r._offsetX += i.offsetLeft - i.scrollLeft, r._offsetY += i.offsetTop - i.scrollTop, i = i.offsetParent;
						if (document.documentElement) {
							var u = document.documentElement.scrollLeft,
								s = document.documentElement.scrollTop;
							r._offsetX -= u, r._offsetY -= s
						}
						r.log("Updating bounds: x =  ".concat(r._offsetX, " , y = ").concat(r._offsetY, "', w = ").concat(a, ", h = ").concat(l));
						var c = r._offsetY,
							f = r._offsetX,
							p = r._offsetY + l,
							h = r._offsetX + a,
							d = {
								name: "videoBounds",
								body: {
									top: c,
									left: f,
									bottom: p,
									right: h
								},
								category: "local",
								kind: "event"
							};
						r.sendMessage(d)
					}
				}, 0)
			}, e.prototype.hideVideo = function() {
				var t = 0,
					n = 0,
					r = 0,
					i = 0,
					o = {
						name: "videoBounds",
						body: {
							top: t,
							left: n,
							bottom: r,
							right: i
						},
						category: "local",
						kind: "event"
					};
				this.sendMessage(o)
			}, e.prototype.sendRtcEvent = function(t, n) {}, e.prototype.connect = function() {
				return me(this, void 0, void 0, function() {
					var t, n, r, i = this;
					return ge(this, function(o) {
						switch (o.label) {
							case 0:
								return t = new Qn, this.log("Local session connecting!"), this._closed = !1, [4, this._features.detectWebRTCFeatures()];
							case 1:
								return n = o.sent(), this._closed = !1, this._sessionId = void 0, this._isMicrophoneConnected = n.hasMicrophone, this._isCameraConnected = n.hasCamera, typeof window.local_websocket_port == "number" ? (this._serverConnection = new WebSocket("ws://localhost:" + window.local_websocket_port), this.log("websocket open"), this._serverConnection.onmessage = function(a) {
									i.gotMessageFromServer(a)
								}, this._serverConnection.onerror = function(a) {
									t.isPending() && t.reject(ce("websocket failed", "serverConnectionFailed"))
								}, this._serverConnection.onopen = function(a) {
									window.SmRuntimeHostReceiveMessage = function() {}, i.log("Local session connected!");
									for (var l = 0; l < i._outgoingQueue.length; l++) i._serverConnection.send(JSON.stringify(i._outgoingQueue[l])), i.logger.log("log", "SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: " + i._outgoingQueue[l]);
									i._outgoingQueue = [], t.isPending() && t.resolve()
								}, this._serverConnection.onclose = function(a) {
									i.logger.log("log", "websocket closed: code(".concat(a.code, "), reason(").concat(a.reason, "), clean(").concat(a.wasClean, ")")), t.isRejected || i.close(!1, "normal")
								}) : (this.log("local_websocket_port not found! Failed to create WebSocket"), t.isPending() && t.reject(ce("websocket failed", "local_websocket_port not found"))), r = {
									name: "startSession",
									body: {},
									category: "scene",
									kind: "request"
								}, this.sendMessage(r), [2, t.promise]
						}
					})
				})
			}, e.prototype.gotMessageFromServer = function(t) {
				var n = t.data,
					r = JSON.parse(n),
					i = r.category,
					o = r.name,
					a = r.body;
				i !== "webrtc" ? this._onMessage(r) : o === "close" && this.close(!1, a.reason), o === "state" && i === "scene" && a.session !== null && a.session !== void 0 && a.session.state === "idle" && (this.log("Local session ending due to server idle message"), this.close(!0, "conversationEnded"))
			}, e.prototype.sendMessage = function(t) {
				var n = JSON.stringify(t);
				this._serverConnection && this._serverConnection.readyState === WebSocket.OPEN ? (this._serverConnection.send(n), this.log("SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: ".concat(n))) : this._outgoingQueue.push(t)
			}, e.prototype.sendUserText = function(t) {
				this.logger.log("log", "SmLocalSession.prototype.sendUserText, discarding text: " + t)
			}, e.prototype.close = function(t, n) {
				if (n === void 0 && (n = "normal"), !this._closed && (this._closed = !0, this._onClose(n), this._isMicrophoneConnected = !1, this._isCameraConnected = !1, this.hideVideo(), this._serverConnection)) {
					this.log("closing server connection");
					var r = 1e3;
					this._serverConnection.close(r, n)
				}
			}, Object.defineProperty(e.prototype, "peerConnection", {
				get: function() {
					return null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "userMediaStream", {
				get: function() {
					return null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "serverConnection", {
				get: function() {
					return this._serverConnection
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "sessionId", {
				get: function() {
					return this._sessionId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
				get: function() {
					return this._isMicrophoneConnected
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isCameraConnected", {
				get: function() {
					return this._isCameraConnected
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "features", {
				get: function() {
					return this._features
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneMuteDelay", {
				get: function() {
					return this._microphoneMuteDelay
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneMuted", {
				get: function() {
					return typeof window.SmRuntimeHostIsMicrophoneMuted == "function" ? window.SmRuntimeHostIsMicrophoneMuted() : !1
				},
				set: function(t) {
					typeof window.SmRuntimeHostMuteMicrophone == "function" && window.SmRuntimeHostMuteMicrophone(t)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetX", {
				get: function() {
					return this._offsetX
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetY", {
				get: function() {
					return this._offsetY
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.isMicrophoneActive = function() {
				return this.isMicrophoneConnected && !this.microphoneMuted
			}, e.prototype.isCameraActive = function() {
				return this.isCameraConnected
			}, e.prototype.setMediaDeviceActive = function(t) {
				return t.microphone, t.camera, me(this, void 0, void 0, function() {
					return ge(this, function(n) {
						throw ce("setMediaDeviceActive not supported on LocalSession", "notSupported")
					})
				})
			}, e
		}(),
		hm = function(e) {
			cm(t, e);

			function t() {
				var n = e !== null && e.apply(this, arguments) || this;
				return n.requestName = "", n.status = 0, n
			}
			return Object.defineProperty(t.prototype, "message", {
				get: function() {
					return "Scene response failed, status: ".concat(this.status)
				},
				enumerable: !1,
				configurable: !0
			}), t
		}(Error),
		ee;
	(function(e) {
		e[e.None = 0] = "None", e[e.Microphone = 1] = "Microphone", e[e.MicrophoneAndCamera = 2] = "MicrophoneAndCamera", e[e.Camera = 3] = "Camera"
	})(ee || (ee = {}));
	var Bo;
	(function(e) {
		e.PAGE_METADATA = "PAGE_METADATA"
	})(Bo || (Bo = {}));
	var ut;
	(function(e) {
		e.Disconnected = "Disconnected", e.SearchingForDigitalPerson = "SearchingForDigitalPerson", e.DownloadingAssets = "DownloadingAssets", e.ConnectingToDigitalPerson = "ConnectingToDigitalPerson", e.Connected = "Connected"
	})(ut || (ut = {}));
	var pm = function() {
			function e(t, n, r, i, o, a, l, u, s, c) {
				var f = this;
				this._connectPendingRemoteStream = null, this._resumeRequested = !1, this._isResumedSession = !1, this._outgoingQueue = [], this._controlOpen = !1, this._controlQueue = [], this._requestedUserMedia = ee.None, this._requiredUserMedia = ee.None, this._onConnected = function(p, h, d, m) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._microphoneMuteDelay = -1, this._changeUserMediaQueue = new Array, this._removeListeners = new Array, this._videoOptions = {
					frameRate: 10,
					width: 640,
					height: 480,
					facingMode: "user"
				}, this._audioOptions = {
					noiseSuppression: !1,
					autoGainControl: !1,
					channelCount: 1,
					sampleRate: 16e3,
					sampleSize: 16,
					echoCancellation: !0
				}, this._videoElement = t, this._serverUri = n, this._connectUserText = r || "", this._accessToken = i, this._audioOnly = o, this._audioOptions.echoCancellation = u, this._requiredUserMedia = l, this._requestedUserMedia = a, this._logger = s, this._onClose = function(p) {}, this._onMessage = function(p) {}, this._onUserText = function(p) {}, this._sessionError = function(p) {
					f.log("session error: ".concat(p), "error")
				}, this._features = new Yr, this._connectionState = c
			}
			return Object.defineProperty(e.prototype, "onConnected", {
				set: function(t) {
					this._onConnected = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onClose", {
				set: function(t) {
					this._onClose = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onMessage", {
				set: function(t) {
					this._onMessage = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUserText", {
				set: function(t) {
					this._onUserText = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "loggingEnabled", {
				get: function() {
					return this._logger.isEnabled
				},
				set: function(t) {
					this.log("loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)", "warn"), this._logger.enableLogging(t)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.setMinLogLevel = function(t) {
				this._logger.setMinLogLevel(t)
			}, e.prototype.setLogging = function(t) {
				this._logger.enableLogging(t)
			}, e.prototype.log = function(t, n) {
				if (n === void 0 && (n = "debug"), this._logger.isEnabled) {
					var r = new Date,
						i = "smsdk: ".concat(r.toISOString(), ": ").concat(t);
					this._shouldLogToServer && this.logToServer(i), this._logger.log(n, i)
				}
			}, e.prototype.logToServer = function(t) {
				this.sessionId ? this.sendlogMessage([t]) : this._pendingLog.push(t)
			}, e.prototype.sendlogMessage = function(t) {
				if (this._sessionId && t && t.length > 0) {
					var n = {
						category: "diagnostics",
						kind: "event",
						name: "log",
						body: {
							name: "browser",
							text: t
						}
					};
					this.sendMessage(n)
				}
			}, e.prototype.connect = function(t) {
				return me(this, void 0, void 0, function() {
					var n, r, i = this;
					return ge(this, function(o) {
						return n = new Qn, this._closed = !1, t && (this._connectUserText = t), this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) ? (this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this)), [2, n.promise]) : (r = new XMLHttpRequest, r.open("GET", "/api/jwt" + window.location.search), r.onreadystatechange = function(a) {
							return me(i, void 0, void 0, function() {
								var l;
								return ge(this, function(u) {
									return r.readyState === XMLHttpRequest.DONE && (r.status === 200 ? (this.log("JWT request returned: ".concat(r.responseText)), l = JSON.parse(r.responseText), this._serverUri = l.url, this._accessToken = l.jwt, this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this))) : (this.log("JWT Request failed, status: ".concat(r.statusText), "error"), n.reject(ce("Failed to acquire jwt at /api/jwt", "noServer")))), [2]
								})
							})
						}, r.send(), [2, n.promise])
					})
				})
			}, e.prototype.webcamRequested = function(t, n) {
				return !this._audioOnly && [ee.MicrophoneAndCamera, ee.Camera].some(function(r) {
					return [t, n].includes(r)
				})
			}, e.prototype.micRequested = function(t, n) {
				return [ee.Microphone, ee.MicrophoneAndCamera].some(function(r) {
					return [t, n].includes(r)
				})
			}, e.prototype.getMediaConstraints = function(t, n) {
				var r = navigator.mediaDevices.getSupportedConstraints();
				return this.log("Browser supports media constraints: ".concat(r)), {
					audio: this.micRequested(t, n) ? this.buildAudioOptions() : !1,
					video: this.webcamRequested(t, n) ? this._videoOptions : !1
				}
			}, e.prototype.buildAudioOptions = function() {
				var t = navigator.mediaDevices.getSupportedConstraints(),
					n = lt({}, this._audioOptions);
				return Object.keys(n).forEach(function(r) {
					t[r] || delete n[r]
				}), n
			}, e.prototype.selectUserMedia = function(t, n, r, i) {
				var o = this;
				if (t === ee.None && n === ee.None) {
					i(null, r);
					return
				}
				if (navigator.mediaDevices.getUserMedia) {
					var a = this.getMediaConstraints(t, n);
					this.log("Best video constraints: ".concat(a)), navigator.mediaDevices.getUserMedia(a).then(function(l) {
						i(l, r)
					}).catch(function(l) {
						n === t ? (o.log("getUserMedia could not get required media, error given: ".concat(l), "error"), r.reject(o.MakeErrorForUserMedia(l))) : n !== ee.None ? o.getUserMediaRequiredOnlyFallback(n, r, i) : t === ee.MicrophoneAndCamera ? o.getUserMediaAudioOnlyFallback(r, i) : i(null, r)
					})
				} else r.reject(ce("Your browser does not support getUserMedia API", "notSupported"))
			}, e.prototype.getUserMediaRequiredOnlyFallback = function(t, n, r) {
				var i = this;
				this.log("Retrying with required media only");
				var o = this.getMediaConstraints(ee.None, t);
				return this.log("Attempt constraints: ".concat(o)), navigator.mediaDevices.getUserMedia(o).then(function(a) {
					r(a, n)
				}).catch(function(a) {
					i.log("getUserMedia could not get required media, error given: ".concat(a), "error"), n.reject(i.MakeErrorForUserMedia(a))
				})
			}, e.prototype.getUserMediaAudioOnlyFallback = function(t, n) {
				var r = this;
				this.log("Retrying with microphone only");
				var i = {
					video: !1,
					audio: this.buildAudioOptions()
				};
				return this.log("Attempt constraints: ".concat(i)), navigator.mediaDevices.getUserMedia(i).then(function(o) {
					n(o, t)
				}).catch(function(o) {
					r.log("getUserMedia could not get microphone audio, error given: ".concat(o), "error"), n(null, t)
				})
			}, e.prototype.MakeErrorForUserMedia = function(t) {
				var n = "noUserMedia";
				return ce(t.message, n)
			}, e.prototype.getUserMediaSuccess = function(t, n) {
				var r = this;
				this.log("Got user media"), this._localStream = t, this.microphoneMuted = !0, this.log("connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(i) {
					try {
						r.gotMessageFromServer(i, n)
					} catch (o) {
						r.log("unexpected exception processing received message: ".concat(o), "error")
					}
				}, this._serverConnection.onerror = function(i) {
					n.isPending() && n.reject(ce("websocket failed", "serverConnectionFailed"))
				}, this._serverConnection.onopen = function(i) {
					r.log("Websocket open"), r._connectionState.setConnectionState(ut.SearchingForDigitalPerson)
				}, this._serverConnection.onclose = function(i) {
					r.log("websocket closed: code(".concat(i.code, "), reason(").concat(i.reason, "), clean(").concat(i.wasClean, ")")), n.isRejected || r.close(!1, "normal", n)
				}
			}, e.prototype.hasTurnServer = function(t) {
				var n, r, i, o;
				if (!t) return !1;
				try {
					for (var a = Gt(t), l = a.next(); !l.done; l = a.next()) {
						var u = l.value;
						if (!(!u || !u.urls)) try {
							for (var s = (i = void 0, Gt(u.urls)), c = s.next(); !c.done; c = s.next()) {
								var f = c.value;
								if (f.indexOf("turn:") === 0) return !0
							}
						} catch (p) {
							i = {
								error: p
							}
						} finally {
							try {
								c && !c.done && (o = s.return) && o.call(s)
							} finally {
								if (i) throw i.error
							}
						}
					}
				} catch (p) {
					n = {
						error: p
					}
				} finally {
					try {
						l && !l.done && (r = a.return) && r.call(a)
					} finally {
						if (n) throw n.error
					}
				}
				return !1
			}, e.prototype.gotMessageFromServer = function(t, n) {
				var r = this,
					i, o, a = t.data;
				this.log("message received: ".concat(a));
				var l = JSON.parse(a),
					u = l.category,
					s = l.name,
					c = l.body;
				if (u !== "webrtc") {
					this._controlConnection !== null && u === "scene" && (this._controlOpen && this._serverConnection.readyState === WebSocket.OPEN ? this._controlConnection.send(a) : this._controlQueue.push(a)), this._onMessage(l);
					return
				}
				if (l.kind === "event")
					if (s === "established") {
						this._connectionState.setConnectionState(ut.DownloadingAssets);
						var f = {
							iceServers: []
						};
						if (c.iceServers && (f.iceServers = c.iceServers, this.hasTurnServer(c.iceServers) && (this.log("Detected turn server, forcing relay mode"), f.iceTransportPolicy = "relay")), this.log("selected ice servers: ".concat(f.iceServers)), c.settings && typeof c.settings.microphoneMuteDelay == "number" && (this._microphoneMuteDelay = c.settings.microphoneMuteDelay), this.log("microphone mute delay after persona speech: ".concat(this._microphoneMuteDelay)), this._shouldLogToServer = (o = (i = c.settings) === null || i === void 0 ? void 0 : i.logToServer) !== null && o !== void 0 ? o : !1, this._peerConnection = new RTCPeerConnection(f), this._peerConnection.onicecandidate = this.gotIceCandidate.bind(this), "ontrack" in this._peerConnection && !this._features.isEdge ? (this._peerConnection.ontrack = function(v) {
								(v.track.kind === "video" || v.track.kind === "audio") && (!r._remoteStream || !r._audioOnly && v.track.kind === "video") && r.onRemoteStream(v.streams[0])
							}, this._videoElement.addEventListener("loadeddata", this.onVideoLoaded.bind(this)), this._removeListeners.push({
								target: this._videoElement,
								name: "loadeddata",
								callback: this.onVideoLoaded
							})) : this._peerConnection.onaddstream = function(v) {
								r.onRemoteStream(v.stream)
							}, this._peerConnection.oniceconnectionstatechange = function(v) {
								r.log("ICE connection state: ".concat(r._peerConnection.iceConnectionState)), r._peerConnection.iceConnectionState === "failed" && (ce("ice connection failed", "mediaStreamFailed"), n && n.isPending() && (r._serverConnection.close(), r._controlConnection && (r._controlConnection.readyState === WebSocket.OPEN || r._controlConnection.readyState === WebSocket.CONNECTING) && r._controlConnection.close(), n.reject(ce("ice connection failed", "mediaStreamFailed"))))
							}, this.log("adding local media stream if any"), this._localStream)
							if (!this._peerConnection.addTrack) this._peerConnection.addStream(this._localStream), this.log("adding local media stream by stream");
							else try {
								this.log("adding local media stream by track"), this._localStream.getTracks().forEach(function(v) {
									r._peerConnection.addTrack(v, r._localStream)
								})
							} catch (v) {
								this.log("error: ".concat(v), "error")
							}
						if (this._peerConnection.addTransceiver("audio", {
								direction: "sendrecv"
							}), this._peerConnection.addTransceiver("video", {
								direction: "sendrecv"
							}), c.resumeSessionId) {
							var p = {
								voiceActivityDetection: !1,
								iceRestart: !0
							};
							this._sessionId = c.resumeSessionId, this._isResumedSession = !0, this.log("established, trying to resume session with session_id = ".concat(c.resumeSessionId)), this.createOffer(this._peerConnection, p).then(function(v) {
								r.createdDescription.bind(r), r.createdDescription(v, "updateOffer")
							}).catch(this._sessionError.bind(this))
						} else {
							var p = {
								voiceActivityDetection: !1,
								iceRestart: !1
							};
							this._isResumedSession = !1, this.createOffer(this._peerConnection, p).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
						}
					} else if (s === "accepted") {
					this._connectionState.setConnectionState(ut.ConnectingToDigitalPerson), this.log("accepted, session_id = ".concat(c.sessionId)), this._sessionId = c.sessionId, this._resumeRequested = c.resumeRequested, this._server = c.server, this._sceneId = c.sceneId;
					for (var h = 0; h < this._outgoingQueue.length; h++) this._outgoingQueue[h].body.sessionId = this._sessionId, this.sendMessage(this._outgoingQueue[h]);
					this._outgoingQueue = [];
					var d = function() {
						r && r.sendCameraRotation()
					};
					window.addEventListener("orientationchange", d), this._removeListeners.push({
						target: window,
						name: "orientationchange",
						callback: d
					}), this.sendCameraRotation();
					var m = document.defaultView || window,
						_ = m.getComputedStyle(this._videoElement),
						g = parseInt("".concat(_.width), 10),
						S = parseInt("".concat(_.height), 10);
					this.log("accepted, sending video width/height: ".concat(g, " / ").concat(S)), this.sendVideoBounds(g, S), this.sendlogMessage(this._pendingLog), this._pendingLog = [], c.controlUrl && (this._controlUrl = c.controlUrl, this._controlQueue = [], this._controlOpen = !1, this._controlConnection = new WebSocket(c.controlUrl + "?access_token=" + this._accessToken), this._controlConnection.onmessage = function(v) {
						var A = v.data;
						A && r._serverConnection.readyState === WebSocket.OPEN && r._serverConnection.send(A)
					}, this._controlConnection.onerror = function() {
						r.close(!0, "controlFailed", n)
					}, this._controlConnection.onopen = function(v) {
						if (r.log("control websocket open"), !r._controlOpen) {
							r._controlOpen = !0;
							for (var A = 0; A < r._controlQueue.length; A++) r.log("control websocket now open, forwarding queued message: ".concat(r._controlQueue[A])), r._controlConnection.send(r._controlQueue[A]);
							r._controlQueue = []
						}
					}, this._controlConnection.onclose = function(v) {
						r.log("control closed: code(".concat(v.code, "), reason(").concat(v.reason, "), clean(").concat(v.wasClean, ")")), r.close(!0, "controlDisconnected", n)
					})
				} else if (s === "answer") {
					this.log("set remote description"), this.log(JSON.stringify(c));
					var E = {
						sdp: c.sdp,
						type: "answer"
					};
					this.setRemoteDescription(this._peerConnection, E).then(function() {}).catch(this._sessionError.bind(this))
				} else if (s === "connected") this._remoteStream ? (this._connectionState.setConnectionState(ut.Connected), this.onConnectedSuccess(), n && n.resolve(c.sessionId)) : (this.log("Connected but no remote media stream available"), this._connectPendingRemoteStream = function() {
					r.onConnectedSuccess(), n && n.resolve(c.sessionId)
				});
				else if (s === "ice") {
					this.log("add ice candidate");
					var w = void 0;
					if (c.complete) this._features.isEdge && (w = this._peerConnection.addIceCandidate(new RTCIceCandidate({
						candidate: "",
						sdpMid: "",
						sdpMLineIndex: 0
					})));
					else {
						var O = new RTCIceCandidate({
							candidate: c.candidate,
							sdpMid: c.sdpMid,
							sdpMLineIndex: c.sdpMLineIndex
						});
						w = this._peerConnection.addIceCandidate(O)
					}
					w && w.catch(this._sessionError.bind(this))
				} else if (s === "offer") {
					this._sessionId = c.sessionId;
					var E = {
						sdp: c.sdp,
						type: "offer"
					};
					this.setRemoteDescription(this._peerConnection, E).then(function() {
						return r.createAnswer(r._peerConnection)
					}).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
				} else s === "userText" ? (this.log("rtc - user text message received: ".concat(c.userText)), this._onUserText(c.userText)) : s === "close" && this.close(!1, c.reason, n)
			}, e.prototype.gotIceCandidate = function(t) {
				t.candidate ? (this.log("got local ice candidate"), this.sendRtcEvent("ice", {
					complete: !1,
					candidate: t.candidate.candidate,
					sdpMid: t.candidate.sdpMid,
					sdpMLineIndex: t.candidate.sdpMLineIndex
				})) : (this.log("end ice candidate"), this.sendRtcEvent("ice", {
					complete: !0,
					candidate: "",
					sdpMid: "",
					sdpMLineIndex: 0
				}))
			}, e.prototype.createdDescription = function(t, n) {
				var r = this;
				n === void 0 && (n = "offer"), this.log("got description");
				var i = {
					sdp: t.sdp,
					type: t.type
				};
				this.log(JSON.stringify({
					sdp: i
				})), this.setLocalDescription(this._peerConnection, t).then(function() {
					r.log("send sdp offer to server"), r.sendRtcEvent(n, {
						sdp: r._peerConnection.localDescription ? r._peerConnection.localDescription.sdp : null,
						type: r._peerConnection.localDescription ? r._peerConnection.localDescription.type : null,
						user_text: r._connectUserText,
						features: {
							videoStartedEvent: !0
						}
					})
				}).catch(this._sessionError.bind(this))
			}, e.prototype.onRemoteStream = function(t) {
				this.log("got remote stream"), this._remoteStream = t, this.log("ICE connection state: ".concat(this._peerConnection.iceConnectionState)), this._connectPendingRemoteStream && (this._connectPendingRemoteStream(), this._connectPendingRemoteStream = null)
			}, e.prototype.onConnectedSuccess = function() {
				var t = this,
					n, r;
				this._onConnected(this._resumeRequested, this._isResumedSession, this._server, this.sessionId), this._videoElement.hidden = !1, this._videoElement.srcObject = this._remoteStream;
				var i = function(o) {
					return me(t, void 0, void 0, function() {
						return ge(this, function(a) {
							return this._remoteStream && this._remoteStream.addTrack(o.track), [2]
						})
					})
				};
				this._peerConnection.addEventListener("track", i), this._removeListeners.push({
					target: this._peerConnection,
					name: "track",
					callback: i
				}), this.log("video enabled"), this.sendUserCamera(), (n = this._onMicrophoneActive) === null || n === void 0 || n.call(this.isMicrophoneActive()), (r = this._onCameraActive) === null || r === void 0 || r.call(this.isCameraActive())
			}, e.prototype.onVideoLoaded = function(t) {
				var n = this;
				this.log("video has loaded");
				var r = function() {
					n.log("video has started playing"), n.sendRtcEvent("videoStarted", {}), n.microphoneMuted = !1
				};
				if (!this._videoElement.muted) {
					r();
					return
				}
				var i = function() {
					r(), n._videoElement.removeEventListener("volumechange", i)
				};
				this._videoElement.addEventListener("volumechange", i, !1)
			}, e.prototype.sendRtcEvent = function(t, n) {
				if (this._serverConnection !== null) {
					this._sessionId && (n.sessionId = this._sessionId);
					var r = {
						category: "webrtc",
						kind: "event",
						name: t,
						body: n
					};
					this._sessionId || t === "offer" ? this.sendMessage(r) : this._outgoingQueue.push(r)
				}
			}, e.prototype.sendVideoBounds = function(t, n) {
				this.sendRtcEvent("videoBounds", {
					width: t,
					height: n
				})
			}, e.prototype.sendUserCamera = function(t) {
				var n = {
					active: this.isCameraActive()
				};
				t !== void 0 && (n.rotation = t), this.sendRtcEvent("userCamera", n)
			}, e.prototype.sendCameraRotation = function() {
				if (this._features.isIos) {
					var t = window.orientation;
					this.log("send updated camera rotation, device orientation: ".concat(t));
					var n = 0;
					t === 0 ? n = 90 : t === 90 ? n = 180 : t === 180 ? n = 270 : t === -90 && (n = 0), this.sendUserCamera(n)
				}
			}, e.prototype.sendMessage = function(t) {
				!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("server connection not ready, discarding message: ".concat(t)))
			}, e.prototype.sendUserText = function(t) {
				this.sendRtcEvent("userText", {
					userText: t
				})
			}, e.prototype.hasCamera = function(t) {
				return t === ee.Camera || t === ee.MicrophoneAndCamera
			}, e.prototype.hasMicrophone = function(t) {
				return t === ee.Microphone || t === ee.MicrophoneAndCamera
			}, e.prototype.makeUserMedia = function(t, n) {
				return t && n ? ee.MicrophoneAndCamera : t ? ee.Microphone : n ? ee.Camera : ee.None
			}, e.prototype.findSenderTrackByKind = function(t) {
				var n, r, i;
				if (!this._peerConnection) return null;
				var o = this._peerConnection.getSenders();
				try {
					for (var a = Gt(o), l = a.next(); !l.done; l = a.next()) {
						var u = l.value;
						if (u.track && ((i = u.track) === null || i === void 0 ? void 0 : i.kind) === t) return u.track
					}
				} catch (s) {
					n = {
						error: s
					}
				} finally {
					try {
						l && !l.done && (r = a.return) && r.call(a)
					} finally {
						if (n) throw n.error
					}
				}
				return null
			}, e.prototype.findSenderByKind = function(t) {
				var n, r, i, o, a, l;
				if (!this._peerConnection) return null;
				try {
					for (var u = Gt(this._peerConnection.getTransceivers()), s = u.next(); !s.done; s = u.next()) {
						var c = s.value;
						if (c.direction === "sendrecv" && ((l = (a = c.receiver) === null || a === void 0 ? void 0 : a.track) === null || l === void 0 ? void 0 : l.kind) === t) return c.sender
					}
				} catch (d) {
					n = {
						error: d
					}
				} finally {
					try {
						s && !s.done && (r = u.return) && r.call(u)
					} finally {
						if (n) throw n.error
					}
				}
				try {
					for (var f = Gt(this._peerConnection.getSenders()), p = f.next(); !p.done; p = f.next()) {
						var h = p.value;
						if (h.track === null || h.track.kind === t) return h
					}
				} catch (d) {
					i = {
						error: d
					}
				} finally {
					try {
						p && !p.done && (o = f.return) && o.call(f)
					} finally {
						if (i) throw i.error
					}
				}
				return null
			}, e.prototype.processChangeUserMediaQueue = function() {
				var t, n, r, i;
				return me(this, void 0, void 0, function() {
					var o, a, l, u;
					return ge(this, function(s) {
						switch (s.label) {
							case 0:
								if (o = this._changeUserMediaQueue.length > 0 ? this._changeUserMediaQueue[0] : void 0, !o) return [3, 5];
								s.label = 1;
							case 1:
								return s.trys.push([1, 3, , 4]), a = this.isMicrophoneActive(), l = this.isCameraActive(), [4, this.changeUserMediaInternal(this.makeUserMedia((t = o.microphone) !== null && t !== void 0 ? t : a, (n = o.camera) !== null && n !== void 0 ? n : l))];
							case 2:
								return s.sent(), o.microphone !== void 0 && o.microphone !== a && ((r = this._onMicrophoneActive) === null || r === void 0 || r.call(this.isMicrophoneActive())), o.camera !== void 0 && o.camera !== l && ((i = this._onCameraActive) === null || i === void 0 || i.call(this.isCameraActive())), o.deferred.resolve(), [3, 4];
							case 3:
								return u = s.sent(), o.deferred.reject(u), [3, 4];
							case 4:
								this._changeUserMediaQueue.shift(), s.label = 5;
							case 5:
								if (o) return [3, 0];
								s.label = 6;
							case 6:
								return [2]
						}
					})
				})
			}, e.prototype.changeUserMediaInternal = function(t) {
				return me(this, void 0, void 0, function() {
					var n, r, i, o, a, l, u, s = this;
					return ge(this, function(c) {
						switch (c.label) {
							case 0:
								return n = this.findSenderTrackByKind("audio"), r = this.findSenderTrackByKind("video"), i = this.hasMicrophone(t) && (!n || n.readyState === "ended"), o = this.hasCamera(t) && (!r || r.readyState === "ended"), a = null, i || o ? (l = this.makeUserMedia(i, o), u = new Qn, this.selectUserMedia(l, l, u, function(f, p) {
									return me(s, void 0, void 0, function() {
										return ge(this, function(h) {
											return a = f, p.resolve(), [2]
										})
									})
								}), [4, u.promise]) : [3, 2];
							case 1:
								c.sent(), this._localStream || (this._localStream = new MediaStream), c.label = 2;
							case 2:
								return [4, this.updateSenderTrack("audio", this.hasMicrophone(t), a)];
							case 3:
								return c.sent(), [4, this.updateSenderTrack("video", this.hasCamera(t), a)];
							case 4:
								return c.sent(), this.sendUserCamera(), [2]
						}
					})
				})
			}, e.prototype.updateSenderTrack = function(t, n, r) {
				var i, o;
				return me(this, void 0, void 0, function() {
					var a, l, u, s;
					return ge(this, function(c) {
						switch (c.label) {
							case 0:
								if (a = this.findSenderByKind(t), l = a == null ? void 0 : a.track, !(!!a && (!l || n !== l.enabled))) return [3, 7];
								if (this.log("new user " + t + " active state = " + n), !n) return [3, 6];
								c.label = 1;
							case 1:
								return c.trys.push([1, 4, , 5]), l && ((i = this._localStream) === null || i === void 0 || i.removeTrack(l)), r ? (u = this.getTrackByKind(r, t), u ? ((o = this._localStream) === null || o === void 0 || o.addTrack(u), a.track === u ? [3, 3] : (this.log("replacing user " + t + " track"), [4, a.replaceTrack(u)])) : [3, 3]) : [3, 3];
							case 2:
								c.sent(), c.label = 3;
							case 3:
								return [3, 5];
							case 4:
								throw s = c.sent(), this.log("failed to get user ".concat(t, " track, error: ").concat(s), "error"), ce("failed to get user " + t + ": " + s, "failedUpgrade");
							case 5:
								return [3, 7];
							case 6:
								l && (l.enabled = !1, l.stop()), c.label = 7;
							case 7:
								return [2]
						}
					})
				})
			}, e.prototype.getTrackByKind = function(t, n) {
				var r, i;
				if (t) try {
					for (var o = Gt(t.getTracks()), a = o.next(); !a.done; a = o.next()) {
						var l = a.value;
						if (l.kind === n) return l
					}
				} catch (u) {
					r = {
						error: u
					}
				} finally {
					try {
						a && !a.done && (i = o.return) && i.call(o)
					} finally {
						if (r) throw r.error
					}
				}
			}, e.prototype.isSenderTrackEnabled = function(t) {
				var n = this.findSenderTrackByKind(t);
				return Boolean(n == null ? void 0 : n.enabled)
			}, e.prototype.isMicrophoneActive = function() {
				return this.isSenderTrackEnabled("audio")
			}, e.prototype.isCameraActive = function() {
				return this.isSenderTrackEnabled("video")
			}, e.prototype.setMediaDeviceActive = function(t) {
				var n = t.microphone,
					r = t.camera;
				return me(this, void 0, void 0, function() {
					var i;
					return ge(this, function(o) {
						return i = new Qn, this._changeUserMediaQueue.push({
							microphone: n,
							camera: r,
							deferred: i
						}), this._changeUserMediaQueue.length === 1 && this.processChangeUserMediaQueue(), [2, i.promise]
					})
				})
			}, e.prototype.close = function(t, n, r) {
				var i, o;
				if (t === void 0 && (t = !0), n === void 0 && (n = "normal"), !this._closed) {
					if (this._closed = !0, this._peerConnection) try {
						this._peerConnection.close()
					} catch (f) {
						this.log("error: ".concat(f), "error")
					}
					if (this._localStream) try {
						var a = this._localStream.getTracks();
						for (var l in a) a[l].stop()
					} catch (f) {
						this.log("error: ".concat(f), "error")
					}
					t && this.sendRtcEvent("close", {
						reason: "normal"
					}), r && (r.isResolved() ? this._onClose(n) : r.reject(ce("websocket closed: " + n, n))), this._serverConnection && (this.log("closing server connection"), this._serverConnection.close()), this._controlConnection && this._controlConnection.close();
					try {
						for (var u = Gt(this._removeListeners), s = u.next(); !s.done; s = u.next()) {
							var c = s.value;
							c.target.removeEventListener(c.name, c.callback)
						}
					} catch (f) {
						i = {
							error: f
						}
					} finally {
						try {
							s && !s.done && (o = u.return) && o.call(u)
						} finally {
							if (i) throw i.error
						}
					}
				}
			}, e.prototype.createOffer = function(t, n) {
				return t.createOffer(n)
			}, e.prototype.setRemoteDescription = function(t, n) {
				return t.setRemoteDescription(n)
			}, e.prototype.setLocalDescription = function(t, n) {
				return t.setLocalDescription(n)
			}, e.prototype.createAnswer = function(t) {
				return t.createAnswer()
			}, Object.defineProperty(e.prototype, "peerConnection", {
				get: function() {
					return this._peerConnection
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "serverConnection", {
				get: function() {
					return this._serverConnection
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "sessionId", {
				get: function() {
					return this._sessionId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "server", {
				get: function() {
					return this._server
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "sceneId", {
				get: function() {
					return this._sceneId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
				get: function() {
					return !!this.findSenderTrackByKind("audio")
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isCameraConnected", {
				get: function() {
					return !!this.findSenderTrackByKind("video")
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "features", {
				get: function() {
					return this._features
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneMuteDelay", {
				get: function() {
					return this._microphoneMuteDelay
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "userMediaStream", {
				get: function() {
					return this._localStream
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneMuted", {
				get: function() {
					if (!this._localStream) return !0;
					var t = this._localStream.getAudioTracks();
					return !t || t.length < 1 ? !0 : !t[0].enabled
				},
				set: function(t) {
					var n, r;
					if (!!this._localStream) {
						var i = this._localStream.getAudioTracks();
						if (!(!i || i.length < 1)) {
							var o = this.findSenderByKind("audio");
							if (((n = o == null ? void 0 : o.track) === null || n === void 0 ? void 0 : n.readyState) === "live" && o.track === i[0]) {
								var a = !t;
								i[0].enabled = a, this.log("microphone muted active notification: ".concat(a)), (r = this._onMicrophoneActive) === null || r === void 0 || r.call(a)
							}
						}
					}
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "webcamMuted", {
				get: function() {
					if (!this._localStream) return !0;
					var t = this._localStream.getVideoTracks();
					return !t || t.length < 1 ? !0 : !t[0].enabled
				},
				set: function(t) {
					var n, r;
					if (!!this._localStream) {
						var i = this._localStream.getVideoTracks();
						if (!(!i || i.length < 1)) {
							var o = this.findSenderByKind("video");
							if (((n = o == null ? void 0 : o.track) === null || n === void 0 ? void 0 : n.readyState) === "live" && o.track === i[0]) {
								var a = !t;
								i[0].enabled = a, (r = this._onCameraActive) === null || r === void 0 || r.call(a)
							}
						}
					}
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetX", {
				get: function() {
					return 0
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetY", {
				get: function() {
					return 0
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneActiveCallbacks", {
				set: function(t) {
					this._onMicrophoneActive = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "cameraActiveCallbacks", {
				set: function(t) {
					this._onCameraActive = t
				},
				enumerable: !1,
				configurable: !0
			}), e
		}(),
		mm = function() {
			function e(t, n, r) {
				r === void 0 && (r = new Pt);
				var i = this;
				this.logger = r, this._outgoingQueue = [], this._onConnectedStorage = function(o, a, l, u) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._serverUri = t, this._accessToken = n, this._onClose = function(o) {}, this._onMessage = function(o) {}, this._sessionError = function(o) {
					i.logger.log("error", "session error: ".concat(o))
				}, this._features = new Yr
			}
			return Object.defineProperty(e.prototype, "onConnected", {
				set: function(t) {
					this._onConnectedStorage = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onClose", {
				set: function(t) {
					this._onClose = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onMessage", {
				set: function(t) {
					this._onMessage = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "loggingEnabled", {
				get: function() {
					return this.logger.isEnabled
				},
				set: function(t) {
					this.logger.log("warn", "loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)"), this.logger.enableLogging(t)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.setMinLogLevel = function(t) {
				this.logger.setMinLogLevel(t)
			}, e.prototype.setLogging = function(t) {
				this.logger.enableLogging(t)
			}, e.prototype.log = function(t) {
				this.loggingEnabled && (this._shouldLogToServer ? this.logToServer(t) : this.logger.log("log", t))
			}, e.prototype.logToServer = function(t) {
				this.sessionId ? this.sendlogMessage([t]) : this._pendingLog.push(t)
			}, e.prototype.sendlogMessage = function(t) {
				if (this._sessionId && t && t.length > 0) {
					var n = {
						category: "diagnostics",
						kind: "event",
						name: "log",
						body: {
							name: "browser",
							text: t
						}
					};
					this.sendMessage(n)
				}
			}, e.prototype.connect = function() {
				return me(this, void 0, void 0, function() {
					var t;
					return ge(this, function(n) {
						return t = new Qn, this._closed = !1, this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) && this.connectByWebSocket(t), [2, t.promise]
					})
				})
			}, e.prototype.connectByWebSocket = function(t) {
				var n = this;
				this.log("connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(r) {
					n.gotMessageFromServer(r, t)
				}, this._serverConnection.onerror = function(r) {
					t.isPending() && t.reject(ce("websocket failed", "serverConnectionFailed"))
				}, this._serverConnection.onopen = function(r) {
					n.log("websocket open"), t.resolve()
				}, this._serverConnection.onclose = function(r) {
					n.log("websocket closed: code(".concat(r.code, "), reason(").concat(r.reason, "), clean(").concat(r.wasClean, ")")), t.isRejected || n.close(!1, "normal", t)
				}
			}, e.prototype.gotMessageFromServer = function(t, n) {
				var r = t.data;
				this.log("message received: ".concat(r));
				var i = JSON.parse(r),
					o = i.category,
					a = i.name,
					l = i.body;
				if (o !== "webrtc") {
					this._onMessage(i);
					return
				}
				if (i.kind === "event")
					if (a === "accepted") {
						this.log("accepted, session_id = ".concat(l.sessionId)), this._sessionId = l.sessionId;
						for (var u = 0; u < this._outgoingQueue.length; u++) this._outgoingQueue[u].body.sessionId = this._sessionId, this.sendMessage(this._outgoingQueue[u]);
						this._outgoingQueue = [], this.sendlogMessage(this._pendingLog), this._pendingLog = []
					} else a === "close" && this.close(!1, l.reason, n)
			}, e.prototype.sendMessage = function(t) {
				!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("not ready, discarding message: ".concat(t)))
			}, e.prototype.close = function(t, n, r) {
				n === void 0 && (n = "normal"), !this._closed && (this._closed = !0, r && (r.isResolved() ? this._onClose(n) : r.reject(ce("websocket closed: " + n, n))), this._serverConnection && (this.log("closing server connection"), this._serverConnection.close()))
			}, Object.defineProperty(e.prototype, "serverConnection", {
				get: function() {
					return this._serverConnection
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "sessionId", {
				get: function() {
					return this._sessionId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "peerConnection", {
				get: function() {
					return null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "features", {
				get: function() {
					return this._features
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.sendRtcEvent = function(t, n) {}, e.prototype.sendVideoBounds = function(t, n) {}, e.prototype.sendUserText = function(t) {
				this.logger.log("error", "WebSocketSession discarding text: " + t)
			}, Object.defineProperty(e.prototype, "microphoneMuteDelay", {
				get: function() {},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "microphoneMuted", {
				get: function() {
					return null
				},
				set: function(t) {},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUserText", {
				set: function(t) {},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
				get: function() {
					return null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isCameraConnected", {
				get: function() {
					return null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetX", {
				get: function() {
					return 0
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "offsetY", {
				get: function() {
					return 0
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.isMicrophoneActive = function() {
				return !1
			}, e.prototype.isCameraActive = function() {
				return !1
			}, e.prototype.setMediaDeviceActive = function(t) {
				return t.microphone, t.camera, me(this, void 0, void 0, function() {
					return ge(this, function(n) {
						throw ce("setMediaDeviceActive not supported on WebSocketSession", "notSupported")
					})
				})
			}, e
		}(),
		Qr;
	(function(e) {
		e.Scene = "scene"
	})(Qr || (Qr = {}));
	var Jn;
	(function(e) {
		e.Response = "response", e.Request = "request"
	})(Jn || (Jn = {}));
	var Zn;
	(function(e) {
		e.Idle = "idle", e.Animating = "animating", e.Speaking = "speaking"
	})(Zn || (Zn = {}));
	var jo;
	(function(e) {
		e.UI_CONTENT_AWARENESS = "UI_CONTENT_AWARENESS", e.UI_SDK_CAMERA_CONTROL = "UI_SDK_CAMERA_CONTROL"
	})(jo || (jo = {}));
	var Wt = [],
		gm = function() {
			return Wt.some(function(e) {
				return e.activeTargets.length > 0
			})
		},
		_m = function() {
			return Wt.some(function(e) {
				return e.skippedTargets.length > 0
			})
		},
		ql = "ResizeObserver loop completed with undelivered notifications.",
		vm = function() {
			var e;
			typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
				message: ql
			}) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ql), window.dispatchEvent(e)
		},
		er;
	(function(e) {
		e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
	})(er || (er = {}));
	var qt = function(e) {
			return Object.freeze(e)
		},
		ym = function() {
			function e(t, n) {
				this.inlineSize = t, this.blockSize = n, qt(this)
			}
			return e
		}(),
		Kl = function() {
			function e(t, n, r, i) {
				return this.x = t, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, qt(this)
			}
			return e.prototype.toJSON = function() {
				var t = this,
					n = t.x,
					r = t.y,
					i = t.top,
					o = t.right,
					a = t.bottom,
					l = t.left,
					u = t.width,
					s = t.height;
				return {
					x: n,
					y: r,
					top: i,
					right: o,
					bottom: a,
					left: l,
					width: u,
					height: s
				}
			}, e.fromRect = function(t) {
				return new e(t.x, t.y, t.width, t.height)
			}, e
		}(),
		Vo = function(e) {
			return e instanceof SVGElement && "getBBox" in e
		},
		Xl = function(e) {
			if (Vo(e)) {
				var t = e.getBBox(),
					n = t.width,
					r = t.height;
				return !n && !r
			}
			var i = e,
				o = i.offsetWidth,
				a = i.offsetHeight;
			return !(o || a || e.getClientRects().length)
		},
		Yl = function(e) {
			var t;
			if (e instanceof Element) return !0;
			var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
			return !!(n && e instanceof n.Element)
		},
		bm = function(e) {
			switch (e.tagName) {
				case "INPUT":
					if (e.type !== "image") break;
				case "VIDEO":
				case "AUDIO":
				case "EMBED":
				case "OBJECT":
				case "CANVAS":
				case "IFRAME":
				case "IMG":
					return !0
			}
			return !1
		},
		tr = typeof window < "u" ? window : {},
		Jr = new WeakMap,
		Ql = /auto|scroll/,
		Em = /^tb|vertical/,
		Sm = /msie|trident/i.test(tr.navigator && tr.navigator.userAgent),
		ct = function(e) {
			return parseFloat(e || "0")
		},
		mn = function(e, t, n) {
			return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ym((n ? t : e) || 0, (n ? e : t) || 0)
		},
		Jl = qt({
			devicePixelContentBoxSize: mn(),
			borderBoxSize: mn(),
			contentBoxSize: mn(),
			contentRect: new Kl(0, 0, 0, 0)
		}),
		Zl = function(e, t) {
			if (t === void 0 && (t = !1), Jr.has(e) && !t) return Jr.get(e);
			if (Xl(e)) return Jr.set(e, Jl), Jl;
			var n = getComputedStyle(e),
				r = Vo(e) && e.ownerSVGElement && e.getBBox(),
				i = !Sm && n.boxSizing === "border-box",
				o = Em.test(n.writingMode || ""),
				a = !r && Ql.test(n.overflowY || ""),
				l = !r && Ql.test(n.overflowX || ""),
				u = r ? 0 : ct(n.paddingTop),
				s = r ? 0 : ct(n.paddingRight),
				c = r ? 0 : ct(n.paddingBottom),
				f = r ? 0 : ct(n.paddingLeft),
				p = r ? 0 : ct(n.borderTopWidth),
				h = r ? 0 : ct(n.borderRightWidth),
				d = r ? 0 : ct(n.borderBottomWidth),
				m = r ? 0 : ct(n.borderLeftWidth),
				_ = f + s,
				g = u + c,
				S = m + h,
				E = p + d,
				w = l ? e.offsetHeight - E - e.clientHeight : 0,
				O = a ? e.offsetWidth - S - e.clientWidth : 0,
				v = i ? _ + S : 0,
				A = i ? g + E : 0,
				P = r ? r.width : ct(n.width) - v - O,
				D = r ? r.height : ct(n.height) - A - w,
				U = P + _ + O + S,
				R = D + g + w + E,
				M = qt({
					devicePixelContentBoxSize: mn(Math.round(P * devicePixelRatio), Math.round(D * devicePixelRatio), o),
					borderBoxSize: mn(U, R, o),
					contentBoxSize: mn(P, D, o),
					contentRect: new Kl(f, u, P, D)
				});
			return Jr.set(e, M), M
		},
		eu = function(e, t, n) {
			var r = Zl(e, n),
				i = r.borderBoxSize,
				o = r.contentBoxSize,
				a = r.devicePixelContentBoxSize;
			switch (t) {
				case er.DEVICE_PIXEL_CONTENT_BOX:
					return a;
				case er.BORDER_BOX:
					return i;
				default:
					return o
			}
		},
		Tm = function() {
			function e(t) {
				var n = Zl(t);
				this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = qt([n.borderBoxSize]), this.contentBoxSize = qt([n.contentBoxSize]), this.devicePixelContentBoxSize = qt([n.devicePixelContentBoxSize])
			}
			return e
		}(),
		tu = function(e) {
			if (Xl(e)) return 1 / 0;
			for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
			return t
		},
		Cm = function() {
			var e = 1 / 0,
				t = [];
			Wt.forEach(function(a) {
				if (a.activeTargets.length !== 0) {
					var l = [];
					a.activeTargets.forEach(function(s) {
						var c = new Tm(s.target),
							f = tu(s.target);
						l.push(c), s.lastReportedSize = eu(s.target, s.observedBox), f < e && (e = f)
					}), t.push(function() {
						a.callback.call(a.observer, l, a.observer)
					}), a.activeTargets.splice(0, a.activeTargets.length)
				}
			});
			for (var n = 0, r = t; n < r.length; n++) {
				var i = r[n];
				i()
			}
			return e
		},
		nu = function(e) {
			Wt.forEach(function(n) {
				n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
					i.isActive() && (tu(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
				})
			})
		},
		wm = function() {
			var e = 0;
			for (nu(e); gm();) e = Cm(), nu(e);
			return _m() && vm(), e > 0
		},
		$o, ru = [],
		Om = function() {
			return ru.splice(0).forEach(function(e) {
				return e()
			})
		},
		Am = function(e) {
			if (!$o) {
				var t = 0,
					n = document.createTextNode(""),
					r = {
						characterData: !0
					};
				new MutationObserver(function() {
					return Om()
				}).observe(n, r), $o = function() {
					n.textContent = "".concat(t ? t-- : t++)
				}
			}
			ru.push(e), $o()
		},
		xm = function(e) {
			Am(function() {
				requestAnimationFrame(e)
			})
		},
		Zr = 0,
		Rm = function() {
			return !!Zr
		},
		km = 250,
		Im = {
			attributes: !0,
			characterData: !0,
			childList: !0,
			subtree: !0
		},
		iu = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
		ou = function(e) {
			return e === void 0 && (e = 0), Date.now() + e
		},
		zo = !1,
		Pm = function() {
			function e() {
				var t = this;
				this.stopped = !0, this.listener = function() {
					return t.schedule()
				}
			}
			return e.prototype.run = function(t) {
				var n = this;
				if (t === void 0 && (t = km), !zo) {
					zo = !0;
					var r = ou(t);
					xm(function() {
						var i = !1;
						try {
							i = wm()
						} finally {
							if (zo = !1, t = r - ou(), !Rm()) return;
							i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
						}
					})
				}
			}, e.prototype.schedule = function() {
				this.stop(), this.run()
			}, e.prototype.observe = function() {
				var t = this,
					n = function() {
						return t.observer && t.observer.observe(document.body, Im)
					};
				document.body ? n() : tr.addEventListener("DOMContentLoaded", n)
			}, e.prototype.start = function() {
				var t = this;
				this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), iu.forEach(function(n) {
					return tr.addEventListener(n, t.listener, !0)
				}))
			}, e.prototype.stop = function() {
				var t = this;
				this.stopped || (this.observer && this.observer.disconnect(), iu.forEach(function(n) {
					return tr.removeEventListener(n, t.listener, !0)
				}), this.stopped = !0)
			}, e
		}(),
		Ho = new Pm,
		au = function(e) {
			!Zr && e > 0 && Ho.start(), Zr += e, !Zr && Ho.stop()
		},
		Nm = function(e) {
			return !Vo(e) && !bm(e) && getComputedStyle(e).display === "inline"
		},
		Mm = function() {
			function e(t, n) {
				this.target = t, this.observedBox = n || er.CONTENT_BOX, this.lastReportedSize = {
					inlineSize: 0,
					blockSize: 0
				}
			}
			return e.prototype.isActive = function() {
				var t = eu(this.target, this.observedBox, !0);
				return Nm(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
			}, e
		}(),
		Lm = function() {
			function e(t, n) {
				this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n
			}
			return e
		}(),
		ei = new WeakMap,
		su = function(e, t) {
			for (var n = 0; n < e.length; n += 1)
				if (e[n].target === t) return n;
			return -1
		},
		ti = function() {
			function e() {}
			return e.connect = function(t, n) {
				var r = new Lm(t, n);
				ei.set(t, r)
			}, e.observe = function(t, n, r) {
				var i = ei.get(t),
					o = i.observationTargets.length === 0;
				su(i.observationTargets, n) < 0 && (o && Wt.push(i), i.observationTargets.push(new Mm(n, r && r.box)), au(1), Ho.schedule())
			}, e.unobserve = function(t, n) {
				var r = ei.get(t),
					i = su(r.observationTargets, n),
					o = r.observationTargets.length === 1;
				i >= 0 && (o && Wt.splice(Wt.indexOf(r), 1), r.observationTargets.splice(i, 1), au(-1))
			}, e.disconnect = function(t) {
				var n = this,
					r = ei.get(t);
				r.observationTargets.slice().forEach(function(i) {
					return n.unobserve(t, i.target)
				}), r.activeTargets.splice(0, r.activeTargets.length)
			}, e
		}(),
		Dm = function() {
			function e(t) {
				if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
				if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
				ti.connect(this, t)
			}
			return e.prototype.observe = function(t, n) {
				if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!Yl(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
				ti.observe(this, t, n)
			}, e.prototype.unobserve = function(t) {
				if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
				if (!Yl(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
				ti.unobserve(this, t)
			}, e.prototype.disconnect = function() {
				ti.disconnect(this)
			}, e.toString = function() {
				return "function ResizeObserver () { [polyfill code] }"
			}, e
		}(),
		Um = function() {
			return Promise.all(Array.from(document.images).filter(function(e) {
				return !e.complete
			}).map(function(e) {
				return new Promise(function(t) {
					e.onload = t, e.onerror = t
				})
			}))
		},
		Fm = function(e, t) {
			t === void 0 && (t = 500);
			var n = -1;
			return function() {
				n && clearTimeout(n), n = setTimeout(function() {
					return e()
				}, t)
			}
		},
		Bm = function() {
			function e(t, n, r) {
				n === void 0 && (n = 300), r === void 0 && (r = new Pt);
				var i = this;
				this.scene = t, this.debounceTime = n, this.logger = r, this.VIDEO_FRAME_STR = "data-sm-video", this.VIDEO_FRAME_STR_BRACKETED = "[".concat(this.VIDEO_FRAME_STR, "]"), this.CONTENT_STR = "data-sm-content", this.CONTENT_STR_BRACKETED = "[".concat(this.CONTENT_STR, "]"), this.CUE_ATTRIBUTES = [this.VIDEO_FRAME_STR, this.CONTENT_STR], this.CUE_ATTRIBUTES_BRACKETED = [this.VIDEO_FRAME_STR_BRACKETED, this.CONTENT_STR_BRACKETED].join(), this.RESIZE_OBSERVER_BOX_OPTIONS = "border-box", this.callMeasure = !1, this.contentCollection = {}, this.videoFrame = null, this.debouncedMeasure = Fm(function() {
					return i.measureInternal()
				}, n), this.resizeObserver = new Dm(function() {
					return i.measureDebounced()
				}), this.getInitialElements(), this.mutationObserver = new MutationObserver(function(o) {
					return i.mutationCallback(o)
				}), this.setupEventListeners(), this.observeMutations(), this.measureInternal()
			}
			return e.prototype.isLoggingEnabled = function() {
				return this.logger.isEnabled
			}, e.prototype.setLogging = function(t) {
				this.logger.enableLogging(t)
			}, e.prototype.getMinLogLevel = function() {
				return this.logger.getMinLogLevel()
			}, e.prototype.setMinLogLevel = function(t) {
				this.logger.setMinLogLevel(t)
			}, e.prototype.setupEventListeners = function() {
				var t = this;
				window.addEventListener("resize", function() {
					return t.measureDebounced()
				})
			}, e.prototype.getInitialElements = function() {
				var t = this,
					n = document.querySelector(this.VIDEO_FRAME_STR_BRACKETED),
					r = document.querySelectorAll(this.CONTENT_STR_BRACKETED);
				this.trackVideoElement(n), Array.from(r).map(function(i) {
					return t.trackContentElement(i)
				})
			}, e.prototype.observeMutations = function() {
				var t = document.documentElement || document.body;
				this.mutationObserver.observe(t, {
					attributeFilter: this.CUE_ATTRIBUTES,
					attributeOldValue: !0,
					childList: !0,
					subtree: !0
				})
			}, e.prototype.disconnect = function() {
				var t = this;
				this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), window.removeEventListener("resize", function() {
					return t.measureDebounced()
				}), this.scene.contentAwareness = void 0
			}, e.prototype.reconnect = function() {
				this.scene.contentAwareness = this, this.observeMutations(), this.setupEventListeners(), this.measure()
			}, e.prototype.measure = function() {
				this.measureInternal()
			}, e.prototype.measureDebounced = function() {
				this.debouncedMeasure()
			}, e.prototype.measureInternal = function() {
				if (!this.scene.isConnected()) {
					this.logger.log("error", "ContentAwareness: Scene does not exist or is not connected yet");
					return
				}
				var t = this.measureWindow(),
					n = this.measureVideoFrame(),
					r = this.measureContent();
				if (t && n && r) {
					var i = this.buildUpdateContentAwarenessRequest(t.innerWidth, t.innerHeight, n, r);
					this.scene.sendRequest("updateContentAwareness", i)
				}
			}, e.prototype.measureVideoFrame = function() {
				if (!this.videoFrame) return this.logger.log("warn", "ContentAwareness: Unable to find a video element"), null;
				var t = this.videoFrame.getBoundingClientRect();
				return this.invalidDimensions(t) ? (this.logger.log("warn", "ContentAwareness: Video has a zero width and height"), null) : {
					x1: Math.round(t.left),
					x2: Math.round(t.right),
					y1: Math.round(t.top),
					y2: Math.round(t.bottom)
				}
			}, e.prototype.measureContent = function() {
				var t = this,
					n = [];
				return Object.keys(this.contentCollection).map(function(r) {
					var i = t.contentCollection[r],
						o = i.getBoundingClientRect();
					if (t.invalidDimensions(o) && t.logger.log("warn", "ContentAwareness: Element '".concat(r, "' has a zero width and height")), t.invalidContent(o)) {
						t.logger.log("warn", "ContentAwareness: Element '".concat(r, "' is not being tracked")), delete t.contentCollection[r];
						return
					}
					n.push({
						id: r,
						x1: Math.round(o.left),
						x2: Math.round(o.right),
						y1: Math.round(o.top),
						y2: Math.round(o.bottom)
					})
				}), n
			}, e.prototype.invalidDimensions = function(t) {
				return t.width === 0 && t.height === 0
			}, e.prototype.invalidContent = function(t) {
				return t.top === 0 && t.bottom === 0 && t.right === 0 && t.left === 0
			}, e.prototype.measureWindow = function() {
				return {
					innerHeight: Math.round(window.innerHeight),
					innerWidth: Math.round(window.innerWidth)
				}
			}, e.prototype.buildUpdateContentAwarenessRequest = function(t, n, r, i) {
				return {
					viewWidth: t,
					viewHeight: n,
					videoFrame: r,
					content: i
				}
			}, e.prototype.trackVideoElement = function(t) {
				!t || (this.videoFrame && (this.logger.log("warn", "ContentAwareness: Already observing a video element, switching to new video element"), this.untrackVideoElement(this.videoFrame)), this.videoFrame = t, this.resizeObserver.observe(this.videoFrame, {
					box: this.RESIZE_OBSERVER_BOX_OPTIONS
				}))
			}, e.prototype.trackContentElement = function(t) {
				var n = t.getAttribute(this.CONTENT_STR);
				return n ? (this.contentCollection[n] = t, this.resizeObserver.observe(t, {
					box: this.RESIZE_OBSERVER_BOX_OPTIONS
				}), !0) : !1
			}, e.prototype.untrackContentElement = function(t) {
				var n = t.getAttribute(this.CONTENT_STR),
					r = this.contentCollection[n];
				t === r && (delete this.contentCollection[n], this.resizeObserver.unobserve(t))
			}, e.prototype.untrackVideoElement = function(t) {
				t === this.videoFrame && (this.videoFrame = null), this.resizeObserver.unobserve(t)
			}, e.prototype.mutationCallback = function(t) {
				var n = this,
					r = !1;
				this.callMeasure = !1;
				for (var i = 0; i < t.length; ++i) switch (t[i].type) {
					case "childList": {
						if (t[i].target.nodeType !== Node.ELEMENT_NODE) break;
						this.untrackRemovedNodeWithCUE(t[i].removedNodes), this.trackAddedNodeWithCUE(t[i].addedNodes);
						for (var o = 0; o < t[i].addedNodes.length; o++) try {
							var a = t[i].addedNodes[o];
							if (!a.hasAttribute) continue;
							var l = a.tagName === "IMG",
								u = !!a.querySelector("img");
							if (r = l || u, r) break
						} catch {
							this.logger.log("warn", "ContentAwareness: Failed to track non-element node", t[i].addedNodes[o])
						}
						break
					}
					case "attributes": {
						if (t[i].target.nodeType !== Node.ELEMENT_NODE) break;
						try {
							var a = t[i].target,
								s = t[i].attributeName;
							if (s === this.VIDEO_FRAME_STR) a.hasAttribute(s) ? (this.trackVideoElement(a), this.callMeasure = !0) : this.videoFrame && this.untrackVideoElement(a);
							else if (s === this.CONTENT_STR) {
								var c = a.getAttribute(s),
									f = t[i].oldValue;
								f && (this.resizeObserver.unobserve(this.contentCollection[f]), delete this.contentCollection[f]), c && (this.contentCollection[c] = a, this.resizeObserver.observe(a, {
									box: this.RESIZE_OBSERVER_BOX_OPTIONS
								})), this.callMeasure = !0
							}
							break
						} catch {
							this.logger.log("warn", "ContentAwareness: Failed to track non-element node", t[i].target)
						}
					}
				}
				this.callMeasure && (r ? Um().then(function() {
					n.measureDebounced()
				}) : this.measureDebounced())
			}, e.prototype.trackAddedNodeWithCUE = function(t) {
				var n = this;
				t.forEach(function(r) {
					try {
						var i = r;
						if (!i.hasAttribute) return;
						i.hasAttribute(n.VIDEO_FRAME_STR) ? (n.trackVideoElement(i), n.callMeasure = !0) : i.hasAttribute(n.CONTENT_STR) && (n.callMeasure = n.trackContentElement(i)), i.querySelector(n.CUE_ATTRIBUTES_BRACKETED) !== null && i.querySelectorAll(n.CUE_ATTRIBUTES_BRACKETED).forEach(function(o) {
							o.hasAttribute(n.VIDEO_FRAME_STR) ? (n.trackVideoElement(o), n.callMeasure = !0) : o.hasAttribute(n.CONTENT_STR) && (n.callMeasure = n.trackContentElement(o))
						})
					} catch {
						n.logger.log("warn", "ContentAwareness: Failed to track non-element node", r)
					}
				})
			}, e.prototype.untrackRemovedNodeWithCUE = function(t) {
				var n = this;
				t.forEach(function(r) {
					try {
						var i = r;
						if (!i.hasAttribute) return;
						i.hasAttribute(n.VIDEO_FRAME_STR) ? n.untrackVideoElement(i) : i.hasAttribute(n.CONTENT_STR) && (n.untrackContentElement(i), n.callMeasure = !0), i.querySelector(n.CUE_ATTRIBUTES_BRACKETED) !== null && i.querySelectorAll(n.CUE_ATTRIBUTES_BRACKETED).forEach(function(o) {
							o.hasAttribute(n.VIDEO_FRAME_STR) ? n.untrackVideoElement(o) : o.hasAttribute(n.CONTENT_STR) && (n.untrackContentElement(o), n.callMeasure = !0)
						})
					} catch {
						n.logger.log("warn", "ContentAwareness: Failed to track non-element node", r)
					}
				})
			}, e
		}(),
		jm = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {},
		gn = "1.2.0",
		lu = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

	function Vm(e) {
		var t = new Set([e]),
			n = new Set,
			r = e.match(lu);
		if (!r) return function() {
			return !1
		};
		var i = {
			major: +r[1],
			minor: +r[2],
			patch: +r[3],
			prerelease: r[4]
		};
		if (i.prerelease != null) return function(u) {
			return u === e
		};

		function o(l) {
			return n.add(l), !1
		}

		function a(l) {
			return t.add(l), !0
		}
		return function(u) {
			if (t.has(u)) return !0;
			if (n.has(u)) return !1;
			var s = u.match(lu);
			if (!s) return o(u);
			var c = {
				major: +s[1],
				minor: +s[2],
				patch: +s[3],
				prerelease: s[4]
			};
			return c.prerelease != null || i.major !== c.major ? o(u) : i.major === 0 ? i.minor === c.minor && i.patch <= c.patch ? a(u) : o(u) : i.minor <= c.minor ? a(u) : o(u)
		}
	}
	var $m = Vm(gn),
		zm = gn.split(".")[0],
		nr = Symbol.for("opentelemetry.js.api." + zm),
		rr = jm;

	function ni(e, t, n, r) {
		var i;
		r === void 0 && (r = !1);
		var o = rr[nr] = (i = rr[nr]) !== null && i !== void 0 ? i : {
			version: gn
		};
		if (!r && o[e]) {
			var a = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
			return n.error(a.stack || a.message), !1
		}
		if (o.version !== gn) {
			var a = new Error("@opentelemetry/api: All API registration versions must match");
			return n.error(a.stack || a.message), !1
		}
		return o[e] = t, n.debug("@opentelemetry/api: Registered a global for " + e + " v" + gn + "."), !0
	}

	function _n(e) {
		var t, n, r = (t = rr[nr]) === null || t === void 0 ? void 0 : t.version;
		if (!(!r || !$m(r))) return (n = rr[nr]) === null || n === void 0 ? void 0 : n[e]
	}

	function ri(e, t) {
		t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + gn + ".");
		var n = rr[nr];
		n && delete n[e]
	}
	var Hm = function() {
		function e(t) {
			this._namespace = t.namespace || "DiagComponentLogger"
		}
		return e.prototype.debug = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return ir("debug", this._namespace, t)
		}, e.prototype.error = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return ir("error", this._namespace, t)
		}, e.prototype.info = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return ir("info", this._namespace, t)
		}, e.prototype.warn = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return ir("warn", this._namespace, t)
		}, e.prototype.verbose = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return ir("verbose", this._namespace, t)
		}, e
	}();

	function ir(e, t, n) {
		var r = _n("diag");
		if (!!r) return n.unshift(t), r[e].apply(r, n)
	}
	var re;
	(function(e) {
		e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL"
	})(re || (re = {}));

	function Gm(e, t) {
		e < re.NONE ? e = re.NONE : e > re.ALL && (e = re.ALL), t = t || {};

		function n(r, i) {
			var o = t[r];
			return typeof o == "function" && e >= i ? o.bind(t) : function() {}
		}
		return {
			error: n("error", re.ERROR),
			warn: n("warn", re.WARN),
			info: n("info", re.INFO),
			debug: n("debug", re.DEBUG),
			verbose: n("verbose", re.VERBOSE)
		}
	}
	var Wm = "diag",
		Nt = function() {
			function e() {
				function t(r) {
					return function() {
						for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
						var a = _n("diag");
						if (!!a) return a[r].apply(a, i)
					}
				}
				var n = this;
				n.setLogger = function(r, i) {
					var o, a;
					if (i === void 0 && (i = re.INFO), r === n) {
						var l = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
						return n.error((o = l.stack) !== null && o !== void 0 ? o : l.message), !1
					}
					var u = _n("diag"),
						s = Gm(i, r);
					if (u) {
						var c = (a = new Error().stack) !== null && a !== void 0 ? a : "<failed to generate stacktrace>";
						u.warn("Current logger will be overwritten from " + c), s.warn("Current logger will overwrite one already registered from " + c)
					}
					return ni("diag", s, n, !0)
				}, n.disable = function() {
					ri(Wm, n)
				}, n.createComponentLogger = function(r) {
					return new Hm(r)
				}, n.verbose = t("verbose"), n.debug = t("debug"), n.info = t("info"), n.warn = t("warn"), n.error = t("error")
			}
			return e.instance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e
		}(),
		qm = function() {
			function e(t) {
				this._entries = t ? new Map(t) : new Map
			}
			return e.prototype.getEntry = function(t) {
				var n = this._entries.get(t);
				if (!!n) return Object.assign({}, n)
			}, e.prototype.getAllEntries = function() {
				return Array.from(this._entries.entries()).map(function(t) {
					var n = t[0],
						r = t[1];
					return [n, r]
				})
			}, e.prototype.setEntry = function(t, n) {
				var r = new e(this._entries);
				return r._entries.set(t, n), r
			}, e.prototype.removeEntry = function(t) {
				var n = new e(this._entries);
				return n._entries.delete(t), n
			}, e.prototype.removeEntries = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				for (var r = new e(this._entries), i = 0, o = t; i < o.length; i++) {
					var a = o[i];
					r._entries.delete(a)
				}
				return r
			}, e.prototype.clear = function() {
				return new e
			}, e
		}(),
		Km = Symbol("BaggageEntryMetadata"),
		Xm = Nt.instance();

	function Ym(e) {
		return e === void 0 && (e = {}), new qm(new Map(Object.entries(e)))
	}

	function uu(e) {
		return typeof e != "string" && (Xm.error("Cannot create baggage metadata from unknown type: " + typeof e), e = ""), {
			__TYPE__: Km,
			toString: function() {
				return e
			}
		}
	}
	var Qm = {
			get: function(e, t) {
				if (e != null) return e[t]
			},
			keys: function(e) {
				return e == null ? [] : Object.keys(e)
			}
		},
		Jm = {
			set: function(e, t, n) {
				e != null && (e[t] = n)
			}
		};

	function Go(e) {
		return Symbol.for(e)
	}
	var Zm = function() {
			function e(t) {
				var n = this;
				n._currentContext = t ? new Map(t) : new Map, n.getValue = function(r) {
					return n._currentContext.get(r)
				}, n.setValue = function(r, i) {
					var o = new e(n._currentContext);
					return o._currentContext.set(r, i), o
				}, n.deleteValue = function(r) {
					var i = new e(n._currentContext);
					return i._currentContext.delete(r), i
				}
			}
			return e
		}(),
		Kt = new Zm,
		eg = globalThis && globalThis.__spreadArray || function(e, t) {
			for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
			return e
		},
		tg = function() {
			function e() {}
			return e.prototype.active = function() {
				return Kt
			}, e.prototype.with = function(t, n, r) {
				for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
				return n.call.apply(n, eg([r], i))
			}, e.prototype.bind = function(t, n) {
				return n
			}, e.prototype.enable = function() {
				return this
			}, e.prototype.disable = function() {
				return this
			}, e
		}(),
		ng = globalThis && globalThis.__spreadArray || function(e, t) {
			for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
			return e
		},
		Wo = "context",
		rg = new tg,
		qo = function() {
			function e() {}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.setGlobalContextManager = function(t) {
				return ni(Wo, t, Nt.instance())
			}, e.prototype.active = function() {
				return this._getContextManager().active()
			}, e.prototype.with = function(t, n, r) {
				for (var i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a];
				return (i = this._getContextManager()).with.apply(i, ng([t, n, r], o))
			}, e.prototype.bind = function(t, n) {
				return this._getContextManager().bind(t, n)
			}, e.prototype._getContextManager = function() {
				return _n(Wo) || rg
			}, e.prototype.disable = function() {
				this._getContextManager().disable(), ri(Wo, Nt.instance())
			}, e
		}(),
		Ct;
	(function(e) {
		e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED"
	})(Ct || (Ct = {}));
	var cu = "0000000000000000",
		fu = "00000000000000000000000000000000",
		du = {
			traceId: fu,
			spanId: cu,
			traceFlags: Ct.NONE
		},
		or = function() {
			function e(t) {
				t === void 0 && (t = du), this._spanContext = t
			}
			return e.prototype.spanContext = function() {
				return this._spanContext
			}, e.prototype.setAttribute = function(t, n) {
				return this
			}, e.prototype.setAttributes = function(t) {
				return this
			}, e.prototype.addEvent = function(t, n) {
				return this
			}, e.prototype.setStatus = function(t) {
				return this
			}, e.prototype.updateName = function(t) {
				return this
			}, e.prototype.end = function(t) {}, e.prototype.isRecording = function() {
				return !1
			}, e.prototype.recordException = function(t, n) {}, e
		}(),
		Ko = Go("OpenTelemetry Context Key SPAN");

	function Xo(e) {
		return e.getValue(Ko) || void 0
	}

	function ig() {
		return Xo(qo.getInstance().active())
	}

	function Yo(e, t) {
		return e.setValue(Ko, t)
	}

	function og(e) {
		return e.deleteValue(Ko)
	}

	function ag(e, t) {
		return Yo(e, new or(t))
	}

	function hu(e) {
		var t;
		return (t = Xo(e)) === null || t === void 0 ? void 0 : t.spanContext()
	}
	var sg = /^([0-9a-f]{32})$/i,
		lg = /^[0-9a-f]{16}$/i;

	function pu(e) {
		return sg.test(e) && e !== fu
	}

	function ug(e) {
		return lg.test(e) && e !== cu
	}

	function ii(e) {
		return pu(e.traceId) && ug(e.spanId)
	}

	function cg(e) {
		return new or(e)
	}
	var mu = qo.getInstance(),
		gu = function() {
			function e() {}
			return e.prototype.startSpan = function(t, n, r) {
				var i = Boolean(n == null ? void 0 : n.root);
				if (i) return new or;
				var o = r && hu(r);
				return fg(o) && ii(o) ? new or(o) : new or
			}, e.prototype.startActiveSpan = function(t, n, r, i) {
				var o, a, l;
				if (!(arguments.length < 2)) {
					arguments.length === 2 ? l = n : arguments.length === 3 ? (o = n, l = r) : (o = n, a = r, l = i);
					var u = a != null ? a : mu.active(),
						s = this.startSpan(t, o, u),
						c = Yo(u, s);
					return mu.with(c, l, void 0, s)
				}
			}, e
		}();

	function fg(e) {
		return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number"
	}
	var dg = new gu,
		hg = function() {
			function e(t, n, r, i) {
				this._provider = t, this.name = n, this.version = r, this.options = i
			}
			return e.prototype.startSpan = function(t, n, r) {
				return this._getTracer().startSpan(t, n, r)
			}, e.prototype.startActiveSpan = function(t, n, r, i) {
				var o = this._getTracer();
				return Reflect.apply(o.startActiveSpan, o, arguments)
			}, e.prototype._getTracer = function() {
				if (this._delegate) return this._delegate;
				var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
				return t ? (this._delegate = t, this._delegate) : dg
			}, e
		}(),
		pg = function() {
			function e() {}
			return e.prototype.getTracer = function(t, n, r) {
				return new gu
			}, e
		}(),
		mg = new pg,
		_u = function() {
			function e() {}
			return e.prototype.getTracer = function(t, n, r) {
				var i;
				return (i = this.getDelegateTracer(t, n, r)) !== null && i !== void 0 ? i : new hg(this, t, n, r)
			}, e.prototype.getDelegate = function() {
				var t;
				return (t = this._delegate) !== null && t !== void 0 ? t : mg
			}, e.prototype.setDelegate = function(t) {
				this._delegate = t
			}, e.prototype.getDelegateTracer = function(t, n, r) {
				var i;
				return (i = this._delegate) === null || i === void 0 ? void 0 : i.getTracer(t, n, r)
			}, e
		}(),
		oi;
	(function(e) {
		e[e.NOT_RECORD = 0] = "NOT_RECORD", e[e.RECORD = 1] = "RECORD", e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
	})(oi || (oi = {}));
	var Qo;
	(function(e) {
		e[e.INTERNAL = 0] = "INTERNAL", e[e.SERVER = 1] = "SERVER", e[e.CLIENT = 2] = "CLIENT", e[e.PRODUCER = 3] = "PRODUCER", e[e.CONSUMER = 4] = "CONSUMER"
	})(Qo || (Qo = {}));
	var Jo;
	(function(e) {
		e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR"
	})(Jo || (Jo = {}));
	var Zo = "trace",
		gg = function() {
			function e() {
				this._proxyTracerProvider = new _u, this.wrapSpanContext = cg, this.isSpanContextValid = ii, this.deleteSpan = og, this.getSpan = Xo, this.getActiveSpan = ig, this.getSpanContext = hu, this.setSpan = Yo, this.setSpanContext = ag
			}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.setGlobalTracerProvider = function(t) {
				var n = ni(Zo, this._proxyTracerProvider, Nt.instance());
				return n && this._proxyTracerProvider.setDelegate(t), n
			}, e.prototype.getTracerProvider = function() {
				return _n(Zo) || this._proxyTracerProvider
			}, e.prototype.getTracer = function(t, n) {
				return this.getTracerProvider().getTracer(t, n)
			}, e.prototype.disable = function() {
				ri(Zo, Nt.instance()), this._proxyTracerProvider = new _u
			}, e
		}(),
		_g = function() {
			function e() {}
			return e.prototype.inject = function(t, n) {}, e.prototype.extract = function(t, n) {
				return t
			}, e.prototype.fields = function() {
				return []
			}, e
		}(),
		ea = Go("OpenTelemetry Baggage Key");

	function vg(e) {
		return e.getValue(ea) || void 0
	}

	function yg(e, t) {
		return e.setValue(ea, t)
	}

	function bg(e) {
		return e.deleteValue(ea)
	}
	var ta = "propagation",
		Eg = new _g,
		Sg = function() {
			function e() {
				this.createBaggage = Ym, this.getBaggage = vg, this.setBaggage = yg, this.deleteBaggage = bg
			}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.setGlobalPropagator = function(t) {
				return ni(ta, t, Nt.instance())
			}, e.prototype.inject = function(t, n, r) {
				return r === void 0 && (r = Jm), this._getGlobalPropagator().inject(t, n, r)
			}, e.prototype.extract = function(t, n, r) {
				return r === void 0 && (r = Qm), this._getGlobalPropagator().extract(t, n, r)
			}, e.prototype.fields = function() {
				return this._getGlobalPropagator().fields()
			}, e.prototype.disable = function() {
				ri(ta, Nt.instance())
			}, e.prototype._getGlobalPropagator = function() {
				return _n(ta) || Eg
			}, e
		}(),
		Xt = qo.getInstance(),
		ft = gg.getInstance(),
		ai = Sg.getInstance(),
		K = Nt.instance(),
		vu = function(e, t) {
			return t === void 0 && (t = ee.None), e ? e.camera && e.microphone ? ee.MicrophoneAndCamera : e.camera ? ee.Camera : e.microphone ? ee.Microphone : ee.None : t
		};

	function Tg(e) {
		return e.replace(/^wss:\/\//, "https://")
	}

	function yu(e) {
		try {
			if (!e) return;
			var t = new URL(e);
			return t.pathname = "", t.search = "", t.toString()
		} catch {
			return
		}
	}
	var ar;
	(function(e) {
		e.Showcards = "showcards", e.Hidecards = "hidecards", e.Feature = "feature", e.Marker = "marker"
	})(ar || (ar = {}));
	var we;
	(function(e) {
		e.dpSpeaking = "dpSpeaking", e.userSpeaking = "userSpeaking", e.dpProcessing = "dpProcessing", e.idle = "idle"
	})(we || (we = {}));
	var Cg = function() {
			function e(t) {
				t === void 0 && (t = new Pt), this.logger = t, this._conversationState = we.idle, this._userActive = !1, this._onConversationStateUpdated = new He
			}
			return e.prototype.processStateMessage = function(t) {
				if (t && t.persona && Object.keys(t.persona).length > 0) {
					var n = Object.keys(t.persona)[0];
					if (!this._userActive && t.persona[n].speechState) {
						var r = t.persona[n].speechState;
						r === Zn.Idle ? this.setSpeechState(we.idle) : r === Zn.Speaking && this.setSpeechState(we.dpSpeaking)
					}
				}
			}, e.prototype.processRecognizeResultsMessage = function(t) {
				this._userActive = !0;
				var n = t.status !== 0,
					r = t.results && t.results.some(function(o) {
						return o.final
					});
				if (n) {
					var i = typeof t.errorMessage < "u" ? t.errorMessage : "recognizeResults sent back a message with non-zero status but no error message.";
					this.logger.log("error", i)
				} else r ? this.setSpeechState(we.dpProcessing) : this.setSpeechState(we.userSpeaking);
				this._userActive = !1
			}, e.prototype.setSpeechState = function(t) {
				this._conversationState !== t && (this._conversationState = t, this._onConversationStateUpdated.call(this._conversationState))
			}, e.prototype.getSpeechState = function() {
				return this._conversationState
			}, Object.defineProperty(e.prototype, "onConversationStateUpdated", {
				get: function() {
					return this._onConversationStateUpdated
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.reset = function() {
				this._userActive = !1, this._conversationState = we.idle, this._onConversationStateUpdated.call(this._conversationState)
			}, e
		}(),
		wg = function() {
			function e() {}
			return e.prototype.format = function(t) {
				var n, r = (n = t.provider.meta.dialogflow) === null || n === void 0 ? void 0 : n.queryResult.fulfillmentMessages,
					i = r == null ? void 0 : r.find(function(o) {
						return Boolean(o == null ? void 0 : o.payload)
					});
				return i ? this.formatLegacyDialogflow(i) : this.formatContextData(t.output.context)
			}, e.prototype.formatLegacyDialogflow = function(t) {
				var n = this,
					r = t.payload.soulmachines;
				return Object.keys(r).map(function(i) {
					return {
						id: i,
						data: lt({
							id: i
						}, n.formatCardData(r[i]))
					}
				})
			}, e.prototype.formatContextData = function(t) {
				var n = this;
				return this.allowedIds(t).map(function(r) {
					var i = r.replace("public-", "");
					return {
						id: i,
						data: lt({
							id: i
						}, n.formatCardData(t[r]))
					}
				})
			}, e.prototype.allowedIds = function(t) {
				return Object.keys(t).filter(function(n) {
					return /public-/.test(n) === !0
				}).filter(function(n) {
					return /\.original/gm.test(n) === !1
				})
			}, e.prototype.formatCardData = function(t) {
				var n = typeof t == "string" ? JSON.parse(t) : t,
					r = n.component,
					i = n.type,
					o = fm(n, ["component", "type"]);
				return lt({
					type: i || r
				}, o)
			}, e
		}(),
		Og = function() {
			function e(t, n, r) {
				t === void 0 && (t = new Pt), n === void 0 && (n = new Cg), r === void 0 && (r = new wg), this.logger = t, this.conversationState = n, this.contentCardFormatter = r, this._onCardChanged = new He, this._autoClearCards = !1, this.cardData = new Map, this.activeCardIds = new Set
			}
			return e.prototype.processStateMessage = function(t) {
				this.conversationState.processStateMessage(t)
			}, e.prototype.processRecognizeResultsMessage = function(t) {
				this.conversationState.processRecognizeResultsMessage(t)
			}, Object.defineProperty(e.prototype, "onConversationStateUpdated", {
				get: function() {
					return this.conversationState.onConversationStateUpdated
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "autoClearCards", {
				set: function(t) {
					this._autoClearCards = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onCardChanged", {
				get: function() {
					return this._onCardChanged
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "activeCards", {
				get: function() {
					var t = this,
						n = [];
					return this.activeCardIds.forEach(function(r) {
						var i = t.cardData.get(r);
						i ? n.push(i) : t.logger.log("error", "card data for ".concat(r, " does not exist"))
					}), n
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.onSpeechMarker = function(t) {
				var n = t.arguments;
				t.name === ar.Showcards ? this.addActiveCardIds(n) : t.name === ar.Hidecards && this.removeActiveCards(n), n.length === 0 && t.name === ar.Hidecards && this.clearActiveCards()
			}, e.prototype.onConversationResult = function(t) {
				var n = this,
					r = this.contentCardFormatter.format(t);
				this._autoClearCards && this.clearActiveCards(), r.map(function(i) {
					var o = i.id,
						a = i.data;
					n.cardData.set(o, a)
				})
			}, e.prototype.reset = function() {
				this.clearActiveCards(), this.cardData.clear(), this.conversationState.reset()
			}, e.prototype.clearActiveCards = function() {
				this.activeCardIds.clear(), this.onCardChanged.call(this.activeCards)
			}, e.prototype.addActiveCardIds = function(t) {
				this.activeCardIds = new Set(Fo(Fo([], Uo(this.activeCardIds), !1), Uo(t), !1)), this.onCardChanged.call(this.activeCards)
			}, e.prototype.removeActiveCards = function(t) {
				var n = this;
				t.forEach(function(r) {
					return n.activeCardIds.delete(r)
				}), this.onCardChanged.call(this.activeCards)
			}, e
		}(),
		Ag = function() {
			function e(t) {
				var n = this;
				this.scene = t, this._previousUrl = window.location.href, this._observer = new MutationObserver(function() {
					return n.observeDocumentChanges()
				})
			}
			return e.prototype.observeUrlChanges = function() {
				this._observer.observe(document, {
					subtree: !0,
					childList: !0
				})
			}, e.prototype.disconnect = function() {
				this._observer.disconnect()
			}, e.prototype.send = function() {
				var t = {
					personaId: this.scene.currentPersonaId,
					text: Bo.PAGE_METADATA,
					variables: {
						pageUrl: window.location.href.split("?")[0]
					},
					optionalArgs: {}
				};
				this.scene.sendRequest("conversationSend", t)
			}, e.prototype.observeDocumentChanges = function() {
				window.location.href !== this._previousUrl && (this._previousUrl = window.location.href, this.send())
			}, e
		}(),
		na = Object.keys(ut).length,
		xg = function() {
			function e() {
				this._connectionState = {
					name: ut.Disconnected,
					totalSteps: na,
					currentStep: 0,
					percentageLoaded: 0
				}, this._onConnectionStateUpdated = new He
			}
			return e.prototype.setConnectionState = function(t) {
				if (this._connectionState.name !== t) {
					var n = Object.keys(ut).indexOf(t),
						r = {
							name: t,
							currentStep: n,
							totalSteps: na,
							percentageLoaded: 100 / (na - 1) * n
						};
					this._connectionState = r, this._onConnectionStateUpdated.call(r)
				}
			}, e.prototype.getConnectionState = function() {
				return this._connectionState
			}, Object.defineProperty(e.prototype, "onConnectionStateUpdated", {
				get: function() {
					return this._onConnectionStateUpdated
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.reset = function() {
				this.setConnectionState(ut.Disconnected)
			}, e
		}(),
		Yt = {
			CLOUD_PROVIDER: "cloud.provider",
			CLOUD_ACCOUNT_ID: "cloud.account.id",
			CLOUD_REGION: "cloud.region",
			CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone",
			CLOUD_PLATFORM: "cloud.platform",
			AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn",
			AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn",
			AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype",
			AWS_ECS_TASK_ARN: "aws.ecs.task.arn",
			AWS_ECS_TASK_FAMILY: "aws.ecs.task.family",
			AWS_ECS_TASK_REVISION: "aws.ecs.task.revision",
			AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn",
			AWS_LOG_GROUP_NAMES: "aws.log.group.names",
			AWS_LOG_GROUP_ARNS: "aws.log.group.arns",
			AWS_LOG_STREAM_NAMES: "aws.log.stream.names",
			AWS_LOG_STREAM_ARNS: "aws.log.stream.arns",
			CONTAINER_NAME: "container.name",
			CONTAINER_ID: "container.id",
			CONTAINER_RUNTIME: "container.runtime",
			CONTAINER_IMAGE_NAME: "container.image.name",
			CONTAINER_IMAGE_TAG: "container.image.tag",
			DEPLOYMENT_ENVIRONMENT: "deployment.environment",
			DEVICE_ID: "device.id",
			DEVICE_MODEL_IDENTIFIER: "device.model.identifier",
			DEVICE_MODEL_NAME: "device.model.name",
			FAAS_NAME: "faas.name",
			FAAS_ID: "faas.id",
			FAAS_VERSION: "faas.version",
			FAAS_INSTANCE: "faas.instance",
			FAAS_MAX_MEMORY: "faas.max_memory",
			HOST_ID: "host.id",
			HOST_NAME: "host.name",
			HOST_TYPE: "host.type",
			HOST_ARCH: "host.arch",
			HOST_IMAGE_NAME: "host.image.name",
			HOST_IMAGE_ID: "host.image.id",
			HOST_IMAGE_VERSION: "host.image.version",
			K8S_CLUSTER_NAME: "k8s.cluster.name",
			K8S_NODE_NAME: "k8s.node.name",
			K8S_NODE_UID: "k8s.node.uid",
			K8S_NAMESPACE_NAME: "k8s.namespace.name",
			K8S_POD_UID: "k8s.pod.uid",
			K8S_POD_NAME: "k8s.pod.name",
			K8S_CONTAINER_NAME: "k8s.container.name",
			K8S_REPLICASET_UID: "k8s.replicaset.uid",
			K8S_REPLICASET_NAME: "k8s.replicaset.name",
			K8S_DEPLOYMENT_UID: "k8s.deployment.uid",
			K8S_DEPLOYMENT_NAME: "k8s.deployment.name",
			K8S_STATEFULSET_UID: "k8s.statefulset.uid",
			K8S_STATEFULSET_NAME: "k8s.statefulset.name",
			K8S_DAEMONSET_UID: "k8s.daemonset.uid",
			K8S_DAEMONSET_NAME: "k8s.daemonset.name",
			K8S_JOB_UID: "k8s.job.uid",
			K8S_JOB_NAME: "k8s.job.name",
			K8S_CRONJOB_UID: "k8s.cronjob.uid",
			K8S_CRONJOB_NAME: "k8s.cronjob.name",
			OS_TYPE: "os.type",
			OS_DESCRIPTION: "os.description",
			OS_NAME: "os.name",
			OS_VERSION: "os.version",
			PROCESS_PID: "process.pid",
			PROCESS_EXECUTABLE_NAME: "process.executable.name",
			PROCESS_EXECUTABLE_PATH: "process.executable.path",
			PROCESS_COMMAND: "process.command",
			PROCESS_COMMAND_LINE: "process.command_line",
			PROCESS_COMMAND_ARGS: "process.command_args",
			PROCESS_OWNER: "process.owner",
			PROCESS_RUNTIME_NAME: "process.runtime.name",
			PROCESS_RUNTIME_VERSION: "process.runtime.version",
			PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description",
			SERVICE_NAME: "service.name",
			SERVICE_NAMESPACE: "service.namespace",
			SERVICE_INSTANCE_ID: "service.instance.id",
			SERVICE_VERSION: "service.version",
			TELEMETRY_SDK_NAME: "telemetry.sdk.name",
			TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language",
			TELEMETRY_SDK_VERSION: "telemetry.sdk.version",
			TELEMETRY_AUTO_VERSION: "telemetry.auto.version",
			WEBENGINE_NAME: "webengine.name",
			WEBENGINE_VERSION: "webengine.version",
			WEBENGINE_DESCRIPTION: "webengine.description"
		},
		Rg = "=",
		bu = ";",
		kg = ",";
	globalThis && globalThis.__read;

	function Ig(e) {
		var t = e.split(bu);
		if (!(t.length <= 0)) {
			var n = t.shift();
			if (!!n) {
				var r = n.split(Rg);
				if (r.length === 2) {
					var i = decodeURIComponent(r[0].trim()),
						o = decodeURIComponent(r[1].trim()),
						a;
					return t.length > 0 && (a = uu(t.join(bu))), {
						key: i,
						value: o,
						metadata: a
					}
				}
			}
		}
	}

	function Eu(e) {
		return typeof e != "string" || e.length === 0 ? {} : e.split(kg).map(function(t) {
			return Ig(t)
		}).filter(function(t) {
			return t !== void 0 && t.value.length > 0
		}).reduce(function(t, n) {
			return t[n.key] = n.value, t
		}, {})
	}
	globalThis && globalThis.__values, globalThis && globalThis.__read;

	function Pg() {
		return function(e) {
			K.error(Ng(e))
		}
	}

	function Ng(e) {
		return typeof e == "string" ? e : JSON.stringify(Mg(e))
	}

	function Mg(e) {
		for (var t = {}, n = e; n !== null;) Object.getOwnPropertyNames(n).forEach(function(r) {
			if (!t[r]) {
				var i = n[r];
				i && (t[r] = String(i))
			}
		}), n = Object.getPrototypeOf(n);
		return t
	}
	var Lg = Pg();

	function Dg(e) {
		try {
			Lg(e)
		} catch {}
	}
	var ra;
	(function(e) {
		e.AlwaysOff = "always_off", e.AlwaysOn = "always_on", e.ParentBasedAlwaysOff = "parentbased_always_off", e.ParentBasedAlwaysOn = "parentbased_always_on", e.ParentBasedTraceIdRatio = "parentbased_traceidratio", e.TraceIdRatio = "traceidratio"
	})(ra || (ra = {}));
	var Ug = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {},
		Fg = ",",
		Bg = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

	function jg(e) {
		return Bg.indexOf(e) > -1
	}
	var Vg = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

	function $g(e) {
		return Vg.indexOf(e) > -1
	}
	var Su = 1 / 0,
		Tu = 128,
		Cu = {
			CONTAINER_NAME: "",
			ECS_CONTAINER_METADATA_URI_V4: "",
			ECS_CONTAINER_METADATA_URI: "",
			HOSTNAME: "",
			KUBERNETES_SERVICE_HOST: "",
			NAMESPACE: "",
			OTEL_BSP_EXPORT_TIMEOUT: 3e4,
			OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
			OTEL_BSP_MAX_QUEUE_SIZE: 2048,
			OTEL_BSP_SCHEDULE_DELAY: 5e3,
			OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
			OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
			OTEL_EXPORTER_JAEGER_ENDPOINT: "",
			OTEL_EXPORTER_JAEGER_PASSWORD: "",
			OTEL_EXPORTER_JAEGER_USER: "",
			OTEL_EXPORTER_OTLP_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_HEADERS: "",
			OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
			OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
			OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
			OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
			OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
			OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
			OTEL_LOG_LEVEL: re.INFO,
			OTEL_NO_PATCH_MODULES: [],
			OTEL_PROPAGATORS: ["tracecontext", "baggage"],
			OTEL_RESOURCE_ATTRIBUTES: "",
			OTEL_SERVICE_NAME: "",
			OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: Su,
			OTEL_ATTRIBUTE_COUNT_LIMIT: Tu,
			OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: Su,
			OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: Tu,
			OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
			OTEL_SPAN_LINK_COUNT_LIMIT: 128,
			OTEL_TRACES_EXPORTER: "none",
			OTEL_TRACES_SAMPLER: ra.ParentBasedAlwaysOn,
			OTEL_TRACES_SAMPLER_ARG: "",
			OTEL_EXPORTER_OTLP_INSECURE: "",
			OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
			OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
			OTEL_EXPORTER_OTLP_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: ""
		};

	function zg(e, t, n, r, i) {
		if (r === void 0 && (r = -1 / 0), i === void 0 && (i = 1 / 0), typeof n[e] < "u") {
			var o = Number(n[e]);
			isNaN(o) || (o < r ? t[e] = r : o > i ? t[e] = i : t[e] = o)
		}
	}

	function Hg(e, t, n, r) {
		r === void 0 && (r = Fg);
		var i = n[e];
		typeof i == "string" && (t[e] = i.split(r).map(function(o) {
			return o.trim()
		}))
	}
	var Gg = {
		ALL: re.ALL,
		VERBOSE: re.VERBOSE,
		DEBUG: re.DEBUG,
		INFO: re.INFO,
		WARN: re.WARN,
		ERROR: re.ERROR,
		NONE: re.NONE
	};

	function Wg(e, t, n) {
		var r = n[e];
		if (typeof r == "string") {
			var i = Gg[r.toUpperCase()];
			i != null && (t[e] = i)
		}
	}

	function qg(e) {
		var t = {};
		for (var n in Cu) {
			var r = n;
			switch (r) {
				case "OTEL_LOG_LEVEL":
					Wg(r, t, e);
					break;
				default:
					if (jg(r)) zg(r, t, e);
					else if ($g(r)) Hg(r, t, e);
					else {
						var i = e[r];
						typeof i < "u" && i !== null && (t[r] = String(i))
					}
			}
		}
		return t
	}

	function Mt() {
		var e = qg(Ug);
		return Object.assign({}, Cu, e)
	}

	function sr(e) {
		for (var t = e.length, n = "", r = 0; r < t; r += 2) {
			var i = e.substring(r, r + 2),
				o = parseInt(i, 16);
			n += String.fromCharCode(o)
		}
		return btoa(n)
	}
	Array(32);
	var ia = performance,
		Kg = "1.7.0",
		si = {
			CLOUD_PROVIDER: "cloud.provider",
			CLOUD_ACCOUNT_ID: "cloud.account.id",
			CLOUD_REGION: "cloud.region",
			CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone",
			CLOUD_PLATFORM: "cloud.platform",
			AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn",
			AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn",
			AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype",
			AWS_ECS_TASK_ARN: "aws.ecs.task.arn",
			AWS_ECS_TASK_FAMILY: "aws.ecs.task.family",
			AWS_ECS_TASK_REVISION: "aws.ecs.task.revision",
			AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn",
			AWS_LOG_GROUP_NAMES: "aws.log.group.names",
			AWS_LOG_GROUP_ARNS: "aws.log.group.arns",
			AWS_LOG_STREAM_NAMES: "aws.log.stream.names",
			AWS_LOG_STREAM_ARNS: "aws.log.stream.arns",
			CONTAINER_NAME: "container.name",
			CONTAINER_ID: "container.id",
			CONTAINER_RUNTIME: "container.runtime",
			CONTAINER_IMAGE_NAME: "container.image.name",
			CONTAINER_IMAGE_TAG: "container.image.tag",
			DEPLOYMENT_ENVIRONMENT: "deployment.environment",
			DEVICE_ID: "device.id",
			DEVICE_MODEL_IDENTIFIER: "device.model.identifier",
			DEVICE_MODEL_NAME: "device.model.name",
			FAAS_NAME: "faas.name",
			FAAS_ID: "faas.id",
			FAAS_VERSION: "faas.version",
			FAAS_INSTANCE: "faas.instance",
			FAAS_MAX_MEMORY: "faas.max_memory",
			HOST_ID: "host.id",
			HOST_NAME: "host.name",
			HOST_TYPE: "host.type",
			HOST_ARCH: "host.arch",
			HOST_IMAGE_NAME: "host.image.name",
			HOST_IMAGE_ID: "host.image.id",
			HOST_IMAGE_VERSION: "host.image.version",
			K8S_CLUSTER_NAME: "k8s.cluster.name",
			K8S_NODE_NAME: "k8s.node.name",
			K8S_NODE_UID: "k8s.node.uid",
			K8S_NAMESPACE_NAME: "k8s.namespace.name",
			K8S_POD_UID: "k8s.pod.uid",
			K8S_POD_NAME: "k8s.pod.name",
			K8S_CONTAINER_NAME: "k8s.container.name",
			K8S_REPLICASET_UID: "k8s.replicaset.uid",
			K8S_REPLICASET_NAME: "k8s.replicaset.name",
			K8S_DEPLOYMENT_UID: "k8s.deployment.uid",
			K8S_DEPLOYMENT_NAME: "k8s.deployment.name",
			K8S_STATEFULSET_UID: "k8s.statefulset.uid",
			K8S_STATEFULSET_NAME: "k8s.statefulset.name",
			K8S_DAEMONSET_UID: "k8s.daemonset.uid",
			K8S_DAEMONSET_NAME: "k8s.daemonset.name",
			K8S_JOB_UID: "k8s.job.uid",
			K8S_JOB_NAME: "k8s.job.name",
			K8S_CRONJOB_UID: "k8s.cronjob.uid",
			K8S_CRONJOB_NAME: "k8s.cronjob.name",
			OS_TYPE: "os.type",
			OS_DESCRIPTION: "os.description",
			OS_NAME: "os.name",
			OS_VERSION: "os.version",
			PROCESS_PID: "process.pid",
			PROCESS_EXECUTABLE_NAME: "process.executable.name",
			PROCESS_EXECUTABLE_PATH: "process.executable.path",
			PROCESS_COMMAND: "process.command",
			PROCESS_COMMAND_LINE: "process.command_line",
			PROCESS_COMMAND_ARGS: "process.command_args",
			PROCESS_OWNER: "process.owner",
			PROCESS_RUNTIME_NAME: "process.runtime.name",
			PROCESS_RUNTIME_VERSION: "process.runtime.version",
			PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description",
			SERVICE_NAME: "service.name",
			SERVICE_NAMESPACE: "service.namespace",
			SERVICE_INSTANCE_ID: "service.instance.id",
			SERVICE_VERSION: "service.version",
			TELEMETRY_SDK_NAME: "telemetry.sdk.name",
			TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language",
			TELEMETRY_SDK_VERSION: "telemetry.sdk.version",
			TELEMETRY_AUTO_VERSION: "telemetry.auto.version",
			WEBENGINE_NAME: "webengine.name",
			WEBENGINE_VERSION: "webengine.version",
			WEBENGINE_DESCRIPTION: "webengine.description"
		},
		Xg = {
			CPP: "cpp",
			DOTNET: "dotnet",
			ERLANG: "erlang",
			GO: "go",
			JAVA: "java",
			NODEJS: "nodejs",
			PHP: "php",
			PYTHON: "python",
			RUBY: "ruby",
			WEBJS: "webjs"
		},
		vn, oa = (vn = {}, vn[si.TELEMETRY_SDK_NAME] = "opentelemetry", vn[si.PROCESS_RUNTIME_NAME] = "browser", vn[si.TELEMETRY_SDK_LANGUAGE] = Xg.WEBJS, vn[si.TELEMETRY_SDK_VERSION] = Kg, vn);

	function wx(e) {}
	var wu = 9,
		li = Math.pow(10, wu);

	function Ou(e) {
		var t = e / 1e3,
			n = Math.trunc(t),
			r = Number((t - n).toFixed(wu)) * li;
		return [n, r]
	}

	function Yg() {
		var e = ia.timeOrigin;
		if (typeof e != "number") {
			var t = ia;
			e = t.timing && t.timing.fetchStart
		}
		return e
	}

	function Au(e) {
		var t = Ou(Yg()),
			n = Ou(typeof e == "number" ? e : ia.now()),
			r = t[0] + n[0],
			i = t[1] + n[1];
		return i > li && (i -= li, r += 1), [r, i]
	}

	function aa(e) {
		return e[0] * li + e[1]
	}

	function ui(e) {
		return Math.round(e[0] * 1e6 + e[1] / 1e3)
	}
	var Qt;
	(function(e) {
		e[e.SUCCESS = 0] = "SUCCESS", e[e.FAILED = 1] = "FAILED"
	})(Qt || (Qt = {})), globalThis && globalThis.__values;
	var xu;
	(function(e) {
		e.HTTP = "http"
	})(xu || (xu = {}));
	var Qg = Function.prototype,
		Jg = Qg.toString;
	Jg.call(Object), globalThis && globalThis.__values;
	var Zg = function() {
			function e() {
				var t = this;
				this._promise = new Promise(function(n, r) {
					t._resolve = n, t._reject = r
				})
			}
			return Object.defineProperty(e.prototype, "promise", {
				get: function() {
					return this._promise
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.resolve = function(t) {
				this._resolve(t)
			}, e.prototype.reject = function(t) {
				this._reject(t)
			}, e
		}(),
		e_ = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		t_ = globalThis && globalThis.__spreadArray || function(e, t, n) {
			if (n || arguments.length === 2)
				for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
			return e.concat(o || Array.prototype.slice.call(t))
		},
		n_ = function() {
			function e(t, n) {
				this._callback = t, this._that = n, this._isCalled = !1, this._deferred = new Zg
			}
			return Object.defineProperty(e.prototype, "isCalled", {
				get: function() {
					return this._isCalled
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "promise", {
				get: function() {
					return this._deferred.promise
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.call = function() {
				for (var t, n = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
				if (!this._isCalled) {
					this._isCalled = !0;
					try {
						Promise.resolve((t = this._callback).call.apply(t, t_([this._that], e_(r), !1))).then(function(o) {
							return n._deferred.resolve(o)
						}, function(o) {
							return n._deferred.reject(o)
						})
					} catch (o) {
						this._deferred.reject(o)
					}
				}
				return this._deferred.promise
			}, e
		}();

	function r_() {
		return "unknown_service"
	}
	globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__awaiter, globalThis && globalThis.__generator;
	var i_ = function() {
			function e(t) {
				this.attributes = t
			}
			return e.empty = function() {
				return e.EMPTY
			}, e.default = function() {
				var t;
				return new e((t = {}, t[Yt.SERVICE_NAME] = r_(), t[Yt.TELEMETRY_SDK_LANGUAGE] = oa[Yt.TELEMETRY_SDK_LANGUAGE], t[Yt.TELEMETRY_SDK_NAME] = oa[Yt.TELEMETRY_SDK_NAME], t[Yt.TELEMETRY_SDK_VERSION] = oa[Yt.TELEMETRY_SDK_VERSION], t))
			}, e.prototype.merge = function(t) {
				if (!t || !Object.keys(t.attributes).length) return this;
				var n = Object.assign({}, this.attributes, t.attributes);
				return new e(n)
			}, e.EMPTY = new e({}), e
		}(),
		Ru = globalThis && globalThis.__assign || function() {
			return Ru = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) {
					t = arguments[n];
					for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
				}
				return e
			}, Ru.apply(this, arguments)
		};
	globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__values, globalThis && globalThis.__read;
	var ku = globalThis && globalThis.__assign || function() {
		return ku = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) {
				t = arguments[n];
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
			}
			return e
		}, ku.apply(this, arguments)
	};
	globalThis && globalThis.__awaiter, globalThis && globalThis.__generator;
	var Jt = {
			AWS_LAMBDA_INVOKED_ARN: "aws.lambda.invoked_arn",
			DB_SYSTEM: "db.system",
			DB_CONNECTION_STRING: "db.connection_string",
			DB_USER: "db.user",
			DB_JDBC_DRIVER_CLASSNAME: "db.jdbc.driver_classname",
			DB_NAME: "db.name",
			DB_STATEMENT: "db.statement",
			DB_OPERATION: "db.operation",
			DB_MSSQL_INSTANCE_NAME: "db.mssql.instance_name",
			DB_CASSANDRA_KEYSPACE: "db.cassandra.keyspace",
			DB_CASSANDRA_PAGE_SIZE: "db.cassandra.page_size",
			DB_CASSANDRA_CONSISTENCY_LEVEL: "db.cassandra.consistency_level",
			DB_CASSANDRA_TABLE: "db.cassandra.table",
			DB_CASSANDRA_IDEMPOTENCE: "db.cassandra.idempotence",
			DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: "db.cassandra.speculative_execution_count",
			DB_CASSANDRA_COORDINATOR_ID: "db.cassandra.coordinator.id",
			DB_CASSANDRA_COORDINATOR_DC: "db.cassandra.coordinator.dc",
			DB_HBASE_NAMESPACE: "db.hbase.namespace",
			DB_REDIS_DATABASE_INDEX: "db.redis.database_index",
			DB_MONGODB_COLLECTION: "db.mongodb.collection",
			DB_SQL_TABLE: "db.sql.table",
			EXCEPTION_TYPE: "exception.type",
			EXCEPTION_MESSAGE: "exception.message",
			EXCEPTION_STACKTRACE: "exception.stacktrace",
			EXCEPTION_ESCAPED: "exception.escaped",
			FAAS_TRIGGER: "faas.trigger",
			FAAS_EXECUTION: "faas.execution",
			FAAS_DOCUMENT_COLLECTION: "faas.document.collection",
			FAAS_DOCUMENT_OPERATION: "faas.document.operation",
			FAAS_DOCUMENT_TIME: "faas.document.time",
			FAAS_DOCUMENT_NAME: "faas.document.name",
			FAAS_TIME: "faas.time",
			FAAS_CRON: "faas.cron",
			FAAS_COLDSTART: "faas.coldstart",
			FAAS_INVOKED_NAME: "faas.invoked_name",
			FAAS_INVOKED_PROVIDER: "faas.invoked_provider",
			FAAS_INVOKED_REGION: "faas.invoked_region",
			NET_TRANSPORT: "net.transport",
			NET_PEER_IP: "net.peer.ip",
			NET_PEER_PORT: "net.peer.port",
			NET_PEER_NAME: "net.peer.name",
			NET_HOST_IP: "net.host.ip",
			NET_HOST_PORT: "net.host.port",
			NET_HOST_NAME: "net.host.name",
			NET_HOST_CONNECTION_TYPE: "net.host.connection.type",
			NET_HOST_CONNECTION_SUBTYPE: "net.host.connection.subtype",
			NET_HOST_CARRIER_NAME: "net.host.carrier.name",
			NET_HOST_CARRIER_MCC: "net.host.carrier.mcc",
			NET_HOST_CARRIER_MNC: "net.host.carrier.mnc",
			NET_HOST_CARRIER_ICC: "net.host.carrier.icc",
			PEER_SERVICE: "peer.service",
			ENDUSER_ID: "enduser.id",
			ENDUSER_ROLE: "enduser.role",
			ENDUSER_SCOPE: "enduser.scope",
			THREAD_ID: "thread.id",
			THREAD_NAME: "thread.name",
			CODE_FUNCTION: "code.function",
			CODE_NAMESPACE: "code.namespace",
			CODE_FILEPATH: "code.filepath",
			CODE_LINENO: "code.lineno",
			HTTP_METHOD: "http.method",
			HTTP_URL: "http.url",
			HTTP_TARGET: "http.target",
			HTTP_HOST: "http.host",
			HTTP_SCHEME: "http.scheme",
			HTTP_STATUS_CODE: "http.status_code",
			HTTP_FLAVOR: "http.flavor",
			HTTP_USER_AGENT: "http.user_agent",
			HTTP_REQUEST_CONTENT_LENGTH: "http.request_content_length",
			HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: "http.request_content_length_uncompressed",
			HTTP_RESPONSE_CONTENT_LENGTH: "http.response_content_length",
			HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: "http.response_content_length_uncompressed",
			HTTP_SERVER_NAME: "http.server_name",
			HTTP_ROUTE: "http.route",
			HTTP_CLIENT_IP: "http.client_ip",
			AWS_DYNAMODB_TABLE_NAMES: "aws.dynamodb.table_names",
			AWS_DYNAMODB_CONSUMED_CAPACITY: "aws.dynamodb.consumed_capacity",
			AWS_DYNAMODB_ITEM_COLLECTION_METRICS: "aws.dynamodb.item_collection_metrics",
			AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: "aws.dynamodb.provisioned_read_capacity",
			AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: "aws.dynamodb.provisioned_write_capacity",
			AWS_DYNAMODB_CONSISTENT_READ: "aws.dynamodb.consistent_read",
			AWS_DYNAMODB_PROJECTION: "aws.dynamodb.projection",
			AWS_DYNAMODB_LIMIT: "aws.dynamodb.limit",
			AWS_DYNAMODB_ATTRIBUTES_TO_GET: "aws.dynamodb.attributes_to_get",
			AWS_DYNAMODB_INDEX_NAME: "aws.dynamodb.index_name",
			AWS_DYNAMODB_SELECT: "aws.dynamodb.select",
			AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: "aws.dynamodb.global_secondary_indexes",
			AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: "aws.dynamodb.local_secondary_indexes",
			AWS_DYNAMODB_EXCLUSIVE_START_TABLE: "aws.dynamodb.exclusive_start_table",
			AWS_DYNAMODB_TABLE_COUNT: "aws.dynamodb.table_count",
			AWS_DYNAMODB_SCAN_FORWARD: "aws.dynamodb.scan_forward",
			AWS_DYNAMODB_SEGMENT: "aws.dynamodb.segment",
			AWS_DYNAMODB_TOTAL_SEGMENTS: "aws.dynamodb.total_segments",
			AWS_DYNAMODB_COUNT: "aws.dynamodb.count",
			AWS_DYNAMODB_SCANNED_COUNT: "aws.dynamodb.scanned_count",
			AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: "aws.dynamodb.attribute_definitions",
			AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: "aws.dynamodb.global_secondary_index_updates",
			MESSAGING_SYSTEM: "messaging.system",
			MESSAGING_DESTINATION: "messaging.destination",
			MESSAGING_DESTINATION_KIND: "messaging.destination_kind",
			MESSAGING_TEMP_DESTINATION: "messaging.temp_destination",
			MESSAGING_PROTOCOL: "messaging.protocol",
			MESSAGING_PROTOCOL_VERSION: "messaging.protocol_version",
			MESSAGING_URL: "messaging.url",
			MESSAGING_MESSAGE_ID: "messaging.message_id",
			MESSAGING_CONVERSATION_ID: "messaging.conversation_id",
			MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: "messaging.message_payload_size_bytes",
			MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: "messaging.message_payload_compressed_size_bytes",
			MESSAGING_OPERATION: "messaging.operation",
			MESSAGING_CONSUMER_ID: "messaging.consumer_id",
			MESSAGING_RABBITMQ_ROUTING_KEY: "messaging.rabbitmq.routing_key",
			MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message_key",
			MESSAGING_KAFKA_CONSUMER_GROUP: "messaging.kafka.consumer_group",
			MESSAGING_KAFKA_CLIENT_ID: "messaging.kafka.client_id",
			MESSAGING_KAFKA_PARTITION: "messaging.kafka.partition",
			MESSAGING_KAFKA_TOMBSTONE: "messaging.kafka.tombstone",
			RPC_SYSTEM: "rpc.system",
			RPC_SERVICE: "rpc.service",
			RPC_METHOD: "rpc.method",
			RPC_GRPC_STATUS_CODE: "rpc.grpc.status_code",
			RPC_JSONRPC_VERSION: "rpc.jsonrpc.version",
			RPC_JSONRPC_REQUEST_ID: "rpc.jsonrpc.request_id",
			RPC_JSONRPC_ERROR_CODE: "rpc.jsonrpc.error_code",
			RPC_JSONRPC_ERROR_MESSAGE: "rpc.jsonrpc.error_message",
			MESSAGE_TYPE: "message.type",
			MESSAGE_ID: "message.id",
			MESSAGE_COMPRESSED_SIZE: "message.compressed_size",
			MESSAGE_UNCOMPRESSED_SIZE: "message.uncompressed_size"
		},
		Ve = {
			CLOUD_PROVIDER: "cloud.provider",
			CLOUD_ACCOUNT_ID: "cloud.account.id",
			CLOUD_REGION: "cloud.region",
			CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone",
			CLOUD_PLATFORM: "cloud.platform",
			AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn",
			AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn",
			AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype",
			AWS_ECS_TASK_ARN: "aws.ecs.task.arn",
			AWS_ECS_TASK_FAMILY: "aws.ecs.task.family",
			AWS_ECS_TASK_REVISION: "aws.ecs.task.revision",
			AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn",
			AWS_LOG_GROUP_NAMES: "aws.log.group.names",
			AWS_LOG_GROUP_ARNS: "aws.log.group.arns",
			AWS_LOG_STREAM_NAMES: "aws.log.stream.names",
			AWS_LOG_STREAM_ARNS: "aws.log.stream.arns",
			CONTAINER_NAME: "container.name",
			CONTAINER_ID: "container.id",
			CONTAINER_RUNTIME: "container.runtime",
			CONTAINER_IMAGE_NAME: "container.image.name",
			CONTAINER_IMAGE_TAG: "container.image.tag",
			DEPLOYMENT_ENVIRONMENT: "deployment.environment",
			DEVICE_ID: "device.id",
			DEVICE_MODEL_IDENTIFIER: "device.model.identifier",
			DEVICE_MODEL_NAME: "device.model.name",
			FAAS_NAME: "faas.name",
			FAAS_ID: "faas.id",
			FAAS_VERSION: "faas.version",
			FAAS_INSTANCE: "faas.instance",
			FAAS_MAX_MEMORY: "faas.max_memory",
			HOST_ID: "host.id",
			HOST_NAME: "host.name",
			HOST_TYPE: "host.type",
			HOST_ARCH: "host.arch",
			HOST_IMAGE_NAME: "host.image.name",
			HOST_IMAGE_ID: "host.image.id",
			HOST_IMAGE_VERSION: "host.image.version",
			K8S_CLUSTER_NAME: "k8s.cluster.name",
			K8S_NODE_NAME: "k8s.node.name",
			K8S_NODE_UID: "k8s.node.uid",
			K8S_NAMESPACE_NAME: "k8s.namespace.name",
			K8S_POD_UID: "k8s.pod.uid",
			K8S_POD_NAME: "k8s.pod.name",
			K8S_CONTAINER_NAME: "k8s.container.name",
			K8S_REPLICASET_UID: "k8s.replicaset.uid",
			K8S_REPLICASET_NAME: "k8s.replicaset.name",
			K8S_DEPLOYMENT_UID: "k8s.deployment.uid",
			K8S_DEPLOYMENT_NAME: "k8s.deployment.name",
			K8S_STATEFULSET_UID: "k8s.statefulset.uid",
			K8S_STATEFULSET_NAME: "k8s.statefulset.name",
			K8S_DAEMONSET_UID: "k8s.daemonset.uid",
			K8S_DAEMONSET_NAME: "k8s.daemonset.name",
			K8S_JOB_UID: "k8s.job.uid",
			K8S_JOB_NAME: "k8s.job.name",
			K8S_CRONJOB_UID: "k8s.cronjob.uid",
			K8S_CRONJOB_NAME: "k8s.cronjob.name",
			OS_TYPE: "os.type",
			OS_DESCRIPTION: "os.description",
			OS_NAME: "os.name",
			OS_VERSION: "os.version",
			PROCESS_PID: "process.pid",
			PROCESS_EXECUTABLE_NAME: "process.executable.name",
			PROCESS_EXECUTABLE_PATH: "process.executable.path",
			PROCESS_COMMAND: "process.command",
			PROCESS_COMMAND_LINE: "process.command_line",
			PROCESS_COMMAND_ARGS: "process.command_args",
			PROCESS_OWNER: "process.owner",
			PROCESS_RUNTIME_NAME: "process.runtime.name",
			PROCESS_RUNTIME_VERSION: "process.runtime.version",
			PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description",
			SERVICE_NAME: "service.name",
			SERVICE_NAMESPACE: "service.namespace",
			SERVICE_INSTANCE_ID: "service.instance.id",
			SERVICE_VERSION: "service.version",
			TELEMETRY_SDK_NAME: "telemetry.sdk.name",
			TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language",
			TELEMETRY_SDK_VERSION: "telemetry.sdk.version",
			TELEMETRY_AUTO_VERSION: "telemetry.auto.version",
			WEBENGINE_NAME: "webengine.name",
			WEBENGINE_VERSION: "webengine.version",
			WEBENGINE_DESCRIPTION: "webengine.description"
		},
		o_ = {
			CPP: "cpp",
			DOTNET: "dotnet",
			ERLANG: "erlang",
			GO: "go",
			JAVA: "java",
			NODEJS: "nodejs",
			PHP: "php",
			PYTHON: "python",
			RUBY: "ruby",
			WEBJS: "webjs"
		},
		Iu = Go("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

	function a_(e) {
		return e.setValue(Iu, !0)
	}

	function sa(e) {
		return e.getValue(Iu) === !0
	}
	var s_ = "=",
		la = ";",
		ua = ",",
		ca = "baggage",
		l_ = 180,
		u_ = 4096,
		c_ = 8192,
		f_ = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		};

	function d_(e) {
		return e.reduce(function(t, n) {
			var r = "" + t + (t !== "" ? ua : "") + n;
			return r.length > c_ ? t : r
		}, "")
	}

	function h_(e) {
		return e.getAllEntries().map(function(t) {
			var n = f_(t, 2),
				r = n[0],
				i = n[1],
				o = encodeURIComponent(r) + "=" + encodeURIComponent(i.value);
			return i.metadata !== void 0 && (o += la + i.metadata.toString()), o
		})
	}

	function p_(e) {
		var t = e.split(la);
		if (!(t.length <= 0)) {
			var n = t.shift();
			if (!!n) {
				var r = n.split(s_);
				if (r.length === 2) {
					var i = decodeURIComponent(r[0].trim()),
						o = decodeURIComponent(r[1].trim()),
						a;
					return t.length > 0 && (a = uu(t.join(la))), {
						key: i,
						value: o,
						metadata: a
					}
				}
			}
		}
	}
	var m_ = function() {
			function e() {}
			return e.prototype.inject = function(t, n, r) {
				var i = ai.getBaggage(t);
				if (!(!i || sa(t))) {
					var o = h_(i).filter(function(l) {
							return l.length <= u_
						}).slice(0, l_),
						a = d_(o);
					a.length > 0 && r.set(n, ca, a)
				}
			}, e.prototype.extract = function(t, n, r) {
				var i = r.get(n, ca),
					o = Array.isArray(i) ? i.join(ua) : i;
				if (!o) return t;
				var a = {};
				if (o.length === 0) return t;
				var l = o.split(ua);
				return l.forEach(function(u) {
					var s = p_(u);
					if (s) {
						var c = {
							value: s.value
						};
						s.metadata && (c.metadata = s.metadata), a[s.key] = c
					}
				}), Object.entries(a).length === 0 ? t : ai.setBaggage(t, ai.createBaggage(a))
			}, e.prototype.fields = function() {
				return [ca]
			}, e
		}(),
		Pu = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		g_ = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		};

	function ci(e) {
		var t, n, r = {};
		if (typeof e != "object" || e == null) return r;
		try {
			for (var i = Pu(Object.entries(e)), o = i.next(); !o.done; o = i.next()) {
				var a = g_(o.value, 2),
					l = a[0],
					u = a[1];
				if (!__(l)) {
					K.warn("Invalid attribute key: " + l);
					continue
				}
				if (!Nu(u)) {
					K.warn("Invalid attribute value set for key: " + l);
					continue
				}
				Array.isArray(u) ? r[l] = u.slice() : r[l] = u
			}
		} catch (s) {
			t = {
				error: s
			}
		} finally {
			try {
				o && !o.done && (n = i.return) && n.call(i)
			} finally {
				if (t) throw t.error
			}
		}
		return r
	}

	function __(e) {
		return typeof e == "string" && e.length > 0
	}

	function Nu(e) {
		return e == null ? !0 : Array.isArray(e) ? v_(e) : Mu(e)
	}

	function v_(e) {
		var t, n, r;
		try {
			for (var i = Pu(e), o = i.next(); !o.done; o = i.next()) {
				var a = o.value;
				if (a != null) {
					if (!r) {
						if (Mu(a)) {
							r = typeof a;
							continue
						}
						return !1
					}
					if (typeof a !== r) return !1
				}
			}
		} catch (l) {
			t = {
				error: l
			}
		} finally {
			try {
				o && !o.done && (n = i.return) && n.call(i)
			} finally {
				if (t) throw t.error
			}
		}
		return !0
	}

	function Mu(e) {
		switch (typeof e) {
			case "number":
			case "boolean":
			case "string":
				return !0
		}
		return !1
	}

	function y_() {
		return function(e) {
			K.error(b_(e))
		}
	}

	function b_(e) {
		return typeof e == "string" ? e : JSON.stringify(E_(e))
	}

	function E_(e) {
		for (var t = {}, n = e; n !== null;) Object.getOwnPropertyNames(n).forEach(function(r) {
			if (!t[r]) {
				var i = n[r];
				i && (t[r] = String(i))
			}
		}), n = Object.getPrototypeOf(n);
		return t
	}
	var S_ = y_();

	function fa(e) {
		try {
			S_(e)
		} catch {}
	}
	var dt;
	(function(e) {
		e.AlwaysOff = "always_off", e.AlwaysOn = "always_on", e.ParentBasedAlwaysOff = "parentbased_always_off", e.ParentBasedAlwaysOn = "parentbased_always_on", e.ParentBasedTraceIdRatio = "parentbased_traceidratio", e.TraceIdRatio = "traceidratio"
	})(dt || (dt = {}));
	var Lu = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {},
		T_ = ",",
		C_ = ["OTEL_SDK_DISABLED"];

	function w_(e) {
		return C_.indexOf(e) > -1
	}
	var O_ = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];

	function A_(e) {
		return O_.indexOf(e) > -1
	}
	var x_ = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"];

	function R_(e) {
		return x_.indexOf(e) > -1
	}
	var da = 1 / 0,
		ha = 128,
		Du = {
			OTEL_SDK_DISABLED: !1,
			CONTAINER_NAME: "",
			ECS_CONTAINER_METADATA_URI_V4: "",
			ECS_CONTAINER_METADATA_URI: "",
			HOSTNAME: "",
			KUBERNETES_SERVICE_HOST: "",
			NAMESPACE: "",
			OTEL_BSP_EXPORT_TIMEOUT: 3e4,
			OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
			OTEL_BSP_MAX_QUEUE_SIZE: 2048,
			OTEL_BSP_SCHEDULE_DELAY: 5e3,
			OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
			OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
			OTEL_EXPORTER_JAEGER_ENDPOINT: "",
			OTEL_EXPORTER_JAEGER_PASSWORD: "",
			OTEL_EXPORTER_JAEGER_USER: "",
			OTEL_EXPORTER_OTLP_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
			OTEL_EXPORTER_OTLP_HEADERS: "",
			OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
			OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
			OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
			OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
			OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
			OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
			OTEL_LOG_LEVEL: re.INFO,
			OTEL_NO_PATCH_MODULES: [],
			OTEL_PROPAGATORS: ["tracecontext", "baggage"],
			OTEL_RESOURCE_ATTRIBUTES: "",
			OTEL_SERVICE_NAME: "",
			OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: da,
			OTEL_ATTRIBUTE_COUNT_LIMIT: ha,
			OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: da,
			OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: ha,
			OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
			OTEL_SPAN_LINK_COUNT_LIMIT: 128,
			OTEL_TRACES_EXPORTER: "",
			OTEL_TRACES_SAMPLER: dt.ParentBasedAlwaysOn,
			OTEL_TRACES_SAMPLER_ARG: "",
			OTEL_EXPORTER_OTLP_INSECURE: "",
			OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
			OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
			OTEL_EXPORTER_OTLP_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
			OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
			OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
			OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
			OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
			OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
			OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
		};

	function k_(e, t, n) {
		if (!(typeof n[e] > "u")) {
			var r = String(n[e]);
			t[e] = r.toLowerCase() === "true"
		}
	}

	function I_(e, t, n, r, i) {
		if (r === void 0 && (r = -1 / 0), i === void 0 && (i = 1 / 0), typeof n[e] < "u") {
			var o = Number(n[e]);
			isNaN(o) || (o < r ? t[e] = r : o > i ? t[e] = i : t[e] = o)
		}
	}

	function P_(e, t, n, r) {
		r === void 0 && (r = T_);
		var i = n[e];
		typeof i == "string" && (t[e] = i.split(r).map(function(o) {
			return o.trim()
		}))
	}
	var N_ = {
		ALL: re.ALL,
		VERBOSE: re.VERBOSE,
		DEBUG: re.DEBUG,
		INFO: re.INFO,
		WARN: re.WARN,
		ERROR: re.ERROR,
		NONE: re.NONE
	};

	function M_(e, t, n) {
		var r = n[e];
		if (typeof r == "string") {
			var i = N_[r.toUpperCase()];
			i != null && (t[e] = i)
		}
	}

	function pa(e) {
		var t = {};
		for (var n in Du) {
			var r = n;
			switch (r) {
				case "OTEL_LOG_LEVEL":
					M_(r, t, e);
					break;
				default:
					if (w_(r)) k_(r, t, e);
					else if (A_(r)) I_(r, t, e);
					else if (R_(r)) P_(r, t, e);
					else {
						var i = e[r];
						typeof i < "u" && i !== null && (t[r] = String(i))
					}
			}
		}
		return t
	}

	function L_() {
		return pa(typeof process < "u" ? process.env : Lu)
	}

	function nt() {
		var e = pa(Lu);
		return Object.assign({}, Du, e)
	}
	var yn = performance,
		D_ = "1.9.0",
		bn, ma = (bn = {}, bn[Ve.TELEMETRY_SDK_NAME] = "opentelemetry", bn[Ve.PROCESS_RUNTIME_NAME] = "browser", bn[Ve.TELEMETRY_SDK_LANGUAGE] = o_.WEBJS, bn[Ve.TELEMETRY_SDK_VERSION] = D_, bn);

	function Ox(e) {}
	var U_ = 9,
		F_ = 6,
		B_ = Math.pow(10, F_),
		ga = Math.pow(10, U_);

	function En(e) {
		var t = e / 1e3,
			n = Math.trunc(t),
			r = Math.round(e % 1e3 * B_);
		return [n, r]
	}

	function Uu() {
		var e = yn.timeOrigin;
		if (typeof e != "number") {
			var t = yn;
			e = t.timing && t.timing.fetchStart
		}
		return e
	}

	function j_(e) {
		var t = En(Uu()),
			n = En(typeof e == "number" ? e : yn.now());
		return ju(t, n)
	}

	function V_(e, t) {
		var n = t[0] - e[0],
			r = t[1] - e[1];
		return r < 0 && (n -= 1, r += ga), [n, r]
	}

	function Fu(e) {
		return Array.isArray(e) && e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number"
	}

	function Bu(e) {
		return Fu(e) || typeof e == "number" || e instanceof Date
	}

	function ju(e, t) {
		var n = [e[0] + t[0], e[1] + t[1]];
		return n[1] >= ga && (n[1] -= ga, n[0] += 1), n
	}
	var _a;
	(function(e) {
		e[e.SUCCESS = 0] = "SUCCESS", e[e.FAILED = 1] = "FAILED"
	})(_a || (_a = {}));
	var $_ = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		z_ = function() {
			function e(t) {
				t === void 0 && (t = {});
				var n;
				this._propagators = (n = t.propagators) !== null && n !== void 0 ? n : [], this._fields = Array.from(new Set(this._propagators.map(function(r) {
					return typeof r.fields == "function" ? r.fields() : []
				}).reduce(function(r, i) {
					return r.concat(i)
				}, [])))
			}
			return e.prototype.inject = function(t, n, r) {
				var i, o;
				try {
					for (var a = $_(this._propagators), l = a.next(); !l.done; l = a.next()) {
						var u = l.value;
						try {
							u.inject(t, n, r)
						} catch (s) {
							K.warn("Failed to inject with " + u.constructor.name + ". Err: " + s.message)
						}
					}
				} catch (s) {
					i = {
						error: s
					}
				} finally {
					try {
						l && !l.done && (o = a.return) && o.call(a)
					} finally {
						if (i) throw i.error
					}
				}
			}, e.prototype.extract = function(t, n, r) {
				return this._propagators.reduce(function(i, o) {
					try {
						return o.extract(i, n, r)
					} catch (a) {
						K.warn("Failed to inject with " + o.constructor.name + ". Err: " + a.message)
					}
					return i
				}, t)
			}, e.prototype.fields = function() {
				return this._fields.slice()
			}, e
		}(),
		va = "[_0-9a-z-*/]",
		H_ = "[a-z]" + va + "{0,255}",
		G_ = "[a-z0-9]" + va + "{0,240}@[a-z]" + va + "{0,13}",
		W_ = new RegExp("^(?:" + H_ + "|" + G_ + ")$"),
		q_ = /^[ -~]{0,255}[!-~]$/,
		K_ = /,|=/;

	function X_(e) {
		return W_.test(e)
	}

	function Y_(e) {
		return q_.test(e) && !K_.test(e)
	}
	var Vu = 32,
		Q_ = 512,
		$u = ",",
		zu = "=",
		J_ = function() {
			function e(t) {
				this._internalState = new Map, t && this._parse(t)
			}
			return e.prototype.set = function(t, n) {
				var r = this._clone();
				return r._internalState.has(t) && r._internalState.delete(t), r._internalState.set(t, n), r
			}, e.prototype.unset = function(t) {
				var n = this._clone();
				return n._internalState.delete(t), n
			}, e.prototype.get = function(t) {
				return this._internalState.get(t)
			}, e.prototype.serialize = function() {
				var t = this;
				return this._keys().reduce(function(n, r) {
					return n.push(r + zu + t.get(r)), n
				}, []).join($u)
			}, e.prototype._parse = function(t) {
				t.length > Q_ || (this._internalState = t.split($u).reverse().reduce(function(n, r) {
					var i = r.trim(),
						o = i.indexOf(zu);
					if (o !== -1) {
						var a = i.slice(0, o),
							l = i.slice(o + 1, r.length);
						X_(a) && Y_(l) && n.set(a, l)
					}
					return n
				}, new Map), this._internalState.size > Vu && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Vu))))
			}, e.prototype._keys = function() {
				return Array.from(this._internalState.keys()).reverse()
			}, e.prototype._clone = function() {
				var t = new e;
				return t._internalState = new Map(this._internalState), t
			}, e
		}(),
		ya = "traceparent",
		ba = "tracestate",
		Z_ = "00",
		ev = "(?!ff)[\\da-f]{2}",
		tv = "(?![0]{32})[\\da-f]{32}",
		nv = "(?![0]{16})[\\da-f]{16}",
		rv = "[\\da-f]{2}",
		iv = new RegExp("^\\s?(" + ev + ")-(" + tv + ")-(" + nv + ")-(" + rv + ")(-.*)?\\s?$");

	function ov(e) {
		var t = iv.exec(e);
		return !t || t[1] === "00" && t[5] ? null : {
			traceId: t[2],
			spanId: t[3],
			traceFlags: parseInt(t[4], 16)
		}
	}
	var av = function() {
			function e() {}
			return e.prototype.inject = function(t, n, r) {
				var i = ft.getSpanContext(t);
				if (!(!i || sa(t) || !ii(i))) {
					var o = Z_ + "-" + i.traceId + "-" + i.spanId + "-0" + Number(i.traceFlags || Ct.NONE).toString(16);
					r.set(n, ya, o), i.traceState && r.set(n, ba, i.traceState.serialize())
				}
			}, e.prototype.extract = function(t, n, r) {
				var i = r.get(n, ya);
				if (!i) return t;
				var o = Array.isArray(i) ? i[0] : i;
				if (typeof o != "string") return t;
				var a = ov(o);
				if (!a) return t;
				a.isRemote = !0;
				var l = r.get(n, ba);
				if (l) {
					var u = Array.isArray(l) ? l.join(",") : l;
					a.traceState = new J_(typeof u == "string" ? u : void 0)
				}
				return ft.setSpanContext(t, a)
			}, e.prototype.fields = function() {
				return [ya, ba]
			}, e
		}(),
		sv = "[object Object]",
		lv = "[object Null]",
		uv = "[object Undefined]",
		cv = Function.prototype,
		Hu = cv.toString,
		fv = Hu.call(Object),
		dv = hv(Object.getPrototypeOf, Object),
		Gu = Object.prototype,
		Wu = Gu.hasOwnProperty,
		Zt = Symbol ? Symbol.toStringTag : void 0,
		qu = Gu.toString;

	function hv(e, t) {
		return function(n) {
			return e(t(n))
		}
	}

	function Ku(e) {
		if (!pv(e) || mv(e) !== sv) return !1;
		var t = dv(e);
		if (t === null) return !0;
		var n = Wu.call(t, "constructor") && t.constructor;
		return typeof n == "function" && n instanceof n && Hu.call(n) === fv
	}

	function pv(e) {
		return e != null && typeof e == "object"
	}

	function mv(e) {
		return e == null ? e === void 0 ? uv : lv : Zt && Zt in Object(e) ? gv(e) : _v(e)
	}

	function gv(e) {
		var t = Wu.call(e, Zt),
			n = e[Zt],
			r = !1;
		try {
			e[Zt] = void 0, r = !0
		} catch {}
		var i = qu.call(e);
		return r && (t ? e[Zt] = n : delete e[Zt]), i
	}

	function _v(e) {
		return qu.call(e)
	}
	var vv = 20;

	function yv() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var n = e.shift(), r = new WeakMap; e.length > 0;) n = Xu(n, e.shift(), 0, r);
		return n
	}

	function Ea(e) {
		return fi(e) ? e.slice() : e
	}

	function Xu(e, t, n, r) {
		n === void 0 && (n = 0);
		var i;
		if (!(n > vv)) {
			if (n++, di(e) || di(t) || Qu(t)) i = Ea(t);
			else if (fi(e)) {
				if (i = e.slice(), fi(t))
					for (var o = 0, a = t.length; o < a; o++) i.push(Ea(t[o]));
				else if (lr(t))
					for (var l = Object.keys(t), o = 0, a = l.length; o < a; o++) {
						var u = l[o];
						i[u] = Ea(t[u])
					}
			} else if (lr(e))
				if (lr(t)) {
					if (!bv(e, t)) return t;
					i = Object.assign({}, e);
					for (var l = Object.keys(t), o = 0, a = l.length; o < a; o++) {
						var u = l[o],
							s = t[u];
						if (di(s)) typeof s > "u" ? delete i[u] : i[u] = s;
						else {
							var c = i[u],
								f = s;
							if (Yu(e, u, r) || Yu(t, u, r)) delete i[u];
							else {
								if (lr(c) && lr(f)) {
									var p = r.get(c) || [],
										h = r.get(f) || [];
									p.push({
										obj: e,
										key: u
									}), h.push({
										obj: t,
										key: u
									}), r.set(c, p), r.set(f, h)
								}
								i[u] = Xu(i[u], s, n, r)
							}
						}
					}
				} else i = t;
			return i
		}
	}

	function Yu(e, t, n) {
		for (var r = n.get(e[t]) || [], i = 0, o = r.length; i < o; i++) {
			var a = r[i];
			if (a.key === t && a.obj === e) return !0
		}
		return !1
	}

	function fi(e) {
		return Array.isArray(e)
	}

	function Qu(e) {
		return typeof e == "function"
	}

	function lr(e) {
		return !di(e) && !fi(e) && !Qu(e) && typeof e == "object"
	}

	function di(e) {
		return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e > "u" || e instanceof Date || e instanceof RegExp || e === null
	}

	function bv(e, t) {
		return !(!Ku(e) || !Ku(t))
	}
	var Ev = function() {
			function e() {
				var t = this;
				this._promise = new Promise(function(n, r) {
					t._resolve = n, t._reject = r
				})
			}
			return Object.defineProperty(e.prototype, "promise", {
				get: function() {
					return this._promise
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.resolve = function(t) {
				this._resolve(t)
			}, e.prototype.reject = function(t) {
				this._reject(t)
			}, e
		}(),
		Sv = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		Tv = globalThis && globalThis.__spreadArray || function(e, t, n) {
			if (n || arguments.length === 2)
				for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
			return e.concat(o || Array.prototype.slice.call(t))
		},
		Cv = function() {
			function e(t, n) {
				this._callback = t, this._that = n, this._isCalled = !1, this._deferred = new Ev
			}
			return Object.defineProperty(e.prototype, "isCalled", {
				get: function() {
					return this._isCalled
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "promise", {
				get: function() {
					return this._deferred.promise
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.call = function() {
				for (var t, n = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
				if (!this._isCalled) {
					this._isCalled = !0;
					try {
						Promise.resolve((t = this._callback).call.apply(t, Tv([this._that], Sv(r), !1))).then(function(o) {
							return n._deferred.resolve(o)
						}, function(o) {
							return n._deferred.reject(o)
						})
					} catch (o) {
						this._deferred.reject(o)
					}
				}
				return this._deferred.promise
			}, e
		}(),
		wv = "exception",
		Ov = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		Av = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		xv = function() {
			function e(t, n, r, i, o, a, l, u, s) {
				l === void 0 && (l = []), this.attributes = {}, this.links = [], this.events = [], this.status = {
					code: Jo.UNSET
				}, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = r, this._spanContext = i, this.parentSpanId = a, this.kind = o, this.links = l;
				var c = Date.now();
				this._performanceStartTime = yn.now(), this._performanceOffset = c - (this._performanceStartTime + Uu()), this._startTimeProvided = u != null, this.startTime = this._getTime(u != null ? u : c), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, n), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0
			}
			return e.prototype.spanContext = function() {
				return this._spanContext
			}, e.prototype.setAttribute = function(t, n) {
				return n == null || this._isSpanEnded() ? this : t.length === 0 ? (K.warn("Invalid attribute key: " + t), this) : Nu(n) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? this : (this.attributes[t] = this._truncateToSize(n), this) : (K.warn("Invalid attribute value set for key: " + t), this)
			}, e.prototype.setAttributes = function(t) {
				var n, r;
				try {
					for (var i = Ov(Object.entries(t)), o = i.next(); !o.done; o = i.next()) {
						var a = Av(o.value, 2),
							l = a[0],
							u = a[1];
						this.setAttribute(l, u)
					}
				} catch (s) {
					n = {
						error: s
					}
				} finally {
					try {
						o && !o.done && (r = i.return) && r.call(i)
					} finally {
						if (n) throw n.error
					}
				}
				return this
			}, e.prototype.addEvent = function(t, n, r) {
				if (this._isSpanEnded()) return this;
				if (this._spanLimits.eventCountLimit === 0) return K.warn("No events allowed."), this;
				this.events.length >= this._spanLimits.eventCountLimit && (K.warn("Dropping extra events."), this.events.shift()), Bu(n) && (Bu(r) || (r = n), n = void 0);
				var i = ci(n);
				return this.events.push({
					name: t,
					attributes: i,
					time: this._getTime(r)
				}), this
			}, e.prototype.setStatus = function(t) {
				return this._isSpanEnded() ? this : (this.status = t, this)
			}, e.prototype.updateName = function(t) {
				return this._isSpanEnded() ? this : (this.name = t, this)
			}, e.prototype.end = function(t) {
				if (this._isSpanEnded()) {
					K.error("You can only call end() on a span once.");
					return
				}
				this._ended = !0, this.endTime = this._getTime(t), this._duration = V_(this.startTime, this.endTime), this._duration[0] < 0 && (K.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._spanProcessor.onEnd(this)
			}, e.prototype._getTime = function(t) {
				if (typeof t == "number" && t < yn.now()) return j_(t + this._performanceOffset);
				if (typeof t == "number") return En(t);
				if (t instanceof Date) return En(t.getTime());
				if (Fu(t)) return t;
				if (this._startTimeProvided) return En(Date.now());
				var n = yn.now() - this._performanceStartTime;
				return ju(this.startTime, En(n))
			}, e.prototype.isRecording = function() {
				return this._ended === !1
			}, e.prototype.recordException = function(t, n) {
				var r = {};
				typeof t == "string" ? r[Jt.EXCEPTION_MESSAGE] = t : t && (t.code ? r[Jt.EXCEPTION_TYPE] = t.code.toString() : t.name && (r[Jt.EXCEPTION_TYPE] = t.name), t.message && (r[Jt.EXCEPTION_MESSAGE] = t.message), t.stack && (r[Jt.EXCEPTION_STACKTRACE] = t.stack)), r[Jt.EXCEPTION_TYPE] || r[Jt.EXCEPTION_MESSAGE] ? this.addEvent(wv, r, n) : K.warn("Failed to record an exception " + t)
			}, Object.defineProperty(e.prototype, "duration", {
				get: function() {
					return this._duration
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "ended", {
				get: function() {
					return this._ended
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype._isSpanEnded = function() {
				return this._ended && K.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
			}, e.prototype._truncateToLimitUtil = function(t, n) {
				return t.length <= n ? t : t.substr(0, n)
			}, e.prototype._truncateToSize = function(t) {
				var n = this,
					r = this._attributeValueLengthLimit;
				return r <= 0 ? (K.warn("Attribute value limit must be positive, got " + r), t) : typeof t == "string" ? this._truncateToLimitUtil(t, r) : Array.isArray(t) ? t.map(function(i) {
					return typeof i == "string" ? n._truncateToLimitUtil(i, r) : i
				}) : t
			}, e
		}(),
		Sn;
	(function(e) {
		e[e.NOT_RECORD = 0] = "NOT_RECORD", e[e.RECORD = 1] = "RECORD", e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
	})(Sn || (Sn = {}));
	var hi = function() {
			function e() {}
			return e.prototype.shouldSample = function() {
				return {
					decision: Sn.NOT_RECORD
				}
			}, e.prototype.toString = function() {
				return "AlwaysOffSampler"
			}, e
		}(),
		Tn = function() {
			function e() {}
			return e.prototype.shouldSample = function() {
				return {
					decision: Sn.RECORD_AND_SAMPLED
				}
			}, e.prototype.toString = function() {
				return "AlwaysOnSampler"
			}, e
		}(),
		Sa = function() {
			function e(t) {
				var n, r, i, o;
				this._root = t.root, this._root || (fa(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Tn), this._remoteParentSampled = (n = t.remoteParentSampled) !== null && n !== void 0 ? n : new Tn, this._remoteParentNotSampled = (r = t.remoteParentNotSampled) !== null && r !== void 0 ? r : new hi, this._localParentSampled = (i = t.localParentSampled) !== null && i !== void 0 ? i : new Tn, this._localParentNotSampled = (o = t.localParentNotSampled) !== null && o !== void 0 ? o : new hi
			}
			return e.prototype.shouldSample = function(t, n, r, i, o, a) {
				var l = ft.getSpanContext(t);
				return !l || !ii(l) ? this._root.shouldSample(t, n, r, i, o, a) : l.isRemote ? l.traceFlags & Ct.SAMPLED ? this._remoteParentSampled.shouldSample(t, n, r, i, o, a) : this._remoteParentNotSampled.shouldSample(t, n, r, i, o, a) : l.traceFlags & Ct.SAMPLED ? this._localParentSampled.shouldSample(t, n, r, i, o, a) : this._localParentNotSampled.shouldSample(t, n, r, i, o, a)
			}, e.prototype.toString = function() {
				return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
			}, e
		}(),
		Ju = function() {
			function e(t) {
				t === void 0 && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(this._ratio * 4294967295)
			}
			return e.prototype.shouldSample = function(t, n) {
				return {
					decision: pu(n) && this._accumulate(n) < this._upperBound ? Sn.RECORD_AND_SAMPLED : Sn.NOT_RECORD
				}
			}, e.prototype.toString = function() {
				return "TraceIdRatioBased{" + this._ratio + "}"
			}, e.prototype._normalize = function(t) {
				return typeof t != "number" || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
			}, e.prototype._accumulate = function(t) {
				for (var n = 0, r = 0; r < t.length / 8; r++) {
					var i = r * 8,
						o = parseInt(t.slice(i, i + 8), 16);
					n = (n ^ o) >>> 0
				}
				return n
			}, e
		}(),
		Rv = nt(),
		kv = dt.AlwaysOn,
		Cn = 1;

	function Zu() {
		return {
			sampler: ec(Rv),
			forceFlushTimeoutMillis: 3e4,
			generalLimits: {
				attributeValueLengthLimit: nt().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
				attributeCountLimit: nt().OTEL_ATTRIBUTE_COUNT_LIMIT
			},
			spanLimits: {
				attributeValueLengthLimit: nt().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
				attributeCountLimit: nt().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
				linkCountLimit: nt().OTEL_SPAN_LINK_COUNT_LIMIT,
				eventCountLimit: nt().OTEL_SPAN_EVENT_COUNT_LIMIT
			}
		}
	}

	function ec(e) {
		switch (e === void 0 && (e = nt()), e.OTEL_TRACES_SAMPLER) {
			case dt.AlwaysOn:
				return new Tn;
			case dt.AlwaysOff:
				return new hi;
			case dt.ParentBasedAlwaysOn:
				return new Sa({
					root: new Tn
				});
			case dt.ParentBasedAlwaysOff:
				return new Sa({
					root: new hi
				});
			case dt.TraceIdRatio:
				return new Ju(tc(e));
			case dt.ParentBasedTraceIdRatio:
				return new Sa({
					root: new Ju(tc(e))
				});
			default:
				return K.error('OTEL_TRACES_SAMPLER value "' + e.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + kv + '".'), new Tn
		}
	}

	function tc(e) {
		if (e.OTEL_TRACES_SAMPLER_ARG === void 0 || e.OTEL_TRACES_SAMPLER_ARG === "") return K.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + Cn + "."), Cn;
		var t = Number(e.OTEL_TRACES_SAMPLER_ARG);
		return isNaN(t) ? (K.error("OTEL_TRACES_SAMPLER_ARG=" + e.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + Cn + "."), Cn) : t < 0 || t > 1 ? (K.error("OTEL_TRACES_SAMPLER_ARG=" + e.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + Cn + "."), Cn) : t
	}

	function Iv(e) {
		var t = {
				sampler: ec()
			},
			n = Zu(),
			r = Object.assign({}, n, t, e);
		return r.generalLimits = Object.assign({}, n.generalLimits, e.generalLimits || {}), r.spanLimits = Object.assign({}, n.spanLimits, e.spanLimits || {}), r
	}

	function Pv(e) {
		var t, n, r, i, o, a, l, u, s, c, f, p, h = Object.assign({}, e.spanLimits),
			d = L_();
		return h.attributeCountLimit = (a = (o = (i = (n = (t = e.spanLimits) === null || t === void 0 ? void 0 : t.attributeCountLimit) !== null && n !== void 0 ? n : (r = e.generalLimits) === null || r === void 0 ? void 0 : r.attributeCountLimit) !== null && i !== void 0 ? i : d.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && o !== void 0 ? o : d.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && a !== void 0 ? a : ha, h.attributeValueLengthLimit = (p = (f = (c = (u = (l = e.spanLimits) === null || l === void 0 ? void 0 : l.attributeValueLengthLimit) !== null && u !== void 0 ? u : (s = e.generalLimits) === null || s === void 0 ? void 0 : s.attributeValueLengthLimit) !== null && c !== void 0 ? c : d.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && f !== void 0 ? f : d.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && p !== void 0 ? p : da, Object.assign({}, e, {
			spanLimits: h
		})
	}
	var Nv = function() {
			function e(t, n) {
				this._exporter = t, this._finishedSpans = [];
				var r = nt();
				this._maxExportBatchSize = typeof(n == null ? void 0 : n.maxExportBatchSize) == "number" ? n.maxExportBatchSize : r.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = typeof(n == null ? void 0 : n.maxQueueSize) == "number" ? n.maxQueueSize : r.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = typeof(n == null ? void 0 : n.scheduledDelayMillis) == "number" ? n.scheduledDelayMillis : r.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = typeof(n == null ? void 0 : n.exportTimeoutMillis) == "number" ? n.exportTimeoutMillis : r.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new Cv(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (K.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
			}
			return e.prototype.forceFlush = function() {
				return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
			}, e.prototype.onStart = function(t, n) {}, e.prototype.onEnd = function(t) {
				this._shutdownOnce.isCalled || (t.spanContext().traceFlags & Ct.SAMPLED) !== 0 && this._addToBuffer(t)
			}, e.prototype.shutdown = function() {
				return this._shutdownOnce.call()
			}, e.prototype._shutdown = function() {
				var t = this;
				return Promise.resolve().then(function() {
					return t.onShutdown()
				}).then(function() {
					return t._flushAll()
				}).then(function() {
					return t._exporter.shutdown()
				})
			}, e.prototype._addToBuffer = function(t) {
				this._finishedSpans.length >= this._maxQueueSize || (this._finishedSpans.push(t), this._maybeStartTimer())
			}, e.prototype._flushAll = function() {
				var t = this;
				return new Promise(function(n, r) {
					for (var i = [], o = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize), a = 0, l = o; a < l; a++) i.push(t._flushOneBatch());
					Promise.all(i).then(function() {
						n()
					}).catch(r)
				})
			}, e.prototype._flushOneBatch = function() {
				var t = this;
				return this._clearTimer(), this._finishedSpans.length === 0 ? Promise.resolve() : new Promise(function(n, r) {
					var i = setTimeout(function() {
						r(new Error("Timeout"))
					}, t._exportTimeoutMillis);
					Xt.with(a_(Xt.active()), function() {
						t._exporter.export(t._finishedSpans.splice(0, t._maxExportBatchSize), function(o) {
							var a;
							clearTimeout(i), o.code === _a.SUCCESS ? n() : r((a = o.error) !== null && a !== void 0 ? a : new Error("BatchSpanProcessor: span export failed"))
						})
					})
				})
			}, e.prototype._maybeStartTimer = function() {
				var t = this;
				this._timer === void 0 && (this._timer = setTimeout(function() {
					t._flushOneBatch().then(function() {
						t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer())
					}).catch(function(n) {
						fa(n)
					})
				}, this._scheduledDelayMillis), this._timer, void 0)
			}, e.prototype._clearTimer = function() {
				this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0)
			}, e
		}(),
		Mv = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		nc = function(e) {
			Mv(t, e);

			function t(n, r) {
				var i = e.call(this, n, r) || this;
				return i.onInit(r), i
			}
			return t.prototype.onInit = function(n) {
				var r = this;
				(n == null ? void 0 : n.disableAutoFlushOnDocumentHide) !== !0 && typeof document < "u" && (this._visibilityChangeListener = function() {
					document.visibilityState === "hidden" && r.forceFlush()
				}, this._pageHideListener = function() {
					r.forceFlush()
				}, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
			}, t.prototype.onShutdown = function() {
				typeof document < "u" && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
			}, t
		}(Nv),
		Lv = 8,
		Dv = 16,
		Uv = function() {
			function e() {
				this.generateTraceId = rc(Dv), this.generateSpanId = rc(Lv)
			}
			return e
		}(),
		pi = Array(32);

	function rc(e) {
		return function() {
			for (var n = 0; n < e * 2; n++) pi[n] = Math.floor(Math.random() * 16) + 48, pi[n] >= 58 && (pi[n] += 39);
			return String.fromCharCode.apply(null, pi.slice(0, e * 2))
		}
	}
	var Fv = function() {
		function e(t, n, r) {
			this._tracerProvider = r;
			var i = Iv(n);
			this._sampler = i.sampler, this._generalLimits = i.generalLimits, this._spanLimits = i.spanLimits, this._idGenerator = n.idGenerator || new Uv, this.resource = r.resource, this.instrumentationLibrary = t
		}
		return e.prototype.startSpan = function(t, n, r) {
			var i, o;
			n === void 0 && (n = {}), r === void 0 && (r = Xt.active()), n.root && (r = ft.deleteSpan(r));
			var a = ft.getSpan(r);
			if (sa(r)) {
				K.debug("Instrumentation suppressed, returning Noop Span");
				var l = ft.wrapSpanContext(du);
				return l
			}
			var u = a == null ? void 0 : a.spanContext(),
				s = this._idGenerator.generateSpanId(),
				c, f, p;
			!u || !ft.isSpanContextValid(u) ? c = this._idGenerator.generateTraceId() : (c = u.traceId, f = u.traceState, p = u.spanId);
			var h = (i = n.kind) !== null && i !== void 0 ? i : Qo.INTERNAL,
				d = ((o = n.links) !== null && o !== void 0 ? o : []).map(function(O) {
					return {
						context: O.context,
						attributes: ci(O.attributes)
					}
				}),
				m = ci(n.attributes),
				_ = this._sampler.shouldSample(r, c, t, h, m, d),
				g = _.decision === oi.RECORD_AND_SAMPLED ? Ct.SAMPLED : Ct.NONE,
				S = {
					traceId: c,
					spanId: s,
					traceFlags: g,
					traceState: f
				};
			if (_.decision === oi.NOT_RECORD) {
				K.debug("Recording is off, propagating context in a non-recording span");
				var l = ft.wrapSpanContext(S);
				return l
			}
			var E = new xv(this, r, t, S, h, p, d, n.startTime),
				w = ci(Object.assign(m, _.attributes));
			return E.setAttributes(w), E
		}, e.prototype.startActiveSpan = function(t, n, r, i) {
			var o, a, l;
			if (!(arguments.length < 2)) {
				arguments.length === 2 ? l = n : arguments.length === 3 ? (o = n, l = r) : (o = n, a = r, l = i);
				var u = a != null ? a : Xt.active(),
					s = this.startSpan(t, o, u),
					c = ft.setSpan(u, s);
				return Xt.with(c, l, void 0, s)
			}
		}, e.prototype.getGeneralLimits = function() {
			return this._generalLimits
		}, e.prototype.getSpanLimits = function() {
			return this._spanLimits
		}, e.prototype.getActiveSpanProcessor = function() {
			return this._tracerProvider.getActiveSpanProcessor()
		}, e
	}();

	function Bv() {
		return "unknown_service"
	}
	var ic = function() {
			function e(t) {
				this.attributes = t
			}
			return e.empty = function() {
				return e.EMPTY
			}, e.default = function() {
				var t;
				return new e((t = {}, t[Ve.SERVICE_NAME] = Bv(), t[Ve.TELEMETRY_SDK_LANGUAGE] = ma[Ve.TELEMETRY_SDK_LANGUAGE], t[Ve.TELEMETRY_SDK_NAME] = ma[Ve.TELEMETRY_SDK_NAME], t[Ve.TELEMETRY_SDK_VERSION] = ma[Ve.TELEMETRY_SDK_VERSION], t))
			}, e.prototype.merge = function(t) {
				if (!t || !Object.keys(t.attributes).length) return this;
				var n = Object.assign({}, this.attributes, t.attributes);
				return new e(n)
			}, e.EMPTY = new e({}), e
		}(),
		mi = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		jv = function() {
			function e(t) {
				this._spanProcessors = t
			}
			return e.prototype.forceFlush = function() {
				var t, n, r = [];
				try {
					for (var i = mi(this._spanProcessors), o = i.next(); !o.done; o = i.next()) {
						var a = o.value;
						r.push(a.forceFlush())
					}
				} catch (l) {
					t = {
						error: l
					}
				} finally {
					try {
						o && !o.done && (n = i.return) && n.call(i)
					} finally {
						if (t) throw t.error
					}
				}
				return new Promise(function(l) {
					Promise.all(r).then(function() {
						l()
					}).catch(function(u) {
						fa(u || new Error("MultiSpanProcessor: forceFlush failed")), l()
					})
				})
			}, e.prototype.onStart = function(t, n) {
				var r, i;
				try {
					for (var o = mi(this._spanProcessors), a = o.next(); !a.done; a = o.next()) {
						var l = a.value;
						l.onStart(t, n)
					}
				} catch (u) {
					r = {
						error: u
					}
				} finally {
					try {
						a && !a.done && (i = o.return) && i.call(o)
					} finally {
						if (r) throw r.error
					}
				}
			}, e.prototype.onEnd = function(t) {
				var n, r;
				try {
					for (var i = mi(this._spanProcessors), o = i.next(); !o.done; o = i.next()) {
						var a = o.value;
						a.onEnd(t)
					}
				} catch (l) {
					n = {
						error: l
					}
				} finally {
					try {
						o && !o.done && (r = i.return) && r.call(i)
					} finally {
						if (n) throw n.error
					}
				}
			}, e.prototype.shutdown = function() {
				var t, n, r = [];
				try {
					for (var i = mi(this._spanProcessors), o = i.next(); !o.done; o = i.next()) {
						var a = o.value;
						r.push(a.shutdown())
					}
				} catch (l) {
					t = {
						error: l
					}
				} finally {
					try {
						o && !o.done && (n = i.return) && n.call(i)
					} finally {
						if (t) throw t.error
					}
				}
				return new Promise(function(l, u) {
					Promise.all(r).then(function() {
						l()
					}, u)
				})
			}, e
		}(),
		Vv = function() {
			function e() {}
			return e.prototype.onStart = function(t, n) {}, e.prototype.onEnd = function(t) {}, e.prototype.shutdown = function() {
				return Promise.resolve()
			}, e.prototype.forceFlush = function() {
				return Promise.resolve()
			}, e
		}(),
		en;
	(function(e) {
		e[e.resolved = 0] = "resolved", e[e.timeout = 1] = "timeout", e[e.error = 2] = "error", e[e.unresolved = 3] = "unresolved"
	})(en || (en = {}));
	var $v = function() {
			function e(t) {
				t === void 0 && (t = {});
				var n;
				this._registeredSpanProcessors = [], this._tracers = new Map;
				var r = yv({}, Zu(), Pv(t));
				this.resource = (n = r.resource) !== null && n !== void 0 ? n : ic.empty(), this.resource = ic.default().merge(this.resource), this._config = Object.assign({}, r, {
					resource: this.resource
				});
				var i = this._buildExporterFromEnv();
				if (i !== void 0) {
					var o = new nc(i);
					this.activeSpanProcessor = o
				} else this.activeSpanProcessor = new Vv
			}
			return e.prototype.getTracer = function(t, n, r) {
				var i = t + "@" + (n || "") + ":" + ((r == null ? void 0 : r.schemaUrl) || "");
				return this._tracers.has(i) || this._tracers.set(i, new Fv({
					name: t,
					version: n,
					schemaUrl: r == null ? void 0 : r.schemaUrl
				}, this._config, this)), this._tracers.get(i)
			}, e.prototype.addSpanProcessor = function(t) {
				this._registeredSpanProcessors.length === 0 && this.activeSpanProcessor.shutdown().catch(function(n) {
					return K.error("Error while trying to shutdown current span processor", n)
				}), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new jv(this._registeredSpanProcessors)
			}, e.prototype.getActiveSpanProcessor = function() {
				return this.activeSpanProcessor
			}, e.prototype.register = function(t) {
				t === void 0 && (t = {}), ft.setGlobalTracerProvider(this), t.propagator === void 0 && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && Xt.setGlobalContextManager(t.contextManager), t.propagator && ai.setGlobalPropagator(t.propagator)
			}, e.prototype.forceFlush = function() {
				var t = this._config.forceFlushTimeoutMillis,
					n = this._registeredSpanProcessors.map(function(r) {
						return new Promise(function(i) {
							var o, a = setTimeout(function() {
								i(new Error("Span processor did not completed within timeout period of " + t + " ms")), o = en.timeout
							}, t);
							r.forceFlush().then(function() {
								clearTimeout(a), o !== en.timeout && (o = en.resolved, i(o))
							}).catch(function(l) {
								clearTimeout(a), o = en.error, i(l)
							})
						})
					});
				return new Promise(function(r, i) {
					Promise.all(n).then(function(o) {
						var a = o.filter(function(l) {
							return l !== en.resolved
						});
						a.length > 0 ? i(a) : r()
					}).catch(function(o) {
						return i([o])
					})
				})
			}, e.prototype.shutdown = function() {
				return this.activeSpanProcessor.shutdown()
			}, e.prototype._getPropagator = function(t) {
				var n;
				return (n = this.constructor._registeredPropagators.get(t)) === null || n === void 0 ? void 0 : n()
			}, e.prototype._getSpanExporter = function(t) {
				var n;
				return (n = this.constructor._registeredExporters.get(t)) === null || n === void 0 ? void 0 : n()
			}, e.prototype._buildPropagatorFromEnv = function() {
				var t = this,
					n = Array.from(new Set(nt().OTEL_PROPAGATORS)),
					r = n.map(function(o) {
						var a = t._getPropagator(o);
						return a || K.warn('Propagator "' + o + '" requested through environment variable is unavailable.'), a
					}),
					i = r.reduce(function(o, a) {
						return a && o.push(a), o
					}, []);
				if (i.length !== 0) return n.length === 1 ? i[0] : new z_({
					propagators: i
				})
			}, e.prototype._buildExporterFromEnv = function() {
				var t = nt().OTEL_TRACES_EXPORTER;
				if (!(t === "none" || t === "")) {
					var n = this._getSpanExporter(t);
					return n || K.error('Exporter "' + t + '" requested through environment variable is unavailable.'), n
				}
			}, e._registeredPropagators = new Map([
				["tracecontext", function() {
					return new av
				}],
				["baggage", function() {
					return new m_
				}]
			]), e._registeredExporters = new Map, e
		}(),
		zv = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		Hv = globalThis && globalThis.__spreadArray || function(e, t, n) {
			if (n || arguments.length === 2)
				for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
			return e.concat(o || Array.prototype.slice.call(t))
		},
		Gv = function() {
			function e() {
				this._enabled = !1, this._currentContext = Kt
			}
			return e.prototype._bindFunction = function(t, n) {
				t === void 0 && (t = Kt);
				var r = this,
					i = function() {
						for (var o = this, a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
						return r.with(t, function() {
							return n.apply(o, a)
						})
					};
				return Object.defineProperty(i, "length", {
					enumerable: !1,
					configurable: !0,
					writable: !1,
					value: n.length
				}), i
			}, e.prototype.active = function() {
				return this._currentContext
			}, e.prototype.bind = function(t, n) {
				return t === void 0 && (t = this.active()), typeof n == "function" ? this._bindFunction(t, n) : n
			}, e.prototype.disable = function() {
				return this._currentContext = Kt, this._enabled = !1, this
			}, e.prototype.enable = function() {
				return this._enabled ? this : (this._enabled = !0, this._currentContext = Kt, this)
			}, e.prototype.with = function(t, n, r) {
				for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
				var a = this._currentContext;
				this._currentContext = t || Kt;
				try {
					return n.call.apply(n, Hv([r], zv(i), !1))
				} finally {
					this._currentContext = a
				}
			}, e
		}(),
		Wv = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		qv = function(e) {
			Wv(t, e);

			function t(n) {
				n === void 0 && (n = {});
				var r = e.call(this, n) || this;
				if (n.contextManager) throw "contextManager should be defined in register method not in constructor";
				if (n.propagator) throw "propagator should be defined in register method not in constructor";
				return r
			}
			return t.prototype.register = function(n) {
				n === void 0 && (n = {}), n.contextManager === void 0 && (n.contextManager = new Gv), n.contextManager && n.contextManager.enable(), e.prototype.register.call(this, n)
			}, t
		}($v),
		Kv = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		oc = 1e4;

	function Xv(e) {
		e === void 0 && (e = {});
		var t = {};
		return Object.entries(e).forEach(function(n) {
			var r = Kv(n, 2),
				i = r[0],
				o = r[1];
			typeof o < "u" ? t[i] = String(o) : K.warn('Header "' + i + '" has wrong value and will be ignored')
		}), t
	}

	function Yv(e, t) {
		return e.endsWith("/") || (e = e + "/"), e + t
	}

	function Qv(e, t) {
		return !e.includes(t) && !e.endsWith("/") && (e = e + "/"), e
	}

	function Jv(e) {
		return typeof e == "number" ? e <= 0 ? ac(e, oc) : e : Zv()
	}

	function Zv() {
		var e, t = Number((e = Mt().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) !== null && e !== void 0 ? e : Mt().OTEL_EXPORTER_OTLP_TIMEOUT);
		return t <= 0 ? ac(t, oc) : t
	}

	function ac(e, t) {
		return K.warn("Timeout must be greater than 0", e), t
	}
	var ey = function() {
			function e(t) {
				t === void 0 && (t = {}), this._sendingPromises = [], this.url = this.getDefaultUrl(t), typeof t.hostname == "string" && (this.hostname = t.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new n_(this._shutdown, this), this._concurrencyLimit = typeof t.concurrencyLimit == "number" ? t.concurrencyLimit : 1 / 0, this.timeoutMillis = Jv(t.timeoutMillis), this.onInit(t)
			}
			return e.prototype.export = function(t, n) {
				if (this._shutdownOnce.isCalled) {
					n({
						code: Qt.FAILED,
						error: new Error("Exporter has been shutdown")
					});
					return
				}
				if (this._sendingPromises.length >= this._concurrencyLimit) {
					n({
						code: Qt.FAILED,
						error: new Error("Concurrent export limit reached")
					});
					return
				}
				this._export(t).then(function() {
					n({
						code: Qt.SUCCESS
					})
				}).catch(function(r) {
					n({
						code: Qt.FAILED,
						error: r
					})
				})
			}, e.prototype._export = function(t) {
				var n = this;
				return new Promise(function(r, i) {
					try {
						K.debug("items to be sent", t), n.send(t, r, i)
					} catch (o) {
						i(o)
					}
				})
			}, e.prototype.shutdown = function() {
				return this._shutdownOnce.call()
			}, e.prototype._shutdown = function() {
				return K.debug("shutdown started"), this.onShutdown(), Promise.all(this._sendingPromises).then(function() {})
			}, e
		}(),
		ty = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		Ta = function(e) {
			ty(t, e);

			function t(n, r, i) {
				var o = e.call(this, n) || this;
				return o.name = "OTLPExporterError", o.data = i, o.code = r, o
			}
			return t
		}(Error),
		gi = globalThis && globalThis.__assign || function() {
			return gi = Object.assign || function(e) {
				for (var t, n = 1, r = arguments.length; n < r; n++) {
					t = arguments[n];
					for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
				}
				return e
			}, gi.apply(this, arguments)
		},
		ny = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		};

	function ry(e, t, n, r, i) {
		if (navigator.sendBeacon(t, new Blob([e], n))) K.debug("sendBeacon - can send", e), r();
		else {
			var o = new Ta("sendBeacon - cannot send " + e);
			i(o)
		}
	}

	function iy(e, t, n, r, i, o) {
		var a, l = setTimeout(function() {
				a = !0, u.abort()
			}, r),
			u = new XMLHttpRequest;
		u.open("POST", t);
		var s = {
			Accept: "application/json",
			"Content-Type": "application/json"
		};
		Object.entries(gi(gi({}, s), n)).forEach(function(c) {
			var f = ny(c, 2),
				p = f[0],
				h = f[1];
			u.setRequestHeader(p, h)
		}), u.send(e), u.onreadystatechange = function() {
			if (u.readyState === XMLHttpRequest.DONE)
				if (u.status >= 200 && u.status <= 299) clearTimeout(l), K.debug("xhr success", e), i();
				else if (a) {
				var c = new Ta("Request Timeout", u.status);
				o(c)
			} else {
				var c = new Ta("Failed to export with XHR (status: " + u.status + ")", u.status);
				clearTimeout(l), o(c)
			}
		}
	}
	var oy = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		ay = function(e) {
			oy(t, e);

			function t(n) {
				n === void 0 && (n = {});
				var r = e.call(this, n) || this;
				return r._useXHR = !1, r._useXHR = !!n.headers || typeof navigator.sendBeacon != "function", r._useXHR ? r._headers = Object.assign({}, Xv(n.headers), Eu(Mt().OTEL_EXPORTER_OTLP_HEADERS)) : r._headers = {}, r
			}
			return t.prototype.onInit = function() {
				window.addEventListener("unload", this.shutdown)
			}, t.prototype.onShutdown = function() {
				window.removeEventListener("unload", this.shutdown)
			}, t.prototype.send = function(n, r, i) {
				var o = this;
				if (this._shutdownOnce.isCalled) {
					K.debug("Shutdown already started. Cannot send objects");
					return
				}
				var a = this.convert(n),
					l = JSON.stringify(a),
					u = new Promise(function(c, f) {
						o._useXHR ? iy(l, o.url, o._headers, o.timeoutMillis, c, f) : ry(l, o.url, {
							type: "application/json"
						}, c, f)
					}).then(r, i);
				this._sendingPromises.push(u);
				var s = function() {
					var c = o._sendingPromises.indexOf(u);
					o._sendingPromises.splice(c, 1)
				};
				u.then(s, s)
			}, t
		}(ey),
		sc;
	(function(e) {
		e[e.SPAN_KIND_UNSPECIFIED = 0] = "SPAN_KIND_UNSPECIFIED", e[e.SPAN_KIND_INTERNAL = 1] = "SPAN_KIND_INTERNAL", e[e.SPAN_KIND_SERVER = 2] = "SPAN_KIND_SERVER", e[e.SPAN_KIND_CLIENT = 3] = "SPAN_KIND_CLIENT", e[e.SPAN_KIND_PRODUCER = 4] = "SPAN_KIND_PRODUCER", e[e.SPAN_KIND_CONSUMER = 5] = "SPAN_KIND_CONSUMER"
	})(sc || (sc = {}));
	var sy = globalThis && globalThis.__read || function(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i, o = [],
			a;
		try {
			for (;
				(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
		} catch (l) {
			a = {
				error: l
			}
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r)
			} finally {
				if (a) throw a.error
			}
		}
		return o
	};

	function _i(e) {
		return Object.keys(e).map(function(t) {
			return lc(t, e[t])
		})
	}

	function lc(e, t) {
		return {
			key: e,
			value: uc(t)
		}
	}

	function uc(e) {
		var t = typeof e;
		return t === "string" ? {
			stringValue: e
		} : t === "number" ? Number.isInteger(e) ? {
			intValue: e
		} : {
			doubleValue: e
		} : t === "boolean" ? {
			boolValue: e
		} : e instanceof Uint8Array ? {
			bytesValue: e
		} : Array.isArray(e) ? {
			arrayValue: {
				values: e.map(uc)
			}
		} : t === "object" && e != null ? {
			kvlistValue: {
				values: Object.entries(e).map(function(n) {
					var r = sy(n, 2),
						i = r[0],
						o = r[1];
					return lc(i, o)
				})
			}
		} : {}
	}

	function ly(e, t) {
		var n = e.spanContext(),
			r = e.status,
			i = t ? e.parentSpanId : e.parentSpanId != null ? sr(e.parentSpanId) : void 0;
		return {
			traceId: t ? n.traceId : sr(n.traceId),
			spanId: t ? n.spanId : sr(n.spanId),
			parentSpanId: i,
			name: e.name,
			kind: e.kind == null ? 0 : e.kind + 1,
			startTimeUnixNano: aa(e.startTime),
			endTimeUnixNano: aa(e.endTime),
			attributes: _i(e.attributes),
			droppedAttributesCount: 0,
			events: e.events.map(cy),
			droppedEventsCount: 0,
			status: {
				code: r.code,
				message: r.message
			},
			links: e.links.map(function(o) {
				return uy(o, t)
			}),
			droppedLinksCount: 0
		}
	}

	function uy(e, t) {
		return {
			attributes: e.attributes ? _i(e.attributes) : [],
			spanId: t ? e.context.spanId : sr(e.context.spanId),
			traceId: t ? e.context.traceId : sr(e.context.traceId),
			droppedAttributesCount: 0
		}
	}

	function cy(e) {
		return {
			attributes: e.attributes ? _i(e.attributes) : [],
			name: e.name,
			timeUnixNano: aa(e.time),
			droppedAttributesCount: 0
		}
	}
	var fy = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		dy = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		};

	function hy(e, t) {
		return {
			resourceSpans: my(e, t)
		}
	}

	function py(e) {
		var t, n, r = new Map;
		try {
			for (var i = fy(e), o = i.next(); !o.done; o = i.next()) {
				var a = o.value,
					l = r.get(a.resource);
				l || (l = new Map, r.set(a.resource, l));
				var u = a.instrumentationLibrary.name + "@" + (a.instrumentationLibrary.version || "") + ":" + (a.instrumentationLibrary.schemaUrl || ""),
					s = l.get(u);
				s || (s = [], l.set(u, s)), s.push(a)
			}
		} catch (c) {
			t = {
				error: c
			}
		} finally {
			try {
				o && !o.done && (n = i.return) && n.call(i)
			} finally {
				if (t) throw t.error
			}
		}
		return r
	}

	function my(e, t) {
		for (var n = py(e), r = [], i = n.entries(), o = i.next(); !o.done;) {
			for (var a = dy(o.value, 2), l = a[0], u = a[1], s = [], c = u.values(), f = c.next(); !f.done;) {
				var p = f.value;
				if (p.length > 0) {
					var h = p[0].instrumentationLibrary,
						d = h.name,
						m = h.version,
						_ = h.schemaUrl,
						g = p.map(function(E) {
							return ly(E, t)
						});
					s.push({
						scope: {
							name: d,
							version: m
						},
						spans: g,
						schemaUrl: _
					})
				}
				f = c.next()
			}
			var S = {
				resource: {
					attributes: _i(l.attributes),
					droppedAttributesCount: 0
				},
				scopeSpans: s,
				schemaUrl: void 0
			};
			r.push(S), o = i.next()
		}
		return r
	}
	var wn = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		gy = function() {
			function e() {}
			return e.prototype.createHistogram = function(t, n) {
				return wy
			}, e.prototype.createCounter = function(t, n) {
				return Cy
			}, e.prototype.createUpDownCounter = function(t, n) {
				return Oy
			}, e.prototype.createObservableGauge = function(t, n) {
				return xy
			}, e.prototype.createObservableCounter = function(t, n) {
				return Ay
			}, e.prototype.createObservableUpDownCounter = function(t, n) {
				return Ry
			}, e.prototype.addBatchObservableCallback = function(t, n) {}, e.prototype.removeBatchObservableCallback = function(t) {}, e
		}(),
		Ca = function() {
			function e() {}
			return e
		}(),
		_y = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.add = function(n, r) {}, t
		}(Ca),
		vy = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.add = function(n, r) {}, t
		}(Ca),
		yy = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.record = function(n, r) {}, t
		}(Ca),
		wa = function() {
			function e() {}
			return e.prototype.addCallback = function(t) {}, e.prototype.removeCallback = function(t) {}, e
		}(),
		by = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t
		}(wa),
		Ey = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t
		}(wa),
		Sy = function(e) {
			wn(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t
		}(wa),
		Ty = new gy,
		Cy = new _y,
		wy = new yy,
		Oy = new vy,
		Ay = new by,
		xy = new Ey,
		Ry = new Sy,
		vi;
	(function(e) {
		e[e.INT = 0] = "INT", e[e.DOUBLE = 1] = "DOUBLE"
	})(vi || (vi = {}));
	var ky = function() {
			function e() {}
			return e.prototype.getMeter = function(t, n, r) {
				return Ty
			}, e
		}(),
		cc = new ky,
		Iy = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {},
		yi = Symbol.for("io.opentelemetry.js.api.metrics"),
		ur = Iy;

	function Py(e, t, n) {
		return function(r) {
			return r === e ? t : n
		}
	}
	var fc = 4,
		Ny = function() {
			function e() {}
			return e.getInstance = function() {
				return this._instance || (this._instance = new e), this._instance
			}, e.prototype.setGlobalMeterProvider = function(t) {
				return ur[yi] ? this.getMeterProvider() : (ur[yi] = Py(fc, t, cc), t)
			}, e.prototype.getMeterProvider = function() {
				var t, n;
				return (n = (t = ur[yi]) === null || t === void 0 ? void 0 : t.call(ur, fc)) !== null && n !== void 0 ? n : cc
			}, e.prototype.getMeter = function(t, n, r) {
				return this.getMeterProvider().getMeter(t, n, r)
			}, e.prototype.disable = function() {
				delete ur[yi]
			}, e
		}();
	Ny.getInstance();
	var bi;
	(function(e) {
		e[e.DELTA = 0] = "DELTA", e[e.CUMULATIVE = 1] = "CUMULATIVE"
	})(bi || (bi = {}));
	var cr;
	(function(e) {
		e[e.HISTOGRAM = 0] = "HISTOGRAM", e[e.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", e[e.GAUGE = 2] = "GAUGE", e[e.SUM = 3] = "SUM"
	})(cr || (cr = {}));
	var My = globalThis && globalThis.__extends || function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(r, i) {
				r.__proto__ = i
			} || function(r, i) {
				for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
			}, e(t, n)
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);

			function r() {
				this.constructor = t
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
		}
	}();
	globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__read, globalThis && globalThis.__spreadArray, globalThis && globalThis.__values;

	function Ly(e) {
		var t = Object.keys(e);
		return t.length === 0 ? "" : (t = t.sort(), JSON.stringify(t.map(function(n) {
			return [n, e[n]]
		})))
	}
	var dc = function(e) {
		My(t, e);

		function t(n) {
			var r = e.call(this, n) || this;
			return Object.setPrototypeOf(r, t.prototype), r
		}
		return t
	}(Error);

	function Oa(e, t) {
		var n, r = new Promise(function(o, a) {
			n = setTimeout(function() {
				a(new dc("Operation timed out."))
			}, t)
		});
		return Promise.race([e, r]).then(function(i) {
			return clearTimeout(n), i
		}, function(i) {
			throw clearTimeout(n), i
		})
	}
	var On;
	(function(e) {
		e[e.DROP = 0] = "DROP", e[e.SUM = 1] = "SUM", e[e.LAST_VALUE = 2] = "LAST_VALUE", e[e.HISTOGRAM = 3] = "HISTOGRAM"
	})(On || (On = {}));
	var Dy = function() {
			function e() {
				this.kind = On.DROP
			}
			return e.prototype.createAccumulation = function() {}, e.prototype.merge = function(t, n) {}, e.prototype.diff = function(t, n) {}, e.prototype.toMetricData = function(t, n, r, i) {}, e
		}(),
		Ne;
	(function(e) {
		e.COUNTER = "COUNTER", e.HISTOGRAM = "HISTOGRAM", e.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", e.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", e.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", e.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
	})(Ne || (Ne = {}));

	function Uy(e, t, n) {
		var r, i, o;
		return {
			name: e,
			type: t,
			description: (r = n == null ? void 0 : n.description) !== null && r !== void 0 ? r : "",
			unit: (i = n == null ? void 0 : n.unit) !== null && i !== void 0 ? i : "",
			valueType: (o = n == null ? void 0 : n.valueType) !== null && o !== void 0 ? o : vi.DOUBLE
		}
	}
	var Fy = globalThis && globalThis.__read || function(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i, o = [],
			a;
		try {
			for (;
				(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
		} catch (l) {
			a = {
				error: l
			}
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r)
			} finally {
				if (a) throw a.error
			}
		}
		return o
	};

	function By(e) {
		var t = e.map(function() {
			return 0
		});
		return t.push(0), {
			buckets: {
				boundaries: e,
				counts: t
			},
			sum: 0,
			count: 0,
			hasMinMax: !1,
			min: 1 / 0,
			max: -1 / 0
		}
	}
	var Aa = function() {
			function e(t, n, r, i) {
				r === void 0 && (r = !0), i === void 0 && (i = By(n)), this.startTime = t, this._boundaries = n, this._recordMinMax = r, this._current = i
			}
			return e.prototype.record = function(t) {
				this._current.count += 1, this._current.sum += t, this._recordMinMax && (this._current.min = Math.min(t, this._current.min), this._current.max = Math.max(t, this._current.max), this._current.hasMinMax = !0);
				for (var n = 0; n < this._boundaries.length; n++)
					if (t < this._boundaries[n]) {
						this._current.buckets.counts[n] += 1;
						return
					} this._current.buckets.counts[this._boundaries.length] += 1
			}, e.prototype.setStartTime = function(t) {
				this.startTime = t
			}, e.prototype.toPointValue = function() {
				return this._current
			}, e
		}(),
		hc = function() {
			function e(t, n) {
				this._boundaries = t, this._recordMinMax = n, this.kind = On.HISTOGRAM
			}
			return e.prototype.createAccumulation = function(t) {
				return new Aa(t, this._boundaries, this._recordMinMax)
			}, e.prototype.merge = function(t, n) {
				for (var r = t.toPointValue(), i = n.toPointValue(), o = r.buckets.counts, a = i.buckets.counts, l = new Array(o.length), u = 0; u < o.length; u++) l[u] = o[u] + a[u];
				var s = 1 / 0,
					c = -1 / 0;
				return this._recordMinMax && (r.hasMinMax && i.hasMinMax ? (s = Math.min(r.min, i.min), c = Math.max(r.max, i.max)) : r.hasMinMax ? (s = r.min, c = r.max) : i.hasMinMax && (s = i.min, c = i.max)), new Aa(t.startTime, r.buckets.boundaries, this._recordMinMax, {
					buckets: {
						boundaries: r.buckets.boundaries,
						counts: l
					},
					count: r.count + i.count,
					sum: r.sum + i.sum,
					hasMinMax: this._recordMinMax && (r.hasMinMax || i.hasMinMax),
					min: s,
					max: c
				})
			}, e.prototype.diff = function(t, n) {
				for (var r = t.toPointValue(), i = n.toPointValue(), o = r.buckets.counts, a = i.buckets.counts, l = new Array(o.length), u = 0; u < o.length; u++) l[u] = a[u] - o[u];
				return new Aa(n.startTime, r.buckets.boundaries, this._recordMinMax, {
					buckets: {
						boundaries: r.buckets.boundaries,
						counts: l
					},
					count: i.count - r.count,
					sum: i.sum - r.sum,
					hasMinMax: !1,
					min: 1 / 0,
					max: -1 / 0
				})
			}, e.prototype.toMetricData = function(t, n, r, i) {
				return {
					descriptor: t,
					aggregationTemporality: n,
					dataPointType: cr.HISTOGRAM,
					dataPoints: r.map(function(o) {
						var a = Fy(o, 2),
							l = a[0],
							u = a[1],
							s = u.toPointValue(),
							c = t.type === Ne.UP_DOWN_COUNTER || t.type === Ne.OBSERVABLE_GAUGE || t.type === Ne.OBSERVABLE_UP_DOWN_COUNTER;
						return {
							attributes: l,
							startTime: u.startTime,
							endTime: i,
							value: {
								min: s.hasMinMax ? s.min : void 0,
								max: s.hasMinMax ? s.max : void 0,
								sum: c ? void 0 : s.sum,
								buckets: s.buckets,
								count: s.count
							}
						}
					})
				}
			}, e
		}(),
		jy = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		xa = function() {
			function e(t, n, r) {
				n === void 0 && (n = 0), r === void 0 && (r = [0, 0]), this.startTime = t, this._current = n, this.sampleTime = r
			}
			return e.prototype.record = function(t) {
				this._current = t, this.sampleTime = Au()
			}, e.prototype.setStartTime = function(t) {
				this.startTime = t
			}, e.prototype.toPointValue = function() {
				return this._current
			}, e
		}(),
		Vy = function() {
			function e() {
				this.kind = On.LAST_VALUE
			}
			return e.prototype.createAccumulation = function(t) {
				return new xa(t)
			}, e.prototype.merge = function(t, n) {
				var r = ui(n.sampleTime) >= ui(t.sampleTime) ? n : t;
				return new xa(t.startTime, r.toPointValue(), r.sampleTime)
			}, e.prototype.diff = function(t, n) {
				var r = ui(n.sampleTime) >= ui(t.sampleTime) ? n : t;
				return new xa(n.startTime, r.toPointValue(), r.sampleTime)
			}, e.prototype.toMetricData = function(t, n, r, i) {
				return {
					descriptor: t,
					aggregationTemporality: n,
					dataPointType: cr.GAUGE,
					dataPoints: r.map(function(o) {
						var a = jy(o, 2),
							l = a[0],
							u = a[1];
						return {
							attributes: l,
							startTime: u.startTime,
							endTime: i,
							value: u.toPointValue()
						}
					})
				}
			}, e
		}(),
		$y = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		fr = function() {
			function e(t, n, r, i) {
				r === void 0 && (r = 0), i === void 0 && (i = !1), this.startTime = t, this.monotonic = n, this._current = r, this.reset = i
			}
			return e.prototype.record = function(t) {
				this.monotonic && t < 0 || (this._current += t)
			}, e.prototype.setStartTime = function(t) {
				this.startTime = t
			}, e.prototype.toPointValue = function() {
				return this._current
			}, e
		}(),
		pc = function() {
			function e(t) {
				this.monotonic = t, this.kind = On.SUM
			}
			return e.prototype.createAccumulation = function(t) {
				return new fr(t, this.monotonic)
			}, e.prototype.merge = function(t, n) {
				var r = t.toPointValue(),
					i = n.toPointValue();
				return n.reset ? new fr(n.startTime, this.monotonic, i, n.reset) : new fr(t.startTime, this.monotonic, r + i)
			}, e.prototype.diff = function(t, n) {
				var r = t.toPointValue(),
					i = n.toPointValue();
				return this.monotonic && r > i ? new fr(n.startTime, this.monotonic, i, !0) : new fr(n.startTime, this.monotonic, i - r)
			}, e.prototype.toMetricData = function(t, n, r, i) {
				return {
					descriptor: t,
					aggregationTemporality: n,
					dataPointType: cr.SUM,
					dataPoints: r.map(function(o) {
						var a = $y(o, 2),
							l = a[0],
							u = a[1];
						return {
							attributes: l,
							startTime: u.startTime,
							endTime: i,
							value: u.toPointValue()
						}
					}),
					isMonotonic: this.monotonic
				}
			}, e
		}(),
		An = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		tn = function() {
			function e() {}
			return e.Drop = function() {
				return mc
			}, e.Sum = function() {
				return gc
			}, e.LastValue = function() {
				return _c
			}, e.Histogram = function() {
				return vc
			}, e.Default = function() {
				return Ky
			}, e
		}(),
		zy = function(e) {
			An(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.createAggregator = function(n) {
				return t.DEFAULT_INSTANCE
			}, t.DEFAULT_INSTANCE = new Dy, t
		}(tn),
		Hy = function(e) {
			An(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.createAggregator = function(n) {
				switch (n.type) {
					case Ne.COUNTER:
					case Ne.OBSERVABLE_COUNTER:
					case Ne.HISTOGRAM:
						return t.MONOTONIC_INSTANCE;
					default:
						return t.NON_MONOTONIC_INSTANCE
				}
			}, t.MONOTONIC_INSTANCE = new pc(!0), t.NON_MONOTONIC_INSTANCE = new pc(!1), t
		}(tn),
		Gy = function(e) {
			An(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.createAggregator = function(n) {
				return t.DEFAULT_INSTANCE
			}, t.DEFAULT_INSTANCE = new Vy, t
		}(tn),
		Wy = function(e) {
			An(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.createAggregator = function(n) {
				return t.DEFAULT_INSTANCE
			}, t.DEFAULT_INSTANCE = new hc([0, 5, 10, 25, 50, 75, 100, 250, 500, 1e3], !0), t
		}(tn);
	(function(e) {
		An(t, e);

		function t(n, r) {
			r === void 0 && (r = !0);
			var i = e.call(this) || this;
			if (i._recordMinMax = r, n === void 0 || n.length === 0) throw new Error("HistogramAggregator should be created with boundaries.");
			n = n.concat(), n = n.sort(function(l, u) {
				return l - u
			});
			var o = n.lastIndexOf(-1 / 0),
				a = n.indexOf(1 / 0);
			return a === -1 && (a = void 0), i._boundaries = n.slice(o + 1, a), i
		}
		return t.prototype.createAggregator = function(n) {
			return new hc(this._boundaries, this._recordMinMax)
		}, t
	})(tn);
	var qy = function(e) {
			An(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype._resolve = function(n) {
				switch (n.type) {
					case Ne.COUNTER:
					case Ne.UP_DOWN_COUNTER:
					case Ne.OBSERVABLE_COUNTER:
					case Ne.OBSERVABLE_UP_DOWN_COUNTER:
						return gc;
					case Ne.OBSERVABLE_GAUGE:
						return _c;
					case Ne.HISTOGRAM:
						return vc
				}
				return K.warn("Unable to recognize instrument type: " + n.type), mc
			}, t.prototype.createAggregator = function(n) {
				return this._resolve(n).createAggregator(n)
			}, t
		}(tn),
		mc = new zy,
		gc = new Hy,
		_c = new Gy,
		vc = new Wy,
		Ky = new qy,
		Xy = function(e) {
			return tn.Default()
		},
		Yy = function(e) {
			return bi.CUMULATIVE
		},
		Ra = globalThis && globalThis.__awaiter || function(e, t, n, r) {
			function i(o) {
				return o instanceof n ? o : new n(function(a) {
					a(o)
				})
			}
			return new(n || (n = Promise))(function(o, a) {
				function l(c) {
					try {
						s(r.next(c))
					} catch (f) {
						a(f)
					}
				}

				function u(c) {
					try {
						s(r.throw(c))
					} catch (f) {
						a(f)
					}
				}

				function s(c) {
					c.done ? o(c.value) : i(c.value).then(l, u)
				}
				s((r = r.apply(e, t || [])).next())
			})
		},
		ka = globalThis && globalThis.__generator || function(e, t) {
			var n = {
					label: 0,
					sent: function() {
						if (o[0] & 1) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				},
				r, i, o, a;
			return a = {
				next: l(0),
				throw: l(1),
				return: l(2)
			}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function l(s) {
				return function(c) {
					return u([s, c])
				}
			}

			function u(s) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
					switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
						case 0:
						case 1:
							o = s;
							break;
						case 4:
							return n.label++, {
								value: s[1],
								done: !1
							};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue
							}
							if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
								n.label = s[1];
								break
							}
							if (s[0] === 6 && n.label < o[1]) {
								n.label = o[1], o = s;
								break
							}
							if (o && n.label < o[2]) {
								n.label = o[2], n.ops.push(s);
								break
							}
							o[2] && n.ops.pop(), n.trys.pop();
							continue
					}
					s = t.call(e, n)
				} catch (c) {
					s = [6, c], i = 0
				} finally {
					r = o = 0
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				}
			}
		},
		Qy = function() {
			function e(t) {
				var n, r;
				this._shutdown = !1, this._aggregationSelector = (n = t == null ? void 0 : t.aggregationSelector) !== null && n !== void 0 ? n : Xy, this._aggregationTemporalitySelector = (r = t == null ? void 0 : t.aggregationTemporalitySelector) !== null && r !== void 0 ? r : Yy
			}
			return e.prototype.setMetricProducer = function(t) {
				if (this._metricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
				this._metricProducer = t, this.onInitialized()
			}, e.prototype.selectAggregation = function(t) {
				return this._aggregationSelector(t)
			}, e.prototype.selectAggregationTemporality = function(t) {
				return this._aggregationTemporalitySelector(t)
			}, e.prototype.onInitialized = function() {}, e.prototype.collect = function(t) {
				return Ra(this, void 0, void 0, function() {
					return ka(this, function(n) {
						if (this._metricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
						if (this._shutdown) throw new Error("MetricReader is shutdown");
						return [2, this._metricProducer.collect({
							timeoutMillis: t == null ? void 0 : t.timeoutMillis
						})]
					})
				})
			}, e.prototype.shutdown = function(t) {
				return Ra(this, void 0, void 0, function() {
					return ka(this, function(n) {
						switch (n.label) {
							case 0:
								return this._shutdown ? (K.error("Cannot call shutdown twice."), [2]) : (t == null ? void 0 : t.timeoutMillis) != null ? [3, 2] : [4, this.onShutdown()];
							case 1:
								return n.sent(), [3, 4];
							case 2:
								return [4, Oa(this.onShutdown(), t.timeoutMillis)];
							case 3:
								n.sent(), n.label = 4;
							case 4:
								return this._shutdown = !0, [2]
						}
					})
				})
			}, e.prototype.forceFlush = function(t) {
				return Ra(this, void 0, void 0, function() {
					return ka(this, function(n) {
						switch (n.label) {
							case 0:
								return this._shutdown ? (K.warn("Cannot forceFlush on already shutdown MetricReader."), [2]) : (t == null ? void 0 : t.timeoutMillis) != null ? [3, 2] : [4, this.onForceFlush()];
							case 1:
								return n.sent(), [2];
							case 2:
								return [4, Oa(this.onForceFlush(), t.timeoutMillis)];
							case 3:
								return n.sent(), [2]
						}
					})
				})
			}, e
		}(),
		Jy = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		Ei = globalThis && globalThis.__awaiter || function(e, t, n, r) {
			function i(o) {
				return o instanceof n ? o : new n(function(a) {
					a(o)
				})
			}
			return new(n || (n = Promise))(function(o, a) {
				function l(c) {
					try {
						s(r.next(c))
					} catch (f) {
						a(f)
					}
				}

				function u(c) {
					try {
						s(r.throw(c))
					} catch (f) {
						a(f)
					}
				}

				function s(c) {
					c.done ? o(c.value) : i(c.value).then(l, u)
				}
				s((r = r.apply(e, t || [])).next())
			})
		},
		Si = globalThis && globalThis.__generator || function(e, t) {
			var n = {
					label: 0,
					sent: function() {
						if (o[0] & 1) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				},
				r, i, o, a;
			return a = {
				next: l(0),
				throw: l(1),
				return: l(2)
			}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function l(s) {
				return function(c) {
					return u([s, c])
				}
			}

			function u(s) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
					switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
						case 0:
						case 1:
							o = s;
							break;
						case 4:
							return n.label++, {
								value: s[1],
								done: !1
							};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue
							}
							if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
								n.label = s[1];
								break
							}
							if (s[0] === 6 && n.label < o[1]) {
								n.label = o[1], o = s;
								break
							}
							if (o && n.label < o[2]) {
								n.label = o[2], n.ops.push(s);
								break
							}
							o[2] && n.ops.pop(), n.trys.pop();
							continue
					}
					s = t.call(e, n)
				} catch (c) {
					s = [6, c], i = 0
				} finally {
					r = o = 0
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				}
			}
		},
		Zy = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		eb = globalThis && globalThis.__spreadArray || function(e, t, n) {
			if (n || arguments.length === 2)
				for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
			return e.concat(o || Array.prototype.slice.call(t))
		};
	(function(e) {
		Jy(t, e);

		function t(n) {
			var r, i, o, a, l = e.call(this, {
				aggregationSelector: (r = n.exporter.selectAggregation) === null || r === void 0 ? void 0 : r.bind(n.exporter),
				aggregationTemporalitySelector: (i = n.exporter.selectAggregationTemporality) === null || i === void 0 ? void 0 : i.bind(n.exporter)
			}) || this;
			if (n.exportIntervalMillis !== void 0 && n.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
			if (n.exportTimeoutMillis !== void 0 && n.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
			if (n.exportTimeoutMillis !== void 0 && n.exportIntervalMillis !== void 0 && n.exportIntervalMillis < n.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
			return l._exportInterval = (o = n.exportIntervalMillis) !== null && o !== void 0 ? o : 6e4, l._exportTimeout = (a = n.exportTimeoutMillis) !== null && a !== void 0 ? a : 3e4, l._exporter = n.exporter, l
		}
		return t.prototype._runOnce = function() {
			return Ei(this, void 0, void 0, function() {
				var n, r, i, o, a = this;
				return Si(this, function(l) {
					switch (l.label) {
						case 0:
							return [4, this.collect({})];
						case 1:
							return n = l.sent(), r = n.resourceMetrics, i = n.errors, i.length > 0 && (o = K).error.apply(o, eb(["PeriodicExportingMetricReader: metrics collection errors"], Zy(i), !1)), [2, new Promise(function(u, s) {
								a._exporter.export(r, function(c) {
									var f;
									c.code !== Qt.SUCCESS ? s((f = c.error) !== null && f !== void 0 ? f : new Error("PeriodicExportingMetricReader: metrics export failed (error " + c.error + ")")) : u()
								})
							})]
					}
				})
			})
		}, t.prototype.onInitialized = function() {
			var n = this;
			this._interval = setInterval(function() {
				return Ei(n, void 0, void 0, function() {
					var r;
					return Si(this, function(i) {
						switch (i.label) {
							case 0:
								return i.trys.push([0, 2, , 3]), [4, Oa(this._runOnce(), this._exportTimeout)];
							case 1:
								return i.sent(), [3, 3];
							case 2:
								return r = i.sent(), r instanceof dc ? (K.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout), [2]) : (Dg(r), [3, 3]);
							case 3:
								return [2]
						}
					})
				})
			}, this._exportInterval), this._interval
		}, t.prototype.onForceFlush = function() {
			return Ei(this, void 0, void 0, function() {
				return Si(this, function(n) {
					switch (n.label) {
						case 0:
							return [4, this._exporter.forceFlush()];
						case 1:
							return n.sent(), [2]
					}
				})
			})
		}, t.prototype.onShutdown = function() {
			return Ei(this, void 0, void 0, function() {
				return Si(this, function(n) {
					switch (n.label) {
						case 0:
							return this._interval && clearInterval(this._interval), [4, this._exporter.shutdown()];
						case 1:
							return n.sent(), [2]
					}
				})
			})
		}, t
	})(Qy), globalThis && globalThis.__values;
	var xn = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		Ia = function() {
			function e(t, n) {
				this._writableMetricStorage = t, this._descriptor = n
			}
			return e.prototype._record = function(t, n, r) {
				n === void 0 && (n = {}), r === void 0 && (r = Xt.active()), this._descriptor.valueType === vi.INT && !Number.isInteger(t) && (K.warn("INT value type cannot accept a floating-point value for " + this._descriptor.name + ", ignoring the fractional digits."), t = Math.trunc(t)), this._writableMetricStorage.record(t, n, r, Au())
			}, e
		}();
	(function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t.prototype.add = function(n, r, i) {
			this._record(n, r, i)
		}, t
	})(Ia),
	function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t.prototype.add = function(n, r, i) {
			if (n < 0) {
				K.warn("negative value provided to counter " + this._descriptor.name + ": " + n);
				return
			}
			this._record(n, r, i)
		}, t
	}(Ia),
	function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t.prototype.record = function(n, r, i) {
			if (n < 0) {
				K.warn("negative value provided to histogram " + this._descriptor.name + ": " + n);
				return
			}
			this._record(n, r, i)
		}, t
	}(Ia);
	var Pa = function() {
		function e(t, n, r) {
			this._observableRegistry = r, this._descriptor = t, this._metricStorages = n
		}
		return e.prototype.addCallback = function(t) {
			this._observableRegistry.addCallback(t, this)
		}, e.prototype.removeCallback = function(t) {
			this._observableRegistry.removeCallback(t, this)
		}, e
	}();
	(function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t
	})(Pa),
	function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t
	}(Pa),
	function(e) {
		xn(t, e);

		function t() {
			return e !== null && e.apply(this, arguments) || this
		}
		return t
	}(Pa);
	var yc = function() {
			function e(t) {
				this._instrumentDescriptor = t
			}
			return e.prototype.getInstrumentDescriptor = function() {
				return this._instrumentDescriptor
			}, e.prototype.updateDescription = function(t) {
				this._instrumentDescriptor = Uy(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
					description: t,
					valueType: this._instrumentDescriptor.valueType,
					unit: this._instrumentDescriptor.unit
				})
			}, e
		}(),
		tb = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		bc = globalThis && globalThis.__generator || function(e, t) {
			var n = {
					label: 0,
					sent: function() {
						if (o[0] & 1) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				},
				r, i, o, a;
			return a = {
				next: l(0),
				throw: l(1),
				return: l(2)
			}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
				return this
			}), a;

			function l(s) {
				return function(c) {
					return u([s, c])
				}
			}

			function u(s) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; n;) try {
					if (r = 1, i && (o = s[0] & 2 ? i.return : s[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, s[1])).done) return o;
					switch (i = 0, o && (s = [s[0] & 2, o.value]), s[0]) {
						case 0:
						case 1:
							o = s;
							break;
						case 4:
							return n.label++, {
								value: s[1],
								done: !1
							};
						case 5:
							n.label++, i = s[1], s = [0];
							continue;
						case 7:
							s = n.ops.pop(), n.trys.pop();
							continue;
						default:
							if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (s[0] === 6 || s[0] === 2)) {
								n = 0;
								continue
							}
							if (s[0] === 3 && (!o || s[1] > o[0] && s[1] < o[3])) {
								n.label = s[1];
								break
							}
							if (s[0] === 6 && n.label < o[1]) {
								n.label = o[1], o = s;
								break
							}
							if (o && n.label < o[2]) {
								n.label = o[2], n.ops.push(s);
								break
							}
							o[2] && n.ops.pop(), n.trys.pop();
							continue
					}
					s = t.call(e, n)
				} catch (c) {
					s = [6, c], i = 0
				} finally {
					r = o = 0
				}
				if (s[0] & 5) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				}
			}
		},
		nb = function() {
			function e(t) {
				this._hash = t, this._valueMap = new Map, this._keyMap = new Map
			}
			return e.prototype.get = function(t, n) {
				return n != null || (n = this._hash(t)), this._valueMap.get(n)
			}, e.prototype.getOrDefault = function(t, n) {
				var r = this._hash(t);
				if (this._valueMap.has(r)) return this._valueMap.get(r);
				var i = n();
				return this._keyMap.has(r) || this._keyMap.set(r, t), this._valueMap.set(r, i), i
			}, e.prototype.set = function(t, n, r) {
				r != null || (r = this._hash(t)), this._keyMap.has(r) || this._keyMap.set(r, t), this._valueMap.set(r, n)
			}, e.prototype.has = function(t, n) {
				return n != null || (n = this._hash(t)), this._valueMap.has(n)
			}, e.prototype.keys = function() {
				var t, n;
				return bc(this, function(r) {
					switch (r.label) {
						case 0:
							t = this._keyMap.entries(), n = t.next(), r.label = 1;
						case 1:
							return n.done === !0 ? [3, 3] : [4, [n.value[1], n.value[0]]];
						case 2:
							return r.sent(), n = t.next(), [3, 1];
						case 3:
							return [2]
					}
				})
			}, e.prototype.entries = function() {
				var t, n;
				return bc(this, function(r) {
					switch (r.label) {
						case 0:
							t = this._valueMap.entries(), n = t.next(), r.label = 1;
						case 1:
							return n.done === !0 ? [3, 3] : [4, [this._keyMap.get(n.value[0]), n.value[1], n.value[0]]];
						case 2:
							return r.sent(), n = t.next(), [3, 1];
						case 3:
							return [2]
					}
				})
			}, Object.defineProperty(e.prototype, "size", {
				get: function() {
					return this._valueMap.size
				},
				enumerable: !1,
				configurable: !0
			}), e
		}(),
		dr = function(e) {
			tb(t, e);

			function t() {
				return e.call(this, Ly) || this
			}
			return t
		}(nb),
		rb = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		Ec = function() {
			function e(t) {
				this._aggregator = t, this._activeCollectionStorage = new dr, this._cumulativeMemoStorage = new dr
			}
			return e.prototype.record = function(t, n, r, i) {
				var o = this,
					a = this._activeCollectionStorage.getOrDefault(n, function() {
						return o._aggregator.createAccumulation(i)
					});
				a == null || a.record(t)
			}, e.prototype.batchCumulate = function(t, n) {
				var r = this;
				Array.from(t.entries()).forEach(function(i) {
					var o = rb(i, 3),
						a = o[0],
						l = o[1],
						u = o[2],
						s = r._aggregator.createAccumulation(n);
					s == null || s.record(l);
					var c = s;
					if (r._cumulativeMemoStorage.has(a, u)) {
						var f = r._cumulativeMemoStorage.get(a, u);
						c = r._aggregator.diff(f, s)
					}
					r._cumulativeMemoStorage.set(a, s, u), r._activeCollectionStorage.set(a, c, u)
				})
			}, e.prototype.collect = function() {
				var t = this._activeCollectionStorage;
				return this._activeCollectionStorage = new dr, t
			}, e
		}(),
		Sc = globalThis && globalThis.__values || function(e) {
			var t = typeof Symbol == "function" && Symbol.iterator,
				n = t && e[t],
				r = 0;
			if (n) return n.call(e);
			if (e && typeof e.length == "number") return {
				next: function() {
					return e && r >= e.length && (e = void 0), {
						value: e && e[r++],
						done: !e
					}
				}
			};
			throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
		},
		Tc = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		},
		Cc = function() {
			function e(t) {
				this._aggregator = t, this._unreportedAccumulations = new Map, this._reportHistory = new Map
			}
			return e.prototype.buildMetrics = function(t, n, r, i, o) {
				this._stashAccumulations(n, i);
				var a = this._getMergedUnreportedAccumulations(t),
					l = a,
					u;
				if (this._reportHistory.has(t)) {
					var s = this._reportHistory.get(t),
						c = s.collectionTime;
					u = s.aggregationTemporality, u === bi.CUMULATIVE ? l = e.merge(s.accumulations, a, this._aggregator) : l = e.calibrateStartTime(s.accumulations, a, c)
				} else u = t.selectAggregationTemporality(r.type);
				return this._reportHistory.set(t, {
					accumulations: l,
					collectionTime: o,
					aggregationTemporality: u
				}), this._aggregator.toMetricData(r, u, ib(l), o)
			}, e.prototype._stashAccumulations = function(t, n) {
				var r = this;
				t.forEach(function(i) {
					var o = r._unreportedAccumulations.get(i);
					o === void 0 && (o = [], r._unreportedAccumulations.set(i, o)), o.push(n)
				})
			}, e.prototype._getMergedUnreportedAccumulations = function(t) {
				var n, r, i = new dr,
					o = this._unreportedAccumulations.get(t);
				if (this._unreportedAccumulations.set(t, []), o === void 0) return i;
				try {
					for (var a = Sc(o), l = a.next(); !l.done; l = a.next()) {
						var u = l.value;
						i = e.merge(i, u, this._aggregator)
					}
				} catch (s) {
					n = {
						error: s
					}
				} finally {
					try {
						l && !l.done && (r = a.return) && r.call(a)
					} finally {
						if (n) throw n.error
					}
				}
				return i
			}, e.merge = function(t, n, r) {
				for (var i = t, o = n.entries(), a = o.next(); a.done !== !0;) {
					var l = Tc(a.value, 3),
						u = l[0],
						s = l[1],
						c = l[2];
					if (t.has(u, c)) {
						var f = t.get(u, c),
							p = r.merge(f, s);
						i.set(u, p, c)
					} else i.set(u, s, c);
					a = o.next()
				}
				return i
			}, e.calibrateStartTime = function(t, n, r) {
				var i, o;
				try {
					for (var a = Sc(t.keys()), l = a.next(); !l.done; l = a.next()) {
						var u = Tc(l.value, 2),
							s = u[0],
							c = u[1],
							f = n.get(s, c);
						f == null || f.setStartTime(r)
					}
				} catch (p) {
					i = {
						error: p
					}
				} finally {
					try {
						l && !l.done && (o = a.return) && o.call(a)
					} finally {
						if (i) throw i.error
					}
				}
				return n
			}, e
		}();

	function ib(e) {
		return Array.from(e.entries())
	}
	var ob = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		ab = globalThis && globalThis.__read || function(e, t) {
			var n = typeof Symbol == "function" && e[Symbol.iterator];
			if (!n) return e;
			var r = n.call(e),
				i, o = [],
				a;
			try {
				for (;
					(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
			} catch (l) {
				a = {
					error: l
				}
			} finally {
				try {
					i && !i.done && (n = r.return) && n.call(r)
				} finally {
					if (a) throw a.error
				}
			}
			return o
		};
	(function(e) {
		ob(t, e);

		function t(n, r, i) {
			var o = e.call(this, n) || this;
			return o._attributesProcessor = i, o._deltaMetricStorage = new Ec(r), o._temporalMetricStorage = new Cc(r), o
		}
		return t.prototype.record = function(n, r) {
			var i = this,
				o = new dr;
			Array.from(n.entries()).forEach(function(a) {
				var l = ab(a, 2),
					u = l[0],
					s = l[1];
				o.set(i._attributesProcessor.process(u), s)
			}), this._deltaMetricStorage.batchCumulate(o, r)
		}, t.prototype.collect = function(n, r, i) {
			var o = this._deltaMetricStorage.collect();
			return this._temporalMetricStorage.buildMetrics(n, r, this._instrumentDescriptor, o, i)
		}, t
	})(yc), globalThis && globalThis.__values, globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__read, globalThis && globalThis.__spreadArray;
	var sb = globalThis && globalThis.__extends || function() {
		var e = function(t, n) {
			return e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(r, i) {
				r.__proto__ = i
			} || function(r, i) {
				for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
			}, e(t, n)
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
			e(t, n);

			function r() {
				this.constructor = t
			}
			t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
		}
	}();
	(function(e) {
		sb(t, e);

		function t(n, r, i) {
			var o = e.call(this, n) || this;
			return o._attributesProcessor = i, o._deltaMetricStorage = new Ec(r), o._temporalMetricStorage = new Cc(r), o
		}
		return t.prototype.record = function(n, r, i, o) {
			r = this._attributesProcessor.process(r, i), this._deltaMetricStorage.record(n, r, i, o)
		}, t.prototype.collect = function(n, r, i) {
			var o = this._deltaMetricStorage.collect();
			return this._temporalMetricStorage.buildMetrics(n, r, this._instrumentDescriptor, o, i)
		}, t
	})(yc);
	var wc = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		Oc = function() {
			function e() {}
			return e.Noop = function() {
				return ub
			}, e
		}(),
		lb = function(e) {
			wc(t, e);

			function t() {
				return e !== null && e.apply(this, arguments) || this
			}
			return t.prototype.process = function(n, r) {
				return n
			}, t
		}(Oc);
	(function(e) {
		wc(t, e);

		function t(n) {
			var r = e.call(this) || this;
			return r._allowedAttributeNames = n, r
		}
		return t.prototype.process = function(n, r) {
			var i = this,
				o = {};
			return Object.keys(n).filter(function(a) {
				return i._allowedAttributeNames.includes(a)
			}).forEach(function(a) {
				return o[a] = n[a]
			}), o
		}, t
	})(Oc);
	var ub = new lb;
	globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__read, globalThis && globalThis.__values, globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__awaiter, globalThis && globalThis.__generator, globalThis && globalThis.__values;
	var cb = globalThis && globalThis.__extends || function() {
			var e = function(t, n) {
				return e = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(r, i) {
					r.__proto__ = i
				} || function(r, i) {
					for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
				}, e(t, n)
			};
			return function(t, n) {
				if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				e(t, n);

				function r() {
					this.constructor = t
				}
				t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}(),
		Na = "v1/traces",
		fb = "http://localhost:4318/" + Na,
		db = function(e) {
			cb(t, e);

			function t(n) {
				n === void 0 && (n = {});
				var r = e.call(this, n) || this;
				return r._headers = Object.assign(r._headers, Eu(Mt().OTEL_EXPORTER_OTLP_TRACES_HEADERS)), r
			}
			return t.prototype.convert = function(n) {
				return hy(n, !0)
			}, t.prototype.getDefaultUrl = function(n) {
				return typeof n.url == "string" ? n.url : Mt().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0 ? Qv(Mt().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT, Na) : Mt().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0 ? Yv(Mt().OTEL_EXPORTER_OTLP_ENDPOINT, Na) : fb
			}, t
		}(ay),
		Ac = "http://localhost:4318/v1/traces",
		hr = function() {
			var e, t;
			return {
				init: function(n) {
					var r;
					t || (n.url = n.url || Ac, n.webSDKVersion = n.webSDKVersion || "unknown", e = new qv({
						resource: new i_((r = {}, r[Ve.SERVICE_NAME] = "smwebsdk", r[Ve.SERVICE_VERSION] = n.webSDKVersion, r))
					}), e.addSpanProcessor(new nc(new db({
						url: n.url,
						headers: {
							Authorization: "Bearer " + n.jwt
						}
					}))), e.register(), t = e.getTracer("smwebsdk"))
				},
				isInitialized: function() {
					return !!t
				},
				getTracer: function() {
					return t
				},
				defaultUrl: Ac
			}
		}();
	Object.freeze(hr);
	var hb = typeof process < "u" && "15.6.0" || "unknown";

	function pb(e) {
		return new Promise(function(t) {
			return setTimeout(function() {
				return t()
			}, e)
		})
	}
	var mb = 50,
		gb = 200,
		_b = 1;

	function vb(e, t, n) {
		return t === void 0 && (t = {}), me(this, void 0, void 0, function() {
			var r, i, o, a, l, u;
			return ge(this, function(s) {
				switch (s.label) {
					case 0:
						r = [], i = t.maxRetries || mb, o = t.delayMs || gb, l = 0, s.label = 1;
					case 1:
						if (!(l < i)) return [3, 8];
						s.label = 2;
					case 2:
						return s.trys.push([2, 4, , 6]), [4, e()];
					case 3:
						return a = s.sent(), n.connectionResult = {
							message: "success",
							value: a,
							retries: r
						}, [3, 6];
					case 4:
						if (u = s.sent(), r.push(u), n.connectionResult = {
								message: "failed",
								retries: r
							}, u instanceof Error && u.name === "noSessionToResume" && Ti(), !(u instanceof Error) || u.name !== "noScene") throw u;
						if (r.length === i) throw console.warn("Retry gave up after ".concat(i, ` retries:
`).concat(r.map(function(c) {
							return c instanceof Error ? c.message : c.toString()
						}).join(`
`))), u;
						return [4, pb(o)];
					case 5:
						return s.sent(), [3, 7];
					case 6:
						return [3, 8];
					case 7:
						return l++, [3, 1];
					case 8:
						return [2, a]
				}
			})
		})
	}

	function yb(e, t, n) {
		sessionStorage.setItem("sm-server", e), sessionStorage.setItem("sm-session-id", t), sessionStorage.setItem("sm-api-key", n)
	}

	function xc() {
		return {
			server: sessionStorage.getItem("sm-server"),
			resumeSessionId: sessionStorage.getItem("sm-session-id"),
			savedApiKey: sessionStorage.getItem("sm-api-key")
		}
	}

	function Ti() {
		sessionStorage.removeItem("sm-server"), sessionStorage.removeItem("sm-session-id"), sessionStorage.removeItem("sm-api-key")
	}
	var Rc = function() {
			function e(t, n, r, i, o, a, l) {
				n === void 0 && (n = !1), r === void 0 && (r = ee.MicrophoneAndCamera), i === void 0 && (i = ee.Microphone);
				var u = this;
				if (this._onConversationResultEvents = {}, this._onSpeechMarkerEvents = {}, this._session = void 0, this._isWebSocketOnly = !1, this._transactionId = 0, this._pendingResponses = {}, this._microphoneUnmuteTimer = void 0, this._echoCancellationEnabled = !0, this._serverControlledCameras = !1, this._loggingConfig = {
						session: {},
						contentAwareness: {}
					}, this._logger = new Pt, this._tracerOptions = {
						disableTracing: !1,
						parentCtx: Kt,
						url: hr.defaultUrl
					}, this._sessionResumeEnabled = !1, this._isResumedSession = !1, this._sendMetadata = {
						pageUrl: !1
					}, this._onMicrophoneActive = new He, this._onCameraActive = new He, this.currentPersonaId = _b, this.version = {
						webSdk: hb,
						platformSdk: "unknown"
					}, this.iosVisibilityChange = function() {
						var f = document.visibilityState === "visible";
						setTimeout(function() {
							u._session && u._session.sendRtcEvent("ui", {
								visible: f
							})
						}, 500)
					}, this.stopSpeakingWhenNotVisible = function() {
						document.visibilityState !== "visible" && u.sendRequest("stopSpeaking", {
							personaId: u.currentPersonaId
						})
					}, this.isSceneOptions(t)) {
					var s = t;
					this._videoElement = s.videoElement, this._apiKey = s.apiKey, this._audioOnly = s.audioOnly || n, this._requestedUserMedia = vu(s.requestedMediaDevices, r), this._requiredUserMedia = vu(s.requiredMediaDevices, i), this.contentAwarenessDebounceTime = s.contentAwarenessDebounceTime, this._loggingConfig = lt(lt({}, this._loggingConfig), s.loggingConfig || {}), s.sendMetadata && (this._sendMetadata = s.sendMetadata), s.tracerOptions && (this._tracerOptions = s.tracerOptions)
				} else this._videoElement = t, this._audioOnly = n, this._requestedUserMedia = r, this._requiredUserMedia = i, this.contentAwarenessDebounceTime = o, this._loggingConfig = lt(lt({}, this._loggingConfig), a), l && (this._tracerOptions = l);
				this._logger = new Pt(this._loggingConfig.session.minLogLevel, this._loggingConfig.session.enabled), this._onStateEvent = new He, this._onStateEvent.addListener(function(f, p) {
					u._onState && u._onState(f, p)
				}), this._onRecognizeResultsEvent = new He, this._onRecognizeResultsEvent.addListener(function(f, p, h, d) {
					u._onRecognizeResults && u._onRecognizeResults(f, p, h, d)
				}), this._onDisconnectedEvent = new He, this._onDisconnectedEvent.addListener(function(f, p, h) {
					Ti(), u._onDisconnected && u._onDisconnected(f, p, h)
				}), this._onUserTextEvent = new He, this._onUserTextEvent.addListener(function(f, p) {
					u._onUserText && u._onUserText(f, p)
				}), this._onDemoModeEvent = new He, this._underRuntimeHost = Boolean(window.SmIsUnderRuntimeHost);
				var c = new Uint32Array(3);
				window.crypto.getRandomValues(c), this._sceneId = c.toString().replace(/,/g, "-"), this.conversation = new Og, this.connectionState = new xg, this._metadataSender = new Ag(this), this._logger.log("debug", "websdk version:", this.version.webSdk)
			}
			return e.prototype.isSceneOptions = function(t) {
				var n = !!t,
					r = !!(t != null && t.tagName);
				return n && !r
			}, e.prototype.connectionValid = function() {
				return !!(this._underRuntimeHost || this._session && this._session.serverConnection)
			}, e.prototype.isConnected = function() {
				return !!(this.connectionValid() && this._session && this._session.serverConnection && this._session.serverConnection.readyState === this._session.serverConnection.OPEN)
			}, e.prototype.keepAlive = function() {
				this._session && this._session.peerConnection !== null && this._session.sendRtcEvent("keepAlive", {})
			}, e.prototype.disconnect = function() {
				var t, n;
				Ti(), this.connectionState.reset(), this.conversation.reset(), (t = this.contentAwareness) === null || t === void 0 || t.disconnect(), this._metadataSender.disconnect(), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), (n = this._session) === null || n === void 0 || n.close(!0), this._session = void 0
			}, e.prototype.connect = function(t, n, r, i) {
				var o, a, l;
				return me(this, void 0, void 0, function() {
					var u, s, c, f, p, h, d, m, _, g, S, E, w = this;
					return ge(this, function(O) {
						switch (O.label) {
							case 0:
								return u = Date.now(), s = this.connectArgsToConfig(t, n, r, i), f = function(v) {
									c == null || c.addEvent(v.name)
								}, this.connectionState.onConnectionStateUpdated.addListener(f), this._underRuntimeHost ? (this._session = new dm(this._videoElement, this._logger), [3, 8]) : [3, 1];
							case 1:
								if (p = s.tokenServerUri || s.tokenServerAccessToken, this._apiKey && p && this._logger.log("warn", "You are trying to connect via an API key and a token server. Please use one or the other"), !(this._apiKey && !p)) return [3, 6];
								O.label = 2;
							case 2:
								return O.trys.push([2, 5, , 6]), [4, this.fetchAuthConfig(this._apiKey)];
							case 3:
								return h = O.sent(), [4, h.json()];
							case 4:
								return d = O.sent(), m = xc().server, s.tokenServerUri = d.url, s.tokenServerAccessToken = d.jwt, m && (s.tokenServerUri = yu(d.url) + "server/" + m), [3, 6];
							case 5:
								throw _ = O.sent(), _ instanceof Error && _.message === "Broken API key" ? this._logger.log("error", "Broken API key. Please check your key or re copy the key from DDNA Studio.") : this._logger.log("error", "Invalid API key: Please check your key configuration in DDNA Studio. For more information click here https://soulmachines-support.atlassian.net/wiki/spaces/SSAS/pages/1320058919/Connecting+Using+API+Keys#Troubleshooting"), ce("Invalid API key", "serverConnectionFailed");
							case 6:
								if (!s.tokenServerUri || !s.tokenServerAccessToken) throw ce("Please authenticate via an API key or with a serverUri and accessToken", "serverConnectionFailed");
								return [4, this.initializeTracer(s.tokenServerUri, s.tokenServerAccessToken)];
							case 7:
								g = O.sent(), S = g.initTracerStartTime, E = g.initTracerEndTime, c = (l = (a = (o = hr.getTracer()) === null || o === void 0 ? void 0 : o.startSpan("createSessionAndConnect")) === null || a === void 0 ? void 0 : a.setAttribute("sm.websdk.connection.pretraceinitduration.milliseconds", S - u)) === null || l === void 0 ? void 0 : l.setAttribute("sm.websdk.connection.traceinitduration.milliseconds", E - S), this._isWebSocketOnly ? this._session = new mm(s.tokenServerUri, s.tokenServerAccessToken, this._logger) : this._session = new pm(this._videoElement, s.tokenServerUri, s.userText, s.tokenServerAccessToken, this._audioOnly, this._requestedUserMedia, this._requiredUserMedia, this._echoCancellationEnabled, this._logger, this.connectionState), O.label = 8;
							case 8:
								if (!this._session) throw ce("Failed to create session", "unknown");
								return this._session.onConnected = this.sessionConnected.bind(this), this._session.onMessage = this.onMessage.bind(this), this._session.onClose = this.sessionClosed.bind(this), this._session.onUserText = this.rtcUserText.bind(this), "microphoneActiveCallbacks" in this._session && (this._session.microphoneActiveCallbacks = this._onMicrophoneActive), "cameraActiveCallbacks" in this._session && (this._session.cameraActiveCallbacks = this._onCameraActive), this._session.features.isIos && document.addEventListener("visibilitychange", this.iosVisibilityChange), [4, vb(function() {
									return me(w, void 0, void 0, function() {
										return ge(this, function(v) {
											switch (v.label) {
												case 0:
													return [4, this._session.connect()];
												case 1:
													return [2, v.sent()]
											}
										})
									})
								}, s.retryOptions, this).finally(function() {
									w.connectionState.onConnectionStateUpdated.removeListener(f), c == null || c.end()
								})];
							case 9:
								return [2, O.sent()]
						}
					})
				})
			}, e.prototype.initializeTracer = function(t, n) {
				return me(this, void 0, void 0, function() {
					var r, i, o;
					return ge(this, function(a) {
						switch (a.label) {
							case 0:
								if (r = Date.now(), !(!this._tracerOptions.disableTracing && !hr.isInitialized())) return [3, 4];
								a.label = 1;
							case 1:
								return a.trys.push([1, 3, , 4]), [4, this.initTelemetryToken({
									tokenServerUri: t,
									authToken: n
								})];
							case 2:
								return a.sent(), [3, 4];
							case 3:
								return i = a.sent(), o = "Could not initialize tracer telemetry token: ", i instanceof ReferenceError && i.message === "fetch is not defined" ? this._logger.log("debug", o + i.name + ": " + i.message) : i instanceof Error ? this._logger.log("warn", o + i.name + ": " + i.message) : this._logger.log("warn", o + "unknown error type"), [3, 4];
							case 4:
								return [2, {
									initTracerStartTime: r,
									initTracerEndTime: Date.now()
								}]
						}
					})
				})
			}, e.prototype.initTelemetryToken = function(t) {
				var n = t.tokenServerUri,
					r = t.authToken;
				return me(this, void 0, void 0, function() {
					var i, o, a, l, u;
					return ge(this, function(s) {
						switch (s.label) {
							case 0:
								return i = "api/telemetry/jwt", o = "api/telemetry/v1/traces", a = yu(Tg(n)), a ? [4, fetch(a + i, {
									headers: {
										Authorization: "Bearer " + r
									}
								})] : (this._logger.log("debug", "Could not initialize tracer telemetry token: invalid token server URI"), [2]);
							case 1:
								return l = s.sent(), l ? l.ok ? [4, l.json()] : (this._logger.log("warn", "Failed to fetch otel token: " + l.status + ": " + l.statusText), [2]) : (this._logger.log("warn", "Failed to receive response from otel token endpoint"), [2]);
							case 2:
								if (u = s.sent(), !u.success) return this._logger.log("warn", "Failed: otel response not successful"), [2];
								try {
									hr.init({
										jwt: u.telemetryJwt,
										url: a + o,
										webSDKVersion: this.version.webSdk
									}), this._logger.log("log", "Telemetry initialized")
								} catch (c) {
									c instanceof Error ? this._logger.log("warn", "Failed to initialize tracer: " + c.message) : this._logger.log("warn", "Failed to initialize tracer: unknown error")
								}
								return [2]
						}
					})
				})
			}, e.prototype.onMessage = function(t) {
				var n = t.category;
				if (n === "scene") {
					var r = t;
					this.onSceneMessage(r);
					return
				}
			}, e.prototype.sendOnewaySceneRequest = function(t, n) {
				if (!!this._session) {
					var r = {
						name: t,
						body: n,
						category: Qr.Scene,
						kind: Jn.Request
					};
					this._session.sendMessage(r)
				}
			}, e.prototype.sendRequest = function(t, n) {
				var r = this;
				return n === void 0 && (n = {}), new Promise(function(i, o) {
					if (!r._session) {
						o(ce("No session available", "noSession"));
						return
					}
					var a = r._sceneId + "_" + ++r._transactionId,
						l = {
							transaction: a,
							name: t,
							body: n,
							category: Qr.Scene,
							kind: Jn.Request
						},
						u = {
							resolve: i,
							reject: o
						};
					r._pendingResponses[a] = u, r._session && r._session.sendMessage(l)
				})
			}, e.prototype.onSceneMessage = function(t) {
				var n, r, i, o = t.name,
					a = t.body,
					l = t.kind,
					u = t.status,
					s = t.transaction;
				if (a && o === "state") {
					var c = a;
					this._onStateEvent.call(this, c), !((n = c.scene) === null || n === void 0) && n.featureFlags && this.enableFlaggedFeatures(c.scene.featureFlags), !((r = c.scene) === null || r === void 0) && r.sdkVersion && (this.version.platformSdk = (i = c.scene) === null || i === void 0 ? void 0 : i.sdkVersion, this._logger.log("debug", "platformSdk version:", this.version.platformSdk)), this.conversation.processStateMessage(c), this.controlMicrophoneMute(a)
				} else if (a && o === "recognizeResults") {
					var f = a,
						p = f.status,
						h = f.errorMessage,
						d = f.results;
					this.conversation.processRecognizeResultsMessage(a), this._onRecognizeResultsEvent.call(this, p, h, d)
				} else if (a && o === "conversationResult") {
					this.conversation.onConversationResult(a);
					var m = a.personaId;
					if (m) {
						var _ = new Xr(this, m),
							g = this._onConversationResultEvents[m];
						g.call(_, a), this.currentPersonaId = m
					}
				} else if (a && o === "speechMarker") {
					this.conversation.onSpeechMarker(a);
					var m = a.personaId;
					if (m) {
						var _ = new Xr(this, m),
							S = this._onSpeechMarkerEvents[m];
						S.call(_, a), this.currentPersonaId = m
					}
				} else a && o === "demoMode" && this._onDemoModeEvent.call(this, a);
				l === Jn.Response && s && this.processResponse(a, o, u, s)
			}, e.prototype.processResponse = function(t, n, r, i) {
				var o = this._pendingResponses[i];
				if (o) {
					if (r === 0) o.resolve(t);
					else {
						var a = new hm;
						a.requestName = n, a.status = r, a.responseBody = t, o.reject(a)
					}
					delete this._pendingResponses[i]
				}
			}, e.prototype.controlMicrophoneMute = function(t) {
				var n = this;
				if (t.persona && this._session && this._session.microphoneMuteDelay !== -1)
					for (var r in t.persona) {
						var i = t.persona[r];
						!i.speechState || (i.speechState === Zn.Speaking ? (this._session.microphoneMuted || (this._logger.log("warn", "Persona is speaking - mute microphone"), this._session.microphoneMuted = !0), this._microphoneUnmuteTimer && (clearTimeout(this._microphoneUnmuteTimer), this._microphoneUnmuteTimer = void 0)) : this._session.microphoneMuted && !this._microphoneUnmuteTimer && (this._microphoneUnmuteTimer = setTimeout(function() {
							!n._session || !n._microphoneUnmuteTimer || (n._logger.log("warn", "Persona is no longer speaking - unmute microphone"), n._session.microphoneMuted = !1, n._microphoneUnmuteTimer = void 0)
						}, this._session.microphoneMuteDelay)))
					}
			}, e.prototype.close = function() {
				this._session && this._session.close(!0)
			}, e.prototype.sessionConnected = function(t, n, r, i) {
				var o = this;
				this.contentAwareness = new Bm(this, this.contentAwarenessDebounceTime, new Pt(this._loggingConfig.contentAwareness.minLogLevel, this._loggingConfig.contentAwareness.enabled)), document.addEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), window.addEventListener("beforeunload", function() {
					o.sendRequest("stopSpeaking", {
						personaId: o.currentPersonaId
					})
				}), this._sendMetadata.pageUrl && this._metadataSender.observeUrlChanges(), this._isResumedSession = n, t && (this._sessionResumeEnabled = !0, yb(r, i, this._apiKey || "")), n && this._sendMetadata.pageUrl && this._metadataSender.send()
			}, e.prototype.sessionClosed = function(t) {
				Ti(), this._session && (this._session.features.isIos && document.removeEventListener("visibilitychange", this.iosVisibilityChange), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), this.connectionState.reset(), this.conversation.reset(), this._onDisconnectedEvent.call(this, this._session.sessionId, t))
			}, e.prototype.rtcUserText = function(t) {
				this._onUserTextEvent.call(this, t)
			}, e.prototype.enableFlaggedFeatures = function(t) {
				this._serverControlledCameras = t.includes(jo.UI_SDK_CAMERA_CONTROL)
			}, e.prototype.sendContent = function() {
				var t;
				this.contentAwareness || console.warn("ContentAwareness is not enabled for this project"), (t = this.contentAwareness) === null || t === void 0 || t.measure()
			}, e.prototype.sendVideoBounds = function(t, n) {
				this._session && this._session.sendVideoBounds(t, n)
			}, e.prototype.configure = function(t) {
				return this.sendRequest("configure", t)
			}, e.prototype.sendUserText = function(t) {
				this._session && this._session.sendUserText(t)
			}, e.prototype.startRecognize = function(t) {
				var n = {};
				return t !== void 0 && (n.audioSource = t), this.sendRequest("startRecognize", n)
			}, e.prototype.stopRecognize = function() {
				return this.sendRequest("stopRecognize")
			}, e.prototype.isMicrophoneConnected = function() {
				return this._session ? this._session.isMicrophoneConnected : !1
			}, e.prototype.isCameraConnected = function() {
				return this._session ? this._session.isCameraConnected : !1
			}, e.prototype.session = function() {
				return this._session
			}, e.prototype.hasContentAwareness = function() {
				return !!this.contentAwareness
			}, e.prototype.hasServerControlledCameras = function() {
				return this._serverControlledCameras
			}, e.prototype.supportsSessionPersistence = function() {
				return this._sessionResumeEnabled
			}, e.prototype.isResumedSession = function() {
				return this._isResumedSession
			}, Object.defineProperty(e.prototype, "onConversationResultEvents", {
				get: function() {
					return this._onConversationResultEvents
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onSpeechMarkerEvents", {
				get: function() {
					return this._onSpeechMarkerEvents
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.getState = function() {
				return me(this, void 0, void 0, function() {
					return ge(this, function(t) {
						return [2, this.sendRequest("getState")]
					})
				})
			}, Object.defineProperty(e.prototype, "onStateEvent", {
				get: function() {
					return this._onStateEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onState", {
				set: function(t) {
					this._onState = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onDisconnectedEvent", {
				get: function() {
					return this._onDisconnectedEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onDisconnected", {
				set: function(t) {
					this._onDisconnected = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onRecognizeResultsEvent", {
				get: function() {
					return this._onRecognizeResultsEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onRecognizeResults", {
				set: function(t) {
					this._onRecognizeResults = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUserTextEvent", {
				get: function() {
					return this._onUserTextEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onUserText", {
				set: function(t) {
					this._onUserText = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "echoCancellationEnabled", {
				get: function() {
					return this._echoCancellationEnabled
				},
				set: function(t) {
					this._echoCancellationEnabled = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onDemoModeEvent", {
				get: function() {
					return this._onDemoModeEvent
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "videoElement", {
				get: function() {
					return this._videoElement
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "viewerOffsetX", {
				get: function() {
					return this._session ? this._session.offsetX : 0
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "viewerOffsetY", {
				get: function() {
					return this._session ? this._session.offsetY : 0
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "isWebSocketOnly", {
				get: function() {
					return this._isWebSocketOnly
				},
				set: function(t) {
					this._isWebSocketOnly = t
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "onMicrophoneActive", {
				get: function() {
					return this._onMicrophoneActive
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.isMicrophoneActive = function() {
				var t;
				return Boolean((t = this._session) === null || t === void 0 ? void 0 : t.isMicrophoneActive())
			}, Object.defineProperty(e.prototype, "onCameraActive", {
				get: function() {
					return this._onCameraActive
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.isCameraActive = function() {
				var t;
				return Boolean((t = this._session) === null || t === void 0 ? void 0 : t.isCameraActive())
			}, e.prototype.setMediaDeviceActive = function(t) {
				var n;
				return me(this, void 0, void 0, function() {
					return ge(this, function(r) {
						switch (r.label) {
							case 0:
								return this.isConnected() ? [4, (n = this._session) === null || n === void 0 ? void 0 : n.setMediaDeviceActive({
									microphone: t.microphone,
									camera: t.camera
								})] : [3, 2];
							case 1:
								return r.sent(), [3, 3];
							case 2:
								throw ce("Connection has not been established", "noConnection");
							case 3:
								return [2]
						}
					})
				})
			}, e.prototype.startVideo = function(t) {
				return me(this, void 0, void 0, function() {
					var n;
					return ge(this, function(r) {
						switch (r.label) {
							case 0:
								if (n = t || this._videoElement, !n) throw ce("Cannot find HTMLVideoElement", "noVideoElement");
								return [4, this.playVideo(n)];
							case 1:
								return r.sent() ? [2, {
									video: !0,
									audio: !0
								}] : (n.muted = !0, [4, this.playVideo(n)]);
							case 2:
								if (r.sent()) return [2, {
									video: !0,
									audio: !1
								}];
								throw ce("Cannot start media playback", "userInteractionRequired")
						}
					})
				})
			}, e.prototype.playVideo = function(t) {
				return me(this, void 0, void 0, function() {
					return ge(this, function(n) {
						switch (n.label) {
							case 0:
								return n.trys.push([0, 2, , 3]), [4, t.play()];
							case 1:
								return n.sent(), [2, !0];
							case 2:
								return n.sent(), [2, !1];
							case 3:
								return [2]
						}
					})
				})
			}, e.prototype.fetchAuthConfig = function(t) {
				var n;
				try {
					var r = JSON.parse(atob(t));
					n = r.authServer
				} catch {
					throw ce("Broken API key", "Failed to decode api key")
				}
				var i = xc(),
					o = i.server,
					a = i.resumeSessionId,
					l = i.savedApiKey;
				return o && a && l === t && (n = n + "?sessionId=" + a), fetch(n, {
					headers: {
						key: t
					}
				})
			}, e.prototype.connectArgsToConfig = function(t, n, r, i) {
				var o, a;
				return typeof t == "string" ? {
					tokenServerUri: t,
					tokenServerAccessToken: r,
					userText: n,
					retryOptions: i
				} : {
					tokenServerUri: ((o = t == null ? void 0 : t.tokenServer) === null || o === void 0 ? void 0 : o.uri) || "",
					tokenServerAccessToken: (a = t == null ? void 0 : t.tokenServer) === null || a === void 0 ? void 0 : a.token,
					userText: t == null ? void 0 : t.userText,
					retryOptions: t == null ? void 0 : t.retryOptions
				}
			}, e.prototype.isLoggingEnabled = function() {
				return this._logger.isEnabled
			}, e.prototype.getMinLogLevel = function() {
				return this._logger.getMinLogLevel()
			}, e.prototype.setLogging = function(t) {
				this._logger.enableLogging(t)
			}, e.prototype.setMinLogLevel = function(t) {
				this._logger.setMinLogLevel(t)
			}, e
		}(),
		kc;
	(function(e) {
		e[e.none = 0] = "none", e[e.microphone = 1] = "microphone", e[e.microphoneAndCamera = 2] = "microphoneAndCamera", e[e.camera = 3] = "camera"
	})(kc || (kc = {}));
	var bb = function() {
		function e() {
			this.Scene = Rc, this.Persona = Xr, this.userMedia = {
				none: ee.None,
				microphone: ee.Microphone,
				microphoneAndCamera: ee.MicrophoneAndCamera,
				camera: ee.Camera
			}, this.DetectCapabilities = function() {
				return new Yr().detectWebRTCFeatures()
			}, this.setLogging = function(t) {}
		}
		return e
	}();
	new bb;
	var Rn, fe, Ma, Ic, kn = 0,
		Pc = [],
		Ci = [],
		Nc = B.__b,
		Mc = B.__r,
		Lc = B.diffed,
		Dc = B.__c,
		Uc = B.unmount;

	function pr(e, t) {
		B.__h && B.__h(fe, e, kn || t), kn = 0;
		var n = fe.__H || (fe.__H = {
			__: [],
			__h: []
		});
		return e >= n.__.length && n.__.push({
			__V: Ci
		}), n.__[e]
	}

	function de(e) {
		return kn = 1, La(Bc, e)
	}

	function La(e, t, n) {
		var r = pr(Rn++, 2);
		if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Bc(void 0, t), function(o) {
				var a = r.__N ? r.__N[0] : r.__[0],
					l = r.t(a, o);
				a !== l && (r.__N = [l, r.__[1]], r.__c.setState({}))
			}], r.__c = fe, !fe.u)) {
			fe.u = !0;
			var i = fe.shouldComponentUpdate;
			fe.shouldComponentUpdate = function(o, a, l) {
				if (!r.__c.__H) return !0;
				var u = r.__c.__H.__.filter(function(c) {
					return c.__c
				});
				if (u.every(function(c) {
						return !c.__N
					})) return !i || i.call(this, o, a, l);
				var s = !1;
				return u.forEach(function(c) {
					if (c.__N) {
						var f = c.__[0];
						c.__ = c.__N, c.__N = void 0, f !== c.__[0] && (s = !0)
					}
				}), !!s && (!i || i.call(this, o, a, l))
			}
		}
		return r.__N || r.__
	}

	function q(e, t) {
		var n = pr(Rn++, 3);
		!B.__s && Ua(n.__H, t) && (n.__ = e, n.i = t, fe.__H.__h.push(n))
	}

	function In(e, t) {
		var n = pr(Rn++, 4);
		!B.__s && Ua(n.__H, t) && (n.__ = e, n.i = t, fe.__h.push(n))
	}

	function Q(e) {
		return kn = 5, be(function() {
			return {
				current: e
			}
		}, [])
	}

	function Eb(e, t, n) {
		kn = 6, In(function() {
			return typeof e == "function" ? (e(t()), function() {
				return e(null)
			}) : e ? (e.current = t(), function() {
				return e.current = null
			}) : void 0
		}, n == null ? n : n.concat(e))
	}

	function be(e, t) {
		var n = pr(Rn++, 7);
		return Ua(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
	}

	function ht(e, t) {
		return kn = 8, be(function() {
			return e
		}, t)
	}

	function Ge(e) {
		var t = fe.context[e.__c],
			n = pr(Rn++, 9);
		return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(fe)), t.props.value) : e.__
	}

	function Sb(e, t) {
		B.useDebugValue && B.useDebugValue(t ? t(e) : e)
	}

	function Tb() {
		for (var e; e = Pc.shift();)
			if (e.__P && e.__H) try {
				e.__H.__h.forEach(wi), e.__H.__h.forEach(Da), e.__H.__h = []
			} catch (t) {
				e.__H.__h = [], B.__e(t, e.__v)
			}
	}
	B.__b = function(e) {
		fe = null, Nc && Nc(e)
	}, B.__r = function(e) {
		Mc && Mc(e), Rn = 0;
		var t = (fe = e.__c).__H;
		t && (Ma === fe ? (t.__h = [], fe.__h = [], t.__.forEach(function(n) {
			n.__N && (n.__ = n.__N), n.__V = Ci, n.__N = n.i = void 0
		})) : (t.__h.forEach(wi), t.__h.forEach(Da), t.__h = [])), Ma = fe
	}, B.diffed = function(e) {
		Lc && Lc(e);
		var t = e.__c;
		t && t.__H && (t.__H.__h.length && (Pc.push(t) !== 1 && Ic === B.requestAnimationFrame || ((Ic = B.requestAnimationFrame) || function(n) {
			var r, i = function() {
					clearTimeout(o), Fc && cancelAnimationFrame(r), setTimeout(n)
				},
				o = setTimeout(i, 100);
			Fc && (r = requestAnimationFrame(i))
		})(Tb)), t.__H.__.forEach(function(n) {
			n.i && (n.__H = n.i), n.__V !== Ci && (n.__ = n.__V), n.i = void 0, n.__V = Ci
		})), Ma = fe = null
	}, B.__c = function(e, t) {
		t.some(function(n) {
			try {
				n.__h.forEach(wi), n.__h = n.__h.filter(function(r) {
					return !r.__ || Da(r)
				})
			} catch (r) {
				t.some(function(i) {
					i.__h && (i.__h = [])
				}), t = [], B.__e(r, n.__v)
			}
		}), Dc && Dc(e, t)
	}, B.unmount = function(e) {
		Uc && Uc(e);
		var t, n = e.__c;
		n && n.__H && (n.__H.__.forEach(function(r) {
			try {
				wi(r)
			} catch (i) {
				t = i
			}
		}), t && B.__e(t, n.__v))
	};
	var Fc = typeof requestAnimationFrame == "function";

	function wi(e) {
		var t = fe,
			n = e.__c;
		typeof n == "function" && (e.__c = void 0, n()), fe = t
	}

	function Da(e) {
		var t = fe;
		e.__c = e.__(), fe = t
	}

	function Ua(e, t) {
		return !e || e.length !== t.length || t.some(function(n, r) {
			return n !== e[r]
		})
	}

	function Bc(e, t) {
		return typeof t == "function" ? t(e) : t
	}
	var Ae = (e => (e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.TIMED_OUT = "TIMED_OUT", e.ERRORED = "ERRORED", e))(Ae || {}),
		nn = (e => (e.BOTTOM_LEFT = "bottomLeft", e.BOTTOM_RIGHT = "bottomRight", e))(nn || {}),
		xe = (e => (e.FLOAT = "float", e.FULL_FRAME = "fullFrame", e))(xe || {}),
		Fa = (e => (e.FEATURE = "feature", e.LAYOUT = "layout", e))(Fa || {}),
		Me = (e => (e.sessionId = "sm-session-id", e.apiKey = "sm-api-key", e.server = "sm-server", e.cameraEnabled = "sm-camera-enabled", e.microphoneEnabled = "sm-microphone-enabled", e.videoMuted = "sm-video-muted", e))(Me || {});

	function Cb(e, t) {
		const [n, r] = de(Ae.DISCONNECTED), [i, o] = de(null), a = Q(null), l = ht(() => {
			var h;
			const f = async () => {
				try {
					if (t) {
						const d = await fetch(t),
							{
								url: m,
								jwt: _
							} = await d.json();
						p.tokenServer = {
							uri: m,
							token: _
						}
					}
					await e.connect(p), r(Ae.CONNECTED)
				} catch (d) {
					d instanceof Error && o(d), s(), r(Ae.ERRORED)
				}
			}, p = {};
			o(null), r(Ae.CONNECTING), (h = a.current) == null || h.load(), f()
		}, [e, t]), u = () => {
			s(), c(), e.disconnect(), r(Ae.DISCONNECTED)
		}, s = () => {
			sessionStorage.removeItem(Me.sessionId), sessionStorage.removeItem(Me.apiKey), sessionStorage.removeItem(Me.server), sessionStorage.removeItem(Me.cameraEnabled), sessionStorage.removeItem(Me.microphoneEnabled), sessionStorage.removeItem(Me.videoMuted)
		}, c = () => {
			!a.current || (a.current.srcObject = null)
		};
		return q(() => {
			const f = () => {
				s(), c(), r(Ae.TIMED_OUT)
			};
			return e.onDisconnectedEvent.addListener(f), () => {
				e.onDisconnectedEvent.removeListener(f)
			}
		}, [e.onDisconnectedEvent]), q(() => {
			const f = p => {
				p.persisted && window.location.reload()
			};
			return window.addEventListener("pageshow", f), () => {
				window.removeEventListener("pageshow", f)
			}
		}, []), {
			connectionStatus: n,
			connectionError: i,
			connect: l,
			disconnect: u,
			videoRef: a,
			cleanupSessionStorage: s
		}
	}

	function wb({
		scene: e,
		videoRef: t
	}) {
		var _;
		const [n, r] = de(!0), [i, o] = de(e.isMicrophoneActive()), [a, l] = de(e.isCameraActive()), u = e == null ? void 0 : e.isConnected(), s = ht(async g => {
			try {
				await e.setMediaDeviceActive({
					microphone: g
				}), o(g), sessionStorage.setItem(Me.microphoneEnabled, g.toString())
			} catch (S) {
				console.error(S)
			}
		}, [e]), c = ht(async g => {
			try {
				await e.setMediaDeviceActive({
					camera: g
				}), l(g), sessionStorage.setItem(Me.cameraEnabled, g.toString())
			} catch (S) {
				console.error(S)
			}
		}, [e]), f = ht(({
			mute: g,
			saveSetting: S
		}) => {
			r(g), t.current && (t.current.muted = g), S && sessionStorage.setItem(Me.videoMuted, g.toString())
		}, [t]), p = ht(async () => {
			var S;
			const g = (S = e.videoElement) == null ? void 0 : S.srcObject;
			if (t.current && g) return t.current.muted = !1, t.current.srcObject = g, t.current.play().then(() => {
				const E = sessionStorage.getItem(Me.videoMuted);
				f(E ? {
					mute: E === "true",
					saveSetting: !1
				} : {
					mute: !1,
					saveSetting: !1
				})
			}).catch(() => {
				f({
					mute: !0,
					saveSetting: !1
				})
			})
		}, [t, f, (_ = e.videoElement) == null ? void 0 : _.srcObject]);
		return q(() => {
			if (u) {
				const g = sessionStorage.getItem(Me.cameraEnabled) === "true",
					S = sessionStorage.getItem(Me.microphoneEnabled) === "true";
				g && c(!0), S && s(!0)
			}
		}, [u, c, s]), q(() => {
			u || (o(!1), l(!1))
		}, [u]), {
			isMicrophoneEnabled: i,
			isCameraEnabled: a,
			isVideoMuted: n,
			toggleMicrophone: () => s(!i),
			toggleCamera: () => c(!a),
			toggleVideoMuted: () => {
				f({
					mute: !n,
					saveSetting: !0
				})
			},
			playVideo: p
		}
	}

	function Ob(e) {
		const [t, n] = de(we.idle);
		return q(() => {
			const r = i => {
				n(i)
			};
			return e.conversation.onConversationStateUpdated.addListener(r), () => {
				e.conversation.onConversationStateUpdated.removeListener(r)
			}
		}, [e]), {
			conversationState: t
		}
	}

	function Ab(e) {
		const [t, n] = de(e.connectionState.getConnectionState());
		return q(() => {
			const r = i => {
				n(i)
			};
			return e.connectionState.onConnectionStateUpdated.addListener(r), () => {
				e.connectionState.onConnectionStateUpdated.removeListener(r)
			}
		}, [e]), {
			connectionState: t
		}
	}

	function xb(e) {
		const [t, n] = de(e);
		return {
			layout: t,
			setLayout: n,
			toggleLayout: () => {
				t !== xe.FLOAT ? n(xe.FLOAT) : n(xe.FULL_FRAME)
			}
		}
	}

	function Rb(e) {
		const [t, n] = de([]);
		return q(() => {
			const r = i => {
				n(i)
			};
			return e.conversation.onCardChanged.addListener(r), e.conversation.autoClearCards = !0, () => {
				e.conversation.onCardChanged.removeListener(r)
			}
		}, [e]), {
			cards: t
		}
	}

	function kb(e) {
		const [t, n] = de({}), r = (i, o) => {
			o.name === Fa.FEATURE && n({
				command: o.arguments[0],
				value: o.arguments[1]
			})
		};
		return q(() => (e.onSpeechMarkerEvents[e.currentPersonaId].addListener(r), () => {
			e.onSpeechMarkerEvents[e.currentPersonaId].removeListener(r)
		}), [e]), {
			featureMarkers: t
		}
	}
	var Ib = 0;

	function C(e, t, n, r, i) {
		var o, a, l = {};
		for (a in t) a == "ref" ? o = t[a] : l[a] = t[a];
		var u = {
			type: e,
			props: l,
			key: n,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --Ib,
			__source: i,
			__self: r
		};
		if (typeof e == "function" && (o = e.defaultProps))
			for (a in o) l[a] === void 0 && (l[a] = o[a]);
		return B.vnode && B.vnode(u), u
	}
	const jc = st(void 0);

	function Vc({
		children: e,
		apiKey: t,
		tokenServer: n,
		initialLayout: r = xe.FLOAT
	}) {
		const i = be(() => new Rc({
				videoElement: document.createElement("video"),
				apiKey: t,
				requestedMediaDevices: {
					microphone: !1,
					camera: !1
				},
				requiredMediaDevices: {
					microphone: !1,
					camera: !1
				},
				sendMetadata: {
					pageUrl: !0
				}
			}), [t]),
			o = new Xr(i, i.currentPersonaId),
			a = E => {
				try {
					o.conversationSend(E, {}, {})
				} catch (w) {
					console.error(w)
				}
			},
			l = E => {
				var w, O;
				try {
					i.setLogging(E), (w = i.contentAwareness) == null || w.setLogging(E), E && (i.setMinLogLevel("debug"), (O = i.contentAwareness) == null || O.setMinLogLevel("debug"))
				} catch (v) {
					console.error(v)
				}
			},
			u = Ob(i),
			s = Ab(i),
			{
				disconnect: c,
				...f
			} = Cb(i, n),
			p = wb({
				scene: i,
				videoRef: f.videoRef
			}),
			{
				layout: h,
				setLayout: d,
				toggleLayout: m
			} = xb(r),
			{
				cards: _
			} = Rb(i),
			{
				featureMarkers: g
			} = kb(i),
			S = () => {
				c(), d(r)
			};
		return C(jc.Provider, {
			value: {
				scene: i,
				persona: o,
				layout: h,
				cards: _,
				featureMarkers: g,
				toggleLayout: m,
				setLayout: d,
				sendTextMessage: a,
				enableDebugLogging: l,
				disconnect: S,
				...f,
				...p,
				...u,
				...s
			},
			children: e
		})
	}

	function wt() {
		const e = Ge(jc);
		if (e === void 0) throw new Error("useSoulMachines must be used within a SoulMachinesProvider");
		return e
	}

	function $c(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function Ba(e, t) {
		for (var n in e)
			if (n !== "__source" && !(n in t)) return !0;
		for (var r in t)
			if (r !== "__source" && e[r] !== t[r]) return !0;
		return !1
	}

	function ja(e) {
		this.props = e
	}

	function Pb(e, t) {
		function n(i) {
			var o = this.props.ref,
				a = o == i.ref;
			return !a && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !a : Ba(this.props, i)
		}

		function r(i) {
			return this.shouldComponentUpdate = n, Ce(e, i)
		}
		return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
	}(ja.prototype = new tt).isPureReactComponent = !0, ja.prototype.shouldComponentUpdate = function(e, t) {
		return Ba(this.props, e) || Ba(this.state, t)
	};
	var zc = B.__b;
	B.__b = function(e) {
		e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), zc && zc(e)
	};
	var Nb = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

	function Va(e) {
		function t(n) {
			var r = $c({}, n);
			return delete r.ref, e(r, n.ref || null)
		}
		return t.$$typeof = Nb, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
	}
	var Hc = function(e, t) {
			return e == null ? null : at(at(e).map(t))
		},
		Mb = {
			map: Hc,
			forEach: Hc,
			count: function(e) {
				return e ? at(e).length : 0
			},
			only: function(e) {
				var t = at(e);
				if (t.length !== 1) throw "Children.only";
				return t[0]
			},
			toArray: at
		},
		Lb = B.__e;
	B.__e = function(e, t, n, r) {
		if (e.then) {
			for (var i, o = t; o = o.__;)
				if ((i = o.__c) && i.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
		}
		Lb(e, t, n, r)
	};
	var Gc = B.unmount;

	function Oi() {
		this.__u = 0, this.t = null, this.__b = null
	}

	function Wc(e) {
		var t = e.__.__c;
		return t && t.__a && t.__a(e)
	}

	function Db(e) {
		var t, n, r;

		function i(o) {
			if (t || (t = e()).then(function(a) {
					n = a.default || a
				}, function(a) {
					r = a
				}), r) throw r;
			if (!n) throw t;
			return Ce(n, o)
		}
		return i.displayName = "Lazy", i.__f = !0, i
	}

	function mr() {
		this.u = null, this.o = null
	}
	B.unmount = function(e) {
		var t = e.__c;
		t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Gc && Gc(e)
	}, (Oi.prototype = new tt).__c = function(e, t) {
		var n = t.__c,
			r = this;
		r.t == null && (r.t = []), r.t.push(n);
		var i = Wc(r.__v),
			o = !1,
			a = function() {
				o || (o = !0, n.__R = null, i ? i(l) : l())
			};
		n.__R = a;
		var l = function() {
				if (!--r.__u) {
					if (r.state.__a) {
						var s = r.state.__a;
						r.__v.__k[0] = function f(p, h, d) {
							return p && (p.__v = null, p.__k = p.__k && p.__k.map(function(m) {
								return f(m, h, d)
							}), p.__c && p.__c.__P === h && (p.__e && d.insertBefore(p.__e, p.__d), p.__c.__e = !0, p.__c.__P = d)), p
						}(s, s.__c.__P, s.__c.__O)
					}
					var c;
					for (r.setState({
							__a: r.__b = null
						}); c = r.t.pop();) c.forceUpdate()
				}
			},
			u = t.__h === !0;
		r.__u++ || u || r.setState({
			__a: r.__b = r.__v.__k[0]
		}), e.then(a, a)
	}, Oi.prototype.componentWillUnmount = function() {
		this.t = []
	}, Oi.prototype.render = function(e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement("div"),
					r = this.__v.__k[0].__c;
				this.__v.__k[0] = function o(a, l, u) {
					return a && (a.__c && a.__c.__H && (a.__c.__H.__.forEach(function(s) {
						typeof s.__c == "function" && s.__c()
					}), a.__c.__H = null), (a = $c({}, a)).__c != null && (a.__c.__P === u && (a.__c.__P = l), a.__c = null), a.__k = a.__k && a.__k.map(function(s) {
						return o(s, l, u)
					})), a
				}(this.__b, n, r.__O = r.__P)
			}
			this.__b = null
		}
		var i = t.__a && Ce(pe, null, e.fallback);
		return i && (i.__h = null), [Ce(pe, null, t.__a ? null : e.children), i]
	};
	var qc = function(e, t, n) {
		if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
			for (n = e.u; n;) {
				for (; n.length > 3;) n.pop()();
				if (n[1] < n[0]) break;
				e.u = n = n[2]
			}
	};

	function Ub(e) {
		return this.getChildContext = function() {
			return e.context
		}, e.children
	}

	function Fb(e) {
		var t = this,
			n = e.i;
		t.componentWillUnmount = function() {
			pn(null, t.l), t.l = null, t.i = null
		}, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
			nodeType: 1,
			parentNode: n,
			childNodes: [],
			appendChild: function(r) {
				this.childNodes.push(r), t.i.appendChild(r)
			},
			insertBefore: function(r, i) {
				this.childNodes.push(r), t.i.appendChild(r)
			},
			removeChild: function(r) {
				this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r)
			}
		}), pn(Ce(Ub, {
			context: t.context
		}, e.__v), t.l)) : t.l && t.componentWillUnmount()
	}

	function Kc(e, t) {
		var n = Ce(Fb, {
			__v: e,
			i: t
		});
		return n.containerInfo = t, n
	}(mr.prototype = new tt).__a = function(e) {
		var t = this,
			n = Wc(t.__v),
			r = t.o.get(e);
		return r[0]++,
			function(i) {
				var o = function() {
					t.props.revealOrder ? (r.push(i), qc(t, e, r)) : i()
				};
				n ? n(o) : o()
			}
	}, mr.prototype.render = function(e) {
		this.u = null, this.o = new Map;
		var t = at(e.children);
		e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
		for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
		return e.children
	}, mr.prototype.componentDidUpdate = mr.prototype.componentDidMount = function() {
		var e = this;
		this.o.forEach(function(t, n) {
			qc(e, n, t)
		})
	};
	var Xc = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
		Bb = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		jb = typeof document < "u",
		Vb = function(e) {
			return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
		};

	function $b(e, t, n) {
		return t.__k == null && (t.textContent = ""), pn(e, t), typeof n == "function" && n(), e ? e.__c : null
	}

	function zb(e, t, n) {
		return Lo(e, t), typeof n == "function" && n(), e ? e.__c : null
	}
	tt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
		Object.defineProperty(tt.prototype, e, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + e]
			},
			set: function(t) {
				Object.defineProperty(this, e, {
					configurable: !0,
					writable: !0,
					value: t
				})
			}
		})
	});
	var Yc = B.event;

	function Hb() {}

	function Gb() {
		return this.cancelBubble
	}

	function Wb() {
		return this.defaultPrevented
	}
	B.event = function(e) {
		return Yc && (e = Yc(e)), e.persist = Hb, e.isPropagationStopped = Gb, e.isDefaultPrevented = Wb, e.nativeEvent = e
	};
	var Qc, Jc = {
			configurable: !0,
			get: function() {
				return this.class
			}
		},
		Zc = B.vnode;
	B.vnode = function(e) {
		var t = e.type,
			n = e.props,
			r = n;
		if (typeof t == "string") {
			var i = t.indexOf("-") === -1;
			for (var o in r = {}, n) {
				var a = n[o];
				jb && o === "children" && t === "noscript" || o === "value" && "defaultValue" in n && a == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && a === !0 ? a = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Vb(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Bb.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = a)
			}
			t == "select" && r.multiple && Array.isArray(r.value) && (r.value = at(n.children).forEach(function(l) {
				l.props.selected = r.value.indexOf(l.props.value) != -1
			})), t == "select" && r.defaultValue != null && (r.value = at(n.children).forEach(function(l) {
				l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value
			})), e.props = r, n.class != n.className && (Jc.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Jc))
		}
		e.$$typeof = Xc, Zc && Zc(e)
	};
	var ef = B.__r;
	B.__r = function(e) {
		ef && ef(e), Qc = e.__c
	};
	var qb = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function(e) {
					return Qc.__n[e.__c].props.value
				}
			}
		}
	};

	function Kb(e) {
		return Ce.bind(null, e)
	}

	function $a(e) {
		return !!e && e.$$typeof === Xc
	}

	function tf(e) {
		return $a(e) ? Gl.apply(null, arguments) : e
	}

	function Xb(e) {
		return !!e.__k && (pn(null, e), !0)
	}

	function Yb(e) {
		return e && (e.base || e.nodeType === 1 && e) || null
	}
	var nf = function(e, t) {
			return e(t)
		},
		Qb = function(e, t) {
			return e(t)
		};

	function rf(e) {
		e()
	}

	function Jb(e) {
		return e
	}

	function Zb() {
		return [!1, rf]
	}

	function eE(e, t) {
		var n = t(),
			r = de({
				s: {
					__: n,
					h: t
				}
			}),
			i = r[0].s,
			o = r[1];
		return In(function() {
			i.__ = n, i.h = t, i.__ !== t() && o({
				s: i
			})
		}, [e, n, t]), q(function() {
			return i.__ !== i.h() && o({
				s: i
			}), e(function() {
				i.__ !== i.h() && o({
					s: i
				})
			})
		}, [e]), n
	}
	const ie = {
		useState: de,
		useReducer: La,
		useEffect: q,
		useLayoutEffect: In,
		useInsertionEffect: In,
		useTransition: Zb,
		useDeferredValue: Jb,
		useSyncExternalStore: eE,
		startTransition: rf,
		useRef: Q,
		useImperativeHandle: Eb,
		useMemo: be,
		useCallback: ht,
		useContext: Ge,
		useDebugValue: Sb,
		version: "17.0.2",
		Children: Mb,
		render: $b,
		hydrate: zb,
		unmountComponentAtNode: Xb,
		createPortal: Kc,
		createElement: Ce,
		createContext: st,
		createFactory: Kb,
		cloneElement: tf,
		createRef: Po,
		Fragment: pe,
		isValidElement: $a,
		findDOMNode: Yb,
		Component: tt,
		PureComponent: ja,
		memo: Pb,
		forwardRef: Va,
		flushSync: Qb,
		unstable_batchedUpdates: nf,
		StrictMode: pe,
		Suspense: Oi,
		SuspenseList: mr,
		lazy: Db,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qb
	};

	function za() {
		return za = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}, za.apply(this, arguments)
	}
	var of = function(e) {
		var t = Q(e);
		return t.current = e, t
	}, tE = "\u{1F4A1} react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill", nE = "\u{1F4A1} react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement", rE = function(t, n) {
		var r = "",
			i = -1;
		return Object.keys(t).forEach(function(o) {
			var a = t[o];
			n >= a && a > i && (r = o, i = a)
		}), r
	}, iE = function(t) {
		var n = t === void 0 ? {} : t,
			r = n.useBorderBoxSize,
			i = n.breakpoints,
			o = n.updateOnBreakpointChange,
			a = n.shouldUpdate,
			l = n.onResize,
			u = n.polyfill,
			s = de({
				currentBreakpoint: "",
				width: 0,
				height: 0
			}),
			c = s[0],
			f = s[1],
			p = Q({}),
			h = Q(),
			d = Q(),
			m = Q(!1),
			_ = Q(),
			g = of (l),
			S = of (a),
			E = ht(function() {
				d.current && d.current.disconnect()
			}, []),
			w = ht(function(O) {
				O && O !== _.current && (E(), _.current = O), d.current && _.current && d.current.observe(_.current)
			}, [E]);
		return q(function() {
			if ((!("ResizeObserver" in window) || !("ResizeObserverEntry" in window)) && !u) return console.error(tE),
				function() {
					return null
				};
			var O = null;
			return d.current = new(u || ResizeObserver)(function(v) {
					var A = v[0];
					O = requestAnimationFrame(function() {
						var P = A.contentBoxSize,
							D = A.borderBoxSize,
							U = A.contentRect,
							R = P;
						r && (D ? R = D : m.current || (console.warn(nE), m.current = !0)), R = Array.isArray(R) ? R[0] : R;
						var M = R ? R.inlineSize : U.width,
							j = R ? R.blockSize : U.height;
						if (!(M === p.current.width && j === p.current.height)) {
							p.current = {
								width: M,
								height: j
							};
							var L = {
								currentBreakpoint: "",
								width: M,
								height: j,
								entry: A,
								observe: w,
								unobserve: E
							};
							i ? (L.currentBreakpoint = rE(i, M), L.currentBreakpoint !== h.current && (g.current && g.current(L), h.current = L.currentBreakpoint)) : g.current && g.current(L);
							var F = {
								currentBreakpoint: L.currentBreakpoint,
								width: M,
								height: j,
								entry: A
							};
							if (!(S.current && !S.current(F))) {
								if (!S.current && i && o) {
									f(function(T) {
										return T.currentBreakpoint !== F.currentBreakpoint ? F : T
									});
									return
								}
								f(F)
							}
						}
					})
				}), w(),
				function() {
					E(), O && cancelAnimationFrame(O)
				}
		}, [JSON.stringify(i), r, w, E, o]), za({}, c, {
			observe: w,
			unobserve: E
		})
	};
	let Ha = _r();
	const G = e => gr(e, Ha);
	let Ga = _r();
	G.write = e => gr(e, Ga);
	let Ai = _r();
	G.onStart = e => gr(e, Ai);
	let Wa = _r();
	G.onFrame = e => gr(e, Wa);
	let qa = _r();
	G.onFinish = e => gr(e, qa);
	let Pn = [];
	G.setTimeout = (e, t) => {
		let n = G.now() + t,
			r = () => {
				let o = Pn.findIndex(a => a.cancel == r);
				~o && Pn.splice(o, 1), Dt -= ~o ? 1 : 0
			},
			i = {
				time: n,
				handler: e,
				cancel: r
			};
		return Pn.splice(af(n), 0, i), Dt += 1, sf(), i
	};
	let af = e => ~(~Pn.findIndex(t => t.time > e) || ~Pn.length);
	G.cancel = e => {
		Ai.delete(e), Wa.delete(e), qa.delete(e), Ha.delete(e), Ga.delete(e)
	}, G.sync = e => {
		Xa = !0, G.batchedUpdates(e), Xa = !1
	}, G.throttle = e => {
		let t;

		function n() {
			try {
				e(...t)
			} finally {
				t = null
			}
		}

		function r(...i) {
			t = i, G.onStart(n)
		}
		return r.handler = e, r.cancel = () => {
			Ai.delete(n), t = null
		}, r
	};
	let Ka = typeof window < "u" ? window.requestAnimationFrame : () => {};
	G.use = e => Ka = e, G.now = typeof performance < "u" ? () => performance.now() : Date.now, G.batchedUpdates = e => e(), G.catch = console.error, G.frameLoop = "always", G.advance = () => {
		G.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : uf()
	};
	let Lt = -1,
		Dt = 0,
		Xa = !1;

	function gr(e, t) {
		Xa ? (t.delete(e), e(0)) : (t.add(e), sf())
	}

	function sf() {
		Lt < 0 && (Lt = 0, G.frameLoop !== "demand" && Ka(lf))
	}

	function oE() {
		Lt = -1
	}

	function lf() {
		~Lt && (Ka(lf), G.batchedUpdates(uf))
	}

	function uf() {
		let e = Lt;
		Lt = G.now();
		let t = af(Lt);
		if (t && (cf(Pn.splice(0, t), n => n.handler()), Dt -= t), !Dt) {
			oE();
			return
		}
		Ai.flush(), Ha.flush(e ? Math.min(64, Lt - e) : 16.667), Wa.flush(), Ga.flush(), qa.flush()
	}

	function _r() {
		let e = new Set,
			t = e;
		return {
			add(n) {
				Dt += t == e && !e.has(n) ? 1 : 0, e.add(n)
			},
			delete(n) {
				return Dt -= t == e && e.has(n) ? 1 : 0, e.delete(n)
			},
			flush(n) {
				t.size && (e = new Set, Dt -= t.size, cf(t, r => r(n) && e.add(r)), Dt += e.size, t = e)
			}
		}
	}

	function cf(e, t) {
		e.forEach(n => {
			try {
				t(n)
			} catch (r) {
				G.catch(r)
			}
		})
	}

	function Ya() {}
	const aE = (e, t, n) => Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			configurable: !0
		}),
		k = {
			arr: Array.isArray,
			obj: e => !!e && e.constructor.name === "Object",
			fun: e => typeof e == "function",
			str: e => typeof e == "string",
			num: e => typeof e == "number",
			und: e => e === void 0
		};

	function Ot(e, t) {
		if (k.arr(e)) {
			if (!k.arr(t) || e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++)
				if (e[n] !== t[n]) return !1;
			return !0
		}
		return e === t
	}
	const z = (e, t) => e.forEach(t);

	function pt(e, t, n) {
		if (k.arr(e)) {
			for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
			return
		}
		for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
	}
	const ke = e => k.und(e) ? [] : k.arr(e) ? e : [e];

	function vr(e, t) {
		if (e.size) {
			const n = Array.from(e);
			e.clear(), z(n, t)
		}
	}
	const yr = (e, ...t) => vr(e, n => n(...t)),
		Qa = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
	let Ja, ff, Ut = null,
		df = !1,
		Za = Ya;
	var mt = Object.freeze({
		__proto__: null,
		get createStringInterpolator() {
			return Ja
		},
		get to() {
			return ff
		},
		get colors() {
			return Ut
		},
		get skipAnimation() {
			return df
		},
		get willAdvance() {
			return Za
		},
		assign: e => {
			e.to && (ff = e.to), e.now && (G.now = e.now), e.colors !== void 0 && (Ut = e.colors), e.skipAnimation != null && (df = e.skipAnimation), e.createStringInterpolator && (Ja = e.createStringInterpolator), e.requestAnimationFrame && G.use(e.requestAnimationFrame), e.batchedUpdates && (G.batchedUpdates = e.batchedUpdates), e.willAdvance && (Za = e.willAdvance), e.frameLoop && (G.frameLoop = e.frameLoop)
		}
	});
	const br = new Set;
	let We = [],
		es = [],
		xi = 0;
	const Ri = {
		get idle() {
			return !br.size && !We.length
		},
		start(e) {
			xi > e.priority ? (br.add(e), G.onStart(sE)) : (hf(e), G(ts))
		},
		advance: ts,
		sort(e) {
			if (xi) G.onFrame(() => Ri.sort(e));
			else {
				const t = We.indexOf(e);
				~t && (We.splice(t, 1), pf(e))
			}
		},
		clear() {
			We = [], br.clear()
		}
	};

	function sE() {
		br.forEach(hf), br.clear(), G(ts)
	}

	function hf(e) {
		We.includes(e) || pf(e)
	}

	function pf(e) {
		We.splice(lE(We, t => t.priority > e.priority), 0, e)
	}

	function ts(e) {
		const t = es;
		for (let n = 0; n < We.length; n++) {
			const r = We[n];
			xi = r.priority, r.idle || (Za(r), r.advance(e), r.idle || t.push(r))
		}
		return xi = 0, es = We, es.length = 0, We = t, We.length > 0
	}

	function lE(e, t) {
		const n = e.findIndex(t);
		return n < 0 ? e.length : n
	}
	const uE = {
			transparent: 0,
			aliceblue: 4042850303,
			antiquewhite: 4209760255,
			aqua: 16777215,
			aquamarine: 2147472639,
			azure: 4043309055,
			beige: 4126530815,
			bisque: 4293182719,
			black: 255,
			blanchedalmond: 4293643775,
			blue: 65535,
			blueviolet: 2318131967,
			brown: 2771004159,
			burlywood: 3736635391,
			burntsienna: 3934150143,
			cadetblue: 1604231423,
			chartreuse: 2147418367,
			chocolate: 3530104575,
			coral: 4286533887,
			cornflowerblue: 1687547391,
			cornsilk: 4294499583,
			crimson: 3692313855,
			cyan: 16777215,
			darkblue: 35839,
			darkcyan: 9145343,
			darkgoldenrod: 3095792639,
			darkgray: 2846468607,
			darkgreen: 6553855,
			darkgrey: 2846468607,
			darkkhaki: 3182914559,
			darkmagenta: 2332068863,
			darkolivegreen: 1433087999,
			darkorange: 4287365375,
			darkorchid: 2570243327,
			darkred: 2332033279,
			darksalmon: 3918953215,
			darkseagreen: 2411499519,
			darkslateblue: 1211993087,
			darkslategray: 793726975,
			darkslategrey: 793726975,
			darkturquoise: 13554175,
			darkviolet: 2483082239,
			deeppink: 4279538687,
			deepskyblue: 12582911,
			dimgray: 1768516095,
			dimgrey: 1768516095,
			dodgerblue: 512819199,
			firebrick: 2988581631,
			floralwhite: 4294635775,
			forestgreen: 579543807,
			fuchsia: 4278255615,
			gainsboro: 3705462015,
			ghostwhite: 4177068031,
			gold: 4292280575,
			goldenrod: 3668254975,
			gray: 2155905279,
			green: 8388863,
			greenyellow: 2919182335,
			grey: 2155905279,
			honeydew: 4043305215,
			hotpink: 4285117695,
			indianred: 3445382399,
			indigo: 1258324735,
			ivory: 4294963455,
			khaki: 4041641215,
			lavender: 3873897215,
			lavenderblush: 4293981695,
			lawngreen: 2096890111,
			lemonchiffon: 4294626815,
			lightblue: 2916673279,
			lightcoral: 4034953471,
			lightcyan: 3774873599,
			lightgoldenrodyellow: 4210742015,
			lightgray: 3553874943,
			lightgreen: 2431553791,
			lightgrey: 3553874943,
			lightpink: 4290167295,
			lightsalmon: 4288707327,
			lightseagreen: 548580095,
			lightskyblue: 2278488831,
			lightslategray: 2005441023,
			lightslategrey: 2005441023,
			lightsteelblue: 2965692159,
			lightyellow: 4294959359,
			lime: 16711935,
			limegreen: 852308735,
			linen: 4210091775,
			magenta: 4278255615,
			maroon: 2147483903,
			mediumaquamarine: 1724754687,
			mediumblue: 52735,
			mediumorchid: 3126187007,
			mediumpurple: 2473647103,
			mediumseagreen: 1018393087,
			mediumslateblue: 2070474495,
			mediumspringgreen: 16423679,
			mediumturquoise: 1221709055,
			mediumvioletred: 3340076543,
			midnightblue: 421097727,
			mintcream: 4127193855,
			mistyrose: 4293190143,
			moccasin: 4293178879,
			navajowhite: 4292783615,
			navy: 33023,
			oldlace: 4260751103,
			olive: 2155872511,
			olivedrab: 1804477439,
			orange: 4289003775,
			orangered: 4282712319,
			orchid: 3664828159,
			palegoldenrod: 4008225535,
			palegreen: 2566625535,
			paleturquoise: 2951671551,
			palevioletred: 3681588223,
			papayawhip: 4293907967,
			peachpuff: 4292524543,
			peru: 3448061951,
			pink: 4290825215,
			plum: 3718307327,
			powderblue: 2967529215,
			purple: 2147516671,
			rebeccapurple: 1714657791,
			red: 4278190335,
			rosybrown: 3163525119,
			royalblue: 1097458175,
			saddlebrown: 2336560127,
			salmon: 4202722047,
			sandybrown: 4104413439,
			seagreen: 780883967,
			seashell: 4294307583,
			sienna: 2689740287,
			silver: 3233857791,
			skyblue: 2278484991,
			slateblue: 1784335871,
			slategray: 1887473919,
			slategrey: 1887473919,
			snow: 4294638335,
			springgreen: 16744447,
			steelblue: 1182971135,
			tan: 3535047935,
			teal: 8421631,
			thistle: 3636451583,
			tomato: 4284696575,
			turquoise: 1088475391,
			violet: 4001558271,
			wheat: 4125012991,
			white: 4294967295,
			whitesmoke: 4126537215,
			yellow: 4294902015,
			yellowgreen: 2597139199
		},
		rt = "[-+]?\\d*\\.?\\d+",
		ki = rt + "%";

	function Ii(...e) {
		return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
	}
	const cE = new RegExp("rgb" + Ii(rt, rt, rt)),
		fE = new RegExp("rgba" + Ii(rt, rt, rt, rt)),
		dE = new RegExp("hsl" + Ii(rt, ki, ki)),
		hE = new RegExp("hsla" + Ii(rt, ki, ki, rt)),
		pE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		mE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		gE = /^#([0-9a-fA-F]{6})$/,
		_E = /^#([0-9a-fA-F]{8})$/;

	function vE(e) {
		let t;
		return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = gE.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ut && Ut[e] !== void 0 ? Ut[e] : (t = cE.exec(e)) ? (Nn(t[1]) << 24 | Nn(t[2]) << 16 | Nn(t[3]) << 8 | 255) >>> 0 : (t = fE.exec(e)) ? (Nn(t[1]) << 24 | Nn(t[2]) << 16 | Nn(t[3]) << 8 | _f(t[4])) >>> 0 : (t = pE.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = _E.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = mE.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = dE.exec(e)) ? (mf(gf(t[1]), Pi(t[2]), Pi(t[3])) | 255) >>> 0 : (t = hE.exec(e)) ? (mf(gf(t[1]), Pi(t[2]), Pi(t[3])) | _f(t[4])) >>> 0 : null
	}

	function ns(e, t, n) {
		return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
	}

	function mf(e, t, n) {
		const r = n < .5 ? n * (1 + t) : n + t - n * t,
			i = 2 * n - r,
			o = ns(i, r, e + 1 / 3),
			a = ns(i, r, e),
			l = ns(i, r, e - 1 / 3);
		return Math.round(o * 255) << 24 | Math.round(a * 255) << 16 | Math.round(l * 255) << 8
	}

	function Nn(e) {
		const t = parseInt(e, 10);
		return t < 0 ? 0 : t > 255 ? 255 : t
	}

	function gf(e) {
		return (parseFloat(e) % 360 + 360) % 360 / 360
	}

	function _f(e) {
		const t = parseFloat(e);
		return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
	}

	function Pi(e) {
		const t = parseFloat(e);
		return t < 0 ? 0 : t > 100 ? 1 : t / 100
	}

	function vf(e) {
		let t = vE(e);
		if (t === null) return e;
		t = t || 0;
		let n = (t & 4278190080) >>> 24,
			r = (t & 16711680) >>> 16,
			i = (t & 65280) >>> 8,
			o = (t & 255) / 255;
		return `rgba(${n}, ${r}, ${i}, ${o})`
	}
	const Er = (e, t, n) => {
		if (k.fun(e)) return e;
		if (k.arr(e)) return Er({
			range: e,
			output: t,
			extrapolate: n
		});
		if (k.str(e.output[0])) return Ja(e);
		const r = e,
			i = r.output,
			o = r.range || [0, 1],
			a = r.extrapolateLeft || r.extrapolate || "extend",
			l = r.extrapolateRight || r.extrapolate || "extend",
			u = r.easing || (s => s);
		return s => {
			const c = bE(s, o);
			return yE(s, o[c], o[c + 1], i[c], i[c + 1], u, a, l, r.map)
		}
	};

	function yE(e, t, n, r, i, o, a, l, u) {
		let s = u ? u(e) : e;
		if (s < t) {
			if (a === "identity") return s;
			a === "clamp" && (s = t)
		}
		if (s > n) {
			if (l === "identity") return s;
			l === "clamp" && (s = n)
		}
		return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? s = -s : n === 1 / 0 ? s = s - t : s = (s - t) / (n - t), s = o(s), r === -1 / 0 ? s = -s : i === 1 / 0 ? s = s + r : s = s * (i - r) + r, s)
	}

	function bE(e, t) {
		for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
		return n - 1
	}

	function rs() {
		return rs = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}, rs.apply(this, arguments)
	}
	const Mn = Symbol.for("FluidValue.get"),
		rn = Symbol.for("FluidValue.observers"),
		qe = e => Boolean(e && e[Mn]),
		Le = e => e && e[Mn] ? e[Mn]() : e,
		yf = e => e[rn] || null;

	function EE(e, t) {
		e.eventObserved ? e.eventObserved(t) : e(t)
	}

	function Sr(e, t) {
		let n = e[rn];
		n && n.forEach(r => {
			EE(r, t)
		})
	}
	class bf {
		constructor(t) {
			if (this[Mn] = void 0, this[rn] = void 0, !t && !(t = this.get)) throw Error("Unknown getter");
			SE(this, t)
		}
	}
	const SE = (e, t) => Ef(e, Mn, t);

	function Ln(e, t) {
		if (e[Mn]) {
			let n = e[rn];
			n || Ef(e, rn, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
		}
		return t
	}

	function Tr(e, t) {
		let n = e[rn];
		if (n && n.has(t)) {
			const r = n.size - 1;
			r ? n.delete(t) : e[rn] = null, e.observerRemoved && e.observerRemoved(r, t)
		}
	}
	const Ef = (e, t, n) => Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			configurable: !0
		}),
		Ni = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		TE = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
		Sf = new RegExp(`(${Ni.source})(%|[a-z]+)`, "i"),
		CE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
		Mi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
		Tf = e => {
			const [t, n] = wE(e);
			if (!t || Qa()) return e;
			const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
			if (r) return r.trim();
			if (n && n.startsWith("--")) {
				const i = window.getComputedStyle(document.documentElement).getPropertyValue(n);
				return i || e
			} else {
				if (n && Mi.test(n)) return Tf(n);
				if (n) return n
			}
			return e
		},
		wE = e => {
			const t = Mi.exec(e);
			if (!t) return [, ];
			const [, n, r] = t;
			return [n, r]
		};
	let is;
	const OE = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
		Cf = e => {
			is || (is = Ut ? new RegExp(`(${Object.keys(Ut).join("|")})(?!\\w)`, "g") : /^\b$/);
			const t = e.output.map(o => Le(o).replace(Mi, Tf).replace(TE, vf).replace(is, vf)),
				n = t.map(o => o.match(Ni).map(Number)),
				i = n[0].map((o, a) => n.map(l => {
					if (!(a in l)) throw Error('The arity of each "output" value must be equal');
					return l[a]
				})).map(o => Er(rs({}, e, {
					output: o
				})));
			return o => {
				var a;
				const l = !Sf.test(t[0]) && ((a = t.find(s => Sf.test(s))) == null ? void 0 : a.replace(Ni, ""));
				let u = 0;
				return t[0].replace(Ni, () => `${i[u++](o)}${l || ""}`).replace(CE, OE)
			}
		},
		os = "react-spring: ",
		wf = e => {
			const t = e;
			let n = !1;
			if (typeof t != "function") throw new TypeError(`${os}once requires a function parameter`);
			return (...r) => {
				n || (t(...r), n = !0)
			}
		},
		AE = wf(console.warn);

	function xE() {
		AE(`${os}The "interpolate" function is deprecated in v9 (use "to" instead)`)
	}
	const RE = wf(console.warn);

	function kE() {
		RE(`${os}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
	}

	function Li(e) {
		return k.str(e) && (e[0] == "#" || /\d/.test(e) || !Qa() && Mi.test(e) || e in (Ut || {}))
	}
	const on = Qa() ? q : In,
		IE = () => {
			const e = Q(!1);
			return on(() => (e.current = !0, () => {
				e.current = !1
			}), []), e
		};

	function as() {
		const e = de()[1],
			t = IE();
		return () => {
			t.current && e(Math.random())
		}
	}

	function PE(e, t) {
		const [n] = de(() => ({
			inputs: t,
			result: e()
		})), r = Q(), i = r.current;
		let o = i;
		return o ? Boolean(t && o.inputs && NE(t, o.inputs)) || (o = {
			inputs: t,
			result: e()
		}) : o = n, q(() => {
			r.current = o, i == n && (n.inputs = n.result = void 0)
		}, [o]), o.result
	}

	function NE(e, t) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}
	const ss = e => q(e, ME),
		ME = [];

	function ls(e) {
		const t = Q();
		return q(() => {
			t.current = e
		}), t.current
	}
	const Cr = Symbol.for("Animated:node"),
		LE = e => !!e && e[Cr] === e,
		gt = e => e && e[Cr],
		us = (e, t) => aE(e, Cr, t),
		Di = e => e && e[Cr] && e[Cr].getPayload();
	class Of {
		constructor() {
			this.payload = void 0, us(this, this)
		}
		getPayload() {
			return this.payload || []
		}
	}
	class Dn extends Of {
		constructor(t) {
			super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, k.num(this._value) && (this.lastPosition = this._value)
		}
		static create(t) {
			return new Dn(t)
		}
		getPayload() {
			return [this]
		}
		getValue() {
			return this._value
		}
		setValue(t, n) {
			return k.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0)
		}
		reset() {
			const {
				done: t
			} = this;
			this.done = !1, k.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null)
		}
	}
	class Un extends Dn {
		constructor(t) {
			super(0), this._string = null, this._toString = void 0, this._toString = Er({
				output: [t, t]
			})
		}
		static create(t) {
			return new Un(t)
		}
		getValue() {
			let t = this._string;
			return t == null ? this._string = this._toString(this._value) : t
		}
		setValue(t) {
			if (k.str(t)) {
				if (t == this._string) return !1;
				this._string = t, this._value = 1
			} else if (super.setValue(t)) this._string = null;
			else return !1;
			return !0
		}
		reset(t) {
			t && (this._toString = Er({
				output: [this.getValue(), t]
			})), this._value = 0, super.reset()
		}
	}
	const Ui = {
		dependencies: null
	};
	class Fi extends Of {
		constructor(t) {
			super(), this.source = t, this.setValue(t)
		}
		getValue(t) {
			const n = {};
			return pt(this.source, (r, i) => {
				LE(r) ? n[i] = r.getValue(t) : qe(r) ? n[i] = Le(r) : t || (n[i] = r)
			}), n
		}
		setValue(t) {
			this.source = t, this.payload = this._makePayload(t)
		}
		reset() {
			this.payload && z(this.payload, t => t.reset())
		}
		_makePayload(t) {
			if (t) {
				const n = new Set;
				return pt(t, this._addToPayload, n), Array.from(n)
			}
		}
		_addToPayload(t) {
			Ui.dependencies && qe(t) && Ui.dependencies.add(t);
			const n = Di(t);
			n && z(n, r => this.add(r))
		}
	}
	class cs extends Fi {
		constructor(t) {
			super(t)
		}
		static create(t) {
			return new cs(t)
		}
		getValue() {
			return this.source.map(t => t.getValue())
		}
		setValue(t) {
			const n = this.getPayload();
			return t.length == n.length ? n.map((r, i) => r.setValue(t[i])).some(Boolean) : (super.setValue(t.map(DE)), !0)
		}
	}

	function DE(e) {
		return (Li(e) ? Un : Dn).create(e)
	}

	function fs(e) {
		const t = gt(e);
		return t ? t.constructor : k.arr(e) ? cs : Li(e) ? Un : Dn
	}

	function Bi() {
		return Bi = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}, Bi.apply(this, arguments)
	}
	const Af = (e, t) => {
		const n = !k.fun(e) || e.prototype && e.prototype.isReactComponent;
		return Va((r, i) => {
			const o = Q(null),
				a = n && ht(d => {
					o.current = BE(i, d)
				}, [i]),
				[l, u] = FE(r, t),
				s = as(),
				c = () => {
					const d = o.current;
					if (n && !d) return;
					(d ? t.applyAnimatedValues(d, l.getValue(!0)) : !1) === !1 && s()
				},
				f = new UE(c, u),
				p = Q();
			on(() => (p.current = f, z(u, d => Ln(d, f)), () => {
				p.current && (z(p.current.deps, d => Tr(d, p.current)), G.cancel(p.current.update))
			})), q(c, []), ss(() => () => {
				const d = p.current;
				z(d.deps, m => Tr(m, d))
			});
			const h = t.getComponentProps(l.getValue());
			return Ce(e, Bi({}, h, {
				ref: a
			}))
		})
	};
	class UE {
		constructor(t, n) {
			this.update = t, this.deps = n
		}
		eventObserved(t) {
			t.type == "change" && G.write(this.update)
		}
	}

	function FE(e, t) {
		const n = new Set;
		return Ui.dependencies = n, e.style && (e = Bi({}, e, {
			style: t.createAnimatedStyle(e.style)
		})), e = new Fi(e), Ui.dependencies = null, [e, n]
	}

	function BE(e, t) {
		return e && (k.fun(e) ? e(t) : e.current = t), t
	}
	const xf = Symbol.for("AnimatedComponent"),
		jE = (e, {
			applyAnimatedValues: t = () => !1,
			createAnimatedStyle: n = i => new Fi(i),
			getComponentProps: r = i => i
		} = {}) => {
			const i = {
					applyAnimatedValues: t,
					createAnimatedStyle: n,
					getComponentProps: r
				},
				o = a => {
					const l = Rf(a) || "Anonymous";
					return k.str(a) ? a = o[a] || (o[a] = Af(a, i)) : a = a[xf] || (a[xf] = Af(a, i)), a.displayName = `Animated(${l})`, a
				};
			return pt(e, (a, l) => {
				k.arr(e) && (l = Rf(a)), o[l] = o(a)
			}), {
				animated: o
			}
		},
		Rf = e => k.str(e) ? e : e && k.str(e.displayName) ? e.displayName : k.fun(e) && e.name || null;

	function he() {
		return he = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		}, he.apply(this, arguments)
	}

	function De(e, ...t) {
		return k.fun(e) ? e(...t) : e
	}
	const wr = (e, t) => e === !0 || !!(t && e && (k.fun(e) ? e(t) : ke(e).includes(t))),
		kf = (e, t) => k.obj(e) ? t && e[t] : e,
		If = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
		VE = e => e,
		ji = (e, t = VE) => {
			let n = $E;
			e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
			const r = {};
			for (const i of n) {
				const o = t(e[i], i);
				k.und(o) || (r[i] = o)
			}
			return r
		},
		$E = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
		zE = {
			config: 1,
			from: 1,
			to: 1,
			ref: 1,
			loop: 1,
			reset: 1,
			pause: 1,
			cancel: 1,
			reverse: 1,
			immediate: 1,
			default: 1,
			delay: 1,
			onProps: 1,
			onStart: 1,
			onChange: 1,
			onPause: 1,
			onResume: 1,
			onRest: 1,
			onResolve: 1,
			items: 1,
			trail: 1,
			sort: 1,
			expires: 1,
			initial: 1,
			enter: 1,
			update: 1,
			leave: 1,
			children: 1,
			onDestroyed: 1,
			keys: 1,
			callId: 1,
			parentId: 1
		};

	function HE(e) {
		const t = {};
		let n = 0;
		if (pt(e, (r, i) => {
				zE[i] || (t[i] = r, n++)
			}), n) return t
	}

	function ds(e) {
		const t = HE(e);
		if (t) {
			const n = {
				to: t
			};
			return pt(e, (r, i) => i in t || (n[i] = r)), n
		}
		return he({}, e)
	}

	function Or(e) {
		return e = Le(e), k.arr(e) ? e.map(Or) : Li(e) ? mt.createStringInterpolator({
			range: [0, 1],
			output: [e, e]
		})(1) : e
	}

	function Pf(e) {
		for (const t in e) return !0;
		return !1
	}

	function hs(e) {
		return k.fun(e) || k.arr(e) && k.obj(e[0])
	}

	function ps(e, t) {
		var n;
		(n = e.ref) == null || n.delete(e), t == null || t.delete(e)
	}

	function Nf(e, t) {
		if (t && e.ref !== t) {
			var n;
			(n = e.ref) == null || n.delete(e), t.add(e), e.ref = t
		}
	}
	const Vi = {
			default: {
				tension: 170,
				friction: 26
			},
			gentle: {
				tension: 120,
				friction: 14
			},
			wobbly: {
				tension: 180,
				friction: 12
			},
			stiff: {
				tension: 210,
				friction: 20
			},
			slow: {
				tension: 280,
				friction: 60
			},
			molasses: {
				tension: 280,
				friction: 120
			}
		},
		$i = 1.70158,
		zi = $i * 1.525,
		Mf = $i + 1,
		Lf = 2 * Math.PI / 3,
		Df = 2 * Math.PI / 4.5,
		Hi = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
		GE = {
			linear: e => e,
			easeInQuad: e => e * e,
			easeOutQuad: e => 1 - (1 - e) * (1 - e),
			easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
			easeInCubic: e => e * e * e,
			easeOutCubic: e => 1 - Math.pow(1 - e, 3),
			easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
			easeInQuart: e => e * e * e * e,
			easeOutQuart: e => 1 - Math.pow(1 - e, 4),
			easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
			easeInQuint: e => e * e * e * e * e,
			easeOutQuint: e => 1 - Math.pow(1 - e, 5),
			easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
			easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
			easeOutSine: e => Math.sin(e * Math.PI / 2),
			easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
			easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
			easeOutExpo: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
			easeInOutExpo: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
			easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
			easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
			easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
			easeInBack: e => Mf * e * e * e - $i * e * e,
			easeOutBack: e => 1 + Mf * Math.pow(e - 1, 3) + $i * Math.pow(e - 1, 2),
			easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((zi + 1) * 2 * e - zi) / 2 : (Math.pow(2 * e - 2, 2) * ((zi + 1) * (e * 2 - 2) + zi) + 2) / 2,
			easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Lf),
			easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * Lf) + 1,
			easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Df)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Df) / 2 + 1,
			easeInBounce: e => 1 - Hi(1 - e),
			easeOutBounce: Hi,
			easeInOutBounce: e => e < .5 ? (1 - Hi(1 - 2 * e)) / 2 : (1 + Hi(2 * e - 1)) / 2
		},
		ms = he({}, Vi.default, {
			mass: 1,
			damping: 1,
			easing: GE.linear,
			clamp: !1
		});
	class WE {
		constructor() {
			this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, ms)
		}
	}

	function qE(e, t, n) {
		n && (n = he({}, n), Uf(n, t), t = he({}, n, t)), Uf(e, t), Object.assign(e, t);
		for (const a in ms) e[a] == null && (e[a] = ms[a]);
		let {
			mass: r,
			frequency: i,
			damping: o
		} = e;
		return k.und(i) || (i < .01 && (i = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * r, e.friction = 4 * Math.PI * o * r / i), e
	}

	function Uf(e, t) {
		if (!k.und(t.decay)) e.duration = void 0;
		else {
			const n = !k.und(t.tension) || !k.und(t.friction);
			(n || !k.und(t.frequency) || !k.und(t.damping) || !k.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
		}
	}
	const Ff = [];
	class KE {
		constructor() {
			this.changed = !1, this.values = Ff, this.toValues = null, this.fromValues = Ff, this.to = void 0, this.from = void 0, this.config = new WE, this.immediate = !1
		}
	}

	function Bf(e, {
		key: t,
		props: n,
		defaultProps: r,
		state: i,
		actions: o
	}) {
		return new Promise((a, l) => {
			var u;
			let s, c, f = wr((u = n.cancel) != null ? u : r == null ? void 0 : r.cancel, t);
			if (f) d();
			else {
				k.und(n.pause) || (i.paused = wr(n.pause, t));
				let m = r == null ? void 0 : r.pause;
				m !== !0 && (m = i.paused || wr(m, t)), s = De(n.delay || 0, t), m ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h())
			}

			function p() {
				i.resumeQueue.add(h), i.timeouts.delete(c), c.cancel(), s = c.time - G.now()
			}

			function h() {
				s > 0 && !mt.skipAnimation ? (i.delayed = !0, c = G.setTimeout(d, s), i.pauseQueue.add(p), i.timeouts.add(c)) : d()
			}

			function d() {
				i.delayed && (i.delayed = !1), i.pauseQueue.delete(p), i.timeouts.delete(c), e <= (i.cancelId || 0) && (f = !0);
				try {
					o.start(he({}, n, {
						callId: e,
						cancel: f
					}), a)
				} catch (m) {
					l(m)
				}
			}
		})
	}
	const gs = (e, t) => t.length == 1 ? t[0] : t.some(n => n.cancelled) ? Fn(e.get()) : t.every(n => n.noop) ? jf(e.get()) : it(e.get(), t.every(n => n.finished)),
		jf = e => ({
			value: e,
			noop: !0,
			finished: !0,
			cancelled: !1
		}),
		it = (e, t, n = !1) => ({
			value: e,
			finished: t,
			cancelled: n
		}),
		Fn = e => ({
			value: e,
			cancelled: !0,
			finished: !1
		});

	function Vf(e, t, n, r) {
		const {
			callId: i,
			parentId: o,
			onRest: a
		} = t, {
			asyncTo: l,
			promise: u
		} = n;
		return !o && e === l && !t.reset ? u : n.promise = (async () => {
			n.asyncId = i, n.asyncTo = e;
			const s = ji(t, (_, g) => g === "onRest" ? void 0 : _);
			let c, f;
			const p = new Promise((_, g) => (c = _, f = g)),
				h = _ => {
					const g = i <= (n.cancelId || 0) && Fn(r) || i !== n.asyncId && it(r, !1);
					if (g) throw _.result = g, f(_), _
				},
				d = (_, g) => {
					const S = new $f,
						E = new zf;
					return (async () => {
						if (mt.skipAnimation) throw Ar(n), E.result = it(r, !1), f(E), E;
						h(S);
						const w = k.obj(_) ? he({}, _) : he({}, g, {
							to: _
						});
						w.parentId = i, pt(s, (v, A) => {
							k.und(w[A]) && (w[A] = v)
						});
						const O = await r.start(w);
						return h(S), n.paused && await new Promise(v => {
							n.resumeQueue.add(v)
						}), O
					})()
				};
			let m;
			if (mt.skipAnimation) return Ar(n), it(r, !1);
			try {
				let _;
				k.arr(e) ? _ = (async g => {
					for (const S of g) await d(S)
				})(e) : _ = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([_.then(c), p]), m = it(r.get(), !0, !1)
			} catch (_) {
				if (_ instanceof $f) m = _.result;
				else if (_ instanceof zf) m = _.result;
				else throw _
			} finally {
				i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? l : void 0, n.promise = o ? u : void 0)
			}
			return k.fun(a) && G.batchedUpdates(() => {
				a(m, r, r.item)
			}), m
		})()
	}

	function Ar(e, t) {
		vr(e.timeouts, n => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
	}
	class $f extends Error {
		constructor() {
			super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0
		}
	}
	class zf extends Error {
		constructor() {
			super("SkipAnimationSignal"), this.result = void 0
		}
	}
	const _s = e => e instanceof vs;
	let XE = 1;
	class vs extends bf {
		constructor(...t) {
			super(...t), this.id = XE++, this.key = void 0, this._priority = 0
		}
		get priority() {
			return this._priority
		}
		set priority(t) {
			this._priority != t && (this._priority = t, this._onPriorityChange(t))
		}
		get() {
			const t = gt(this);
			return t && t.getValue()
		}
		to(...t) {
			return mt.to(this, t)
		}
		interpolate(...t) {
			return xE(), mt.to(this, t)
		}
		toJSON() {
			return this.get()
		}
		observerAdded(t) {
			t == 1 && this._attach()
		}
		observerRemoved(t) {
			t == 0 && this._detach()
		}
		_attach() {}
		_detach() {}
		_onChange(t, n = !1) {
			Sr(this, {
				type: "change",
				parent: this,
				value: t,
				idle: n
			})
		}
		_onPriorityChange(t) {
			this.idle || Ri.sort(this), Sr(this, {
				type: "priority",
				parent: this,
				priority: t
			})
		}
	}
	const an = Symbol.for("SpringPhase"),
		Hf = 1,
		ys = 2,
		bs = 4,
		Es = e => (e[an] & Hf) > 0,
		Ft = e => (e[an] & ys) > 0,
		xr = e => (e[an] & bs) > 0,
		Gf = (e, t) => t ? e[an] |= ys | Hf : e[an] &= ~ys,
		Wf = (e, t) => t ? e[an] |= bs : e[an] &= ~bs;
	class YE extends vs {
		constructor(t, n) {
			if (super(), this.key = void 0, this.animation = new KE, this.queue = void 0, this.defaultProps = {}, this._state = {
					paused: !1,
					delayed: !1,
					pauseQueue: new Set,
					resumeQueue: new Set,
					timeouts: new Set
				}, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !k.und(t) || !k.und(n)) {
				const r = k.obj(t) ? he({}, t) : he({}, n, {
					from: t
				});
				k.und(r.default) && (r.default = !0), this.start(r)
			}
		}
		get idle() {
			return !(Ft(this) || this._state.asyncTo) || xr(this)
		}
		get goal() {
			return Le(this.animation.to)
		}
		get velocity() {
			const t = gt(this);
			return t instanceof Dn ? t.lastVelocity || 0 : t.getPayload().map(n => n.lastVelocity || 0)
		}
		get hasAnimated() {
			return Es(this)
		}
		get isAnimating() {
			return Ft(this)
		}
		get isPaused() {
			return xr(this)
		}
		get isDelayed() {
			return this._state.delayed
		}
		advance(t) {
			let n = !0,
				r = !1;
			const i = this.animation;
			let {
				config: o,
				toValues: a
			} = i;
			const l = Di(i.to);
			!l && qe(i.to) && (a = ke(Le(i.to))), i.values.forEach((c, f) => {
				if (c.done) return;
				const p = c.constructor == Un ? 1 : l ? l[f].lastPosition : a[f];
				let h = i.immediate,
					d = p;
				if (!h) {
					if (d = c.lastPosition, o.tension <= 0) {
						c.done = !0;
						return
					}
					let m = c.elapsedTime += t;
					const _ = i.fromValues[f],
						g = c.v0 != null ? c.v0 : c.v0 = k.arr(o.velocity) ? o.velocity[f] : o.velocity;
					let S;
					if (k.und(o.duration))
						if (o.decay) {
							const E = o.decay === !0 ? .998 : o.decay,
								w = Math.exp(-(1 - E) * m);
							d = _ + g / (1 - E) * (1 - w), h = Math.abs(c.lastPosition - d) < .1, S = g * w
						} else {
							S = c.lastVelocity == null ? g : c.lastVelocity;
							const E = o.precision || (_ == p ? .005 : Math.min(1, Math.abs(p - _) * .001)),
								w = o.restVelocity || E / 10,
								O = o.clamp ? 0 : o.bounce,
								v = !k.und(O),
								A = _ == p ? c.v0 > 0 : _ < p;
							let P, D = !1;
							const U = 1,
								R = Math.ceil(t / U);
							for (let M = 0; M < R && (P = Math.abs(S) > w, !(!P && (h = Math.abs(p - d) <= E, h))); ++M) {
								v && (D = d == p || d > p == A, D && (S = -S * O, d = p));
								const j = -o.tension * 1e-6 * (d - p),
									L = -o.friction * .001 * S,
									F = (j + L) / o.mass;
								S = S + F * U, d = d + S * U
							}
						}
					else {
						let E = 1;
						o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, c.durationProgress > 0 && (c.elapsedTime = o.duration * c.durationProgress, m = c.elapsedTime += t)), E = (o.progress || 0) + m / this._memoizedDuration, E = E > 1 ? 1 : E < 0 ? 0 : E, c.durationProgress = E), d = _ + o.easing(E) * (p - _), S = (d - c.lastPosition) / t, h = E == 1
					}
					c.lastVelocity = S, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), h = !0)
				}
				l && !l[f].done && (h = !1), h ? c.done = !0 : n = !1, c.setValue(d, o.round) && (r = !0)
			});
			const u = gt(this),
				s = u.getValue();
			if (n) {
				const c = Le(i.to);
				(s !== c || r) && !o.decay ? (u.setValue(c), this._onChange(c)) : r && o.decay && this._onChange(s), this._stop()
			} else r && this._onChange(s)
		}
		set(t) {
			return G.batchedUpdates(() => {
				this._stop(), this._focus(t), this._set(t)
			}), this
		}
		pause() {
			this._update({
				pause: !0
			})
		}
		resume() {
			this._update({
				pause: !1
			})
		}
		finish() {
			if (Ft(this)) {
				const {
					to: t,
					config: n
				} = this.animation;
				G.batchedUpdates(() => {
					this._onStart(), n.decay || this._set(t, !1), this._stop()
				})
			}
			return this
		}
		update(t) {
			return (this.queue || (this.queue = [])).push(t), this
		}
		start(t, n) {
			let r;
			return k.und(t) ? (r = this.queue || [], this.queue = []) : r = [k.obj(t) ? t : he({}, n, {
				to: t
			})], Promise.all(r.map(i => this._update(i))).then(i => gs(this, i))
		}
		stop(t) {
			const {
				to: n
			} = this.animation;
			return this._focus(this.get()), Ar(this._state, t && this._lastCallId), G.batchedUpdates(() => this._stop(n, t)), this
		}
		reset() {
			this._update({
				reset: !0
			})
		}
		eventObserved(t) {
			t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1)
		}
		_prepareNode(t) {
			const n = this.key || "";
			let {
				to: r,
				from: i
			} = t;
			r = k.obj(r) ? r[n] : r, (r == null || hs(r)) && (r = void 0), i = k.obj(i) ? i[n] : i, i == null && (i = void 0);
			const o = {
				to: r,
				from: i
			};
			return Es(this) || (t.reverse && ([r, i] = [i, r]), i = Le(i), k.und(i) ? gt(this) || this._set(r) : this._set(i)), o
		}
		_update(t, n) {
			let r = he({}, t);
			const {
				key: i,
				defaultProps: o
			} = this;
			r.default && Object.assign(o, ji(r, (u, s) => /^on/.test(s) ? kf(u, i) : u)), Xf(this, r, "onProps"), Ir(this, "onProps", r, this);
			const a = this._prepareNode(r);
			if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
			const l = this._state;
			return Bf(++this._lastCallId, {
				key: i,
				props: r,
				defaultProps: o,
				state: l,
				actions: {
					pause: () => {
						xr(this) || (Wf(this, !0), yr(l.pauseQueue), Ir(this, "onPause", it(this, Rr(this, this.animation.to)), this))
					},
					resume: () => {
						xr(this) && (Wf(this, !1), Ft(this) && this._resume(), yr(l.resumeQueue), Ir(this, "onResume", it(this, Rr(this, this.animation.to)), this))
					},
					start: this._merge.bind(this, a)
				}
			}).then(u => {
				if (r.loop && u.finished && !(n && u.noop)) {
					const s = qf(r);
					if (s) return this._update(s, !0)
				}
				return u
			})
		}
		_merge(t, n, r) {
			if (n.cancel) return this.stop(!0), r(Fn(this));
			const i = !k.und(t.to),
				o = !k.und(t.from);
			if (i || o)
				if (n.callId > this._lastToId) this._lastToId = n.callId;
				else return r(Fn(this));
			const {
				key: a,
				defaultProps: l,
				animation: u
			} = this, {
				to: s,
				from: c
			} = u;
			let {
				to: f = s,
				from: p = c
			} = t;
			o && !i && (!n.default || k.und(f)) && (f = p), n.reverse && ([f, p] = [p, f]);
			const h = !Ot(p, c);
			h && (u.from = p), p = Le(p);
			const d = !Ot(f, s);
			d && this._focus(f);
			const m = hs(n.to),
				{
					config: _
				} = u,
				{
					decay: g,
					velocity: S
				} = _;
			(i || o) && (_.velocity = 0), n.config && !m && qE(_, De(n.config, a), n.config !== l.config ? De(l.config, a) : void 0);
			let E = gt(this);
			if (!E || k.und(f)) return r(it(this, !0));
			const w = k.und(n.reset) ? o && !n.default : !k.und(p) && wr(n.reset, a),
				O = w ? p : this.get(),
				v = Or(f),
				A = k.num(v) || k.arr(v) || Li(v),
				P = !m && (!A || wr(l.immediate || n.immediate, a));
			if (d) {
				const M = fs(f);
				if (M !== E.constructor)
					if (P) E = this._set(v);
					else throw Error(`Cannot animate between ${E.constructor.name} and ${M.name}, as the "to" prop suggests`)
			}
			const D = E.constructor;
			let U = qe(f),
				R = !1;
			if (!U) {
				const M = w || !Es(this) && h;
				(d || M) && (R = Ot(Or(O), v), U = !R), (!Ot(u.immediate, P) && !P || !Ot(_.decay, g) || !Ot(_.velocity, S)) && (U = !0)
			}
			if (R && Ft(this) && (u.changed && !w ? U = !0 : U || this._stop(s)), !m && ((U || qe(s)) && (u.values = E.getPayload(), u.toValues = qe(f) ? null : D == Un ? [1] : ke(v)), u.immediate != P && (u.immediate = P, !P && !w && this._set(s)), U)) {
				const {
					onRest: M
				} = u;
				z(JE, L => Xf(this, n, L));
				const j = it(this, Rr(this, s));
				yr(this._pendingCalls, j), this._pendingCalls.add(r), u.changed && G.batchedUpdates(() => {
					u.changed = !w, M == null || M(j, this), w ? De(l.onRest, j) : u.onStart == null || u.onStart(j, this)
				})
			}
			w && this._set(O), m ? r(Vf(n.to, n, this._state, this)) : U ? this._start() : Ft(this) && !d ? this._pendingCalls.add(r) : r(jf(O))
		}
		_focus(t) {
			const n = this.animation;
			t !== n.to && (yf(this) && this._detach(), n.to = t, yf(this) && this._attach())
		}
		_attach() {
			let t = 0;
			const {
				to: n
			} = this.animation;
			qe(n) && (Ln(n, this), _s(n) && (t = n.priority + 1)), this.priority = t
		}
		_detach() {
			const {
				to: t
			} = this.animation;
			qe(t) && Tr(t, this)
		}
		_set(t, n = !0) {
			const r = Le(t);
			if (!k.und(r)) {
				const i = gt(this);
				if (!i || !Ot(r, i.getValue())) {
					const o = fs(r);
					!i || i.constructor != o ? us(this, o.create(r)) : i.setValue(r), i && G.batchedUpdates(() => {
						this._onChange(r, n)
					})
				}
			}
			return gt(this)
		}
		_onStart() {
			const t = this.animation;
			t.changed || (t.changed = !0, Ir(this, "onStart", it(this, Rr(this, t.to)), this))
		}
		_onChange(t, n) {
			n || (this._onStart(), De(this.animation.onChange, t, this)), De(this.defaultProps.onChange, t, this), super._onChange(t, n)
		}
		_start() {
			const t = this.animation;
			gt(this).reset(Le(t.to)), t.immediate || (t.fromValues = t.values.map(n => n.lastPosition)), Ft(this) || (Gf(this, !0), xr(this) || this._resume())
		}
		_resume() {
			mt.skipAnimation ? this.finish() : Ri.start(this)
		}
		_stop(t, n) {
			if (Ft(this)) {
				Gf(this, !1);
				const r = this.animation;
				z(r.values, o => {
					o.done = !0
				}), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Sr(this, {
					type: "idle",
					parent: this
				});
				const i = n ? Fn(this.get()) : it(this.get(), Rr(this, t != null ? t : r.to));
				yr(this._pendingCalls, i), r.changed && (r.changed = !1, Ir(this, "onRest", i, this))
			}
		}
	}

	function Rr(e, t) {
		const n = Or(t),
			r = Or(e.get());
		return Ot(r, n)
	}

	function qf(e, t = e.loop, n = e.to) {
		let r = De(t);
		if (r) {
			const i = r !== !0 && ds(r),
				o = (i || e).reverse,
				a = !i || i.reset;
			return kr(he({}, e, {
				loop: t,
				default: !1,
				pause: void 0,
				to: !o || hs(n) ? n : void 0,
				from: a ? e.from : void 0,
				reset: a
			}, i))
		}
	}

	function kr(e) {
		const {
			to: t,
			from: n
		} = e = ds(e), r = new Set;
		return k.obj(t) && Kf(t, r), k.obj(n) && Kf(n, r), e.keys = r.size ? Array.from(r) : null, e
	}

	function QE(e) {
		const t = kr(e);
		return k.und(t.default) && (t.default = ji(t)), t
	}

	function Kf(e, t) {
		pt(e, (n, r) => n != null && t.add(r))
	}
	const JE = ["onStart", "onRest", "onChange", "onPause", "onResume"];

	function Xf(e, t, n) {
		e.animation[n] = t[n] !== If(t, n) ? kf(t[n], e.key) : void 0
	}

	function Ir(e, t, ...n) {
		var r, i, o, a;
		(r = (i = e.animation)[t]) == null || r.call(i, ...n), (o = (a = e.defaultProps)[t]) == null || o.call(a, ...n)
	}
	const ZE = ["onStart", "onChange", "onRest"];
	let e0 = 1;
	class Yf {
		constructor(t, n) {
			this.id = e0++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._item = void 0, this._state = {
				paused: !1,
				pauseQueue: new Set,
				resumeQueue: new Set,
				timeouts: new Set
			}, this._events = {
				onStart: new Map,
				onChange: new Map,
				onRest: new Map
			}, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(he({
				default: !0
			}, t))
		}
		get idle() {
			return !this._state.asyncTo && Object.values(this.springs).every(t => t.idle && !t.isDelayed && !t.isPaused)
		}
		get item() {
			return this._item
		}
		set item(t) {
			this._item = t
		}
		get() {
			const t = {};
			return this.each((n, r) => t[r] = n.get()), t
		}
		set(t) {
			for (const n in t) {
				const r = t[n];
				k.und(r) || this.springs[n].set(r)
			}
		}
		update(t) {
			return t && this.queue.push(kr(t)), this
		}
		start(t) {
			let {
				queue: n
			} = this;
			return t ? n = ke(t).map(kr) : this.queue = [], this._flush ? this._flush(this, n) : (td(this, n), Ss(this, n))
		}
		stop(t, n) {
			if (t !== !!t && (n = t), n) {
				const r = this.springs;
				z(ke(n), i => r[i].stop(!!t))
			} else Ar(this._state, this._lastAsyncId), this.each(r => r.stop(!!t));
			return this
		}
		pause(t) {
			if (k.und(t)) this.start({
				pause: !0
			});
			else {
				const n = this.springs;
				z(ke(t), r => n[r].pause())
			}
			return this
		}
		resume(t) {
			if (k.und(t)) this.start({
				pause: !1
			});
			else {
				const n = this.springs;
				z(ke(t), r => n[r].resume())
			}
			return this
		}
		each(t) {
			pt(this.springs, t)
		}
		_onFrame() {
			const {
				onStart: t,
				onChange: n,
				onRest: r
			} = this._events, i = this._active.size > 0, o = this._changed.size > 0;
			(i && !this._started || o && !this._started) && (this._started = !0, vr(t, ([u, s]) => {
				s.value = this.get(), u(s, this, this._item)
			}));
			const a = !i && this._started,
				l = o || a && r.size ? this.get() : null;
			o && n.size && vr(n, ([u, s]) => {
				s.value = l, u(s, this, this._item)
			}), a && (this._started = !1, vr(r, ([u, s]) => {
				s.value = l, u(s, this, this._item)
			}))
		}
		eventObserved(t) {
			if (t.type == "change") this._changed.add(t.parent), t.idle || this._active.add(t.parent);
			else if (t.type == "idle") this._active.delete(t.parent);
			else return;
			G.onFrame(this._onFrame)
		}
	}

	function Ss(e, t) {
		return Promise.all(t.map(n => Qf(e, n))).then(n => gs(e, n))
	}
	async function Qf(e, t, n) {
		const {
			keys: r,
			to: i,
			from: o,
			loop: a,
			onRest: l,
			onResolve: u
		} = t, s = k.obj(t.default) && t.default;
		a && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
		const c = k.arr(i) || k.fun(i) ? i : void 0;
		c ? (t.to = void 0, t.onRest = void 0, s && (s.onRest = void 0)) : z(ZE, m => {
			const _ = t[m];
			if (k.fun(_)) {
				const g = e._events[m];
				t[m] = ({
					finished: S,
					cancelled: E
				}) => {
					const w = g.get(_);
					w ? (S || (w.finished = !1), E && (w.cancelled = !0)) : g.set(_, {
						value: null,
						finished: S || !1,
						cancelled: E || !1
					})
				}, s && (s[m] = t[m])
			}
		});
		const f = e._state;
		t.pause === !f.paused ? (f.paused = t.pause, yr(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
		const p = (r || Object.keys(e.springs)).map(m => e.springs[m].start(t)),
			h = t.cancel === !0 || If(t, "cancel") === !0;
		(c || h && f.asyncId) && p.push(Bf(++e._lastAsyncId, {
			props: t,
			state: f,
			actions: {
				pause: Ya,
				resume: Ya,
				start(m, _) {
					h ? (Ar(f, e._lastAsyncId), _(Fn(e))) : (m.onRest = l, _(Vf(c, m, f, e)))
				}
			}
		})), f.paused && await new Promise(m => {
			f.resumeQueue.add(m)
		});
		const d = gs(e, await Promise.all(p));
		if (a && d.finished && !(n && d.noop)) {
			const m = qf(t, a, i);
			if (m) return td(e, [m]), Qf(e, m, !0)
		}
		return u && G.batchedUpdates(() => u(d, e, e.item)), d
	}

	function Ts(e, t) {
		const n = he({}, e.springs);
		return t && z(ke(t), r => {
			k.und(r.keys) && (r = kr(r)), k.obj(r.to) || (r = he({}, r, {
				to: void 0
			})), ed(n, r, i => Zf(i))
		}), Jf(e, n), n
	}

	function Jf(e, t) {
		pt(t, (n, r) => {
			e.springs[r] || (e.springs[r] = n, Ln(n, e))
		})
	}

	function Zf(e, t) {
		const n = new YE;
		return n.key = e, t && Ln(n, t), n
	}

	function ed(e, t, n) {
		t.keys && z(t.keys, r => {
			(e[r] || (e[r] = n(r)))._prepareNode(t)
		})
	}

	function td(e, t) {
		z(t, n => {
			ed(e.springs, n, r => Zf(r, e))
		})
	}

	function t0(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i, o;
		for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n
	}
	const n0 = ["children"],
		Pr = e => {
			let {
				children: t
			} = e, n = t0(e, n0);
			const r = Ge(Gi),
				i = n.pause || !!r.pause,
				o = n.immediate || !!r.immediate;
			n = PE(() => ({
				pause: i,
				immediate: o
			}), [i, o]);
			const {
				Provider: a
			} = Gi;
			return Ce(a, {
				value: n
			}, t)
		},
		Gi = r0(Pr, {});
	Pr.Provider = Gi.Provider, Pr.Consumer = Gi.Consumer;

	function r0(e, t) {
		return Object.assign(e, st(t)), e.Provider._context = e, e.Consumer._context = e, e
	}
	const nd = () => {
		const e = [],
			t = function(i) {
				kE();
				const o = [];
				return z(e, (a, l) => {
					if (k.und(i)) o.push(a.start());
					else {
						const u = n(i, a, l);
						u && o.push(a.start(u))
					}
				}), o
			};
		t.current = e, t.add = function(r) {
			e.includes(r) || e.push(r)
		}, t.delete = function(r) {
			const i = e.indexOf(r);
			~i && e.splice(i, 1)
		}, t.pause = function() {
			return z(e, r => r.pause(...arguments)), this
		}, t.resume = function() {
			return z(e, r => r.resume(...arguments)), this
		}, t.set = function(r) {
			z(e, i => i.set(r))
		}, t.start = function(r) {
			const i = [];
			return z(e, (o, a) => {
				if (k.und(r)) i.push(o.start());
				else {
					const l = this._getProps(r, o, a);
					l && i.push(o.start(l))
				}
			}), i
		}, t.stop = function() {
			return z(e, r => r.stop(...arguments)), this
		}, t.update = function(r) {
			return z(e, (i, o) => i.update(this._getProps(r, i, o))), this
		};
		const n = function(i, o, a) {
			return k.fun(i) ? i(a, o) : i
		};
		return t._getProps = n, t
	};

	function i0(e, t, n) {
		const r = k.fun(t) && t;
		r && !n && (n = []);
		const i = be(() => r || arguments.length == 3 ? nd() : void 0, []),
			o = Q(0),
			a = as(),
			l = be(() => ({
				ctrls: [],
				queue: [],
				flush(g, S) {
					const E = Ts(g, S);
					return o.current > 0 && !l.queue.length && !Object.keys(E).some(O => !g.springs[O]) ? Ss(g, S) : new Promise(O => {
						Jf(g, E), l.queue.push(() => {
							O(Ss(g, S))
						}), a()
					})
				}
			}), []),
			u = Q([...l.ctrls]),
			s = [],
			c = ls(e) || 0;
		be(() => {
			z(u.current.slice(e, c), g => {
				ps(g, i), g.stop(!0)
			}), u.current.length = e, f(c, e)
		}, [e]), be(() => {
			f(0, Math.min(c, e))
		}, n);

		function f(g, S) {
			for (let E = g; E < S; E++) {
				const w = u.current[E] || (u.current[E] = new Yf(null, l.flush)),
					O = r ? r(E, w) : t[E];
				O && (s[E] = QE(O))
			}
		}
		const p = u.current.map((g, S) => Ts(g, s[S])),
			h = Ge(Pr),
			d = ls(h),
			m = h !== d && Pf(h);
		on(() => {
			o.current++, l.ctrls = u.current;
			const {
				queue: g
			} = l;
			g.length && (l.queue = [], z(g, S => S())), z(u.current, (S, E) => {
				i == null || i.add(S), m && S.start({
					default: h
				});
				const w = s[E];
				w && (Nf(S, w.ref), S.ref ? S.queue.push(w) : S.start(w))
			})
		}), ss(() => () => {
			z(l.ctrls, g => g.stop(!0))
		});
		const _ = p.map(g => he({}, g));
		return i ? [_, i] : _
	}

	function Cs(e, t) {
		const n = k.fun(e),
			[
				[r], i
			] = i0(1, n ? e : [e], n ? t || [] : t);
		return n || arguments.length == 2 ? [r, i] : r
	}
	let Ie;
	(function(e) {
		e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave"
	})(Ie || (Ie = {}));

	function ws(e, t, n) {
		const r = k.fun(t) && t,
			{
				reset: i,
				sort: o,
				trail: a = 0,
				expires: l = !0,
				exitBeforeEnter: u = !1,
				onDestroyed: s,
				ref: c,
				config: f
			} = r ? r() : t,
			p = be(() => r || arguments.length == 3 ? nd() : void 0, []),
			h = ke(e),
			d = [],
			m = Q(null),
			_ = i ? null : m.current;
		on(() => {
			m.current = d
		}), ss(() => (z(d, L => {
			p == null || p.add(L.ctrl), L.ctrl.ref = p
		}), () => {
			z(m.current, L => {
				L.expired && clearTimeout(L.expirationId), ps(L.ctrl, p), L.ctrl.stop(!0)
			})
		}));
		const g = a0(h, r ? r() : t, _),
			S = i && m.current || [];
		on(() => z(S, ({
			ctrl: L,
			item: F,
			key: T
		}) => {
			ps(L, p), De(s, F, T)
		}));
		const E = [];
		if (_ && z(_, (L, F) => {
				L.expired ? (clearTimeout(L.expirationId), S.push(L)) : (F = E[F] = g.indexOf(L.key), ~F && (d[F] = L))
			}), z(h, (L, F) => {
				d[F] || (d[F] = {
					key: g[F],
					item: L,
					phase: Ie.MOUNT,
					ctrl: new Yf
				}, d[F].ctrl.item = L)
			}), E.length) {
			let L = -1;
			const {
				leave: F
			} = r ? r() : t;
			z(E, (T, Y) => {
				const V = _[Y];
				~T ? (L = d.indexOf(V), d[L] = he({}, V, {
					item: h[T]
				})) : F && d.splice(++L, 0, V)
			})
		}
		k.fun(o) && d.sort((L, F) => o(L.item, F.item));
		let w = -a;
		const O = as(),
			v = ji(t),
			A = new Map,
			P = Q(new Map),
			D = Q(!1);
		z(d, (L, F) => {
			const T = L.key,
				Y = L.phase,
				V = r ? r() : t;
			let J, te, b = De(V.delay || 0, T);
			if (Y == Ie.MOUNT) J = V.enter, te = Ie.ENTER;
			else {
				const Te = g.indexOf(T) < 0;
				if (Y != Ie.LEAVE)
					if (Te) J = V.leave, te = Ie.LEAVE;
					else if (J = V.update) te = Ie.UPDATE;
				else return;
				else if (!Te) J = V.enter, te = Ie.ENTER;
				else return
			}
			if (J = De(J, L.item, F), J = k.obj(J) ? ds(J) : {
					to: J
				}, !J.config) {
				const Te = f || v.config;
				J.config = De(Te, L.item, F, te)
			}
			w += a;
			const y = he({}, v, {
				delay: b + w,
				ref: c,
				immediate: V.immediate,
				reset: !1
			}, J);
			if (te == Ie.ENTER && k.und(y.from)) {
				const Te = r ? r() : t,
					le = k.und(Te.initial) || _ ? Te.from : Te.initial;
				y.from = De(le, L.item, F)
			}
			const {
				onResolve: Ze
			} = y;
			y.onResolve = Te => {
				De(Ze, Te);
				const le = m.current,
					Se = le.find(Be => Be.key === T);
				if (!!Se && !(Te.cancelled && Se.phase != Ie.UPDATE) && Se.ctrl.idle) {
					const Be = le.every(je => je.ctrl.idle);
					if (Se.phase == Ie.LEAVE) {
						const je = De(l, Se.item);
						if (je !== !1) {
							const St = je === !0 ? 0 : je;
							if (Se.expired = !0, !Be && St > 0) {
								St <= 2147483647 && (Se.expirationId = setTimeout(O, St));
								return
							}
						}
					}
					Be && le.some(je => je.expired) && (P.current.delete(Se), u && (D.current = !0), O())
				}
			};
			const Ht = Ts(L.ctrl, y);
			te === Ie.LEAVE && u ? P.current.set(L, {
				phase: te,
				springs: Ht,
				payload: y
			}) : A.set(L, {
				phase: te,
				springs: Ht,
				payload: y
			})
		});
		const U = Ge(Pr),
			R = ls(U),
			M = U !== R && Pf(U);
		on(() => {
			M && z(d, L => {
				L.ctrl.start({
					default: U
				})
			})
		}, [U]), z(A, (L, F) => {
			if (P.current.size) {
				const T = d.findIndex(Y => Y.key === F.key);
				d.splice(T, 1)
			}
		}), on(() => {
			z(P.current.size ? P.current : A, ({
				phase: L,
				payload: F
			}, T) => {
				const {
					ctrl: Y
				} = T;
				T.phase = L, p == null || p.add(Y), M && L == Ie.ENTER && Y.start({
					default: U
				}), F && (Nf(Y, F.ref), (Y.ref || p) && !D.current ? Y.update(F) : (Y.start(F), D.current && (D.current = !1)))
			})
		}, i ? void 0 : n);
		const j = L => Ce(pe, null, d.map((F, T) => {
			const {
				springs: Y
			} = A.get(F) || F.ctrl, V = L(he({}, Y), F.item, F, T);
			return V && V.type ? Ce(V.type, he({}, V.props, {
				key: k.str(F.key) || k.num(F.key) ? F.key : F.ctrl.id,
				ref: V.ref
			})) : V
		}));
		return p ? [j, p] : j
	}
	let o0 = 1;

	function a0(e, {
		key: t,
		keys: n = t
	}, r) {
		if (n === null) {
			const i = new Set;
			return e.map(o => {
				const a = r && r.find(l => l.item === o && l.phase !== Ie.LEAVE && !i.has(l));
				return a ? (i.add(a), a.key) : o0++
			})
		}
		return k.und(n) ? e : k.fun(n) ? e.map(n) : ke(n)
	}
	class s0 extends vs {
		constructor(t, n) {
			super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = new Set, this.source = t, this.calc = Er(...n);
			const r = this._get(),
				i = fs(r);
			us(this, i.create(r))
		}
		advance(t) {
			const n = this._get(),
				r = this.get();
			Ot(n, r) || (gt(this).setValue(n), this._onChange(n, this.idle)), !this.idle && rd(this._active) && Os(this)
		}
		_get() {
			const t = k.arr(this.source) ? this.source.map(Le) : ke(Le(this.source));
			return this.calc(...t)
		}
		_start() {
			this.idle && !rd(this._active) && (this.idle = !1, z(Di(this), t => {
				t.done = !1
			}), mt.skipAnimation ? (G.batchedUpdates(() => this.advance()), Os(this)) : Ri.start(this))
		}
		_attach() {
			let t = 1;
			z(ke(this.source), n => {
				qe(n) && Ln(n, this), _s(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1))
			}), this.priority = t, this._start()
		}
		_detach() {
			z(ke(this.source), t => {
				qe(t) && Tr(t, this)
			}), this._active.clear(), Os(this)
		}
		eventObserved(t) {
			t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = ke(this.source).reduce((n, r) => Math.max(n, (_s(r) ? r.priority : 0) + 1), 0))
		}
	}

	function l0(e) {
		return e.idle !== !1
	}

	function rd(e) {
		return !e.size || Array.from(e).every(l0)
	}

	function Os(e) {
		e.idle || (e.idle = !0, z(Di(e), t => {
			t.done = !0
		}), Sr(e, {
			type: "idle",
			parent: e
		}))
	}
	mt.assign({
		createStringInterpolator: Cf,
		to: (e, t) => new s0(e, t)
	});

	function As(e, t) {
		if (e == null) return {};
		var n = {},
			r = Object.keys(e),
			i, o;
		for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
		return n
	}
	const u0 = ["style", "children", "scrollTop", "scrollLeft"],
		id = /^--/;

	function c0(e, t) {
		return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !id.test(e) && !(Nr.hasOwnProperty(e) && Nr[e]) ? t + "px" : ("" + t).trim()
	}
	const od = {};

	function f0(e, t) {
		if (!e.nodeType || !e.setAttribute) return !1;
		const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
			r = t,
			{
				style: i,
				children: o,
				scrollTop: a,
				scrollLeft: l
			} = r,
			u = As(r, u0),
			s = Object.values(u),
			c = Object.keys(u).map(f => n || e.hasAttribute(f) ? f : od[f] || (od[f] = f.replace(/([A-Z])/g, p => "-" + p.toLowerCase())));
		o !== void 0 && (e.textContent = o);
		for (let f in i)
			if (i.hasOwnProperty(f)) {
				const p = c0(f, i[f]);
				id.test(f) ? e.style.setProperty(f, p) : e.style[f] = p
			} c.forEach((f, p) => {
			e.setAttribute(f, s[p])
		}), a !== void 0 && (e.scrollTop = a), l !== void 0 && (e.scrollLeft = l)
	}
	let Nr = {
		animationIterationCount: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	};
	const d0 = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
		h0 = ["Webkit", "Ms", "Moz", "O"];
	Nr = Object.keys(Nr).reduce((e, t) => (h0.forEach(n => e[d0(n, t)] = e[t]), e), Nr);
	const p0 = ["x", "y", "z"],
		m0 = /^(matrix|translate|scale|rotate|skew)/,
		g0 = /^(translate)/,
		_0 = /^(rotate|skew)/,
		xs = (e, t) => k.num(e) && e !== 0 ? e + t : e,
		Wi = (e, t) => k.arr(e) ? e.every(n => Wi(n, t)) : k.num(e) ? e === t : parseFloat(e) === t;
	class v0 extends Fi {
		constructor(t) {
			let {
				x: n,
				y: r,
				z: i
			} = t, o = As(t, p0);
			const a = [],
				l = [];
			(n || r || i) && (a.push([n || 0, r || 0, i || 0]), l.push(u => [`translate3d(${u.map(s => xs(s, "px")).join(",")})`, Wi(u, 0)])), pt(o, (u, s) => {
				if (s === "transform") a.push([u || ""]), l.push(c => [c, c === ""]);
				else if (m0.test(s)) {
					if (delete o[s], k.und(u)) return;
					const c = g0.test(s) ? "px" : _0.test(s) ? "deg" : "";
					a.push(ke(u)), l.push(s === "rotate3d" ? ([f, p, h, d]) => [`rotate3d(${f},${p},${h},${xs(d, c)})`, Wi(d, 0)] : f => [`${s}(${f.map(p => xs(p, c)).join(",")})`, Wi(f, s.startsWith("scale") ? 1 : 0)])
				}
			}), a.length && (o.transform = new y0(a, l)), super(o)
		}
	}
	class y0 extends bf {
		constructor(t, n) {
			super(), this._value = null, this.inputs = t, this.transforms = n
		}
		get() {
			return this._value || (this._value = this._get())
		}
		_get() {
			let t = "",
				n = !0;
			return z(this.inputs, (r, i) => {
				const o = Le(r[0]),
					[a, l] = this.transforms[i](k.arr(o) ? o : r.map(Le));
				t += " " + a, n = n && l
			}), n ? "none" : t
		}
		observerAdded(t) {
			t == 1 && z(this.inputs, n => z(n, r => qe(r) && Ln(r, this)))
		}
		observerRemoved(t) {
			t == 0 && z(this.inputs, n => z(n, r => qe(r) && Tr(r, this)))
		}
		eventObserved(t) {
			t.type == "change" && (this._value = null), Sr(this, t)
		}
	}
	const b0 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
		E0 = ["scrollTop", "scrollLeft"];
	mt.assign({
		batchedUpdates: nf,
		createStringInterpolator: Cf,
		colors: uE
	});
	const Bn = jE(b0, {
		applyAnimatedValues: f0,
		createAnimatedStyle: e => new v0(e),
		getComponentProps: e => As(e, E0)
	}).animated;

	function S0(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function")
	}
	var Rs = S0,
		T0 = typeof It == "object" && It && It.Object === Object && It,
		C0 = T0,
		w0 = C0,
		O0 = typeof self == "object" && self && self.Object === Object && self,
		A0 = w0 || O0 || Function("return this")(),
		ad = A0,
		x0 = ad,
		R0 = function() {
			return x0.Date.now()
		},
		k0 = R0,
		I0 = /\s/;

	function P0(e) {
		for (var t = e.length; t-- && I0.test(e.charAt(t)););
		return t
	}
	var N0 = P0,
		M0 = N0,
		L0 = /^\s+/;

	function D0(e) {
		return e && e.slice(0, M0(e) + 1).replace(L0, "")
	}
	var U0 = D0,
		F0 = ad,
		B0 = F0.Symbol,
		sd = B0,
		ld = sd,
		ud = Object.prototype,
		j0 = ud.hasOwnProperty,
		V0 = ud.toString,
		Mr = ld ? ld.toStringTag : void 0;

	function $0(e) {
		var t = j0.call(e, Mr),
			n = e[Mr];
		try {
			e[Mr] = void 0;
			var r = !0
		} catch {}
		var i = V0.call(e);
		return r && (t ? e[Mr] = n : delete e[Mr]), i
	}
	var z0 = $0,
		H0 = Object.prototype,
		G0 = H0.toString;

	function W0(e) {
		return G0.call(e)
	}
	var q0 = W0,
		cd = sd,
		K0 = z0,
		X0 = q0,
		Y0 = "[object Null]",
		Q0 = "[object Undefined]",
		fd = cd ? cd.toStringTag : void 0;

	function J0(e) {
		return e == null ? e === void 0 ? Q0 : Y0 : fd && fd in Object(e) ? K0(e) : X0(e)
	}
	var Z0 = J0;

	function e1(e) {
		return e != null && typeof e == "object"
	}
	var t1 = e1,
		n1 = Z0,
		r1 = t1,
		i1 = "[object Symbol]";

	function o1(e) {
		return typeof e == "symbol" || r1(e) && n1(e) == i1
	}
	var a1 = o1,
		s1 = U0,
		dd = Rs,
		l1 = a1,
		hd = 0 / 0,
		u1 = /^[-+]0x[0-9a-f]+$/i,
		c1 = /^0b[01]+$/i,
		f1 = /^0o[0-7]+$/i,
		d1 = parseInt;

	function h1(e) {
		if (typeof e == "number") return e;
		if (l1(e)) return hd;
		if (dd(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = dd(t) ? t + "" : t
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = s1(e);
		var n = c1.test(e);
		return n || f1.test(e) ? d1(e.slice(2), n ? 2 : 8) : u1.test(e) ? hd : +e
	}
	var p1 = h1,
		m1 = Rs,
		ks = k0,
		pd = p1,
		g1 = "Expected a function",
		_1 = Math.max,
		v1 = Math.min;

	function y1(e, t, n) {
		var r, i, o, a, l, u, s = 0,
			c = !1,
			f = !1,
			p = !0;
		if (typeof e != "function") throw new TypeError(g1);
		t = pd(t) || 0, m1(n) && (c = !!n.leading, f = "maxWait" in n, o = f ? _1(pd(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

		function h(v) {
			var A = r,
				P = i;
			return r = i = void 0, s = v, a = e.apply(P, A), a
		}

		function d(v) {
			return s = v, l = setTimeout(g, t), c ? h(v) : a
		}

		function m(v) {
			var A = v - u,
				P = v - s,
				D = t - A;
			return f ? v1(D, o - P) : D
		}

		function _(v) {
			var A = v - u,
				P = v - s;
			return u === void 0 || A >= t || A < 0 || f && P >= o
		}

		function g() {
			var v = ks();
			if (_(v)) return S(v);
			l = setTimeout(g, m(v))
		}

		function S(v) {
			return l = void 0, p && r ? h(v) : (r = i = void 0, a)
		}

		function E() {
			l !== void 0 && clearTimeout(l), s = 0, r = u = i = l = void 0
		}

		function w() {
			return l === void 0 ? a : S(ks())
		}

		function O() {
			var v = ks(),
				A = _(v);
			if (r = arguments, i = this, u = v, A) {
				if (l === void 0) return d(u);
				if (f) return clearTimeout(l), l = setTimeout(g, t), h(u)
			}
			return l === void 0 && (l = setTimeout(g, t)), a
		}
		return O.cancel = E, O.flush = w, O
	}
	var b1 = y1,
		E1 = b1,
		S1 = Rs,
		T1 = "Expected a function";

	function C1(e, t, n) {
		var r = !0,
			i = !0;
		if (typeof e != "function") throw new TypeError(T1);
		return S1(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), E1(e, t, {
			leading: r,
			maxWait: t,
			trailing: i
		})
	}
	var md = C1,
		gd = {
			exports: {}
		};
	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	(function(e) {
		(function() {
			var t = {}.hasOwnProperty;

			function n() {
				for (var r = [], i = 0; i < arguments.length; i++) {
					var o = arguments[i];
					if (!!o) {
						var a = typeof o;
						if (a === "string" || a === "number") r.push(o);
						else if (Array.isArray(o)) {
							if (o.length) {
								var l = n.apply(null, o);
								l && r.push(l)
							}
						} else if (a === "object")
							if (o.toString === Object.prototype.toString)
								for (var u in o) t.call(o, u) && o[u] && r.push(u);
							else r.push(o.toString())
					}
				}
				return r.join(" ")
			}
			e.exports ? (n.default = n, e.exports = n) : window.classNames = n
		})()
	})(gd);
	const Ue = gd.exports,
		w1 = (e, t) => {
			const n = Math.round(t.width * devicePixelRatio),
				r = Math.round(t.height * devicePixelRatio);
			n === 0 || r === 0 || e.sendVideoBounds(n, r)
		};

	function Is({
		loadingIndicator: e,
		autoConnect: t
	}) {
		const {
			videoRef: n,
			scene: r,
			connectionStatus: i,
			isVideoMuted: o,
			connect: a,
			playVideo: l
		} = wt(), u = i === Ae.CONNECTING, s = i === Ae.CONNECTED, {
			observe: c
		} = iE({
			onResize: be(() => md(({
				width: d,
				height: m
			}) => {
				w1(r, {
					width: d,
					height: m
				})
			}, 200), [r])
		});
		q(() => {
			n.current && s && l()
		}, [n, s, l]);
		const f = ht(() => {
				n.current && (document.visibilityState !== "visible" ? n.current.pause() : l())
			}, [n, l]),
			p = Cs({
				opacity: s ? "1" : "0",
				delay: s ? 1100 : 0,
				config: Vi.gentle
			}),
			h = u && e;
		return q(() => {
			t && a()
		}, [a, t]), q(() => (s && document.addEventListener("visibilitychange", f), () => {
			document.removeEventListener("visibilitychange", f)
		}), [s, f]), C("div", {
			className: Ue("sm-w-full sm-h-full sm-overflow-hidden", {
				"sm-hidden": !s && !u
			}),
			children: [h && e, C(Bn.video, {
				style: p,
				autoPlay: !0,
				playsInline: !0,
				"data-sm-video": !0,
				className: Ue("sm-w-full sm-h-full sm-object-cover", {
					"sm-hidden": !s
				}),
				muted: o,
				ref: d => {
					c(d), d && (n.current = d)
				}
			})]
		})
	}

	function _d({
		autoConnect: e,
		tokenServer: t,
		apiKey: n,
		connectingIndicator: r
	}) {
		return C(Vc, {
			apiKey: n,
			tokenServer: t,
			children: C(Is, {
				autoConnect: e === "true",
				loadingIndicator: r
			})
		})
	}
	_d.defaultProps = {
		autoConnect: "true"
	};
	const Rx = "";
	Io.exports.define("sm-video", () => _d, {
		attributes: ["api-key", "token-server", "auto-connect"]
	});

	function jn({
		children: e,
		size: t,
		...n
	}) {
		return C("p", {
			className: Ue("sm-text-primary-text sm-font-primary sm-font-normal sm-m-0", {
				"sm-text-xs md:sm-text-sm": t === "sm",
				"sm-text-sm md:sm-text-base": t === "md",
				"sm-text-base md:sm-text-lg": t === "lg"
			}),
			...n,
			children: e
		})
	}
	jn.defaultProps = {
		size: "md"
	};

	function Lr({
		children: e,
		theme: t,
		onClick: n
	}) {
		return C("button", {
			onClick: n,
			className: Ue("sm-cursor-pointer sm-px-4 sm-py-2 sm-font-primary sm-text-sm sm-tracking-wider sm-transition-colors sm-uppercase sm-outline disabled:sm-bg-primary-light disabled:sm-cursor-not-allowed md:sm-text-base", {
				"sm-border-none sm-font-medium sm-text-white sm-rounded-lg sm-bg-primary-base hover:sm-bg-primary-dark active:sm-bg-primary-dark focus:sm-bg-primary-dark focus:sm-outline-2 focus:sm-outline-primary-light": t === "default",
				"sm-text-left sm-flex sm-justify-between sm-items-center sm-bg-transparent sm-rounded-sm sm-text-primary-text sm-capitalize sm-font-normal sm-border-gray-lightest sm-border sm-border-solid sm-transition-colors sm-outline-transparent sm-outline-1 sm-outline-offset-[-2px] hover:sm-border-primary-base hover:sm-outline-primary-base focus:sm-border-primary-base focus:sm-outline-primary-base active:sm-text-white active:sm-bg-primary-base": t === "outline"
			}),
			children: e
		})
	}
	Lr.defaultProps = {
		theme: "default"
	};
	const O1 = {
		microphone: ["M12 0C10.9391 0 9.92172 0.421427 9.17157 1.17157C8.42143 1.92172 8 2.93913 8 4V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12V4C16 2.93913 15.5786 1.92172 14.8284 1.17157C14.0783 0.421427 13.0609 0 12 0ZM10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12V4C10 3.46957 10.2107 2.96086 10.5858 2.58579Z", "M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.753 19.7165 16.3942 18.9195 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10Z"],
		microphoneOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8 9.41421V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C12.7206 16 13.4212 15.8056 14.0315 15.4457L15.4762 16.8904C14.4675 17.6075 13.254 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.423 19.758 15.7724 19.1991 16.9054 18.3196L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM12.5176 13.9319L10 11.4142V12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.1763 14 12.3502 13.9767 12.5176 13.9319Z", "M9.17157 1.17157C9.92172 0.421427 10.9391 1.49012e-08 12 1.49012e-08C13.0609 1.49012e-08 14.0783 0.421427 14.8284 1.17157C15.5786 1.92172 16 2.93913 16 4V9.57683C16 10.1291 15.5523 10.5768 15 10.5768C14.4477 10.5768 14 10.1291 14 9.57683V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2731 2.89846 10.0746 3.30404 10.0173 3.73766C9.94484 4.28517 9.44228 4.67031 8.89476 4.59788C8.34725 4.52545 7.96211 4.02289 8.03454 3.47537C8.14926 2.60815 8.54615 1.79699 9.17157 1.17157Z", "M19 9C19.5523 9 20 9.44771 20 10V12C20 12.5535 19.9426 13.1011 19.8312 13.6349C19.7183 14.1755 19.1886 14.5223 18.6479 14.4094C18.1073 14.2965 17.7605 13.7668 17.8734 13.2261C17.957 12.8259 18 12.4152 18 12V10C18 9.44771 18.4477 9 19 9Z"],
		copy: ["M3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4C16 3.20435 15.6839 2.44129 15.1213 1.87868C14.5587 1.31607 13.7956 1 13 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V13C1 13.7956 1.31607 14.5587 1.87868 15.1213C2.44129 15.6839 3.20435 16 4 16H5C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V4C3 3.73478 3.10536 3.48043 3.29289 3.29289Z", "M11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11ZM10 11C10 10.4477 10.4477 10 11 10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V11Z"],
		close: ["M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"],
		profile: ["M12 .2c2.5 0 4.6 2.1 4.6 4.6S14.5 9.4 12 9.4 7.4 7.3 7.4 4.8 9.5.2 12 .2zm-7 15c.4-2.8 2.8-4.9 5.6-4.9h2.7c2.8 0 5.2 2.1 5.6 4.9l.9 6.1c.2 1.3-.8 2.4-2.1 2.4l-5.7.1-5.8-.1c-1.3 0-2.3-1.2-2.1-2.4l.9-6.1z"],
		camera: ["M17 10.0568V7C17 5.34315 15.6569 4 14 4H3C1.34315 4 0 5.34315 0 7V17C0 18.6569 1.34315 20 3 20H14C15.6569 20 17 18.6569 17 17V13.9432L22.4188 17.8137C22.7236 18.0315 23.1245 18.0606 23.4576 17.8892C23.7907 17.7178 24 17.3746 24 17V7C24 6.62541 23.7907 6.28224 23.4576 6.11083C23.1245 5.93943 22.7236 5.96854 22.4188 6.18627L17 10.0568ZM2 7C2 6.44772 2.44772 6 3 6H14C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18H3C2.44772 18 2 17.5523 2 17V7ZM22 15.0568L17.7205 12L22 8.94319V15.0568Z"],
		cameraOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L2.61109 4.0253C1.95895 4.11055 1.34882 4.40854 0.87868 4.87868C0.316071 5.44129 1.49012e-08 6.20435 1.49012e-08 7V17C1.49012e-08 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H14C14.7957 20 15.5587 19.6839 16.1213 19.1213C16.3957 18.847 16.6114 18.5249 16.7605 18.1747L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM15 16.4142L4.58579 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V16.4142Z", "M10.66 6H14C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7V10.34C15 10.6052 15.1054 10.8596 15.2929 11.0471L16.2929 12.0471C16.6402 12.3944 17.1882 12.4381 17.5861 12.1503L22 8.95752V17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17V7C24 6.62434 23.7895 6.28037 23.4549 6.10947C23.1204 5.93857 22.7183 5.96958 22.4139 6.18975L17.1045 10.0303L17 9.92579V7C17 6.20435 16.6839 5.44129 16.1213 4.87868C15.5587 4.31607 14.7956 4 14 4H10.66C10.1077 4 9.66 4.44772 9.66 5C9.66 5.55228 10.1077 6 10.66 6Z"],
		chevronDown: ["M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"],
		chevronRight: ["M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"],
		volume: ["M19.7772 4.22299C19.3868 3.83241 18.7536 3.83231 18.363 4.22278C17.9724 4.61324 17.9723 5.24641 18.3628 5.63699C20.05 7.32474 20.9979 9.61352 20.9979 12C20.9979 14.3865 20.05 16.6752 18.3628 18.363C17.9723 18.7536 17.9724 19.3867 18.363 19.7772C18.7536 20.1677 19.3868 20.1676 19.7772 19.777C21.8394 17.7142 22.9979 14.9168 22.9979 12C22.9979 9.08319 21.8394 6.2858 19.7772 4.22299Z", "M16.2472 7.75299C15.8568 7.36241 15.2236 7.36231 14.833 7.75278C14.4424 8.14324 14.4423 8.77641 14.8328 9.16699C15.5827 9.9171 16.0039 10.9343 16.0039 11.995C16.0039 13.0556 15.5827 14.0729 14.8328 14.823C14.4423 15.2136 14.4424 15.8467 14.833 16.2372C15.2236 16.6277 15.8568 16.6276 16.2472 16.237C17.372 15.1118 18.0039 13.586 18.0039 11.995C18.0039 10.404 17.372 8.87816 16.2472 7.75299Z", "M12 4.99999C12 4.61559 11.7797 4.26521 11.4332 4.09869C11.0867 3.93217 10.6755 3.97899 10.3753 4.21913L5.64922 7.99999H2C1.44772 7.99999 1 8.44771 1 8.99999V15C1 15.5523 1.44772 16 2 16H5.64922L10.3753 19.7809C10.6755 20.021 11.0867 20.0678 11.4332 19.9013C11.7797 19.7348 12 19.3844 12 19V4.99999ZM6.62469 9.78086L10 7.08062V16.9194L6.62469 14.2191C6.44738 14.0773 6.22707 14 6 14H3V9.99999H6C6.22707 9.99999 6.44738 9.92271 6.62469 9.78086Z"],
		volumeOff: ["M11.4332 4.09869C11.7797 4.26521 12 4.61559 12 4.99999V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V8.99999C1 8.44771 1.44772 7.99999 2 7.99999H5.64922L10.3753 4.21913C10.6755 3.97899 11.0867 3.93217 11.4332 4.09869ZM10 7.08062L6.62469 9.78086C6.44738 9.92271 6.22707 9.99999 6 9.99999H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08062Z", "M23.7071 8.29289C24.0976 8.68342 24.0976 9.31658 23.7071 9.70711L21.4142 12L23.7071 14.2929C24.0976 14.6834 24.0976 15.3166 23.7071 15.7071C23.3166 16.0976 22.6834 16.0976 22.2929 15.7071L20 13.4142L17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929L18.5858 12L16.2929 9.70711C15.9024 9.31658 15.9024 8.68342 16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289L20 10.5858L22.2929 8.29289C22.6834 7.90237 23.3166 7.90237 23.7071 8.29289Z"],
		maximize: ["M15 2C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H18.5858L13.2929 9.29289C12.9024 9.68342 12.9024 10.3166 13.2929 10.7071C13.6834 11.0976 14.3166 11.0976 14.7071 10.7071L20 5.41421V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2H15ZM10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929L4 18.5858V15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H9C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20H5.41421L10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929Z"],
		arrowUpRight: ["M7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H7Z"],
		arrowDownLeft: ["M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L9.41421 16L17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18L7 18C6.44771 18 6 17.5523 6 17L6 7C6 6.44771 6.44771 6 7 6C7.55229 6 8 6.44771 8 7L8 14.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"]
	};

	function qi({
		size: e,
		name: t,
		title: n
	}) {
		return C("svg", {
			width: e,
			height: e,
			viewBox: "0 0 24 24",
			fill: "currentcolor",
			xmlns: "http://www.w3.org/2000/svg",
			"fill-rule": "evenodd",
			children: [C("title", {
				children: n || t
			}), O1[t].map(r => C("path", {
				d: r
			}, r))]
		})
	}
	qi.defaultProps = {
		size: "20px"
	};
	var sn = (e => (e.default = "default", e.danger = "danger", e))(sn || {});

	function Bt({
		name: e,
		size: t,
		title: n,
		shadow: r,
		theme: i,
		onClick: o
	}) {
		return C("button", {
			"aria-label": n,
			onClick: o,
			className: Ue("sm-border-solid sm-border-1 sm-border-gray-lightest sm-cursor-pointer sm-transition-colors", {
				"sm-bg-white sm-rounded-full sm-p-3 hover:sm-bg-gray-lightest hover:sm-border-gray-lightest focus:sm-border-gray-light focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light": i == "default",
				"sm-border-transparent sm-bg-tertiary-base sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-tertiary-dark focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light": i == "danger",
				"sm-shadow-sm": r
			}),
			children: C(qi, {
				name: e,
				size: t,
				title: n
			})
		})
	}
	Bt.defaultProps = {
		theme: "default",
		size: "20px"
	};

	function A1({
		greeting: e
	}) {
		const {
			connectionStatus: t,
			connect: n,
			connectionError: r
		} = wt(), [i, o] = de(!1), a = ws(!i, {
			from: {
				opacity: 0
			},
			enter: {
				opacity: 1
			},
			leave: {
				opacity: 0
			}
		}), l = () => {
			if (t === Ae.ERRORED) return C("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [C(jn, {
					children: `Unable to connect. ${r == null ? void 0 : r.message}`
				}), C(Lr, {
					onClick: n,
					children: "Retry"
				})]
			});
			if (t === Ae.TIMED_OUT) return C("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [C(jn, {
					children: "Your session has ended. You can reconnect anytime you are ready."
				}), C(Lr, {
					onClick: n,
					children: "Connect"
				})]
			});
			if (t === Ae.DISCONNECTED) return C("div", {
				children: C(jn, {
					"data-sm-cy": "greetingText",
					children: e || "Got any questions? I'm happy to help."
				})
			})
		};
		return a((u, s) => s && C(Bn.div, {
			className: "sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8",
			style: u,
			children: [C("div", {
				className: "sm-round-shadow-box sm-w-full sm-p-6",
				children: l()
			}), C("div", {
				className: "sm-absolute sm-top-8 sm-right-8 sm-translate-x-1/3 -sm-translate-y-1/3",
				children: C(Bt, {
					name: "close",
					title: "Hide card",
					shadow: !0,
					onClick: () => o(!0)
				})
			})]
		}))
	}

	function x1({
		src: e
	}) {
		const t = "Digital person";
		return e ? C("div", {
			style: {
				backgroundImage: `url(${e})`
			},
			className: "sm-w-full sm-h-full sm-bg-cover sm-bg-center",
			"data-sm-cy": "profileImage",
			children: C("span", {
				class: "sm-sr-only",
				children: t
			})
		}) : C("div", {
			className: "sm-w-5 md:sm-w-12",
			children: C(qi, {
				name: "profile",
				title: t,
				size: "100%"
			})
		})
	}

	function vd({
		content: e
	}) {
		const t = e.data;
		return t.url ? C("img", {
			src: t.url,
			alt: t.alt,
			className: "sm-mx-auto sm-object-contain sm-max-w-full sm-h-full sm-max-h-87"
		}) : null
	}
	vd.defaultProps = {
		alt: ""
	};

	function ln({
		type: e,
		children: t,
		size: n = "lg"
	}) {
		return Ce(e, {
			className: Ue("sm-font-primary sm-font-medium sm-m-0 sm-text-primary-text", {
				"sm-text-xs md:sm-text-xs": n === "xs",
				"sm-text-xs md:sm-text-sm": n === "sm",
				"sm-text-sm md:sm-text-base": n === "md",
				"sm-text-base md:sm-text-lg": n === "lg",
				"sm-text-lg md:sm-text-xl": n === "xl",
				"sm-text-xl md:sm-text-2xl": n === "2xl"
			})
		}, t)
	}

	function Ps({
		content: e,
		isExternal: t
	}) {
		const n = e.data,
			r = {};
		return t && (r.target = "_blank", r.rel = "noreferrer"), C(pe, {
			children: [n.imageUrl && C("img", {
				src: n.imageUrl,
				alt: n.title
			}), C(ln, {
				type: "h2",
				children: n.title
			}), n.description && C(jn, {
				children: n.description
			}), C("div", {
				className: "sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-lightest",
				children: C("a", {
					className: "sm-text-white sm-no-underline",
					href: n.url,
					...r,
					children: C(Lr, {
						children: "View Page"
					})
				})
			})]
		})
	}
	Ps.defaultProps = {
		isExternal: !0
	};
	const yd = ["http", "https", "mailto", "tel"];

	function R1(e) {
		const t = (e || "").trim(),
			n = t.charAt(0);
		if (n === "#" || n === "/") return t;
		const r = t.indexOf(":");
		if (r === -1) return t;
		let i = -1;
		for (; ++i < yd.length;) {
			const o = yd[i];
			if (r === o.length && t.slice(0, o.length).toLowerCase() === o) return t
		}
		return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)"
	}
	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	var bd = function(t) {
		return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
	};

	function k1(e) {
		return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ed(e.position) : "start" in e || "end" in e ? Ed(e) : "line" in e || "column" in e ? Ns(e) : ""
	}

	function Ns(e) {
		return Sd(e && e.line) + ":" + Sd(e && e.column)
	}

	function Ed(e) {
		return Ns(e && e.start) + "-" + Ns(e && e.end)
	}

	function Sd(e) {
		return e && typeof e == "number" ? e : 1
	}
	class Ke extends Error {
		constructor(t, n, r) {
			const i = [null, null];
			let o = {
				start: {
					line: null,
					column: null
				},
				end: {
					line: null,
					column: null
				}
			};
			if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
				const a = r.indexOf(":");
				a === -1 ? i[1] = r : (i[0] = r.slice(0, a), i[1] = r.slice(a + 1))
			}
			n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = k1(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = typeof t == "object" ? t.stack : "", this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.source = i[0], this.ruleId = i[1], this.position = o, this.actual, this.expected, this.file, this.url, this.note
		}
	}
	Ke.prototype.file = "", Ke.prototype.name = "", Ke.prototype.reason = "", Ke.prototype.message = "", Ke.prototype.stack = "", Ke.prototype.fatal = null, Ke.prototype.column = null, Ke.prototype.line = null, Ke.prototype.source = null, Ke.prototype.ruleId = null, Ke.prototype.position = null;
	const _t = {
		basename: I1,
		dirname: P1,
		extname: N1,
		join: M1,
		sep: "/"
	};

	function I1(e, t) {
		if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
		Dr(e);
		let n = 0,
			r = -1,
			i = e.length,
			o;
		if (t === void 0 || t.length === 0 || t.length > e.length) {
			for (; i--;)
				if (e.charCodeAt(i) === 47) {
					if (o) {
						n = i + 1;
						break
					}
				} else r < 0 && (o = !0, r = i + 1);
			return r < 0 ? "" : e.slice(n, r)
		}
		if (t === e) return "";
		let a = -1,
			l = t.length - 1;
		for (; i--;)
			if (e.charCodeAt(i) === 47) {
				if (o) {
					n = i + 1;
					break
				}
			} else a < 0 && (o = !0, a = i + 1), l > -1 && (e.charCodeAt(i) === t.charCodeAt(l--) ? l < 0 && (r = i) : (l = -1, r = a));
		return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r)
	}

	function P1(e) {
		if (Dr(e), e.length === 0) return ".";
		let t = -1,
			n = e.length,
			r;
		for (; --n;)
			if (e.charCodeAt(n) === 47) {
				if (r) {
					t = n;
					break
				}
			} else r || (r = !0);
		return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t)
	}

	function N1(e) {
		Dr(e);
		let t = e.length,
			n = -1,
			r = 0,
			i = -1,
			o = 0,
			a;
		for (; t--;) {
			const l = e.charCodeAt(t);
			if (l === 47) {
				if (a) {
					r = t + 1;
					break
				}
				continue
			}
			n < 0 && (a = !0, n = t + 1), l === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
		}
		return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
	}

	function M1(...e) {
		let t = -1,
			n;
		for (; ++t < e.length;) Dr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
		return n === void 0 ? "." : L1(n)
	}

	function L1(e) {
		Dr(e);
		const t = e.charCodeAt(0) === 47;
		let n = D1(e, !t);
		return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
	}

	function D1(e, t) {
		let n = "",
			r = 0,
			i = -1,
			o = 0,
			a = -1,
			l, u;
		for (; ++a <= e.length;) {
			if (a < e.length) l = e.charCodeAt(a);
			else {
				if (l === 47) break;
				l = 47
			}
			if (l === 47) {
				if (!(i === a - 1 || o === 1))
					if (i !== a - 1 && o === 2) {
						if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
							if (n.length > 2) {
								if (u = n.lastIndexOf("/"), u !== n.length - 1) {
									u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
									continue
								}
							} else if (n.length > 0) {
								n = "", r = 0, i = a, o = 0;
								continue
							}
						}
						t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
					} else n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
				i = a, o = 0
			} else l === 46 && o > -1 ? o++ : o = -1
		}
		return n
	}

	function Dr(e) {
		if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
	}
	const U1 = {
		cwd: F1
	};

	function F1() {
		return "/"
	}

	function Ms(e) {
		return e !== null && typeof e == "object" && e.href && e.origin
	}

	function B1(e) {
		if (typeof e == "string") e = new URL(e);
		else if (!Ms(e)) {
			const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
			throw t.code = "ERR_INVALID_ARG_TYPE", t
		}
		if (e.protocol !== "file:") {
			const t = new TypeError("The URL must be of scheme file");
			throw t.code = "ERR_INVALID_URL_SCHEME", t
		}
		return j1(e)
	}

	function j1(e) {
		if (e.hostname !== "") {
			const r = new TypeError('File URL host must be "localhost" or empty on darwin');
			throw r.code = "ERR_INVALID_FILE_URL_HOST", r
		}
		const t = e.pathname;
		let n = -1;
		for (; ++n < t.length;)
			if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
				const r = t.charCodeAt(n + 2);
				if (r === 70 || r === 102) {
					const i = new TypeError("File URL path must not include encoded / characters");
					throw i.code = "ERR_INVALID_FILE_URL_PATH", i
				}
			} return decodeURIComponent(t)
	}
	const Ls = ["history", "path", "basename", "stem", "extname", "dirname"];
	class Td {
		constructor(t) {
			let n;
			t ? typeof t == "string" || bd(t) ? n = {
				value: t
			} : Ms(t) ? n = {
				path: t
			} : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = U1.cwd(), this.value, this.stored, this.result, this.map;
			let r = -1;
			for (; ++r < Ls.length;) {
				const o = Ls[r];
				o in n && n[o] !== void 0 && (this[o] = o === "history" ? [...n[o]] : n[o])
			}
			let i;
			for (i in n) Ls.includes(i) || (this[i] = n[i])
		}
		get path() {
			return this.history[this.history.length - 1]
		}
		set path(t) {
			Ms(t) && (t = B1(t)), Us(t, "path"), this.path !== t && this.history.push(t)
		}
		get dirname() {
			return typeof this.path == "string" ? _t.dirname(this.path) : void 0
		}
		set dirname(t) {
			Cd(this.basename, "dirname"), this.path = _t.join(t || "", this.basename)
		}
		get basename() {
			return typeof this.path == "string" ? _t.basename(this.path) : void 0
		}
		set basename(t) {
			Us(t, "basename"), Ds(t, "basename"), this.path = _t.join(this.dirname || "", t)
		}
		get extname() {
			return typeof this.path == "string" ? _t.extname(this.path) : void 0
		}
		set extname(t) {
			if (Ds(t, "extname"), Cd(this.dirname, "extname"), t) {
				if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
				if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
			}
			this.path = _t.join(this.dirname, this.stem + (t || ""))
		}
		get stem() {
			return typeof this.path == "string" ? _t.basename(this.path, this.extname) : void 0
		}
		set stem(t) {
			Us(t, "stem"), Ds(t, "stem"), this.path = _t.join(this.dirname || "", t + (this.extname || ""))
		}
		toString(t) {
			return (this.value || "").toString(t)
		}
		message(t, n, r) {
			const i = new Ke(t, n, r);
			return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
		}
		info(t, n, r) {
			const i = this.message(t, n, r);
			return i.fatal = null, i
		}
		fail(t, n, r) {
			const i = this.message(t, n, r);
			throw i.fatal = !0, i
		}
	}

	function Ds(e, t) {
		if (e && e.includes(_t.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + _t.sep + "`")
	}

	function Us(e, t) {
		if (!e) throw new Error("`" + t + "` cannot be empty")
	}

	function Cd(e, t) {
		if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
	}

	function wd(e) {
		if (e) throw e
	}
	var Ki = Object.prototype.hasOwnProperty,
		Od = Object.prototype.toString,
		Ad = Object.defineProperty,
		xd = Object.getOwnPropertyDescriptor,
		Rd = function(t) {
			return typeof Array.isArray == "function" ? Array.isArray(t) : Od.call(t) === "[object Array]"
		},
		kd = function(t) {
			if (!t || Od.call(t) !== "[object Object]") return !1;
			var n = Ki.call(t, "constructor"),
				r = t.constructor && t.constructor.prototype && Ki.call(t.constructor.prototype, "isPrototypeOf");
			if (t.constructor && !n && !r) return !1;
			var i;
			for (i in t);
			return typeof i > "u" || Ki.call(t, i)
		},
		Id = function(t, n) {
			Ad && n.name === "__proto__" ? Ad(t, n.name, {
				enumerable: !0,
				configurable: !0,
				value: n.newValue,
				writable: !0
			}) : t[n.name] = n.newValue
		},
		Pd = function(t, n) {
			if (n === "__proto__")
				if (Ki.call(t, n)) {
					if (xd) return xd(t, n).value
				} else return;
			return t[n]
		},
		Nd = function e() {
			var t, n, r, i, o, a, l = arguments[0],
				u = 1,
				s = arguments.length,
				c = !1;
			for (typeof l == "boolean" && (c = l, l = arguments[1] || {}, u = 2), (l == null || typeof l != "object" && typeof l != "function") && (l = {}); u < s; ++u)
				if (t = arguments[u], t != null)
					for (n in t) r = Pd(l, n), i = Pd(t, n), l !== i && (c && i && (kd(i) || (o = Rd(i))) ? (o ? (o = !1, a = r && Rd(r) ? r : []) : a = r && kd(r) ? r : {}, Id(l, {
						name: n,
						newValue: e(c, a, i)
					})) : typeof i < "u" && Id(l, {
						name: n,
						newValue: i
					}));
			return l
		};

	function Fs(e) {
		if (typeof e != "object" || e === null) return !1;
		const t = Object.getPrototypeOf(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
	}

	function V1() {
		const e = [],
			t = {
				run: n,
				use: r
			};
		return t;

		function n(...i) {
			let o = -1;
			const a = i.pop();
			if (typeof a != "function") throw new TypeError("Expected function as last argument, not " + a);
			l(null, ...i);

			function l(u, ...s) {
				const c = e[++o];
				let f = -1;
				if (u) {
					a(u);
					return
				}
				for (; ++f < i.length;)(s[f] === null || s[f] === void 0) && (s[f] = i[f]);
				i = s, c ? $1(c, l)(...s) : a(null, ...s)
			}
		}

		function r(i) {
			if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
			return e.push(i), t
		}
	}

	function $1(e, t) {
		let n;
		return r;

		function r(...a) {
			const l = e.length > a.length;
			let u;
			l && a.push(i);
			try {
				u = e.apply(this, a)
			} catch (s) {
				const c = s;
				if (l && n) throw c;
				return i(c)
			}
			l || (u instanceof Promise ? u.then(o, i) : u instanceof Error ? i(u) : o(u))
		}

		function i(a, ...l) {
			n || (n = !0, t(a, ...l))
		}

		function o(a) {
			i(null, a)
		}
	}
	const z1 = Ld().freeze(),
		Md = {}.hasOwnProperty;

	function Ld() {
		const e = V1(),
			t = [];
		let n = {},
			r, i = -1;
		return o.data = a, o.Parser = void 0, o.Compiler = void 0, o.freeze = l, o.attachers = t, o.use = u, o.parse = s, o.stringify = c, o.run = f, o.runSync = p, o.process = h, o.processSync = d, o;

		function o() {
			const m = Ld();
			let _ = -1;
			for (; ++_ < t.length;) m.use(...t[_]);
			return m.data(Nd(!0, {}, n)), m
		}

		function a(m, _) {
			return typeof m == "string" ? arguments.length === 2 ? (Vs("data", r), n[m] = _, o) : Md.call(n, m) && n[m] || null : m ? (Vs("data", r), n = m, o) : n
		}

		function l() {
			if (r) return o;
			for (; ++i < t.length;) {
				const [m, ..._] = t[i];
				if (_[0] === !1) continue;
				_[0] === !0 && (_[0] = void 0);
				const g = m.call(o, ..._);
				typeof g == "function" && e.use(g)
			}
			return r = !0, i = Number.POSITIVE_INFINITY, o
		}

		function u(m, ..._) {
			let g;
			if (Vs("use", r), m != null)
				if (typeof m == "function") O(m, ..._);
				else if (typeof m == "object") Array.isArray(m) ? w(m) : E(m);
			else throw new TypeError("Expected usable value, not `" + m + "`");
			return g && (n.settings = Object.assign(n.settings || {}, g)), o;

			function S(v) {
				if (typeof v == "function") O(v);
				else if (typeof v == "object")
					if (Array.isArray(v)) {
						const [A, ...P] = v;
						O(A, ...P)
					} else E(v);
				else throw new TypeError("Expected usable value, not `" + v + "`")
			}

			function E(v) {
				w(v.plugins), v.settings && (g = Object.assign(g || {}, v.settings))
			}

			function w(v) {
				let A = -1;
				if (v != null)
					if (Array.isArray(v))
						for (; ++A < v.length;) {
							const P = v[A];
							S(P)
						} else throw new TypeError("Expected a list of plugins, not `" + v + "`")
			}

			function O(v, A) {
				let P = -1,
					D;
				for (; ++P < t.length;)
					if (t[P][0] === v) {
						D = t[P];
						break
					} D ? (Fs(D[1]) && Fs(A) && (A = Nd(!0, D[1], A)), D[1] = A) : t.push([...arguments])
			}
		}

		function s(m) {
			o.freeze();
			const _ = Ur(m),
				g = o.Parser;
			return Bs("parse", g), Dd(g, "parse") ? new g(String(_), _).parse() : g(String(_), _)
		}

		function c(m, _) {
			o.freeze();
			const g = Ur(_),
				S = o.Compiler;
			return js("stringify", S), Ud(m), Dd(S, "compile") ? new S(m, g).compile() : S(m, g)
		}

		function f(m, _, g) {
			if (Ud(m), o.freeze(), !g && typeof _ == "function" && (g = _, _ = void 0), !g) return new Promise(S);
			S(null, g);

			function S(E, w) {
				e.run(m, Ur(_), O);

				function O(v, A, P) {
					A = A || m, v ? w(v) : E ? E(A) : g(null, A, P)
				}
			}
		}

		function p(m, _) {
			let g, S;
			return o.run(m, _, E), Fd("runSync", "run", S), g;

			function E(w, O) {
				wd(w), g = O, S = !0
			}
		}

		function h(m, _) {
			if (o.freeze(), Bs("process", o.Parser), js("process", o.Compiler), !_) return new Promise(g);
			g(null, _);

			function g(S, E) {
				const w = Ur(m);
				o.run(o.parse(w), w, (v, A, P) => {
					if (v || !A || !P) O(v);
					else {
						const D = o.stringify(A, P);
						D == null || (W1(D) ? P.value = D : P.result = D), O(v, P)
					}
				});

				function O(v, A) {
					v || !A ? E(v) : S ? S(A) : _(null, A)
				}
			}
		}

		function d(m) {
			let _;
			o.freeze(), Bs("processSync", o.Parser), js("processSync", o.Compiler);
			const g = Ur(m);
			return o.process(g, S), Fd("processSync", "process", _), g;

			function S(E) {
				_ = !0, wd(E)
			}
		}
	}

	function Dd(e, t) {
		return typeof e == "function" && e.prototype && (H1(e.prototype) || t in e.prototype)
	}

	function H1(e) {
		let t;
		for (t in e)
			if (Md.call(e, t)) return !0;
		return !1
	}

	function Bs(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
	}

	function js(e, t) {
		if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
	}

	function Vs(e, t) {
		if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
	}

	function Ud(e) {
		if (!Fs(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
	}

	function Fd(e, t, n) {
		if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
	}

	function Ur(e) {
		return G1(e) ? e : new Td(e)
	}

	function G1(e) {
		return Boolean(e && typeof e == "object" && "message" in e && "messages" in e)
	}

	function W1(e) {
		return typeof e == "string" || bd(e)
	}

	function q1(e, t) {
		var {
			includeImageAlt: n = !0
		} = t || {};
		return Bd(e, n)
	}

	function Bd(e, t) {
		return e && typeof e == "object" && (e.value || (t ? e.alt : "") || "children" in e && jd(e.children, t) || Array.isArray(e) && jd(e, t)) || ""
	}

	function jd(e, t) {
		for (var n = [], r = -1; ++r < e.length;) n[r] = Bd(e[r], t);
		return n.join("")
	}

	function $e(e, t, n, r) {
		const i = e.length;
		let o = 0,
			a;
		if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) a = Array.from(r), a.unshift(t, n), [].splice.apply(e, a);
		else
			for (n && [].splice.apply(e, [t, n]); o < r.length;) a = r.slice(o, o + 1e4), a.unshift(t, 0), [].splice.apply(e, a), o += 1e4, t += 1e4
	}

	function Xe(e, t) {
		return e.length > 0 ? ($e(e, e.length, 0, t), e) : t
	}
	const Vd = {}.hasOwnProperty;

	function $d(e) {
		const t = {};
		let n = -1;
		for (; ++n < e.length;) K1(t, e[n]);
		return t
	}

	function K1(e, t) {
		let n;
		for (n in t) {
			const i = (Vd.call(e, n) ? e[n] : void 0) || (e[n] = {}),
				o = t[n];
			let a;
			for (a in o) {
				Vd.call(i, a) || (i[a] = []);
				const l = o[a];
				X1(i[a], Array.isArray(l) ? l : l ? [l] : [])
			}
		}
	}

	function X1(e, t) {
		let n = -1;
		const r = [];
		for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
		$e(e, 0, 0, r)
	}
	const Y1 = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
		Ye = jt(/[A-Za-z]/),
		Xi = jt(/\d/),
		Q1 = jt(/[\dA-Fa-f]/),
		Pe = jt(/[\dA-Za-z]/),
		J1 = jt(/[!-/:-@[-`{-~]/),
		zd = jt(/[#-'*+\--9=?A-Z^-~]/);

	function Fr(e) {
		return e !== null && (e < 32 || e === 127)
	}

	function ve(e) {
		return e !== null && (e < 0 || e === 32)
	}

	function $(e) {
		return e !== null && e < -2
	}

	function ae(e) {
		return e === -2 || e === -1 || e === 32
	}
	const Yi = jt(/\s/),
		Qi = jt(Y1);

	function jt(e) {
		return t;

		function t(n) {
			return n !== null && e.test(String.fromCharCode(n))
		}
	}

	function Z(e, t, n, r) {
		const i = r ? r - 1 : Number.POSITIVE_INFINITY;
		let o = 0;
		return a;

		function a(u) {
			return ae(u) ? (e.enter(n), l(u)) : t(u)
		}

		function l(u) {
			return ae(u) && o++ < i ? (e.consume(u), l) : (e.exit(n), t(u))
		}
	}
	const Z1 = {
		tokenize: eS
	};

	function eS(e) {
		const t = e.attempt(this.parser.constructs.contentInitial, r, i);
		let n;
		return t;

		function r(l) {
			if (l === null) {
				e.consume(l);
				return
			}
			return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), Z(e, t, "linePrefix")
		}

		function i(l) {
			return e.enter("paragraph"), o(l)
		}

		function o(l) {
			const u = e.enter("chunkText", {
				contentType: "text",
				previous: n
			});
			return n && (n.next = u), n = u, a(l)
		}

		function a(l) {
			if (l === null) {
				e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
				return
			}
			return $(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a)
		}
	}
	const tS = {
			tokenize: nS
		},
		Hd = {
			tokenize: rS
		};

	function nS(e) {
		const t = this,
			n = [];
		let r = 0,
			i, o, a;
		return l;

		function l(E) {
			if (r < n.length) {
				const w = n[r];
				return t.containerState = w[1], e.attempt(w[0].continuation, u, s)(E)
			}
			return s(E)
		}

		function u(E) {
			if (r++, t.containerState._closeFlow) {
				t.containerState._closeFlow = void 0, i && S();
				const w = t.events.length;
				let O = w,
					v;
				for (; O--;)
					if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
						v = t.events[O][1].end;
						break
					} g(r);
				let A = w;
				for (; A < t.events.length;) t.events[A][1].end = Object.assign({}, v), A++;
				return $e(t.events, O + 1, 0, t.events.slice(w)), t.events.length = A, s(E)
			}
			return l(E)
		}

		function s(E) {
			if (r === n.length) {
				if (!i) return p(E);
				if (i.currentConstruct && i.currentConstruct.concrete) return d(E);
				t.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
			}
			return t.containerState = {}, e.check(Hd, c, f)(E)
		}

		function c(E) {
			return i && S(), g(r), p(E)
		}

		function f(E) {
			return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, d(E)
		}

		function p(E) {
			return t.containerState = {}, e.attempt(Hd, h, d)(E)
		}

		function h(E) {
			return r++, n.push([t.currentConstruct, t.containerState]), p(E)
		}

		function d(E) {
			if (E === null) {
				i && S(), g(0), e.consume(E);
				return
			}
			return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
				contentType: "flow",
				previous: o,
				_tokenizer: i
			}), m(E)
		}

		function m(E) {
			if (E === null) {
				_(e.exit("chunkFlow"), !0), g(0), e.consume(E);
				return
			}
			return $(E) ? (e.consume(E), _(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(E), m)
		}

		function _(E, w) {
			const O = t.sliceStream(E);
			if (w && O.push(null), E.previous = o, o && (o.next = E), o = E, i.defineSkip(E.start), i.write(O), t.parser.lazy[E.start.line]) {
				let v = i.events.length;
				for (; v--;)
					if (i.events[v][1].start.offset < a && (!i.events[v][1].end || i.events[v][1].end.offset > a)) return;
				const A = t.events.length;
				let P = A,
					D, U;
				for (; P--;)
					if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
						if (D) {
							U = t.events[P][1].end;
							break
						}
						D = !0
					} for (g(r), v = A; v < t.events.length;) t.events[v][1].end = Object.assign({}, U), v++;
				$e(t.events, P + 1, 0, t.events.slice(A)), t.events.length = v
			}
		}

		function g(E) {
			let w = n.length;
			for (; w-- > E;) {
				const O = n[w];
				t.containerState = O[1], O[0].exit.call(t, e)
			}
			n.length = E
		}

		function S() {
			i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
		}
	}

	function rS(e, t, n) {
		return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
	}

	function Ji(e) {
		if (e === null || ve(e) || Yi(e)) return 1;
		if (Qi(e)) return 2
	}

	function Zi(e, t, n) {
		const r = [];
		let i = -1;
		for (; ++i < e.length;) {
			const o = e[i].resolveAll;
			o && !r.includes(o) && (t = o(t, n), r.push(o))
		}
		return t
	}
	const $s = {
		name: "attention",
		tokenize: oS,
		resolveAll: iS
	};

	function iS(e, t) {
		let n = -1,
			r, i, o, a, l, u, s, c;
		for (; ++n < e.length;)
			if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
				for (r = n; r--;)
					if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
						if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
						u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
						const f = Object.assign({}, e[r][1].end),
							p = Object.assign({}, e[n][1].start);
						Gd(f, -u), Gd(p, u), a = {
							type: u > 1 ? "strongSequence" : "emphasisSequence",
							start: f,
							end: Object.assign({}, e[r][1].end)
						}, l = {
							type: u > 1 ? "strongSequence" : "emphasisSequence",
							start: Object.assign({}, e[n][1].start),
							end: p
						}, o = {
							type: u > 1 ? "strongText" : "emphasisText",
							start: Object.assign({}, e[r][1].end),
							end: Object.assign({}, e[n][1].start)
						}, i = {
							type: u > 1 ? "strong" : "emphasis",
							start: Object.assign({}, a.start),
							end: Object.assign({}, l.end)
						}, e[r][1].end = Object.assign({}, a.start), e[n][1].start = Object.assign({}, l.end), s = [], e[r][1].end.offset - e[r][1].start.offset && (s = Xe(s, [
							["enter", e[r][1], t],
							["exit", e[r][1], t]
						])), s = Xe(s, [
							["enter", i, t],
							["enter", a, t],
							["exit", a, t],
							["enter", o, t]
						]), s = Xe(s, Zi(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = Xe(s, [
							["exit", o, t],
							["enter", l, t],
							["exit", l, t],
							["exit", i, t]
						]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = Xe(s, [
							["enter", e[n][1], t],
							["exit", e[n][1], t]
						])) : c = 0, $e(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
						break
					}
			} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
		return e
	}

	function oS(e, t) {
		const n = this.parser.constructs.attentionMarkers.null,
			r = this.previous,
			i = Ji(r);
		let o;
		return a;

		function a(u) {
			return e.enter("attentionSequence"), o = u, l(u)
		}

		function l(u) {
			if (u === o) return e.consume(u), l;
			const s = e.exit("attentionSequence"),
				c = Ji(u),
				f = !c || c === 2 && i || n.includes(u),
				p = !i || i === 2 && c || n.includes(r);
			return s._open = Boolean(o === 42 ? f : f && (i || !p)), s._close = Boolean(o === 42 ? p : p && (c || !f)), t(u)
		}
	}

	function Gd(e, t) {
		e.column += t, e.offset += t, e._bufferIndex += t
	}
	const aS = {
		name: "autolink",
		tokenize: sS
	};

	function sS(e, t, n) {
		let r = 1;
		return i;

		function i(d) {
			return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
		}

		function o(d) {
			return Ye(d) ? (e.consume(d), a) : zd(d) ? s(d) : n(d)
		}

		function a(d) {
			return d === 43 || d === 45 || d === 46 || Pe(d) ? l(d) : s(d)
		}

		function l(d) {
			return d === 58 ? (e.consume(d), u) : (d === 43 || d === 45 || d === 46 || Pe(d)) && r++ < 32 ? (e.consume(d), l) : s(d)
		}

		function u(d) {
			return d === 62 ? (e.exit("autolinkProtocol"), h(d)) : d === null || d === 32 || d === 60 || Fr(d) ? n(d) : (e.consume(d), u)
		}

		function s(d) {
			return d === 64 ? (e.consume(d), r = 0, c) : zd(d) ? (e.consume(d), s) : n(d)
		}

		function c(d) {
			return Pe(d) ? f(d) : n(d)
		}

		function f(d) {
			return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", h(d)) : p(d)
		}

		function p(d) {
			return (d === 45 || Pe(d)) && r++ < 63 ? (e.consume(d), d === 45 ? p : f) : n(d)
		}

		function h(d) {
			return e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t
		}
	}
	const Br = {
		tokenize: lS,
		partial: !0
	};

	function lS(e, t, n) {
		return Z(e, r, "linePrefix");

		function r(i) {
			return i === null || $(i) ? t(i) : n(i)
		}
	}
	const Wd = {
		name: "blockQuote",
		tokenize: uS,
		continuation: {
			tokenize: cS
		},
		exit: fS
	};

	function uS(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			if (a === 62) {
				const l = r.containerState;
				return l.open || (e.enter("blockQuote", {
					_container: !0
				}), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o
			}
			return n(a)
		}

		function o(a) {
			return ae(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a))
		}
	}

	function cS(e, t, n) {
		return Z(e, e.attempt(Wd, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
	}

	function fS(e) {
		e.exit("blockQuote")
	}
	const qd = {
		name: "characterEscape",
		tokenize: dS
	};

	function dS(e, t, n) {
		return r;

		function r(o) {
			return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
		}

		function i(o) {
			return J1(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
		}
	}
	const Kd = document.createElement("i");

	function zs(e) {
		const t = "&" + e + ";";
		Kd.innerHTML = t;
		const n = Kd.textContent;
		return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
	}
	const Xd = {
		name: "characterReference",
		tokenize: hS
	};

	function hS(e, t, n) {
		const r = this;
		let i = 0,
			o, a;
		return l;

		function l(f) {
			return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u
		}

		function u(f) {
			return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, a = Pe, c(f))
		}

		function s(f) {
			return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Q1, c) : (e.enter("characterReferenceValue"), o = 7, a = Xi, c(f))
		}

		function c(f) {
			let p;
			return f === 59 && i ? (p = e.exit("characterReferenceValue"), a === Pe && !zs(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : a(f) && i++ < o ? (e.consume(f), c) : n(f)
		}
	}
	const Yd = {
		name: "codeFenced",
		tokenize: pS,
		concrete: !0
	};

	function pS(e, t, n) {
		const r = this,
			i = {
				tokenize: O,
				partial: !0
			},
			o = {
				tokenize: w,
				partial: !0
			},
			a = this.events[this.events.length - 1],
			l = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], !0).length : 0;
		let u = 0,
			s;
		return c;

		function c(v) {
			return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), s = v, f(v)
		}

		function f(v) {
			return v === s ? (e.consume(v), u++, f) : (e.exit("codeFencedFenceSequence"), u < 3 ? n(v) : Z(e, p, "whitespace")(v))
		}

		function p(v) {
			return v === null || $(v) ? _(v) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
				contentType: "string"
			}), h(v))
		}

		function h(v) {
			return v === null || ve(v) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, d, "whitespace")(v)) : v === 96 && v === s ? n(v) : (e.consume(v), h)
		}

		function d(v) {
			return v === null || $(v) ? _(v) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
				contentType: "string"
			}), m(v))
		}

		function m(v) {
			return v === null || $(v) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), _(v)) : v === 96 && v === s ? n(v) : (e.consume(v), m)
		}

		function _(v) {
			return e.exit("codeFencedFence"), r.interrupt ? t(v) : g(v)
		}

		function g(v) {
			return v === null ? E(v) : $(v) ? e.attempt(o, e.attempt(i, E, l ? Z(e, g, "linePrefix", l + 1) : g), E)(v) : (e.enter("codeFlowValue"), S(v))
		}

		function S(v) {
			return v === null || $(v) ? (e.exit("codeFlowValue"), g(v)) : (e.consume(v), S)
		}

		function E(v) {
			return e.exit("codeFenced"), t(v)
		}

		function w(v, A, P) {
			const D = this;
			return U;

			function U(M) {
				return v.enter("lineEnding"), v.consume(M), v.exit("lineEnding"), R
			}

			function R(M) {
				return D.parser.lazy[D.now().line] ? P(M) : A(M)
			}
		}

		function O(v, A, P) {
			let D = 0;
			return Z(v, U, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

			function U(j) {
				return v.enter("codeFencedFence"), v.enter("codeFencedFenceSequence"), R(j)
			}

			function R(j) {
				return j === s ? (v.consume(j), D++, R) : D < u ? P(j) : (v.exit("codeFencedFenceSequence"), Z(v, M, "whitespace")(j))
			}

			function M(j) {
				return j === null || $(j) ? (v.exit("codeFencedFence"), A(j)) : P(j)
			}
		}
	}
	const Hs = {
			name: "codeIndented",
			tokenize: gS
		},
		mS = {
			tokenize: _S,
			partial: !0
		};

	function gS(e, t, n) {
		const r = this;
		return i;

		function i(s) {
			return e.enter("codeIndented"), Z(e, o, "linePrefix", 4 + 1)(s)
		}

		function o(s) {
			const c = r.events[r.events.length - 1];
			return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? a(s) : n(s)
		}

		function a(s) {
			return s === null ? u(s) : $(s) ? e.attempt(mS, a, u)(s) : (e.enter("codeFlowValue"), l(s))
		}

		function l(s) {
			return s === null || $(s) ? (e.exit("codeFlowValue"), a(s)) : (e.consume(s), l)
		}

		function u(s) {
			return e.exit("codeIndented"), t(s)
		}
	}

	function _S(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return r.parser.lazy[r.now().line] ? n(a) : $(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : Z(e, o, "linePrefix", 4 + 1)(a)
		}

		function o(a) {
			const l = r.events[r.events.length - 1];
			return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : $(a) ? i(a) : n(a)
		}
	}
	const vS = {
		name: "codeText",
		tokenize: ES,
		resolve: yS,
		previous: bS
	};

	function yS(e) {
		let t = e.length - 4,
			n = 3,
			r, i;
		if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
			for (r = n; ++r < t;)
				if (e[r][1].type === "codeTextData") {
					e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
					break
				}
		}
		for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
		return e
	}

	function bS(e) {
		return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
	}

	function ES(e, t, n) {
		let r = 0,
			i, o;
		return a;

		function a(f) {
			return e.enter("codeText"), e.enter("codeTextSequence"), l(f)
		}

		function l(f) {
			return f === 96 ? (e.consume(f), r++, l) : (e.exit("codeTextSequence"), u(f))
		}

		function u(f) {
			return f === null ? n(f) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : $(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(f))
		}

		function s(f) {
			return f === null || f === 32 || f === 96 || $(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s)
		}

		function c(f) {
			return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", s(f))
		}
	}

	function Qd(e) {
		const t = {};
		let n = -1,
			r, i, o, a, l, u, s;
		for (; ++n < e.length;) {
			for (; n in t;) n = t[n];
			if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
				for (; ++o < u.length && u[o][1].type !== "content";) u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
			if (r[0] === "enter") r[1].contentType && (Object.assign(t, SS(e, n)), n = t[n], s = !0);
			else if (r[1]._container) {
				for (o = n, i = void 0; o-- && (a = e[o], a[1].type === "lineEnding" || a[1].type === "lineEndingBlank");) a[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
				i && (r[1].end = Object.assign({}, e[i][1].start), l = e.slice(i, n), l.unshift(r), $e(e, i, n - i + 1, l))
			}
		}
		return !s
	}

	function SS(e, t) {
		const n = e[t][1],
			r = e[t][2];
		let i = t - 1;
		const o = [],
			a = n._tokenizer || r.parser[n.contentType](n.start),
			l = a.events,
			u = [],
			s = {};
		let c, f, p = -1,
			h = n,
			d = 0,
			m = 0;
		const _ = [m];
		for (; h;) {
			for (; e[++i][1] !== h;);
			o.push(i), h._tokenizer || (c = r.sliceStream(h), h.next || c.push(null), f && a.defineSkip(h.start), h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(c), h._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next
		}
		for (h = n; ++p < l.length;) l[p][0] === "exit" && l[p - 1][0] === "enter" && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line && (m = p + 1, _.push(m), h._tokenizer = void 0, h.previous = void 0, h = h.next);
		for (a.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : _.pop(), p = _.length; p--;) {
			const g = l.slice(_[p], _[p + 1]),
				S = o.pop();
			u.unshift([S, S + g.length - 1]), $e(e, S, 2, g)
		}
		for (p = -1; ++p < u.length;) s[d + u[p][0]] = d + u[p][1], d += u[p][1] - u[p][0] - 1;
		return s
	}
	const TS = {
			tokenize: OS,
			resolve: wS
		},
		CS = {
			tokenize: AS,
			partial: !0
		};

	function wS(e) {
		return Qd(e), e
	}

	function OS(e, t) {
		let n;
		return r;

		function r(l) {
			return e.enter("content"), n = e.enter("chunkContent", {
				contentType: "content"
			}), i(l)
		}

		function i(l) {
			return l === null ? o(l) : $(l) ? e.check(CS, a, o)(l) : (e.consume(l), i)
		}

		function o(l) {
			return e.exit("chunkContent"), e.exit("content"), t(l)
		}

		function a(l) {
			return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
				contentType: "content",
				previous: n
			}), n = n.next, i
		}
	}

	function AS(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), Z(e, o, "linePrefix")
		}

		function o(a) {
			if (a === null || $(a)) return n(a);
			const l = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a)
		}
	}

	function Jd(e, t, n, r, i, o, a, l, u) {
		const s = u || Number.POSITIVE_INFINITY;
		let c = 0;
		return f;

		function f(g) {
			return g === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(g), e.exit(o), p) : g === null || g === 41 || Fr(g) ? n(g) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
				contentType: "string"
			}), m(g))
		}

		function p(g) {
			return g === 62 ? (e.enter(o), e.consume(g), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
				contentType: "string"
			}), h(g))
		}

		function h(g) {
			return g === 62 ? (e.exit("chunkString"), e.exit(l), p(g)) : g === null || g === 60 || $(g) ? n(g) : (e.consume(g), g === 92 ? d : h)
		}

		function d(g) {
			return g === 60 || g === 62 || g === 92 ? (e.consume(g), h) : h(g)
		}

		function m(g) {
			return g === 40 ? ++c > s ? n(g) : (e.consume(g), m) : g === 41 ? c-- ? (e.consume(g), m) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(g)) : g === null || ve(g) ? c ? n(g) : (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(g)) : Fr(g) ? n(g) : (e.consume(g), g === 92 ? _ : m)
		}

		function _(g) {
			return g === 40 || g === 41 || g === 92 ? (e.consume(g), m) : m(g)
		}
	}

	function Zd(e, t, n, r, i, o) {
		const a = this;
		let l = 0,
			u;
		return s;

		function s(h) {
			return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), c
		}

		function c(h) {
			return h === null || h === 91 || h === 93 && !u || h === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs || l > 999 ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : $(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c) : (e.enter("chunkString", {
				contentType: "string"
			}), f(h))
		}

		function f(h) {
			return h === null || h === 91 || h === 93 || $(h) || l++ > 999 ? (e.exit("chunkString"), c(h)) : (e.consume(h), u = u || !ae(h), h === 92 ? p : f)
		}

		function p(h) {
			return h === 91 || h === 92 || h === 93 ? (e.consume(h), l++, f) : f(h)
		}
	}

	function eh(e, t, n, r, i, o) {
		let a;
		return l;

		function l(p) {
			return e.enter(r), e.enter(i), e.consume(p), e.exit(i), a = p === 40 ? 41 : p, u
		}

		function u(p) {
			return p === a ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), s(p))
		}

		function s(p) {
			return p === a ? (e.exit(o), u(a)) : p === null ? n(p) : $(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), Z(e, s, "linePrefix")) : (e.enter("chunkString", {
				contentType: "string"
			}), c(p))
		}

		function c(p) {
			return p === a || p === null || $(p) ? (e.exit("chunkString"), s(p)) : (e.consume(p), p === 92 ? f : c)
		}

		function f(p) {
			return p === a || p === 92 ? (e.consume(p), c) : c(p)
		}
	}

	function jr(e, t) {
		let n;
		return r;

		function r(i) {
			return $(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ae(i) ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
		}
	}

	function ot(e) {
		return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
	}
	const xS = {
			name: "definition",
			tokenize: kS
		},
		RS = {
			tokenize: IS,
			partial: !0
		};

	function kS(e, t, n) {
		const r = this;
		let i;
		return o;

		function o(u) {
			return e.enter("definition"), Zd.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(u)
		}

		function a(u) {
			return i = ot(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), u === 58 ? (e.enter("definitionMarker"), e.consume(u), e.exit("definitionMarker"), jr(e, Jd(e, e.attempt(RS, Z(e, l, "whitespace"), Z(e, l, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(u)
		}

		function l(u) {
			return u === null || $(u) ? (e.exit("definition"), r.parser.defined.includes(i) || r.parser.defined.push(i), t(u)) : n(u)
		}
	}

	function IS(e, t, n) {
		return r;

		function r(a) {
			return ve(a) ? jr(e, i)(a) : n(a)
		}

		function i(a) {
			return a === 34 || a === 39 || a === 40 ? eh(e, Z(e, o, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a) : n(a)
		}

		function o(a) {
			return a === null || $(a) ? t(a) : n(a)
		}
	}
	const PS = {
		name: "hardBreakEscape",
		tokenize: NS
	};

	function NS(e, t, n) {
		return r;

		function r(o) {
			return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(o), i
		}

		function i(o) {
			return $(o) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(o)) : n(o)
		}
	}
	const MS = {
		name: "headingAtx",
		tokenize: DS,
		resolve: LS
	};

	function LS(e, t) {
		let n = e.length - 2,
			r = 3,
			i, o;
		return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
			type: "atxHeadingText",
			start: e[r][1].start,
			end: e[n][1].end
		}, o = {
			type: "chunkText",
			start: e[r][1].start,
			end: e[n][1].end,
			contentType: "text"
		}, $e(e, r, n - r + 1, [
			["enter", i, t],
			["enter", o, t],
			["exit", o, t],
			["exit", i, t]
		])), e
	}

	function DS(e, t, n) {
		const r = this;
		let i = 0;
		return o;

		function o(c) {
			return e.enter("atxHeading"), e.enter("atxHeadingSequence"), a(c)
		}

		function a(c) {
			return c === 35 && i++ < 6 ? (e.consume(c), a) : c === null || ve(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : l(c)) : n(c)
		}

		function l(c) {
			return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || $(c) ? (e.exit("atxHeading"), t(c)) : ae(c) ? Z(e, l, "whitespace")(c) : (e.enter("atxHeadingText"), s(c))
		}

		function u(c) {
			return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), l(c))
		}

		function s(c) {
			return c === null || c === 35 || ve(c) ? (e.exit("atxHeadingText"), l(c)) : (e.consume(c), s)
		}
	}
	const US = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
		th = ["pre", "script", "style", "textarea"],
		FS = {
			name: "htmlFlow",
			tokenize: VS,
			resolveTo: jS,
			concrete: !0
		},
		BS = {
			tokenize: $S,
			partial: !0
		};

	function jS(e) {
		let t = e.length;
		for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
		return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
	}

	function VS(e, t, n) {
		const r = this;
		let i, o, a, l, u;
		return s;

		function s(y) {
			return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), c
		}

		function c(y) {
			return y === 33 ? (e.consume(y), f) : y === 47 ? (e.consume(y), d) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : J) : Ye(y) ? (e.consume(y), a = String.fromCharCode(y), o = !0, m) : n(y)
		}

		function f(y) {
			return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = "CDATA[", l = 0, h) : Ye(y) ? (e.consume(y), i = 4, r.interrupt ? t : J) : n(y)
		}

		function p(y) {
			return y === 45 ? (e.consume(y), r.interrupt ? t : J) : n(y)
		}

		function h(y) {
			return y === a.charCodeAt(l++) ? (e.consume(y), l === a.length ? r.interrupt ? t : R : h) : n(y)
		}

		function d(y) {
			return Ye(y) ? (e.consume(y), a = String.fromCharCode(y), m) : n(y)
		}

		function m(y) {
			return y === null || y === 47 || y === 62 || ve(y) ? y !== 47 && o && th.includes(a.toLowerCase()) ? (i = 1, r.interrupt ? t(y) : R(y)) : US.includes(a.toLowerCase()) ? (i = 6, y === 47 ? (e.consume(y), _) : r.interrupt ? t(y) : R(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? S(y) : g(y)) : y === 45 || Pe(y) ? (e.consume(y), a += String.fromCharCode(y), m) : n(y)
		}

		function _(y) {
			return y === 62 ? (e.consume(y), r.interrupt ? t : R) : n(y)
		}

		function g(y) {
			return ae(y) ? (e.consume(y), g) : D(y)
		}

		function S(y) {
			return y === 47 ? (e.consume(y), D) : y === 58 || y === 95 || Ye(y) ? (e.consume(y), E) : ae(y) ? (e.consume(y), S) : D(y)
		}

		function E(y) {
			return y === 45 || y === 46 || y === 58 || y === 95 || Pe(y) ? (e.consume(y), E) : w(y)
		}

		function w(y) {
			return y === 61 ? (e.consume(y), O) : ae(y) ? (e.consume(y), w) : S(y)
		}

		function O(y) {
			return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), u = y, v) : ae(y) ? (e.consume(y), O) : (u = null, A(y))
		}

		function v(y) {
			return y === null || $(y) ? n(y) : y === u ? (e.consume(y), P) : (e.consume(y), v)
		}

		function A(y) {
			return y === null || y === 34 || y === 39 || y === 60 || y === 61 || y === 62 || y === 96 || ve(y) ? w(y) : (e.consume(y), A)
		}

		function P(y) {
			return y === 47 || y === 62 || ae(y) ? S(y) : n(y)
		}

		function D(y) {
			return y === 62 ? (e.consume(y), U) : n(y)
		}

		function U(y) {
			return ae(y) ? (e.consume(y), U) : y === null || $(y) ? R(y) : n(y)
		}

		function R(y) {
			return y === 45 && i === 2 ? (e.consume(y), F) : y === 60 && i === 1 ? (e.consume(y), T) : y === 62 && i === 4 ? (e.consume(y), te) : y === 63 && i === 3 ? (e.consume(y), J) : y === 93 && i === 5 ? (e.consume(y), V) : $(y) && (i === 6 || i === 7) ? e.check(BS, te, M)(y) : y === null || $(y) ? M(y) : (e.consume(y), R)
		}

		function M(y) {
			return e.exit("htmlFlowData"), j(y)
		}

		function j(y) {
			return y === null ? b(y) : $(y) ? e.attempt({
				tokenize: L,
				partial: !0
			}, j, b)(y) : (e.enter("htmlFlowData"), R(y))
		}

		function L(y, Ze, Ht) {
			return Te;

			function Te(Se) {
				return y.enter("lineEnding"), y.consume(Se), y.exit("lineEnding"), le
			}

			function le(Se) {
				return r.parser.lazy[r.now().line] ? Ht(Se) : Ze(Se)
			}
		}

		function F(y) {
			return y === 45 ? (e.consume(y), J) : R(y)
		}

		function T(y) {
			return y === 47 ? (e.consume(y), a = "", Y) : R(y)
		}

		function Y(y) {
			return y === 62 && th.includes(a.toLowerCase()) ? (e.consume(y), te) : Ye(y) && a.length < 8 ? (e.consume(y), a += String.fromCharCode(y), Y) : R(y)
		}

		function V(y) {
			return y === 93 ? (e.consume(y), J) : R(y)
		}

		function J(y) {
			return y === 62 ? (e.consume(y), te) : y === 45 && i === 2 ? (e.consume(y), J) : R(y)
		}

		function te(y) {
			return y === null || $(y) ? (e.exit("htmlFlowData"), b(y)) : (e.consume(y), te)
		}

		function b(y) {
			return e.exit("htmlFlow"), t(y)
		}
	}

	function $S(e, t, n) {
		return r;

		function r(i) {
			return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), e.attempt(Br, t, n)
		}
	}
	const zS = {
		name: "htmlText",
		tokenize: HS
	};

	function HS(e, t, n) {
		const r = this;
		let i, o, a, l;
		return u;

		function u(b) {
			return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), s
		}

		function s(b) {
			return b === 33 ? (e.consume(b), c) : b === 47 ? (e.consume(b), A) : b === 63 ? (e.consume(b), O) : Ye(b) ? (e.consume(b), U) : n(b)
		}

		function c(b) {
			return b === 45 ? (e.consume(b), f) : b === 91 ? (e.consume(b), o = "CDATA[", a = 0, _) : Ye(b) ? (e.consume(b), w) : n(b)
		}

		function f(b) {
			return b === 45 ? (e.consume(b), p) : n(b)
		}

		function p(b) {
			return b === null || b === 62 ? n(b) : b === 45 ? (e.consume(b), h) : d(b)
		}

		function h(b) {
			return b === null || b === 62 ? n(b) : d(b)
		}

		function d(b) {
			return b === null ? n(b) : b === 45 ? (e.consume(b), m) : $(b) ? (l = d, V(b)) : (e.consume(b), d)
		}

		function m(b) {
			return b === 45 ? (e.consume(b), te) : d(b)
		}

		function _(b) {
			return b === o.charCodeAt(a++) ? (e.consume(b), a === o.length ? g : _) : n(b)
		}

		function g(b) {
			return b === null ? n(b) : b === 93 ? (e.consume(b), S) : $(b) ? (l = g, V(b)) : (e.consume(b), g)
		}

		function S(b) {
			return b === 93 ? (e.consume(b), E) : g(b)
		}

		function E(b) {
			return b === 62 ? te(b) : b === 93 ? (e.consume(b), E) : g(b)
		}

		function w(b) {
			return b === null || b === 62 ? te(b) : $(b) ? (l = w, V(b)) : (e.consume(b), w)
		}

		function O(b) {
			return b === null ? n(b) : b === 63 ? (e.consume(b), v) : $(b) ? (l = O, V(b)) : (e.consume(b), O)
		}

		function v(b) {
			return b === 62 ? te(b) : O(b)
		}

		function A(b) {
			return Ye(b) ? (e.consume(b), P) : n(b)
		}

		function P(b) {
			return b === 45 || Pe(b) ? (e.consume(b), P) : D(b)
		}

		function D(b) {
			return $(b) ? (l = D, V(b)) : ae(b) ? (e.consume(b), D) : te(b)
		}

		function U(b) {
			return b === 45 || Pe(b) ? (e.consume(b), U) : b === 47 || b === 62 || ve(b) ? R(b) : n(b)
		}

		function R(b) {
			return b === 47 ? (e.consume(b), te) : b === 58 || b === 95 || Ye(b) ? (e.consume(b), M) : $(b) ? (l = R, V(b)) : ae(b) ? (e.consume(b), R) : te(b)
		}

		function M(b) {
			return b === 45 || b === 46 || b === 58 || b === 95 || Pe(b) ? (e.consume(b), M) : j(b)
		}

		function j(b) {
			return b === 61 ? (e.consume(b), L) : $(b) ? (l = j, V(b)) : ae(b) ? (e.consume(b), j) : R(b)
		}

		function L(b) {
			return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, F) : $(b) ? (l = L, V(b)) : ae(b) ? (e.consume(b), L) : (e.consume(b), i = void 0, Y)
		}

		function F(b) {
			return b === i ? (e.consume(b), T) : b === null ? n(b) : $(b) ? (l = F, V(b)) : (e.consume(b), F)
		}

		function T(b) {
			return b === 62 || b === 47 || ve(b) ? R(b) : n(b)
		}

		function Y(b) {
			return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 62 || ve(b) ? R(b) : (e.consume(b), Y)
		}

		function V(b) {
			return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), Z(e, J, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
		}

		function J(b) {
			return e.enter("htmlTextData"), l(b)
		}

		function te(b) {
			return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b)
		}
	}
	const Gs = {
			name: "labelEnd",
			tokenize: YS,
			resolveTo: XS,
			resolveAll: KS
		},
		GS = {
			tokenize: QS
		},
		WS = {
			tokenize: JS
		},
		qS = {
			tokenize: ZS
		};

	function KS(e) {
		let t = -1,
			n;
		for (; ++t < e.length;) n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
		return e
	}

	function XS(e, t) {
		let n = e.length,
			r = 0,
			i, o, a, l;
		for (; n--;)
			if (i = e[n][1], o) {
				if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
				e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
			} else if (a) {
			if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
				r = 2;
				break
			}
		} else i.type === "labelEnd" && (a = n);
		const u = {
				type: e[o][1].type === "labelLink" ? "link" : "image",
				start: Object.assign({}, e[o][1].start),
				end: Object.assign({}, e[e.length - 1][1].end)
			},
			s = {
				type: "label",
				start: Object.assign({}, e[o][1].start),
				end: Object.assign({}, e[a][1].end)
			},
			c = {
				type: "labelText",
				start: Object.assign({}, e[o + r + 2][1].end),
				end: Object.assign({}, e[a - 2][1].start)
			};
		return l = [
			["enter", u, t],
			["enter", s, t]
		], l = Xe(l, e.slice(o + 1, o + r + 3)), l = Xe(l, [
			["enter", c, t]
		]), l = Xe(l, Zi(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), l = Xe(l, [
			["exit", c, t], e[a - 2], e[a - 1],
			["exit", s, t]
		]), l = Xe(l, e.slice(a + 1)), l = Xe(l, [
			["exit", u, t]
		]), $e(e, o, e.length, l), e
	}

	function YS(e, t, n) {
		const r = this;
		let i = r.events.length,
			o, a;
		for (; i--;)
			if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
				o = r.events[i][1];
				break
			} return l;

		function l(c) {
			return o ? o._inactive ? s(c) : (a = r.parser.defined.includes(ot(r.sliceSerialize({
				start: o.end,
				end: r.now()
			}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(c)
		}

		function u(c) {
			return c === 40 ? e.attempt(GS, t, a ? t : s)(c) : c === 91 ? e.attempt(WS, t, a ? e.attempt(qS, t, s) : s)(c) : a ? t(c) : s(c)
		}

		function s(c) {
			return o._balanced = !0, n(c)
		}
	}

	function QS(e, t, n) {
		return r;

		function r(u) {
			return e.enter("resource"), e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), jr(e, i)
		}

		function i(u) {
			return u === 41 ? l(u) : Jd(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(u)
		}

		function o(u) {
			return ve(u) ? jr(e, a)(u) : l(u)
		}

		function a(u) {
			return u === 34 || u === 39 || u === 40 ? eh(e, jr(e, l), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(u) : l(u)
		}

		function l(u) {
			return u === 41 ? (e.enter("resourceMarker"), e.consume(u), e.exit("resourceMarker"), e.exit("resource"), t) : n(u)
		}
	}

	function JS(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return Zd.call(r, e, o, n, "reference", "referenceMarker", "referenceString")(a)
		}

		function o(a) {
			return r.parser.defined.includes(ot(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a)
		}
	}

	function ZS(e, t, n) {
		return r;

		function r(o) {
			return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
		}

		function i(o) {
			return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
		}
	}
	const eT = {
		name: "labelStartImage",
		tokenize: tT,
		resolveAll: Gs.resolveAll
	};

	function tT(e, t, n) {
		const r = this;
		return i;

		function i(l) {
			return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o
		}

		function o(l) {
			return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l)
		}

		function a(l) {
			return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l)
		}
	}
	const nT = {
		name: "labelStartLink",
		tokenize: rT,
		resolveAll: Gs.resolveAll
	};

	function rT(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o
		}

		function o(a) {
			return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
		}
	}
	const Ws = {
		name: "lineEnding",
		tokenize: iT
	};

	function iT(e, t) {
		return n;

		function n(r) {
			return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Z(e, t, "linePrefix")
		}
	}
	const eo = {
		name: "thematicBreak",
		tokenize: oT
	};

	function oT(e, t, n) {
		let r = 0,
			i;
		return o;

		function o(u) {
			return e.enter("thematicBreak"), i = u, a(u)
		}

		function a(u) {
			return u === i ? (e.enter("thematicBreakSequence"), l(u)) : ae(u) ? Z(e, a, "whitespace")(u) : r < 3 || u !== null && !$(u) ? n(u) : (e.exit("thematicBreak"), t(u))
		}

		function l(u) {
			return u === i ? (e.consume(u), r++, l) : (e.exit("thematicBreakSequence"), a(u))
		}
	}
	const Fe = {
			name: "list",
			tokenize: lT,
			continuation: {
				tokenize: uT
			},
			exit: fT
		},
		aT = {
			tokenize: dT,
			partial: !0
		},
		sT = {
			tokenize: cT,
			partial: !0
		};

	function lT(e, t, n) {
		const r = this,
			i = r.events[r.events.length - 1];
		let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
			a = 0;
		return l;

		function l(h) {
			const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
			if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : Xi(h)) {
				if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
						_container: !0
					})), d === "listUnordered") return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(eo, n, s)(h) : s(h);
				if (!r.interrupt || h === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h)
			}
			return n(h)
		}

		function u(h) {
			return Xi(h) && ++a < 10 ? (e.consume(h), u) : (!r.interrupt || a < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), s(h)) : n(h)
		}

		function s(h) {
			return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(Br, r.interrupt ? n : c, e.attempt(aT, p, f))
		}

		function c(h) {
			return r.containerState.initialBlankLine = !0, o++, p(h)
		}

		function f(h) {
			return ae(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), p) : n(h)
		}

		function p(h) {
			return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h)
		}
	}

	function uT(e, t, n) {
		const r = this;
		return r.containerState._closeFlow = void 0, e.check(Br, i, o);

		function i(l) {
			return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, t, "listItemIndent", r.containerState.size + 1)(l)
		}

		function o(l) {
			return r.containerState.furtherBlankLines || !ae(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(sT, t, a)(l))
		}

		function a(l) {
			return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(Fe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l)
		}
	}

	function cT(e, t, n) {
		const r = this;
		return Z(e, i, "listItemIndent", r.containerState.size + 1);

		function i(o) {
			const a = r.events[r.events.length - 1];
			return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o)
		}
	}

	function fT(e) {
		e.exit(this.containerState.type)
	}

	function dT(e, t, n) {
		const r = this;
		return Z(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

		function i(o) {
			const a = r.events[r.events.length - 1];
			return !ae(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
		}
	}
	const nh = {
		name: "setextUnderline",
		tokenize: pT,
		resolveTo: hT
	};

	function hT(e, t) {
		let n = e.length,
			r, i, o;
		for (; n--;)
			if (e[n][0] === "enter") {
				if (e[n][1].type === "content") {
					r = n;
					break
				}
				e[n][1].type === "paragraph" && (i = n)
			} else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
		const a = {
			type: "setextHeading",
			start: Object.assign({}, e[i][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		};
		return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = a, e.push(["exit", a, t]), e
	}

	function pT(e, t, n) {
		const r = this;
		let i = r.events.length,
			o, a;
		for (; i--;)
			if (r.events[i][1].type !== "lineEnding" && r.events[i][1].type !== "linePrefix" && r.events[i][1].type !== "content") {
				a = r.events[i][1].type === "paragraph";
				break
			} return l;

		function l(c) {
			return !r.parser.lazy[r.now().line] && (r.interrupt || a) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), o = c, u(c)) : n(c)
		}

		function u(c) {
			return c === o ? (e.consume(c), u) : (e.exit("setextHeadingLineSequence"), Z(e, s, "lineSuffix")(c))
		}

		function s(c) {
			return c === null || $(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c)
		}
	}
	const mT = {
		tokenize: gT
	};

	function gT(e) {
		const t = this,
			n = e.attempt(Br, r, e.attempt(this.parser.constructs.flowInitial, i, Z(e, e.attempt(this.parser.constructs.flow, i, e.attempt(TS, i)), "linePrefix")));
		return n;

		function r(o) {
			if (o === null) {
				e.consume(o);
				return
			}
			return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
		}

		function i(o) {
			if (o === null) {
				e.consume(o);
				return
			}
			return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
		}
	}
	const _T = {
			resolveAll: ih()
		},
		vT = rh("string"),
		yT = rh("text");

	function rh(e) {
		return {
			tokenize: t,
			resolveAll: ih(e === "text" ? bT : void 0)
		};

		function t(n) {
			const r = this,
				i = this.parser.constructs[e],
				o = n.attempt(i, a, l);
			return a;

			function a(c) {
				return s(c) ? o(c) : l(c)
			}

			function l(c) {
				if (c === null) {
					n.consume(c);
					return
				}
				return n.enter("data"), n.consume(c), u
			}

			function u(c) {
				return s(c) ? (n.exit("data"), o(c)) : (n.consume(c), u)
			}

			function s(c) {
				if (c === null) return !0;
				const f = i[c];
				let p = -1;
				if (f)
					for (; ++p < f.length;) {
						const h = f[p];
						if (!h.previous || h.previous.call(r, r.previous)) return !0
					}
				return !1
			}
		}
	}

	function ih(e) {
		return t;

		function t(n, r) {
			let i = -1,
				o;
			for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
			return e ? e(n, r) : n
		}
	}

	function bT(e, t) {
		let n = 0;
		for (; ++n <= e.length;)
			if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
				const r = e[n - 1][1],
					i = t.sliceStream(r);
				let o = i.length,
					a = -1,
					l = 0,
					u;
				for (; o--;) {
					const s = i[o];
					if (typeof s == "string") {
						for (a = s.length; s.charCodeAt(a - 1) === 32;) l++, a--;
						if (a) break;
						a = -1
					} else if (s === -2) u = !0, l++;
					else if (s !== -1) {
						o++;
						break
					}
				}
				if (l) {
					const s = {
						type: n === e.length || u || l < 2 ? "lineSuffix" : "hardBreakTrailing",
						start: {
							line: r.end.line,
							column: r.end.column - l,
							offset: r.end.offset - l,
							_index: r.start._index + o,
							_bufferIndex: o ? a : r.start._bufferIndex + a
						},
						end: Object.assign({}, r.end)
					};
					r.end = Object.assign({}, s.start), r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2)
				}
				n++
			} return e
	}

	function ET(e, t, n) {
		let r = Object.assign(n ? Object.assign({}, n) : {
			line: 1,
			column: 1,
			offset: 0
		}, {
			_index: 0,
			_bufferIndex: -1
		});
		const i = {},
			o = [];
		let a = [],
			l = [];
		const u = {
				consume: S,
				enter: E,
				exit: w,
				attempt: A(O),
				check: A(v),
				interrupt: A(v, {
					interrupt: !0
				})
			},
			s = {
				previous: null,
				code: null,
				containerState: {},
				events: [],
				parser: e,
				sliceStream: h,
				sliceSerialize: p,
				now: d,
				defineSkip: m,
				write: f
			};
		let c = t.tokenize.call(s, u);
		return t.resolveAll && o.push(t), s;

		function f(R) {
			return a = Xe(a, R), _(), a[a.length - 1] !== null ? [] : (P(t, 0), s.events = Zi(o, s.events, s), s.events)
		}

		function p(R, M) {
			return TT(h(R), M)
		}

		function h(R) {
			return ST(a, R)
		}

		function d() {
			return Object.assign({}, r)
		}

		function m(R) {
			i[R.line] = R.column, U()
		}

		function _() {
			let R;
			for (; r._index < a.length;) {
				const M = a[r._index];
				if (typeof M == "string")
					for (R = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === R && r._bufferIndex < M.length;) g(M.charCodeAt(r._bufferIndex));
				else g(M)
			}
		}

		function g(R) {
			c = c(R)
		}

		function S(R) {
			$(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, U()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === a[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = R
		}

		function E(R, M) {
			const j = M || {};
			return j.type = R, j.start = d(), s.events.push(["enter", j, s]), l.push(j), j
		}

		function w(R) {
			const M = l.pop();
			return M.end = d(), s.events.push(["exit", M, s]), M
		}

		function O(R, M) {
			P(R, M.from)
		}

		function v(R, M) {
			M.restore()
		}

		function A(R, M) {
			return j;

			function j(L, F, T) {
				let Y, V, J, te;
				return Array.isArray(L) ? y(L) : "tokenize" in L ? y([L]) : b(L);

				function b(le) {
					return Se;

					function Se(Be) {
						const je = Be !== null && le[Be],
							St = Be !== null && le.null,
							Al = [...Array.isArray(je) ? je : je ? [je] : [], ...Array.isArray(St) ? St : St ? [St] : []];
						return y(Al)(Be)
					}
				}

				function y(le) {
					return Y = le, V = 0, le.length === 0 ? T : Ze(le[V])
				}

				function Ze(le) {
					return Se;

					function Se(Be) {
						return te = D(), J = le, le.partial || (s.currentConstruct = le), le.name && s.parser.constructs.disable.null.includes(le.name) ? Te() : le.tokenize.call(M ? Object.assign(Object.create(s), M) : s, u, Ht, Te)(Be)
					}
				}

				function Ht(le) {
					return R(J, te), F
				}

				function Te(le) {
					return te.restore(), ++V < Y.length ? Ze(Y[V]) : T
				}
			}
		}

		function P(R, M) {
			R.resolveAll && !o.includes(R) && o.push(R), R.resolve && $e(s.events, M, s.events.length - M, R.resolve(s.events.slice(M), s)), R.resolveTo && (s.events = R.resolveTo(s.events, s))
		}

		function D() {
			const R = d(),
				M = s.previous,
				j = s.currentConstruct,
				L = s.events.length,
				F = Array.from(l);
			return {
				restore: T,
				from: L
			};

			function T() {
				r = R, s.previous = M, s.currentConstruct = j, s.events.length = L, l = F, U()
			}
		}

		function U() {
			r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
		}
	}

	function ST(e, t) {
		const n = t.start._index,
			r = t.start._bufferIndex,
			i = t.end._index,
			o = t.end._bufferIndex;
		let a;
		return n === i ? a = [e[n].slice(r, o)] : (a = e.slice(n, i), r > -1 && (a[0] = a[0].slice(r)), o > 0 && a.push(e[i].slice(0, o))), a
	}

	function TT(e, t) {
		let n = -1;
		const r = [];
		let i;
		for (; ++n < e.length;) {
			const o = e[n];
			let a;
			if (typeof o == "string") a = o;
			else switch (o) {
				case -5: {
					a = "\r";
					break
				}
				case -4: {
					a = `
`;
					break
				}
				case -3: {
					a = `\r
`;
					break
				}
				case -2: {
					a = t ? " " : "	";
					break
				}
				case -1: {
					if (!t && i) continue;
					a = " ";
					break
				}
				default:
					a = String.fromCharCode(o)
			}
			i = o === -2, r.push(a)
		}
		return r.join("")
	}
	const CT = Object.freeze(Object.defineProperty({
		__proto__: null,
		document: {
			[42]: Fe,
			[43]: Fe,
			[45]: Fe,
			[48]: Fe,
			[49]: Fe,
			[50]: Fe,
			[51]: Fe,
			[52]: Fe,
			[53]: Fe,
			[54]: Fe,
			[55]: Fe,
			[56]: Fe,
			[57]: Fe,
			[62]: Wd
		},
		contentInitial: {
			[91]: xS
		},
		flowInitial: {
			[-2]: Hs,
			[-1]: Hs,
			[32]: Hs
		},
		flow: {
			[35]: MS,
			[42]: eo,
			[45]: [nh, eo],
			[60]: FS,
			[61]: nh,
			[95]: eo,
			[96]: Yd,
			[126]: Yd
		},
		string: {
			[38]: Xd,
			[92]: qd
		},
		text: {
			[-5]: Ws,
			[-4]: Ws,
			[-3]: Ws,
			[33]: eT,
			[38]: Xd,
			[42]: $s,
			[60]: [aS, zS],
			[91]: nT,
			[92]: [PS, qd],
			[93]: Gs,
			[95]: $s,
			[96]: vS
		},
		insideSpan: {
			null: [$s, _T]
		},
		attentionMarkers: {
			null: [42, 95]
		},
		disable: {
			null: []
		}
	}, Symbol.toStringTag, {
		value: "Module"
	}));

	function wT(e = {}) {
		const t = $d([CT].concat(e.extensions || [])),
			n = {
				defined: [],
				lazy: {},
				constructs: t,
				content: r(Z1),
				document: r(tS),
				flow: r(mT),
				string: r(vT),
				text: r(yT)
			};
		return n;

		function r(i) {
			return o;

			function o(a) {
				return ET(n, i, a)
			}
		}
	}
	const oh = /[\0\t\n\r]/g;

	function OT() {
		let e = 1,
			t = "",
			n = !0,
			r;
		return i;

		function i(o, a, l) {
			const u = [];
			let s, c, f, p, h;
			for (o = t + o.toString(a), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length;) {
				if (oh.lastIndex = f, s = oh.exec(o), p = s && s.index !== void 0 ? s.index : o.length, h = o.charCodeAt(p), !s) {
					t = o.slice(f);
					break
				}
				if (h === 10 && f === p && r) u.push(-3), r = void 0;
				else switch (r && (u.push(-5), r = void 0), f < p && (u.push(o.slice(f, p)), e += p - f), h) {
					case 0: {
						u.push(65533), e++;
						break
					}
					case 9: {
						for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c;) u.push(-1);
						break
					}
					case 10: {
						u.push(-4), e = 1;
						break
					}
					default:
						r = !0, e = 1
				}
				f = p + 1
			}
			return l && (r && u.push(-5), t && u.push(t), u.push(null)), u
		}
	}

	function AT(e) {
		for (; !Qd(e););
		return e
	}

	function ah(e, t) {
		const n = Number.parseInt(e, t);
		return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n)
	}
	const xT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

	function sh(e) {
		return e.replace(xT, RT)
	}

	function RT(e, t, n) {
		if (t) return t;
		if (n.charCodeAt(0) === 35) {
			const i = n.charCodeAt(1),
				o = i === 120 || i === 88;
			return ah(n.slice(o ? 2 : 1), o ? 16 : 10)
		}
		return zs(n) || e
	}

	function to(e) {
		return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? lh(e.position) : "start" in e || "end" in e ? lh(e) : "line" in e || "column" in e ? qs(e) : ""
	}

	function qs(e) {
		return uh(e && e.line) + ":" + uh(e && e.column)
	}

	function lh(e) {
		return qs(e && e.start) + "-" + qs(e && e.end)
	}

	function uh(e) {
		return e && typeof e == "number" ? e : 1
	}
	const Ks = {}.hasOwnProperty,
		kT = function(e, t, n) {
			return typeof t != "string" && (n = t, t = void 0), IT(n)(AT(wT(n).document().write(OT()(e, t, !0))))
		};

	function IT(e = {}) {
		const t = ch({
				transforms: [],
				canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
				enter: {
					autolink: u(tm),
					autolinkProtocol: M,
					autolinkEmail: M,
					atxHeading: u(Jp),
					blockQuote: u(px),
					characterEscape: M,
					characterReference: M,
					codeFenced: u(Qp),
					codeFencedFenceInfo: s,
					codeFencedFenceMeta: s,
					codeIndented: u(Qp, s),
					codeText: u(mx, s),
					codeTextData: M,
					data: M,
					codeFlowValue: M,
					definition: u(gx),
					definitionDestinationString: s,
					definitionLabelString: s,
					definitionTitleString: s,
					emphasis: u(_x),
					hardBreakEscape: u(Zp),
					hardBreakTrailing: u(Zp),
					htmlFlow: u(em, s),
					htmlFlowData: M,
					htmlText: u(em, s),
					htmlTextData: M,
					image: u(vx),
					label: s,
					link: u(tm),
					listItem: u(yx),
					listItemValue: m,
					listOrdered: u(nm, d),
					listUnordered: u(nm),
					paragraph: u(bx),
					reference: le,
					referenceString: s,
					resourceDestinationString: s,
					resourceTitleString: s,
					setextHeading: u(Jp),
					strong: u(Ex),
					thematicBreak: u(Tx)
				},
				exit: {
					atxHeading: f(),
					atxHeadingSequence: P,
					autolink: f(),
					autolinkEmail: Al,
					autolinkProtocol: St,
					blockQuote: f(),
					characterEscapeValue: j,
					characterReferenceMarkerHexadecimal: Be,
					characterReferenceMarkerNumeric: Be,
					characterReferenceValue: je,
					codeFenced: f(E),
					codeFencedFence: S,
					codeFencedFenceInfo: _,
					codeFencedFenceMeta: g,
					codeFlowValue: j,
					codeIndented: f(w),
					codeText: f(V),
					codeTextData: j,
					data: j,
					definition: f(),
					definitionDestinationString: A,
					definitionLabelString: O,
					definitionTitleString: v,
					emphasis: f(),
					hardBreakEscape: f(F),
					hardBreakTrailing: f(F),
					htmlFlow: f(T),
					htmlFlowData: j,
					htmlText: f(Y),
					htmlTextData: j,
					image: f(te),
					label: y,
					labelText: b,
					lineEnding: L,
					link: f(J),
					listItem: f(),
					listOrdered: f(),
					listUnordered: f(),
					paragraph: f(),
					referenceString: Se,
					resourceDestinationString: Ze,
					resourceTitleString: Ht,
					resource: Te,
					setextHeading: f(R),
					setextHeadingLineSequence: U,
					setextHeadingText: D,
					strong: f(),
					thematicBreak: f()
				}
			}, e.mdastExtensions || []),
			n = {};
		return r;

		function r(x) {
			let N = {
				type: "root",
				children: []
			};
			const W = [N],
				oe = [],
				et = [],
				Hr = {
					stack: W,
					tokenStack: oe,
					config: t,
					enter: c,
					exit: p,
					buffer: s,
					resume: h,
					setData: o,
					getData: a
				};
			let ue = -1;
			for (; ++ue < x.length;)
				if (x[ue][1].type === "listOrdered" || x[ue][1].type === "listUnordered")
					if (x[ue][0] === "enter") et.push(ue);
					else {
						const Oe = et.pop();
						ue = i(x, Oe, ue)
					} for (ue = -1; ++ue < x.length;) {
				const Oe = t[x[ue][0]];
				Ks.call(Oe, x[ue][1].type) && Oe[x[ue][1].type].call(Object.assign({
					sliceSerialize: x[ue][2].sliceSerialize
				}, Hr), x[ue][1])
			}
			if (oe.length > 0) {
				const Oe = oe[oe.length - 1];
				(Oe[1] || fh).call(Hr, void 0, Oe[0])
			}
			for (N.position = {
					start: l(x.length > 0 ? x[0][1].start : {
						line: 1,
						column: 1,
						offset: 0
					}),
					end: l(x.length > 0 ? x[x.length - 2][1].end : {
						line: 1,
						column: 1,
						offset: 0
					})
				}, ue = -1; ++ue < t.transforms.length;) N = t.transforms[ue](N) || N;
			return N
		}

		function i(x, N, W) {
			let oe = N - 1,
				et = -1,
				Hr = !1,
				ue, Oe, qn, Gr;
			for (; ++oe <= W;) {
				const _e = x[oe];
				if (_e[1].type === "listUnordered" || _e[1].type === "listOrdered" || _e[1].type === "blockQuote" ? (_e[0] === "enter" ? et++ : et--, Gr = void 0) : _e[1].type === "lineEndingBlank" ? _e[0] === "enter" && (ue && !Gr && !et && !qn && (qn = oe), Gr = void 0) : _e[1].type === "linePrefix" || _e[1].type === "listItemValue" || _e[1].type === "listItemMarker" || _e[1].type === "listItemPrefix" || _e[1].type === "listItemPrefixWhitespace" || (Gr = void 0), !et && _e[0] === "enter" && _e[1].type === "listItemPrefix" || et === -1 && _e[0] === "exit" && (_e[1].type === "listUnordered" || _e[1].type === "listOrdered")) {
					if (ue) {
						let xl = oe;
						for (Oe = void 0; xl--;) {
							const kt = x[xl];
							if (kt[1].type === "lineEnding" || kt[1].type === "lineEndingBlank") {
								if (kt[0] === "exit") continue;
								Oe && (x[Oe][1].type = "lineEndingBlank", Hr = !0), kt[1].type = "lineEnding", Oe = xl
							} else if (!(kt[1].type === "linePrefix" || kt[1].type === "blockQuotePrefix" || kt[1].type === "blockQuotePrefixWhitespace" || kt[1].type === "blockQuoteMarker" || kt[1].type === "listItemIndent")) break
						}
						qn && (!Oe || qn < Oe) && (ue._spread = !0), ue.end = Object.assign({}, Oe ? x[Oe][1].start : _e[1].end), x.splice(Oe || oe, 0, ["exit", ue, _e[2]]), oe++, W++
					}
					_e[1].type === "listItemPrefix" && (ue = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, _e[1].start)
					}, x.splice(oe, 0, ["enter", ue, _e[2]]), oe++, W++, qn = void 0, Gr = !0)
				}
			}
			return x[N][1]._spread = Hr, W
		}

		function o(x, N) {
			n[x] = N
		}

		function a(x) {
			return n[x]
		}

		function l(x) {
			return {
				line: x.line,
				column: x.column,
				offset: x.offset
			}
		}

		function u(x, N) {
			return W;

			function W(oe) {
				c.call(this, x(oe), oe), N && N.call(this, oe)
			}
		}

		function s() {
			this.stack.push({
				type: "fragment",
				children: []
			})
		}

		function c(x, N, W) {
			return this.stack[this.stack.length - 1].children.push(x), this.stack.push(x), this.tokenStack.push([N, W]), x.position = {
				start: l(N.start)
			}, x
		}

		function f(x) {
			return N;

			function N(W) {
				x && x.call(this, W), p.call(this, W)
			}
		}

		function p(x, N) {
			const W = this.stack.pop(),
				oe = this.tokenStack.pop();
			if (oe) oe[0].type !== x.type && (N ? N.call(this, x, oe[0]) : (oe[1] || fh).call(this, x, oe[0]));
			else throw new Error("Cannot close `" + x.type + "` (" + to({
				start: x.start,
				end: x.end
			}) + "): it\u2019s not open");
			return W.position.end = l(x.end), W
		}

		function h() {
			return q1(this.stack.pop())
		}

		function d() {
			o("expectingFirstListItemValue", !0)
		}

		function m(x) {
			if (a("expectingFirstListItemValue")) {
				const N = this.stack[this.stack.length - 2];
				N.start = Number.parseInt(this.sliceSerialize(x), 10), o("expectingFirstListItemValue")
			}
		}

		function _() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.lang = x
		}

		function g() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.meta = x
		}

		function S() {
			a("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0))
		}

		function E() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.value = x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside")
		}

		function w() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.value = x.replace(/(\r?\n|\r)$/g, "")
		}

		function O(x) {
			const N = this.resume(),
				W = this.stack[this.stack.length - 1];
			W.label = N, W.identifier = ot(this.sliceSerialize(x)).toLowerCase()
		}

		function v() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.title = x
		}

		function A() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.url = x
		}

		function P(x) {
			const N = this.stack[this.stack.length - 1];
			if (!N.depth) {
				const W = this.sliceSerialize(x).length;
				N.depth = W
			}
		}

		function D() {
			o("setextHeadingSlurpLineEnding", !0)
		}

		function U(x) {
			const N = this.stack[this.stack.length - 1];
			N.depth = this.sliceSerialize(x).charCodeAt(0) === 61 ? 1 : 2
		}

		function R() {
			o("setextHeadingSlurpLineEnding")
		}

		function M(x) {
			const N = this.stack[this.stack.length - 1];
			let W = N.children[N.children.length - 1];
			(!W || W.type !== "text") && (W = Sx(), W.position = {
				start: l(x.start)
			}, N.children.push(W)), this.stack.push(W)
		}

		function j(x) {
			const N = this.stack.pop();
			N.value += this.sliceSerialize(x), N.position.end = l(x.end)
		}

		function L(x) {
			const N = this.stack[this.stack.length - 1];
			if (a("atHardBreak")) {
				const W = N.children[N.children.length - 1];
				W.position.end = l(x.end), o("atHardBreak");
				return
			}!a("setextHeadingSlurpLineEnding") && t.canContainEols.includes(N.type) && (M.call(this, x), j.call(this, x))
		}

		function F() {
			o("atHardBreak", !0)
		}

		function T() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.value = x
		}

		function Y() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.value = x
		}

		function V() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.value = x
		}

		function J() {
			const x = this.stack[this.stack.length - 1];
			a("inReference") ? (x.type += "Reference", x.referenceType = a("referenceType") || "shortcut", delete x.url, delete x.title) : (delete x.identifier, delete x.label), o("referenceType")
		}

		function te() {
			const x = this.stack[this.stack.length - 1];
			a("inReference") ? (x.type += "Reference", x.referenceType = a("referenceType") || "shortcut", delete x.url, delete x.title) : (delete x.identifier, delete x.label), o("referenceType")
		}

		function b(x) {
			const N = this.stack[this.stack.length - 2],
				W = this.sliceSerialize(x);
			N.label = sh(W), N.identifier = ot(W).toLowerCase()
		}

		function y() {
			const x = this.stack[this.stack.length - 1],
				N = this.resume(),
				W = this.stack[this.stack.length - 1];
			o("inReference", !0), W.type === "link" ? W.children = x.children : W.alt = N
		}

		function Ze() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.url = x
		}

		function Ht() {
			const x = this.resume(),
				N = this.stack[this.stack.length - 1];
			N.title = x
		}

		function Te() {
			o("inReference")
		}

		function le() {
			o("referenceType", "collapsed")
		}

		function Se(x) {
			const N = this.resume(),
				W = this.stack[this.stack.length - 1];
			W.label = N, W.identifier = ot(this.sliceSerialize(x)).toLowerCase(), o("referenceType", "full")
		}

		function Be(x) {
			o("characterReferenceType", x.type)
		}

		function je(x) {
			const N = this.sliceSerialize(x),
				W = a("characterReferenceType");
			let oe;
			W ? (oe = ah(N, W === "characterReferenceMarkerNumeric" ? 10 : 16), o("characterReferenceType")) : oe = zs(N);
			const et = this.stack.pop();
			et.value += oe, et.position.end = l(x.end)
		}

		function St(x) {
			j.call(this, x);
			const N = this.stack[this.stack.length - 1];
			N.url = this.sliceSerialize(x)
		}

		function Al(x) {
			j.call(this, x);
			const N = this.stack[this.stack.length - 1];
			N.url = "mailto:" + this.sliceSerialize(x)
		}

		function px() {
			return {
				type: "blockquote",
				children: []
			}
		}

		function Qp() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			}
		}

		function mx() {
			return {
				type: "inlineCode",
				value: ""
			}
		}

		function gx() {
			return {
				type: "definition",
				identifier: "",
				label: null,
				title: null,
				url: ""
			}
		}

		function _x() {
			return {
				type: "emphasis",
				children: []
			}
		}

		function Jp() {
			return {
				type: "heading",
				depth: void 0,
				children: []
			}
		}

		function Zp() {
			return {
				type: "break"
			}
		}

		function em() {
			return {
				type: "html",
				value: ""
			}
		}

		function vx() {
			return {
				type: "image",
				title: null,
				url: "",
				alt: null
			}
		}

		function tm() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			}
		}

		function nm(x) {
			return {
				type: "list",
				ordered: x.type === "listOrdered",
				start: null,
				spread: x._spread,
				children: []
			}
		}

		function yx(x) {
			return {
				type: "listItem",
				spread: x._spread,
				checked: null,
				children: []
			}
		}

		function bx() {
			return {
				type: "paragraph",
				children: []
			}
		}

		function Ex() {
			return {
				type: "strong",
				children: []
			}
		}

		function Sx() {
			return {
				type: "text",
				value: ""
			}
		}

		function Tx() {
			return {
				type: "thematicBreak"
			}
		}
	}

	function ch(e, t) {
		let n = -1;
		for (; ++n < t.length;) {
			const r = t[n];
			Array.isArray(r) ? ch(e, r) : PT(e, r)
		}
		return e
	}

	function PT(e, t) {
		let n;
		for (n in t)
			if (Ks.call(t, n)) {
				const r = n === "canContainEols" || n === "transforms",
					o = (Ks.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
					a = t[n];
				a && (r ? e[n] = [...o, ...a] : Object.assign(o, a))
			}
	}

	function fh(e, t) {
		throw e ? new Error("Cannot close `" + e.type + "` (" + to({
			start: e.start,
			end: e.end
		}) + "): a different token (`" + t.type + "`, " + to({
			start: t.start,
			end: t.end
		}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + to({
			start: t.start,
			end: t.end
		}) + ") is still open")
	}

	function NT(e) {
		Object.assign(this, {
			Parser: n => {
				const r = this.data("settings");
				return kT(n, Object.assign({}, r, e, {
					extensions: this.data("micromarkExtensions") || [],
					mdastExtensions: this.data("fromMarkdownExtensions") || []
				}))
			}
		})
	}
	var Ee = function(e, t, n) {
		var r = {
			type: String(e)
		};
		return n == null && (typeof t == "string" || Array.isArray(t)) ? n = t : Object.assign(r, t), Array.isArray(n) ? r.children = n : n != null && (r.value = String(n)), r
	};
	const no = {}.hasOwnProperty;

	function MT(e, t) {
		const n = t.data || {};
		return "value" in t && !(no.call(n, "hName") || no.call(n, "hProperties") || no.call(n, "hChildren")) ? e.augment(t, Ee("text", t.value)) : e(t, "div", Re(e, t))
	}

	function dh(e, t, n) {
		const r = t && t.type;
		let i;
		if (!r) throw new Error("Expected node, got `" + t + "`");
		return no.call(e.handlers, r) ? i = e.handlers[r] : e.passThrough && e.passThrough.includes(r) ? i = LT : i = e.unknownHandler, (typeof i == "function" ? i : MT)(e, t, n)
	}

	function LT(e, t) {
		return "children" in t ? {
			...t,
			children: Re(e, t)
		} : t
	}

	function Re(e, t) {
		const n = [];
		if ("children" in t) {
			const r = t.children;
			let i = -1;
			for (; ++i < r.length;) {
				const o = dh(e, r[i], t);
				if (o) {
					if (i && r[i - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
						const a = o.children[0];
						a && a.type === "text" && (a.value = a.value.replace(/^\s+/, ""))
					}
					Array.isArray(o) ? n.push(...o) : n.push(o)
				}
			}
		}
		return n
	}
	const hh = function(e) {
		if (e == null) return BT;
		if (typeof e == "string") return FT(e);
		if (typeof e == "object") return Array.isArray(e) ? DT(e) : UT(e);
		if (typeof e == "function") return ro(e);
		throw new Error("Expected function, string, or object as test")
	};

	function DT(e) {
		const t = [];
		let n = -1;
		for (; ++n < e.length;) t[n] = hh(e[n]);
		return ro(r);

		function r(...i) {
			let o = -1;
			for (; ++o < t.length;)
				if (t[o].call(this, ...i)) return !0;
			return !1
		}
	}

	function UT(e) {
		return ro(t);

		function t(n) {
			let r;
			for (r in e)
				if (n[r] !== e[r]) return !1;
			return !0
		}
	}

	function FT(e) {
		return ro(t);

		function t(n) {
			return n && n.type === e
		}
	}

	function ro(e) {
		return t;

		function t(...n) {
			return Boolean(e.call(this, ...n))
		}
	}

	function BT() {
		return !0
	}

	function Bx(e) {
		return e
	}
	const jT = !0,
		VT = "skip",
		ph = !1,
		$T = function(e, t, n, r) {
			typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
			const i = hh(t),
				o = r ? -1 : 1;
			a(e, null, [])();

			function a(l, u, s) {
				const c = typeof l == "object" && l !== null ? l : {};
				let f;
				return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
					value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
				})), p;

				function p() {
					let h = [],
						d, m, _;
					if ((!t || i(l, u, s[s.length - 1] || null)) && (h = zT(n(l, s)), h[0] === ph)) return h;
					if (l.children && h[0] !== VT)
						for (m = (r ? l.children.length : -1) + o, _ = s.concat(l); m > -1 && m < l.children.length;) {
							if (d = a(l.children[m], m, _)(), d[0] === ph) return d;
							m = typeof d[1] == "number" ? d[1] : m + o
						}
					return h
				}
			}
		};

	function zT(e) {
		return Array.isArray(e) ? e : typeof e == "number" ? [jT, e] : [e]
	}
	const mh = function(e, t, n, r) {
			typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), $T(e, t, i, r);

			function i(o, a) {
				const l = a[a.length - 1];
				return n(o, l ? l.children.indexOf(o) : null, l)
			}
		},
		gh = vh("start"),
		_h = vh("end");

	function vh(e) {
		return t;

		function t(n) {
			const r = n && n.position && n.position[e] || {};
			return {
				line: r.line || null,
				column: r.column || null,
				offset: r.offset > -1 ? r.offset : null
			}
		}
	}

	function HT(e) {
		return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
	}
	const yh = {}.hasOwnProperty;

	function GT(e) {
		const t = Object.create(null);
		if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
		return mh(e, "definition", r => {
			const i = bh(r.identifier);
			i && !yh.call(t, i) && (t[i] = r)
		}), n;

		function n(r) {
			const i = bh(r);
			return i && yh.call(t, i) ? t[i] : null
		}
	}

	function bh(e) {
		return String(e || "").toUpperCase()
	}
	const WT = {
		'"': "quot",
		"&": "amp",
		"<": "lt",
		">": "gt"
	};

	function qT(e) {
		return e.replace(/["&<>]/g, t);

		function t(n) {
			return "&" + WT[n] + ";"
		}
	}

	function Eh(e, t) {
		const n = qT(KT(e || ""));
		if (!t) return n;
		const r = n.indexOf(":"),
			i = n.indexOf("?"),
			o = n.indexOf("#"),
			a = n.indexOf("/");
		return r < 0 || a > -1 && r > a || i > -1 && r > i || o > -1 && r > o || t.test(n.slice(0, r)) ? n : ""
	}

	function KT(e) {
		const t = [];
		let n = -1,
			r = 0,
			i = 0;
		for (; ++n < e.length;) {
			const o = e.charCodeAt(n);
			let a = "";
			if (o === 37 && Pe(e.charCodeAt(n + 1)) && Pe(e.charCodeAt(n + 2))) i = 2;
			else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
			else if (o > 55295 && o < 57344) {
				const l = e.charCodeAt(n + 1);
				o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), i = 1) : a = "\uFFFD"
			} else a = String.fromCharCode(o);
			a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0)
		}
		return t.join("") + e.slice(r)
	}

	function At(e, t) {
		const n = [];
		let r = -1;
		for (t && n.push(Ee("text", `
`)); ++r < e.length;) r && n.push(Ee("text", `
`)), n.push(e[r]);
		return t && e.length > 0 && n.push(Ee("text", `
`)), n
	}

	function XT(e) {
		let t = -1;
		const n = [];
		for (; ++t < e.footnoteOrder.length;) {
			const r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
			if (!r) continue;
			const i = Re(e, r),
				o = String(r.identifier),
				a = Eh(o.toLowerCase());
			let l = 0;
			const u = [];
			for (; ++l <= e.footnoteCounts[o];) {
				const f = {
					type: "element",
					tagName: "a",
					properties: {
						href: "#" + e.clobberPrefix + "fnref-" + a + (l > 1 ? "-" + l : ""),
						dataFootnoteBackref: !0,
						className: ["data-footnote-backref"],
						ariaLabel: e.footnoteBackLabel
					},
					children: [{
						type: "text",
						value: "\u21A9"
					}]
				};
				l > 1 && f.children.push({
					type: "element",
					tagName: "sup",
					children: [{
						type: "text",
						value: String(l)
					}]
				}), u.length > 0 && u.push({
					type: "text",
					value: " "
				}), u.push(f)
			}
			const s = i[i.length - 1];
			if (s && s.type === "element" && s.tagName === "p") {
				const f = s.children[s.children.length - 1];
				f && f.type === "text" ? f.value += " " : s.children.push({
					type: "text",
					value: " "
				}), s.children.push(...u)
			} else i.push(...u);
			const c = {
				type: "element",
				tagName: "li",
				properties: {
					id: e.clobberPrefix + "fn-" + a
				},
				children: At(i, !0)
			};
			r.position && (c.position = r.position), n.push(c)
		}
		return n.length === 0 ? null : {
			type: "element",
			tagName: "section",
			properties: {
				dataFootnotes: !0,
				className: ["footnotes"]
			},
			children: [{
				type: "element",
				tagName: "h2",
				properties: {
					id: "footnote-label",
					className: ["sr-only"]
				},
				children: [Ee("text", e.footnoteLabel)]
			}, {
				type: "text",
				value: `
`
			}, {
				type: "element",
				tagName: "ol",
				properties: {},
				children: At(n, !0)
			}, {
				type: "text",
				value: `
`
			}]
		}
	}

	function YT(e, t) {
		return e(t, "blockquote", At(Re(e, t), !0))
	}

	function QT(e, t) {
		return [e(t, "br"), Ee("text", `
`)]
	}

	function JT(e, t) {
		const n = t.value ? t.value + `
` : "",
			r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
			i = {};
		r && (i.className = ["language-" + r]);
		const o = e(t, "code", i, [Ee("text", n)]);
		return t.meta && (o.data = {
			meta: t.meta
		}), e(t.position, "pre", [o])
	}

	function ZT(e, t) {
		return e(t, "del", Re(e, t))
	}

	function eC(e, t) {
		return e(t, "em", Re(e, t))
	}

	function Sh(e, t) {
		const n = String(t.identifier),
			r = Eh(n.toLowerCase()),
			i = e.footnoteOrder.indexOf(n);
		let o;
		i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = i + 1);
		const a = e.footnoteCounts[n];
		return e(t, "sup", [e(t.position, "a", {
			href: "#" + e.clobberPrefix + "fn-" + r,
			id: e.clobberPrefix + "fnref-" + r + (a > 1 ? "-" + a : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: "footnote-label"
		}, [Ee("text", String(o))])])
	}

	function tC(e, t) {
		const n = e.footnoteById;
		let r = 1;
		for (; r in n;) r++;
		const i = String(r);
		return n[i] = {
			type: "footnoteDefinition",
			identifier: i,
			children: [{
				type: "paragraph",
				children: t.children
			}],
			position: t.position
		}, Sh(e, {
			type: "footnoteReference",
			identifier: i,
			position: t.position
		})
	}

	function nC(e, t) {
		return e(t, "h" + t.depth, Re(e, t))
	}

	function rC(e, t) {
		return e.dangerous ? e.augment(t, Ee("raw", t.value)) : null
	}
	var Th = {};

	function iC(e) {
		var t, n, r = Th[e];
		if (r) return r;
		for (r = Th[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
		for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
		return r
	}

	function io(e, t, n) {
		var r, i, o, a, l, u = "";
		for (typeof t != "string" && (n = t, t = io.defaultChars), typeof n > "u" && (n = !0), l = iC(t), r = 0, i = e.length; r < i; r++) {
			if (o = e.charCodeAt(r), n && o === 37 && r + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3))) {
				u += e.slice(r, r + 3), r += 2;
				continue
			}
			if (o < 128) {
				u += l[o];
				continue
			}
			if (o >= 55296 && o <= 57343) {
				if (o >= 55296 && o <= 56319 && r + 1 < i && (a = e.charCodeAt(r + 1), a >= 56320 && a <= 57343)) {
					u += encodeURIComponent(e[r] + e[r + 1]), r++;
					continue
				}
				u += "%EF%BF%BD";
				continue
			}
			u += encodeURIComponent(e[r])
		}
		return u
	}
	io.defaultChars = ";/?:@&=+$,-_.!~*'()#", io.componentChars = "-_.!~*'()";
	var oo = io;

	function Ch(e, t) {
		const n = t.referenceType;
		let r = "]";
		if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return Ee("text", "![" + t.alt + r);
		const i = Re(e, t),
			o = i[0];
		o && o.type === "text" ? o.value = "[" + o.value : i.unshift(Ee("text", "["));
		const a = i[i.length - 1];
		return a && a.type === "text" ? a.value += r : i.push(Ee("text", r)), i
	}

	function oC(e, t) {
		const n = e.definition(t.identifier);
		if (!n) return Ch(e, t);
		const r = {
			src: oo(n.url || ""),
			alt: t.alt
		};
		return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "img", r)
	}

	function aC(e, t) {
		const n = {
			src: oo(t.url),
			alt: t.alt
		};
		return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "img", n)
	}

	function sC(e, t) {
		return e(t, "code", [Ee("text", t.value.replace(/\r?\n|\r/g, " "))])
	}

	function lC(e, t) {
		const n = e.definition(t.identifier);
		if (!n) return Ch(e, t);
		const r = {
			href: oo(n.url || "")
		};
		return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "a", r, Re(e, t))
	}

	function uC(e, t) {
		const n = {
			href: oo(t.url)
		};
		return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "a", n, Re(e, t))
	}

	function cC(e, t, n) {
		const r = Re(e, t),
			i = n ? fC(n) : wh(t),
			o = {},
			a = [];
		if (typeof t.checked == "boolean") {
			let s;
			r[0] && r[0].type === "element" && r[0].tagName === "p" ? s = r[0] : (s = e(null, "p", []), r.unshift(s)), s.children.length > 0 && s.children.unshift(Ee("text", " ")), s.children.unshift(e(null, "input", {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			})), o.className = ["task-list-item"]
		}
		let l = -1;
		for (; ++l < r.length;) {
			const s = r[l];
			(i || l !== 0 || s.type !== "element" || s.tagName !== "p") && a.push(Ee("text", `
`)), s.type === "element" && s.tagName === "p" && !i ? a.push(...s.children) : a.push(s)
		}
		const u = r[r.length - 1];
		return u && (i || !("tagName" in u) || u.tagName !== "p") && a.push(Ee("text", `
`)), e(t, "li", o, a)
	}

	function fC(e) {
		let t = e.spread;
		const n = e.children;
		let r = -1;
		for (; !t && ++r < n.length;) t = wh(n[r]);
		return Boolean(t)
	}

	function wh(e) {
		const t = e.spread;
		return t == null ? e.children.length > 1 : t
	}

	function dC(e, t) {
		const n = {},
			r = t.ordered ? "ol" : "ul",
			i = Re(e, t);
		let o = -1;
		for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < i.length;) {
			const a = i[o];
			if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
				n.className = ["contains-task-list"];
				break
			}
		}
		return e(t, r, n, At(i, !0))
	}

	function hC(e, t) {
		return e(t, "p", Re(e, t))
	}

	function pC(e, t) {
		return e.augment(t, Ee("root", At(Re(e, t))))
	}

	function mC(e, t) {
		return e(t, "strong", Re(e, t))
	}

	function gC(e, t) {
		const n = t.children;
		let r = -1;
		const i = t.align || [],
			o = [];
		for (; ++r < n.length;) {
			const a = n[r].children,
				l = r === 0 ? "th" : "td",
				u = [];
			let s = -1;
			const c = t.align ? i.length : a.length;
			for (; ++s < c;) {
				const f = a[s];
				u.push(e(f, l, {
					align: i[s]
				}, f ? Re(e, f) : []))
			}
			o[r] = e(n[r], "tr", At(u, !0))
		}
		return e(t, "table", At([e(o[0].position, "thead", At([o[0]], !0))].concat(o[1] ? e({
			start: gh(o[1]),
			end: _h(o[o.length - 1])
		}, "tbody", At(o.slice(1), !0)) : []), !0))
	}
	const Oh = 9,
		Ah = 32;

	function _C(e) {
		const t = String(e),
			n = /\r?\n|\r/g;
		let r = n.exec(t),
			i = 0;
		const o = [];
		for (; r;) o.push(xh(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
		return o.push(xh(t.slice(i), i > 0, !1)), o.join("")
	}

	function xh(e, t, n) {
		let r = 0,
			i = e.length;
		if (t) {
			let o = e.codePointAt(r);
			for (; o === Oh || o === Ah;) r++, o = e.codePointAt(r)
		}
		if (n) {
			let o = e.codePointAt(i - 1);
			for (; o === Oh || o === Ah;) i--, o = e.codePointAt(i - 1)
		}
		return i > r ? e.slice(r, i) : ""
	}

	function vC(e, t) {
		return e.augment(t, Ee("text", _C(String(t.value))))
	}

	function yC(e, t) {
		return e(t, "hr")
	}
	const bC = {
		blockquote: YT,
		break: QT,
		code: JT,
		delete: ZT,
		emphasis: eC,
		footnoteReference: Sh,
		footnote: tC,
		heading: nC,
		html: rC,
		imageReference: oC,
		image: aC,
		inlineCode: sC,
		linkReference: lC,
		link: uC,
		listItem: cC,
		list: dC,
		paragraph: hC,
		root: pC,
		strong: mC,
		table: gC,
		text: vC,
		thematicBreak: yC,
		toml: ao,
		yaml: ao,
		definition: ao,
		footnoteDefinition: ao
	};

	function ao() {
		return null
	}
	const EC = {}.hasOwnProperty;

	function SC(e, t) {
		const n = t || {},
			r = n.allowDangerousHtml || !1,
			i = {};
		return a.dangerous = r, a.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, a.footnoteLabel = n.footnoteLabel || "Footnotes", a.footnoteBackLabel = n.footnoteBackLabel || "Back to content", a.definition = GT(e), a.footnoteById = i, a.footnoteOrder = [], a.footnoteCounts = {}, a.augment = o, a.handlers = {
			...bC,
			...n.handlers
		}, a.unknownHandler = n.unknownHandler, a.passThrough = n.passThrough, mh(e, "footnoteDefinition", l => {
			const u = String(l.identifier).toUpperCase();
			EC.call(i, u) || (i[u] = l)
		}), a;

		function o(l, u) {
			if (l && "data" in l && l.data) {
				const s = l.data;
				s.hName && (u.type !== "element" && (u = {
					type: "element",
					tagName: "",
					properties: {},
					children: []
				}), u.tagName = s.hName), u.type === "element" && s.hProperties && (u.properties = {
					...u.properties,
					...s.hProperties
				}), "children" in u && u.children && s.hChildren && (u.children = s.hChildren)
			}
			if (l) {
				const s = "type" in l ? l : {
					position: l
				};
				HT(s) || (u.position = {
					start: gh(s),
					end: _h(s)
				})
			}
			return u
		}

		function a(l, u, s, c) {
			return Array.isArray(s) && (c = s, s = {}), o(l, {
				type: "element",
				tagName: u,
				properties: s || {},
				children: c || []
			})
		}
	}

	function Rh(e, t) {
		const n = SC(e, t),
			r = dh(n, e, null),
			i = XT(n);
		return i && r.children.push(Ee("text", `
`), i), Array.isArray(r) ? {
			type: "root",
			children: r
		} : r
	}
	const TC = function(e, t) {
		return e && "run" in e ? CC(e, t) : wC(e || t)
	};

	function CC(e, t) {
		return (n, r, i) => {
			e.run(Rh(n, t), r, o => {
				i(o)
			})
		}
	}

	function wC(e) {
		return t => Rh(t, e)
	}
	var H = {
			exports: {}
		},
		OC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
		AC = OC,
		xC = AC;

	function kh() {}

	function Ih() {}
	Ih.resetWarningCache = kh;
	var RC = function() {
		function e(r, i, o, a, l, u) {
			if (u !== xC) {
				var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s
			}
		}
		e.isRequired = e;

		function t() {
			return e
		}
		var n = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: Ih,
			resetWarningCache: kh
		};
		return n.PropTypes = n, n
	};
	H.exports = RC();
	class Vr {
		constructor(t, n, r) {
			this.property = t, this.normal = n, r && (this.space = r)
		}
	}
	Vr.prototype.property = {}, Vr.prototype.normal = {}, Vr.prototype.space = null;

	function Ph(e, t) {
		const n = {},
			r = {};
		let i = -1;
		for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
		return new Vr(n, r, t)
	}

	function Xs(e) {
		return e.toLowerCase()
	}
	class Qe {
		constructor(t, n) {
			this.property = t, this.attribute = n
		}
	}
	Qe.prototype.space = null, Qe.prototype.boolean = !1, Qe.prototype.booleanish = !1, Qe.prototype.overloadedBoolean = !1, Qe.prototype.number = !1, Qe.prototype.commaSeparated = !1, Qe.prototype.spaceSeparated = !1, Qe.prototype.commaOrSpaceSeparated = !1, Qe.prototype.mustUseProperty = !1, Qe.prototype.defined = !1;
	let kC = 0;
	const X = un(),
		ye = un(),
		Nh = un(),
		I = un(),
		se = un(),
		Vn = un(),
		ze = un();

	function un() {
		return 2 ** ++kC
	}
	const Ys = Object.freeze(Object.defineProperty({
			__proto__: null,
			boolean: X,
			booleanish: ye,
			overloadedBoolean: Nh,
			number: I,
			spaceSeparated: se,
			commaSeparated: Vn,
			commaOrSpaceSeparated: ze
		}, Symbol.toStringTag, {
			value: "Module"
		})),
		Qs = Object.keys(Ys);
	class Js extends Qe {
		constructor(t, n, r, i) {
			let o = -1;
			if (super(t, n), Mh(this, "space", i), typeof r == "number")
				for (; ++o < Qs.length;) {
					const a = Qs[o];
					Mh(this, Qs[o], (r & Ys[a]) === Ys[a])
				}
		}
	}
	Js.prototype.defined = !0;

	function Mh(e, t, n) {
		n && (e[t] = n)
	}
	const IC = {}.hasOwnProperty;

	function $n(e) {
		const t = {},
			n = {};
		let r;
		for (r in e.properties)
			if (IC.call(e.properties, r)) {
				const i = e.properties[r],
					o = new Js(r, e.transform(e.attributes || {}, r), i, e.space);
				e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Xs(r)] = r, n[Xs(o.attribute)] = r
			} return new Vr(t, n, e.space)
	}
	const Lh = $n({
			space: "xlink",
			transform(e, t) {
				return "xlink:" + t.slice(5).toLowerCase()
			},
			properties: {
				xLinkActuate: null,
				xLinkArcRole: null,
				xLinkHref: null,
				xLinkRole: null,
				xLinkShow: null,
				xLinkTitle: null,
				xLinkType: null
			}
		}),
		Dh = $n({
			space: "xml",
			transform(e, t) {
				return "xml:" + t.slice(3).toLowerCase()
			},
			properties: {
				xmlLang: null,
				xmlBase: null,
				xmlSpace: null
			}
		});

	function Uh(e, t) {
		return t in e ? e[t] : t
	}

	function Fh(e, t) {
		return Uh(e, t.toLowerCase())
	}
	const Bh = $n({
			space: "xmlns",
			attributes: {
				xmlnsxlink: "xmlns:xlink"
			},
			transform: Fh,
			properties: {
				xmlns: null,
				xmlnsXLink: null
			}
		}),
		jh = $n({
			transform(e, t) {
				return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
			},
			properties: {
				ariaActiveDescendant: null,
				ariaAtomic: ye,
				ariaAutoComplete: null,
				ariaBusy: ye,
				ariaChecked: ye,
				ariaColCount: I,
				ariaColIndex: I,
				ariaColSpan: I,
				ariaControls: se,
				ariaCurrent: null,
				ariaDescribedBy: se,
				ariaDetails: null,
				ariaDisabled: ye,
				ariaDropEffect: se,
				ariaErrorMessage: null,
				ariaExpanded: ye,
				ariaFlowTo: se,
				ariaGrabbed: ye,
				ariaHasPopup: null,
				ariaHidden: ye,
				ariaInvalid: null,
				ariaKeyShortcuts: null,
				ariaLabel: null,
				ariaLabelledBy: se,
				ariaLevel: I,
				ariaLive: null,
				ariaModal: ye,
				ariaMultiLine: ye,
				ariaMultiSelectable: ye,
				ariaOrientation: null,
				ariaOwns: se,
				ariaPlaceholder: null,
				ariaPosInSet: I,
				ariaPressed: ye,
				ariaReadOnly: ye,
				ariaRelevant: null,
				ariaRequired: ye,
				ariaRoleDescription: se,
				ariaRowCount: I,
				ariaRowIndex: I,
				ariaRowSpan: I,
				ariaSelected: ye,
				ariaSetSize: I,
				ariaSort: null,
				ariaValueMax: I,
				ariaValueMin: I,
				ariaValueNow: I,
				ariaValueText: null,
				role: null
			}
		}),
		PC = $n({
			space: "html",
			attributes: {
				acceptcharset: "accept-charset",
				classname: "class",
				htmlfor: "for",
				httpequiv: "http-equiv"
			},
			transform: Fh,
			mustUseProperty: ["checked", "multiple", "muted", "selected"],
			properties: {
				abbr: null,
				accept: Vn,
				acceptCharset: se,
				accessKey: se,
				action: null,
				allow: null,
				allowFullScreen: X,
				allowPaymentRequest: X,
				allowUserMedia: X,
				alt: null,
				as: null,
				async: X,
				autoCapitalize: null,
				autoComplete: se,
				autoFocus: X,
				autoPlay: X,
				capture: X,
				charSet: null,
				checked: X,
				cite: null,
				className: se,
				cols: I,
				colSpan: null,
				content: null,
				contentEditable: ye,
				controls: X,
				controlsList: se,
				coords: I | Vn,
				crossOrigin: null,
				data: null,
				dateTime: null,
				decoding: null,
				default: X,
				defer: X,
				dir: null,
				dirName: null,
				disabled: X,
				download: Nh,
				draggable: ye,
				encType: null,
				enterKeyHint: null,
				form: null,
				formAction: null,
				formEncType: null,
				formMethod: null,
				formNoValidate: X,
				formTarget: null,
				headers: se,
				height: I,
				hidden: X,
				high: I,
				href: null,
				hrefLang: null,
				htmlFor: se,
				httpEquiv: se,
				id: null,
				imageSizes: null,
				imageSrcSet: null,
				inputMode: null,
				integrity: null,
				is: null,
				isMap: X,
				itemId: null,
				itemProp: se,
				itemRef: se,
				itemScope: X,
				itemType: se,
				kind: null,
				label: null,
				lang: null,
				language: null,
				list: null,
				loading: null,
				loop: X,
				low: I,
				manifest: null,
				max: null,
				maxLength: I,
				media: null,
				method: null,
				min: null,
				minLength: I,
				multiple: X,
				muted: X,
				name: null,
				nonce: null,
				noModule: X,
				noValidate: X,
				onAbort: null,
				onAfterPrint: null,
				onAuxClick: null,
				onBeforePrint: null,
				onBeforeUnload: null,
				onBlur: null,
				onCancel: null,
				onCanPlay: null,
				onCanPlayThrough: null,
				onChange: null,
				onClick: null,
				onClose: null,
				onContextLost: null,
				onContextMenu: null,
				onContextRestored: null,
				onCopy: null,
				onCueChange: null,
				onCut: null,
				onDblClick: null,
				onDrag: null,
				onDragEnd: null,
				onDragEnter: null,
				onDragExit: null,
				onDragLeave: null,
				onDragOver: null,
				onDragStart: null,
				onDrop: null,
				onDurationChange: null,
				onEmptied: null,
				onEnded: null,
				onError: null,
				onFocus: null,
				onFormData: null,
				onHashChange: null,
				onInput: null,
				onInvalid: null,
				onKeyDown: null,
				onKeyPress: null,
				onKeyUp: null,
				onLanguageChange: null,
				onLoad: null,
				onLoadedData: null,
				onLoadedMetadata: null,
				onLoadEnd: null,
				onLoadStart: null,
				onMessage: null,
				onMessageError: null,
				onMouseDown: null,
				onMouseEnter: null,
				onMouseLeave: null,
				onMouseMove: null,
				onMouseOut: null,
				onMouseOver: null,
				onMouseUp: null,
				onOffline: null,
				onOnline: null,
				onPageHide: null,
				onPageShow: null,
				onPaste: null,
				onPause: null,
				onPlay: null,
				onPlaying: null,
				onPopState: null,
				onProgress: null,
				onRateChange: null,
				onRejectionHandled: null,
				onReset: null,
				onResize: null,
				onScroll: null,
				onSecurityPolicyViolation: null,
				onSeeked: null,
				onSeeking: null,
				onSelect: null,
				onSlotChange: null,
				onStalled: null,
				onStorage: null,
				onSubmit: null,
				onSuspend: null,
				onTimeUpdate: null,
				onToggle: null,
				onUnhandledRejection: null,
				onUnload: null,
				onVolumeChange: null,
				onWaiting: null,
				onWheel: null,
				open: X,
				optimum: I,
				pattern: null,
				ping: se,
				placeholder: null,
				playsInline: X,
				poster: null,
				preload: null,
				readOnly: X,
				referrerPolicy: null,
				rel: se,
				required: X,
				reversed: X,
				rows: I,
				rowSpan: I,
				sandbox: se,
				scope: null,
				scoped: X,
				seamless: X,
				selected: X,
				shape: null,
				size: I,
				sizes: null,
				slot: null,
				span: I,
				spellCheck: ye,
				src: null,
				srcDoc: null,
				srcLang: null,
				srcSet: null,
				start: I,
				step: null,
				style: null,
				tabIndex: I,
				target: null,
				title: null,
				translate: null,
				type: null,
				typeMustMatch: X,
				useMap: null,
				value: ye,
				width: I,
				wrap: null,
				align: null,
				aLink: null,
				archive: se,
				axis: null,
				background: null,
				bgColor: null,
				border: I,
				borderColor: null,
				bottomMargin: I,
				cellPadding: null,
				cellSpacing: null,
				char: null,
				charOff: null,
				classId: null,
				clear: null,
				code: null,
				codeBase: null,
				codeType: null,
				color: null,
				compact: X,
				declare: X,
				event: null,
				face: null,
				frame: null,
				frameBorder: null,
				hSpace: I,
				leftMargin: I,
				link: null,
				longDesc: null,
				lowSrc: null,
				marginHeight: I,
				marginWidth: I,
				noResize: X,
				noHref: X,
				noShade: X,
				noWrap: X,
				object: null,
				profile: null,
				prompt: null,
				rev: null,
				rightMargin: I,
				rules: null,
				scheme: null,
				scrolling: ye,
				standby: null,
				summary: null,
				text: null,
				topMargin: I,
				valueType: null,
				version: null,
				vAlign: null,
				vLink: null,
				vSpace: I,
				allowTransparency: null,
				autoCorrect: null,
				autoSave: null,
				disablePictureInPicture: X,
				disableRemotePlayback: X,
				prefix: null,
				property: null,
				results: I,
				security: null,
				unselectable: null
			}
		}),
		NC = $n({
			space: "svg",
			attributes: {
				accentHeight: "accent-height",
				alignmentBaseline: "alignment-baseline",
				arabicForm: "arabic-form",
				baselineShift: "baseline-shift",
				capHeight: "cap-height",
				className: "class",
				clipPath: "clip-path",
				clipRule: "clip-rule",
				colorInterpolation: "color-interpolation",
				colorInterpolationFilters: "color-interpolation-filters",
				colorProfile: "color-profile",
				colorRendering: "color-rendering",
				crossOrigin: "crossorigin",
				dataType: "datatype",
				dominantBaseline: "dominant-baseline",
				enableBackground: "enable-background",
				fillOpacity: "fill-opacity",
				fillRule: "fill-rule",
				floodColor: "flood-color",
				floodOpacity: "flood-opacity",
				fontFamily: "font-family",
				fontSize: "font-size",
				fontSizeAdjust: "font-size-adjust",
				fontStretch: "font-stretch",
				fontStyle: "font-style",
				fontVariant: "font-variant",
				fontWeight: "font-weight",
				glyphName: "glyph-name",
				glyphOrientationHorizontal: "glyph-orientation-horizontal",
				glyphOrientationVertical: "glyph-orientation-vertical",
				hrefLang: "hreflang",
				horizAdvX: "horiz-adv-x",
				horizOriginX: "horiz-origin-x",
				horizOriginY: "horiz-origin-y",
				imageRendering: "image-rendering",
				letterSpacing: "letter-spacing",
				lightingColor: "lighting-color",
				markerEnd: "marker-end",
				markerMid: "marker-mid",
				markerStart: "marker-start",
				navDown: "nav-down",
				navDownLeft: "nav-down-left",
				navDownRight: "nav-down-right",
				navLeft: "nav-left",
				navNext: "nav-next",
				navPrev: "nav-prev",
				navRight: "nav-right",
				navUp: "nav-up",
				navUpLeft: "nav-up-left",
				navUpRight: "nav-up-right",
				onAbort: "onabort",
				onActivate: "onactivate",
				onAfterPrint: "onafterprint",
				onBeforePrint: "onbeforeprint",
				onBegin: "onbegin",
				onCancel: "oncancel",
				onCanPlay: "oncanplay",
				onCanPlayThrough: "oncanplaythrough",
				onChange: "onchange",
				onClick: "onclick",
				onClose: "onclose",
				onCopy: "oncopy",
				onCueChange: "oncuechange",
				onCut: "oncut",
				onDblClick: "ondblclick",
				onDrag: "ondrag",
				onDragEnd: "ondragend",
				onDragEnter: "ondragenter",
				onDragExit: "ondragexit",
				onDragLeave: "ondragleave",
				onDragOver: "ondragover",
				onDragStart: "ondragstart",
				onDrop: "ondrop",
				onDurationChange: "ondurationchange",
				onEmptied: "onemptied",
				onEnd: "onend",
				onEnded: "onended",
				onError: "onerror",
				onFocus: "onfocus",
				onFocusIn: "onfocusin",
				onFocusOut: "onfocusout",
				onHashChange: "onhashchange",
				onInput: "oninput",
				onInvalid: "oninvalid",
				onKeyDown: "onkeydown",
				onKeyPress: "onkeypress",
				onKeyUp: "onkeyup",
				onLoad: "onload",
				onLoadedData: "onloadeddata",
				onLoadedMetadata: "onloadedmetadata",
				onLoadStart: "onloadstart",
				onMessage: "onmessage",
				onMouseDown: "onmousedown",
				onMouseEnter: "onmouseenter",
				onMouseLeave: "onmouseleave",
				onMouseMove: "onmousemove",
				onMouseOut: "onmouseout",
				onMouseOver: "onmouseover",
				onMouseUp: "onmouseup",
				onMouseWheel: "onmousewheel",
				onOffline: "onoffline",
				onOnline: "ononline",
				onPageHide: "onpagehide",
				onPageShow: "onpageshow",
				onPaste: "onpaste",
				onPause: "onpause",
				onPlay: "onplay",
				onPlaying: "onplaying",
				onPopState: "onpopstate",
				onProgress: "onprogress",
				onRateChange: "onratechange",
				onRepeat: "onrepeat",
				onReset: "onreset",
				onResize: "onresize",
				onScroll: "onscroll",
				onSeeked: "onseeked",
				onSeeking: "onseeking",
				onSelect: "onselect",
				onShow: "onshow",
				onStalled: "onstalled",
				onStorage: "onstorage",
				onSubmit: "onsubmit",
				onSuspend: "onsuspend",
				onTimeUpdate: "ontimeupdate",
				onToggle: "ontoggle",
				onUnload: "onunload",
				onVolumeChange: "onvolumechange",
				onWaiting: "onwaiting",
				onZoom: "onzoom",
				overlinePosition: "overline-position",
				overlineThickness: "overline-thickness",
				paintOrder: "paint-order",
				panose1: "panose-1",
				pointerEvents: "pointer-events",
				referrerPolicy: "referrerpolicy",
				renderingIntent: "rendering-intent",
				shapeRendering: "shape-rendering",
				stopColor: "stop-color",
				stopOpacity: "stop-opacity",
				strikethroughPosition: "strikethrough-position",
				strikethroughThickness: "strikethrough-thickness",
				strokeDashArray: "stroke-dasharray",
				strokeDashOffset: "stroke-dashoffset",
				strokeLineCap: "stroke-linecap",
				strokeLineJoin: "stroke-linejoin",
				strokeMiterLimit: "stroke-miterlimit",
				strokeOpacity: "stroke-opacity",
				strokeWidth: "stroke-width",
				tabIndex: "tabindex",
				textAnchor: "text-anchor",
				textDecoration: "text-decoration",
				textRendering: "text-rendering",
				typeOf: "typeof",
				underlinePosition: "underline-position",
				underlineThickness: "underline-thickness",
				unicodeBidi: "unicode-bidi",
				unicodeRange: "unicode-range",
				unitsPerEm: "units-per-em",
				vAlphabetic: "v-alphabetic",
				vHanging: "v-hanging",
				vIdeographic: "v-ideographic",
				vMathematical: "v-mathematical",
				vectorEffect: "vector-effect",
				vertAdvY: "vert-adv-y",
				vertOriginX: "vert-origin-x",
				vertOriginY: "vert-origin-y",
				wordSpacing: "word-spacing",
				writingMode: "writing-mode",
				xHeight: "x-height",
				playbackOrder: "playbackorder",
				timelineBegin: "timelinebegin"
			},
			transform: Uh,
			properties: {
				about: ze,
				accentHeight: I,
				accumulate: null,
				additive: null,
				alignmentBaseline: null,
				alphabetic: I,
				amplitude: I,
				arabicForm: null,
				ascent: I,
				attributeName: null,
				attributeType: null,
				azimuth: I,
				bandwidth: null,
				baselineShift: null,
				baseFrequency: null,
				baseProfile: null,
				bbox: null,
				begin: null,
				bias: I,
				by: null,
				calcMode: null,
				capHeight: I,
				className: se,
				clip: null,
				clipPath: null,
				clipPathUnits: null,
				clipRule: null,
				color: null,
				colorInterpolation: null,
				colorInterpolationFilters: null,
				colorProfile: null,
				colorRendering: null,
				content: null,
				contentScriptType: null,
				contentStyleType: null,
				crossOrigin: null,
				cursor: null,
				cx: null,
				cy: null,
				d: null,
				dataType: null,
				defaultAction: null,
				descent: I,
				diffuseConstant: I,
				direction: null,
				display: null,
				dur: null,
				divisor: I,
				dominantBaseline: null,
				download: X,
				dx: null,
				dy: null,
				edgeMode: null,
				editable: null,
				elevation: I,
				enableBackground: null,
				end: null,
				event: null,
				exponent: I,
				externalResourcesRequired: null,
				fill: null,
				fillOpacity: I,
				fillRule: null,
				filter: null,
				filterRes: null,
				filterUnits: null,
				floodColor: null,
				floodOpacity: null,
				focusable: null,
				focusHighlight: null,
				fontFamily: null,
				fontSize: null,
				fontSizeAdjust: null,
				fontStretch: null,
				fontStyle: null,
				fontVariant: null,
				fontWeight: null,
				format: null,
				fr: null,
				from: null,
				fx: null,
				fy: null,
				g1: Vn,
				g2: Vn,
				glyphName: Vn,
				glyphOrientationHorizontal: null,
				glyphOrientationVertical: null,
				glyphRef: null,
				gradientTransform: null,
				gradientUnits: null,
				handler: null,
				hanging: I,
				hatchContentUnits: null,
				hatchUnits: null,
				height: null,
				href: null,
				hrefLang: null,
				horizAdvX: I,
				horizOriginX: I,
				horizOriginY: I,
				id: null,
				ideographic: I,
				imageRendering: null,
				initialVisibility: null,
				in: null,
				in2: null,
				intercept: I,
				k: I,
				k1: I,
				k2: I,
				k3: I,
				k4: I,
				kernelMatrix: ze,
				kernelUnitLength: null,
				keyPoints: null,
				keySplines: null,
				keyTimes: null,
				kerning: null,
				lang: null,
				lengthAdjust: null,
				letterSpacing: null,
				lightingColor: null,
				limitingConeAngle: I,
				local: null,
				markerEnd: null,
				markerMid: null,
				markerStart: null,
				markerHeight: null,
				markerUnits: null,
				markerWidth: null,
				mask: null,
				maskContentUnits: null,
				maskUnits: null,
				mathematical: null,
				max: null,
				media: null,
				mediaCharacterEncoding: null,
				mediaContentEncodings: null,
				mediaSize: I,
				mediaTime: null,
				method: null,
				min: null,
				mode: null,
				name: null,
				navDown: null,
				navDownLeft: null,
				navDownRight: null,
				navLeft: null,
				navNext: null,
				navPrev: null,
				navRight: null,
				navUp: null,
				navUpLeft: null,
				navUpRight: null,
				numOctaves: null,
				observer: null,
				offset: null,
				onAbort: null,
				onActivate: null,
				onAfterPrint: null,
				onBeforePrint: null,
				onBegin: null,
				onCancel: null,
				onCanPlay: null,
				onCanPlayThrough: null,
				onChange: null,
				onClick: null,
				onClose: null,
				onCopy: null,
				onCueChange: null,
				onCut: null,
				onDblClick: null,
				onDrag: null,
				onDragEnd: null,
				onDragEnter: null,
				onDragExit: null,
				onDragLeave: null,
				onDragOver: null,
				onDragStart: null,
				onDrop: null,
				onDurationChange: null,
				onEmptied: null,
				onEnd: null,
				onEnded: null,
				onError: null,
				onFocus: null,
				onFocusIn: null,
				onFocusOut: null,
				onHashChange: null,
				onInput: null,
				onInvalid: null,
				onKeyDown: null,
				onKeyPress: null,
				onKeyUp: null,
				onLoad: null,
				onLoadedData: null,
				onLoadedMetadata: null,
				onLoadStart: null,
				onMessage: null,
				onMouseDown: null,
				onMouseEnter: null,
				onMouseLeave: null,
				onMouseMove: null,
				onMouseOut: null,
				onMouseOver: null,
				onMouseUp: null,
				onMouseWheel: null,
				onOffline: null,
				onOnline: null,
				onPageHide: null,
				onPageShow: null,
				onPaste: null,
				onPause: null,
				onPlay: null,
				onPlaying: null,
				onPopState: null,
				onProgress: null,
				onRateChange: null,
				onRepeat: null,
				onReset: null,
				onResize: null,
				onScroll: null,
				onSeeked: null,
				onSeeking: null,
				onSelect: null,
				onShow: null,
				onStalled: null,
				onStorage: null,
				onSubmit: null,
				onSuspend: null,
				onTimeUpdate: null,
				onToggle: null,
				onUnload: null,
				onVolumeChange: null,
				onWaiting: null,
				onZoom: null,
				opacity: null,
				operator: null,
				order: null,
				orient: null,
				orientation: null,
				origin: null,
				overflow: null,
				overlay: null,
				overlinePosition: I,
				overlineThickness: I,
				paintOrder: null,
				panose1: null,
				path: null,
				pathLength: I,
				patternContentUnits: null,
				patternTransform: null,
				patternUnits: null,
				phase: null,
				ping: se,
				pitch: null,
				playbackOrder: null,
				pointerEvents: null,
				points: null,
				pointsAtX: I,
				pointsAtY: I,
				pointsAtZ: I,
				preserveAlpha: null,
				preserveAspectRatio: null,
				primitiveUnits: null,
				propagate: null,
				property: ze,
				r: null,
				radius: null,
				referrerPolicy: null,
				refX: null,
				refY: null,
				rel: ze,
				rev: ze,
				renderingIntent: null,
				repeatCount: null,
				repeatDur: null,
				requiredExtensions: ze,
				requiredFeatures: ze,
				requiredFonts: ze,
				requiredFormats: ze,
				resource: null,
				restart: null,
				result: null,
				rotate: null,
				rx: null,
				ry: null,
				scale: null,
				seed: null,
				shapeRendering: null,
				side: null,
				slope: null,
				snapshotTime: null,
				specularConstant: I,
				specularExponent: I,
				spreadMethod: null,
				spacing: null,
				startOffset: null,
				stdDeviation: null,
				stemh: null,
				stemv: null,
				stitchTiles: null,
				stopColor: null,
				stopOpacity: null,
				strikethroughPosition: I,
				strikethroughThickness: I,
				string: null,
				stroke: null,
				strokeDashArray: ze,
				strokeDashOffset: null,
				strokeLineCap: null,
				strokeLineJoin: null,
				strokeMiterLimit: I,
				strokeOpacity: I,
				strokeWidth: null,
				style: null,
				surfaceScale: I,
				syncBehavior: null,
				syncBehaviorDefault: null,
				syncMaster: null,
				syncTolerance: null,
				syncToleranceDefault: null,
				systemLanguage: ze,
				tabIndex: I,
				tableValues: null,
				target: null,
				targetX: I,
				targetY: I,
				textAnchor: null,
				textDecoration: null,
				textRendering: null,
				textLength: null,
				timelineBegin: null,
				title: null,
				transformBehavior: null,
				type: null,
				typeOf: ze,
				to: null,
				transform: null,
				u1: null,
				u2: null,
				underlinePosition: I,
				underlineThickness: I,
				unicode: null,
				unicodeBidi: null,
				unicodeRange: null,
				unitsPerEm: I,
				values: null,
				vAlphabetic: I,
				vMathematical: I,
				vectorEffect: null,
				vHanging: I,
				vIdeographic: I,
				version: null,
				vertAdvY: I,
				vertOriginX: I,
				vertOriginY: I,
				viewBox: null,
				viewTarget: null,
				visibility: null,
				width: null,
				widths: null,
				wordSpacing: null,
				writingMode: null,
				x: null,
				x1: null,
				x2: null,
				xChannelSelector: null,
				xHeight: I,
				y: null,
				y1: null,
				y2: null,
				yChannelSelector: null,
				z: null,
				zoomAndPan: null
			}
		}),
		MC = /^data[-\w.:]+$/i,
		Vh = /-[a-z]/g,
		LC = /[A-Z]/g;

	function DC(e, t) {
		const n = Xs(t);
		let r = t,
			i = Qe;
		if (n in e.normal) return e.property[e.normal[n]];
		if (n.length > 4 && n.slice(0, 4) === "data" && MC.test(t)) {
			if (t.charAt(4) === "-") {
				const o = t.slice(5).replace(Vh, FC);
				r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
			} else {
				const o = t.slice(4);
				if (!Vh.test(o)) {
					let a = o.replace(LC, UC);
					a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a
				}
			}
			i = Js
		}
		return new i(r, t)
	}

	function UC(e) {
		return "-" + e.toLowerCase()
	}

	function FC(e) {
		return e.charAt(1).toUpperCase()
	}
	const $h = {
			classId: "classID",
			dataType: "datatype",
			itemId: "itemID",
			strokeDashArray: "strokeDasharray",
			strokeDashOffset: "strokeDashoffset",
			strokeLineCap: "strokeLinecap",
			strokeLineJoin: "strokeLinejoin",
			strokeMiterLimit: "strokeMiterlimit",
			typeOf: "typeof",
			xLinkActuate: "xlinkActuate",
			xLinkArcRole: "xlinkArcrole",
			xLinkHref: "xlinkHref",
			xLinkRole: "xlinkRole",
			xLinkShow: "xlinkShow",
			xLinkTitle: "xlinkTitle",
			xLinkType: "xlinkType",
			xmlnsXLink: "xmlnsXlink"
		},
		BC = Ph([Dh, Lh, Bh, jh, PC], "html"),
		jC = Ph([Dh, Lh, Bh, jh, NC], "svg"),
		zh = function(e) {
			if (e == null) return HC;
			if (typeof e == "string") return zC(e);
			if (typeof e == "object") return Array.isArray(e) ? VC(e) : $C(e);
			if (typeof e == "function") return so(e);
			throw new Error("Expected function, string, or object as test")
		};

	function VC(e) {
		const t = [];
		let n = -1;
		for (; ++n < e.length;) t[n] = zh(e[n]);
		return so(r);

		function r(...i) {
			let o = -1;
			for (; ++o < t.length;)
				if (t[o].call(this, ...i)) return !0;
			return !1
		}
	}

	function $C(e) {
		return so(t);

		function t(n) {
			let r;
			for (r in e)
				if (n[r] !== e[r]) return !1;
			return !0
		}
	}

	function zC(e) {
		return so(t);

		function t(n) {
			return n && n.type === e
		}
	}

	function so(e) {
		return t;

		function t(...n) {
			return Boolean(e.call(this, ...n))
		}
	}

	function HC() {
		return !0
	}

	function Vx(e) {
		return e
	}
	const GC = !0,
		WC = "skip",
		Hh = !1,
		qC = function(e, t, n, r) {
			typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
			const i = zh(t),
				o = r ? -1 : 1;
			a(e, null, [])();

			function a(l, u, s) {
				const c = typeof l == "object" && l !== null ? l : {};
				let f;
				return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
					value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
				})), p;

				function p() {
					let h = [],
						d, m, _;
					if ((!t || i(l, u, s[s.length - 1] || null)) && (h = KC(n(l, s)), h[0] === Hh)) return h;
					if (l.children && h[0] !== WC)
						for (m = (r ? l.children.length : -1) + o, _ = s.concat(l); m > -1 && m < l.children.length;) {
							if (d = a(l.children[m], m, _)(), d[0] === Hh) return d;
							m = typeof d[1] == "number" ? d[1] : m + o
						}
					return h
				}
			}
		};

	function KC(e) {
		return Array.isArray(e) ? e : typeof e == "number" ? [GC, e] : [e]
	}
	const XC = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), qC(e, t, i, r);

		function i(o, a) {
			const l = a[a.length - 1];
			return n(o, l ? l.children.indexOf(o) : null, l)
		}
	};

	function YC(e) {
		if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
		if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
			XC(t, "element", (n, r, i) => {
				const o = i;
				let a;
				if (e.allowedElements ? a = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (a = e.disallowedElements.includes(n.tagName)), !a && e.allowElement && typeof r == "number" && (a = !e.allowElement(n, r, o)), a && typeof r == "number") return e.unwrapDisallowed && n.children ? o.children.splice(r, 1, ...n.children) : o.children.splice(r, 1), r
			})
		}
	}
	var Gh = {
			exports: {}
		},
		ne = {};
	/**
	 * @license React
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var Zs = Symbol.for("react.element"),
		el = Symbol.for("react.portal"),
		lo = Symbol.for("react.fragment"),
		uo = Symbol.for("react.strict_mode"),
		co = Symbol.for("react.profiler"),
		fo = Symbol.for("react.provider"),
		ho = Symbol.for("react.context"),
		QC = Symbol.for("react.server_context"),
		po = Symbol.for("react.forward_ref"),
		mo = Symbol.for("react.suspense"),
		go = Symbol.for("react.suspense_list"),
		_o = Symbol.for("react.memo"),
		vo = Symbol.for("react.lazy"),
		JC = Symbol.for("react.offscreen"),
		Wh;
	Wh = Symbol.for("react.module.reference");

	function Je(e) {
		if (typeof e == "object" && e !== null) {
			var t = e.$$typeof;
			switch (t) {
				case Zs:
					switch (e = e.type, e) {
						case lo:
						case co:
						case uo:
						case mo:
						case go:
							return e;
						default:
							switch (e = e && e.$$typeof, e) {
								case QC:
								case ho:
								case po:
								case vo:
								case _o:
								case fo:
									return e;
								default:
									return t
							}
					}
					case el:
						return t
			}
		}
	}
	ne.ContextConsumer = ho, ne.ContextProvider = fo, ne.Element = Zs, ne.ForwardRef = po, ne.Fragment = lo, ne.Lazy = vo, ne.Memo = _o, ne.Portal = el, ne.Profiler = co, ne.StrictMode = uo, ne.Suspense = mo, ne.SuspenseList = go, ne.isAsyncMode = function() {
			return !1
		}, ne.isConcurrentMode = function() {
			return !1
		}, ne.isContextConsumer = function(e) {
			return Je(e) === ho
		}, ne.isContextProvider = function(e) {
			return Je(e) === fo
		}, ne.isElement = function(e) {
			return typeof e == "object" && e !== null && e.$$typeof === Zs
		}, ne.isForwardRef = function(e) {
			return Je(e) === po
		}, ne.isFragment = function(e) {
			return Je(e) === lo
		}, ne.isLazy = function(e) {
			return Je(e) === vo
		}, ne.isMemo = function(e) {
			return Je(e) === _o
		}, ne.isPortal = function(e) {
			return Je(e) === el
		}, ne.isProfiler = function(e) {
			return Je(e) === co
		}, ne.isStrictMode = function(e) {
			return Je(e) === uo
		}, ne.isSuspense = function(e) {
			return Je(e) === mo
		}, ne.isSuspenseList = function(e) {
			return Je(e) === go
		}, ne.isValidElementType = function(e) {
			return typeof e == "string" || typeof e == "function" || e === lo || e === co || e === uo || e === mo || e === go || e === JC || typeof e == "object" && e !== null && (e.$$typeof === vo || e.$$typeof === _o || e.$$typeof === fo || e.$$typeof === ho || e.$$typeof === po || e.$$typeof === Wh || e.getModuleId !== void 0)
		}, ne.typeOf = Je,
		function(e) {
			e.exports = ne
		}(Gh);
	const ZC = rm(Gh.exports);

	function ew(e) {
		var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
		return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
	}

	function tw(e) {
		return e.join(" ").trim()
	}

	function nw(e, t) {
		var n = t || {};
		return e[e.length - 1] === "" && (e = e.concat("")), e.join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
	}
	var qh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
		rw = /\n/g,
		iw = /^\s*/,
		ow = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
		aw = /^:\s*/,
		sw = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
		lw = /^[;\s]*/,
		uw = /^\s+|\s+$/g,
		cw = `
`,
		Kh = "/",
		Xh = "*",
		cn = "",
		fw = "comment",
		dw = "declaration",
		hw = function(e, t) {
			if (typeof e != "string") throw new TypeError("First argument must be a string");
			if (!e) return [];
			t = t || {};
			var n = 1,
				r = 1;

			function i(d) {
				var m = d.match(rw);
				m && (n += m.length);
				var _ = d.lastIndexOf(cw);
				r = ~_ ? d.length - _ : r + d.length
			}

			function o() {
				var d = {
					line: n,
					column: r
				};
				return function(m) {
					return m.position = new a(d), s(), m
				}
			}

			function a(d) {
				this.start = d, this.end = {
					line: n,
					column: r
				}, this.source = t.source
			}
			a.prototype.content = e;

			function l(d) {
				var m = new Error(t.source + ":" + n + ":" + r + ": " + d);
				if (m.reason = d, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m
			}

			function u(d) {
				var m = d.exec(e);
				if (!!m) {
					var _ = m[0];
					return i(_), e = e.slice(_.length), m
				}
			}

			function s() {
				u(iw)
			}

			function c(d) {
				var m;
				for (d = d || []; m = f();) m !== !1 && d.push(m);
				return d
			}

			function f() {
				var d = o();
				if (!(Kh != e.charAt(0) || Xh != e.charAt(1))) {
					for (var m = 2; cn != e.charAt(m) && (Xh != e.charAt(m) || Kh != e.charAt(m + 1));) ++m;
					if (m += 2, cn === e.charAt(m - 1)) return l("End of comment missing");
					var _ = e.slice(2, m - 2);
					return r += 2, i(_), e = e.slice(m), r += 2, d({
						type: fw,
						comment: _
					})
				}
			}

			function p() {
				var d = o(),
					m = u(ow);
				if (!!m) {
					if (f(), !u(aw)) return l("property missing ':'");
					var _ = u(sw),
						g = d({
							type: dw,
							property: Yh(m[0].replace(qh, cn)),
							value: _ ? Yh(_[0].replace(qh, cn)) : cn
						});
					return u(lw), g
				}
			}

			function h() {
				var d = [];
				c(d);
				for (var m; m = p();) m !== !1 && (d.push(m), c(d));
				return d
			}
			return s(), h()
		};

	function Yh(e) {
		return e ? e.replace(uw, cn) : cn
	}
	var pw = hw;

	function mw(e, t) {
		var n = null;
		if (!e || typeof e != "string") return n;
		for (var r, i = pw(e), o = typeof t == "function", a, l, u = 0, s = i.length; u < s; u++) r = i[u], a = r.property, l = r.value, o ? t(a, l, r) : l && (n || (n = {}), n[a] = l);
		return n
	}
	var gw = mw;
	const tl = {}.hasOwnProperty,
		_w = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

	function Qh(e, t) {
		const n = [];
		let r = -1,
			i;
		for (; ++r < t.children.length;) i = t.children[r], i.type === "element" ? n.push(vw(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !_w.has(t.tagName) || !ew(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
		return n
	}

	function vw(e, t, n, r) {
		const i = e.options,
			o = e.schema,
			a = t.tagName,
			l = {};
		let u = o,
			s;
		if (o.space === "html" && a === "svg" && (u = jC, e.schema = u), t.properties)
			for (s in t.properties) tl.call(t.properties, s) && bw(l, s, t.properties[s], e);
		(a === "ol" || a === "ul") && e.listDepth++;
		const c = Qh(e, t);
		(a === "ol" || a === "ul") && e.listDepth--, e.schema = o;
		const f = t.position || {
				start: {
					line: null,
					column: null,
					offset: null
				},
				end: {
					line: null,
					column: null,
					offset: null
				}
			},
			p = i.components && tl.call(i.components, a) ? i.components[a] : a,
			h = typeof p == "string" || p === ie.Fragment;
		if (!ZC.isValidElementType(p)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
		if (l.key = [a, f.start.line, f.start.column, n].join("-"), a === "a" && i.linkTarget && (l.target = typeof i.linkTarget == "function" ? i.linkTarget(String(l.href || ""), t.children, typeof l.title == "string" ? l.title : null) : i.linkTarget), a === "a" && i.transformLinkUri && (l.href = i.transformLinkUri(String(l.href || ""), t.children, typeof l.title == "string" ? l.title : null)), !h && a === "code" && r.type === "element" && r.tagName !== "pre" && (l.inline = !0), !h && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (l.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (l.src = i.transformImageUri(String(l.src || ""), String(l.alt || ""), typeof l.title == "string" ? l.title : null)), !h && a === "li" && r.type === "element") {
			const d = yw(t);
			l.checked = d && d.properties ? Boolean(d.properties.checked) : null, l.index = nl(r, t), l.ordered = r.tagName === "ol"
		}
		return !h && (a === "ol" || a === "ul") && (l.ordered = a === "ol", l.depth = e.listDepth), (a === "td" || a === "th") && (l.align && (l.style || (l.style = {}), l.style.textAlign = l.align, delete l.align), h || (l.isHeader = a === "th")), !h && a === "tr" && r.type === "element" && (l.isHeader = Boolean(r.tagName === "thead")), i.sourcePos && (l["data-sourcepos"] = Tw(f)), !h && i.rawSourcePos && (l.sourcePosition = t.position), !h && i.includeElementIndex && (l.index = nl(r, t), l.siblingCount = nl(r)), h || (l.node = t), c.length > 0 ? ie.createElement(p, l, c) : ie.createElement(p, l)
	}

	function yw(e) {
		let t = -1;
		for (; ++t < e.children.length;) {
			const n = e.children[t];
			if (n.type === "element" && n.tagName === "input") return n
		}
		return null
	}

	function nl(e, t) {
		let n = -1,
			r = 0;
		for (; ++n < e.children.length && e.children[n] !== t;) e.children[n].type === "element" && r++;
		return r
	}

	function bw(e, t, n, r) {
		const i = DC(r.schema, t);
		let o = n;
		o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? nw(o) : tw(o)), i.property === "style" && typeof o == "string" && (o = Ew(o)), i.space && i.property ? e[tl.call($h, i.property) ? $h[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o))
	}

	function Ew(e) {
		const t = {};
		try {
			gw(e, n)
		} catch {}
		return t;

		function n(r, i) {
			const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
			t[o.replace(/-([a-z])/g, Sw)] = i
		}
	}

	function Sw(e, t) {
		return t.toUpperCase()
	}

	function Tw(e) {
		return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(t => String(t)).join("")
	}
	const Jh = {}.hasOwnProperty,
		Cw = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
		yo = {
			plugins: {
				to: "plugins",
				id: "change-plugins-to-remarkplugins"
			},
			renderers: {
				to: "components",
				id: "change-renderers-to-components"
			},
			astPlugins: {
				id: "remove-buggy-html-in-markdown-parser"
			},
			allowDangerousHtml: {
				id: "remove-buggy-html-in-markdown-parser"
			},
			escapeHtml: {
				id: "remove-buggy-html-in-markdown-parser"
			},
			source: {
				to: "children",
				id: "change-source-to-children"
			},
			allowNode: {
				to: "allowElement",
				id: "replace-allownode-allowedtypes-and-disallowedtypes"
			},
			allowedTypes: {
				to: "allowedElements",
				id: "replace-allownode-allowedtypes-and-disallowedtypes"
			},
			disallowedTypes: {
				to: "disallowedElements",
				id: "replace-allownode-allowedtypes-and-disallowedtypes"
			},
			includeNodeIndex: {
				to: "includeElementIndex",
				id: "change-includenodeindex-to-includeelementindex"
			}
		};

	function rl(e) {
		for (const o in yo)
			if (Jh.call(yo, o) && Jh.call(e, o)) {
				const a = yo[o];
				console.warn(`[react-markdown] Warning: please ${a.to ? `use \`${a.to}\` instead of` : "remove"} \`${o}\` (see <${Cw}#${a.id}> for more info)`), delete yo[o]
			} const t = z1().use(NT).use(e.remarkPlugins || []).use(TC, {
				...e.remarkRehypeOptions,
				allowDangerousHtml: !0
			}).use(e.rehypePlugins || []).use(YC, e),
			n = new Td;
		typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
		const r = t.runSync(t.parse(n), n);
		if (r.type !== "root") throw new TypeError("Expected a `root` node");
		let i = ie.createElement(ie.Fragment, {}, Qh({
			options: e,
			schema: BC,
			listDepth: 0
		}, r));
		return e.className && (i = ie.createElement("div", {
			className: e.className
		}, i)), i
	}
	rl.defaultProps = {
		transformLinkUri: R1
	}, rl.propTypes = {
		children: H.exports.string,
		className: H.exports.string,
		allowElement: H.exports.func,
		allowedElements: H.exports.arrayOf(H.exports.string),
		disallowedElements: H.exports.arrayOf(H.exports.string),
		unwrapDisallowed: H.exports.bool,
		remarkPlugins: H.exports.arrayOf(H.exports.oneOfType([H.exports.object, H.exports.func, H.exports.arrayOf(H.exports.oneOfType([H.exports.bool, H.exports.string, H.exports.object, H.exports.func, H.exports.arrayOf(H.exports.any)]))])),
		rehypePlugins: H.exports.arrayOf(H.exports.oneOfType([H.exports.object, H.exports.func, H.exports.arrayOf(H.exports.oneOfType([H.exports.bool, H.exports.string, H.exports.object, H.exports.func, H.exports.arrayOf(H.exports.any)]))])),
		sourcePos: H.exports.bool,
		rawSourcePos: H.exports.bool,
		skipHtml: H.exports.bool,
		includeElementIndex: H.exports.bool,
		transformLinkUri: H.exports.oneOfType([H.exports.func, H.exports.bool]),
		linkTarget: H.exports.oneOfType([H.exports.func, H.exports.string]),
		transformImageUri: H.exports.func,
		components: H.exports.object
	};
	const ww = {
			tokenize: kw,
			partial: !0
		},
		Zh = {
			tokenize: Iw,
			partial: !0
		},
		ep = {
			tokenize: Pw,
			partial: !0
		},
		zn = {
			tokenize: Mw,
			partial: !0
		},
		tp = {
			tokenize: Nw,
			partial: !0
		},
		np = {
			tokenize: xw,
			previous: ap
		},
		rp = {
			tokenize: Rw,
			previous: ol
		},
		xt = {
			tokenize: Aw,
			previous: sp
		},
		vt = {},
		Ow = {
			text: vt
		};
	let fn = 48;
	for (; fn < 123;) vt[fn] = xt, fn++, fn === 58 ? fn = 65 : fn === 91 && (fn = 97);
	vt[43] = xt, vt[45] = xt, vt[46] = xt, vt[95] = xt, vt[72] = [xt, rp], vt[104] = [xt, rp], vt[87] = [xt, np], vt[119] = [xt, np];

	function Aw(e, t, n) {
		const r = this;
		let i, o;
		return a;

		function a(h) {
			return !op(h) || !sp(r.previous) || al(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), l(h))
		}

		function l(h) {
			return op(h) ? (e.consume(h), l) : h === 64 ? (e.consume(h), u) : n(h)
		}

		function u(h) {
			return h === 46 ? e.check(zn, p, s)(h) : h === 45 || h === 95 ? e.check(zn, n, c)(h) : Pe(h) ? (!o && Xi(h) && (o = !0), e.consume(h), u) : p(h)
		}

		function s(h) {
			return e.consume(h), i = !0, o = void 0, u
		}

		function c(h) {
			return e.consume(h), f
		}

		function f(h) {
			return h === 46 ? e.check(zn, n, s)(h) : u(h)
		}

		function p(h) {
			return i && !o ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(h)) : n(h)
		}
	}

	function xw(e, t, n) {
		const r = this;
		return i;

		function i(a) {
			return a !== 87 && a !== 119 || !ap(r.previous) || al(r.events) ? n(a) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(ww, e.attempt(Zh, e.attempt(ep, o), n), n)(a))
		}

		function o(a) {
			return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(a)
		}
	}

	function Rw(e, t, n) {
		const r = this;
		return i;

		function i(d) {
			return d !== 72 && d !== 104 || !ol(r.previous) || al(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(d), o)
		}

		function o(d) {
			return d === 84 || d === 116 ? (e.consume(d), a) : n(d)
		}

		function a(d) {
			return d === 84 || d === 116 ? (e.consume(d), l) : n(d)
		}

		function l(d) {
			return d === 80 || d === 112 ? (e.consume(d), u) : n(d)
		}

		function u(d) {
			return d === 83 || d === 115 ? (e.consume(d), s) : s(d)
		}

		function s(d) {
			return d === 58 ? (e.consume(d), c) : n(d)
		}

		function c(d) {
			return d === 47 ? (e.consume(d), f) : n(d)
		}

		function f(d) {
			return d === 47 ? (e.consume(d), p) : n(d)
		}

		function p(d) {
			return d === null || Fr(d) || Yi(d) || Qi(d) ? n(d) : e.attempt(Zh, e.attempt(ep, h), n)(d)
		}

		function h(d) {
			return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d)
		}
	}

	function kw(e, t, n) {
		return r;

		function r(u) {
			return e.consume(u), i
		}

		function i(u) {
			return u === 87 || u === 119 ? (e.consume(u), o) : n(u)
		}

		function o(u) {
			return u === 87 || u === 119 ? (e.consume(u), a) : n(u)
		}

		function a(u) {
			return u === 46 ? (e.consume(u), l) : n(u)
		}

		function l(u) {
			return u === null || $(u) ? n(u) : t(u)
		}
	}

	function Iw(e, t, n) {
		let r, i;
		return o;

		function o(u) {
			return u === 38 ? e.check(tp, l, a)(u) : u === 46 || u === 95 ? e.check(zn, l, a)(u) : u === null || Fr(u) || Yi(u) || u !== 45 && Qi(u) ? l(u) : (e.consume(u), o)
		}

		function a(u) {
			return u === 46 ? (i = r, r = void 0, e.consume(u), o) : (u === 95 && (r = !0), e.consume(u), o)
		}

		function l(u) {
			return !i && !r ? t(u) : n(u)
		}
	}

	function Pw(e, t) {
		let n = 0;
		return r;

		function r(a) {
			return a === 38 ? e.check(tp, t, i)(a) : (a === 40 && n++, a === 41 ? e.check(zn, o, i)(a) : il(a) ? t(a) : ip(a) ? e.check(zn, t, i)(a) : (e.consume(a), r))
		}

		function i(a) {
			return e.consume(a), r
		}

		function o(a) {
			return n--, n < 0 ? t(a) : i(a)
		}
	}

	function Nw(e, t, n) {
		return r;

		function r(a) {
			return e.consume(a), i
		}

		function i(a) {
			return Ye(a) ? (e.consume(a), i) : a === 59 ? (e.consume(a), o) : n(a)
		}

		function o(a) {
			return il(a) ? t(a) : n(a)
		}
	}

	function Mw(e, t, n) {
		return r;

		function r(o) {
			return e.consume(o), i
		}

		function i(o) {
			return ip(o) ? (e.consume(o), i) : il(o) ? t(o) : n(o)
		}
	}

	function ip(e) {
		return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126
	}

	function il(e) {
		return e === null || e === 60 || ve(e)
	}

	function op(e) {
		return e === 43 || e === 45 || e === 46 || e === 95 || Pe(e)
	}

	function ap(e) {
		return e === null || e === 40 || e === 42 || e === 95 || e === 126 || ve(e)
	}

	function ol(e) {
		return e === null || !Ye(e)
	}

	function sp(e) {
		return e !== 47 && ol(e)
	}

	function al(e) {
		let t = e.length,
			n = !1;
		for (; t--;) {
			const r = e[t][1];
			if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
				n = !0;
				break
			}
			if (r._gfmAutolinkLiteralWalkedInto) {
				n = !1;
				break
			}
		}
		return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
	}
	const Lw = {
		tokenize: zw,
		partial: !0
	};

	function Dw() {
		return {
			document: {
				[91]: {
					tokenize: jw,
					continuation: {
						tokenize: Vw
					},
					exit: $w
				}
			},
			text: {
				[91]: {
					tokenize: Bw
				},
				[93]: {
					add: "after",
					tokenize: Uw,
					resolveTo: Fw
				}
			}
		}
	}

	function Uw(e, t, n) {
		const r = this;
		let i = r.events.length;
		const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
		let a;
		for (; i--;) {
			const u = r.events[i][1];
			if (u.type === "labelImage") {
				a = u;
				break
			}
			if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link") break
		}
		return l;

		function l(u) {
			if (!a || !a._balanced) return n(u);
			const s = ot(r.sliceSerialize({
				start: a.end,
				end: r.now()
			}));
			return s.charCodeAt(0) !== 94 || !o.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u))
		}
	}

	function Fw(e, t) {
		let n = e.length;
		for (; n--;)
			if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
				e[n][1];
				break
			} e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
		const r = {
				type: "gfmFootnoteCall",
				start: Object.assign({}, e[n + 3][1].start),
				end: Object.assign({}, e[e.length - 1][1].end)
			},
			i = {
				type: "gfmFootnoteCallMarker",
				start: Object.assign({}, e[n + 3][1].end),
				end: Object.assign({}, e[n + 3][1].end)
			};
		i.end.column++, i.end.offset++, i.end._bufferIndex++;
		const o = {
				type: "gfmFootnoteCallString",
				start: Object.assign({}, i.end),
				end: Object.assign({}, e[e.length - 1][1].start)
			},
			a = {
				type: "chunkString",
				contentType: "string",
				start: Object.assign({}, o.start),
				end: Object.assign({}, o.end)
			},
			l = [e[n + 1], e[n + 2],
				["enter", r, t], e[n + 3], e[n + 4],
				["enter", i, t],
				["exit", i, t],
				["enter", o, t],
				["enter", a, t],
				["exit", a, t],
				["exit", o, t], e[e.length - 2], e[e.length - 1],
				["exit", r, t]
			];
		return e.splice(n, e.length - n + 1, ...l), e
	}

	function Bw(e, t, n) {
		const r = this,
			i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
		let o = 0,
			a;
		return l;

		function l(p) {
			return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), u
		}

		function u(p) {
			return p !== 94 ? n(p) : (e.enter("gfmFootnoteCallMarker"), e.consume(p), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s)
		}

		function s(p) {
			let h;
			return p === null || p === 91 || o++ > 999 ? n(p) : p === 93 ? a ? (e.exit("chunkString"), h = e.exit("gfmFootnoteCallString"), i.includes(ot(r.sliceSerialize(h))) ? f(p) : n(p)) : n(p) : (e.consume(p), ve(p) || (a = !0), p === 92 ? c : s)
		}

		function c(p) {
			return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, s) : s(p)
		}

		function f(p) {
			return e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t
		}
	}

	function jw(e, t, n) {
		const r = this,
			i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
		let o, a = 0,
			l;
		return u;

		function u(m) {
			return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), s
		}

		function s(m) {
			return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), c) : n(m)
		}

		function c(m) {
			let _;
			return m === null || m === 91 || a > 999 ? n(m) : m === 93 ? l ? (_ = e.exit("gfmFootnoteDefinitionLabelString"), o = ot(r.sliceSerialize(_)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h) : n(m) : $(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), a++, c) : (e.enter("chunkString").contentType = "string", f(m))
		}

		function f(m) {
			return m === null || $(m) || m === 91 || m === 93 || a > 999 ? (e.exit("chunkString"), c(m)) : (ve(m) || (l = !0), a++, e.consume(m), m === 92 ? p : f)
		}

		function p(m) {
			return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, f) : f(m)
		}

		function h(m) {
			return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), Z(e, d, "gfmFootnoteDefinitionWhitespace")) : n(m)
		}

		function d(m) {
			return i.includes(o) || i.push(o), t(m)
		}
	}

	function Vw(e, t, n) {
		return e.check(Br, t, e.attempt(Lw, t, n))
	}

	function $w(e) {
		e.exit("gfmFootnoteDefinition")
	}

	function zw(e, t, n) {
		const r = this;
		return Z(e, i, "gfmFootnoteDefinitionIndent", 4 + 1);

		function i(o) {
			const a = r.events[r.events.length - 1];
			return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(o) : n(o)
		}
	}

	function Hw(e = {}) {
		let t = e.singleTilde;
		const n = {
			tokenize: i,
			resolveAll: r
		};
		return t == null && (t = !0), {
			text: {
				[126]: n
			},
			insideSpan: {
				null: [n]
			},
			attentionMarkers: {
				null: [126]
			}
		};

		function r(o, a) {
			let l = -1;
			for (; ++l < o.length;)
				if (o[l][0] === "enter" && o[l][1].type === "strikethroughSequenceTemporary" && o[l][1]._close) {
					let u = l;
					for (; u--;)
						if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && o[l][1].end.offset - o[l][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
							o[l][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
							const s = {
									type: "strikethrough",
									start: Object.assign({}, o[u][1].start),
									end: Object.assign({}, o[l][1].end)
								},
								c = {
									type: "strikethroughText",
									start: Object.assign({}, o[u][1].end),
									end: Object.assign({}, o[l][1].start)
								},
								f = [
									["enter", s, a],
									["enter", o[u][1], a],
									["exit", o[u][1], a],
									["enter", c, a]
								];
							$e(f, f.length, 0, Zi(a.parser.constructs.insideSpan.null, o.slice(u + 1, l), a)), $e(f, f.length, 0, [
								["exit", c, a],
								["enter", o[l][1], a],
								["exit", o[l][1], a],
								["exit", s, a]
							]), $e(o, u - 1, l - u + 3, f), l = u + f.length - 2;
							break
						}
				} for (l = -1; ++l < o.length;) o[l][1].type === "strikethroughSequenceTemporary" && (o[l][1].type = "data");
			return o
		}

		function i(o, a, l) {
			const u = this.previous,
				s = this.events;
			let c = 0;
			return f;

			function f(h) {
				return u === 126 && s[s.length - 1][1].type !== "characterEscape" ? l(h) : (o.enter("strikethroughSequenceTemporary"), p(h))
			}

			function p(h) {
				const d = Ji(u);
				if (h === 126) return c > 1 ? l(h) : (o.consume(h), c++, p);
				if (c < 2 && !t) return l(h);
				const m = o.exit("strikethroughSequenceTemporary"),
					_ = Ji(h);
				return m._open = !_ || _ === 2 && Boolean(d), m._close = !d || d === 2 && Boolean(_), a(h)
			}
		}
	}
	const Gw = {
			flow: {
				null: {
					tokenize: qw,
					resolve: Ww
				}
			}
		},
		lp = {
			tokenize: Kw,
			partial: !0
		};

	function Ww(e, t) {
		let n = -1,
			r, i, o, a, l, u, s;
		for (; ++n < e.length;) {
			const c = e[n][1];
			if (o && (c.type === "temporaryTableCellContent" && (a = a || n, l = n), (c.type === "tableCellDivider" || c.type === "tableRow") && l)) {
				const f = {
						type: "tableContent",
						start: e[a][1].start,
						end: e[l][1].end
					},
					p = {
						type: "chunkText",
						start: f.start,
						end: f.end,
						contentType: "text"
					};
				e.splice(a, l - a + 1, ["enter", f, t], ["enter", p, t], ["exit", p, t], ["exit", f, t]), n -= l - a - 3, a = void 0, l = void 0
			}
			if (e[n][0] === "exit" && u !== void 0 && u + (s ? 0 : 1) < n && (c.type === "tableCellDivider" || c.type === "tableRow" && (u + 3 < n || e[u][1].type !== "whitespace"))) {
				const f = {
					type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
					start: e[u][1].start,
					end: e[n][1].end
				};
				e.splice(n + (c.type === "tableCellDivider" ? 1 : 0), 0, ["exit", f, t]), e.splice(u, 0, ["enter", f, t]), n += 2, u = n + 1, s = !0
			}
			c.type === "tableRow" && (o = e[n][0] === "enter", o && (u = n + 1, s = !1)), c.type === "tableDelimiterRow" && (i = e[n][0] === "enter", i && (u = n + 1, s = !1)), c.type === "tableHead" && (r = e[n][0] === "enter")
		}
		return e
	}

	function qw(e, t, n) {
		const r = this,
			i = [];
		let o = 0,
			a, l;
		return u;

		function u(T) {
			return e.enter("table")._align = i, e.enter("tableHead"), e.enter("tableRow"), T === 124 ? s(T) : (o++, e.enter("temporaryTableCellContent"), p(T))
		}

		function s(T) {
			return e.enter("tableCellDivider"), e.consume(T), e.exit("tableCellDivider"), a = !0, c
		}

		function c(T) {
			return T === null || $(T) ? d(T) : ae(T) ? (e.enter("whitespace"), e.consume(T), f) : (a && (a = void 0, o++), T === 124 ? s(T) : (e.enter("temporaryTableCellContent"), p(T)))
		}

		function f(T) {
			return ae(T) ? (e.consume(T), f) : (e.exit("whitespace"), c(T))
		}

		function p(T) {
			return T === null || T === 124 || ve(T) ? (e.exit("temporaryTableCellContent"), c(T)) : (e.consume(T), T === 92 ? h : p)
		}

		function h(T) {
			return T === 92 || T === 124 ? (e.consume(T), p) : p(T)
		}

		function d(T) {
			if (T === null) return n(T);
			e.exit("tableRow"), e.exit("tableHead");
			const Y = r.interrupt;
			return r.interrupt = !0, e.attempt({
				tokenize: F,
				partial: !0
			}, function(V) {
				return r.interrupt = Y, e.enter("tableDelimiterRow"), m(V)
			}, function(V) {
				return r.interrupt = Y, n(V)
			})(T)
		}

		function m(T) {
			return T === null || $(T) ? w(T) : ae(T) ? (e.enter("whitespace"), e.consume(T), _) : T === 45 ? (e.enter("tableDelimiterFiller"), e.consume(T), l = !0, i.push("none"), g) : T === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(T), e.exit("tableDelimiterAlignment"), i.push("left"), S) : T === 124 ? (e.enter("tableCellDivider"), e.consume(T), e.exit("tableCellDivider"), m) : n(T)
		}

		function _(T) {
			return ae(T) ? (e.consume(T), _) : (e.exit("whitespace"), m(T))
		}

		function g(T) {
			return T === 45 ? (e.consume(T), g) : (e.exit("tableDelimiterFiller"), T === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(T), e.exit("tableDelimiterAlignment"), i[i.length - 1] = i[i.length - 1] === "left" ? "center" : "right", E) : m(T))
		}

		function S(T) {
			return T === 45 ? (e.enter("tableDelimiterFiller"), e.consume(T), l = !0, g) : n(T)
		}

		function E(T) {
			return T === null || $(T) ? w(T) : ae(T) ? (e.enter("whitespace"), e.consume(T), _) : T === 124 ? (e.enter("tableCellDivider"), e.consume(T), e.exit("tableCellDivider"), m) : n(T)
		}

		function w(T) {
			return e.exit("tableDelimiterRow"), !l || o !== i.length ? n(T) : T === null ? O(T) : e.check(lp, O, e.attempt({
				tokenize: F,
				partial: !0
			}, Z(e, v, "linePrefix", 4), O))(T)
		}

		function O(T) {
			return e.exit("table"), t(T)
		}

		function v(T) {
			return e.enter("tableBody"), A(T)
		}

		function A(T) {
			return e.enter("tableRow"), T === 124 ? P(T) : (e.enter("temporaryTableCellContent"), R(T))
		}

		function P(T) {
			return e.enter("tableCellDivider"), e.consume(T), e.exit("tableCellDivider"), D
		}

		function D(T) {
			return T === null || $(T) ? j(T) : ae(T) ? (e.enter("whitespace"), e.consume(T), U) : T === 124 ? P(T) : (e.enter("temporaryTableCellContent"), R(T))
		}

		function U(T) {
			return ae(T) ? (e.consume(T), U) : (e.exit("whitespace"), D(T))
		}

		function R(T) {
			return T === null || T === 124 || ve(T) ? (e.exit("temporaryTableCellContent"), D(T)) : (e.consume(T), T === 92 ? M : R)
		}

		function M(T) {
			return T === 92 || T === 124 ? (e.consume(T), R) : R(T)
		}

		function j(T) {
			return e.exit("tableRow"), T === null ? L(T) : e.check(lp, L, e.attempt({
				tokenize: F,
				partial: !0
			}, Z(e, A, "linePrefix", 4), L))(T)
		}

		function L(T) {
			return e.exit("tableBody"), O(T)
		}

		function F(T, Y, V) {
			return J;

			function J(b) {
				return T.enter("lineEnding"), T.consume(b), T.exit("lineEnding"), Z(T, te, "linePrefix")
			}

			function te(b) {
				if (r.parser.lazy[r.now().line] || b === null || $(b)) return V(b);
				const y = r.events[r.events.length - 1];
				return !r.parser.constructs.disable.null.includes("codeIndented") && y && y[1].type === "linePrefix" && y[2].sliceSerialize(y[1], !0).length >= 4 ? V(b) : (r._gfmTableDynamicInterruptHack = !0, T.check(r.parser.constructs.flow, function(Ze) {
					return r._gfmTableDynamicInterruptHack = !1, V(Ze)
				}, function(Ze) {
					return r._gfmTableDynamicInterruptHack = !1, Y(Ze)
				})(b))
			}
		}
	}

	function Kw(e, t, n) {
		let r = 0;
		return i;

		function i(a) {
			return e.enter("check"), e.consume(a), o
		}

		function o(a) {
			return a === -1 || a === 32 ? (e.consume(a), r++, r === 4 ? t : o) : a === null || ve(a) ? t(a) : n(a)
		}
	}
	const Xw = {
			tokenize: Qw
		},
		Yw = {
			text: {
				[91]: Xw
			}
		};

	function Qw(e, t, n) {
		const r = this;
		return i;

		function i(l) {
			return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(l) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), o)
		}

		function o(l) {
			return ve(l) ? (e.enter("taskListCheckValueUnchecked"), e.consume(l), e.exit("taskListCheckValueUnchecked"), a) : l === 88 || l === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(l), e.exit("taskListCheckValueChecked"), a) : n(l)
		}

		function a(l) {
			return l === 93 ? (e.enter("taskListCheckMarker"), e.consume(l), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
				tokenize: Jw
			}, t, n)) : n(l)
		}
	}

	function Jw(e, t, n) {
		const r = this;
		return Z(e, i, "whitespace");

		function i(o) {
			const a = r.events[r.events.length - 1];
			return (a && a[1].type === "whitespace" || $(o)) && o !== null ? t(o) : n(o)
		}
	}

	function Zw(e) {
		return $d([Ow, Dw(), Hw(e), Gw, Yw])
	}

	function up(e, t) {
		const n = String(e);
		if (typeof t != "string") throw new TypeError("Expected character");
		let r = 0,
			i = n.indexOf(t);
		for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
		return r
	}

	function eO(e) {
		if (typeof e != "string") throw new TypeError("Expected a string");
		return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
	}
	const sl = function(e) {
		if (e == null) return iO;
		if (typeof e == "string") return rO(e);
		if (typeof e == "object") return Array.isArray(e) ? tO(e) : nO(e);
		if (typeof e == "function") return bo(e);
		throw new Error("Expected function, string, or object as test")
	};

	function tO(e) {
		const t = [];
		let n = -1;
		for (; ++n < e.length;) t[n] = sl(e[n]);
		return bo(r);

		function r(...i) {
			let o = -1;
			for (; ++o < t.length;)
				if (t[o].call(this, ...i)) return !0;
			return !1
		}
	}

	function nO(e) {
		return bo(t);

		function t(n) {
			let r;
			for (r in e)
				if (n[r] !== e[r]) return !1;
			return !0
		}
	}

	function rO(e) {
		return bo(t);

		function t(n) {
			return n && n.type === e
		}
	}

	function bo(e) {
		return t;

		function t(...n) {
			return Boolean(e.call(this, ...n))
		}
	}

	function iO() {
		return !0
	}

	function $x(e) {
		return e
	}
	const oO = !0,
		aO = "skip",
		cp = !1,
		sO = function(e, t, n, r) {
			typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
			const i = sl(t),
				o = r ? -1 : 1;
			a(e, null, [])();

			function a(l, u, s) {
				const c = typeof l == "object" && l !== null ? l : {};
				let f;
				return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
					value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
				})), p;

				function p() {
					let h = [],
						d, m, _;
					if ((!t || i(l, u, s[s.length - 1] || null)) && (h = lO(n(l, s)), h[0] === cp)) return h;
					if (l.children && h[0] !== aO)
						for (m = (r ? l.children.length : -1) + o, _ = s.concat(l); m > -1 && m < l.children.length;) {
							if (d = a(l.children[m], m, _)(), d[0] === cp) return d;
							m = typeof d[1] == "number" ? d[1] : m + o
						}
					return h
				}
			}
		};

	function lO(e) {
		return Array.isArray(e) ? e : typeof e == "number" ? [oO, e] : [e]
	}
	const uO = {}.hasOwnProperty,
		cO = function(e, t, n, r) {
			let i, o;
			typeof t == "string" || t instanceof RegExp ? (o = [
				[t, n]
			], i = r) : (o = t, i = n), i || (i = {});
			const a = sl(i.ignore || []),
				l = fO(o);
			let u = -1;
			for (; ++u < l.length;) sO(e, "text", s);
			return e;

			function s(f, p) {
				let h = -1,
					d;
				for (; ++h < p.length;) {
					const m = p[h];
					if (a(m, d ? d.children.indexOf(m) : void 0, d)) return;
					d = m
				}
				if (d) return c(f, p)
			}

			function c(f, p) {
				const h = p[p.length - 1],
					d = l[u][0],
					m = l[u][1];
				let _ = 0;
				const g = h.children.indexOf(f);
				let S = !1,
					E = [],
					w;
				d.lastIndex = 0;
				let O = d.exec(f.value);
				for (; O;) {
					w = O.index;
					const v = {
						index: O.index,
						input: O.input,
						stack: [...p, f]
					};
					let A = m(...O, v);
					if (typeof A == "string" && (A = A.length > 0 ? {
							type: "text",
							value: A
						} : void 0), A !== !1 && (_ !== w && E.push({
							type: "text",
							value: f.value.slice(_, w)
						}), Array.isArray(A) ? E.push(...A) : A && E.push(A), _ = w + O[0].length, S = !0), !d.global) break;
					O = d.exec(f.value)
				}
				return S ? (_ < f.value.length && E.push({
					type: "text",
					value: f.value.slice(_)
				}), h.children.splice(g, 1, ...E)) : E = [f], g + E.length
			}
		};

	function fO(e) {
		const t = [];
		if (typeof e != "object") throw new TypeError("Expected array or object as schema");
		if (Array.isArray(e)) {
			let n = -1;
			for (; ++n < e.length;) t.push([fp(e[n][0]), dp(e[n][1])])
		} else {
			let n;
			for (n in e) uO.call(e, n) && t.push([fp(n), dp(e[n])])
		}
		return t
	}

	function fp(e) {
		return typeof e == "string" ? new RegExp(eO(e), "g") : e
	}

	function dp(e) {
		return typeof e == "function" ? e : () => e
	}
	const ll = "phrasing",
		ul = ["autolink", "link", "image", "label"],
		dO = {
			transforms: [yO],
			enter: {
				literalAutolink: pO,
				literalAutolinkEmail: cl,
				literalAutolinkHttp: cl,
				literalAutolinkWww: cl
			},
			exit: {
				literalAutolink: vO,
				literalAutolinkEmail: _O,
				literalAutolinkHttp: mO,
				literalAutolinkWww: gO
			}
		},
		hO = {
			unsafe: [{
				character: "@",
				before: "[+\\-.\\w]",
				after: "[\\-.\\w]",
				inConstruct: ll,
				notInConstruct: ul
			}, {
				character: ".",
				before: "[Ww]",
				after: "[\\-.\\w]",
				inConstruct: ll,
				notInConstruct: ul
			}, {
				character: ":",
				before: "[ps]",
				after: "\\/",
				inConstruct: ll,
				notInConstruct: ul
			}]
		};

	function pO(e) {
		this.enter({
			type: "link",
			title: null,
			url: "",
			children: []
		}, e)
	}

	function cl(e) {
		this.config.enter.autolinkProtocol.call(this, e)
	}

	function mO(e) {
		this.config.exit.autolinkProtocol.call(this, e)
	}

	function gO(e) {
		this.config.exit.data.call(this, e);
		const t = this.stack[this.stack.length - 1];
		t.url = "http://" + this.sliceSerialize(e)
	}

	function _O(e) {
		this.config.exit.autolinkEmail.call(this, e)
	}

	function vO(e) {
		this.exit(e)
	}

	function yO(e) {
		cO(e, [
			[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, bO],
			[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, EO]
		], {
			ignore: ["link", "linkReference"]
		})
	}

	function bO(e, t, n, r, i) {
		let o = "";
		if (!hp(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !SO(n))) return !1;
		const a = TO(n + r);
		if (!a[0]) return !1;
		const l = {
			type: "link",
			title: null,
			url: o + t + a[0],
			children: [{
				type: "text",
				value: t + a[0]
			}]
		};
		return a[1] ? [l, {
			type: "text",
			value: a[1]
		}] : l
	}

	function EO(e, t, n, r) {
		return !hp(r, !0) || /[_-\d]$/.test(n) ? !1 : {
			type: "link",
			title: null,
			url: "mailto:" + t + "@" + n,
			children: [{
				type: "text",
				value: t + "@" + n
			}]
		}
	}

	function SO(e) {
		const t = e.split(".");
		return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
	}

	function TO(e) {
		const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
		let n, r, i, o;
		if (t)
			for (e = e.slice(0, t.index), o = t[0], n = o.indexOf(")"), r = up(e, "("), i = up(e, ")"); n !== -1 && r > i;) e += o.slice(0, n + 1), o = o.slice(n + 1), n = o.indexOf(")"), i++;
		return [e, o]
	}

	function hp(e, t) {
		const n = e.input.charCodeAt(e.index - 1);
		return (e.index === 0 || Yi(n) || Qi(n)) && (!t || n !== 47)
	}

	function pp(e) {
		return e.label || !e.identifier ? e.label || "" : sh(e.identifier)
	}

	function Vt(e) {
		const t = e || {},
			n = t.now || {};
		let r = t.lineShift || 0,
			i = n.line || 1,
			o = n.column || 1;
		return {
			move: u,
			current: a,
			shift: l
		};

		function a() {
			return {
				now: {
					line: i,
					column: o
				},
				lineShift: r
			}
		}

		function l(s) {
			r += s
		}

		function u(s = "") {
			const c = s.split(/\r?\n|\r/g),
				f = c[c.length - 1];
			return i += c.length - 1, o = c.length === 1 ? o + f.length : 1 + f.length + r, s
		}
	}

	function mp(e, t, n) {
		const r = t.indexStack,
			i = e.children || [],
			o = Vt(n),
			a = [];
		let l = -1;
		for (r.push(-1); ++l < i.length;) {
			const s = i[l];
			r[r.length - 1] = l, a.push(o.move(t.handle(s, e, t, {
				before: `
`,
				after: `
`,
				...o.current()
			}))), s.type !== "list" && (t.bulletLastUsed = void 0), l < i.length - 1 && a.push(o.move(u(s, i[l + 1])))
		}
		return r.pop(), a.join("");

		function u(s, c) {
			let f = t.join.length;
			for (; f--;) {
				const p = t.join[f](s, c, e, t);
				if (p === !0 || p === 1) break;
				if (typeof p == "number") return `
`.repeat(1 + p);
				if (p === !1) return `

<!---->

`
			}
			return `

`
		}
	}
	const CO = /\r?\n|\r/g;

	function gp(e, t) {
		const n = [];
		let r = 0,
			i = 0,
			o;
		for (; o = CO.exec(e);) a(e.slice(r, o.index)), n.push(o[0]), r = o.index + o[0].length, i++;
		return a(e.slice(r)), n.join("");

		function a(l) {
			n.push(t(l, i, !l))
		}
	}

	function _p(e) {
		if (!e._compiled) {
			const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
			e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
		}
		return e._compiled
	}

	function wO(e, t) {
		return vp(e, t.inConstruct, !0) && !vp(e, t.notInConstruct, !1)
	}

	function vp(e, t, n) {
		if (!t) return n;
		typeof t == "string" && (t = [t]);
		let r = -1;
		for (; ++r < t.length;)
			if (e.includes(t[r])) return !0;
		return !1
	}

	function yp(e, t, n) {
		const r = (n.before || "") + (t || "") + (n.after || ""),
			i = [],
			o = [],
			a = {};
		let l = -1;
		for (; ++l < e.unsafe.length;) {
			const c = e.unsafe[l];
			if (!wO(e.stack, c)) continue;
			const f = _p(c);
			let p;
			for (; p = f.exec(r);) {
				const h = "before" in c || Boolean(c.atBreak),
					d = "after" in c,
					m = p.index + (h ? p[1].length : 0);
				i.includes(m) ? (a[m].before && !h && (a[m].before = !1), a[m].after && !d && (a[m].after = !1)) : (i.push(m), a[m] = {
					before: h,
					after: d
				})
			}
		}
		i.sort(OO);
		let u = n.before ? n.before.length : 0;
		const s = r.length - (n.after ? n.after.length : 0);
		for (l = -1; ++l < i.length;) {
			const c = i[l];
			c < u || c >= s || c + 1 < s && i[l + 1] === c + 1 && a[c].after && !a[c + 1].before && !a[c + 1].after || i[l - 1] === c - 1 && a[c].before && !a[c - 1].before && !a[c - 1].after || (u !== c && o.push(bp(r.slice(u, c), "\\")), u = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? o.push("\\") : (o.push("&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"), u++))
		}
		return o.push(bp(r.slice(u, s), n.after)), o.join("")
	}

	function OO(e, t) {
		return e - t
	}

	function bp(e, t) {
		const n = /\\(?=[!-/:-@[-`{-~])/g,
			r = [],
			i = [],
			o = e + t;
		let a = -1,
			l = 0,
			u;
		for (; u = n.exec(o);) r.push(u.index);
		for (; ++a < r.length;) l !== r[a] && i.push(e.slice(l, r[a])), i.push("\\"), l = r[a];
		return i.push(e.slice(l)), i.join("")
	}

	function AO() {
		return {
			enter: {
				gfmFootnoteDefinition: e,
				gfmFootnoteDefinitionLabelString: t,
				gfmFootnoteCall: i,
				gfmFootnoteCallString: o
			},
			exit: {
				gfmFootnoteDefinition: r,
				gfmFootnoteDefinitionLabelString: n,
				gfmFootnoteCall: l,
				gfmFootnoteCallString: a
			}
		};

		function e(u) {
			this.enter({
				type: "footnoteDefinition",
				identifier: "",
				label: "",
				children: []
			}, u)
		}

		function t() {
			this.buffer()
		}

		function n(u) {
			const s = this.resume(),
				c = this.stack[this.stack.length - 1];
			c.label = s, c.identifier = ot(this.sliceSerialize(u)).toLowerCase()
		}

		function r(u) {
			this.exit(u)
		}

		function i(u) {
			this.enter({
				type: "footnoteReference",
				identifier: "",
				label: ""
			}, u)
		}

		function o() {
			this.buffer()
		}

		function a(u) {
			const s = this.resume(),
				c = this.stack[this.stack.length - 1];
			c.label = s, c.identifier = ot(this.sliceSerialize(u)).toLowerCase()
		}

		function l(u) {
			this.exit(u)
		}
	}

	function xO() {
		return e.peek = t, {
			unsafe: [{
				character: "[",
				inConstruct: ["phrasing", "label", "reference"]
			}],
			handlers: {
				footnoteDefinition: n,
				footnoteReference: e
			}
		};

		function e(r, i, o, a) {
			const l = Vt(a);
			let u = l.move("[^");
			const s = o.enter("footnoteReference"),
				c = o.enter("reference");
			return u += l.move(yp(o, pp(r), {
				...l.current(),
				before: u,
				after: "]"
			})), c(), s(), u += l.move("]"), u
		}

		function t() {
			return "["
		}

		function n(r, i, o, a) {
			const l = Vt(a);
			let u = l.move("[^");
			const s = o.enter("footnoteDefinition"),
				c = o.enter("label");
			return u += l.move(yp(o, pp(r), {
				...l.current(),
				before: u,
				after: "]"
			})), c(), u += l.move("]:" + (r.children && r.children.length > 0 ? " " : "")), l.shift(4), u += l.move(gp(mp(r, o, l.current()), f)), s(), u;

			function f(p, h, d) {
				return h ? (d ? "" : "    ") + p : p
			}
		}
	}

	function Ep(e, t, n) {
		const r = t.indexStack,
			i = e.children || [],
			o = [];
		let a = -1,
			l = n.before;
		r.push(-1);
		let u = Vt(n);
		for (; ++a < i.length;) {
			const s = i[a];
			let c;
			if (r[r.length - 1] = a, a + 1 < i.length) {
				let f = t.handle.handlers[i[a + 1].type];
				f && f.peek && (f = f.peek), c = f ? f(i[a + 1], e, t, {
					before: "",
					after: "",
					...u.current()
				}).charAt(0) : ""
			} else c = n.after;
			o.length > 0 && (l === "\r" || l === `
`) && s.type === "html" && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), l = " ", u = Vt(n), u.move(o.join(""))), o.push(u.move(t.handle(s, e, t, {
				...u.current(),
				before: l,
				after: c
			}))), l = o[o.length - 1].slice(-1)
		}
		return r.pop(), o.join("")
	}
	const RO = {
			canContainEols: ["delete"],
			enter: {
				strikethrough: IO
			},
			exit: {
				strikethrough: PO
			}
		},
		kO = {
			unsafe: [{
				character: "~",
				inConstruct: "phrasing"
			}],
			handlers: {
				delete: Sp
			}
		};
	Sp.peek = NO;

	function IO(e) {
		this.enter({
			type: "delete",
			children: []
		}, e)
	}

	function PO(e) {
		this.exit(e)
	}

	function Sp(e, t, n, r) {
		const i = Vt(r),
			o = n.enter("emphasis");
		let a = i.move("~~");
		return a += Ep(e, n, {
			...i.current(),
			before: a,
			after: "~"
		}), a += i.move("~~"), o(), a
	}

	function NO() {
		return "~"
	}
	Tp.peek = MO;

	function Tp(e, t, n) {
		let r = e.value || "",
			i = "`",
			o = -1;
		for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
		for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length;) {
			const a = n.unsafe[o],
				l = _p(a);
			let u;
			if (!!a.atBreak)
				for (; u = l.exec(r);) {
					let s = u.index;
					r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1)
				}
		}
		return i + r + i
	}

	function MO() {
		return "`"
	}

	function LO(e, t = {}) {
		const n = (t.align || []).concat(),
			r = t.stringLength || UO,
			i = [],
			o = [],
			a = [],
			l = [];
		let u = 0,
			s = -1;
		for (; ++s < e.length;) {
			const d = [],
				m = [];
			let _ = -1;
			for (e[s].length > u && (u = e[s].length); ++_ < e[s].length;) {
				const g = DO(e[s][_]);
				if (t.alignDelimiters !== !1) {
					const S = r(g);
					m[_] = S, (l[_] === void 0 || S > l[_]) && (l[_] = S)
				}
				d.push(g)
			}
			o[s] = d, a[s] = m
		}
		let c = -1;
		if (typeof n == "object" && "length" in n)
			for (; ++c < u;) i[c] = Cp(n[c]);
		else {
			const d = Cp(n);
			for (; ++c < u;) i[c] = d
		}
		c = -1;
		const f = [],
			p = [];
		for (; ++c < u;) {
			const d = i[c];
			let m = "",
				_ = "";
			d === 99 ? (m = ":", _ = ":") : d === 108 ? m = ":" : d === 114 && (_ = ":");
			let g = t.alignDelimiters === !1 ? 1 : Math.max(1, l[c] - m.length - _.length);
			const S = m + "-".repeat(g) + _;
			t.alignDelimiters !== !1 && (g = m.length + g + _.length, g > l[c] && (l[c] = g), p[c] = g), f[c] = S
		}
		o.splice(1, 0, f), a.splice(1, 0, p), s = -1;
		const h = [];
		for (; ++s < o.length;) {
			const d = o[s],
				m = a[s];
			c = -1;
			const _ = [];
			for (; ++c < u;) {
				const g = d[c] || "";
				let S = "",
					E = "";
				if (t.alignDelimiters !== !1) {
					const w = l[c] - (m[c] || 0),
						O = i[c];
					O === 114 ? S = " ".repeat(w) : O === 99 ? w % 2 ? (S = " ".repeat(w / 2 + .5), E = " ".repeat(w / 2 - .5)) : (S = " ".repeat(w / 2), E = S) : E = " ".repeat(w)
				}
				t.delimiterStart !== !1 && !c && _.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && g === "") && (t.delimiterStart !== !1 || c) && _.push(" "), t.alignDelimiters !== !1 && _.push(S), _.push(g), t.alignDelimiters !== !1 && _.push(E), t.padding !== !1 && _.push(" "), (t.delimiterEnd !== !1 || c !== u - 1) && _.push("|")
			}
			h.push(t.delimiterEnd === !1 ? _.join("").replace(/ +$/, "") : _.join(""))
		}
		return h.join(`
`)
	}

	function DO(e) {
		return e == null ? "" : String(e)
	}

	function UO(e) {
		return e.length
	}

	function Cp(e) {
		const t = typeof e == "string" ? e.codePointAt(0) : 0;
		return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
	}
	const FO = {
		enter: {
			table: BO,
			tableData: wp,
			tableHeader: wp,
			tableRow: VO
		},
		exit: {
			codeText: $O,
			table: jO,
			tableData: fl,
			tableHeader: fl,
			tableRow: fl
		}
	};

	function BO(e) {
		const t = e._align;
		this.enter({
			type: "table",
			align: t.map(n => n === "none" ? null : n),
			children: []
		}, e), this.setData("inTable", !0)
	}

	function jO(e) {
		this.exit(e), this.setData("inTable")
	}

	function VO(e) {
		this.enter({
			type: "tableRow",
			children: []
		}, e)
	}

	function fl(e) {
		this.exit(e)
	}

	function wp(e) {
		this.enter({
			type: "tableCell",
			children: []
		}, e)
	}

	function $O(e) {
		let t = this.resume();
		this.getData("inTable") && (t = t.replace(/\\([\\|])/g, zO));
		const n = this.stack[this.stack.length - 1];
		n.value = t, this.exit(e)
	}

	function zO(e, t) {
		return t === "|" ? t : e
	}

	function HO(e) {
		const t = e || {},
			n = t.tableCellPadding,
			r = t.tablePipeAlign,
			i = t.stringLength,
			o = n ? " " : "|";
		return {
			unsafe: [{
				character: "\r",
				inConstruct: "tableCell"
			}, {
				character: `
`,
				inConstruct: "tableCell"
			}, {
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			}, {
				character: "|",
				inConstruct: "tableCell"
			}, {
				atBreak: !0,
				character: ":",
				after: "-"
			}, {
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}],
			handlers: {
				table: a,
				tableRow: l,
				tableCell: u,
				inlineCode: p
			}
		};

		function a(h, d, m, _) {
			return s(c(h, m, _), h.align)
		}

		function l(h, d, m, _) {
			const g = f(h, m, _),
				S = s([g]);
			return S.slice(0, S.indexOf(`
`))
		}

		function u(h, d, m, _) {
			const g = m.enter("tableCell"),
				S = m.enter("phrasing"),
				E = Ep(h, m, {
					..._,
					before: o,
					after: o
				});
			return S(), g(), E
		}

		function s(h, d) {
			return LO(h, {
				align: d,
				alignDelimiters: r,
				padding: n,
				stringLength: i
			})
		}

		function c(h, d, m) {
			const _ = h.children;
			let g = -1;
			const S = [],
				E = d.enter("table");
			for (; ++g < _.length;) S[g] = f(_[g], d, m);
			return E(), S
		}

		function f(h, d, m) {
			const _ = h.children;
			let g = -1;
			const S = [],
				E = d.enter("tableRow");
			for (; ++g < _.length;) S[g] = u(_[g], h, d, m);
			return E(), S
		}

		function p(h, d, m) {
			let _ = Tp(h, d, m);
			return m.stack.includes("tableCell") && (_ = _.replace(/\|/g, "\\$&")), _
		}
	}

	function GO(e) {
		const t = e.options.bullet || "*";
		if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
		return t
	}

	function WO(e) {
		const t = e.options.listItemIndent || "tab";
		if (t === 1 || t === "1") return "one";
		if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
		return t
	}

	function qO(e, t, n, r) {
		const i = WO(n);
		let o = n.bulletCurrent || GO(n);
		t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
		let a = o.length + 1;
		(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (a = Math.ceil(a / 4) * 4);
		const l = Vt(r);
		l.move(o + " ".repeat(a - o.length)), l.shift(a);
		const u = n.enter("listItem"),
			s = gp(mp(e, n, l.current()), c);
		return u(), s;

		function c(f, p, h) {
			return p ? (h ? "" : " ".repeat(a)) + f : (h ? o : o + " ".repeat(a - o.length)) + f
		}
	}
	const KO = {
			exit: {
				taskListCheckValueChecked: Op,
				taskListCheckValueUnchecked: Op,
				paragraph: YO
			}
		},
		XO = {
			unsafe: [{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}],
			handlers: {
				listItem: QO
			}
		};

	function Op(e) {
		const t = this.stack[this.stack.length - 2];
		t.checked = e.type === "taskListCheckValueChecked"
	}

	function YO(e) {
		const t = this.stack[this.stack.length - 2],
			n = this.stack[this.stack.length - 1],
			r = t.children,
			i = n.children[0];
		let o = -1,
			a;
		if (t && t.type === "listItem" && typeof t.checked == "boolean" && i && i.type === "text") {
			for (; ++o < r.length;) {
				const l = r[o];
				if (l.type === "paragraph") {
					a = l;
					break
				}
			}
			a === n && (i.value = i.value.slice(1), i.value.length === 0 ? n.children.shift() : n.position && i.position && typeof i.position.start.offset == "number" && (i.position.start.column++, i.position.start.offset++, n.position.start = Object.assign({}, i.position.start)))
		}
		this.exit(e)
	}

	function QO(e, t, n, r) {
		const i = e.children[0],
			o = typeof e.checked == "boolean" && i && i.type === "paragraph",
			a = "[" + (e.checked ? "x" : " ") + "] ",
			l = Vt(r);
		o && l.move(a);
		let u = qO(e, t, n, {
			...r,
			...l.current()
		});
		return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;

		function s(c) {
			return c + a
		}
	}

	function JO() {
		return [dO, AO(), RO, FO, KO]
	}

	function ZO(e) {
		return {
			extensions: [hO, xO(), kO, HO(e), XO]
		}
	}

	function eA(e = {}) {
		const t = this.data();
		n("micromarkExtensions", Zw(e)), n("fromMarkdownExtensions", JO()), n("toMarkdownExtensions", ZO(e));

		function n(r, i) {
			(t[r] ? t[r] : t[r] = []).push(i)
		}
	}

	function tA({
		content: e
	}) {
		const t = e.data;
		if (!t.text) return null;
		const n = t.text;
		return C(pe, {
			children: C(rl, {
				remarkPlugins: [eA],
				components: {
					h1: ({
						type: r = "h1",
						children: i,
						size: o = "2xl"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					h2: ({
						type: r = "h2",
						children: i,
						size: o = "2xl"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					h3: ({
						type: r = "h3",
						children: i,
						size: o = "lg"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					h4: ({
						type: r = "h4",
						children: i,
						size: o = "lg"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					h5: ({
						type: r = "h5",
						children: i,
						size: o = "md"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					h6: ({
						type: r = "h6",
						children: i,
						size: o = "md"
					}) => C(ln, {
						type: r,
						children: i,
						size: o
					}),
					li: ({
						children: r
					}) => C("li", {
						children: r
					}),
					ol: ({
						children: r
					}) => C("ol", {
						className: "sm-list-decimal sm-pl-5 sm-mt-0 sm-mb-0",
						children: r
					}),
					ul: ({
						children: r,
						className: i
					}) => i === "contains-task-list" ? C("ul", {
						className: "sm-list-none sm-pl-0 sm-mt-0 sm-mb-0",
						children: r
					}) : C("ul", {
						className: "sm-list-disc sm-pl-5 sm-mt-0 sm-mb-0",
						children: r
					}),
					a: ({
						href: r,
						children: i,
						title: o,
						target: a
					}) => {
						let l = !1;
						if (!a) {
							const s = window.location.hostname,
								c = new URL(r).hostname;
							s !== c && (l = !0)
						}
						const u = {};
						return l && (u.target = "_blank", u.rel = "noopener noreferrer"), C("a", {
							className: "sm-text-primary-base active:sm-text-primary-dark hover:sm-underline focus:underline visited:sm-text-primary-dark",
							href: r,
							title: o,
							...u,
							children: i
						})
					},
					p: ({
						children: r
					}) => C(jn, {
						children: r,
						size: "md"
					}),
					hr: () => C("hr", {
						className: "sm-w-11/12 sm-bg-gray-lightest"
					}),
					table: ({
						...r
					}) => C("table", {
						className: "sm-table-auto md:sm-table-fixed sm-w-full sm-border-spacing-0",
						...r
					}),
					tr: ({
						...r
					}) => C("tr", {
						className: "even:sm-bg-gray-lightest",
						...r
					}),
					thead: ({
						...r
					}) => C("thead", {
						className: "sm-bg-gray-light sm-text-left",
						...r
					}),
					pre: ({
						...r
					}) => C("pre", {
						className: "sm-bg-gray-light sm-rounded-sm",
						...r
					}),
					blockquote: ({
						...r
					}) => C("div", {
						className: "sm-pl-1 sm-bg-gray-light",
						children: C("blockquote", {
							className: "sm-m-0 sm-bg-white sm-pl-2",
							...r
						})
					})
				},
				children: n
			})
		})
	}

	function nA({
		content: e
	}) {
		const {
			sendTextMessage: t
		} = wt(), n = e.data;
		return n.options.length ? C("div", {
			className: "sm-flex sm-flex-col sm-gap-y-2 sm-w-full",
			children: n.options.map(r => C(Lr, {
				theme: "outline",
				onClick: () => t((r == null ? void 0 : r.value) || r.label),
				children: [r.label, C(qi, {
					name: "chevronRight"
				})]
			}, e.id + r.label))
		}) : null
	}

	function Ap({
		contentId: e,
		children: t,
		springStyle: n,
		flush: r,
		fullHeight: i,
		fullWidth: o
	}) {
		return C(Bn.div, {
			className: "sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8 sm-justify-center",
			style: n,
			children: C("div", {
				"data-sm-content": e,
				className: Ue("sm-round-shadow-box", {
					"sm-p-6": !r,
					"sm-w-full": o
				}),
				children: C("div", {
					className: Ue("sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-text-primary-text sm-font-normal sm-font-primary", {
						"sm-overflow-y-auto sm-max-h-80 md:sm-max-h-137": !i
					}),
					children: t
				})
			})
		})
	}
	Ap.defaultProps = {
		flush: !1,
		fullHeight: !1,
		fullWidth: !0
	};
	const rA = e => C(Ps, {
			...e,
			isExternal: !0
		}),
		iA = e => C(Ps, {
			...e,
			isExternal: !1
		});

	function xp({
		fullHeight: e
	}) {
		const {
			cards: t
		} = wt(), n = ws(t, {
			from: {
				opacity: 0,
				transform: "translateY(20px)"
			},
			enter: {
				opacity: 1,
				transform: "translateY(0px)"
			},
			config: Vi.gentle
		}), r = {
			image: {
				flush: !0,
				fullWidth: !1
			}
		}, i = {
			options: nA,
			image: vd,
			externalLink: rA,
			internalLink: iA,
			markdown: tA
		};
		return C(pe, {
			children: n((o, a) => {
				const l = i[(a == null ? void 0 : a.type) || ""],
					u = r[(a == null ? void 0 : a.type) || ""] || {};
				return l ? C("div", {
					class: "sm-w-79 md:sm-w-104 sm-max-h-full sm-flex sm-flex-col sm-justify-end sm-gap-y-2 sm-overflow-hidden sm-p-8 -sm-m-8 md:sm-gap-y-3",
					children: C(Ap, {
						contentId: a.id,
						fullHeight: e,
						springStyle: o,
						...u,
						children: C(l, {
							content: a
						})
					})
				}) : null
			})
		})
	}
	const oA = ({
		children: e
	}) => {
		const {
			connect: t
		} = wt();
		return C("button", {
			"aria-label": "Talk to a Digital Person",
			onClick: t,
			"data-sm-cy": "connectButton",
			className: "sm-h-full sm-w-full sm-p-0 sm-bg-white sm-flex sm-justify-center sm-items-center sm-round-shadow-box sm-pointer-events-auto sm-text-primary-base sm-border-none sm-ring sm-ring-transparent hover:sm-ring-secondary-base sm-transition-colors sm-overflow-hidden",
			children: e
		})
	};

	function Rp({
		totalSteps: e,
		percentageLoaded: t,
		durationMs: n,
		stepName: r
	}) {
		const i = Math.round(100 / e),
			o = t + i,
			a = o < 100 ? o : 100,
			l = {
				reset: !0,
				config: {
					duration: n
				}
			},
			u = Cs({
				...l,
				from: {
					width: `${t}%`
				},
				to: {
					width: `${a}%`
				}
			}),
			{
				number: s
			} = Cs({
				...l,
				from: {
					number: t
				},
				to: {
					number: a
				}
			});
		return C("div", {
			"aria-label": "Loading...",
			role: "progressbar",
			"aria-busy": t < 100,
			"aria-valuenow": t,
			className: Ue("sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[6em] md:sm-text-[10em] sm-relative sm-w-full sm-h-full", {
				"sm-translate-y-8 sm-opacity-60": t === 0
			}),
			children: [r && C("span", {
				className: "sm-sr-only",
				children: r
			}), C("div", {
				className: "sm-bg-white sm-rounded-3xl sm-border-gray-light sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2",
				children: C(Bn.div, {
					className: "sm-bg-primary-base sm-h-full",
					style: u
				})
			}), C(Bn.div, {
				className: "sm-text-primary-lightest",
				children: s.to(c => c.toFixed(0))
			})]
		})
	}
	Rp.defaultProps = {
		from: 0,
		to: 0,
		durationMs: 1e4
	};
	const aA = ({
			indicator: e,
			connectionState: t
		}) => C("div", {
			className: "sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base",
			children: e || C(Rp, {
				stepName: t.name,
				totalSteps: t.totalSteps,
				percentageLoaded: t.percentageLoaded
			})
		}),
		sA = ({
			children: e,
			transitionIn: t,
			position: n
		}) => ws(t, {
			from: {
				transform: "scale(0.5)"
			},
			enter: {
				transform: "scale(1)"
			},
			leave: {
				display: "none"
			},
			config: Vi.gentle
		})((i, o) => o && C(Bn.div, {
			style: i,
			className: Ue({
				"sm-origin-bottom-right": n === nn.BOTTOM_RIGHT,
				"sm-origin-bottom-left": n === nn.BOTTOM_LEFT
			}),
			children: C("div", {
				className: "sm-relative sm-floating-container sm-round-shadow-box",
				children: e
			})
		}));

	function kp({
		title: e
	}) {
		return C("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "currentcolor",
			width: "100%",
			height: "100%",
			preserveAspectRatio: "xMidYMid",
			viewBox: "0 0 100 100",
			children: [C("title", {
				children: e
			}), C("rect", {
				width: "0.738em",
				height: "0.738em",
				x: "42.5",
				y: "22.5",
				rx: "7.5",
				ry: "7.5",
				children: C("animate", {
					attributeName: "opacity",
					begin: "-0.8s",
					dur: "1s",
					keyTimes: "0;1",
					repeatCount: "indefinite",
					values: "1;0"
				})
			}), C("rect", {
				width: "0.738em",
				height: "0.738em",
				x: "42.5",
				y: "22.5",
				rx: "7.5",
				ry: "7.5",
				transform: "rotate(72 50 50)",
				children: C("animate", {
					attributeName: "opacity",
					begin: "-0.6s",
					dur: "1s",
					keyTimes: "0;1",
					repeatCount: "indefinite",
					values: "1;0"
				})
			}), C("rect", {
				width: "0.738em",
				height: "0.738em",
				x: "42.5",
				y: "22.5",
				rx: "7.5",
				ry: "7.5",
				transform: "rotate(144 50 50)",
				children: C("animate", {
					attributeName: "opacity",
					begin: "-0.4s",
					dur: "1s",
					keyTimes: "0;1",
					repeatCount: "indefinite",
					values: "1;0"
				})
			}), C("rect", {
				width: "0.738em",
				height: "0.738em",
				x: "42.5",
				y: "22.5",
				rx: "7.5",
				ry: "7.5",
				transform: "rotate(216 50 50)",
				children: C("animate", {
					attributeName: "opacity",
					begin: "-0.2s",
					dur: "1s",
					keyTimes: "0;1",
					repeatCount: "indefinite",
					values: "1;0"
				})
			}), C("rect", {
				width: "0.738em",
				height: "0.738em",
				x: "42.5",
				y: "22.5",
				rx: "7.5",
				ry: "7.5",
				transform: "rotate(288 50 50)",
				children: C("animate", {
					attributeName: "opacity",
					begin: "0s",
					dur: "1s",
					keyTimes: "0;1",
					repeatCount: "indefinite",
					values: "1;0"
				})
			})]
		})
	}
	kp.defaultProps = {
		title: "Loading..."
	};
	const lA = ({
			title: e
		}) => C(pe, {
			children: [C("span", {
				class: "sm-sr-only",
				children: e
			}), C("span", {
				className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
			}), C("span", {
				className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
			}), C("span", {
				className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
			}), C("span", {
				className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
			})]
		}),
		Ip = ({
			title: e
		}) => C(pe, {
			children: [C("span", {
				class: "sm-sr-only",
				children: e
			}), C("span", {
				className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1.3s_ease-in-out_infinite_0.3s]"
			}), C("span", {
				className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.95s_ease-in-out_infinite]"
			}), C("span", {
				className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.65s_ease-in-out_infinite_0.15s]"
			}), C("span", {
				className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1s_ease-in-out_infinite_0.5s]"
			})]
		});

	function uA({
		state: e
	}) {
		return C("div", {
			className: Ue("sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[46px] sm-h-[46px] sm-rounded-full sm-gap-x-1", {
				"sm-bg-black": e === we.dpSpeaking,
				"sm-bg-white sm-animate-spread": e === we.idle,
				"sm-bg-secondary-base": e === we.userSpeaking,
				"sm-bg-white": e === we.dpProcessing
			}),
			children: [e === we.dpSpeaking && C(Ip, {
				title: "Digital Person Speaking"
			}), e === we.idle && C(lA, {
				title: "Digital Person Waiting"
			}), e === we.userSpeaking && C(Ip, {
				title: "User Speaking"
			}), e === we.dpProcessing && C(kp, {
				title: "Digital Person Processing"
			})]
		})
	}

	function Pp() {
		const {
			disconnect: e,
			isMicrophoneEnabled: t,
			isCameraEnabled: n,
			isVideoMuted: r,
			conversationState: i,
			toggleMicrophone: o,
			toggleCamera: a,
			toggleVideoMuted: l,
			layout: u,
			toggleLayout: s
		} = wt(), c = r ? "volumeOff" : "volume", f = r ? "Unmute video" : "Mute video", p = t ? "microphone" : "microphoneOff", h = n ? "camera" : "cameraOff", d = t ? "Disable microphone" : "Enable microphone", m = n ? "Disable camera" : "Enable camera", _ = u === xe.FLOAT ? "arrowUpRight" : "arrowDownLeft", g = u === xe.FLOAT ? "Switch to fullframe layout" : "Switch to float layout";
		return C("div", {
			className: "sm-h-full sm-p-3 sm-flex sm-flex-col sm-gap-y-[2px] md:sm-gap-y-2",
			children: [C("div", {
				className: "sm-flex sm-flex-col",
				children: C("div", {
					className: "sm-flex sm-justify-between",
					children: [C(Bt, {
						onClick: l,
						name: c,
						title: f,
						theme: r ? sn.danger : sn.default
					}), u === xe.FLOAT ? C(Bt, {
						onClick: e,
						name: "close",
						title: "Close video"
					}) : C(Bt, {
						onClick: s,
						name: _,
						title: g
					})]
				})
			}), C("div", {
				className: "sm-flex sm-flex-col sm-gap-y-[2px] md:sm-gap-y-2 sm-flex-1",
				children: [C("div", {
					className: "sm-flex sm-justify-between sm-flex-2",
					children: [C("div", {
						className: "sm-self-end",
						children: C(uA, {
							state: i
						})
					}), u === xe.FLOAT && C("div", {
						children: C(Bt, {
							onClick: s,
							name: _,
							title: g
						})
					})]
				}), C("div", {
					className: "sm-flex sm-justify-between",
					children: [C(Bt, {
						onClick: o,
						name: p,
						title: d,
						theme: t ? sn.default : sn.danger
					}), C(Bt, {
						onClick: a,
						name: h,
						title: m,
						theme: n ? sn.default : sn.danger
					})]
				})]
			})]
		})
	}
	const Eo = typeof window > "u" || typeof document > "u";
	let dn = Eo ? q : In;

	function So(e) {
		let t = Q(e);
		return dn(() => {
			t.current = e
		}, [e]), t
	}

	function To(e) {
		typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
			throw t
		}))
	}

	function cA() {
		let e = [],
			t = [],
			n = {
				enqueue(r) {
					t.push(r)
				},
				addEventListener(r, i, o, a) {
					return r.addEventListener(i, o, a), n.add(() => r.removeEventListener(i, o, a))
				},
				requestAnimationFrame(...r) {
					let i = requestAnimationFrame(...r);
					return n.add(() => cancelAnimationFrame(i))
				},
				nextFrame(...r) {
					return n.requestAnimationFrame(() => n.requestAnimationFrame(...r))
				},
				setTimeout(...r) {
					let i = setTimeout(...r);
					return n.add(() => clearTimeout(i))
				},
				microTask(...r) {
					let i = {
						current: !0
					};
					return To(() => {
						i.current && r[0]()
					}), n.add(() => {
						i.current = !1
					})
				},
				add(r) {
					return e.push(r), () => {
						let i = e.indexOf(r);
						if (i >= 0) {
							let [o] = e.splice(i, 1);
							o()
						}
					}
				},
				dispose() {
					for (let r of e.splice(0)) r()
				},
				async workQueue() {
					for (let r of t.splice(0)) await r()
				}
			};
		return n
	}
	let yt = function(e) {
			let t = So(e);
			return ie.useCallback((...n) => t.current(...n), [t])
		},
		dl = {
			serverHandoffComplete: !1
		};

	function Co() {
		let [e, t] = de(dl.serverHandoffComplete);
		return q(() => {
			e !== !0 && t(!0)
		}, [e]), q(() => {
			dl.serverHandoffComplete === !1 && (dl.serverHandoffComplete = !0)
		}, []), e
	}
	var Np;
	let fA = 0;

	function Mp() {
		return ++fA
	}
	let Hn = (Np = ie.useId) != null ? Np : function() {
		let e = Co(),
			[t, n] = ie.useState(e ? Mp : null);
		return dn(() => {
			t === null && n(Mp())
		}, [t]), t != null ? "" + t : void 0
	};

	function $t(e, t, ...n) {
		if (e in t) {
			let i = t[e];
			return typeof i == "function" ? i(...n) : i
		}
		let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i => `"${i}"`).join(", ")}.`);
		throw Error.captureStackTrace && Error.captureStackTrace(r, $t), r
	}

	function hl(e) {
		return Eo ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
	}
	let pl = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
	var wo = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(wo || {}),
		Lp = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lp || {}),
		dA = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(dA || {});

	function hA(e = document.body) {
		return e == null ? [] : Array.from(e.querySelectorAll(pl))
	}
	var Dp = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Dp || {});

	function pA(e, t = 0) {
		var n;
		return e === ((n = hl(e)) == null ? void 0 : n.body) ? !1 : $t(t, {
			[0]() {
				return e.matches(pl)
			},
			[1]() {
				let r = e;
				for (; r !== null;) {
					if (r.matches(pl)) return !0;
					r = r.parentElement
				}
				return !1
			}
		})
	}

	function Gn(e) {
		e == null || e.focus({
			preventScroll: !0
		})
	}
	let mA = ["textarea", "input"].join(",");

	function gA(e) {
		var t, n;
		return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, mA)) != null ? n : !1
	}

	function _A(e, t = n => n) {
		return e.slice().sort((n, r) => {
			let i = t(n),
				o = t(r);
			if (i === null || o === null) return 0;
			let a = i.compareDocumentPosition(o);
			return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
		})
	}

	function ml(e, t, n = !0, r = null) {
		let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
			o = Array.isArray(e) ? n ? _A(e) : e : hA(e);
		r = r != null ? r : i.activeElement;
		let a = (() => {
				if (t & 5) return 1;
				if (t & 10) return -1;
				throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
			})(),
			l = (() => {
				if (t & 1) return 0;
				if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
				if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
				if (t & 8) return o.length - 1;
				throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
			})(),
			u = t & 32 ? {
				preventScroll: !0
			} : {},
			s = 0,
			c = o.length,
			f;
		do {
			if (s >= c || s + c <= 0) return 0;
			let p = l + s;
			if (t & 16) p = (p + c) % c;
			else {
				if (p < 0) return 3;
				if (p >= c) return 1
			}
			f = o[p], f == null || f.focus(u), s += a
		} while (f !== i.activeElement);
		return t & 6 && gA(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2
	}

	function gl(e, t, n) {
		let r = So(t);
		q(() => {
			function i(o) {
				r.current(o)
			}
			return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n)
		}, [e, n])
	}

	function vA(e, t, n = !0) {
		let r = Q(!1);
		q(() => {
			requestAnimationFrame(() => {
				r.current = n
			})
		}, [n]);

		function i(a, l) {
			if (!r.current || a.defaultPrevented) return;
			let u = function c(f) {
					return typeof f == "function" ? c(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
				}(e),
				s = l(a);
			if (s !== null && !!s.getRootNode().contains(s)) {
				for (let c of u) {
					if (c === null) continue;
					let f = c instanceof HTMLElement ? c : c.current;
					if (f != null && f.contains(s)) return
				}
				return !pA(s, Dp.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s)
			}
		}
		let o = Q(null);
		gl("mousedown", a => {
			var l, u;
			r.current && (o.current = ((u = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : u[0]) || a.target)
		}, !0), gl("click", a => {
			!o.current || (i(a, () => o.current), o.current = null)
		}, !0), gl("blur", a => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
	}
	let Up = Symbol();

	function yA(e, t = !0) {
		return Object.assign(e, {
			[Up]: t
		})
	}

	function Rt(...e) {
		let t = Q(e);
		q(() => {
			t.current = e
		}, [e]);
		let n = yt(r => {
			for (let i of t.current) i != null && (typeof i == "function" ? i(r) : i.current = r)
		});
		return e.every(r => r == null || (r == null ? void 0 : r[Up])) ? void 0 : n
	}
	var _l = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_l || {}),
		bA = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(bA || {});

	function bt({
		ourProps: e,
		theirProps: t,
		slot: n,
		defaultTag: r,
		features: i,
		visible: o = !0,
		name: a
	}) {
		let l = Fp(t, e);
		if (o) return Oo(l, n, r, a);
		let u = i != null ? i : 0;
		if (u & 2) {
			let {
				static: s = !1,
				...c
			} = l;
			if (s) return Oo(c, n, r, a)
		}
		if (u & 1) {
			let {
				unmount: s = !0,
				...c
			} = l;
			return $t(s ? 0 : 1, {
				[0]() {
					return null
				},
				[1]() {
					return Oo({
						...c,
						hidden: !0,
						style: {
							display: "none"
						}
					}, n, r, a)
				}
			})
		}
		return Oo(l, n, r, a)
	}

	function Oo(e, t = {}, n, r) {
		let {
			as: i = n,
			children: o,
			refName: a = "ref",
			...l
		} = vl(e, ["unmount", "static"]), u = e.ref !== void 0 ? {
			[a]: e.ref
		} : {}, s = typeof o == "function" ? o(t) : o;
		l.className && typeof l.className == "function" && (l.className = l.className(t));
		let c = {};
		if (t) {
			let f = !1,
				p = [];
			for (let [h, d] of Object.entries(t)) typeof d == "boolean" && (f = !0), d === !0 && p.push(h);
			f && (c["data-headlessui-state"] = p.join(" "))
		}
		if (i === pe && Object.keys(Bp(l)).length > 0) {
			if (!$a(s) || Array.isArray(s) && s.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(f => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(f => `  - ${f}`).join(`
`)].join(`
`));
			return tf(s, Object.assign({}, Fp(s.props, Bp(vl(l, ["ref"]))), c, u, EA(s.ref, u.ref)))
		}
		return Ce(i, Object.assign({}, vl(l, ["ref"]), i !== pe && u, i !== pe && c), s)
	}

	function EA(...e) {
		return {
			ref: e.every(t => t == null) ? void 0 : t => {
				for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
			}
		}
	}

	function Fp(...e) {
		if (e.length === 0) return {};
		if (e.length === 1) return e[0];
		let t = {},
			n = {};
		for (let r of e)
			for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
		if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
		for (let r in n) Object.assign(t, {
			[r](i, ...o) {
				let a = n[r];
				for (let l of a) {
					if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
					l(i, ...o)
				}
			}
		});
		return t
	}

	function Et(e) {
		var t;
		return Object.assign(Va(e), {
			displayName: (t = e.displayName) != null ? t : e.name
		})
	}

	function Bp(e) {
		let t = Object.assign({}, e);
		for (let n in t) t[n] === void 0 && delete t[n];
		return t
	}

	function vl(e, t = []) {
		let n = Object.assign({}, e);
		for (let r of t) r in n && delete n[r];
		return n
	}

	function SA(e) {
		let t = e.parentElement,
			n = null;
		for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
		let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
		return r && TA(n) ? !1 : r
	}

	function TA(e) {
		if (!e) return !1;
		let t = e.previousElementSibling;
		for (; t !== null;) {
			if (t instanceof HTMLLegendElement) return !1;
			t = t.previousElementSibling
		}
		return !0
	}
	let CA = "div";
	var Ao = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ao || {});
	let yl = Et(function(e, t) {
			let {
				features: n = 1,
				...r
			} = e, i = {
				ref: t,
				"aria-hidden": (n & 2) === 2 ? !0 : void 0,
				style: {
					position: "relative",
					top: 1,
					left: 1,
					width: 1,
					height: 0,
					padding: 0,
					margin: -1,
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					whiteSpace: "nowrap",
					borderWidth: "0",
					...(n & 4) === 4 && (n & 2) !== 2 && {
						display: "none"
					}
				}
			};
			return bt({
				ourProps: i,
				theirProps: r,
				slot: {},
				defaultTag: CA,
				name: "Hidden"
			})
		}),
		jp = st(null);
	jp.displayName = "OpenClosedContext";
	var bl = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(bl || {});

	function wA() {
		return Ge(jp)
	}
	var Vp = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Vp || {});

	function $p(e, t) {
		let n = Q([]),
			r = yt(e);
		q(() => {
			let i = [...n.current];
			for (let [o, a] of t.entries())
				if (n.current[o] !== a) {
					let l = r(t, i);
					return n.current = t, l
				}
		}, [r, ...t])
	}

	function OA(e, t, n) {
		let r = So(t);
		q(() => {
			function i(o) {
				r.current(o)
			}
			return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n)
		}, [e, n])
	}
	var El = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(El || {});

	function AA() {
		let e = Q(0);
		return OA("keydown", t => {
			t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
		}, !0), e
	}

	function zp() {
		let e = Q(!1);
		return dn(() => (e.current = !0, () => {
			e.current = !1
		}), []), e
	}

	function xo(...e) {
		return be(() => hl(...e), [...e])
	}

	function Sl(e, t, n, r) {
		let i = So(n);
		q(() => {
			e = e != null ? e : window;

			function o(a) {
				i.current(a)
			}
			return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r)
		}, [e, t, r])
	}
	let xA = "div";
	var Hp = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hp || {});
	let $r = Object.assign(Et(function(e, t) {
		let n = Q(null),
			r = Rt(n, t),
			{
				initialFocus: i,
				containers: o,
				features: a = 30,
				...l
			} = e;
		Co() || (a = 1);
		let u = xo(n);
		RA({
			ownerDocument: u
		}, Boolean(a & 16));
		let s = kA({
			ownerDocument: u,
			container: n,
			initialFocus: i
		}, Boolean(a & 2));
		IA({
			ownerDocument: u,
			container: n,
			containers: o,
			previousActiveElement: s
		}, Boolean(a & 8));
		let c = AA(),
			f = yt(() => {
				let h = n.current;
				!h || $t(c.current, {
					[El.Forwards]: () => ml(h, wo.First),
					[El.Backwards]: () => ml(h, wo.Last)
				})
			}),
			p = {
				ref: r
			};
		return ie.createElement(ie.Fragment, null, Boolean(a & 4) && ie.createElement(yl, {
			as: "button",
			type: "button",
			onFocus: f,
			features: Ao.Focusable
		}), bt({
			ourProps: p,
			theirProps: l,
			defaultTag: xA,
			name: "FocusTrap"
		}), Boolean(a & 4) && ie.createElement(yl, {
			as: "button",
			type: "button",
			onFocus: f,
			features: Ao.Focusable
		}))
	}), {
		features: Hp
	});

	function RA({
		ownerDocument: e
	}, t) {
		let n = Q(null);
		Sl(e == null ? void 0 : e.defaultView, "focusout", i => {
			!t || n.current || (n.current = i.target)
		}, !0), $p(() => {
			t || ((e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Gn(n.current), n.current = null)
		}, [t]);
		let r = Q(!1);
		q(() => (r.current = !1, () => {
			r.current = !0, To(() => {
				!r.current || (Gn(n.current), n.current = null)
			})
		}), [])
	}

	function kA({
		ownerDocument: e,
		container: t,
		initialFocus: n
	}, r) {
		let i = Q(null),
			o = zp();
		return $p(() => {
			if (!r) return;
			let a = t.current;
			!a || To(() => {
				if (!o.current) return;
				let l = e == null ? void 0 : e.activeElement;
				if (n != null && n.current) {
					if ((n == null ? void 0 : n.current) === l) {
						i.current = l;
						return
					}
				} else if (a.contains(l)) {
					i.current = l;
					return
				}
				n != null && n.current ? Gn(n.current) : ml(a, wo.First) === Lp.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement
			})
		}, [r]), i
	}

	function IA({
		ownerDocument: e,
		container: t,
		containers: n,
		previousActiveElement: r
	}, i) {
		let o = zp();
		Sl(e == null ? void 0 : e.defaultView, "focus", a => {
			if (!i || !o.current) return;
			let l = new Set(n == null ? void 0 : n.current);
			l.add(t);
			let u = r.current;
			if (!u) return;
			let s = a.target;
			s && s instanceof HTMLElement ? PA(l, s) ? (r.current = s, Gn(s)) : (a.preventDefault(), a.stopPropagation(), Gn(u)) : Gn(r.current)
		}, !0)
	}

	function PA(e, t) {
		var n;
		for (let r of e)
			if ((n = r.current) != null && n.contains(t)) return !0;
		return !1
	}
	let Wn = new Set,
		zt = new Map;

	function Gp(e) {
		e.setAttribute("aria-hidden", "true"), e.inert = !0
	}

	function Wp(e) {
		let t = zt.get(e);
		!t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
	}

	function NA(e, t = !0) {
		dn(() => {
			if (!t || !e.current) return;
			let n = e.current,
				r = hl(n);
			if (r) {
				Wn.add(n);
				for (let i of zt.keys()) i.contains(n) && (Wp(i), zt.delete(i));
				return r.querySelectorAll("body > *").forEach(i => {
					if (i instanceof HTMLElement) {
						for (let o of Wn)
							if (i.contains(o)) return;
						Wn.size === 1 && (zt.set(i, {
							"aria-hidden": i.getAttribute("aria-hidden"),
							inert: i.inert
						}), Gp(i))
					}
				}), () => {
					if (Wn.delete(n), Wn.size > 0) r.querySelectorAll("body > *").forEach(i => {
						if (i instanceof HTMLElement && !zt.has(i)) {
							for (let o of Wn)
								if (i.contains(o)) return;
							zt.set(i, {
								"aria-hidden": i.getAttribute("aria-hidden"),
								inert: i.inert
							}), Gp(i)
						}
					});
					else
						for (let i of zt.keys()) Wp(i), zt.delete(i)
				}
			}
		}, [t])
	}
	let qp = st(!1);

	function MA() {
		return Ge(qp)
	}

	function Tl(e) {
		return ie.createElement(qp.Provider, {
			value: e.force
		}, e.children)
	}

	function LA(e) {
		let t = MA(),
			n = Ge(Kp),
			r = xo(e),
			[i, o] = de(() => {
				if (!t && n !== null || Eo) return null;
				let a = r == null ? void 0 : r.getElementById("headlessui-portal-root");
				if (a) return a;
				if (r === null) return null;
				let l = r.createElement("div");
				return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l)
			});
		return q(() => {
			i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i))
		}, [i, r]), q(() => {
			t || n !== null && o(n.current)
		}, [n, o, t]), i
	}
	let DA = pe,
		UA = Et(function(e, t) {
			let n = e,
				r = Q(null),
				i = Rt(yA(c => {
					r.current = c
				}), t),
				o = xo(r),
				a = LA(r),
				[l] = de(() => {
					var c;
					return Eo ? null : (c = o == null ? void 0 : o.createElement("div")) != null ? c : null
				}),
				u = Co(),
				s = Q(!1);
			return dn(() => {
				if (s.current = !1, !(!a || !l)) return a.contains(l) || (l.setAttribute("data-headlessui-portal", ""), a.appendChild(l)), () => {
					s.current = !0, To(() => {
						var c;
						!s.current || !a || !l || (a.removeChild(l), a.childNodes.length <= 0 && ((c = a.parentElement) == null || c.removeChild(a)))
					})
				}
			}, [a, l]), u ? !a || !l ? null : Kc(bt({
				ourProps: {
					ref: i
				},
				theirProps: n,
				defaultTag: DA,
				name: "Portal"
			}), l) : null
		}),
		FA = pe,
		Kp = st(null),
		BA = Et(function(e, t) {
			let {
				target: n,
				...r
			} = e, i = {
				ref: Rt(t)
			};
			return ie.createElement(Kp.Provider, {
				value: n
			}, bt({
				ourProps: i,
				theirProps: r,
				defaultTag: FA,
				name: "Popover.Group"
			}))
		}),
		Cl = Object.assign(UA, {
			Group: BA
		}),
		Xp = st(null);

	function Yp() {
		let e = Ge(Xp);
		if (e === null) {
			let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
			throw Error.captureStackTrace && Error.captureStackTrace(t, Yp), t
		}
		return e
	}

	function jA() {
		let [e, t] = de([]);
		return [e.length > 0 ? e.join(" ") : void 0, be(() => function(n) {
			let r = yt(o => (t(a => [...a, o]), () => t(a => {
					let l = a.slice(),
						u = l.indexOf(o);
					return u !== -1 && l.splice(u, 1), l
				}))),
				i = be(() => ({
					register: r,
					slot: n.slot,
					name: n.name,
					props: n.props
				}), [r, n.slot, n.name, n.props]);
			return ie.createElement(Xp.Provider, {
				value: i
			}, n.children)
		}, [t])]
	}
	let VA = "p",
		$A = Et(function(e, t) {
			let n = Yp(),
				r = `headlessui-description-${Hn()}`,
				i = Rt(t);
			dn(() => n.register(r), [r, n.register]);
			let o = e,
				a = {
					ref: i,
					...n.props,
					id: r
				};
			return bt({
				ourProps: a,
				theirProps: o,
				slot: n.slot || {},
				defaultTag: VA,
				name: n.name || "Description"
			})
		}),
		wl = st(() => {});
	wl.displayName = "StackContext";
	var Ol = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ol || {});

	function zA() {
		return Ge(wl)
	}

	function HA({
		children: e,
		onUpdate: t,
		type: n,
		element: r,
		enabled: i
	}) {
		let o = zA(),
			a = yt((...l) => {
				t == null || t(...l), o(...l)
			});
		return dn(() => {
			let l = i === void 0 || i === !0;
			return l && a(0, n, r), () => {
				l && a(1, n, r)
			}
		}, [a, n, r, i]), ie.createElement(wl.Provider, {
			value: a
		}, e)
	}

	function GA() {
		return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
	}
	var WA = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(WA || {}),
		qA = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(qA || {});
	let KA = {
			[0](e, t) {
				return e.titleId === t.id ? e : {
					...e,
					titleId: t.id
				}
			}
		},
		Ro = st(null);
	Ro.displayName = "DialogContext";

	function zr(e) {
		let t = Ge(Ro);
		if (t === null) {
			let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
			throw Error.captureStackTrace && Error.captureStackTrace(n, zr), n
		}
		return t
	}

	function XA(e, t) {
		q(() => {
			var n;
			if (!t || !e) return;
			let r = cA();

			function i(l, u, s) {
				let c = l.style.getPropertyValue(u);
				return Object.assign(l.style, {
					[u]: s
				}), r.add(() => {
					Object.assign(l.style, {
						[u]: c
					})
				})
			}
			let o = e.documentElement,
				a = ((n = e.defaultView) != null ? n : window).innerWidth - o.clientWidth;
			if (i(o, "overflow", "hidden"), a > 0) {
				let l = o.clientWidth - o.offsetWidth,
					u = a - l;
				i(o, "paddingRight", `${u}px`)
			}
			if (GA()) {
				let l = window.pageYOffset;
				i(o, "position", "relative"), i(o, "marginTop", `-${l}px`), i(o, "width", "100%"), r.add(() => window.scrollTo(0, l))
			}
			return r.dispose
		}, [e, t])
	}

	function YA(e, t) {
		return $t(t.type, KA, e, t)
	}
	let QA = "div",
		JA = _l.RenderStrategy | _l.Static,
		ZA = Et(function(e, t) {
			let {
				open: n,
				onClose: r,
				initialFocus: i,
				__demoMode: o = !1,
				...a
			} = e, [l, u] = de(0), s = wA();
			n === void 0 && s !== null && (n = $t(s, {
				[bl.Open]: !0,
				[bl.Closed]: !1
			}));
			let c = Q(new Set),
				f = Q(null),
				p = Rt(f, t),
				h = Q(null),
				d = xo(f),
				m = e.hasOwnProperty("open") || s !== null,
				_ = e.hasOwnProperty("onClose");
			if (!m && !_) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
			if (!m) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
			if (!_) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
			if (typeof n != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);
			if (typeof r != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${r}`);
			let g = n ? 0 : 1,
				[S, E] = La(YA, {
					titleId: null,
					descriptionId: null,
					panelRef: Po()
				}),
				w = yt(() => r(!1)),
				O = yt(T => E({
					type: 0,
					id: T
				})),
				v = Co() ? o ? !1 : g === 0 : !1,
				A = l > 1,
				P = Ge(Ro) !== null,
				D = A ? "parent" : "leaf";
			NA(f, A ? v : !1), vA(() => {
				var T, Y;
				return [...Array.from((T = d == null ? void 0 : d.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? T : []).filter(V => !(!(V instanceof HTMLElement) || V.contains(h.current) || S.panelRef.current && V.contains(S.panelRef.current))), (Y = S.panelRef.current) != null ? Y : f.current]
			}, w, v && !A), Sl(d == null ? void 0 : d.defaultView, "keydown", T => {
				T.defaultPrevented || T.key === Vp.Escape && g === 0 && (A || (T.preventDefault(), T.stopPropagation(), w()))
			}), XA(d, g === 0 && !P), q(() => {
				if (g !== 0 || !f.current) return;
				let T = new IntersectionObserver(Y => {
					for (let V of Y) V.boundingClientRect.x === 0 && V.boundingClientRect.y === 0 && V.boundingClientRect.width === 0 && V.boundingClientRect.height === 0 && w()
				});
				return T.observe(f.current), () => T.disconnect()
			}, [g, f, w]);
			let [U, R] = jA(), M = `headlessui-dialog-${Hn()}`, j = be(() => [{
				dialogState: g,
				close: w,
				setTitleId: O
			}, S], [g, S, w, O]), L = be(() => ({
				open: g === 0
			}), [g]), F = {
				ref: p,
				id: M,
				role: "dialog",
				"aria-modal": g === 0 ? !0 : void 0,
				"aria-labelledby": S.titleId,
				"aria-describedby": U
			};
			return ie.createElement(HA, {
				type: "Dialog",
				enabled: g === 0,
				element: f,
				onUpdate: yt((T, Y, V) => {
					Y === "Dialog" && $t(T, {
						[Ol.Add]() {
							c.current.add(V), u(J => J + 1)
						},
						[Ol.Remove]() {
							c.current.add(V), u(J => J - 1)
						}
					})
				})
			}, ie.createElement(Tl, {
				force: !0
			}, ie.createElement(Cl, null, ie.createElement(Ro.Provider, {
				value: j
			}, ie.createElement(Cl.Group, {
				target: f
			}, ie.createElement(Tl, {
				force: !1
			}, ie.createElement(R, {
				slot: L,
				name: "Dialog.Description"
			}, ie.createElement($r, {
				initialFocus: i,
				containers: c,
				features: v ? $t(D, {
					parent: $r.features.RestoreFocus,
					leaf: $r.features.All & ~$r.features.FocusLock
				}) : $r.features.None
			}, bt({
				ourProps: F,
				theirProps: a,
				slot: L,
				defaultTag: QA,
				features: JA,
				visible: g === 0,
				name: "Dialog"
			})))))))), ie.createElement(yl, {
				features: Ao.Hidden,
				ref: h
			}))
		}),
		ex = "div",
		tx = Et(function(e, t) {
			let [{
				dialogState: n,
				close: r
			}] = zr("Dialog.Overlay"), i = Rt(t), o = `headlessui-dialog-overlay-${Hn()}`, a = yt(u => {
				if (u.target === u.currentTarget) {
					if (SA(u.currentTarget)) return u.preventDefault();
					u.preventDefault(), u.stopPropagation(), r()
				}
			}), l = be(() => ({
				open: n === 0
			}), [n]);
			return bt({
				ourProps: {
					ref: i,
					id: o,
					"aria-hidden": !0,
					onClick: a
				},
				theirProps: e,
				slot: l,
				defaultTag: ex,
				name: "Dialog.Overlay"
			})
		}),
		nx = "div",
		rx = Et(function(e, t) {
			let [{
				dialogState: n
			}, r] = zr("Dialog.Backdrop"), i = Rt(t), o = `headlessui-dialog-backdrop-${Hn()}`;
			q(() => {
				if (r.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
			}, [r.panelRef]);
			let a = be(() => ({
				open: n === 0
			}), [n]);
			return ie.createElement(Tl, {
				force: !0
			}, ie.createElement(Cl, null, bt({
				ourProps: {
					ref: i,
					id: o,
					"aria-hidden": !0
				},
				theirProps: e,
				slot: a,
				defaultTag: nx,
				name: "Dialog.Backdrop"
			})))
		}),
		ix = "div",
		ox = Et(function(e, t) {
			let [{
				dialogState: n
			}, r] = zr("Dialog.Panel"), i = Rt(t, r.panelRef), o = `headlessui-dialog-panel-${Hn()}`, a = be(() => ({
				open: n === 0
			}), [n]), l = yt(u => {
				u.stopPropagation()
			});
			return bt({
				ourProps: {
					ref: i,
					id: o,
					onClick: l
				},
				theirProps: e,
				slot: a,
				defaultTag: ix,
				name: "Dialog.Panel"
			})
		}),
		ax = "h2",
		sx = Et(function(e, t) {
			let [{
				dialogState: n,
				setTitleId: r
			}] = zr("Dialog.Title"), i = `headlessui-dialog-title-${Hn()}`, o = Rt(t);
			q(() => (r(i), () => r(null)), [i, r]);
			let a = be(() => ({
				open: n === 0
			}), [n]);
			return bt({
				ourProps: {
					ref: o,
					id: i
				},
				theirProps: e,
				slot: a,
				defaultTag: ax,
				name: "Dialog.Title"
			})
		}),
		ko = Object.assign(ZA, {
			Backdrop: rx,
			Panel: ox,
			Overlay: tx,
			Title: sx,
			Description: $A
		});

	function lx({
		isOpen: e,
		onClose: t,
		children: n,
		title: r,
		description: i,
		panelRef: o
	}) {
		return C(ko, {
			open: e,
			onClose: t,
			className: "sm-widget",
			children: [C(ko.Title, {
				className: "sm-sr-only",
				children: r
			}), i && C(ko.Description, {
				className: "sm-sr-only",
				children: i
			}), C("div", {
				className: "sm-relative sm-inset-0 sm-bg-black/40 sm-z-max",
				"aria-hidden": "true"
			}), C("div", {
				className: "sm-relative sm-inset-0 md:sm-inset-10 xl:sm-inset-16 sm-z-max",
				children: C(ko.Panel, {
					ref: o,
					className: "sm-w-full sm-h-full md:sm-rounded-3xl sm-bg-white sm-transform-gpu sm-border-2 sm-border-solid sm-border-gray-lightest sm-overflow-y-auto",
					children: n
				})
			})]
		})
	}

	function ux({
		scrollTargetRef: e,
		children: t,
		scrollOffset: n = 20,
		smallScreenOnly: r = !0
	}) {
		const [i, o] = de(!1);
		return q(() => {
			const a = e.current,
				l = md(() => {
					a && a.scrollTop >= n ? o(!0) : o(!1)
				}, 250);
			return a && a.addEventListener("scroll", l), () => {
				a && a.removeEventListener("scroll", l)
			}
		}, [e, n]), C("div", {
			className: Ue("sm-transition-all sm-w-full sm-h-full sm-sticky sm-top-0", {
				"sm-backdrop-blur-md": i,
				"md:sm-backdrop-blur-none": r
			}),
			children: t
		})
	}

	function cx({
		profilePicture: e,
		greeting: t,
		loadingIndicator: n,
		position: r = nn.BOTTOM_RIGHT
	}) {
		const {
			connectionStatus: i,
			connectionState: o,
			connect: a,
			layout: l,
			toggleLayout: u,
			cards: s
		} = wt(), c = i === Ae.CONNECTING, f = i === Ae.CONNECTED, p = i === Ae.CONNECTING || f, h = i === Ae.DISCONNECTED, d = Q(null);
		return q(() => {
			h && sessionStorage.getItem(Me.sessionId) && a()
		}, [a, h]), q(() => {
			var m;
			l === xe.FULL_FRAME && ((m = d.current) == null || m.scroll({
				top: 0
			}))
		}, [s, l]), C("div", {
			className: "sm-fixed sm-bottom-0 sm-right-0 sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full sm-w-full sm-p-5",
			children: [C("div", {
				className: Ue("sm-h-full sm-flex sm-flex-col sm-justify-end", {
					"sm-gap-y-2 md:sm-gap-y-5": l === xe.FLOAT,
					"sm-items-end": r === nn.BOTTOM_RIGHT,
					"sm-items-start": r === nn.BOTTOM_LEFT
				}),
				children: [l === xe.FLOAT && C(xp, {
					fullHeight: !1
				}), C("div", {
					className: Ue("sm-flex sm-flex-wrap sm-gap-2 sm-items-center sm-justify-end md:sm-gap-5", {
						"sm-flex-row-reverse": r === nn.BOTTOM_LEFT
					}),
					children: C(pe, {
						children: [!p && C("div", {
							className: "sm-max-w-xs sm-z-10",
							children: C(A1, {
								greeting: t
							})
						}), h && C("div", {
							className: "sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35",
							children: C(oA, {
								children: C(x1, {
									src: e
								})
							})
						}), C(sA, {
							transitionIn: c,
							position: r,
							children: C(aA, {
								indicator: n,
								connectionState: o
							})
						}), l === xe.FLOAT && f && C("div", {
							className: "sm-floating-container",
							children: C("div", {
								className: "sm-w-full sm-h-full sm-round-shadow-box sm-border-2 sm-border-solid sm-border-gray-lightest",
								children: [C(Is, {
									autoConnect: !1
								}), C("div", {
									className: "sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full",
									children: C(Pp, {})
								})]
							})
						})]
					})
				})]
			}), C(lx, {
				title: "Interactive Digital Person",
				isOpen: f && l === xe.FULL_FRAME,
				onClose: () => u(),
				panelRef: d,
				children: [C("div", {
					className: "sm-sticky sm-top-0 sm-w-full sm-h-full",
					children: [C(Is, {
						autoConnect: !1
					}), C("div", {
						className: "sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full",
						children: C(ux, {
							scrollTargetRef: d,
							smallScreenOnly: !0,
							children: C(Pp, {})
						})
					})]
				}), C("div", {
					className: "sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full minRatio4/3:sm-w-auto minRatio4/3:sm-h-auto minRatio4/3:sm-left-auto minRatio4/3:sm-top-24 minRatio4/3:sm-right-24 xl:sm-top-40 xl:sm-right-40 sm-pointer-events-none",
					children: C("div", {
						className: "sm-pt-[60vh] sm-flex sm-justify-center sm-pb-8 minRatio4/3:sm-pt-0",
						children: C(xp, {
							fullHeight: !0
						})
					})
				})]
			})]
		})
	}

	function fx({
		element: e
	}) {
		const {
			persona: t,
			scene: n,
			sendTextMessage: r,
			enableDebugLogging: i
		} = wt();
		return q(() => {
			Object.defineProperties(e, {
				persona: {
					configurable: !0,
					get: () => t
				},
				scene: {
					configurable: !0,
					get: () => n
				}
			})
		}, [e, t, n]), q(() => {
			const o = e;
			[
				["sendTextMessage", r],
				["enableDebugLogging", i]
			].map(([l, u]) => {
				o[l] = u
			})
		}, [e, r, i]), null
	}

	function dx() {
		const {
			featureMarkers: e,
			setLayout: t
		} = wt();
		return q(() => {
			if (e.command && e.value) {
				if (e.command === Fa.LAYOUT) {
					const r = {
						fullFrame: xe.FULL_FRAME,
						float: xe.FLOAT
					} [e.value];
					if (r) {
						t(r);
						return
					}
				}
				console.warn(`Speech Marker received with unknown command "${e.command}", "${e.value}". Please check your spelling`)
			}
		}, [e, t]), null
	}

	function hx({
		tokenServer: e,
		apiKey: t,
		connectingIndicator: n,
		greeting: r,
		profilePicture: i,
		position: o,
		parent: a,
		layout: l
	}) {
		return q(() => {
			a.classList.add("sm-widget"), a.dispatchEvent(new Event("ready"))
		}, []), C(Vc, {
			apiKey: t,
			tokenServer: e,
			initialLayout: l,
			children: [C(fx, {
				element: a
			}), C(dx, {}), C(cx, {
				greeting: r,
				profilePicture: i,
				loadingIndicator: n,
				position: o
			})]
		})
	}
	const zx = "";
	Io.exports.define("sm-widget", () => hx, {
		attributes: ["api-key", "token-server", "greeting", "profile-picture", "position", "layout"]
	})
});