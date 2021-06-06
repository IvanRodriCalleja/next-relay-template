import { render } from '@testing-library/react';

import { MyComponent } from '../MyComponent';

describe('', () => {
	it('Should render MyComponent', () => {
		const { getByText } = render(<MyComponent name="test" />);
		const text = getByText('MyComponent test');
		expect(text).not.toBeNull();
	});
});

//TODO: Extend expect with react-testing-library
