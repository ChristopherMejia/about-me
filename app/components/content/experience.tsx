import { Grid } from '@mui/material';
import * as React from 'react';

export interface IAppProps {
}

export default function Experience() {
    return (
      <div className="mt-12">
      <Grid container spacing={12}>
          <Grid size={{ xs: 6, md: 4 }}>
            <div className="border-1 p-6">
                <h1 className="text-center">Frontend</h1>
                <ul className="list-disc list-inside [&_ul]:list-[revert]">
                  <li>React.Js</li>
                  <li>Angular.Js</li>
                  <li> .Net 
                    <ul className="ml-8">
                      <li>WPF</li>
                      <li>Maui</li>
                    </ul>
                  </li>
                </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <div className="border-1 p-6">
                <h1 className="text-center">Backend</h1>
                <ul className="list-disc list-inside">
                  <li>C#</li>
                  <li>Node.JS</li>
                  <li>PHP</li>
                </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <div className="border-1 p-6">
                <h1 className="text-center">DevOps</h1>
                <ul className="list-disc list-inside">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Jenkins</li>
                  <li>Kubernetes</li>
                </ul>
            </div>
          </Grid>
      </Grid>
      </div>

    );
}
