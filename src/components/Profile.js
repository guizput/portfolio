import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import image from '../../assets/profile.jpg';

const Profile = () => {
  return (
    <div className="rounded-lg bg-white shadow-lg p-5 pb-8">
      <img src={image} alt="Guillaume Duran" className="rounded-lg h-80 w-full object-cover object-left"/>
      <h1 className="text-2xl text-gray-900 mt-4 font-semibold font-montserrat">Guillaume Duran</h1>
      <h5 className=" text-gray-500">Front-end developer</h5>
      <div className='mt-4'>
        <div className='flex items-center'>
          <EnvelopeIcon className='h-4 w-4 text-gray-700 mr-2 inline-block' /> <a className='text-gray-700' href="mailto:contact@me.com">contact@me.com</a>
        </div>
        <div className='flex items-center mt-1'>
          <PhoneIcon className='h-4 w-4 text-gray-700 mr-2 inline-block' /> <a className='text-gray-700' href="tel:(+33)6 XX XX XX XX">(+33)6 XX XX XX XX</a>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque ipsa quod, eaque enim ex sed adipisci omnis eveniet modi facere rerum provident aspernatur, assumenda maxime, velit aliquid animi odio?</p>
      </div>
    </div>
  );
};

export default Profile;
