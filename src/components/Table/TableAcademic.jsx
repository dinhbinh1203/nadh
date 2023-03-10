import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { Table, Row, Col, Button, Modal, Form, Checkbox, Input } from 'antd';
import { useState, useEffect } from 'react';
import { ModalAddEducation } from '../Modal/ModalAddEducation';
import { FormEducation } from '../Form/FormEducation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDegree } from '../../store/degreeSlice';

export const TableAcademic = ({ data }) => {
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Current Schooly',
      dataIndex: 'status_current',
      render: (text) => {
        if (text === 1) {
          return <div>Is current school</div>;
        } else return null;
      },
    },
    {
      title: 'Start Year',
      dataIndex: 'start_time',
      render: (text) => {
        return <div>{text}</div>;
      },
    },

    {
      title: 'Graduation Year',
      dataIndex: 'end_time',
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: 'School',
      dataIndex: 'organization',
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: 'Major',
      dataIndex: 'title',
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record, index) => {
        return <BsPencil style={{ color: 'red', cursor: 'pointer' }} />;
      },
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);

  const degree = useSelector((state) => state.degree.data);

  useEffect(() => {
    dispatch(fetchDegree());
  }, []);

  return (
    <Row>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: '600' }}>ACADEMIC</div>
        <Button type="primary" ghost onClick={() => setModalOpen(true)}>
          Add Education
        </Button>
      </Col>
      <Col span={24}>
        <Table
          columns={columns}
          //   dataSource={data}
          pagination={{
            pageSize: 5,
          }}
        />
      </Col>
      <Modal centered open={modalOpen} closable={false} footer={null}>
        <Row style={{ textAlign: 'left', fontSize: '18px', fontWeight: '600' }}>
          Add Education
        </Row>
        <FormEducation setModalOpen={setModalOpen} degree={degree} />
      </Modal>
    </Row>
  );
};
