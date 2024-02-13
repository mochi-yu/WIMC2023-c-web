'use client';
import { Record } from '@/model/record'
import { Card, CardActionArea, CardMedia, Stack, Typography } from '@mui/material';

interface Props {
  record: Record;
}

export function RecordListItem(props: Props): React.ReactNode {
  const clickHandler = function () {
    console.log('clicked: ' + props.record.title);
  };

  const startDate = new Date(props.record.startDate!);
  const endDate = new Date(props.record.endDate!);

  return (
    <>
      <Card sx={{ bgcolor: 'rgba(0,0,0,0)', boxShadow: 0 }}>
        <CardActionArea onClick={clickHandler} sx={{ p: '10px' }}>
          <Typography noWrap fontSize="16px">
            {props.record.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            {(props.record.startDate || props.record.endDate) && (
              <>
                <Typography noWrap fontSize="14px">
                  {(startDate.toLocaleDateString() || '　') +
                    ' ～ ' +
                    (endDate.toLocaleDateString() || '')}
                </Typography>
              </>
            )}
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}