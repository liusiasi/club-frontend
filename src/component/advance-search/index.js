import React, {
  memo,
  useEffect
} from 'react'

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

import { Input, Button, DatePicker, Select } from 'antd';
import {
  ORGANIZATION_TOPIC,
  ACTIVITY_TOPIC,
  LITERATURE_TOPIC,
  HISTORICALINDEX_TOPIC,
  JOURNAL_TOPIC,
  IMAGE_TOPIC,
  VIDEO_TOPIC,
  PEOPLE_TOPIC
} from 'util/constants'
import moment from 'moment'
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;


const OrgnizationSearch = memo(function Search(props) {
  const { handleFormReset, name, creator, place, startTime,endTime, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="社团名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="发起人">
          {getFieldDecorator('creator', {
            initialValue: creator
          })(
            <Input placeholder="请输入发起人" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="创办地点">
          {getFieldDecorator('place', {
            initialValue: place
          })(
            <Input placeholder="请输入创办地点" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="创办时间">
          {getFieldDecorator('time', {
            initialValue:  [startTime?moment(startTime):undefined,endTime?moment(endTime):undefined]
          })(
            <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: 260 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" onClick={onSearch}>搜索</Button>
          <Button style={{ marginLeft: 8 , marginTop: 4}} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const ActivitySearch = memo(function Search(props) {
  const { handleFormReset, name, type, place, startTime,endTime, organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="活动名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入活动名称名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="活动类型">
          {getFieldDecorator('type', {
            initialValue: type !== undefined ? parseInt(type) : undefined
          })(
            <Select style={{ width: 160 }} >
              <Option value={1}>学术活动</Option>
              <Option value={2}>科普活动</Option>
              <Option value={3}>实业活动</Option>
              <Option value={4}>其他活动</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="活动地点">
          {getFieldDecorator('place', {
            initialValue: place
          })(
            <Input placeholder="请输入活动地点" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="活动时间">
          {getFieldDecorator('time', {
            initialValue:  [startTime?moment(startTime):undefined,endTime?moment(endTime):undefined]
          })(
            <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: 220 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const LiteratureSearch = memo(function Search(props) {
  const { handleFormReset, name, type, startTime,endTime,  organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="文献名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入文献名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="文献类型">
          {getFieldDecorator('type', {
            initialValue: type !== undefined ? parseInt(type) : undefined
          })(
            <Select style={{ width: 160 }} >
              <Option value={1}>原始文献</Option>
              <Option value={2}>研究文献</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="文献日期">
          {getFieldDecorator('time', {
            initialValue:  [startTime?moment(startTime):undefined,endTime?moment(endTime):undefined]
          })(
            <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: 260 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const HistoricalSearch = memo(function Search(props) {
  const { handleFormReset, name, startTime,endTime,  organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="史料名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入史料名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="史料日期">
          {getFieldDecorator('time', {
            initialValue:  [startTime?moment(startTime):undefined,endTime?moment(endTime):undefined]
          })(
            <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: 260 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const JournalSearch = memo(function Search(props) {
  const { handleFormReset, name, startTime,endTime,  organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="期刊名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入期刊名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="创刊日期">
          {getFieldDecorator('time', {
            initialValue:  [startTime?moment(startTime):undefined,endTime?moment(endTime):undefined]
          })(
            <RangePicker placeholder={["开始日期", "结束日期"]} style={{ width: 260 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const ImageSearch = memo(function Search(props) {
  const { handleFormReset, name, peopleName, organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="图片名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入图片名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="人物名称">
          {getFieldDecorator('peopleName', {
            initialValue: peopleName
          })(
            <Input placeholder="请输入相关人物名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const VideoSearch = memo(function Search(props) {
  const { handleFormReset, name, peopleName,  organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="视频名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入视频名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="人物名称">
          {getFieldDecorator('peopleName', {
            initialValue: peopleName
          })(
            <Input placeholder="请输入相关人物名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const PeopleSearch = memo(function Search(props) {
  const { handleFormReset, name, organizationName, onSearch, FormReset } = props;
  const { getFieldDecorator } = props.form;
  useEffect(() => {
    return () => {
      FormReset();
    }
  }, [])
  return (
    <div>
      <Form onSubmit={onSearch} layout="inline">
        <FormItem label="人物名称">
          {getFieldDecorator('name', {
            initialValue: name
          })(
            <Input placeholder="请输入人物名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <FormItem label="社团名称">
          {getFieldDecorator('organizationName', {
            initialValue: organizationName
          })(
            <Input placeholder="请输入所属社团名称" style={{ width: 160 }} />
          )}
        </FormItem>
        <span>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleFormReset}>重置</Button>
        </span>
      </Form>
    </div>
  )
})

const themeSearch = {
  [ORGANIZATION_TOPIC]: OrgnizationSearch,
  [ACTIVITY_TOPIC]: ActivitySearch,
  [LITERATURE_TOPIC]: LiteratureSearch,
  [HISTORICALINDEX_TOPIC]: HistoricalSearch,
  [JOURNAL_TOPIC]: JournalSearch,
  [IMAGE_TOPIC]: ImageSearch,
  [VIDEO_TOPIC]: VideoSearch,
  [PEOPLE_TOPIC]: PeopleSearch,
}



const AdvanceSearch = memo(function Search(props) {
  const { handleSearch, theme } = props;
  const handleFormReset = () => {
    const { form } = props;
    const values = form.getFieldsValue();
    Object.keys(values).map(key => values[key] = undefined)
    values.startTime = undefined;
    values.endTime = undefined;
    form.setFieldsValue(values);
    handleSearch(values);
  }
  const FormReset = () => {
    const { form } = props;
    const values = form.getFieldsValue();
    Object.keys(values).map(key => values[key] = undefined)
    values.startTime = undefined;
    values.endTime = undefined;
    form.setFieldsValue(values);
  }

  const onSearch = (e) => {
    e.preventDefault();
    const { form } = props;
    const values = form.getFieldsValue();
    if (values.time !== undefined && values.time.length && values.time[0]) {
      if (theme === ORGANIZATION_TOPIC) {   
        let startTime = values.time[0].toISOString().slice(0, 10);
        let endTime = values.time[1].toISOString().slice(0, 10);
        values.startTime = startTime;
        values.endTime = endTime;
      } else {
        let startTime = values.time[0].toISOString().slice(0, 10);
        let endTime = values.time[1].toISOString().slice(0, 10);
        // startTime = moment(startTime).format('YYYY-MM-DD');
        // endTime = moment(endTime).format('YYYY-MM-DD');
        values.startTime = startTime;
        values.endTime = endTime;
      }
    }
    delete values.time;
    handleSearch(values);
  }
  const SearchModule = themeSearch[theme];
  return (
    <div>
      <SearchModule {...props} handleFormReset={handleFormReset} onSearch={onSearch} FormReset={FormReset} />
    </div>
  )
})

export default Form.create()(AdvanceSearch);

