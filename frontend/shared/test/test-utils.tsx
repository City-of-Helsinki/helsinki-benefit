import { fireEvent, render, RenderResult } from '@testing-library/react';
import * as router from 'next/router';
import { NextRouter } from 'next/router';
import React from 'react';

export const arrowUpKeyPressHelper = (): boolean =>
  fireEvent.keyDown(document, { code: 38, key: 'ArrowUp' });

export const arrowDownKeyPressHelper = (): boolean =>
  fireEvent.keyDown(document, { code: 40, key: 'ArrowDown' });

export const enterKeyPressHelper = (): boolean =>
  fireEvent.keyDown(document, { code: 13, key: 'Enter' });

export const escKeyPressHelper = (): boolean =>
  fireEvent.keyDown(document, { code: 27, key: 'Escape' });

const Wrapper: React.FC = ({ children }) => <>{children}</>;

const customRender: CustomRender = (ui, { path = '/', query = {} } = {}) => {
  jest.spyOn(router, 'useRouter').mockReturnValue({
    query,
    pathname: path,
    asPath: path,
    route: '',
    basePath: path,
  } as NextRouter);

  const utils = render(ui, { wrapper: Wrapper });
  return { ...utils };
};

export type CustomRenderOptions = {
  path?: string;
  query?: Record<string, unknown>;
};

type CustomRender = {
  (ui: React.ReactElement, options?: CustomRenderOptions): CustomRenderResult;
};

type CustomRenderResult = RenderResult;

export { customRender as render };

// re-export everything
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
