import React, {
  memo,
  useState,
  useRef
} from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Card, Upload, message, notification } from 'antd';
import MUtil from 'util/mm.js';
import {
  handleSuppelemnt,
} from './store/actionCreator';
import {
  bindActionCreators
} from 'redux'
import { connect } from 'react-redux';

const _mm = new MUtil();
const { TextArea } = Input;
const FormItem = Form.Item;

const Supplement = memo(function Supplement(props) {
  const [urlList, seturlList] = useState([]);
  const currentSuccess = useRef(props.success);
  const currentMsg = useRef(props.msg);


  currentSuccess.current = props.success;
  currentMsg.current = props.msg;
  const { getFieldDecorator } = props.form;
  const handleReturn = () => {
    props.history.goBack();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((error, values) => {
      if (!error) {
        let supplementFile = new Array();
        if (urlList.length) {
          for (var i = 0; i < urlList.length; i++) {
            supplementFile.push({
              url: urlList[i].url
            });
          }
        } else {
          message.error('请上传资料！');
          return;
        }
        delete values.upload;
        values.supplementFile = supplementFile;
        props.handleSuppelemnt(values).then(() => {
          if (currentSuccess.current) {
            const args = {
              message: '提交成功',
              description:
                '您的资料已经成功提交，非常感谢',
              duration: null,
              onClose: () => props.history.goBack(),
            };
            notification.success(args);
          } else {
            message.error(currentMsg.current);
          }
        })
      }
    });
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const handleFiles = (info) => {
    let fileList = info.fileList;
    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.obj[0];
      }
      return file;
    });

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response && typeof data == 'object') {
        if (file.response.success === false) {
          message.error(file.response.msg);
          return false;
        }
        return true;
      }
      return true;
    });

    seturlList(fileList);
  }
  const checkFilesNum = (file) => {
    return new Promise((resolve, reject) => {
      if (urlList.length === 3) {
        message.error("最多上传三个文件");
        reject(file);
      } else {
        resolve(file);
      }
    });

  }


  return (
    <Card title="社团资料补充" style={{
      width: 500,
      margin: '20px auto',
      paddingRight: 30
    }}>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <FormItem label="资料名称">
          {getFieldDecorator('supplementSummary', {
            rules: [{ required: true, message: '请输入资料名称' }],
          })(
            <Input placeholder="请输入资料名称" />
          )}
        </FormItem>
        <FormItem label="资料描述">
          {getFieldDecorator('supplementDescription', {
            rules: [{ required: true, message: '请输入资料描述' }]
          })(
            <TextArea rows={4} />
          )}
        </FormItem>
        <FormItem label="资料上传">
          {getFieldDecorator('upload')(
            <Upload
              name="files"
              action="/stapi/resource/file/upload"
              onChange={handleFiles}
              beforeUpload={checkFilesNum}
              fileList={urlList}
              headers={{ 'X-Requested-With': null }}
            >
              <Button type="primary">
                <UploadOutlined />请选择文件</Button>
            </Upload>

          )}
        </FormItem>
        <FormItem label="提交人姓名">
          {getFieldDecorator('contacts', {
            rules: [{ required: true, message: '请输入提交人姓名' }],
          })(
            <Input placeholder="请输入提交人姓名" />
          )}
        </FormItem>
        <FormItem label="提交人电话">
          {getFieldDecorator('contactsPhone', {
            rules: [{ required: true, message: '请输入提交人电话' }, { validator: _mm.isLastRule }],
          })(
            <Input placeholder="请输入提交人电话" />
          )}

        </FormItem>
        <FormItem  {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit"  >提交资料</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReturn}>返回</Button>

        </FormItem>
      </Form>
    </Card>
  );
})

const mapStateToProps = (state) => ({
  success: state.getIn(['supplement', 'actionres', 'success']),
  msg: state.getIn(['supplement', 'actionres', 'msg']),
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    handleSuppelemnt
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Supplement));
