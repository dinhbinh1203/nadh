import { Card, Row, Col, Button, Form } from 'antd';
import { TableAcademic } from '../Table/TableAcademic';
import { TableCertificate } from '../Table/TableCertificate';

export const CardEducationAndCertificate = ({ setCurrentStep }) => {
  const handleNextStep = () => {
    setCurrentStep(3);
    window.localStorage.setItem('currentStep', 3);
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
    window.localStorage.setItem('currentStep', 1);
  };

  return (
    <Card
      title="EDUCATION AND CERTIFICATE"
      bordered={false}
      style={{
        width: '100%',
      }}
    >
      <TableAcademic />
      <TableCertificate />
      <Row gutter={(12, 12)}>
        <Col span={24} style={{ textAlign: 'right', marginTop: '10px' }}>
          <Button style={{ marginRight: '10px' }} onClick={handlePreviousStep}>
            Previous
          </Button>
          <Button type="primary" onClick={handleNextStep}>
            Next
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
// ACADEMIC