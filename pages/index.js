import React, { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import Tools from '../components/Tools'
import KodeKelasBox from '../components/KodeKelasBox'
import ForHRD from '../components/ForHRD'
import Jumbotron from '../components/Jumbotron'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Etalase from '../components/Etalase'

function Index({tests}){
    const [listUjian, setListUjian] = useState();
    const [ keyword, setKeyword ] = useState();

    useEffect(() => {
        axios.get('/api/tes').then(res => {
            if(res.data){
                setListUjian(res.data)
            }
        }).catch(err => console.log(err))
    }, [])

    return(
        <StyledIndex>
            <Head>
                <title>Rutevisi.com - Pelajari Karakteristikmu Lebih Dalam</title>
            </Head>
            <div>
                <LayoutFull>
                    <Jumbotron />
                    <div className="index-maincontent">
                      
                        <div className="etalase-tool">
                            <Tools setKeyword={setKeyword}/>
                            <Etalase testlist={listUjian} keyword={keyword}/>
                        </div>
                        <div className="maincontent-side">
                            <Link href="/bantuan">
                                <button className="btn-filter btn-tools">
                                    <p>Bantuan</p>
                                    <img src='/img/tools/bantuan.svg' alt="" className="img-filter"/>
                                </button>
                            </Link>
                            <KodeKelasBox />
                            <ForHRD />
                        </div>
                    </div>
                </LayoutFull>   
            </div>
        </StyledIndex>
    )
}

const StyledIndex = Styled.div` 
.index-maincontent{
    padding: 12px 48px 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 600px;
}
.maincontent-side{
    width: 294px;
}
.btn-bantuan{
    width: 92px;
    height: 40px;
    border: solid 0.5px white;
}
.btn-tools{
    font-family:'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #969696;
    
    height: 40px;
    border: none;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
}
.btn-tools img{
    margin-left: 10px;
}
`

export default Index;