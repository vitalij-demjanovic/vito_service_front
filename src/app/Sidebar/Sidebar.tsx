import Image from 'next/image';
import Avatar from './avatar.jpg';
import { IoClipboard, IoCarSport, IoLogOut } from 'react-icons/io5';
import Link from 'next/link';
export default function Sidebar() {
	return (
		<div className='bg-primary h-screen p-8 flex flex-col justify-between rounded-r-[30px] mr-16'>
			<div>
				<div className='flex items-center mb-16'>
					<Image className='rounded-full mr-3' src={Avatar} alt='avatar' width={80} height={80} />
					<div>
						<p className='text-base'>Vitalij Demjanovič</p>
						<p className='text-sm'>Servisný technik</p>
					</div>
				</div>
				<ul>
					<li className='flex items-center text-base mb-5'>
						<IoClipboard className='mr-3 text-2xl' />
						<Link href='/'>Súhrn</Link>
					</li>
					<li className='flex items-center text-base'>
						<IoCarSport className='mr-3 text-2xl' />
						<Link href='/road'>Cesta</Link>
					</li>
				</ul>
			</div>
			<button className='flex items-center text-base'>
				<IoLogOut className='text-3xl mr-3' />
				Odhlásiť
			</button>
		</div>
	);
}
