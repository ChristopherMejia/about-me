import {Tabs, Tab, Box, Link, Button} from '@mui/material';
import { useState } from 'react';

export interface IAppProps {
  setActive : ( setActive: number) => void;
  isActive : number;

}

export default function TabInfo({setActive, isActive}:IAppProps) {
    
    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setActive(value)
    }
    
    return (
        <div className="bg-gray-100/10 rounded-lg w-1/2 flex justify-center">
            <Box>
            <Tabs value={isActive} onChange={handleChange} aria-label="tabs">
                <Tab sx={{ color: 'white'}} label="About Me"/>
                <Tab sx={{ color: 'white'}} label="Experience"/>
            </Tabs>
            </Box>
        </div>
    );
}
