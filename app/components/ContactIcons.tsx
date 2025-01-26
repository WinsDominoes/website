import * as icons from 'simple-icons';
import FediverseIcon from './Extra/Fediverse';
import PixelfedIcon from './Extra/Pixelfed';

let ContactIcons = () => {
    return (
        <ul className="flex justify-center sm:space-x-5 max-sm:grid max-sm:grid-cols-3 max-sm:gap-4">
            <li>
                <a href="https://git.winscloud.net/winsdominoes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }
                        dangerouslySetInnerHTML={{ __html: icons.siForgejo.svg }}>
                    </i>
                </a>
            </li>
            <li>
                <a href="https://github.com/WinsDominoes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }
                        dangerouslySetInnerHTML={{ __html: icons.siGithub.svg }}>
                    </i>
                </a>
            </li>
            <li>
                <a href="https://fedi.winscloud.net/@winsdominoes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }>
                        <FediverseIcon />
                    </i>
                </a>
            </li>
            <li>
                <a href="https://p.winscloud.net/@winsdominoes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }>
                        <PixelfedIcon />
                    </i>
                </a>
            </li>
            <li>
                <a href="https://peertube.winscloud.net/c/wins_dominoes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }
                        dangerouslySetInnerHTML={{ __html: icons.siPeertube.svg }}>
                    </i>
                </a>
            </li>
            <li>
                <a href="https://matrix.to/#/@winsdominoes:matrix.winscloud.net" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <i 
                        className="w-7 h-7 transition ease-in-out delay-60 opacity-60 hover:opacity-100 hover:scale-105 duration-300"
                        style={
                            {['width']: '35px', ['height']: '35px', ['fill']: 'white', ['display']: 'inline-block'}
                        }
                        dangerouslySetInnerHTML={{ __html: icons.siMatrix.svg }}>
                    </i>
                </a>
            </li>
        </ul>
    )
}

export default ContactIcons;
