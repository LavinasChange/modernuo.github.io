import styled from "styled-components"

export default styled.div`
  background: hsla(43, 71%, 73%, 1);
  box-shadow: 0px 1px 4px hsla(56, 90%, 70%, 0.1),
    0px 1px 10px hsla(56, 90%, 10%, 0.2), 0px -1px 4px hsla(56, 90%, 70%, 0.1),
    0px -1px 10px hsla(56, 90%, 10%, 0.2);
  border-bottom: 1px solid hsla(40, 37%, 47%, 1);
  display: flex;
  height: 1px;
  margin: 16px auto;
  ${props => (props.maxWidth ? `max-width:${props.maxWidth}px;` : "")}
  width: 100%;
`
