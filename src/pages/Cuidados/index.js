import React from 'react';
import * as C from './styles';
import MulaFeliz from '../../assets/images/MulaFeliz.png'


function Cuidados(){


    return(

        <C.GlobalContainer>
            <C.RowContainer>

                <C.ContainerMensagem>

                    <C.ContainerTitle>
                        <C.Title>Se cuide mula!</C.Title>
                    </C.ContainerTitle>

                    <C.CardMensagem>
                        <C.Text>Se você anda se sentindo frustrado, sem esperança ou sozinho. Procure ajuda! A melhor ajuda sempre será a de um profissional! Caso esteja em alguma situação extrema, ligue</C.Text>
                        <C.Text></C.Text>   
                        <C.Number>188</C.Number>
                        <C.Text>Para mais informações, acesse:</C.Text>
                        <C.Link href="https://www.cvv.org.br/ligue-188/" target="_blank" rel="noreferrer">https://www.cvv.org.br/ligue-188/</C.Link>
                    </C.CardMensagem>

                </C.ContainerMensagem>

                <C.ContainerImagem>
                    <C.Imagem src={MulaFeliz} alt="Mula feliz e dançando" width="100%"></C.Imagem>
                </C.ContainerImagem>

            </C.RowContainer>
        </C.GlobalContainer>


    )


}

export default Cuidados;