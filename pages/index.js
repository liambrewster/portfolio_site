import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
import FavouriteServices from '../components/FavouriteServices';
import FavouriteProjects from '../components/FavouriteProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';

export default function Home({ repositories }) {
	return (
		<ContainerBlock
			title='Liam Brewster - Developer, Designer, Consultant, Marketeer'
			description='Need a website designed for your business? An interesting web developement project? Maybe a small update? Let us focus on creating your website that performs well in search engine rankings.'
		>
			<Hero />
			<FavouriteServices />
			<FavouriteProjects />
			{/* <LatestCode repositories={repositories} /> */}
		</ContainerBlock>
	);
}

export const getServerSideProps = async () => {
	// console.log(process.env.GITHUB_AUTH_TOKEN);
	let token = process.env.GITHUB_AUTH_TOKEN;

	const repositories = await getLatestRepos(userData, token);
	// console.log('REPOSITORIES', repositories);

	return {
		props: {
			repositories,
		},
	};
};
