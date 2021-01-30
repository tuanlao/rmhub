import React, { memo } from 'react';
import styled, { css } from 'styles/styled-components';

import { TestContent } from 'models';
import TextContent from 'components/TextContent';
import ImageContent from 'components/ImageContent';
import { CELL_HEIGHT, CELL_WIDTH, CONTENT_TYPES } from 'utils/contants';
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
      width: ${CELL_WIDTH * props.row}px;
      height: ${CELL_HEIGHT * props.col}px;
    `}
`;

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
      {contentType === CONTENT_TYPES.IMAGE ? (
        <ImageContent content={content} />
      ) : (
        <TextContent content={content} />
      )}
    </Wrapper>
  );
}

export default memo(Content);
