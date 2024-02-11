import React from 'react'
import { Select,Typography,Row,Col,Avatar,Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text, Title} = Typography;
const {Option} = Select;

const News = ({simpified}) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simpified?10:100})
  console.log(cryptoNews);
  return (
    <div>News</div>
  )
}

export default News