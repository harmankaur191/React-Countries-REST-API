import ThemeButton from './ThemeButton'

export default function Homepage(){
    return(
        <div className='min-w-full flex flex gap-10 p-5 justify-between shadow-lg shadow-black/50'>
            <h1>Where in the World?</h1>
            <ThemeButton />
        </div>
    )
}