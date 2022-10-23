import React from 'react';
import ContainerBlock from '@components/ContainerBlock';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';

export default function about() {
	return (
		<ContainerBlock>
			<AboutMe />
			<Experience />
		</ContainerBlock>
	);
}
