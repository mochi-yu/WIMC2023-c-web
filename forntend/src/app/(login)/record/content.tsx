// 'use client';

// import { Record } from '@/model/record';
// import { Card, CardActionArea, CardMedia} from '@mui/material';
// import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper/types';
// import 'swiper/css';
// import { useState } from 'react';
// //import { RecordList } from '@/component/records/RecordListItem';

// interface Props {
  
//   companyList: string[];
//   recordList: Record[][];
// }

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