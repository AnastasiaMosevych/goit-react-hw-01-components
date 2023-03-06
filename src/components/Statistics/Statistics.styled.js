import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 900; 
    color: gray;   
`;

export const StatList = styled.ul`
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #a0e7a0;
    width: 80px;
`;

export const Label = styled.span`
    font-size: 24px;
    padding-bottom: 10px;
`;

export const Percentage = styled.span`
    font-size: 32px;
    font-weight: 600;
`;
