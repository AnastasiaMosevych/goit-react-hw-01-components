import styled from "@emotion/styled";

export const FriendListUl = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    margin-bottom: 20px;
    padding: 15px;
    width: 300px;
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
`;

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.type ? 'green' : 'red'};
    margin-right: 10px;
`;


export const Avatar = styled.img`
    width: 40px;
    height: 50px;
`;

export const Name = styled.p`
    font-size: 24px;
    margin-left: 10px;
`;