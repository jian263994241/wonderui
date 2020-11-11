(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    753: function (e, a, r) {
      'use strict';
      r.r(a),
        r.d(a, 'default', function () {
          return c;
        });
      var t = r(0),
        l = r.n(t),
        n = r(30),
        u = [
          { label: '苹果', value: '0' },
          { label: '橘子', value: '1' },
          { label: '香蕉', value: '2' },
        ];
      function c(e) {
        var a = l.a.useRef(),
          r = l.a.useCallback(function () {
            a.current.resetFields();
          }, []);
        return l.a.createElement(
          n.A,
          { name: 'Form', navbar: !0 },
          l.a.createElement(
            n.s,
            {
              ref: a,
              onFinishFailed: function e(a, r) {
                n.o.toast(r.message);
              },
              onFinish: function e(a) {},
            },
            l.a.createElement(
              n.x,
              {
                renderHeader: function e() {
                  return '基本';
                },
              },
              l.a.createElement(
                n.t,
                {
                  name: 'field_1',
                  rules: [{ required: !0, message: '请填写[基本]字段' }],
                },
                l.a.createElement(n.w, { placeholder: '请输入' }, '基本'),
              ),
              l.a.createElement(
                n.t,
                {
                  name: 'field_2',
                  rules: [{ required: !0, message: '请填写[基本]字段' }],
                },
                l.a.createElement(n.w, { placeholder: '请输入' }, '基本2'),
              ),
              l.a.createElement(
                n.t,
                {
                  name: 'field_3',
                  rules: [{ required: !0, message: '请填写[多行]字段' }],
                },
                l.a.createElement(
                  n.w,
                  { placeholder: '请输入', multiline: !0 },
                  '多行',
                ),
              ),
              l.a.createElement(
                n.t,
                {
                  name: 'group2',
                  initialValue: '0',
                  rules: [{ required: !0, message: '请选择[性质]字段' }],
                },
                l.a.createElement(
                  n.w,
                  {
                    renderInput: function e(a, r) {
                      var t = a.onChange,
                        u = a.value;
                      return l.a.createElement(n.j, {
                        ref: r,
                        exclusive: !0,
                        data: [
                          { label: '公司', value: '0' },
                          { label: '个人', value: '1' },
                        ],
                        onChange: t,
                        value: u,
                      });
                    },
                  },
                  ' ',
                  '企业性质',
                  ' ',
                ),
              ),
              l.a.createElement(
                n.t,
                {
                  name: 'field_4',
                  rules: [{ required: !0, message: '请选择[选择]字段' }],
                },
                l.a.createElement(
                  n.B,
                  { extra: '请选择', data: u, cols: 1 },
                  l.a.createElement(n.y, { arrow: 'horizontal' }, '选择'),
                ),
              ),
              l.a.createElement(
                n.t,
                {
                  name: 'field_5',
                  rules: [{ required: !1, message: '请填写[数字]字段' }],
                },
                l.a.createElement(
                  n.w,
                  {
                    extra: '元',
                    placeholder: '请输入',
                    alignRight: !0,
                    type: 'number',
                  },
                  '数字',
                ),
              ),
            ),
            l.a.createElement(
              n.x,
              {
                renderHeader: function e() {
                  return '禁用字段';
                },
              },
              l.a.createElement(
                n.w,
                { value: '不可编辑', readOnly: !0 },
                '只读',
              ),
              l.a.createElement(
                n.w,
                { value: '不可编辑', disabled: !0 },
                '禁用',
              ),
            ),
            l.a.createElement(
              n.e,
              { top: 5, blank: 1 },
              l.a.createElement(
                n.r,
                null,
                l.a.createElement(
                  n.g,
                  { fullWidth: !0, size: 'large', onClick: r },
                  '重置',
                ),
                l.a.createElement(
                  n.g,
                  {
                    fullWidth: !0,
                    size: 'large',
                    color: 'primary',
                    type: 'submit',
                  },
                  '提交',
                ),
              ),
            ),
          ),
        );
      }
    },
  },
]);
