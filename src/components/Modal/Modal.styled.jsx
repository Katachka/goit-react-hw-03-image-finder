import styled from '@emotion/styled';


export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-bg-color);
`;

export const ModalContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: auto;
    background-color: var(--main-bg-color);
    box-shadow: var(--box-shadow);
`;
