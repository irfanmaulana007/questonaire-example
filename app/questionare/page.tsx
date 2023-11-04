'use client'

import { useRouter } from 'next/navigation'

import { useState } from 'react'
import Question from '../components/question'

import QUESTIONS from './../../public/questions.json'

export default function QuestionairePage() {
    const router = useRouter()
    const [currentCategory, setCurrentCategory] = useState<number>(1)

    const handleNextCategory = () => {
        if (currentCategory === QUESTIONS.length) router.push('result')
        else setCurrentCategory((currentCategory) => currentCategory + 1)
    }
    const handlePreviousCategory = () =>
        setCurrentCategory((currentCategory) => currentCategory - 1)

    return (
        <div className='min-h-screen flex justify-center items-center p-40'>
            <div className='h-full w-full border border-gray-300 rounded-xl'>
                <div className='border-b border-gray-300 p-2'>
                    {currentCategory} dari {QUESTIONS.length} kategori
                </div>
                <div className='flex flex-col gap-y-2 p-2'>
                    {QUESTIONS[currentCategory - 1].lists.map((list, key) =>
                        list.questions.map((questionItem) => {
                            return (
                                <>
                                    <Question key={key} label={questionItem.label} withCheckbox />
                                    <div className='pl-5'>
                                        {questionItem.questions.map((item, key) => {
                                            return (
                                                <>
                                                    <Question key={key} label={item.label} />
                                                    <div className='flex flex-col gap-y-2 pl-5'>
                                                        {item.answers.map((answer) => (
                                                            <Question
                                                                key={key}
                                                                label={answer.label}
                                                                withCheckbox
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        }),
                    )}
                </div>
                <div className='w-full flex gap-x-4 justify-center cursor-pointer'>
                    {currentCategory > 1 && (
                        <div
                            className='flex items-center justify-center bg-blue-400 rounded px-4 py-2'
                            onClick={handlePreviousCategory}>
                            <p>Previous</p>
                        </div>
                    )}
                    <div
                        className='flex items-center justify-center bg-blue-400 rounded px-4 py-2'
                        onClick={handleNextCategory}>
                        <p>Next</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
