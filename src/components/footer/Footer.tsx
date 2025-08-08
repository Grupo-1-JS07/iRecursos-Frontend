import { GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-white text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            iRecursos | &copy; {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes:</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/Grupo-1-JS07/" target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer