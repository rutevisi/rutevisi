import Styled from '@emotion/styled'
import { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { testEnd } from '../../redux/actions/testAction'

function TestFooter({testEnd, answers, answered, soalIndex, setIndexNow, total}){

    function doNext(){
            soalIndex < total-1 ? setIndexNow(soalIndex+1) : testEnd({result: null})
    }

    function allAnswered(){
        return answers.length === answered.length
    }
    
    return(
        <FooterStyled>
            <button className="btn" onClick={() =>{ allAnswered() ? testEnd({result: null}) : doNext()}}>{ allAnswered() ? "SELESAI" : "SELANJUTNYA"}</button>
        </FooterStyled>
    )
}

const FooterStyled = Styled.div`
    display:flex;
    justify-content:center;

    .btn{
        text-decoration: none;
        background-color: #FFCB11;
        border: none;
        border-radius: 32px;
        margin-left: 10px;
        font-weight: 600;
        font-family: 'Montserrat',sans-serif;
        color: white;
        padding: 8px 20px 8px 20px;
    }
`

const mapDispatchToProps = (dispatch) => {
    return {
        testEnd: bindActionCreators(testEnd, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(TestFooter)