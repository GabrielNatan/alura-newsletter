import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ToggleTheme = () => {
    const Toggle = () => {
        document.documentElement.classList.toggle('dark')
    }
    return <div className="hidden sm:block">
        <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={Toggle}/>
        <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={Toggle}/>
    </div>
}

export default ToggleTheme