import React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';
import style from "../../CSS/Counter.module.scss"
import { Content } from 'antd/es/layout/layout';


const formatter = (value) => <CountUp end={value} separator="," />;

const Counter = () => (
  <Row id={style.Counter}>
    <Col className={style.Col} id={style.Col1} >
      <Statistic title="Experience" value={38} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
    <Col className={style.Col} id={style.Col2} >
      <Statistic title="Projects"  value={53243} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
    <Col className={style.Col} id={style.Col3} >
      <Statistic title="Happy Cintes" value={53143} precision={2} formatter={formatter} valueStyle={{fontSize:"60px",color:"gray"}} />
    </Col>
  </Row>
);

export default Counter;