import styled, { css } from 'styled-components';
import type {} from 'styled-components/cssprop';

const StyledButton = (props: any) => {
  const Button = styled.a<{ primary: string }>`
    /* This renders the buttons above... Edit me! */
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: 2px solid black;
    ${(props) =>
      props.primary &&
      css`
        background: white;
        color: black;
        text-align: center;
      `};
  `;
  return (
    <div>
      <Button href="/" target="_blank" rel="noopener" primary="true">
        {props.name}
      </Button>
    </div>
  );
};

export default StyledButton;
