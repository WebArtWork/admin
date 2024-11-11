export const commerceproductFormComponents = {
	formId: 'commerceproduct',
	title: 'Product',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill product title'
				},
				{
					name: 'Label',
					value: 'Title'
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill product description'
				},
				{
					name: 'Label',
					value: 'Description'
				}
			]
		},
		{
			name: 'Number',
			key: 'price',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill product price'
				},
				{
					name: 'Label',
					value: 'Price'
				}
			]
		},
		{
			name: 'Select',
			key: 'priceType',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill product price type'
				},
				{
					name: 'Label',
					value: 'Price Type'
				},
				{
					name: 'Items',
					value: [
						'kg',
						'gm',
						'piece',
						'dozen',
						'pack',
						'slice',
						'box',
						'tray'
					]
				}
			]
		}
	]
};
