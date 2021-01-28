import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import styled, { css } from 'styles/styled-components';
import { TestContent } from 'models';

interface CustomTypographyProps {
  fontSize?: string;
  fontType: string;
}

const CustomTypography = styled(Typography)<CustomTypographyProps>`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.fontType === 'bold'
      ? css`
          font-size: ${props.fontSize} !important;
          font-weight: ${props.fontType} !important;
        `
      : css`
          font-size: ${props.fontSize} !important;
          font-style: ${props.fontType} !important;
        `}
`;

interface Props {
  content: TestContent;
}

function TextContent(props: Props) {
  const { content } = props;

  return (
    <CustomTypography
      fontSize={content.fontSize}
      fontType={content.fontType ? content.fontType.toLowerCase() : 'normal'}
    >
      {content.data}
    </CustomTypography>
  );
}

export default memo(TextContent);
