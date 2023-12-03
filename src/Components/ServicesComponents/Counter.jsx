import React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
import style from "../../CSS/Counter.module.scss"
import { Content } from 'antd/es/layout/layout';


const formatter = (value) => <CountUp end={value} separator="," />;

const Counter = () => (
  <Row gutter={16} id={style.Counter}>
    <Col span={5}>
      <Statistic title="Experience" value={38} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
    <Col span={5}>
      <Statistic title="Projects"  value={53243} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
    <Col span={5}>
      <Statistic title="Happy Cintes" value={53143} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
  </Row>
);

export default Counter;