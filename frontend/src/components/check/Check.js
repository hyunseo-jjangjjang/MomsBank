import react, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeposits } from '../../modules/deposit';

import styled from 'styled-components'
import Title from '../Title';
import CheckBoxDiv from './CheckBoxDiv';
import PrevButton from '../PrevButton';

const Check = ({history}) => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.deposits);
    
    useEffect(()=>{
        dispatch(getDeposits());
    }, []);

    const GoHome = () => {
        history.push('/');
    }

    return (
        <div>
            <PrevButton onClick={GoHome} />
            <Title explan="조회"/>
            <MiddleText>남은 상환 개수</MiddleText>
            <RemainText>{data.length}개</RemainText>
            {data.map(deposit => <CheckBoxDiv key={deposit.id}deposit={deposit}/>)}
        </div>
    )
};

const MiddleText = styled.p`
    position: relative;
    width: 156px;
    height: 35px;
    left: 111px;
    top: 107px;
    margin-top: 0px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 35px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #2F69FF;
`;

const RemainText = styled.p`
    position: relative;
    width: 46px;
    height: 35px;
    left: 166px;
    top: 80px;
    margin-top:0px;
    margin-bottom: 95px;

    font-family: Spoqa Han Sans Neo;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #112364;
`;
export default Check;