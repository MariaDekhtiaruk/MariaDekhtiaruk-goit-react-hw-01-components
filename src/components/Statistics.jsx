import {
  StatisticWrap,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
const randomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticWrap>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id} style={{ background: randomColor() }}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticWrap>
  );
};
