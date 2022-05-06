import home from '../../assets/header/home.png';
import portfolio from '../../assets/header/portfolio.png';
import contact from '../../assets/header/contact.png';
import skills from '../../assets/header/skills.png';

export interface Item {
	icon: string,
	title: string,
	href: string
}

export const items: Item[] = [
	{
		title: 'inicio',
		icon: home,
		href: '#inicio'
	},
	{
		title: 'Habilidades',
		icon: skills,
		href: '#habilidades'
	},
	{
		title: 'proyectos',
		icon: portfolio,
		href: '#proyectos'
	},
	{
		title: 'contacto',
		icon: contact,
		href: '#contacto'
	}
]