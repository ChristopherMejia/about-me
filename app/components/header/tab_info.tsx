import type { IAppProps } from '~/interfaces/IHeader';

import {Tabs, Tab, Box} from '@mui/material';


export default function TabInfo({setActive, isActive}:IAppProps) {
    
    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setActive(value)
    }
    
    return (
        <div className="bg-gray-100/10 rounded-lg w-1/2 flex justify-center">
            <Tabs value={isActive} onChange={handleChange} aria-label="tabs">
                <Tab sx={{ color: 'white'}} label="About Me"/>
                <Tab sx={{ color: 'white'}} label="Experience"/>
            </Tabs>
        </div>
    );
}
