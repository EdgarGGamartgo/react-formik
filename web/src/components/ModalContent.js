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
import { useFormik } from 'formik'



const validate = values => {
        const errors = {}

        if (!values.movieId) {
                errors.movieId = 'Required'
        }

        if (!values.releaseDate) {
                errors.releaseDate = 'Required'
        }

        if (!values.title) {
                errors.title = 'Required'
        }

        if (!values.url) {
                errors.url = 'Required'
        }

        if (!values.genre || values.genre === 'DEFAULT') {
                errors.genre = 'Required'
        }

        if (!values.overview) {
                errors.overview = 'Required'
        }

        if (!values.runtime) {
                errors.runtime = 'Required'
        }

        return errors
}


export const ModalContent = ({ toggleModal, modalType, handleSubmit, currentMovie }) => {

        const initialValues = {
                movieId: currentMovie ? currentMovie.movieId : '',
                title: currentMovie ? currentMovie.title : '',
                releaseDate: currentMovie ? currentMovie.releaseDate : '',
                url: currentMovie ? currentMovie.url : '',
                genre: currentMovie ? currentMovie.genre : '',
                overview: currentMovie ? currentMovie.overview : '',
                runtime: currentMovie ? currentMovie.runtime : ''
        }

        const formik = useFormik({
                initialValues,
                validate,
        })


        console.log(formik)
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
                                                                <Input id="movieId" name="movieId"  value={formik.values.movieId} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Movie ID here" />
                                                        </ThemeProvider>
                                                        {formik.touched.movieId && formik.errors.movieId ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.movieId}</div>
                                                        ) : null}
                                                        </>
                                                        
                                                : null
                                }
                                {modalType === 'ADD' || modalType === 'EDIT'
                                        ? <><ThemeProvider theme={ModalInputTitle}>
                                                <Paragraph>TITLE</Paragraph>
                                        </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="title" id="title" value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Title here" />
                                                </ThemeProvider>
                                                {formik.touched.title && formik.errors.title ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.title}</div>
                                                ) : null}
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>RELEASE DATE</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input id="releaseDate" name="releaseDate"  value={formik.values.releaseDate} onBlur={formik.handleBlur} onChange={formik.handleChange} type="date" placeholder="Select Date" />
                                                </ThemeProvider>
                                                {formik.touched.releaseDate && formik.errors.releaseDate ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.releaseDate}</div>
                                                        ) : null}
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>MOVIE URL</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input id="url" name="url"  value={formik.values.url} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Movie URL here" />
                                                </ThemeProvider>
                                                {formik.touched.url && formik.errors.url ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.url}</div>
                                                        ) : null}
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>GENRE</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Select  id="genre" name='genre'  value={formik.values.genre} onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                                                <option value="DEFAULT">Genre here</option>
                                                                <option value="Action & Adventure">Action & Adventure</option>
                                                                <option value="Drama, Biography, Music">Drama, Biography, Music</option>
                                                                <option value="Oscar Winning Movie">Oscar Winning Movie</option>
                                                        </Select>
                                                </ThemeProvider>
                                                {formik.touched.genre && formik.errors.genre ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.genre}</div>
                                                        ) : null}
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>OVERVIEW</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input name="overview" id="overview"  value={formik.values.overview} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Overview here" />
                                                </ThemeProvider>
                                                {formik.touched.overview && formik.errors.overview ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.overview}</div>
                                                        ) : null}
                                                <ThemeProvider theme={ModalInputTitle}>
                                                        <Paragraph>RUNTIME</Paragraph>
                                                </ThemeProvider>
                                                <ThemeProvider theme={OtherInput}>
                                                        <Input id="runtime" name="runtime"  value={formik.values.runtime} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Runtime here" />
                                                </ThemeProvider>
                                                {formik.touched.runtime && formik.errors.runtime ? (
                                                        <div  style={{ color: 'red', marginLeft: '38px', marginTop: '10px' }}>{formik.errors.runtime}</div>
                                                        ) : null}
                                                </>
                                        : <ThemeProvider theme={ModalDeleteMsg}>
                                                <Paragraph>Are you sure you want to delete ths movie?</Paragraph>
                                        </ThemeProvider>
                                }
                                <ButtonsContainer>
                                        {modalType === 'ADD' || modalType === 'EDIT'
                                                ? <ResetButton>RESET</ResetButton>
                                                : null
                                        }
                                        <SubmitButton onClick={() => handleSubmit(modalType, formik.values)}>{modalType === 'ADD' ? 'SUBMIT' : modalType === 'EDIT' ? 'SAVE' : 'CONFIRM'}</SubmitButton>
                                </ButtonsContainer>
                        </ModalBodyContent>
                </ModalContainer>
        )
}