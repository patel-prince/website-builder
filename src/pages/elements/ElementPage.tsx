import {
  DataCard,
  DataCardList,
  Divider,
  Drawer,
  PageHeader,
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
        <Drawer title="Create New Element" open={isOpen} onClose={close} />
      </DataCardList>
    </>
  )
}

export default ElementPage
