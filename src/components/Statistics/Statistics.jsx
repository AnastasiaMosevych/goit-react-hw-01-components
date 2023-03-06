import Proptypes from 'prop-types';
import { StatisticsSection, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

// TODO: create function for changing colors for li
export const Statistics = ({ statistics, title }) => {
    return (
        <StatisticsSection>
            <Title>{title}</Title>
            <StatList>
                {statistics.map(statistic => (
                    <Item key={statistic.id}>
                        <Label>{statistic.label}</Label>
                        <Percentage>{statistic.percentage}%</Percentage>
                    </Item>
                ))}
            </StatList>
        </StatisticsSection>)
};

Statistics.propTypes = {
    statistics: Proptypes.array.isRequired,
}