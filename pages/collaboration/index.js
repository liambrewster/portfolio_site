import React from 'react';
import ContainerBlock from '@components/ContainerBlock';
import Services from '@components/Services';
import ServicesTile from '@components/ServicesTile';

export default function about() {
	return (
		<ContainerBlock>
			<Services />
			<ServicesTile />
		</ContainerBlock>
	);
}
