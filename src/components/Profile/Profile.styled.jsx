import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 430px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 8px 8px;
`;

export const Description = styled.div`
    text-align: center;
    width: 400px;
`;

export const Avatar = styled.img`
    text-align: center;
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-bottom: 15px;
`;

export const UserName = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 700;
`;

export const TagAndLocation = styled.p`
    margin-top: 5px;    
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: normal;
    color: gray;
`;

export const Stats = styled.ul`
    margin: 0 auto;
    text-align: center;
    list-style: none;
    display: flex;
    justify-content: center;
    background-color: #F2F3F5;
    padding: 10px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;

export const Label = styled.span`
    font-size: 20px;
    color: 	#A9A9A9;
    margin-bottom: 4px;
`;

export const Quantity = styled.span`
    font-size: 24px;
    color: black;
    font-weight: 700;
`;