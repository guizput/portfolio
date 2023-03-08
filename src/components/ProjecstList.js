import Projects from './Projects.js';

const ProjectsList = () => {

    const projects = [
        {
            id: 1,
            img: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FtodoThumbnail.png%3Falt%3Dmedia%26token%3D67a62272-6021-49de-ab19-cda0344d643c&w=750&q=75',
            title: 'Todo App',
            desc: 'A simple Todo App built with React and Tailwind CSS',
            demoLink: 'https://main--bright-hotteok-253247.netlify.app/',
            codeLink: 'https://github.com/guizput/todo-app'
        },
        {
            id: 2,
            img: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FwindbnbThumbnail.png%3Falt%3Dmedia%26token%3D183d7d36-d216-4d30-9732-aa6e4ab0e8a5&w=750&q=75',
            tags: '#React #TailwindCSS',
            title: 'Windbnb',
            desc: 'I love airbnb UI, it is so modern and clean. In this project, I built a similar UI to airbnb - windbnb.',
            demoLink: 'https://main--magnificent-daffodil-30e52e.netlify.app/',
            codeLink: 'https://github.com/guizput/windbnb'
        },
        {
            id: 3,
            img: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FEdieHomageThumbnail.png%3Falt%3Dmedia%26token%3D72c573b5-6389-425c-b947-de63f0f5b2ef&w=640&q=75',
            tags: '#React #TailwindCSS',
            title: 'Edie Home Page',
            desc: 'Made with ParcelJS, SASS and a bit of Javascript for the menu',
            demoLink: 'https://main--wonderful-kulfi-a14ed7.netlify.app/',
            codeLink: 'https://github.com/guizput/edie-homepage'
        },
        {
            id: 4,
            img: 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCheckoutThumbnail.png%3Falt%3Dmedia%26token%3Dc7ffdbe3-7206-44f2-b1e6-a6b99bf81901&w=640&q=75',
            tags: '#HTML #CSS #responsive',
            title: 'Checkout page',
            desc: 'Crafted with SASS',
            demoLink: 'https://63dd65161659c4007649451a--glittery-mousse-e7ae65.netlify.app/',
            codeLink: 'https://github.com/guizput/checkout-page'
        }
    ];

    return (
        <div className='flex flex-col space-y-8 mt-8'>
            <div className="rounded-lg bg-white shadow-lg p-5">
                <h2 className="text-gray-500 text-lg">Projects ({projects.length})</h2>
            </div>
            <Projects projects={projects} />
        </div>
     );
}
 
export default ProjectsList;
