import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Profile = () => {
  return (
    <div className="rounded-xl bg-white shadow-lg p-5">
      <img src="https://picsum.photos/800/800" alt="Guillaume Duran" className="rounded-xl"/>
      <h1 className="text-2xl mt-4 font-semibold font-montserrat">Guillaume Duran</h1>
      <h5 className="text-base text-gray-500">Front-end developer</h5>
      <div className='mt-4'>
        <div className='flex items-center'>
          <EnvelopeIcon className='h-4 w-4 text-gray-700 mr-2 inline-block' /> <a className='text-gray-700' href="mailto:guillaumeduran2@gmail.com">guillaumeduran2@gmail.com</a>
        </div>
        <div className='flex items-center mt-1'>
          <PhoneIcon className='h-4 w-4 text-gray-700 mr-2 inline-block' /> <a className='text-gray-700' href="tel:(+33)6 68 92 91 41">(+33)6 68 92 91 41</a>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque ipsa quod, eaque enim ex sed adipisci omnis eveniet modi facere rerum provident aspernatur, assumenda maxime, velit aliquid animi odio?</p>
      </div>
    </div>
  );
};

export default Profile;
