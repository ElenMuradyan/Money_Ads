import React from 'react';
import { WrapperProps } from '../../../typescript/interfase/wrapperProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state-management/store';

import './index.css'

const LoadingWrapper: React.FC<WrapperProps> = ({children}) => {
    const { loading } = useSelector((store: RootState) => store.userProfileInformation)
    return(
        <>
        {
        loading ?         
        <div className='main_container'>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Loading</span>
            </div>
        </div> : children
        }
        </>
    )
}

export default LoadingWrapper;