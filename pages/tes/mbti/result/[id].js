import { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import Layout from '../../../../components/layouts/Layout'
import personalityType from '../../../../data/personalityType.json'
import axios from 'axios'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { wrapper } from '../../../../redux/store';

function ResultPage({result, currentUser}){
    const objectfication = JSON.parse(result.result)
    const realresult = objectfication.result

    let testa = Math.round(realresult.indicatorA);
    let testb = Math.round(realresult.indicatorB);
    let testc = Math.round(realresult.indicatorC);
    let testd = Math.round(realresult.indicatorD);
    let teste = Math.round(realresult.indicatorE);

    let radRight = '0rem 2rem 2rem 0rem';
    let radLeft = '2rem 0rem 0rem 2rem';
    let posRight = 'margin-left: auto;';
    let posLeft = 'margin-right: auto;';

    let introvert, extrovert, sensing, intutition, thinking, feeling, judging, perceiving, turbulent, assertive;
    let posa, posb, posc, posd, pose;
    let rada, radb, radc, radd, rade;
    let a, b, c, d, e;
    let [ zero, setZero ] = useState(true)

    let personality, fifthIndikator;

    //coba2 erbin
    personality = 
    getHuruf("A", testa) +
    getHuruf("B", testb) +
    getHuruf("C", testc) +
    getHuruf("D", testd);

    fifthIndikator = getHuruf("E", teste);

    function getHuruf( indikator, result){
        if(result>0){
            switch (indikator) {
                case "A":
                    return "I";
                case "B":
                    return "N";
                case "C":
                    return "F";
                case "D":
                    return "P";
                case "E":
                    return "A";
                default:
                    break;
            }
        }else{
            switch (indikator) {
                case "A":
                    return "E";
                case "B":
                    return "S";
                case "C":
                    return "T";
                case "D":
                    return "J";
                case "E":
                    return "T";
                default:
                    break;
            }
        }
    }
    

    // Extrovert vs Introvert Check
    if(testa > 0){
        a = testa;
        introvert = a;
        extrovert = 100 - a;
        posa = posRight;
        if(introvert === 100 || extrovert === 100){
            rada = '2rem';
        }else{
            rada = radRight;
        }
        var left1 = "toblack";
    }
    else if(testa < 0){
        a = 100 - (testa + 100)
        introvert = 100 - a;
        extrovert = a;
        posa = posLeft;
        if(introvert === 100 || extrovert === 100){
            rada = '2rem';
        }else{
            rada = radLeft;
        }
        var right1 = "toblack";
    }

    // Sensing vs Intutition Check
    if(testb > 0){
        b = testb;
        intutition = b;
        sensing = 100 - b;
        posb = posRight;
        if(intutition === 100 || sensing === 100){
            radb = '2rem';
        }else{
            radb = radRight;
        }
        var left2 = "toblack";   
    }
    else if(testb < 0){
        b = 100 - (testb + 100);
        intutition = 100 - b;
        sensing = b;
        posb = posLeft;
        if(intutition === 100 || sensing === 100){
            radb = '2rem';
        }else{
            radb = radLeft;
        }
        var right2 = "toblack";
    }

    // Thinking vs Feeling Check
    if(testc > 0){
        c = testc;
        feeling = c;
        thinking = 100 - c;
        posc = posRight;
        if(feeling === 100 || thinking === 100){
            radc = '2rem';
        }else{
            radc = radRight;
        }
        var left3 = "toblack";
    }
    else if(testc < 0){
        c = 100 - (testc + 100);
        feeling = 100 - c;
        thinking = c;
        posc = posLeft;
        if(feeling === 100 || thinking === 100){
            radc = '2rem';
        }else{
            radc = radLeft;
        }
        var right3 = "toblack";
    }

    // Judging vs Perceiving Check
    if(testd > 0){
        d = testd;
        perceiving = d;
        judging = 100 - d;
        posd = posRight;
        if(perceiving === 100 || judging === 100){
            radd = '2rem';
        }else{
            radd = radRight;
        }
        var left4 = "toblack";
    }
    else if(testd < 0){
        d = 100 - (testd + 100);
        perceiving = 100 - d;
        judging = d;
        posd = posLeft;
        if(perceiving === 100 || judging === 100){
            radd = '2rem';
        }else{
            radd = radLeft;
        }
        var right4 = "toblack";
    }

    // Turbulent vs Assertive Check
    if(teste > 0){
        e = teste;
        assertive = e;
        turbulent = 100 - e;
        pose = posRight;
        if(assertive === 100 || turbulent === 100){
            rade = '2rem';
        }else{
            rade = radRight;
        }
        var left5 = "toblack";
    }
    else if(teste < 0){
        e = 100 - (teste + 100);
        assertive = 100 - e;
        turbulent = e;
        pose = posLeft;
        if(assertive === 100 || turbulent === 100){
            rade = '2rem';
        }else{
            rade = radLeft;
        }
        var right5 = "toblack";
    }

    // Mengambil personality data
    let typeData = personalityType.find((data) => data.personality_type === personality)
    
    useEffect(() => {
        // Set state 'zero' untuk animasi chart
        setTimeout(() => {
            setZero(false)
        }, 200);
    }, [])
    
    return(
        <Layout>
            <Head>
                <title>Hasil - Myers-Brigs Test Indicator</title>
            </Head>
        <ResultPageStyled>
            <div className="page-header">
                <h1>{typeData.personality_name.split(":")[0] + "-" + fifthIndikator + " :" + typeData.personality_name.split(":")[1]}</h1>
                <p>{typeData.personality_desc}</p>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Ekstrovert</span>
                    <h2>Pemikiran</h2>
                    <span>Introvert</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{extrovert}%</div>
                    <p className={`p-englished ${left1}`}>EXTROVERT</p>
                    <InnerChart bgColor={'#ffcb11'} percent={a} setRadius={rada} pos={posa} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <p className={`p-englished2 ${right1}`}>INTROVERT</p>
                    <div className="percentage perc-right">{introvert}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Sensorik</span>
                    <h2>Energi</h2>
                    <span>Intuitif</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{sensing}%</div>
                    <p className={`p-englished ${left2}`}>SENSING</p>
                    <InnerChart bgColor={'#ffcb11'} percent={b} setRadius={radb} pos={posb} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <p className={`p-englished2 ${right2}`}>INTUITIVE</p>
                    <div className="percentage perc-right">{intutition}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Pemikir</span>
                    <h2>Sifat</h2>
                    <span>Perasa</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{thinking}%</div>
                    <p className={`p-englished ${left3}`}>THINKING</p>
                    <InnerChart bgColor={'#ffcb11'} percent={c} setRadius={radc} pos={posc} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <p className={`p-englished2 ${right3}`}>FEELING</p>
                    <div className="percentage perc-right">{feeling}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Penilai</span>
                    <h2>Tindakan</h2>
                    <span>Mempresepsikan</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{judging}%</div>                    
                    <p className={`p-englished ${left4}`}>JUDGING</p>
                    <InnerChart bgColor={'#ffcb11'} percent={d} setRadius={radd} pos={posd} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <p className={`p-englished2 ${right4}`}>PERCEIVING</p>
                    <div className="percentage perc-right">{perceiving}%</div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-head">
                    <span>Labil</span>
                    <h2>Kepribadian</h2>
                    <span>Tegas</span>
                </div>
                <div className="percentage-body">
                    <div className="percentage perc-left">{turbulent}%</div>
                    <p className={`p-englished ${left5}`}>TURBULENT</p>
                    <InnerChart bgColor={'#ffcb11'} percent={e} setRadius={rade} pos={pose} className={`${zero ? 'zero-width' : ''}`}></InnerChart>
                    <p className={`p-englished2 ${right5}`}>ASSERTIVE</p>
                    <div className="percentage perc-right">{assertive}%</div>
                </div>
            </div>
        </ResultPageStyled>
        </Layout>
    )
}

const InnerChart = Styled.div`
    height:100%;
    ${(props) => props.pos}
    width:0%;
    width:${(props) => props.percent}%;
    border-radius: ${(props) => props.setRadius};
    background-color:${(props) => props.bgColor};
    display:flex;
    align-items:center;
    transition: 1s;
`
const ResultPageStyled = Styled.div`
    padding-top:2.5rem;
    font-family:'Montserrat', sans-serif;
    padding-bottom:3rem;

    .form-message{
        background: #ffe2e6;
        padding: .3rem .5rem;
        border: 1px solid #ffa0a0;
        font-size: .9rem;
        text-align: center;
        color: red;
        border-radius: .3rem;
        margin-bottom:1.5rem;

        a{
            color:red;
        }
    }

    .btn{
        text-decoration: none;
        background-color: #FFCB11;
        border: none;
        border-radius: 32px;
        font-weight: 600;
        color: white;
        padding: 8px 20px 8px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        margin:0 auto;
    }
    button:disabled,button[disabled]{
        background: #eee;
        cursor: not-allowed !important;
        border: 1px solid #ddd;
        color: #777;
    }
    .toblack{
        color: gray !important;
    }
    .p-englished{
        position: absolute;
        text-decoration: none;
        font-size: 12px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        color : white;
        left: 50px;
        top: 0;
    }
    .p-englished2{
        position: absolute;
        text-decoration: none;
        font-size: 12px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        color : white;
        right: 50px;
        top: 0;
    }
    .zero-width{
        width:0% !important;
    }
    .page-header{
        padding: 0 48px;
        text-align: justify;
        line-height: 26px;
        margin-bottom: 3rem;

        h1{
            text-align:center;
        }
    }

    .percentage{
        background: #fff;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        font-size: .7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        position:absolute;
    }
    .perc-left{
        top: 4px;
        left: 5px;
    }
    .perc-right{
        top: 4px;
        right: 5px;
    }

    .chart{
        width: 50%;
        margin: 0 auto 2rem auto;

        .chart-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            position:relative;
            margin-bottom:1rem;

            h2{
                font-size:1.2rem;
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
            }
            span{
                font-size:.9rem;
            }
        }
        .percentage-body{
            height: 40px;
            width: 100%;
            background-color: #eee;
            border-radius: 20px;
            position:relative;
        }
    }
`

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, params}) => {
        const id = params.id
        const response = await axios.get(`${process.env.MAIN_URL}/api/tes/result/${id}`)

        return {
            props: {
                currentUser: store.getState().currentUser,
                result: response.data,
            },
        }
    }
);

export default connect(state => state)(ResultPage)