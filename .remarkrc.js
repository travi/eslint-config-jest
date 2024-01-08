// https://github.com/remarkjs/remark/tree/master/packages/remark-stringify#options
exports.settings = {
  listItemIndent: "one",
  emphasis: '_',
  strong: '_',
  bullet: '*',
  incrementListMarker: false
};

exports.plugins = [
  'remark-preset-lint-travi',
  ['remark-toc', {tight: true}],
  ['remark-usage', {heading: 'example'}]
];
