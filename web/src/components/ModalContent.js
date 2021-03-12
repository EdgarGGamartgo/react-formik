import React from 'react'
import { ModalContainer, ModalBodyContent, CloseButton } from './../styles'
import { ThemeProvider } from 'styled-components'
import {
        ParagraphTitle,
        Paragraph,
        ModalInputTitle,
        ButtonsContainer,
        OtherInput,
        SubmitButton,
        ResetButton,
        Input,
        Select,
        ModalDeleteMsg
} from './../styles'

export const ModalContent = ({ toggleModal, modalType, modalData, handleInput, handleSubmit }) => {

        return (
                <ModalContainer>
                        <ModalBodyContent>
                                <CloseButton onClick={toggleModal}>&times;</CloseButton>
                                <ThemeProvider theme={ParagraphTitle}>
                                        <Paragraph>{modalType === 'ADD' ? 'ADD MOVIE' : modalType === 'EDIT' ? 'EDIT MOVIE' : 'DELETE MOVIE'}</Paragraph>
                                </ThemeProvider>
                                {modalType === 'ADD'
                                        ? null
                                        : modalType === 'EDIT'
                                                ? <><ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>MOVIE ID</Paragraph>
                                                </ThemeProvider>
                                                        <ThemeProvider theme={OtherInput}>
                                                                <Input name="movieId" value={modalData.movieId} onChange={(e) => handleInput(e)} placeholder="Movie ID here" />
                                                        </ThemeProvider></>
                                                : null
                                }
                                {modalType === 'ADD' || modalType === 'EDIT'
                                        ? <><ThemeProvider theme={ModalInputTitle}>
                                                <Paragraph>TITLE</Paragraph>
                                        </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="title" value={modalData.title} onChange={(e) => handleInput(e)} placeholder="Title here" />
                                                </ThemeProvider>
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>RELEASE DATE</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="releaseDate" value={modalData.releaseDate} onChange={(e) => handleInput(e)} type="date" placeholder="Select Date" />
                                                </ThemeProvider>
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>MOVIE URL</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="url" value={modalData.url} onChange={(e) => handleInput(e)} placeholder="Movie URL here" />
                                                </ThemeProvider>
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>GENRE</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Select defaultValue={ modalData.genre === '' ? 'DEFAULT' : modalData.genre } name='genre' onChange={(e) => handleInput(e)}>
                                                                <option value="DEFAULT">Genre here</option>
                                                                <option value="Action & Adventure">Action & Adventure</option>
                                                                <option value="Drama, Biography, Music">Drama, Biography, Music</option>
                                                                <option value="Oscar Winning Movie">Oscar Winning Movie</option>
                                                        </Select>
                                                </ThemeProvider>
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>OVERVIEW</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="overview" value={modalData.overview} onChange={(e) => handleInput(e)} placeholder="Overview here" />
                                                </ThemeProvider>
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>RUNTIME</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="runtime" value={modalData.runtime} onChange={(e) => handleInput(e)} placeholder="Runtime here" />
                                                </ThemeProvider></>
                                        : <ThemeProvider theme={ModalDeleteMsg}>
                                                <Paragraph>Are you sure you want to delete ths movie?</Paragraph>
                                        </ThemeProvider>
                                }
                                <ButtonsContainer>
                                        {modalType === 'ADD' || modalType === 'EDIT'
                                                ? <ResetButton>RESET</ResetButton>
                                                : null
                                        }
                                        <SubmitButton onClick={() => handleSubmit(modalType)}>{modalType === 'ADD' ? 'SUBMIT' : modalType === 'EDIT' ? 'SAVE' : 'CONFIRM'}</SubmitButton>
                                </ButtonsContainer>
                        </ModalBodyContent>
                </ModalContainer>
        )
}