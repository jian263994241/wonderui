(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    746: function (e, a, l) {
      'use strict';
      l.r(a),
        l.d(a, 'default', function () {
          return r;
        });
      var c = l(0),
        t = l.n(c),
        n = l(30),
        s = Object(n.K)({
          placeHolder: { background: '#1976d2', height: 50, color: '#fff' },
          block: { background: '#4791db', marginBottom: 10 },
        });
      function r(e) {
        var a = s();
        return t.a.createElement(
          n.A,
          { name: 'Block', navbar: !0 },
          t.a.createElement(
            n.e,
            { className: a.block, blank: 1 },
            t.a.createElement('div', { className: a.placeHolder }, 'blank'),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1 },
            t.a.createElement('div', { className: a.placeHolder }, 'space'),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1, blank: 1 },
            t.a.createElement(
              'div',
              { className: a.placeHolder },
              'space & blank',
            ),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1, blank: 1, left: 3 },
            t.a.createElement(
              'div',
              { className: a.placeHolder },
              'space & blank & left',
            ),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1, blank: 1, right: 3 },
            t.a.createElement(
              'div',
              { className: a.placeHolder },
              'space & blank & right',
            ),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1, blank: 1, top: 3 },
            t.a.createElement(
              'div',
              { className: a.placeHolder },
              'space & blank & top',
            ),
          ),
          t.a.createElement(
            n.e,
            { className: a.block, space: 1, blank: 1, bottom: 3 },
            t.a.createElement(
              'div',
              { className: a.placeHolder },
              'space & blank & bottom',
            ),
          ),
        );
      }
    },
  },
]);
