import React from 'react';
import * as M from './styles';
import MulaMensagem from '../../assets/images/MulaMensagem.png'
import Play from '../../assets/images/Play.png'


function Mensagem(){


    return(
        <M.GlobalContainer>

            <M.RowContainer>

                <M.ColumnContainer>

                    <M.Text>Vai mandar uma mensagem na live do GauGau?</M.Text>
                    <M.TextTitle>Teste sua mensagem aqui:</M.TextTitle>

                    <M.CardMensagem>
                        <M.ContainerInsideCard>
                            <M.TextoCard>Digite aqui sua mensagem:</M.TextoCard>
                            <M.InputMensagem></M.InputMensagem>
                        </M.ContainerInsideCard>

                        <M.ContainerInsideCard>
                            <M.TextoCard>Gênero</M.TextoCard>
                            <M.SelectGenero>
                                <option>Selecione</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </M.SelectGenero>
                            <M.ImgPlay src={Play}></M.ImgPlay>
                        </M.ContainerInsideCard>
                    </M.CardMensagem>

                </M.ColumnContainer>

                <M.ColumnContainer>
                    <M.ImgMula src={MulaMensagem}></M.ImgMula>
                </M.ColumnContainer>

            </M.RowContainer>

        </M.GlobalContainer>


    )


}

export default Mensagem;