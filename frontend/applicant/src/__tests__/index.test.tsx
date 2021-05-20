import ApplicantIndex from 'applicant/pages/index';
import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'test-utils';

test('test for accessibility violations', async () => {
  const { container } = render(<ApplicantIndex />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
