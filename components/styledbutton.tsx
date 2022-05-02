import styled, { css } from 'styled-components';
import type {} from 'styled-components/cssprop';

const StyledButton = (props: any) => {
  const Button = styled.a<{ primary: string }>`
    /* This renders the buttons above... Edit me! */
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 1em;
    margin: 0.5rem 1rem;
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
      <Button href= {props.href}  rel="noopener" primary="true">
        {props.children}
      </Button>
    </div>
  );
};

export default StyledButton;
