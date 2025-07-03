import { Stack } from '@mui/material';



export default function SocialMedia() {
    return (
      <div>
        <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end", alignItems: "center"}}>
            <div>
                <img alt="Github" src="app\resources\github.png" width={25} height={25}/> 
            </div>
            <div>
                <img alt="linkeIn" src="app\resources\linkedin.png" width={30} height={30}/> 
            </div>
        </Stack>
      </div>
    );
}
