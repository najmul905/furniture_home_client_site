import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const SkeletonUI = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mx-12'>
            <div className='border rounded'>
             <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={275} height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton  variant="rounded"  width={70} height={40} />
    </Stack>
        </div>
            <div className='border rounded'>
             <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={275} height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton  variant="rounded"  width={70} height={40} />
    </Stack>
        </div>
            <div className='border rounded'>
             <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={275} height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton  variant="rounded"  width={70} height={40} />
    </Stack>
        </div>
            <div className='border rounded'>
             <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rounded" width={275} height={200} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton  variant="rounded"  width={70} height={40} />
    </Stack>
        </div>
        </div>
    );
};

export default SkeletonUI;