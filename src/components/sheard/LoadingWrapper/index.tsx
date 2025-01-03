import React from 'react';
import { WrapperProps } from '../../../typescript/interfase/wrapperProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state-management/store';

import './index.css'
import { Flex } from 'antd';

const LoadingWrapper: React.FC<WrapperProps> = ({children}) => {
    const { loading } = useSelector((store: RootState) => store.userProfileInformation)
    return(
        <>
        {
        loading ?         
        <Flex align='center' justify='center' className='main_container'>
            <span className='loader'></span>
        </Flex> : children
        }
        </>
    )
}

export default LoadingWrapper;