import { DataCard, DataCardList, Divider, PageHeader, Subtitle } from '../../components'

const ElementPage = () => {
  return (
    <>
      <PageHeader title="Elements" />
      <Divider />
      <DataCardList>
        <DataCard
          onCreate={() => {
            console.log('clicked')
          }}
          title="Create New Element"
        />
        <DataCard>
          <Subtitle>Element 1</Subtitle>
          <Divider />
        </DataCard>
        <DataCard>
          <Subtitle>Element 2</Subtitle>
          <Divider />
        </DataCard>
      </DataCardList>
    </>
  )
}

export default ElementPage
