import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from 'app/shared/error/error-boundary';

export const ErrorBoundaryRoute = ({
  component: Component,
  ...restProps
}: RouteProps) => {
  const encloseInErrorBoundary = props => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
  return <Route {...restProps} render={encloseInErrorBoundary} />;
};

export default ErrorBoundaryRoute;
