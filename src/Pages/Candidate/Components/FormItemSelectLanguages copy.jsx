import React, { useEffect, useState } from 'react';
import { Form, Select, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';

const convertStringToArray = (string) => {
  let arr = string?.split(',')?.map(function (item) {
    return parseInt(item, 10);
  });
  return arr;
};

const { Option } = Select;
export const FormItemSelectLanguages = ({
  options,
  name,
  label,
  actionDispatch,
  id,
  detailCandidate,
  nameLocal,
  placeholder,
  dataDefault,
  form,
}) => {
  const dispatch = useDispatch();
  let defaultValue;

  const [listLanguages, setListLanguages] = useState(dataDefault);

  if (id) {
    defaultValue = dataDefault?.map((item) => item.key);
  }

  useEffect(() => {}, [listLanguages]);

  const handleChange = (value) => {
    const newDisabledItems = options.filter((option) => {
      return value.includes(option.key);
    });

    setListLanguages(newDisabledItems);

    const selectedLabels = [];
    options.forEach((option) => {
      if (value.includes(option.key)) {
        selectedLabels.push(option.label);
      }
    });
    const result = [];

    for (let i = 0; i < value.length; i++) {
      result.push({
        key: value[i],
        label: selectedLabels[i],
      });
    }

    if (!id) {
      dispatch(actionDispatch({ value: result, label: name }));
    } else {
      const newData = {
        id: id,
        params: {
          [`${name}`]: result,
        },
      };

      const newName = { [`${name}`]: result };
      const newDataInLocal = { ...detailCandidate, ...newName };
      window.localStorage.setItem(nameLocal, JSON.stringify(newDataInLocal));
      dispatch(actionDispatch(newData));
    }
  };

  const handleRemoveLanguage = (form, key) => {
    setListLanguages((data) => data.filter((item) => item.key !== key));
    const currentFormItemValue = form.getFieldValue('languages');
    if (currentFormItemValue === undefined) {
      const newFormItemValue = defaultValue.filter((value) => value !== key);
      form.setFieldValue('languages', newFormItemValue);
      const result = options.filter((item) =>
        newFormItemValue.includes(item.key),
      );
      const newResult = result?.map(({ key, label }) => ({ key, label }));
      const newName = { [`${name}`]: newResult };
      const newDataInLocal = { ...detailCandidate, ...newName };
      window.localStorage.setItem(nameLocal, JSON.stringify(newDataInLocal));
      const newData = {
        id: id,
        params: {
          [`${name}`]: newResult,
        },
      };
      dispatch(actionDispatch(newData));
    } else {
      const newFormItemValue = currentFormItemValue.filter(
        (value) => value !== key,
      );
      form.setFieldValue('languages', newFormItemValue);
      const result = options.filter((item) =>
        newFormItemValue.includes(item.key),
      );
      const newResult = result?.map(({ key, label }) => ({ key, label }));

      const newName = { [`${name}`]: newResult };
      const newDataInLocal = { ...detailCandidate, ...newName };
      window.localStorage.setItem(nameLocal, JSON.stringify(newDataInLocal));

      const newData = {
        id: id,
        params: {
          [`${name}`]: newResult,
        },
      };
      dispatch(actionDispatch(newData));
    }
  };

  return (
    <>
      <Form.Item name={name} label={label}>
        <Select
          tokenSeparators={[]}
          mode="multiple"
          showSearch
          style={{ width: '100%', borderRadius: '0px' }}
          optionFilterProp="children"
          onChange={handleChange}
          defaultValue={defaultValue}
          className="select_language"
        >
          {options?.map((option) => {
            const hasKeyOne = listLanguages?.find(
              (item) => item.key === option.key,
            );
            return (
              <Option
                key={option.key}
                value={option.key}
                label={option.label}
                disabled={hasKeyOne}
              >
                {option.label}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Row>
        <Col
          span={24}
          style={{
            fontSize: '16px',
            marginTop: '24px',
            marginLeft: '12px',
            marginBottom: '12px',
          }}
        >
          List of Languages
        </Col>
        {listLanguages?.map((item) => {
          return (
            <Col span={12} key={item.key}>
              {item.label}
              <AiOutlineDelete
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => handleRemoveLanguage(form, item.key)}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
