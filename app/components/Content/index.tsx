import React, { memo } from 'react';
import styled, { css } from 'styles/styled-components';

import { TestContent } from 'models';
import TextContent from 'components/TextContent';
import ImageContent from 'components/ImageContent';

const defaultWidth = 160;
const defaultHeight = 66;

interface WrapperProps {
  row: number;
  col: number;
}

const Wrapper = styled.div<WrapperProps>`
  overflow: auto;
  border-bottom: solid 1px #6d6d6d;
  border-right: solid 1px #6d6d6d;
  ${(props) =>
    css`
      width: ${defaultWidth * props.row}px;
      height: ${defaultHeight * props.col}px;
      grid-row-end: span ${props.col};
      grid-column-end: span ${props.row};
    `}
`;

const contentTypes = {
  image: 'image',
  text: 'text',
};

interface Props {
  content: TestContent;
  row: number;
  col: number;
}

function Content(props: Props) {
  const { content, row, col } = props;

  const contentType = content.contentType.toLowerCase();

  return (
    <Wrapper row={row} col={col}>
      {contentType === contentTypes.image ? (
        <ImageContent content={content} />
      ) : (
        <TextContent content={content} />
      )}
    </Wrapper>
  );
}

export default memo(Content);
