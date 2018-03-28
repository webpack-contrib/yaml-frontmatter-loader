const loader = require('../');

const fixtures = [
  {
    should: 'parse strings',
    source: `---
title: test
---`,
    expect: {
      attributes: {
        title: 'test',
      },
      body: '',
      frontmatter: 'title: test',
    },
  },
  {
    should: 'parse arrays',
    source: `---
tags: [webpack, yaml]
---`,
    expect: {
      attributes: {
        tags: ['webpack', 'yaml'],
      },
      body: '',
      frontmatter: 'tags: [webpack, yaml]',
    },
  },
];

describe('Loader', () => {
  for (const fixture of fixtures) {
    test(`should${fixture.should}`, () => {
      const result = loader.bind({}, fixture.source);
      expect(result()).toEqual(JSON.stringify(fixture.expect));
    });
  }
});
