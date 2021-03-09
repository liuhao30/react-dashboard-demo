import React from "react";
import { Row, Col, Card, Table } from "antd";
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Interaction,
  getTheme,
} from "bizcharts";

const data1 = [
  { name: "London", 月份: "Jan.", 月均降雨量: 18.9 },
  { name: "London", 月份: "Feb.", 月均降雨量: 28.8 },
  { name: "London", 月份: "Mar.", 月均降雨量: 39.3 },
  { name: "London", 月份: "Apr.", 月均降雨量: 81.4 },
  { name: "London", 月份: "May", 月均降雨量: 47 },
  { name: "London", 月份: "Jun.", 月均降雨量: 20.3 },
  { name: "London", 月份: "Jul.", 月均降雨量: 24 },
  { name: "London", 月份: "Aug.", 月均降雨量: 35.6 },
  { name: "Berlin", 月份: "Jan.", 月均降雨量: 12.4 },
  { name: "Berlin", 月份: "Feb.", 月均降雨量: 23.2 },
  { name: "Berlin", 月份: "Mar.", 月均降雨量: 34.5 },
  { name: "Berlin", 月份: "Apr.", 月均降雨量: 99.7 },
  { name: "Berlin", 月份: "May", 月均降雨量: 52.6 },
  { name: "Berlin", 月份: "Jun.", 月均降雨量: 35.5 },
  { name: "Berlin", 月份: "Jul.", 月均降雨量: 37.4 },
  { name: "Berlin", 月份: "Aug.", 月均降雨量: 42.4 },
];

const data2 = [
  { item: "事例一", count: 40, percent: 0.4 },
  { item: "事例二", count: 21, percent: 0.21 },
  { item: "事例三", count: 17, percent: 0.17 },
  { item: "事例四", count: 13, percent: 0.13 },
  { item: "事例五", count: 9, percent: 0.09 },
];

const cols = {
  percent: {
    formatter: (val) => {
      val = val * 100 + "%";
      return val;
    },
  },
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Chinese Score",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "Math Score",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "English Score",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Jim Green",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Joe Black",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Jim Red",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const Home = () => (
  <div >
    <Card style={{ marginBottom: 15 }}>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </Card>

    <Row gutter={10}>
      <Col span={12}>
        <Card title="折线图实例" bordered={false}>
          <Chart height={400} padding="auto" autoFit data={data1}>
            <Interval
              adjust={[
                {
                  type: "dodge",
                  marginRatio: 0,
                },
              ]}
              color="name"
              position="月份*月均降雨量"
            />
            <Tooltip />
          </Chart>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="饼状图实例" bordered={true}>
          <Chart height={400} data={data2} scale={cols} autoFit>
            <Coordinate type="theta" radius={0.75} />
            <Tooltip showTitle={true} />
            <Axis visible={false} />
            <Interval
              position="percent"
              adjust="stack"
              color="item"
              style={{
                lineWidth: 1,
                stroke: "#fff",
              }}
              label={[
                "count",
                {
                  content: (data) => {
                    return `${data.item}: ${data.percent * 100}%`;
                  },
                },
              ]}
              state={{
                selected: {
                  style: (t) => {
                    const res = getTheme().geometries.interval.rect.selected.style(
                      t
                    );
                    return { ...res, fill: "red" };
                  },
                },
              }}
            />
            <Interaction type="element-single-selected" />
          </Chart>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Home;
