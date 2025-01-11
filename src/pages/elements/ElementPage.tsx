import Input from 'rc-input'

import {
  Column,
  DataCard,
  DataCardList,
  Divider,
  Drawer,
  Label,
  PageHeader,
  Row,
  Subtitle,
  useDrawer
} from '../../components'

const ElementPage = () => {
  const { isOpen, close, open } = useDrawer()
  return (
    <>
      <PageHeader title="Elements" />
      <Divider />
      <DataCardList>
        <DataCard onCreate={open} title="Create New Element" />
        <DataCard>
          <Subtitle>Element 1</Subtitle>
          <Divider />
        </DataCard>
        <DataCard>
          <Subtitle>Element 2</Subtitle>
          <Divider />
        </DataCard>
        <Drawer title="Create New Element" open={isOpen} onClose={close}>
          <Row>
            <Column xs={6}>
              <Label>Element Name</Label>
              <Input placeholder="Element Name" />
            </Column>
            <Column xs={6}>
              <Label>Element Name</Label>
              <Input placeholder="Element Name" />
            </Column>
          </Row>
        </Drawer>
      </DataCardList>
    </>
  )
}

export default ElementPage
