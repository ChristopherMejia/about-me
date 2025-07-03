import TabInfo from './tab_info';
import OwnerName from './owner_name';
import SocialMedia from './social_media';
import type { IAppProps } from '~/interfaces/IHeader';

import {Box, Grid } from '@mui/material';


export default function Header({setActive, isActive}:IAppProps){
    return (
      <header>
            <Box>
               <Grid container spacing={2}>
                <Grid size={4}>
                  <OwnerName/>
                </Grid>
                <Grid size={4} sx={{ display: 'flex', justifyContent: 'center'}}>
                  <TabInfo setActive={setActive} isActive={isActive}/>
                </Grid>
                <Grid size={4}>
                   <SocialMedia/>
                </Grid>
               </Grid>
            </Box>
        </header>
    );
}

