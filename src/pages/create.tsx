import React, { useState } from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'
import axios from 'axios'

const Draft: React.FC = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {   
            const data = { title, content }
            await axios({
                method: 'POST',
                url: '/api/post',
                data: data
            })
            await Router.push('/drafts')
        } catch(error) {
            console.log('Submit Error', error)
        }
    }

    return (
        <Layout>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>New Draft</h1>
                    <input 
                    autoFocus
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title'
                    type='text'
                    value={title}
                    />
                    <textarea 
                    cols={50}
                    onChange={e => setContent(e.target.value)}
                    placeholder='Content'
                    rows={8}
                    value={content}
                    />
                    <input disabled={ !content || !title } type='submit' value='Create' />
                    <a className='back' href='#' onClick={() => Router.push('/')}>
                        Cancel  
                    </a>
                </form>
            </div>
            <style jsx>{`
                .page {
                background: white;
                padding: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                input[type='text'],
                textarea {
                width: 100%;
                padding: 0.5rem;
                margin: 0.5rem 0;
                border-radius: 0.25rem;
                border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }

                input[type='submit'] {
                background: #ececec;
                border: 0;
                padding: 1rem 2rem;
                }

                .back {
                margin-left: 1rem;
                }
            `}</style>
        </Layout>
    )
}

export default Draft