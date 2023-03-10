import { Steps, Row, Card, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CardFinish } from '../../components/Card/CardFinish';
import { CardFormPersonalInformationAdd } from '../../components/Card/CardFormPersonalInformationAdd';

const CandidateAdd = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div style={{ margin: '20px 30px' }}>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/candidates">Candidates List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>Create Candidate</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <div style={{ fontSize: '20px', fontWeight: '600', margin: '10px 0' }}>
        Create Candidate
      </div>
      <Row style={{ margin: '14px' }}>
        <Steps
          current={currentStep}
          items={[
            {
              title: 'Personal Information',
            },
            {
              title: 'Finish',
            },
          ]}
        />
      </Row>
      <Row style={{ width: '100%' }}>
        {Number(currentStep) === 0 && (
          <Card style={{ width: '100%' }}>
            <CardFormPersonalInformationAdd setCurrentStep={setCurrentStep} />
          </Card>
        )}
        {Number(currentStep) === 1 && (
          <CardFinish setCurrentStep={setCurrentStep} />
        )}
      </Row>
    </div>
  );
};
export default CandidateAdd;
