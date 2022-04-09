import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="flex items-start justify-start w-full h-24 border-t bg-emerald-500">
      <nav>
        <p className='m-2'>@2021</p>
        <Link href='/careers'>
          <a>Careers</a>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer