import '../src/index.css';
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

export const decorators = [
  withTests({
    results,
  }),
];
