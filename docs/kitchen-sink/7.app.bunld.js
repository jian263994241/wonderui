(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    748: function (e, a, l) {
      'use strict';
      l.r(a);
      var t = l(5),
        r = l.n(t),
        n = l(4),
        i = l.n(n),
        c = l(0),
        u = l.n(c),
        o = l(30);
      a.default = o.s.create()(function e(a) {
        var l = a.form;
        return u.a.createElement(
          o.A,
          { name: 'CheckableGroup', navbar: !0 },
          u.a.createElement(
            o.m,
            { header: 'Default' },
            u.a.createElement(
              o.e,
              { bottom: 1 },
              u.a.createElement('span', null, '多选: '),
              l.getFieldDecorator('Default1', { initialValue: [] })(
                u.a.createElement(o.h, {
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
            u.a.createElement(
              o.e,
              null,
              u.a.createElement('span', null, '单选: '),
              l.getFieldDecorator('Default2', { initialValue: '0' })(
                u.a.createElement(o.h, {
                  exclusive: !0,
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
          ),
          u.a.createElement(
            o.m,
            { header: 'CheckableTagGroup' },
            u.a.createElement(
              o.e,
              { bottom: 1 },
              u.a.createElement('span', null, '多选: '),
              l.getFieldDecorator('group', { initialValue: [] })(
                u.a.createElement(o.j, {
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
            u.a.createElement(
              o.e,
              null,
              u.a.createElement('span', null, '单选: '),
              l.getFieldDecorator('group2', { initialValue: '0' })(
                u.a.createElement(o.j, {
                  exclusive: !0,
                  data: [
                    { label: '公司', value: '0' },
                    { label: '个人', value: '1' },
                  ],
                }),
              ),
            ),
          ),
          u.a.createElement(
            o.x,
            {
              renderHeader: function e() {
                return 'Checkbox list';
              },
            },
            l.getFieldDecorator('list', { initialValue: [] })(
              u.a.createElement(o.h, {
                data: [
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ],
                renderItem: function e(a) {
                  var l = a.label,
                    t = i()(a, ['label']);
                  return u.a.createElement(o.k, r()({ visible: !0 }, t), l);
                },
              }),
            ),
          ),
          u.a.createElement(
            o.x,
            {
              renderHeader: function e() {
                return 'Checkbox list exclusive';
              },
            },
            l.getFieldDecorator('list2', { initialValue: '0' })(
              u.a.createElement(o.h, {
                exclusive: !0,
                data: [
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ],
                renderItem: function e(a) {
                  var l = a.label,
                    t = i()(a, ['label']);
                  return u.a.createElement(o.k, r()({ visible: !0 }, t), l);
                },
              }),
            ),
          ),
          u.a.createElement(
            o.x,
            {
              renderHeader: function e() {
                return 'Checkbox list custon icon';
              },
            },
            l.getFieldDecorator('list3', { initialValue: '0' })(
              u.a.createElement(o.h, {
                data: [
                  { label: '公司', value: '0' },
                  { label: '个人', value: '1' },
                ],
                renderItem: function e(a) {
                  var l = a.label,
                    t = i()(a, ['label']);
                  return u.a.createElement(
                    o.k,
                    r()(
                      {
                        visible: !0,
                        renderIcon: function e(a) {
                          return a.checked && 'selected';
                        },
                        position: 'right',
                      },
                      t,
                    ),
                    l,
                  );
                },
              }),
            ),
          ),
        );
      });
    },
  },
]);
