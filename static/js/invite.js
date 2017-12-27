!
function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = "length" in e && e.length,
			n = Z.type(e);
		return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	function r(e, t, n) {
		if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return Z.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (ae.test(t)) return Z.filter(t, e, n);
			t = Z.filter(t, e)
		}
		return Z.grep(e, function(e) {
			return U.call(t, e) >= 0 !== n
		})
	}
	function i(e, t) {
		for (;
		(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	function o(e) {
		var t = he[e] = {};
		return Z.each(e.match(de) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function s() {
		J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
	}
	function a() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Z.expando + a.uid++
	}
	function u(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
			try {
				n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n
			} catch (i) {}
			ye.set(e, t, n)
		} else n = void 0;
		return n
	}
	function l() {
		return !0
	}
	function c() {
		return !1
	}
	function f() {
		try {
			return J.activeElement
		} catch (e) {}
	}
	function p(e, t) {
		return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function d(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}
	function h(e) {
		var t = Pe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function g(e, t) {
		for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
	}
	function m(e, t) {
		var n, r, i, o, s, a, u, l;
		if (1 === t.nodeType) {
			if (ve.hasData(e) && (o = ve.access(e), s = ve.set(t, o), l = o.events)) {
				delete s.handle, s.events = {};
				for (i in l) for (n = 0, r = l[i].length; r > n; n++) Z.event.add(t, i, l[i][n])
			}
			ye.hasData(e) && (a = ye.access(e), u = Z.extend({}, a), ye.set(t, u))
		}
	}
	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
	}
	function y(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	function x(t, n) {
		var r, i = Z(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
		return i.detach(), o
	}
	function b(e) {
		var t = J,
			n = $e[e];
		return n || (n = x(e, t), "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = x(e, t), We.detach()), $e[e] = n), n
	}
	function w(e, t, n) {
		var r, i, o, s, a = e.style;
		return n = n || _e(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Be.test(s) && Ie.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
	}
	function T(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}
	function C(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--;) if (t = Ge[i] + n, t in e) return t;
		return r
	}
	function N(e, t, n) {
		var r = Xe.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function k(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(e, n + Te[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
		return s
	}
	function E(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = _e(e),
			s = "border-box" === Z.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i)) return i;
			r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}
	function S(e, t) {
		for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
		for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}
	function D(e, t, n, r, i) {
		return new D.prototype.init(e, t, n, r, i)
	}
	function j() {
		return setTimeout(function() {
			Qe = void 0
		}), Qe = Z.now()
	}
	function A(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Te[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function L(e, t, n) {
		for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function q(e, t, n) {
		var r, i, o, s, a, u, l, c, f = this,
			p = {},
			d = e.style,
			h = e.nodeType && Ce(e),
			g = ve.get(e, "fxshow");
		n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
			a.unqueued || u()
		}), a.unqueued++, f.always(function() {
			f.always(function() {
				a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], Ke.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
				if ("show" !== i || !g || void 0 === g[r]) continue;
				h = !0
			}
			p[r] = g && g[r] || Z.style(e, r)
		} else l = void 0;
		if (Z.isEmptyObject(p))"inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
		else {
			g ? "hidden" in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function() {
				Z(e).hide()
			}), f.done(function() {
				var t;
				ve.remove(e, "fxshow");
				for (t in p) Z.style(e, t, p[t])
			});
			for (r in p) s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function H(e, t) {
		var n, r, i, o, s;
		for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand" in s) {
			o = s.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	function O(e, t, n) {
		var r, i, o = 0,
			s = tt.length,
			a = Z.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = Qe || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
				return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
			},
			l = a.promise({
				elem: e,
				props: Z.extend({}, t),
				opts: Z.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Qe || j(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (H(c, l.opts.specialEasing); s > o; o++) if (r = tt[o].call(l, e, c, l.opts)) return r;
		return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function F(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(de) || [];
			if (Z.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function P(e, t, n, r) {
		function i(a) {
			var u;
			return o[a] = !0, Z.each(e[a] || [], function(e, a) {
				var l = a(t, n, r);
				return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			s = e === xt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}
	function R(e, t) {
		var n, r, i = Z.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Z.extend(!0, e, r), e
	}
	function M(e, t, n) {
		for (var r, i, o, s, a = e.contents, u = e.dataTypes;
		"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r) for (i in a) if (a[i] && a[i].test(r)) {
			u.unshift(i);
			break
		}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}
	function W(e, t, n, r) {
		var i, o, s, a, u, l = {},
			c = e.dataTypes.slice();
		if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
		for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
		else if ("*" !== u && u !== o) {
			if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
				s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
				break
			}
			if (s !== !0) if (s && e["throws"]) t = s(t);
			else try {
				t = s(t)
			} catch (f) {
				return {
					state: "parsererror",
					error: s ? f : "No conversion from " + u + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function $(e, t, n, r) {
		var i;
		if (Z.isArray(t)) Z.each(t, function(t, i) {
			n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== Z.type(t)) r(e, t);
		else for (i in t) $(e + "[" + i + "]", t[i], n, r)
	}
	function I(e) {
		return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var B = [],
		_ = B.slice,
		z = B.concat,
		X = B.push,
		U = B.indexOf,
		V = {},
		Y = V.toString,
		G = V.hasOwnProperty,
		Q = {},
		J = e.document,
		K = "2.1.4",
		Z = function(e, t) {
			return new Z.fn.init(e, t)
		},
		ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(e, t) {
			return t.toUpperCase()
		};
	Z.fn = Z.prototype = {
		jquery: K,
		constructor: Z,
		selector: "",
		length: 0,
		toArray: function() {
			return _.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
		},
		pushStack: function(e) {
			var t = Z.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Z.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(Z.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(_.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: X,
		sort: B.sort,
		splice: B.splice
	}, Z.extend = Z.fn.extend = function() {
		var e, t, n, r, i, o, s = arguments[0] || {},
			a = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
		return s
	}, Z.extend({
		expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Z.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(e) {
			return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, re)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e);
			if (r) {
				if (a) for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (a) for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : U.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o), r !== a && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				s = e.length,
				a = n(e),
				u = [];
			if (a) for (; s > o; o++) i = t(e[o], o, r), null != i && u.push(i);
			else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
			return z.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(_.call(arguments)))
			}, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
		},
		now: Date.now,
		support: Q
	}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		V["[object " + t + "]"] = t.toLowerCase()
	});
	var ie = function(e) {
			function t(e, t, n, r) {
				var i, o, s, a, u, l, f, d, h, g;
				if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
				if (!r && O) {
					if (11 !== a && (i = ye.exec(e))) if (s = i[1]) {
						if (9 === a) {
							if (o = t.getElementById(s), !o || !o.parentNode) return n;
							if (o.id === s) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
					} else {
						if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((s = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(s)), n
					}
					if (w.qsa && (!F || !F.test(e))) {
						if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
							for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + p(l[u]);
							h = xe.test(e) && c(t.parentNode) || t, g = l.join(",")
						}
						if (g) try {
							return K.apply(n, h.querySelectorAll(g)), n
						} catch (m) {} finally {
							f || t.removeAttribute("id")
						}
					}
				}
				return S(e.replace(ue, "$1"), t, n, r)
			}
			function n() {
				function e(n, r) {
					return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
				var t = [];
				return e
			}
			function r(e) {
				return e[W] = !0, e
			}
			function i(e) {
				var t = q.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}
			function o(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
			}
			function s(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (r) return r;
				if (n) for (; n = n.nextSibling;) if (n === t) return -1;
				return e ? 1 : -1
			}
			function a(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}
			function u(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}
			function l(e) {
				return r(function(t) {
					return t = +t, r(function(n, r) {
						for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			function f() {}
			function p(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}
			function d(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					o = B++;
				return t.first ?
				function(t, n, o) {
					for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
				} : function(t, n, s) {
					var a, u, l = [I, o];
					if (s) {
						for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return !0
					} else for (; t = t[r];) if (1 === t.nodeType || i) {
						if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o) return l[2] = a[2];
						if (u[r] = l, l[2] = e(t, n, s)) return !0
					}
				}
			}
			function h(e) {
				return e.length > 1 ?
				function(t, n, r) {
					for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}
			function g(e, n, r) {
				for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
				return r
			}
			function m(e, t, n, r, i) {
				for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
				return s
			}
			function v(e, t, n, i, o, s) {
				return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function(r, s, a, u) {
					var l, c, f, p = [],
						d = [],
						h = s.length,
						v = r || g(t || "*", a.nodeType ? [a] : a, []),
						y = !e || !r && t ? v : m(v, p, e, a, u),
						x = n ? o || (r ? e : h || i) ? [] : s : y;
					if (n && n(y, x, a, u), i) for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
					if (r) {
						if (o || e) {
							if (o) {
								for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
								o(null, x = [], l, u)
							}
							for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
						}
					} else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
				})
			}
			function y(e) {
				for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
					return e === t
				}, s, !0), l = d(function(e) {
					return ee(t, e) > -1
				}, s, !0), c = [function(e, n, r) {
					var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
					return t = null, i
				}]; i > a; a++) if (n = T.relative[e[a].type]) c = [d(h(c), n)];
				else {
					if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
						for (r = ++a; i > r && !T.relative[e[r].type]; r++);
						return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
					}
					c.push(n)
				}
				return h(c)
			}
			function x(e, n) {
				var i = n.length > 0,
					o = e.length > 0,
					s = function(r, s, a, u, l) {
						var c, f, p, d = 0,
							h = "0",
							g = r && [],
							v = [],
							y = D,
							x = r || o && T.find.TAG("*", l),
							b = I += null == y ? 1 : Math.random() || .1,
							w = x.length;
						for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
							if (o && c) {
								for (f = 0; p = e[f++];) if (p(c, s, a)) {
									u.push(c);
									break
								}
								l && (I = b)
							}
							i && ((c = !p && c) && d--, r && g.push(c))
						}
						if (d += h, i && h !== d) {
							for (f = 0; p = n[f++];) p(g, v, s, a);
							if (r) {
								if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = Q.call(u));
								v = m(v)
							}
							K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
						}
						return l && (I = b, D = y), g
					};
				return i ? r(s) : s
			}
			var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date,
				$ = e.document,
				I = 0,
				B = 0,
				_ = n(),
				z = n(),
				X = n(),
				U = function(e, t) {
					return e === t && (A = !0), 0
				},
				V = 1 << 31,
				Y = {}.hasOwnProperty,
				G = [],
				Q = G.pop,
				J = G.push,
				K = G.push,
				Z = G.slice,
				ee = function(e, t) {
					for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ie = re.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
				se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
				ae = new RegExp(ne + "+", "g"),
				ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				le = new RegExp("^" + ne + "*," + ne + "*"),
				ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				pe = new RegExp(se),
				de = new RegExp("^" + ie + "$"),
				he = {
					ID: new RegExp("^#(" + re + ")"),
					CLASS: new RegExp("^\\.(" + re + ")"),
					TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + se),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				ge = /^(?:input|select|textarea|button)$/i,
				me = /^h\d$/i,
				ve = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				xe = /[+~]/,
				be = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				Te = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				Ce = function() {
					L()
				};
			try {
				K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
			} catch (Ne) {
				K = {
					apply: G.length ?
					function(e, t) {
						J.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			w = t.support = {}, N = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, L = t.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : $;
				return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !N(r), w.attributes = i(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), w.getElementsByTagName = i(function(e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
				}), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
					return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
				}), w.getById ? (T.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && O) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, T.filter.ID = function(e) {
					var t = e.replace(we, Te);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete T.find.ID, T.filter.ID = function(e) {
					var t = e.replace(we, Te);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), T.find.TAG = w.getElementsByTagName ?
				function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, T.find.CLASS = w.getElementsByClassName &&
				function(e, t) {
					return O ? t.getElementsByClassName(e) : void 0
				}, P = [], F = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
					H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
				}), i(function(e) {
					var t = r.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
				})), (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
					w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", se)
				}), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(H.compareDocumentPosition), M = t || ve.test(H.contains) ?
				function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t) for (; t = t.parentNode;) if (t === e) return !0;
					return !1
				}, U = t ?
				function(e, t) {
					if (e === t) return A = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return A = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						u = [e],
						l = [t];
					if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
					if (o === a) return s(e, t);
					for (n = e; n = n.parentNode;) u.unshift(n);
					for (n = t; n = n.parentNode;) l.unshift(n);
					for (; u[i] === l[i];) i++;
					return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
				}, r) : q
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== q && L(e), n = n.replace(fe, "='$1']"), w.matchesSelector && O && (!P || !P.test(n)) && (!F || !F.test(n))) try {
					var r = R.call(e, n);
					if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return t(n, q, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== q && L(e), M(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== q && L(e);
				var n = T.attrHandle[t.toLowerCase()],
					r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
				return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return j = null, e
			}, C = t.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else for (; t = e[r++];) n += C(t);
				return n
			}, T = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: he,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, Te).toLowerCase();
						return "*" === e ?
						function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = _[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, r) {
						return function(i) {
							var o = t.attr(i, e);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							s = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === r && 0 === i ?
						function(e) {
							return !!e.parentNode
						} : function(t, n, u) {
							var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								v = a && t.nodeName.toLowerCase(),
								y = !u && !a;
							if (m) {
								if (o) {
									for (; g;) {
										for (f = t; f = f[g];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [s ? m.firstChild : m.lastChild], s && y) {
									for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
										c[e] = [I, d, p];
										break
									}
								} else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I) p = l[1];
								else for (;
								(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
								return p -= i, p === r || p % r === 0 && p / r >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
							for (var r, i = o(e, n), s = i.length; s--;) r = ee(e, i[s]), e[r] = !(t[r] = i[s])
						}) : function(e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = E(e.replace(ue, "$1"));
						return i[W] ? r(function(e, t, n, r) {
							for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
						}) : function(e, r, o) {
							return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: r(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function(e) {
						return e = e.replace(we, Te), function(t) {
							return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function(t) {
							var n;
							do
							if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === H
					},
					focus: function(e) {
						return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !! e.checked || "option" === t && !! e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !T.pseudos.empty(e)
					},
					header: function(e) {
						return me.test(e.nodeName)
					},
					input: function(e) {
						return ge.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: l(function() {
						return [0]
					}),
					last: l(function(e, t) {
						return [t - 1]
					}),
					eq: l(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: l(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: l(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: l(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, T.pseudos.nth = T.pseudos.eq;
			for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) T.pseudos[b] = a(b);
			for (b in {
				submit: !0,
				reset: !0
			}) T.pseudos[b] = u(b);
			return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function(e, n) {
				var r, i, o, s, a, u, l, c = z[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (a = e, u = [], l = T.preFilter; a;) {
					(!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(ue, " ")
					}), a = a.slice(r.length));
					for (s in T.filter)!(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
						value: r,
						type: s,
						matches: i
					}), a = a.slice(r.length));
					if (!r) break
				}
				return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
			}, E = t.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = X[e + " "];
				if (!o) {
					for (t || (t = k(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
					o = X(e, x(i, r)), o.selector = e
				}
				return o
			}, S = t.select = function(e, t, n, r) {
				var i, o, s, a, u, l = "function" == typeof e && e,
					f = !r && k(e = l.selector || e);
				if (n = n || [], 1 === f.length) {
					if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
						if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0], !t) return n;
						l && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r), n;
						break
					}
				}
				return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t), n
			}, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !! A, L(), w.sortDetached = i(function(e) {
				return 1 & e.compareDocumentPosition(q.createElement("div"))
			}), i(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), w.attributes && i(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function(e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function(e, t, n) {
				var r;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), t
		}(e);
	Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
	var oe = Z.expr.match.needsContext,
		se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ae = /^.[^:#\[\.,]*$/;
	Z.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Z.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
				for (t = 0; n > t; t++) if (Z.contains(i[t], this)) return !0
			}));
			for (t = 0; n > t; t++) Z.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
		}
	});
	var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = Z.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
		};
	ce.prototype = Z.fn, ue = Z(J);
	var fe = /^(?:parents|prev(?:Until|All))/,
		pe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Z.extend({
		dir: function(e, t, n) {
			for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
				if (i && Z(e).is(n)) break;
				r.push(e)
			}
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Z.fn.extend({
		has: function(e) {
			var t = Z(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? Z.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Z.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Z.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Z.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return Z.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Z.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Z.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Z.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Z.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Z.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Z.merge([], e.childNodes)
		}
	}, function(e, t) {
		Z.fn[e] = function(n, r) {
			var i = Z.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pe[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var de = /\S+/g,
		he = {};
	Z.Callbacks = function(e) {
		e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
		var t, n, r, i, s, a, u = [],
			l = !e.once && [],
			c = function(o) {
				for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++) if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
					t = !1;
					break
				}
				r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var n = u.length;
						!
						function o(t) {
							Z.each(t, function(t, n) {
								var r = Z.type(n);
								"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? s = u.length : t && (i = n, c(t))
					}
					return this
				},
				remove: function() {
					return u && Z.each(arguments, function(e, t) {
						for (var n;
						(n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
					}), this
				},
				has: function(e) {
					return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], s = 0, this
				},
				disable: function() {
					return u = l = t = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = void 0, t || f.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, Z.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", Z.Callbacks("once memory"), "resolved"],
				["reject", "fail", Z.Callbacks("once memory"), "rejected"],
				["notify", "progress", Z.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return Z.Deferred(function(n) {
							Z.each(t, function(t, o) {
								var s = Z.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Z.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, Z.each(t, function(e, o) {
				var s = o[2],
					a = o[3];
				r[o[1]] = s.add, a && s.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = s.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = _.call(arguments),
				s = o.length,
				a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0,
				u = 1 === a ? e : Z.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
					}
				};
			if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
			return a || u.resolveWith(r, o), u.promise()
		}
	});
	var ge;
	Z.fn.ready = function(e) {
		return Z.ready.promise().done(e), this
	}, Z.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Z.readyWait++ : Z.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
		}
	}), Z.ready.promise = function(t) {
		return ge || (ge = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), ge.promise(t)
	}, Z.ready.promise();
	var me = Z.access = function(e, t, n, r, i, o, s) {
			var a = 0,
				u = e.length,
				l = null == n;
			if ("object" === Z.type(n)) {
				i = !0;
				for (a in n) Z.access(e, t, a, n[a], !0, o, s)
			} else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(Z(e), n)
			})), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		};
	Z.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
		key: function(e) {
			if (!a.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = a.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, Z.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
			else for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				s = this.cache[o];
			if (void 0 === t) this.cache[o] = {};
			else {
				Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(de) || [])), n = r.length;
				for (; n--;) delete s[r[n]]
			}
		},
		hasData: function(e) {
			return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var ve = new a,
		ye = new a,
		xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		be = /([A-Z])/g;
	Z.extend({
		hasData: function(e) {
			return ye.hasData(e) || ve.hasData(e)
		},
		data: function(e, t, n) {
			return ye.access(e, t, n)
		},
		removeData: function(e, t) {
			ye.remove(e, t)
		},
		_data: function(e, t, n) {
			return ve.access(e, t, n)
		},
		_removeData: function(e, t) {
			ve.remove(e, t)
		}
	}), Z.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				s = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
					for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
					ve.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				ye.set(this, e)
			}) : me(this, function(t) {
				var n, r = Z.camelCase(e);
				if (o && void 0 === t) {
					if (n = ye.get(o, e), void 0 !== n) return n;
					if (n = ye.get(o, r), void 0 !== n) return n;
					if (n = u(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = ye.get(this, r);
					ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ye.remove(this, e)
			})
		}
	}), Z.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Z.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Z._queueHooks(e, t),
				s = function() {
					Z.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ve.get(e, n) || ve.access(e, n, {
				empty: Z.Callbacks("once memory").add(function() {
					ve.remove(e, [t + "queue", n])
				})
			})
		}
	}), Z.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Z.queue(this, e, t);
				Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Z.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Z.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = ve.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
			return a(), i.promise(t)
		}
	});
	var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Te = ["Top", "Right", "Bottom", "Left"],
		Ce = function(e, t) {
			return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
		},
		Ne = /^(?:checkbox|radio)$/i;
	!
	function() {
		var e = J.createDocumentFragment(),
			t = e.appendChild(J.createElement("div")),
			n = J.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
	}();
	var ke = "undefined";
	Q.focusinBubbles = "onfocusin" in e;
	var Ee = /^key/,
		Se = /^(?:mouse|pointer|contextmenu)|click/,
		De = /^(?:focusinfocus|focusoutblur)$/,
		je = /^([^.]*)(?:\.(.+)|)$/;
	Z.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
			if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
				return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
			}), t = (t || "").match(de) || [""], l = t.length; l--;) a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
				type: d,
				origType: g,
				data: r,
				handler: n,
				guid: n.guid,
				selector: i,
				needsContext: i && Z.expr.match.needsContext.test(i),
				namespace: h.join(".")
			}, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
			if (m && (u = m.events)) {
				for (t = (t || "").match(de) || [""], l = t.length; l--;) if (a = je.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
					for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
					s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
				} else for (d in u) Z.event.remove(e, d + t[l], n, r, !0);
				Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, s, a, u, l, c, f, p = [r || J],
				d = G.call(t, "type") ? t.type : t,
				h = G.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !Z.isWindow(r)) {
					for (u = f.delegateType || d, De.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
					a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
				}
				for (o = 0;
				(s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
				return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
			}
		},
		dispatch: function(e) {
			e = Z.event.fix(e);
			var t, n, r, i, o, s = [],
				a = _.call(arguments),
				u = (ve.get(this, "events") || {})[e.type] || [],
				l = Z.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (s = Z.event.handlers.call(this, e, u), t = 0;
				(i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0;
				(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, s = [],
				a = t.delegateCount,
				u = e.target;
			if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
				for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
				r.length && s.push({
					elem: u,
					handlers: r
				})
			}
			return a < t.length && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[Z.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== f() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return Z.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = Z.extend(new Z.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, Z.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Z.Event = function(e, t) {
		return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
	}, Z.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Z.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Z.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Q.focusinBubbles || Z.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
				Z.event.simulate(t, e.target, Z.event.fix(e), !0)
			};
		Z.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t);
				i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t) - 1;
				i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
			}
		}
	}), Z.fn.extend({
		on: function(e, t, n, r, i) {
			var o, s;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (s in e) this.on(s, t, n, e[s], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return Z().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
				Z.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
				Z.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Z.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Z.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Le = /<([\w:]+)/,
		qe = /<|&#?\w+;/,
		He = /<(?:script|style|link)/i,
		Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Fe = /^$|\/(?:java|ecma)script/i,
		Pe = /^true\/(.*)/,
		Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Me = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
		clone: function(e, t, n) {
			var r, i, o, s, a = e.cloneNode(!0),
				u = Z.contains(e.ownerDocument, e);
			if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
			if (t) if (n) for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++) m(o[r], s[r]);
			else m(e, a);
			return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++) if (i = e[p], i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
			else if (qe.test(i)) {
				for (o = o || c.appendChild(t.createElement("div")), s = (Le.exec(i) || ["", ""])[1].toLowerCase(), a = Me[s] || Me._default, o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
				Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
			} else f.push(t.createTextNode(i));
			for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) Fe.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(e) {
			for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
				if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
					if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
					ve.cache[i] && delete ve.cache[i]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), Z.fn.extend({
		text: function(e) {
			return me(this, function(e) {
				return void 0 === e ? Z.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Z.clone(this, e, t)
			})
		},
		html: function(e) {
			return me(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Ae, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = z.apply([], e);
			var n, r, i, o, s, a, u = 0,
				l = this.length,
				c = this,
				f = l - 1,
				p = e[0],
				g = Z.isFunction(p);
			if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p)) return this.each(function(n) {
				var r = c.eq(n);
				g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
			});
			if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++) s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
				if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++) s = i[u], Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")))
			}
			return this
		}
	}), Z.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Z.fn[e] = function(e) {
			for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var We, $e = {},
		Ie = /^margin/,
		Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
		_e = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		};
	!
	function() {
		function t() {
			s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
			var t = e.getComputedStyle(s, null);
			n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
		}
		var n, r, i = J.documentElement,
			o = J.createElement("div"),
			s = J.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			reliableMarginRight: function() {
				var t, n = s.appendChild(J.createElement("div"));
				return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
			}
		}))
	}(), Z.swap = function(e, t, n, r) {
		var i, o, s = {};
		for (o in t) s[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for (o in t) e.style[o] = s[o];
		return i
	};
	var ze = /^(none|table(?!-c[ea]).+)/,
		Xe = new RegExp("^(" + we + ")(.*)$", "i"),
		Ue = new RegExp("^([+-])=(" + we + ")", "i"),
		Ve = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ye = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ge = ["Webkit", "O", "Moz", "ms"];
	Z.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = w(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, s, a = Z.camelCase(t),
					u = e.style;
				return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, o, s, a = Z.camelCase(t);
			return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
		}
	}), Z.each(["height", "width"], function(e, t) {
		Z.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
					return E(e, t, r)
				}) : E(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && _e(e);
				return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
		return t ? Z.swap(e, {
			display: "inline-block"
		}, w, [e, "marginRight"]) : void 0
	}), Z.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Z.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ie.test(e) || (Z.cssHooks[e + t].set = N)
	}), Z.fn.extend({
		css: function(e, t) {
			return me(this, function(e, t, n) {
				var r, i, o = {},
					s = 0;
				if (Z.isArray(t)) {
					for (r = _e(e), i = t.length; i > s; s++) o[t[s]] = Z.css(e, t[s], !1, r);
					return o
				}
				return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return S(this, !0)
		},
		hide: function() {
			return S(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ce(this) ? Z(this).show() : Z(this).hide()
			})
		}
	}), Z.Tween = D, D.prototype = {
		constructor: D,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = D.propHooks[this.prop];
			return e && e.get ? e.get(this) : D.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = D.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
		}
	}, D.prototype.init.prototype = D.prototype, D.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Z.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Z.fx = D.prototype.init, Z.fx.step = {};
	var Qe, Je, Ke = /^(?:toggle|show|hide)$/,
		Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
		et = /queueHooks$/,
		tt = [q],
		nt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Ze.exec(t),
					o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
					s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
					a = 1,
					u = 20;
				if (s && s[3] !== o) {
					o = o || s[3], i = i || [], s = +r || 1;
					do a = a || ".5", s /= a, Z.style(n.elem, e, s + o);
					while (a !== (a = n.cur() / r) && 1 !== a && --u)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	Z.Animation = Z.extend(O, {
		tweener: function(e, t) {
			Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? tt.unshift(e) : tt.push(e)
		}
	}), Z.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? Z.extend({}, e) : {
			complete: n || !n && t || Z.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !Z.isFunction(t) && t
		};
		return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
		}, r
	}, Z.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(Ce).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = Z.isEmptyObject(e),
				o = Z.speed(t, n, r),
				s = function() {
					var t = O(this, Z.extend({}, e), o);
					(i || ve.get(this, "finish")) && t.stop(!0)
				};
			return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(e, t, n) {
			var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
			return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					i = null != e && e + "queueHooks",
					o = Z.timers,
					s = ve.get(this);
				if (i) s[i] && s[i].stop && r(s[i]);
				else for (i in s) s[i] && s[i].stop && et.test(i) && r(s[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && Z.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = ve.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = Z.timers,
					s = r ? r.length : 0;
				for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), Z.each(["toggle", "show", "hide"], function(e, t) {
		var n = Z.fn[t];
		Z.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
		}
	}), Z.each({
		slideDown: A("show"),
		slideUp: A("hide"),
		slideToggle: A("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		Z.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), Z.timers = [], Z.fx.tick = function() {
		var e, t = 0,
			n = Z.timers;
		for (Qe = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
		n.length || Z.fx.stop(), Qe = void 0
	}, Z.fx.timer = function(e) {
		Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
	}, Z.fx.interval = 13, Z.fx.start = function() {
		Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
	}, Z.fx.stop = function() {
		clearInterval(Je), Je = null
	}, Z.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, Z.fn.delay = function(e, t) {
		return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
			var r = setTimeout(t, e);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	}, function() {
		var e = J.createElement("input"),
			t = J.createElement("select"),
			n = t.appendChild(J.createElement("option"));
		e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
	}();
	var rt, it, ot = Z.expr.attrHandle;
	Z.fn.extend({
		attr: function(e, t) {
			return me(this, Z.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Z.removeAttr(this, e)
			})
		}
	}), Z.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(de);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), it = {
		set: function(e, t, n) {
			return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = ot[t] || Z.find.attr;
		ot[t] = function(e, t, r) {
			var i, o;
			return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
		}
	});
	var st = /^(?:input|select|textarea|button)$/i;
	Z.fn.extend({
		prop: function(e, t) {
			return me(this, Z.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Z.propFix[e] || e]
			})
		}
	}), Z.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Q.optSelected || (Z.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Z.propFix[this.toLowerCase()] = this
	});
	var at = /[\t\r\n\f]/g;
	Z.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, s, a = "string" == typeof e && e,
				u = 0,
				l = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).addClass(e.call(this, t, this.className))
			});
			if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
				for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				s = Z.trim(r), n.className !== s && (n.className = s)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
				u = 0,
				l = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).removeClass(e.call(this, t, this.className))
			});
			if (a) for (t = (e || "").match(de) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
				Z(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var ut = /\r/g;
	Z.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
			}
		}
	}), Z.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Z.find.attr(e, "value");
					return null != t ? t : Z.trim(Z.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++) if (n = r[u], (n.selected || u === i) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
						if (t = Z(n).val(), o) return t;
						s.push(t)
					}
					return s
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Z.each(["radio", "checkbox"], function() {
		Z.valHooks[this] = {
			set: function(e, t) {
				return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
			}
		}, Q.checkOn || (Z.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		Z.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), Z.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var lt = Z.now(),
		ct = /\?/;
	Z.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Z.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch (r) {
			t = void 0
		}
		return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
	};
	var ft = /#.*$/,
		pt = /([?&])_=[^&]*/,
		dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		gt = /^(?:GET|HEAD)$/,
		mt = /^\/\//,
		vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		yt = {},
		xt = {},
		bt = "*/".concat("*"),
		wt = e.location.href,
		Tt = vt.exec(wt.toLowerCase()) || [];
	Z.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: wt,
			type: "GET",
			isLocal: ht.test(Tt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": bt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Z.parseJSON,
				"text xml": Z.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
		},
		ajaxPrefilter: F(yt),
		ajaxTransport: F(xt),
		ajax: function(e, t) {
			function n(e, t, n, s) {
				var u, c, v, y, b, T = t;
				2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t),
				p = f.context || f,
				d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event,
				h = Z.Deferred(),
				g = Z.Callbacks("once memory"),
				m = f.statusCode || {},
				v = {},
				y = {},
				x = 0,
				b = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!s) for (s = {}; t = dt.exec(o);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? o : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]];
						else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || b;
						return r && r.abort(t), n(0, t), this
					}
				};
			if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(yt, f, t, w), 2 === x) return w;
			l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
			for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
			if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
			b = "abort";
			for (c in {
				success: 1,
				error: 1,
				complete: 1
			}) w[c](f[c]);
			if (r = P(xt, f, t, w)) {
				w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
					w.abort("timeout")
				}, f.timeout));
				try {
					x = 1, r.send(v, n)
				} catch (T) {
					if (!(2 > x)) throw T;
					n(-1, T)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return Z.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Z.get(e, void 0, t, "script")
		}
	}), Z.each(["get", "post"], function(e, t) {
		Z[t] = function(e, n, r, i) {
			return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), Z._evalUrl = function(e) {
		return Z.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Z.fn.extend({
		wrapAll: function(e) {
			var t;
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = Z(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = Z.isFunction(e);
			return this.each(function(n) {
				Z(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Z.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Z.expr.filters.visible = function(e) {
		return !Z.expr.filters.hidden(e)
	};
	var Ct = /%20/g,
		Nt = /\[\]$/,
		kt = /\r?\n/g,
		Et = /^(?:submit|button|image|reset|file)$/i,
		St = /^(?:input|select|textarea|keygen)/i;
	Z.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
			i(this.name, this.value)
		});
		else for (n in e) $(n, e[n], t, i);
		return r.join("&").replace(Ct, "+")
	}, Z.fn.extend({
		serialize: function() {
			return Z.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Z.prop(this, "elements");
				return e ? Z.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
			}).map(function(e, t) {
				var n = Z(this).val();
				return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(kt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(kt, "\r\n")
				}
			}).get()
		}
	}), Z.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var Dt = 0,
		jt = {},
		At = {
			0: 200,
			1223: 204
		},
		Lt = Z.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in jt) jt[e]()
	}), Q.cors = !! Lt && "withCredentials" in Lt, Q.ajax = Lt = !! Lt, Z.ajaxTransport(function(e) {
		var t;
		return Q.cors || Lt && !e.crossDomain ? {
			send: function(n, r) {
				var i, o = e.xhr(),
					s = ++Dt;
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) o.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete jt[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), o.onerror = t("error"), t = jt[s] = t("abort");
				try {
					o.send(e.hasContent && e.data || null)
				} catch (a) {
					if (t) throw a
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), Z.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Z.globalEval(e), e
			}
		}
	}), Z.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Z.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = Z("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), J.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var qt = [],
		Ht = /(=)\?(?=&|$)|\?\?/;
	Z.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = qt.pop() || Z.expando + "_" + lt++;
			return this[e] = !0, e
		}
	}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return s || Z.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			s = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, qt.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
		}), "script") : void 0
	}), Z.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || J;
		var r = se.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
	};
	var Ot = Z.fn.load;
	Z.fn.load = function(e, t, n) {
		if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
		var r, i, o, s = this,
			a = e.indexOf(" ");
		return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
		}).complete(n &&
		function(e, t) {
			s.each(n, o || [e.responseText, t, e])
		}), this
	}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Z.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Z.expr.filters.animated = function(e) {
		return Z.grep(Z.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Ft = e.document.documentElement;
	Z.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, s, a, u, l, c = Z.css(e, "position"),
				f = Z(e),
				p = {};
			"static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, Z.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				Z.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
				i = {
					top: 0,
					left: 0
				},
				o = r && r.ownerDocument;
			if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = I(o), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - Z.css(n, "marginTop", !0),
					left: t.left - r.left - Z.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
				return e || Ft
			})
		}
	}), Z.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		Z.fn[t] = function(i) {
			return me(this, function(t, i, o) {
				var s = I(t);
				return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
			}, t, i, arguments.length, null)
		}
	}), Z.each(["top", "left"], function(e, t) {
		Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
			return n ? (n = w(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
		})
	}), Z.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Z.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Z.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					s = n || (r === !0 || i === !0 ? "margin" : "border");
				return me(this, function(t, n, r) {
					var i;
					return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), Z.fn.size = function() {
		return this.length
	}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Z
	});
	var Pt = e.jQuery,
		Rt = e.$;
	return Z.noConflict = function(t) {
		return e.$ === Z && (e.$ = Rt), t && e.jQuery === Z && (e.jQuery = Pt), Z
	}, typeof t === ke && (e.jQuery = e.$ = Z), Z
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +
function(t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var i in e) if (void 0 !== t.style[i]) return {
			end: e[i]
		};
		return !1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
			o = this;
		t(this).one("bsTransitionEnd", function() {
			i = !0
		});
		var n = function() {
				i || t(o).trigger(t.support.transition.end)
			};
		return setTimeout(n, e), this
	}, t(function() {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var i = t(this),
				n = i.data("bs.alert");
			n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
		o = function(e) {
			t(e).on("click", i, this.close)
		};
	o.VERSION = "3.3.4", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
		function i() {
			a.detach().trigger("closed.bs.alert").remove()
		}
		var n = t(this),
			s = n.attr("data-target");
		s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(s);
		e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
	};
	var n = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
		return t.fn.alert = n, this
	}, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.button"),
				s = "object" == typeof e && e;
			n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
		})
	}
	var i = function(e, o) {
			this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
		};
	i.VERSION = "3.3.4", i.DEFAULTS = {
		loadingText: "loading..."
	}, i.prototype.setState = function(e) {
		var i = "disabled",
			o = this.$element,
			n = o.is("input") ? "val" : "html",
			s = o.data();
		e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function() {
			o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
		}, this), 0)
	}, i.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		t && this.$element.toggleClass("active")
	};
	var o = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
		return t.fn.button = o, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
		var o = t(i.target);
		o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.carousel"),
				s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
				a = "string" == typeof e ? e : s.slide;
			n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
		})
	}
	var i = function(e, i) {
			this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
		};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, i.prototype.keydown = function(t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			t.preventDefault()
		}
	}, i.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, i.prototype.getItemIndex = function(t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, i.prototype.getItemForDirection = function(t, e) {
		var i = this.getItemIndex(e),
			o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (o && !this.options.wrap) return e;
		var n = "prev" == t ? -1 : 1,
			s = (i + n) % this.$items.length;
		return this.$items.eq(s)
	}, i.prototype.to = function(t) {
		var e = this,
			i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	}, i.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, i.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, i.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, i.prototype.slide = function(e, o) {
		var n = this.$element.find(".item.active"),
			s = o || this.getItemForDirection(e, n),
			a = this.interval,
			r = "next" == e ? "left" : "right",
			l = this;
		if (s.hasClass("active")) return this.sliding = !1;
		var h = s[0],
			d = t.Event("slide.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
		if (this.$element.trigger(d), !d.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var p = t(this.$indicators.children()[this.getItemIndex(s)]);
				p && p.addClass("active")
			}
			var c = t.Event("slid.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
			return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() {
				s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
					l.$element.trigger(c)
				}, 0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
		}
	};
	var o = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
		return t.fn.carousel = o, this
	};
	var n = function(i) {
			var o, n = t(this),
				s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
			if (s.hasClass("carousel")) {
				var a = t.extend({}, s.data(), n.data()),
					r = n.attr("data-slide-to");
				r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
			}
		};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
		t('[data-ride="carousel"]').each(function() {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(o)
	}
	function i(e) {
		return this.each(function() {
			var i = t(this),
				n = i.data("bs.collapse"),
				s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
			!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
		})
	}
	var o = function(e, i) {
			this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};
	o.VERSION = "3.3.4", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
		toggle: !0
	}, o.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, o.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
				var s = t.Event("show.bs.collapse");
				if (this.$element.trigger(s), !s.isDefaultPrevented()) {
					n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var r = function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
					if (!t.support.transition) return r.call(this);
					var l = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
				}
			}
		}
	}, o.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var n = function() {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
			}
		}
	}, o.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, o.prototype.getParent = function() {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
			var n = t(o);
			this.addAriaAndCollapsedClass(e(n), n)
		}, this)).end()
	}, o.prototype.addAriaAndCollapsedClass = function(t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var n = t.fn.collapse;
	t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
		return t.fn.collapse = n, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
		var n = t(this);
		n.attr("data-target") || o.preventDefault();
		var s = e(n),
			a = s.data("bs.collapse"),
			r = a ? "toggle" : n.data();
		i.call(s, r)
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		e && 3 === e.which || (t(n).remove(), t(s).each(function() {
			var o = t(this),
				n = i(o),
				s = {
					relatedTarget: this
				};
			n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s)))
		}))
	}
	function i(e) {
		var i = e.attr("data-target");
		i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var o = i && t(i);
		return o && o.length ? o : e.parent()
	}
	function o(e) {
		return this.each(function() {
			var i = t(this),
				o = i.data("bs.dropdown");
			o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
		})
	}
	var n = ".dropdown-backdrop",
		s = '[data-toggle="dropdown"]',
		a = function(e) {
			t(e).on("click.bs.dropdown", this.toggle)
		};
	a.VERSION = "3.3.4", a.prototype.toggle = function(o) {
		var n = t(this);
		if (!n.is(".disabled, :disabled")) {
			var s = i(n),
				a = s.hasClass("open");
			if (e(), !a) {
				"ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
				var r = {
					relatedTarget: this
				};
				if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
				n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
			}
			return !1
		}
	}, a.prototype.keydown = function(e) {
		if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
			var o = t(this);
			if (e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled")) {
				var n = i(o),
					a = n.hasClass("open");
				if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && n.find(s).trigger("focus"), o.trigger("click");
				var r = " li:not(.disabled):visible a",
					l = n.find('[role="menu"]' + r + ', [role="listbox"]' + r);
				if (l.length) {
					var h = l.index(e.target);
					38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
				}
			}
		}
	};
	var r = t.fn.dropdown;
	t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
		return t.fn.dropdown = r, this
	}, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), +
function(t) {
	"use strict";

	function e(e, o) {
		return this.each(function() {
			var n = t(this),
				s = n.data("bs.modal"),
				a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
			s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
		})
	}
	var i = function(e, i) {
			this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, i.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	}, i.prototype.show = function(e) {
		var o = this,
			n = t.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			o.$element.one("mouseup.dismiss.bs.modal", function(e) {
				t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var n = t.support.transition && o.$element.hasClass("fade");
			o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in").attr("aria-hidden", !1), o.enforceFocus();
			var s = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			n ? o.$dialog.one("bsTransitionEnd", function() {
				o.$element.trigger("focus").trigger(s)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
		}))
	}, i.prototype.hide = function(e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	}, i.prototype.enforceFocus = function() {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, i.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, i.prototype.resize = function() {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, i.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, i.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, i.prototype.backdrop = function(e) {
		var o = this,
			n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n;
			if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			}, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function() {
					o.removeBackdrop(), e && e()
				};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
		} else e && e()
	}, i.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, i.prototype.adjustDialog = function() {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, i.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, i.prototype.checkScrollbar = function() {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, i.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, i.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, i.prototype.measureScrollbar = function() {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var o = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
		return t.fn.modal = o, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
		var o = t(this),
			n = o.attr("href"),
			s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
			a = s.data("bs.modal") ? "toggle" : t.extend({
				remote: !/#/.test(n) && n
			}, s.data(), o.data());
		o.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
			t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
				o.is(":visible") && o.trigger("focus")
			})
		}), e.call(s, a, this)
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.tooltip"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function(t, e) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
		};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, i.prototype.init = function(e, i, o) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
			var a = n[s];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter" : "focusin",
					l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.getOptions = function(e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, i.prototype.getDelegateOptions = function() {
		var e = {},
			i = this.getDefaults();
		return this._options && t.each(this._options, function(t, o) {
			i[t] != o && (e[t] = o)
		}), e
	}, i.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	}, i.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide()
	}, i.prototype.show = function() {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !o) return;
			var n = this,
				s = this.tip(),
				a = this.getUID(this.type);
			this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i,
				h = l.test(r);
			h && (r = r.replace(l, "") || "top"), s.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element);
			var d = this.getPosition(),
				p = s[0].offsetWidth,
				c = s[0].offsetHeight;
			if (h) {
				var f = r,
					u = this.options.container ? t(this.options.container) : this.$element.parent(),
					g = this.getPosition(u);
				r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r, s.removeClass(f).addClass(r)
			}
			var m = this.getCalculatedOffset(r, d, p, c);
			this.applyPlacement(m, r);
			var v = function() {
					var t = n.hoverState;
					n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
				};
			t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
		}
	}, i.prototype.applyPlacement = function(e, i) {
		var o = this.tip(),
			n = o[0].offsetWidth,
			s = o[0].offsetHeight,
			a = parseInt(o.css("margin-top"), 10),
			r = parseInt(o.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top = e.top + a, e.left = e.left + r, t.offset.setOffset(o[0], t.extend({
			using: function(t) {
				o.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, e), 0), o.addClass("in");
		var l = o[0].offsetWidth,
			h = o[0].offsetHeight;
		"top" == i && h != s && (e.top = e.top + s - h);
		var d = this.getViewportAdjustedDelta(i, e, l, h);
		d.left ? e.left += d.left : e.top += d.top;
		var p = /top|bottom/.test(i),
			c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
			f = p ? "offsetWidth" : "offsetHeight";
		o.offset(e), this.replaceArrow(c, o[0][f], p)
	}, i.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, i.prototype.hide = function(e) {
		function o() {
			"in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
		}
		var n = this,
			s = t(this.$tip),
			a = t.Event("hide.bs." + this.type);
		return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
	}, i.prototype.fixTitle = function() {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, i.prototype.hasContent = function() {
		return this.getTitle()
	}, i.prototype.getPosition = function(e) {
		e = e || this.$element;
		var i = e[0],
			o = "BODY" == i.tagName,
			n = i.getBoundingClientRect();
		null == n.width && (n = t.extend({}, n, {
			width: n.right - n.left,
			height: n.bottom - n.top
		}));
		var s = o ? {
			top: 0,
			left: 0
		} : e.offset(),
			a = {
				scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
			},
			r = o ? {
				width: t(window).width(),
				height: t(window).height()
			} : null;
		return t.extend({}, n, a, r, s)
	}, i.prototype.getCalculatedOffset = function(t, e, i, o) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - o,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - o / 2,
			left: e.left - i
		} : {
			top: e.top + e.height / 2 - o / 2,
			left: e.left + e.width
		}
	}, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
		var n = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return n;
		var s = this.options.viewport && this.options.viewport.padding || 0,
			a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - s - a.scroll,
				l = e.top + s - a.scroll + o;
			r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
		} else {
			var h = e.left - s,
				d = e.left + s + i;
			h < a.left ? n.left = a.left - h : d > a.width && (n.left = a.left + a.width - d)
		}
		return n
	}, i.prototype.getTitle = function() {
		var t, e = this.$element,
			i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	}, i.prototype.getUID = function(t) {
		do t += ~~ (1e6 * Math.random());
		while (document.getElementById(t));
		return t
	}, i.prototype.tip = function() {
		return this.$tip = this.$tip || t(this.options.template)
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, i.prototype.enable = function() {
		this.enabled = !0
	}, i.prototype.disable = function() {
		this.enabled = !1
	}, i.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, i.prototype.toggle = function(e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, i.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout), this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type)
		})
	};
	var o = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = o, this
	}
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.popover"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function(t, e) {
			this.init("popover", t, e)
		};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.4", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle(),
			i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, i.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, i.prototype.getContent = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var o = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
		return t.fn.popover = o, this
	}
}(jQuery), +
function(t) {
	"use strict";

	function e(i, o) {
		this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}
	function i(i) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.scrollspy"),
				s = "object" == typeof i && i;
			n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
		})
	}
	e.VERSION = "3.3.4", e.DEFAULTS = {
		offset: 10
	}, e.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function() {
		var e = this,
			i = "offset",
			o = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var e = t(this),
				n = e.data("target") || e.attr("href"),
				s = /^#./.test(n) && t(n);
			return s && s.length && s.is(":visible") && [
				[s[i]().top + o, n]
			] || null
		}).sort(function(t, e) {
			return t[0] - e[0]
		}).each(function() {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function() {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			i = this.getScrollHeight(),
			o = this.options.offset + i - this.$scrollElement.height(),
			n = this.offsets,
			s = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
		if (a && e < n[0]) return this.activeTarget = null, this.clear();
		for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
	}, e.prototype.activate = function(e) {
		this.activeTarget = e, this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			o = t(i).parents("li").addClass("active");
		o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function() {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var o = t.fn.scrollspy;
	t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
		return t.fn.scrollspy = o, this
	}, t(window).on("load.bs.scrollspy.data-api", function() {
		t('[data-spy="scroll"]').each(function() {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.tab");
			n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
		})
	}
	var i = function(e) {
			this.element = t(e)
		};
	i.VERSION = "3.3.4", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
		var e = this.element,
			i = e.closest("ul:not(.dropdown-menu)"),
			o = e.data("target");
		if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var n = i.find(".active:last a"),
				s = t.Event("hide.bs.tab", {
					relatedTarget: e[0]
				}),
				a = t.Event("show.bs.tab", {
					relatedTarget: n[0]
				});
			if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var r = t(o);
				this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
					n.trigger({
						type: "hidden.bs.tab",
						relatedTarget: e[0]
					}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	}, i.prototype.activate = function(e, o, n) {
		function s() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
		}
		var a = o.find("> .active"),
			r = n && t.support.transition && (a.length && a.hasClass("fade") || !! o.find("> .fade").length);
		a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
	};
	var o = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
		return t.fn.tab = o, this
	};
	var n = function(i) {
			i.preventDefault(), e.call(t(this), "show")
		};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var o = t(this),
				n = o.data("bs.affix"),
				s = "object" == typeof e && e;
			n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
		})
	}
	var i = function(e, o) {
			this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};
	i.VERSION = "3.3.4", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function(t, e, i, o) {
		var n = this.$target.scrollTop(),
			s = this.$element.offset(),
			a = this.$target.height();
		if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
		if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
		var r = null == this.affixed,
			l = r ? n : s.top,
			h = r ? a : e;
		return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
	}, i.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, i.prototype.checkPositionWithEventLoop = function() {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
				o = this.options.offset,
				n = o.top,
				s = o.bottom,
				a = t(document.body).height();
			"object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
			var r = this.getState(a, e, n, s);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r : ""),
					h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented()) return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: a - e - s
			})
		}
	};
	var o = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
		return t.fn.affix = o, this
	}, t(window).on("load", function() {
		t('[data-spy="affix"]').each(function() {
			var i = t(this),
				o = i.data();
			o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
		})
	})
}(jQuery);
var emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
$(function() {
	$("form#invite-via-email").submit(function(t) {
		t.preventDefault();
		var i = $(this).find("#emails").val().split(",").map(function(t) {
			return t.trim()
		}).filter(function(t) {
			return t.length > 0
		}).filter(function(t) {
			return emailValidator.test(t)
		}),
			n = $(this).find("#status");
		if (0 === i.length) return void n.text("邮件地址有误！");
		var e = $(this).find("#notes").val(),
			a = {
				emails: i.join(","),
				notes: e,
                csrfmiddlewaretoken: $("[name=csrfmiddlewaretoken]").val()
			};
		$.ajax({
			url: "/invite/",
			method: "post",
			data: a,
			success: function(data, status) {
				n.text("邀请邮件已经进入发送队列！")
			},
			error: function(data, status) {
			    n.text("邀请邮件提交失败:-(");
			}
		})
	})
});