
const Footer: React.FC = () => {
  return (
    <footer className='absolute bottom-0 w-full bg-neutral-100'>
        <p className='py-3 px-8 text-sm text-slate-600'>INDIA-CANADA</p>
        <div className='flex py-3 px-8'>
            <ul className='flex [&>*]:mr-6 text-sm text-slate-600'>
                <li>About</li>
                <li>Advertising</li>
                <li>Business</li>
                <li>Now Search works</li>
            </ul>
            <ul className='flex ml-auto [&>*]:ml-6 text-sm text-slate-600'>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Settings</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer