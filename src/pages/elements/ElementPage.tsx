import { Field } from 'rc-field-form'
import Form from 'rc-field-form/es/Form'
import Input from 'rc-input'

import { elementCreated } from '../../app/features/elementsSlice'
import { useAppDispatch, useElementSelector } from '../../app/hooks'
import {
  Column,
  DataCard,
  DataCardList,
  Divider,
  Drawer,
  PageHeader,
  Row,
  Subtitle,
  useDrawer
} from '../../components'

const ElementPage = () => {
  const dispatch = useAppDispatch()
  const { elements } = useElementSelector()
  const { isOpen, close, open } = useDrawer()

  return (
    <>
      <PageHeader title="Elements" />
      <Divider />
      <DataCardList>
        <DataCard onCreate={open} title="Create New Element" />
        {elements.map(({ name, tagname }) => (
          <DataCard>
            <Subtitle>
              {name} - {tagname}
            </Subtitle>
            <Divider />
          </DataCard>
        ))}
      </DataCardList>
      <Drawer title="Create New Element" open={isOpen} onClose={close}>
        <Form
          onFinish={(data) => {
            dispatch(elementCreated(data))
            close()
          }}
        >
          <Row>
            <Column xs={6}>
              <Field name="name" rules={[{ required: true }]}>
                <Input placeholder="Element Name" />
              </Field>
            </Column>
            <Column xs={6}>
              <Field name="tagname" rules={[{ required: true }]}>
                <Input placeholder="Tag Name" />
              </Field>
            </Column>
            <button type="submit">Submit</button>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}

export default ElementPage
