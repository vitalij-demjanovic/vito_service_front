import Logo from '@/app/auth/components/Logo';
export default function SignInPage() {
	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<div className='text-center'>
				<Logo />
				<form className='flex flex-col mt-5'>
					<input
						name='email'
						type='email'
						placeholder='hello@me.com'
						className='rounded-xl p-3 mb-5 text-black'
					/>
					<input name='password' type='password' className='rounded-xl mb-5 p-3 text-black' />
					<button type='submit' color='gray' className='p-3 w-full bg-red-600 rounded-xl'>
						Prihláasiť
					</button>
				</form>
			</div>
		</div>
	);
}
