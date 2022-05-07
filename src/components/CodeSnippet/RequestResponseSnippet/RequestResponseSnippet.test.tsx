import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import RequestResponseSnippet, {RequestResponseSnippetProps} from '.';

const baseProps: RequestResponseSnippetProps = {
  code: `// Testing
  // LEAP is amazing
  console.log('LEAP is amazing');`,
};

const baseTestId = 'RequestResponseSnippet';
const headingTestId = 'RequestResponseSnippet__heading';

describe('RequestResponseSnippet', () => {
  it('renders without crashing', () => {
    render(<RequestResponseSnippet {...baseProps} />);

    expect(screen.getByTestId(baseTestId)).toBeTruthy();
  });

  it('renders with passed in className', () => {
    render(<RequestResponseSnippet {...baseProps} className="Test" heading="Test Heading" />);

    expect(screen.getByTestId(baseTestId).className).toContain('Test');
  });

  it('renders with code passed in and heading not present', () => {
    render(<RequestResponseSnippet {...baseProps} />);
    expect(screen.getByText('// Testing')).toBeTruthy();
    expect(screen.getByText('// LEAP is amazing')).toBeTruthy();
    expect(screen.getByText("console.log('LEAP is amazing');")).toBeTruthy();
    expect(screen.queryByTestId(headingTestId)).not.toBeTruthy();
  });

  it('renders with heading passed in', () => {
    render(<RequestResponseSnippet {...baseProps} heading="Test Heading" />);
    expect(screen.getByTestId(headingTestId)).toBeTruthy();
    expect(screen.getByText('Test Heading:')).toBeTruthy();
  });
});
