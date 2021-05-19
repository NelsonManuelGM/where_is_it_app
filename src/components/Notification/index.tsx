import { memo, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 500;
  bottom: 40px;
  left: 50px;
  border-radius: 0;
`;

const Notification = (props: any) => {

  const notificationContainer: HTMLElement = document.getElementById('app-notification')!

  const content = useMemo(() => <Wrapper> {props.children} </Wrapper>, [props.children])

  return notificationContainer ? ReactDOM.createPortal(
    content,
    notificationContainer
  ) : null;
}

export default memo(Notification)