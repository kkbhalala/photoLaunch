import styled  from 'styled-components';

export const SidebarContainer = styled.div`
    height: 100vh;
    width: 25%;
    background-color: rgb(107, 0, 155);
    padding: 40px 20px;

    a {
        display: block;
        font-size: 24px;
        margin-bottom: 15px;
        color: #fff;
        padding: 8px 15px;
        position: relative;

        &.active{
            background: rgb(147 12 208);

            &:before{
                content: '';
                position: absolute;
                height: 100%;
                width: 5px;
                top: 0;
                left: 0;
                background: #fff;
            }
        }
    }
`;