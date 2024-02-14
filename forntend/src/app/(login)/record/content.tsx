'use client';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export function NewsListCard(props: Props) {
//   return (
//     <Card>
//       <CardActionArea
//         onClick={() => {
//           window.location.href = props.news.newsUrl;
//         }}
//       >
//         <Stack direction="row">
//           <CardMedia
//             component="img"
//             sx={{ width: '100px' }}
//             src={props.news.imageUrl || '/NoImage.jpg'}
//           />
//           <Stack p="10px">
//             <Typography fontSize="14px">{props.news.title}</Typography>
//           </Stack>
//         </Stack>
//       </CardActionArea>
//     </Card>
//   );
// }

// export function RecordPageContent(props: Props) {
//   const [swiper, setSwiper] = useState<SwiperType>();
//   const [value, setValue] = useState(0);

//   const onSlideChangeHandler = (index: number) => {
//     setValue(index);
//   };

//   const onTabChange = (_: any, newValue: any) => {
//     setValue(newValue);
//     swiper?.slideTo(newValue);
//   };

//   return (
//     <>
//       <Stack bgcolor="#CDE8E1">
//         {/* タブ */}
//         <Box sx={{ width: '100%', bgcolor: 'white' }}>
//           <Tabs value={value} onChange={onTabChange} variant="scrollable">
//             {props.companyList.map((elm, i) => (
//               <Tab
//                 label={
//                   <Typography fontSize="14px" noWrap width="100px">
//                     {elm}
//                   </Typography>
//                 }
//                 sx={{ width: '100px' }}
//                 value={i}
//                 key={elm}
//               />
//             ))}
//           </Tabs>
//         </Box>

//         {/* コンテンツ */}
//         <Stack p="20px">
//           <Swiper
//             spaceBetween={50}
//             slidesPerView={1}
//             onSlideChange={(index) => onSlideChangeHandler(index.activeIndex)}
//             onSwiper={(swiper) => {
//               const swiperInstance = swiper;
//               setSwiper(swiperInstance);
//             }}
//             style={{ width: '100%' }}
//           >
//             {props.companyList.map((elm, i) => (
//               <SwiperSlide key={elm}>
//                 <Stack width="100%">
//                   <RecordList recordList={props.recordList[i]} />
//                 </Stack>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Stack>
//       </Stack>
//     </>
//   );
// }