import { RecordList } from '@/component/records/RecordList';
import { Record } from '@/model/record';
import { Divider, Stack, Typography } from '@mui/material';

export default function SchedulePage() {
  const today = new Date();
  const sampleSchedules: Record[] = [
    {
      title: '予定の内容',
      startDate: 100,
      endDate: 200,
    },
    {
      title: '予定の内容',
      startDate: 300,
      endDate: undefined,
    },
    {
      title: 'ながーーーーーーーーーーーーーい予定の内容',
      startDate: undefined,
      endDate: undefined,
    },
  ];

  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize="28px">記録</Typography>

        <Typography fontSize="24px">記録一覧</Typography>
        {/* <RecordList schedules={sampleSchedules} /> */}
        <Divider sx={{ width: '100%', borderBottomWidth: 2, mx: 'auto' }} />
      </Stack>
    </>
  );
}