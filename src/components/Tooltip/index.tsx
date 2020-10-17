/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

interface TolltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TolltipProps> = ({
  title,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
