import ThemeButton from './ThemeButton'

export default function Homepage(){
    return(
        <div className='min-w-full flex flex gap-10 p-5 justify-between shadow-[0_0_15px_rgba(0,0,0,0.25)]'>
            <h1>Where in the World?</h1>
            <ThemeButton />
        </div>
    )
}