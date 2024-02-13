import { Stack, Divider } from '@mui/material';
import { Record } from '@/model/record';
import { RecordListItem } from '@/component/records/RecordListItem';

interface Props {
  records: Record[];
}

export function RecordList(props: Props) {
  var scheduleListItem = props.records.map((elm, i) => (
    <div key={'div_' + elm.title + elm.startDate}>
      <RecordListItem record={elm} key={'item_' + elm.title} />

      {i != props.records.length - 1 && (
        <Divider
          sx={{ width: '100%', borderBottomWidth: 1, mx: 'auto' }}
          key={'divider_' + elm.title}
        />
      )}
    </div>
  ));

  return (
    <>
      <Stack bgcolor="#DAE5E1" sx={{ borderRadius: '10px', boxShadow: 3 }} p="10px">
        {scheduleListItem}
      </Stack>
    </>
  );
}