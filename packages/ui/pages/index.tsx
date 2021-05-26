import { NextPage } from 'next';

import { MyComponent } from 'monorepo-components';

const Index: NextPage = () => (
	<div>
		Index page <MyComponent name="custom" />
	</div>
);

export default Index;
