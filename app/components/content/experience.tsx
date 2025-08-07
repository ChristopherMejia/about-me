import { Card, CardContent, Grid, Typography, Avatar } from '@mui/material';
import * as React from 'react';

export interface IAppProps {
}

export default function Experience() {
    return (
      <div className="mt-12">
      <Grid container spacing={12}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: "center", color: "Black"}}>Frontend</Typography>
                <div className="flex flex-row items-center m-2">
                  <Avatar alt="React" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ color: 'text.primary', marginLeft: '10px' }}>React.Js</Typography>
                </div>
                <div className="flex flex-row items-center m-2">
                  <Avatar alt="React" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ color: 'text.primary', marginLeft: '10px' }}>Angular.Js</Typography>
                </div>
                <div className="flex flex-row items-center m-2">
                  <Avatar alt="React" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ color: 'text.primary', marginLeft: '10px' }}>Maui .Net</Typography>
                </div>
                <div className="flex flex-row items-center m-2">
                  <Avatar alt="React" src="/static/images/avatar/1.jpg" />
                  <Typography sx={{ color: 'text.primary', marginLeft: '10px' }}>WPF .Net</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{backgroundColor: "grey"}}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: "center", color: "white"}}>Backend</Typography>
                <Typography sx={{ color: 'text.primary' }}>.Net - C#</Typography>
                <Typography sx={{ color: 'text.primary' }}>Node.Js</Typography>
                <Typography sx={{ color: 'text.primary' }}>PHP</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Card sx={{backgroundColor: "grey"}}>
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: "center", color: "white"}}>DevOps</Typography>
                <Typography sx={{ color: 'text.primary' }}>Git</Typography>
                <Typography sx={{ color: 'text.primary' }}>Docker</Typography>
                <Typography sx={{ color: 'text.primary' }}>Jenkins</Typography>
                <Typography sx={{ color: 'text.primary' }}>Kubernetes</Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      </div>

    );
}
