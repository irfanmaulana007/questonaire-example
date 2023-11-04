import { IQuestion } from './type'

export default function Question({ label, withCheckbox }: IQuestion) {
    return (
        <div className='flex items-center gap-x-2'>
            {withCheckbox && <input type='checkbox' />}
            {label ? (
                <p>{label}</p>
            ) : (
                <p>
                    Lainnya: <input type='text' className='border border-gray-600 rounded' />
                </p>
            )}
        </div>
    )
}
